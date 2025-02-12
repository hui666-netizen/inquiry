<script lang="ts" setup>
import { SjzyIcon } from '@sjzy/ui'
import type { SlotsType } from 'vue'

const props = defineProps({
  /** 选中的颜色 */
  modelValue: {
    type: String,
    default: 'blue',
  },
  defaultColor: {
    type: Array<string>,
    /** 默认色值 */
    default: () => ['blue', 'green', 'yellow', 'red', 'cyan', 'purple', 'pink', 'gray'],
  },
})

const emit = defineEmits<{
  'update:modelValue': [color: string]
}>()

defineComponent({
  slots: Object as SlotsType<{
    default: { msg: string }
  }>,
})

const active = ref<string>()

function onColorClick(item: string) {
  emit('update:modelValue', item)
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      active.value = val
    }
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <div>
    <ElPopover :width="128" placement="bottom-end" trigger="click">
      <template #reference>
        <slot name="default">
          <div
            class="h-28px w-28px p-4px"
            style="box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset"
          >
            <div
              class="h-100% w-100%"
              :style="{
                background: `var(--sjzy-color-${modelValue || 'gray'})`,
              }"
            />
          </div>
        </slot>
      </template>
      <template #default>
        <div class="grid grid-cols-5 gap-2">
          <div v-for="(item, index) in props.defaultColor" :key="index">
            <div
              class="flex cursor-pointer items-center justify-center border border-color-#fff rd-0.5 border-solid p-1px hover:border-color-$el-color-primary!"
              @click="onColorClick(item)"
            >
              <div
                :style="{ background: `var(--sjzy-color-${item})` }"
                class="h-4 w-4 flex items-center justify-center rd-0.5"
              >
                <SjzyIcon
                  v-if="active === item"
                  class="color-#fff"
                  icon-font="icon-a-xuanzhong42"
                  :size="12"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </ElPopover>
  </div>
</template>
