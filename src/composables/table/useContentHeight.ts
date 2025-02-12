import type { Ref } from 'vue'

const headerHeightRef = ref(0)
const logoHeightRef = ref(0)

export function useLayoutHeight() {
  const setHeaderHeight = (val: number) => {
    headerHeightRef.value = val
  }

  const setLogoHeight = (val: number) => {
    logoHeightRef.value = val
  }

  return { headerHeightRef, logoHeightRef, setHeaderHeight, setLogoHeight }
}

export function getEl(element: any): Nullable<HTMLDivElement> {
  if (element == null)
    return null

  return (element instanceof HTMLDivElement ? element : element.$el) as HTMLDivElement
}

export function useContentHeight(anchorRef: Ref, flag: boolean, offsetHeight = 0) {
  const contentHeight: Ref<Nullable<number>> = ref(null)
  const targetIsVisible = ref(true)
  useIntersectionObserver(anchorRef, ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  })
  const { top, height } = useElementBounding(anchorRef)
  const calcContentHeight = () => {
    if (!flag)
      return

    setTimeout(() => {
      const wrapperEl = getEl(unref(anchorRef))
      if (!wrapperEl)
        return
      if (!targetIsVisible.value)
        return
      const bottomIncludeBody = height.value - top.value
      contentHeight.value = bottomIncludeBody - offsetHeight
    }, 0)
  }

  // onMountedOrActivated(() => {
  //   nextTick(() => {
  //     calcContentHeight();
  //   });
  // })

  useWindowSizeFn(
    () => {
      calcContentHeight()
    },
    50,
    { immediate: true },
  )

  return {
    contentHeight,
    calcContentHeight,
  }
}
