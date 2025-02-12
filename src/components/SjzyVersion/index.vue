<script lang="ts" setup>
const settingsStore = useSettingsStore()
const { getVersion, collapse, theme } = storeToRefs(settingsStore)
const mode = import.meta.env.MODE
console.log('Mode：', mode)
</script>

<template>
  <div
    :class="{
      'absolute top-0 left-100px bg-transparent': !collapse && theme.layout === 'column',
      'bottom-24px absolute': collapse && theme.layout === 'column',
    }"
    style="background-color: var(--sjzy-menu-background-additional)"
    class="h-24px w-full flex items-center justify-center break-words text-center c-[var(--sjzy-menu-color)] line-height-24px"
  >
    <div v-show="!collapse && theme.layout !== 'column'">
      {{ mode }}
    </div>
    <div> {{ getVersion[mode] }}</div>
  </div>
</template>
