import { isObject } from '@sjzy/utils'

/**
 * @description 计算文字宽度
 */
export function calcWordsWidth(words: string) {
  let wordsWidth = 0
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.font
      = '12px -apple-system, "blinkmacsystemfont", "segoe ui", "pingfang sc", "hiragino sans gb", "microsoft yahei", "helvetica neue", "helvetica", "arial", sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"'
    wordsWidth = ctx.measureText(words).width
  }
  return wordsWidth
}

/**
 * @description 数据对比增加isDeleted
 * @param newArr 新数组
 * @param oldArr 原始数组
 */
export function getIsDeletedList(newArr: any, oldArr: any, key = 'id') {
  const newIds = newArr.map((i: any) => i[key])
  const arr = [...newArr]
  ;(oldArr || [])?.forEach((ele: any) => {
    if (!newIds.includes(ele[key])) {
      arr.push({
        ...ele,
        isDeleted: true,
      })
    }
  })
  return arr
}

/** 初始化清除值 */
export function initResetFields(form: Recordable) {
  Object.keys(form).forEach((field) => {
    if (isObject(form[field])) {
      initResetFields(form[field])
    }
    else {
      if (Array.isArray(form[field]))
        form[field] = []
      else form[field] = undefined
    }
  })
}

/** 异步导出跳转 */
export function exportLink(msg: string = t('导出任务已提交')) {
  const url = `${window.origin}/systemInfo/systemTasks`
  $baseNotify(
    `${msg} <a href="${url}">点击查看进度</a>`,
    t('提示'),
    'success',
    undefined,
    undefined,
    true,
  )
}

/** 根据字段获取对象值（可深层） */
export function getValueField(filed: string, obj = {}) {
  const key = filed.split('.')
  let tmp: any = obj
  for (const value of key) tmp = (tmp || {})[value]

  return tmp
}

/** 根据字段设置对象值（可深层） */
export function setValueField(filed: string, data: any, obj: Record<string, any> = {}) {
  const key = filed.split('.')
  key.reduce((a, b, i) => {
    if (i === key.length - 1)
      return (a[b] = data)

    return (a[b] = a[b] || {})
  }, obj)
}
