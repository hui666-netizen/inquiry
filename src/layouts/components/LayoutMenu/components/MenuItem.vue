<script lang="ts" setup>
import { isExternal } from '@sjzy/utils'
import { translateTitle } from '@/utils'
import config from '@/config'

import type { SjzyRoute } from '@/types/router'

const props = defineProps({
  itemOrMenu: {
    type: Object,
    default() {
      return null
    },
  },
})

const route = useRoute() as SjzyRoute
const router = useRouter()

const $pub: any = inject('$pub')

const settingsStore = useSettingsStore()
const { device, collapse, language, theme } = storeToRefs(settingsStore)
const { foldSideBar } = settingsStore

const { prefixCls } = useDesign('menu-item')

function handleLink() {
  const routePath = props.itemOrMenu.path
  const target = props.itemOrMenu.meta.target
  if (target === '_blank') {
    if (isExternal(routePath))
      window.open(routePath)
    else if (route.path !== routePath)
      config.isHashRouterMode ? window.open(`/#${routePath}`) : window.open(routePath)
  }
  else {
    if (isExternal(routePath)) {
      window.location.href = routePath
    }
    else if (route.path !== routePath) {
      if (device.value === 'mobile')
        foldSideBar()
      router.push(props.itemOrMenu.path)
    }
    else {
      $pub('reload-router-view')
    }
  }
}

// function favClick() {
//   // console.log('favClick')
// }

const isShowPrefix = computed(() => {
  return (meta: { isLevel2: boolean }) => {
    return !meta.isLevel2
  }
})
</script>

<template>
  <ElMenuItem
    class="sjzy-menu-item w-100%"
    :route="itemOrMenu"
    :index="itemOrMenu.path"
    @click="handleLink"
  >
    <div
      v-if="itemOrMenu.meta.isLevel1 && collapse"
      :class="`${prefixCls}-is-collapse`"
      class="flex flex-col"
    >
      <span v-if="itemOrMenu.meta.icon">
        <SjzyIcon :icon-font="`${itemOrMenu.meta.icon}`" :size="language === 'en-US' ? 23 : 16" />
      </span>
      <span
        v-if="!itemOrMenu.meta.icon || language !== 'en-US'"
        :style="{ width: itemOrMenu.meta.icon ? '48px' : '160px' }"
        style="
          display: block;
          height: 12px;
          margin-top: 2px;
          overflow: hidden;
          font-size: 12px;
          line-height: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        "
        :title="translateTitle(itemOrMenu.meta.title)"
      >
        {{ translateTitle(itemOrMenu.meta.title) }}
      </span>
    </div>
    <div v-else :class="`${prefixCls}-title-box w-full flex items-center`" style="z-index: 1">
      <span v-if="itemOrMenu.meta.icon" class="w-20px flex items-center">
        <SjzyIcon
          :icon-font="`${itemOrMenu.meta.icon}`"
          :size="14"
          :title="translateTitle(itemOrMenu.meta.title)"
        />
      </span>
      <span v-if="isShowPrefix(itemOrMenu.meta)" style="z-index: 1" class="sjzy-prefix" />
      <div
        :class="[
          `${prefixCls}-title w-full inline`,
          { 'p-r-35px': theme.layout === 'vertical', 'p-r-15px': theme.layout === 'horizontal' },
        ]"
        style="z-index: 1"
        :title="translateTitle(itemOrMenu.meta.title)"
      >
        {{ translateTitle(itemOrMenu.meta.title) }}
      </div>
      <ElTag v-if="itemOrMenu.meta.badge" effect="dark" type="danger">
        {{ itemOrMenu.meta.badge }}
      </ElTag>
      <span v-if="itemOrMenu.meta.dot" class="sjzy-dot sjzy-dot-error">
        <span />
      </span>
      <!-- <span class="fav absolute right-20px z-5 flex items-center" @click.stop="favClick">
        <SjzyIcon icon-font="icon-a-shoucang1" :size="12" />
      </span> -->
    </div>
  </ElMenuItem>
</template>

<style lang="scss" scoped>
.sjzy-menu-item {
  &-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-is-collapse {
    z-index: 1;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    text-align: center;

    span {
      line-height: normal;
    }
  }
}
</style>
