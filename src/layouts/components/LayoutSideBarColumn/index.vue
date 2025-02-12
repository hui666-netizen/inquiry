<script lang="ts" setup>
import { isExternal } from '@sjzy/utils'
import config from '@/config'
import { translateTitle } from '@/utils'
import type { SjzyRoute } from '@/types/router'

const route = useRoute() as SjzyRoute
const router = useRouter()

const settingsStore = useSettingsStore()
const { theme, collapse, language } = storeToRefs(settingsStore)
const { foldSideBar, openSideBar } = settingsStore
const routesStore = useRoutesStore()
const {
  getTab,
  getTabMenu: tabMenu,
  getActiveMenu: activeMenu,
  getRoutes: routes,
  getPartialRoutes: partialRoutes,
} = storeToRefs(routesStore)

function handleTabClick() {
  nextTick(() => {
    if (isExternal(tabMenu.value?.path || '')) {
      window.open(tabMenu.value?.path)
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
    else if (config.openFirstMenu) {
      router.push(tabMenu.value?.path || '/404')
    }
  })
}

watchEffect(() => {
  const foldUnfold: any = document.querySelector('.fold-unfold') as HTMLElement
  if (theme.value.layout === 'column' && route.meta.noColumn) {
    foldSideBar()
    if (foldUnfold)
      foldUnfold.style = 'display:none'
  }
  else {
    openSideBar()
    if (foldUnfold)
      foldUnfold.style = ''
  }
})
</script>

<template>
  <ElScrollbar
    class="sjzy-column-bar-container"
    :class="{
      'is-collapse': collapse,
      [`sjzy-column-bar-container-${theme.columnStyle}`]: true,
    }"
  >
    <LayoutLogo />
    <ElTabs v-model="getTab.data" tab-position="left" @tab-click="handleTabClick">
      <template v-for="(item, index) in routes" :key="index + item.name">
        <ElTabPane :name="item.name">
          <template #label>
            <div
              class="sjzy-column-grid flex-col"
              :class="{
                [`sjzy-column-grid-${theme.columnStyle}`]: true,
              }"
              :title="translateTitle(item.meta.title || '')"
            >
              <div :title="translateTitle(item.meta.title || '')">
                <SjzyIcon :icon-font="`${item.meta.icon}`" :size="language === 'en-US' ? 23 : 16" />
              </div>
              <span
                v-if="!item.meta.icon || language !== 'en-US'"
                style="display: block; width: 48px; margin-top: 2px; overflow: hidden"
              >
                {{ translateTitle(item.meta.title || '') }}
              </span>
            </div>
          </template>
        </ElTabPane>
      </template>
    </ElTabs>

    <ElMenu
      :default-active="activeMenu.data"
      :default-openeds="config.defaultOpeneds"
      mode="vertical"
      :unique-opened="config.uniqueOpened"
    >
      <template v-for="item in partialRoutes" :key="item.path">
        <LayoutMenu v-if="!item.meta.hidden" :item="item" />
      </template>
    </ElMenu>
    <div class="fold">
      <SjzyVersion class="version" />
      <SjzyFold />
    </div>
  </ElScrollbar>
</template>

<style lang="scss" scoped>
@use 'sass:math';

@mixin active {
  &:hover {
    background-color: var(--el-color-primary-light-9) !important;

    .fav {
      display: inline;
    }
  }

  &.is-active {
    color: var(--el-color-primary) !important;
    background-color: var(--el-color-primary-light-9) !important;

    .sjzy-menu-item-prefix {
      background-color: var(--el-color-primary);
      border: 1px solid var(--el-color-primary);
    }
  }
}

.sjzy-column-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  width: var(--sjzy-left-menu-width);
  height: 100vh;
  overflow: hidden;
  background: var(--sjzy-menu-column-background);
  box-shadow: var(--sjzy-box-shadow);

  .fold {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    width: var(--sjzy-column-collapse-width);
    color: #fff;
    background: var(--sjzy-menu-background);

    :deep() {
      .version {
        position: relative;
        bottom: 0;
        left: 0;
      }

      .fold-unfold {
        color: #fff;
      }
    }
  }

  :deep() {
    * {
      transition: var(--sjzy-layout-transition);
    }

    .el-tabs {
      box-shadow: var(--sjzy-box-shadow);
    }
  }

  &-card {
    :deep() {
      .el-tabs + .el-menu {
        left: var(--sjzy-column-collapse-width);
        width: calc(var(--sjzy-left-menu-width) - var(--sjzy-column-collapse-width));
        border: 0;
      }

      .sjzy-menu-item-prefix {
        background-color: transparent;
        border: 1px solid var(--el-text-color-primary-light-7);
      }

      .logo-container-column {
        & > div {
          width: 100%;
        }
      }

      .el-tabs {
        position: fixed;
        z-index: 2000;

        .el-tabs__header.is-left {
          margin-right: 0 !important;

          .el-tabs__nav-wrap.is-left {
            margin-right: 0 !important;
            background: var(--sjzy-menu-background);

            .el-tabs__nav-scroll {
              height: 100%;
              overflow-y: auto;

              &::-webkit-scrollbar {
                width: 0;
                height: 0;
              }
            }
          }
        }

        .el-tabs__nav {
          height: calc(100vh - 50px - 24px);
          background: var(--sjzy-menu-background);
        }

        .el-tabs__item {
          height: auto;
          padding: 0;
          color: var(--sjzy-menu-color);

          &.is-active {
            background: var(--sjzy-menu-color-hover);
          }
        }

        .el-tabs__item {
          padding: 6px !important;

          .sjzy-column-grid {
            display: flex;
            align-items: center;
            width: calc(var(--sjzy-column-collapse-width) - 12) !important;
            height: calc(var(--sjzy-column-collapse-width) - 12) !important;
            padding: 5px 0;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
            word-break: break-all;
            white-space: nowrap;
            border-radius: 8px;

            div,
            span {
              line-height: normal !important;
            }

            span {
              font-size: 12px !important;
            }
          }

          &.is-active {
            background: transparent !important;

            .sjzy-column-grid {
              background: var(--sjzy-menu-active-block-bg) !important;
            }
          }

          &:hover {
            background: transparent !important;

            .sjzy-column-grid {
              background: var(--sjzy-menu-background-hover);
            }
          }
        }
      }

      .el-sub-menu__title {
        padding-right: 16px !important;
      }

      .el-sub-menu .el-sub-menu__icon-arrow {
        right: 16px;
      }
    }
  }

  :deep() {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-tabs__active-bar.is-left,
    .el-tabs--left .el-tabs__nav-wrap.is-left::after {
      display: none;
    }

    .el-menu--vertical:not(.el-menu--collapse, .el-menu--popup-container) .el-menu-item,
    .el-sub-menu__title {
      padding-right: 30px !important;
      padding-left: 18px !important;
      font-size: 12px !important;
      color: var(--el-text-color-regular);
    }

    .el-menu,
    .el-menu-item {
      background-color: var(--sjzy-menu-column-background);
    }

    .el-menu {
      border: 0;

      .el-divider {
        margin: 0 0 20px;
        background-color: #f6f6f6;

        &__text {
          color: var(--el-color-black);
        }
      }

      .el-menu-item,
      .el-sub-menu__title {
        height: var(--sjzy-menu-height);
        overflow: hidden;
        line-height: var(--sjzy-menu-height);
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;

        @include active;
      }
    }
  }

  &.is-collapse {
    :deep() {
      width: 0;
    }
  }
}
</style>
