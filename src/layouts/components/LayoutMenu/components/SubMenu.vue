<script lang="ts" setup>
import { translateTitle } from '@/utils'

defineProps({
  itemOrMenu: {
    type: Object,
    default() {
      return null
    },
  },
})
defineSlots<{
  default: () => any
}>()
const { prefixCls } = useDesign('sub-menu')
const settingsStore = useSettingsStore()
const { theme, collapse, language } = storeToRefs(settingsStore)
</script>

<template>
  <ElSubMenu
    :class="`${prefixCls} ${collapse ? `${prefixCls}-is-collapse-sub-menu` : ''} `"
    :index="itemOrMenu.path"
    teleported
    :style="{ marginTop: itemOrMenu.meta.icon ? '10px' : '0' }"
  >
    <template #title>
      <div v-if="collapse" :class="`${prefixCls}-is-collapse`" class="flex flex-col">
        <span v-if="itemOrMenu.meta.icon">
          <SjzyIcon :icon-font="`${itemOrMenu.meta.icon}`" :size="language === 'en-US' ? 23 : 16" />
        </span>
        <span
          v-if="!itemOrMenu.meta.icon || language !== 'en-US'"
          :style="{ width: itemOrMenu.meta.icon ? '48px' : '160px' }"
          style="
            display: block;
            margin-top: 2px;
            overflow: hidden;
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
          :title="translateTitle(itemOrMenu.meta.subTitle || itemOrMenu.meta.title)"
        >
          {{ translateTitle(itemOrMenu.meta.subTitle || itemOrMenu.meta.title) }}
        </span>
      </div>
      <div v-else class="flex items-center">
        <div
          v-if="theme.layout === 'vertical' || itemOrMenu.meta.icon"
          class="h-20px w-20px flex items-center"
        >
          <SjzyIcon :icon-font="`${itemOrMenu.meta.icon}`" :size="14" />
        </div>
        <span
          style="overflow: hidden; font-size: 12px; text-overflow: ellipsis; white-space: nowrap"
          :title="translateTitle(itemOrMenu.meta.title)"
        >
          {{ translateTitle(itemOrMenu.meta.title) }}
        </span>
      </div>
    </template>
    <slot />
  </ElSubMenu>
</template>
