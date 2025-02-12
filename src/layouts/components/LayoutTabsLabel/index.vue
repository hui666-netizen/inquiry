<script lang="ts" setup>
import type { TabPaneName } from 'element-plus'
import { debounce } from 'lodash-es'
import { getStorage } from '@sjzy/utils'
import { useResizeObserver } from '@vueuse/core'
import { translateTitle } from '@/utils'
import { handleActivePath, handleTabs } from '@/router'
import type { RouteRecord, SjzyRoute } from '@/types/router'
import closeSvg from '@/assets/svg/close.svg?raw'
import refreshSvg from '@/assets/svg/refresh.svg?raw'
import arrowLeftSvg from '@/assets/svg/arrow-left.svg?raw'
import arrowRightSvg from '@/assets/svg/arrow-right.svg?raw'

defineProps({
  layout: {
    type: String,
    default: '',
  },
})

const $pub: any = inject('$pub')
const route = useRoute() as SjzyRoute
const router = useRouter()
const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)
const routesStore = useRoutesStore()
const { getRoutes: routes } = storeToRefs(routesStore)
const tabsStore = useTabsStore()
const {
  getVisitedRoutes: visitedRoutes,
  getShowRoutes: visitedRoutesShow,
  paddingWidth,
  tabTextMaxWidth,
  tabTextMinWidth,
} = storeToRefs(tabsStore)
const {
  addVisitedRoute,
  delVisitedRoute,
  delOthersVisitedRoutes,
  delLeftVisitedRoutes,
  delRightVisitedRoutes,
  delAllVisitedRoutes,
  changeTabsForMore,
} = tabsStore

// 获取当前集火的tab的路径
const tabActive = ref('')
/** 鼠标选中的当前菜单 */
const hoverRoute = ref<any | null>(null)
/** 右键菜单是否展示 */
const visible = ref(false)
const top = ref(0)
const left = ref(0)
/** 父盒子 */
const tabBoxRef = ref<HTMLDivElement>()
/** 标签盒子 */
const tabDomRef = ref<HTMLDivElement>()
/** 右键菜单位置 */
const { x, y } = useMouse()

const isActive = (path: string) => path === handleActivePath(route, true)
const isNoCLosable = (tag: any) => tag.meta.noClosable

/** 标签点击离开事件 */
async function handleBeforeLeave(activeName: TabPaneName, oldActiveName: TabPaneName) {
  const pagesFormDirty = useGetPagesFormDirty() || {}
  const currentKey = Object.keys(pagesFormDirty).find(i => i.startsWith(String(oldActiveName)))
  const isDirty = currentKey && Object.values(pagesFormDirty[currentKey]).some(i => i)

  if (!activeName || !oldActiveName || !isDirty)
    return true
  // /** 脏数据污染提示是否已经点击过确认 */
  if (getStorage('isDirtyOk')) {
    // 点击了：直接切换标签
    localStorage.setItem('isDirtyOk', '')
    return true
  }
  else {
    // 判断当前标签页是否有脏数据校验，有：不允许切换标签，没有：直接切换标签
    return !useIsDirty()
  }
}
async function handleTabClick(tab: any) {
  const isBeforeLeave = await handleBeforeLeave(tab.path, tabActive.value)
  if (!isBeforeLeave)
    return
  tabActive.value = tab.path
  const clickRoute = visitedRoutes.value.find(i => i.path === tab?.path)
  if (!isActive(tab?.path as string) && clickRoute) {
    if (useIsDirty()) {
      $baseConfirm({
        content: t('您有数据编辑未保存，是否离开？'),
        title: t('温馨提示'),
        onOk: () => {
          localStorage.setItem('isDirtyOk', 'true')
          router.push({ ...clickRoute })
        },
        onCancel: () => {},
      })
    }
    else if (routesStore.isExistPath(clickRoute.path)) {
      router.push({ ...clickRoute })
    }
    else {
      $baseMessage(t('用户或权限变更,不存在该菜单,已清除该标签页'))
      handleTabRemove(clickRoute.path)
      toLastTab()
    }
  }
}
/** 添加标签页 */
async function addTabs(tag: SjzyRoute | RouteRecord) {
  const tab = handleTabs(tag)
  if (tab) {
    await addVisitedRoute(tab)
    tabActive.value = tab.path
  }
}
/** 初始化固定标签 */
function initNoCLosableTabs(routes: RouteRecord[]) {
  routes.forEach((_route) => {
    if (_route.meta.noClosable)
      addTabs(_route)
    if (_route.children)
      initNoCLosableTabs(_route.children)
  })
}
/** 打开右键菜单 */
function openMenu(route: RouteRecord) {
  left.value = x.value
  top.value = y.value
  visible.value = true
  if (route.path)
    hoverRoute.value = route
}
/** 关闭右键菜单 */
function closeMenu() {
  visible.value = false
  hoverRoute.value = null
}
/** 跳转最后一个标签页 */
async function toLastTab() {
  const latestView = visitedRoutes.value
    .filter((_: any) => _.path !== handleActivePath(route, true))
    .slice(-1)[0]
  if (latestView)
    await router.push(latestView)
  else await router.push('/')
}
/** 根据原生路径删除标签中的标签 */
const handleTabRemove: any = async (rawPath: string) => {
  if (useIsDirty()) {
    $baseConfirm({
      content: t('您有数据编辑未保存，是否离开？'),
      title: t('温馨提示'),
      onOk: async () => {
        localStorage.setItem('isDirtyOk', 'true')
        await delVisitedRoute(rawPath)
        if (isActive(rawPath))
          await toLastTab()
      },
    })
  }
  else {
    await delVisitedRoute(rawPath)
    if (isActive(rawPath))
      await toLastTab()
  }
}
/** 刷新当前标签页 */
function refreshThisTab() {
  $pub('reload-router-view')
}
/** 删除其他标签页 */
async function closeOthersTabs() {
  if (hoverRoute.value) {
    delOthersVisitedRoutes(hoverRoute.value.path)
    await router.push(hoverRoute.value.path)
  }
  else {
    await delOthersVisitedRoutes(handleActivePath(route, true))
  }

  closeMenu()
}
/** 删除左侧标签页 */
async function closeLeftTabs() {
  if (hoverRoute.value) {
    await delLeftVisitedRoutes(hoverRoute.value.path)
    await router.push(hoverRoute.value.path)
  }
  else {
    await delLeftVisitedRoutes(handleActivePath(route, true))
  }

  closeMenu()
}
/** 删除右侧标签页 */
async function closeRightTabs() {
  if (hoverRoute.value) {
    await delRightVisitedRoutes(hoverRoute.value.path)
    await router.push(hoverRoute.value.path)
  }
  else {
    await delRightVisitedRoutes(handleActivePath(route, true))
  }

  closeMenu()
}
/** 删除所有标签页 */
async function closeAllTabs() {
  if (useIsDirty()) {
    $baseConfirm({
      content: t('您有数据编辑未保存，是否离开？'),
      title: t('温馨提示'),
      onOk: async () => {
        localStorage.setItem('isDirtyOk', 'true')
        await delAllVisitedRoutes()
        await toLastTab()
        await closeMenu()
      },
    })
  }
  else {
    await delAllVisitedRoutes()
    await toLastTab()
    await closeMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    addTabs(route)
  },
  {
    immediate: true,
  },
)
watchEffect(() => {
  if (visible.value)
    document.body.addEventListener('click', closeMenu)
  else document.body.removeEventListener('click', closeMenu)
})

initNoCLosableTabs(routes.value)

useResizeObserver(
  tabBoxRef,
  debounce(() => {
    nextTick(() => {
      changeTabsForMore()
    })
  }, 500),
)

useResizeObserver(
  tabDomRef,
  debounce(() => {
    nextTick(() => {
      changeTabsForMore()
    })
  }, 20),
)
</script>

<template>
  <div ref="tabBoxRef" class="sjzy-tabs-label" :class="`sjzy-tabs-label-${theme.tabsBarStyle}`">
    <div
      ref="tabDomRef"
      class="content"
      :class="`content-${theme.tabsBarStyle}`"
      :before-leave="handleBeforeLeave"
    >
      <div
        v-for="item in visitedRoutesShow"
        :key="item.path"
        class="card dark:hover:c-#000"
        :class="{
          'is-active': isActive(item.path),
          'is-closable': !isNoCLosable(item),
        }"
        :name="item.path"
        @click="handleTabClick(item)"
      >
        <div
          class="item"
          :class="{ on: isActive(item.path) }"
          :style="{
            paddingLeft: `${paddingWidth}px`,
            paddingRight: `${paddingWidth}px`,
          }"
          @contextmenu.prevent="openMenu(item)"
        >
          <span
            v-if="item.meta && item.meta.title"
            class="title overflow-hidden text-ellipsis whitespace-nowrap"
            :title="translateTitle(item.meta.title)"
            :style="{
              display: 'inline-block',
              maxWidth: `${tabTextMaxWidth}px`,
              minWidth: `${tabTextMinWidth}px`,
            }"
          >
            {{ translateTitle(item.meta.title) }}
          </span>
          <span
            v-if="!isNoCLosable(item)"
            class="closable"
            @click.stop="handleTabRemove(item.path)"
          >
            <SjzyIcon :icon="closeSvg" is-custom-svg class="icon-close" />
          </span>
        </div>
      </div>
    </div>

    <ul
      v-if="visible"
      class="contextmenu el-dropdown-menu"
      :style="{ left: `${left}px`, top: `${top}px` }"
    >
      <li class="el-dropdown-menu__item" @click="refreshThisTab">
        <SjzyIcon :icon="refreshSvg" is-custom-svg class="icon-close" :size="14" />
        <span>{{ translateTitle('刷新') }}</span>
      </li>
      <li
        class="el-dropdown-menu__item"
        :class="{ hidden: visitedRoutesShow.length === 1 }"
        @click="closeOthersTabs"
      >
        <SjzyIcon :icon="closeSvg" is-custom-svg class="icon-close" :size="14" />
        <span>{{ translateTitle('关闭其他') }}</span>
      </li>
      <li
        class="el-dropdown-menu__item"
        :class="{ hidden: !visitedRoutesShow.indexOf(hoverRoute) }"
        @click="closeLeftTabs"
      >
        <SjzyIcon :icon="arrowLeftSvg" is-custom-svg class="icon-close" :size="14" />
        <span>{{ translateTitle('关闭左侧') }}</span>
      </li>
      <li
        class="el-dropdown-menu__item"
        :class="{
          hidden: visitedRoutesShow.indexOf(hoverRoute) === visitedRoutesShow.length - 1,
        }"
        @click="closeRightTabs"
      >
        <SjzyIcon :icon="arrowRightSvg" is-custom-svg class="icon-close" :size="14" />
        <span>{{ translateTitle('关闭右侧') }}</span>
      </li>
      <li class="el-dropdown-menu__item" @click="closeAllTabs">
        <SjzyIcon :icon="closeSvg" is-custom-svg class="icon-close" :size="14" />
        <span>{{ translateTitle('关闭全部') }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sjzy-tabs-label {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: var(--sjzy-nav-height);
  overflow-x: hidden;
  user-select: none;

  .content {
    display: flex;
    align-items: center;
    min-height: var(--sjzy-tabs-height);

    .card {
      height: 100%;
      min-height: var(--sjzy-tabs-height);
      margin-right: -18px;
      font-weight: 400;
      cursor: pointer;

      &.is-active {
        color: var(--sjzy-color-primary);
      }

      .item {
        display: flex;
        align-items: center;
        height: var(--sjzy-tabs-height);
        text-align: center;
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
      }

      :deep() {
        .closable {
          margin-left: 8px;

          .icon-close {
            width: 0 !important;
            height: 10px !important;
            margin: 0;
            transition: var(--sjzy-layout-transition);
          }

          &.on {
            .icon-close {
              width: 10px !important;
            }
          }

          &:hover {
            color: var(--sjzy-color-primary);
          }
        }
      }

      &.is-closable {
        &:hover {
          .item {
            padding-right: 25px !important;
            padding-left: 25px !important;
          }

          :deep() {
            .closable {
              margin-left: 8px;

              .icon-close {
                width: 10px !important;
              }
            }
          }
        }
      }
    }
  }

  &-card {
    .card {
      margin-right: 0 !important;

      .item {
        box-sizing: border-box;
        height: calc(var(--sjzy-tabs-height) - 0px);
        margin-right: 5px;
        line-height: calc(var(--sjzy-tabs-height) - 0px) !important;
        cursor: pointer;
        border: 1px solid var(--sjzy-base-border-color);
        border-radius: 3px;
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      &.is-active .item {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9);
        border: 1px solid var(--el-color-primary);
        outline: none;
      }

      &:hover .item {
        color: var(--el-color-primary);
        border: 1px solid var(--el-color-primary);
      }
    }
  }

  /* 卡片 */
  .content-card {
    margin-bottom: 4px;
  }

  /* 灵动 */
  .content-smart {
    .card {
      margin-right: 0 !important;

      .item {
        box-sizing: border-box;
        height: calc(var(--sjzy-tabs-height) - 3px);
        margin-right: 5px;
        line-height: calc(var(--sjzy-tabs-height) - 3px) !important;
        cursor: pointer;
        background-color: var(--sjzy-tabs-smart);
        border-radius: 3px;
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      &.is-active .item {
        color: var(--el-color-primary);
        background: var(--sjzy-tabs-smart-hover);
        outline: none;
      }

      &:hover .item {
        color: var(--el-color-primary);
        background: var(--sjzy-tabs-smart-hover);
      }
    }
  }

  /* 圆滑 */
  .content-smooth {
    .card {
      &:hover {
        background: var(--sjzy-tabs-smooth-hover);
        outline: none;
        mask: url('@/assets/tabs_images/fe-tab.png');
        mask-size: 100% 100%;
      }

      .item {
        outline: none;
      }

      &.is-active {
        background: var(--sjzy-tabs-smooth);
        outline: none;
        mask: url('@/assets/tabs_images/fe-tab.png');
        mask-size: 100% 100%;
      }
    }
  }

  .contextmenu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: var(--el-box-shadow-light);

    .el-dropdown-menu__item:hover {
      color: var(--el-color-primary);
      background: var(--el-color-primary-light-9);
    }
  }
}

.nav-more-icon {
  margin-top: 2px;
  cursor: pointer;
}
</style>
