/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */

import { ElMessage } from 'element-plus'
import type { Directive, DirectiveBinding } from 'vue'

type ElType = {
  copyData: string | number
  __handleClick__: any
} & HTMLElement

function mounted(el: ElType, binding: DirectiveBinding<any>) {
  el.copyData = binding.value
  el.addEventListener('click', handleClick)
}
function updated(el: ElType, binding: DirectiveBinding) {
  el.copyData = binding.value
}
function beforeUnmount(el: ElType) {
  el.removeEventListener('click', el.__handleClick__)
}

const copy: Directive = {
  mounted,
  updated,
  beforeUnmount,
}

function handleClick(el: any) {
  const input = document.createElement('input')
  input.value = el.copyData.toLocaleString()
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage({
    type: 'success',
    message: '复制成功',
  })
}

export default copy
