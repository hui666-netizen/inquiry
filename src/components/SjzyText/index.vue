<script lang="ts" setup>
defineOptions({
  name: 'SjzyText',
})

withDefaults(
  defineProps<{
    /** 绑定值 */
    modelValue?: string
    /** 是否开启toolTip */
    toolTip?: boolean
    /** 几行省略 */
    toolTipLine?: number
    /** toolTip 的最大宽度 */
    toolTipMaxWidth?: number
    /** toolTip 的最大高度 */
    toolTipMaxHeight?: number
    /** 行高 */
    lineHeight?: number
  }>(),
  {
    toolTip: true,
    toolTipLine: 1,
    toolTipMaxWidth: 800,
    toolTipMaxHeight: 300,
    lineHeight: 20,
  },
)

const toolTipTextRef = ref<any>()

// const attrs = useAttrs()
</script>

<template>
  <ElTooltip v-if="toolTip && modelValue" effect="dark" placement="top-start">
    <template #content>
      <div
        class="scrollbar-box-back"
        :style="{
          whiteSpace: 'pre-line',
          maxWidth: `${toolTipMaxWidth}px`,
          maxHeight: `${toolTipMaxHeight}px`,
          lineHeight: `${lineHeight}px`,
        }"
      >
        {{ modelValue }}
      </div>
    </template>
    <span
      class="tool-tip-text"
      :style="{
        'whiteSpace': 'pre-line',
        '-webkit-line-clamp': toolTipLine,
        'height': toolTipLine ? `${toolTipLine * 20}px` : 'auto',
        'line-height': `${lineHeight}px`,
        'word-break': 'break-word',
      }"
    >{{ modelValue || '--' }}</span>
  </ElTooltip>
  <span v-else ref="toolTipTextRef" :style="{ 'word-break': 'break-word' }">{{
    modelValue || '--'
  }}</span>
</template>

<style lang="scss" scoped>
.tool-tip-text {
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
