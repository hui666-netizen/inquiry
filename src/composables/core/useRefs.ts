import type { Ref } from 'vue'
import { onBeforeUpdate, ref } from 'vue'

type refsType = {
  [key: string]: HTMLElement
}
export function useRefs(): [Ref<refsType>, (index: number) => (el: HTMLElement) => any] {
  const refs: Ref<refsType> = ref({})

  onBeforeUpdate(() => {
    refs.value = {}
  })

  const setRefs = (index: number) => (el: HTMLElement) => {
    refs.value[index] = el
  }

  return [refs, setRefs]
}
