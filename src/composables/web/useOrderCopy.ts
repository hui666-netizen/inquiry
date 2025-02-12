import { unref } from 'vue'
import { useCopyToClipboard } from './useCopyToClipboard'

const { clipboardRef, copiedRef } = useCopyToClipboard()

function copySuccessFn() {
  if (unref(copiedRef)) {
    $baseMessage('复制成功!', 'success')
    clipboardRef.value = ''
  }
}
export function useOrderCopy() {
  /** 订单复制事件 */
  const orderCopyFn = (label: any, rows: any) => {
    if (rows.length === 0)
      return $baseMessage('请选择要复制的订单!', 'error')

    if (rows.length > 0) {
      let copyValue = ''
      rows.forEach((item: any, index: any) => {
        if (item[label])
          copyValue += index < rows.length - 1 ? `${item[label]}\x0D` : item[label]
      })
      clipboardRef.value = copyValue
    }
    copySuccessFn()
  }

  /** 袋号复制事件 */
  const packageCopyFn = (data: string[]) => {
    if (data.length === 0)
      return $baseMessage('请选择要复制的袋号!', 'error')
    else clipboardRef.value = data.join('\x0D')

    copySuccessFn()
  }

  /** 复制字符串 */
  const stringCopyFn = (data: string) => {
    clipboardRef.value = data
    copySuccessFn()
  }

  return {
    orderCopyFn,
    packageCopyFn,
    stringCopyFn,
  }
}
