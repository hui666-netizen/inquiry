<!-- 纵向布局 -->
<script lang="ts" setup>
defineProps({
  collapse: {
    type: Boolean,
    default() {
      return false
    },
  },
  showTabs: {
    type: Boolean,
    default() {
      return true
    },
  },
})
const headerRef = ref<HTMLDivElement>()
</script>

<template>
  <div
    class="sjzy-layout-vertical"
    :class="{
      'no-tabs-bar': !showTabs,
    }"
  >
    <LayoutSideBar />
    <div class="sjzy-main">
      <div ref="headerRef" class="sjzy-layout-header vertival-header">
        <LayoutNav />
      </div>
      <div class="vertival-body">
        <LayoutRouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sjzy-layout-vertical {
  display: flex;
  width: 100%;
  height: 100%;

  .sjzy-main {
    width: 100%;
    height: 100%;
    padding-top: var(--sjzy-nav-height);
    padding-left: var(--sjzy-left-menu-width);
    transition: var(--sjzy-layout-transition);
    transition-property: padding;

    .vertival-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1998;
      width: 100%;
      padding-left: var(--sjzy-left-menu-width);
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      transition: var(--sjzy-layout-transition);
      transition-property: padding;
    }

    /* 默认背景透明 */
    .vertival-body {
      width: 100%;
      height: 100%;
      padding-bottom: var(--sjzy-container-padding);
      border-radius: var(--sjzy-body-radius);

      :deep() {
        & > div {
          height: 100%;
          overflow: overlay;
        }

        & > div[class*='-container'] {
          padding: var(--sjzy-container-padding);
          padding-bottom: 0;
        }
      }
    }
  }
}
</style>
