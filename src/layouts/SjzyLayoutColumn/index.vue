<!-- 分栏布局 -->
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
})

const { setHeaderHeight } = useLayoutHeight()

const headerRef = ref<HTMLElement | null>()

nextTick(() => {
  setHeaderHeight(unref(headerRef)?.offsetHeight || 0)
})
</script>

<template>
  <div
    class="sjzy-layout-column"
    :class="{
      'no-tabs-bar': !showTabs,
    }"
  >
    <LayoutSideBarColumn />
    <div
      ref="headerRef"
      class="sjzy-main"
      :class="{
        'is-collapse-main': collapse,
      }"
    >
      <div
        class="sjzy-layout-header"
        :class="{
          'fixed-header': fixedHeader,
        }"
      >
        <LayoutNav />
      </div>
      <div class="sjzy-layout-body">
        <LayoutRouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sjzy-layout-column {
  display: flex;
  width: 100%;
  height: 100%;

  .sjzy-main {
    flex: 1;
    width: 100%;
    height: 100%;
    padding-top: var(--sjzy-nav-height);
    padding-left: var(--sjzy-left-menu-width);
    transition: var(--sjzy-layout-transition);
    transition-property: padding;

    .sjzy-layout-header {
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
    .sjzy-layout-body {
      width: 100%;
      height: 100%;
      padding-bottom: var(--sjzy-container-padding);

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
