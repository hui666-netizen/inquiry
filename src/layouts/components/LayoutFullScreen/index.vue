<script lang="ts" setup>
import screen from '@/assets/svg/screen.svg?raw'
import screen_full from '@/assets/svg/screen_full.svg?raw'
import { t } from "@/composables"

const { isFullscreen, toggle } = useFullscreen()

const settingsStore = useSettingsStore()
const { theme } = storeToRefs(settingsStore)
</script>

<template>
  <ElTooltip
    v-if="theme.showFullScreen"
    effect="dark"
    :content="t(isFullscreen ? '还原' : '全屏')"
    placement="bottom"
  >
    <span
      class="icon-btn h-full cursor-pointer text-20px hover:bg-[#f6f6f6] dark:hover:bg-[#333]"
      @click="toggle"
    >
      <SjzyIcon
        is-custom-svg
        :icon="isFullscreen ? screen_full : screen"
        :size="16"
        class="c-#000 dark:c-#fff"
      />
    </span>
  </ElTooltip>
</template>
