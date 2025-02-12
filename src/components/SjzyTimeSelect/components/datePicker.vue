<script lang="ts" setup>
import type { DateModelType, SingleOrRange } from 'element-plus'
import { ElDatePicker } from 'element-plus'
import { ref, watch, withDefaults } from 'vue'

type IProps = {
  modelValue: SingleOrRange<DateModelType>
  format?: string
  valueFormat?: string
  disabled?: boolean
}
type IEmits = {
  (e: 'update:modelValue', v: any): void
  (e: 'change', v: any): void
}
const props = withDefaults(defineProps<IProps>(), {
  format: 'YYYY-MM-DD',
  valueFormat: 'YYYY-MM-DD',
  disabled: false,
})
const emit = defineEmits<IEmits>()
const selectModel = ref<SingleOrRange<DateModelType>>()
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
function handleTimeChange(time: any) {
  emit('change', time)
}
function init() {
  if (Array.isArray(props.modelValue))
    selectModel.value = props.modelValue[0]
  else selectModel.value = props.modelValue
}
init()
onMounted(() => {
  emit('change', selectModel.value)
})
</script>

<template>
  <div class="datePicker">
    <ElDatePicker
      v-model="selectModel"
      :format="props.format"
      :disabled="disabled"
      :value-format="props.valueFormat"
      type="date"
      @change="handleTimeChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.datePicker {
  width: 100%;
  height: 100%;
}
</style>
