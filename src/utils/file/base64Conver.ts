/**
 * @description: base64 to blob
 */
export function dataURLtoBlob(base64Buf: string): Blob {
  const arr = base64Buf.split(',')
  const typeItem = arr[0]
  const mime = typeItem.match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) u8arr[n] = bstr.charCodeAt(n)

  return new Blob([u8arr], { type: mime })
}

/**
 * img url to base64
 * @param url
 */
export function urlToBase64(url: string, mineType?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>
    const ctx = canvas!.getContext('2d')

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = function () {
      if (!canvas || !ctx)
        return reject(new Error('找不到canvas标签'))

      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mineType || 'image/png')
      canvas = null
      resolve(dataURL)
    }
    img.src = url
  })
}

export function dataURItoBlob(base64Data: string) {
  let byteString
  if (base64Data.split(',')[0].includes('base64'))
    byteString = atob(base64Data.split(',')[1])
  // base64 解码
  else byteString = unescape(base64Data.split(',')[1])

  const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0] // mime类型 -- image/png

  // var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
  // var ia = new Uint8Array(arrayBuffer);//创建视图
  const ia = new Uint8Array(byteString.length) // 创建视图
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i)

  const blob = new Blob([ia], {
    type: mimeString,
  })
  return blob
}

export function BlobToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

type CallFn = (file: File) => void
export async function FileUrlToBlob(url: string, fileName: string, callback: CallFn) {
  // 创建XMLHttpRequest对象
  const xhr = new XMLHttpRequest()
  // 前两个参数固定，第三个参数true时是异步，false时是同步
  xhr.open('get', url, true)
  // 选定输出格式为blob格式
  xhr.responseType = 'blob'
  // onload后回调this本身  onload本身不携带参数
  xhr.onload = function () {
    const imgFile = new File([this.response], fileName, { type: this.response.type })
    callback(imgFile)
  }
  // 关闭xhr  一定要加
  xhr.send()
}
