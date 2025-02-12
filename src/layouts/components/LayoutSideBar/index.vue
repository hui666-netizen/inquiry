<script lang="ts" setup>
import { ElScrollbar } from 'element-plus'
import type { PropType } from 'vue'
import config from '@/config'

defineProps({
  layout: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: () => 'vertical',
  },
})

const settingsStore = useSettingsStore()
const { collapse } = storeToRefs(settingsStore)
const routesStore = useRoutesStore()
const { getRoutes: routes, getActiveMenu: activeMenu } = storeToRefs(routesStore)

const verticalMenusRef = ref<InstanceType<typeof ElScrollbar>>()

/** 菜单处理 */
const handleRoutes = computed(() => {
  return routes.value.flatMap((route: any) =>
    route.meta.levelHidden && route.children ? [...route.children] : route,
  )
})

function offTop(activeMenu: any, offsetParent: number): number {
  if (offsetParent > activeMenu?.offsetTop)
    return offTop(activeMenu?.offsetParent, offsetParent - activeMenu?.offsetTop || 0)
  return activeMenu?.offsetTop - offsetParent
}

// 滚动条滚动到激活菜单所在位置
function verticalMenusScroll() {
  const activeMenu: HTMLElement | null = document.querySelector(
    '.sjzy-layout-vertical .sjzy-side-bar .el-menu-item.is-active',
  )
  const innerHeight = window.innerHeight
  if (!activeMenu) {
    return false
  }
  else {
    if (verticalMenusRef.value) {
      const ot = offTop(activeMenu, innerHeight - 100) || 40
      verticalMenusRef.value?.setScrollTop(ot + 40)
    }
  }
}
onMounted(() => {
  setTimeout(() => {
    verticalMenusScroll()
  }, 300)
})
</script>

<template>
  <div
    class="sjzy-side-bar"
    :class="{ 'is-collapse': collapse, [`sjzy-side-bar-${layout}`]: true }"
  >
    <LayoutLogo />
    <LayoutMenuSearch v-if="!collapse && layout === 'vertical'" />
    <div class="menu-box flex-1 p-t-15px" :style="{ height: `calc(100% - ${44 + 50}px)` }">
      <ElScrollbar ref="verticalMenusRef">
        <ElMenu
          :collapse="collapse"
          :collapse-transition="false"
          :default-active="activeMenu.data"
          :default-openeds="config.defaultOpeneds"
          :menu-trigger="layout === 'horizontal' ? 'hover' : 'click'"
          :mode="layout"
          :unique-opened="config.uniqueOpened"
          :data-collapse="collapse"
          popper-class="sjzy-side-popper"
          background-color="var(--sjzy-menu-background)"
          text-color="var(--sjzy-menu-color-hover)"
        >
          <template v-for="(item, index) in handleRoutes" :key="index + item.name">
            <LayoutMenu v-if="!item.meta.hidden" :item="item" />
          </template>
        </ElMenu>
      </ElScrollbar>
    </div>
    <LayoutMenuSearch v-if="!collapse && layout === 'horizontal'" class="w-210px m-t-0!" />
    <!-- <SjzyVersion class="sjzy-version" />
    <SjzyFold v-if="layout !== 'horizontal'" /> -->
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .sjzy-prefix {
    display: none;
  }
}

.sjzy-side-bar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  width: var(--sjzy-left-menu-width);
  height: 100vh;
  overflow: hidden;
  background: var(--sjzy-menu-background);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  transition: var(--sjzy-layout-transition);
  transition-property: width;

  :deep() {
    .el-menu--collapse {
      width: var(--sjzy-column-collapse-width);
    }

    .el-menu {
      background: var(--sjzy-menu-background);
      border-right: 0;

      /* item样式 */
      .el-menu-item {
        position: relative;
        height: 40px;
        padding: 0;
        line-height: 40px;
        color: var(--sjzy-menu-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          content: '';
          background-color: transparent;
          border-radius: 8;
        }

        &:hover {
          color: var(--sjzy-menu-color-hover);
          background-color: var(--sjzy-menu-background-hover);
        }

        &.is-active {
          color: var(--sjzy-menu-color-hover);
          background-color: var(--sjzy-menu-background-hover);

          .sjzy-menu-item-prefix {
            background-color: var(--sjzy-menu-color-hover);
            border: 1px solid var(--sjzy-menu-color-hover);
          }

          &::after {
            height: 100%;
            background-color: var(--sjzy-color-primary);
          }
        }
      }

      /* el-sub-menu内的样式 */
      .el-sub-menu {
        .el-sub-menu__title {
          height: 40px;
          padding: 0;
          line-height: 40px;
          color: var(--sjzy-menu-color);
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: middle;

          &:hover {
            color: var(--sjzy-menu-color-hover);
            background-color: var(--sjzy-menu-background-hover);
          }
        }

        .el-menu {
          background-color: var(--sjzy-menu-sub-background);
        }

        .sjzy-prefix {
          display: inline-block;
          width: 4px;
          height: 4px;
          margin-right: 8px;
          border: 1px solid var(--sjzy-menu-color);
          border-radius: 50%;
        }
      }

      /* 固定左侧间距 */

      &--vertical:not(.el-menu--collapse, .el-menu--popup-container) {
        .el-sub-menu {
          .el-menu-item {
            padding-left: 40px !important;
          }
        }

        .el-sub-menu__title {
          padding-left: 20px !important;
        }
      }

      &--vertical.el-menu--collapse {
        .el-menu-item.is-active {
          background-color: transparent;
        }

        .el-sub-menu {
          &.is-active {
            &::before {
              position: absolute;
              left: 6px;
              width: 48px;
              height: 48px;
              content: '';
              background-color: var(--sjzy-menu-active-block-bg) !important;
              border-radius: 8px;
            }

            .el-sub-menu__title {
              color: var(--sjzy-menu-color-hover);
            }
          }

          .el-sub-menu__title {
            display: flex;
            height: 100%;
            padding: 0;

            & > div {
              z-index: 1;
              padding: 6px;

              span {
                line-height: normal;
                text-align: center;
              }
            }
          }
        }

        .el-menu-item {
          display: flex;
          height: 100%;
          padding: 6px;

          &.is-active {
            &::after {
              display: none;
            }

            &::before {
              position: absolute;
              left: 6px;
              width: 48px;
              height: 48px;
              content: '';
              background-color: var(--sjzy-menu-active-block-bg) !important;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }

  &-horizontal {
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    min-width: var(--sjzy-min-width);
    height: var(--sjzy-nav-height);
    transition: none;

    .menu-box {
      flex: 1 1 0%;
      height: 100% !important;
      padding: 0 10px;
      overflow: hidden;
    }

    .sjzy-version {
      display: flex;
      flex-direction: column;
      width: 100px;
      height: 100%;
      background-color: transparent !important;
    }

    :deep() {
      .el-menu {
        border: 0;

        .el-menu-item {
          width: auto !important;
          height: 100%;
          padding: 0 20px;

          &.is-active::after {
            display: none;
          }
        }
      }

      .el-sub-menu {
        height: 100%;
        margin-top: 0 !important;

        .el-sub-menu__title {
          height: 100% !important;
          padding: 0 35px 0 20px !important;
        }

        &.is-active .el-sub-menu__title {
          color: var(--sjzy-menu-color-hover);
          background-color: var(--sjzy-menu-background-hover);
          border-bottom: 0;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.sjzy-side-popper {
  &.el-menu--horizontal .el-menu,
  .el-menu {
    .el-menu-item {
      & > div {
        padding-left: 20px;
      }

      &.is-active,
      &:hover {
        color: var(--sjzy-menu-color-hover);
        background-color: var(--sjzy-menu-background-hover);
      }
    }

    .el-sub-menu,
    .el-menu-item {
      height: 40px;
      padding: 0;
      line-height: 40px;
      color: var(--sjzy-menu-color);
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;

      .el-sub-menu__title {
        height: 100%;
        padding-left: 20px;
        color: var(--sjzy-menu-color);

        &:hover {
          color: var(--sjzy-menu-color-hover);
          background-color: var(--sjzy-menu-background-hover);
        }
      }

      &.is-active {
        .el-sub-menu__title {
          color: var(--sjzy-menu-color-hover);
          background-color: var(--sjzy-menu-background-hover);
        }
      }
    }
  }
}
</style>
