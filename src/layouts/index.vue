<script lang="ts" setup>
import SjzyLayoutColumn from './SjzyLayoutColumn/index.vue'
import SjzyLayoutHorizontal from './SjzyLayoutHorizontal/index.vue'
import SjzyLayoutVertical from './SjzyLayoutVertical/index.vue'
import { handleActivePath } from '@/router'

defineOptions({
  name: 'Layouts',
})

/** 布局组件 */
const layoutComponents: {
  [key: string]: typeof SjzyLayoutColumn | typeof SjzyLayoutHorizontal | typeof SjzyLayoutVertical
} = {
  column: SjzyLayoutColumn,
  horizontal: SjzyLayoutHorizontal,
  vertical: SjzyLayoutVertical,
}

const route = useRoute()
const settingsStore = useSettingsStore()
const { device, collapse, theme } = storeToRefs(settingsStore)
const { toggleCollapse } = settingsStore
const routesStore = useRoutesStore()
const { tab, activeMenu } = storeToRefs(routesStore)

/** 自适应切换 */
const resizeBody = useDebounceFn(() => {
  if (theme.value.layout !== 'vertical')
    return
  const width = document.body.getBoundingClientRect().width - 1
  if (!collapse.value && width < 1600)
    toggleCollapse()
  if (collapse.value && width > 1600)
    toggleCollapse()
}, 150)

/** 清除监听 */
const cleanup = useEventListener('resize', () => {
  resizeBody()
})

watch(
  route,
  () => {
    if (tab.value.data !== route.matched[0].name)
      tab.value.data = route.matched[0].name?.toString()
    // console.log(route, 'route')
    activeMenu.value.data = handleActivePath(route)
  },
  { immediate: true },
)

resizeBody()

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <div class="sjzy-wrapper dark:text-white">
    <Component
      :is="layoutComponents[theme.layout]"
      :collapse="collapse"
      :device="device"
      :fixed-header="theme.fixedHeader"
      :show-tabs="theme.showTabs"
    />
    <ElBacktop target="#micro-devops-app" />
    <ThemeDrawer />
  </div>
</template>

<style lang="scss" scoped>
.sjzy-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  [class*='sjzy-layout-'] {
    height: 100%;

    :deep() {
      .sjzy-layout-header {
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      }

      .fixed-header {
        position: fixed;
      }

      .sjzy-layout-header,
      [class*='-bar-container'] {
        transition: var(--sjzy-layout-transition);
      }
    }
  }
}
</style>
