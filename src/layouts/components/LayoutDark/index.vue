<script lang="ts" setup>
import dark from '@/assets/svg/dark.svg?raw'
import light from '@/assets/svg/light.svg?raw'
import { t } from "@/composables"

defineOptions({
  name: 'SystemThemedark',
})

const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)

function changeDark(e: MouseEvent) {
  theme.value.isDark = !theme.value?.isDark
  settingsStore.changeDark(e)
}
</script>

<template>
  <ElTooltip v-if="theme.showDark" effect="dark" :content="t('主题模式')" placement="bottom">
    <div
      class="icon-btn h-full hover:bg-[#f6f6f6] dark:hover:bg-[#333]"
      @click="(e) => changeDark(e)"
    >
      <SjzyIcon
        is-custom-svg
        :icon="theme.isDark ? dark : light"
        :size="16"
        class="c-#000 dark:c-#fff"
      />
    </div>
  </ElTooltip>
</template>
