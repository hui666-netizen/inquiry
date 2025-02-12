/**
 * v-selfDestruction
 * 条件自动销毁
 */
import type { Directive, DirectiveBinding } from 'vue'

function created(_: HTMLElement, binding: DirectiveBinding) {
  console.log(binding, 'binding')
}

const selfdestruction: Directive = {
  created,
}

export default selfdestruction
