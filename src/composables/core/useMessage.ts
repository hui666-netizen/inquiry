import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import type { Action, ElMessageBoxOptions } from 'element-plus'

import type { RendererElement, RendererNode, VNode } from 'vue'
import config from '@/config/index'

/**
 * @description: 提示Message
 * @return {*}
 */
export function $baseMessage(
  message: string,
  type: 'warning' | 'success' | 'info' | 'error' = 'success',
  duration = config.messageDuration,
) {
  ElMessage({
    message,
    type,
    center: true,
    customClass: `sjzy-hey-message-${type}`,
    duration,
  })
}

/**
 * @description 全局Confirm
 * @param {string} param param
 * @param {string|VNode} param.content 消息正文内容
 * @param {string} param.title 标题
 * @param {Function} param.onOk 确认回调
 * @param {Function} param.onCancel 关闭或取消回调
 * @param {string} param.confirmButtonText 确定按钮的文本内容
 * @param {string} param.cancelButtonText 取消按钮的自定义类名
 */
export function $baseConfirm({
  content,
  title,
  onOk,
  onCancel,
  onClose,
  confirmButtonText = t('确定'),
  cancelButtonText = t('取消'),
  ...args
}: {
  content?: string | VNode<RendererNode, RendererElement>
  title?: string
  onOk?: () => void
  onCancel?: () => void
  onClose?: () => void
  confirmButtonText?: string
  cancelButtonText?: string
} & ElMessageBoxOptions) {
  ElMessageBox.confirm(
    typeof content === 'string' ? t(content || '') : content,
    t(title || '') || t('温馨提示'),
    {
      confirmButtonText,
      cancelButtonText,
      closeOnClickModal: false,
      type: 'warning',
      lockScroll: false,
      customClass: 'sjzy-hey-message-box',
      ...args,
    },
  )
    .then(() => {
      if (onOk)
        onOk()
    })
    .catch((action: Action) => {
      if (action === 'cancel' && onCancel)
        onCancel()

      if (action === 'close' && onClose)
        onClose()
    })
}

/**
 * @description 全局Notification
 * @param {string} message 说明文字
 * @param {string} title 标题
 * @param {'success'|'warning'|'info'|'error'} type 主题样式,如果不在可选值内将被忽略
 * @param {'top-right'|'top-left'|'bottom-right'|'bottom-left'} position 自定义弹出位置
 * @param duration 显示时间,毫秒
 */
export function $baseNotify(
  message: string,
  title: string,
  type: '' | 'warning' | 'success' | 'info' | 'error' = 'success',
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right',
  duration = config.messageDuration,
  dangerouslyUseHTMLString: boolean = false,
) {
  ElNotification({ title, message, type, duration, position, dangerouslyUseHTMLString })
}
