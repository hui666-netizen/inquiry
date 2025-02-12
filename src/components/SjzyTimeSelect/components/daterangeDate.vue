<script lang="ts" setup>
import { ref, watch, withDefaults } from 'vue'
import { ElMessage, dayjs } from 'element-plus'

type IProps = {
  /** 面板的双向绑定数据 期待一个 []作为默认值 */
  modelValue: any
  /** datePick 的 format */
  format?: string
  /** datePick 的 valueFormat */
  valueFormat?: string
  /** 是否需要自动设置绑定字段 */
  autoModelValues?: boolean
  disabled?: boolean
}
type IEmits = {
  (e: 'update:modelValue', v: any): void
  (e: 'time-change', v: any): void
  (e: 'change', v: any): void
}
const props = withDefaults(defineProps<IProps>(), {
  format: 'YYYY-MM-DD',
  valueFormat: 'YYYY-MM-DD',
  disabled: false,
})
const emit = defineEmits<IEmits>()
// 默认给selectModel 赋值
const startModel = ref<any>(undefined)
const endModel = ref<any>(undefined)
watch(
  () => props.modelValue,
  () => {
    init()
  },
)
watch(
  () => [startModel.value, endModel.value],
  (newV) => {
    if (startModel.value)
      emit('update:modelValue', newV)
    else emit('update:modelValue', undefined)
  },
)
//
// 初始化数据
function init() {
  if (Array.isArray(props.modelValue)) {
    startModel.value = props.modelValue[0] ? props.modelValue[0] : undefined
    endModel.value = props.modelValue[1] ? props.modelValue[1] : undefined
  }
}
// 根据不同的场景去校验数据 给数据排序
function timeChange() {
  const startTimestamp = startModel.value ? new Date(startModel.value).getTime() : 0
  const endTimestamp = endModel.value ? new Date(endModel.value).getTime() : 0
  // 如果开始事件 大于结束时间 就互换位置
  if (startTimestamp && endTimestamp && startTimestamp > endTimestamp) {
    // 如果 需要自动改变数据的时候 就可以不用弹 数据
    if (props.autoModelValues) {
      startModel.value = dayjs(endTimestamp).format('YYYY-MM-DD')
      endModel.value = dayjs(startTimestamp).format('YYYY-MM-DD')
    }
    else {
      ElMessage({
        message: '开始时间不能大于结束时间',
        type: 'warning',
      })
    }

    emit(
      'time-change',
      [startModel.value, endModel.value].filter(v => Boolean(v)),
    )
  }
  emit(
    'change',
    [startModel.value, endModel.value].filter(v => Boolean(v)),
  )
}
init()
onMounted(() => {
  emit(
    'change',
    [startModel.value, endModel.value].filter(v => Boolean(v)),
  )
})
</script>

<template>
  <div class="daterangeDate">
    <SjzySelectGroup
      class="sjzy-select-group-dom grid w-100%"
      style="grid-template-columns: 1fr 1fr"
    >
      <ElDatePicker
        v-model="startModel"
        :format="props.format"
        :value-format="props.valueFormat"
        type="date"
        :disabled="disabled"
        @change="timeChange"
      />
      <ElDatePicker
        v-model="endModel"
        :format="props.format"
        :value-format="props.valueFormat"
        type="date"
        :disabled="disabled"
        @change="timeChange"
      />
    </SjzySelectGroup>
  </div>
</template>

<style lang="scss" scoped>
.daterangeDate {
  width: 100%;
  height: 100%;
}
</style>
