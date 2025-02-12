import type { Ref } from 'vue'
import { isRef, onUnmounted, unref, watch } from 'vue'

type EventMap = HTMLElementEventMap & DocumentEventMap & WindowEventMap & MediaQueryListEventMap

export function useEventListener<K extends keyof EventMap>(
  target: Ref<EventTarget | null> | EventTarget,
  event: K,
  handler: (event: EventMap[K]) => void,
): () => void {
  const eventHandler = (event: Event) => {
    handler(event as EventMap[K])
  }
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, eventHandler)
      value?.addEventListener(event, eventHandler)
    })
  }
  else {
    onMountedOrActivated(() => {
      target.addEventListener(event, eventHandler)
    })
  }

  const removeEventListener = () => {
    unref(target)?.removeEventListener(event, eventHandler)
  }

  onUnmounted(() => {
    removeEventListener()
  })

  return removeEventListener
}

export default useEventListener
