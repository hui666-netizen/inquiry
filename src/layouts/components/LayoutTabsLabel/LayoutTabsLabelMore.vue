<script lang="ts" setup>
import closeSvg from '@/assets/svg/close.svg?raw'
import { t } from "@/composables"

defineOptions({
  name: 'LayoutTabsLabelMore',
})

const tabsStore = useTabsStore()
const routesStore = useRoutesStore()
const { getHiddenRoutes: visitedRoutesHidden } = storeToRefs(tabsStore)
const { getActiveMenu: activeMenu } = storeToRefs(routesStore)
const { delVisitedRoute } = tabsStore
const isNoCLosable = (tag: any) => tag.meta.noClosable
</script>

<template>
  <div>
    <!-- 更多 -->
    <ElDropdown
      v-if="visitedRoutesHidden?.length"
      popper-class="sjzy-tabs-menu-more"
      placement="bottom"
      class="h-100% p-x-10px"
    >
      <span class="sjzy-tabs-more mt-1px flex items-center">
        <SjzyIcon icon-font="icon-a-gengduo6" :size="16" class="c-#4D4E4E" />
      </span>
      <template #dropdown>
        <ElDropdownMenu class="tabs-more">
          <ElScrollbar id="scrollContainerBox" max-height="500px">
            <ElDropdownItem
              v-for="item in visitedRoutesHidden"
              :key="item.path"
              class="sjzy-tabs-menu-item"
              :closable="!isNoCLosable(item)"
            >
              <span class="sjzy-tabs-select-item" :class="{ on: activeMenu.data === item.path }">
                <RouterLink v-if="item.meta && item.meta.title" class="w-100%" :to="item.path">
                  {{ t(item.meta.title) }}
                </RouterLink>
                <div @click="delVisitedRoute(item.path)">
                  <SjzyIcon :icon="closeSvg" is-custom-svg :size="10" />
                </div>
              </span>
            </ElDropdownItem>
          </ElScrollbar>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<style lang="scss">
.sjzy-tabs-menu-more {
  .sjzy-tabs-select-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      padding-right: 20px;
    }

    &:hover {
      background-color: var(--sjzy-menu-background-hover);

      a {
        color: var(--el-color-primary) !important;
      }
    }
  }
}
</style>
