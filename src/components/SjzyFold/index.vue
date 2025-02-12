<script lang="ts" setup>
import foldSvg from '@/assets/svg/fold.svg?raw'

const settingsStore = useSettingsStore()
const { collapse } = storeToRefs(settingsStore)
const { toggleCollapse } = settingsStore
</script>

<template>
  <div @click="toggleCollapse()">
    <div class="fold-unfold mt-2px flex items-center justify-center c-[var(--sjzy-menu-color)]">
      <SjzyIcon
        is-custom-svg
        :icon="foldSvg"
        :class="collapse ? 'transform-scale-x--100' : ''"
        class="transition-all-300"
        :size="14"
      />
    </div>
  </div>
</template>

<style scoped>
.fold-unfold {
  position: relative;
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  background-color: var(--sjzy-menu-background-additional);
}
</style>
