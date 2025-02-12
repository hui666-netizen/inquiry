<script lang="ts" setup>
import setting from '@/assets/svg/setting.svg?raw'
import { t } from "@/composables"

const $pub: any = inject('$pub')

const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)

function handleOpenTheme() {
  $pub('theme')
}
</script>

<template>
  <ElTooltip v-if="theme.showTheme" effect="dark" :content="t('主题设置')" placement="bottom">
    <span
      class="icon-btn h-full cursor-pointer text-20px hover:bg-[#f6f6f6] dark:hover:bg-[#333]"
      @click="handleOpenTheme"
    >
      <SjzyIcon :icon="setting" :size="16" is-custom-svg />
    </span>
  </ElTooltip>
</template>
