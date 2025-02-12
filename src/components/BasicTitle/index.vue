<script setup lang="ts">
import type { SlotsType } from 'vue'
import { defineComponent } from 'vue-demi'

defineOptions({
  name: 'BasicTitle',
})

defineComponent({
  slots: Object as SlotsType<{
    default: { msg: string }
    title_left: { msg: string }
    title_right: { msg: string }
  }>,
})
</script>

<template>
  <div class="w-full bg-[var(--sjzy-bg)] p-x-4 p-t-4 pb-2 text-14px">
    <div flex="~" items="center">
      <div v-if="$attrs.header" class="title-text">
        {{ $attrs.header }}
      </div>
      <div class="flex flex-auto items-center justify-between">
        <div>
          <slot name="title_left" />
        </div>
        <div>
          <slot name="title_right" />
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.title-text {
  padding: 0 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-left: 4px solid var(--el-color-primary);
}
</style>
