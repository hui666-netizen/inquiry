<!-- 横向布局 -->
<script lang="ts" setup>
defineProps({
  collapse: {
    type: Boolean,
    default() {
      return false
    },
  },
  fixedHeader: {
    type: Boolean,
    default() {
      return true
    },
  },
  showTabs: {
    type: Boolean,
    default() {
      return true
    },
  },
  device: {
    type: String,
    default() {
      return 'desktop'
    },
  },
})
const { setHeaderHeight } = useLayoutHeight()

const headerRef = ref<HTMLElement | null>()

nextTick(() => {
  setHeaderHeight(unref(headerRef)?.offsetHeight || 0)
})
</script>

<template>
  <div
    class="sjzy-layout-horizontal"
    :class="{
      'sjzy-fixed': fixedHeader,
      'no-tabs-bar': !showTabs,
    }"
  >
    <div
      ref="headerRef"
      class="sjzy-layout-header"
      :class="{
        'fixed-header': fixedHeader,
      }"
    >
      <LayoutSideBar layout="horizontal" />
      <LayoutNav v-show="showTabs" />
    </div>
    <div class="sjzy-layout-body">
      <LayoutRouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sjzy-layout-horizontal {
  .sjzy-layout-header {
    width: 100%;
  }

  .sjzy-nav {
    top: var(--sjzy-nav-height);
    width: 100%;
  }

  .sjzy-layout-body {
    height: 100%;
    padding-top: calc(var(--sjzy-nav-height) + var(--sjzy-nav-height));
    padding-bottom: var(--sjzy-container-padding);

    :deep() {
      & > div[class*='-container'] {
        height: 100%;
        padding: var(--sjzy-container-padding);
        padding-bottom: 0;
        overflow: auto;
      }
    }
  }
}
</style>
