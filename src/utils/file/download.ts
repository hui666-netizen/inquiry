// import { openWindow } from '..';
import type { AxiosHeaders } from 'axios'
import dayjs from 'dayjs'
import { dataURLtoBlob, urlToBase64 } from './base64Conver'

/**
 * Download online pictures
 * @param url
 * @param filename
 * @param mime
 * @param bom
 */
export function downloadByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart) {
  urlToBase64(url).then((base64) => {
    downloadByBase64(base64, filename, mime, bom)
  })
}

/**
 * Download pictures based on base64
 * @param buf
 * @param filename
 * @param mime
 * @param bom
 */
export function downloadByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart) {
  const base64Buf = dataURLtoBlob(buf)
  downloadByData(base64Buf, filename, mime, bom)
}

/**
 * 根据Content-Disposition获取响应头文件名称
 * @param contentDisposition
 */
export function getFilename(contentDisposition?: string) {
  if (!contentDisposition)
    return
  const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
  const matches = filenameRegex.exec(contentDisposition)
  let filename = ''

  if (matches != null && matches[1])
    filename = matches[1].replace(/['"]/g, '')

  return filename
}

/**
 * Download according to the background interface file stream
 * @param {*} data
 * @param {*} name
 * @param {*} mime
 * @param {*} bom
 * @param {*} headers
 */
export async function downloadByData(
  data: BlobPart,
  name: string,
  mime?: string,
  bom?: BlobPart,
  headers?: AxiosHeaders,
) {
  const res: any = await blobToJson(data)
  if (res) {
    $baseMessage(res.msg, 'error')
    return
  }

  let filename = name
  // 根据请求头获取文件名
  if (headers) {
    const contentDisposition = decodeURI(headers['content-disposition'])
    filename = contentDisposition.split('filename=')[1]?.split(';')[0] || name
  }

  const blobData = typeof bom !== 'undefined' ? [bom, data] : [data]
  const blob = new Blob(blobData, { type: mime || 'application/octet-stream' })
  const navigator = window.navigator as any
  if (typeof navigator.msSaveBlob !== 'undefined') {
    navigator.msSaveBlob(blob, filename)
  }
  else {
    const blobURL = window.URL.createObjectURL(blob)
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', filename)
    if (typeof tempLink.download === 'undefined')
      tempLink.setAttribute('target', '_blank')

    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobURL)
  }
}

/**
 * 根据url下载文件
 * @param {*} url
 * @param {*} filename
 * @param {*} mime
 * @param {*} bom
 */
export function downloadByUrlData(url: string, filename: string, mime?: string, bom?: BlobPart) {
  // window.URL = window.URL || window.webkitURL;

  const xhr = new XMLHttpRequest()

  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    downloadByData(xhr.response, filename, mime, bom)
  }
  xhr.send()
}

/**
 * Download file according to file address
 * @param {*} sUrl
 */
export function downloadByUrl({
  url,
  target = '_self',
  fileName,
}: {
  url: string
  target?: TargetContext
  fileName?: string
}): boolean {
  const isChrome = window.navigator.userAgent.toLowerCase().includes('chrome')
  const isSafari = window.navigator.userAgent.toLowerCase().includes('safari')

  if (/iP/.test(window.navigator.userAgent)) {
    console.error('Your browser does not support download!')
    return false
  }
  if (isChrome || isSafari) {
    const link = document.createElement('a')
    link.href = url
    link.target = target

    if (link.download !== undefined)
      link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length)

    if (document.createEvent) {
      const e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }
  if (!url.includes('?'))
    url += '?download'

  // openWindow(url, { target });
  return true
}
type CallFn = (data: string | ArrayBuffer | null | undefined) => void
export function blobToDataURI(blob: any, callback: CallFn) {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  reader.onload = function (e) {
    const { target } = e
    callback(target?.result)
  }
}

export function blobToJson(blob: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string)
        resolve(json)
      }
      catch {
        resolve(false)
      }
    }
    reader.onerror = reject
    reader.readAsText(blob)
  })
}

export function downloadFile(url: string, filename: string) {
  if (!url)
    return
  // const baseUrl = url.indexOf("http") > - 1 ? "" : define.comUrl;
  const link = document.createElement('a')
  link.setAttribute('download', filename || url.substring(url.lastIndexOf('/') + 1, url.length))
  link.setAttribute('href', url)
  link.click()
}

// 为了给每一个导出的文件名拼上一个时间
export function setDownTemplateName(templateName: string) {
  const fileArr = templateName.split('.')
  // const copyFileArr = cloneDeep(fileArr)
  const dateTime = dayjs(new Date()).format('YYYYMMDDHHmmss')
  let fileName = ''
  const length = fileArr.length
  for (let index = 0; index < length; index++) {
    const item = fileArr[index]

    if (index === length - 1)
      fileName += `${dateTime}.${item}`
    else fileName += item
  }
  // 目前只处理 /
  return fileName.replace(/\//g, '')
  // return fileName
}
