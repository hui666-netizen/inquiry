<script lang="ts" setup>
defineProps({
  layout: {
    type: String,
    default: '',
  },
  showTabs: {
    type: Boolean,
    default() {
      return true
    },
  },
})
</script>

<template>
  <div class="sjzy-nav flex-b bg-[var(--sjzy-bg)]">
    <div class="left-panel">
      <LayoutTabsLabel v-show="showTabs" />
    </div>

    <div class="right-panel p-l-10px">
      <LayoutTabsLabelMore v-show="showTabs" />
      <LayoutRefresh class="h-full" />
      <LayoutFullScreen class="h-full" />
      <!-- <SjzyNotice />
      <LayoutDark /> -->
      <!-- <LayoutLanguage class="h-full hover:bg-[#f6f6f6] dark:text-[#fff] dark:hover:bg-[#333]" /> -->
      <LayoutTheme class="h-full" />
      <LayoutAvatar class="h-full hover:bg-[#f6f6f6] dark:text-[#fff] dark:hover:bg-[#333]" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sjzy-nav {
  position: relative;
  height: var(--sjzy-nav-height);
  padding-right: var(--sjzy-base-padding);
  padding-left: var(--sjzy-base-padding);
  overflow: hidden;
  user-select: none;
  box-shadow: var(--sjzy-box-shadow);

  .left-panel {
    display: flex;
    flex: 1;
    place-items: center center;
    min-width: 840px;
    height: var(--sjzy-nav-height);
    overflow: hidden;

    :deep() {
      .fold-unfold {
        margin-right: 6px;
      }
    }
  }

  .right-panel {
    display: flex;
    place-content: center flex-end;
    align-items: center;
    width: max-content;
    height: var(--sjzy-nav-height);

    :deep() {
      .icon-btn {
        padding: 0 10px;
        color: var(--el-color-grey);
        cursor: pointer;
      }

      button {
        [class*='ri-'] {
          margin-left: 0;
          color: var(--el-color-white);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
