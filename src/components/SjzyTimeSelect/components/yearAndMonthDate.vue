<script lang="ts" setup>
import { ref, watch, withDefaults } from 'vue'

type IProps = {
  modelValue: any
  format?: string
  valueFormat?: string
  selectType?: string
  disabled?: boolean
}
type IEmits = {
  (e: 'update:modelValue', v: any): void
  (e: 'change', v: any): void
}
const props = withDefaults(defineProps<IProps>(), {
  format: 'YYYY-MM',
  valueFormat: 'YYYY-MM',
  disabled: false,
})
const emit = defineEmits<IEmits>()
// 默认给selectModel 赋值
const selectModel = ref<any>(undefined)
watch(
  () => props.modelValue,
  () => {
    init()
  },
)
watch(
  () => selectModel.value,
  (newV) => {
    emit('update:modelValue', newV)
  },
)
//
function init() {
  if (Array.isArray(props.modelValue))
    selectModel.value = props.modelValue[0]
  else selectModel.value = props.modelValue
}
function handleTimeChange(time: any) {
  emit('change', time)
}
init()
onMounted(() => {
  emit('change', selectModel.value)
})
</script>

<template>
  <div class="yearAndMonthDate">
    <ElDatePicker
      v-model="selectModel"
      :format="props.format"
      :value-format="props.valueFormat"
      type="month"
      :disabled="selectType === '7' || selectType === '8' || disabled"
      @change="handleTimeChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.yearAndMonthDate {
  width: 100%;
  height: 100%;
}
</style>
