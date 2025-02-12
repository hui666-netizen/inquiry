import type { Ref } from 'vue'
import { ref } from 'vue'

export function useIsScroll() {
  const hasScrollbar = ref(false)

  const update = (elementRef: Ref<HTMLDivElement>) => {
    if (!elementRef.value)
      return
    const element = elementRef.value
    hasScrollbar.value = element.scrollHeight > element.clientHeight
  }

  return { hasScrollbar, update }
}
