<script lang="ts" setup>
defineOptions({
  name: 'SjzyCategory',
})

withDefaults(
  defineProps<{
    /** 背景色 */
    color?: string
    /** 分类英文名 */
    enName?: string
    /** 分类名称 */
    name?: string
  }>(),
  {
    color: 'blue',
  },
)
</script>

<template>
  <div class="h-24px flex items-center">
    <ElTag
      class="rounded-2px p-x-8px text-12px color-#fff leading-24px b-0!"
      size="small"
      :style="{ background: `var(--sjzy-color-${color})` }"
    >
      {{ enName || '请输入英文名' }}
    </ElTag>
    <div class="m-l-8px text-14px font-bold leading-24px">
      {{ name || '请输入类别名称' }}
    </div>
  </div>
</template>
