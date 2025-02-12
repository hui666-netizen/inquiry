<script lang="ts" setup>
import { ref, watch } from 'vue'
import { dayjs } from 'element-plus'
import { isArray } from '@sjzy/utils'
import daterangeDate from './components/daterangeDate.vue'
import yearAndMonthDate from './components/yearAndMonthDate.vue'
import datePicker from './components/datePicker.vue'
import yearPicker from './components/yearPicker.vue'

type IOptionEnum = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
type ISetValueEnum =
  | '12'
  | '13'
  | '14'
  | '15'
  | '21'
  | '23'
  | '24'
  | '25'
  | '31'
  | '32'
  | '34'
  | '35'
  | '41'
  | '42'
  | '43'
  | '45'
  | '51'
  | '52'
  | '53'
  | '54'

type IOptionItem<T = any> = {
  [x in IOptionEnum]: T
}
type IEmits = {
  (e: 'handle-change', time: string[]): void
  (e: 'handle-value-change', select: IOptionEnum, time: any): void
  (e: 'update:modelValue', time: any): void
  (e: 'update:modelTime', time: any): void
}
type IProps = {
  modelValue: any
  modelTime?: any
  modelType?: 1 | 2 | 3
  disabled?: boolean
}
defineOptions({
  name: 'SjzyTimeSelect',
})

const props = withDefaults(defineProps<IProps>(), {
  modelType: 1,
})
const emit = defineEmits<IEmits>()

const spareData: { key: IOptionEnum, value: string }[] = [
  {
    key: '1',
    value: t('年月'),
  },
  {
    key: '2',
    value: t('等于'),
  },
  {
    key: '3',
    value: t('之间'),
  },
  {
    key: '4',
    value: t('早于等于'),
  },
  {
    key: '5',
    value: t('晚于等于'),
  },
]

const spareTypeData: { key: IOptionEnum, value: string }[] = [
  {
    key: '6',
    value: t('年'),
  },
  {
    key: '7',
    value: t('当月'),
  },
  {
    key: '8',
    value: t('上月'),
  },
]

const dateModel = ref<any>()
// 下拉框的v-model
const selectModel = ref<IOptionEnum>('1')
const componentObj: IOptionItem = {
  1: yearAndMonthDate,
  2: datePicker,
  3: daterangeDate,
  4: datePicker,
  5: datePicker,
  6: yearPicker,
  7: yearAndMonthDate,
  8: yearAndMonthDate,
}
const returnCom = computed(() => {
  return componentObj[selectModel.value] as any
})
// 监听modelValue 来赋值给选中项
watch(
  () => props.modelValue,
  (newV) => {
    // 如果传给我 不是这个枚举 直接赋值1
    if (!['1', '2', '3', '4', '5', '6', '7', '8'].includes(newV)) {
      selectModel.value = '1'
      emit('update:modelValue', selectModel.value)
      return
    }
    selectModel.value = props.modelValue
  },
  {
    immediate: true,
  },
)
watch(
  () => props.modelTime,
  (newV) => {
    if (selectModel.value === '3' && !newV) {
      dateModel.value = []
      return
    }
    dateModel.value = newV
  },
)
// 下拉框的change事件
function handleSelectChange(newV: IOptionEnum) {
  const oldV = props.modelValue
  const key: ISetValueEnum = `${oldV}${newV}` as ISetValueEnum
  handlseSetModel(key, newV)
}
function changeTime(time: any, selectModel: string) {
  const timeArr = []
  if (!Array.isArray(time))
    timeArr.push(time)
  else timeArr.push(...time)
  if (selectModel === '3')
    return [timeArr && timeArr[0], timeArr && timeArr[1]]
  else return [timeArr && timeArr[0], null]
}
// eslint-disable-next-line complexity
function handlseSetModel(v: keyof { [x in ISetValueEnum]: any }, newV: string) {
  // 首先判空 然后判断长度是否大于0  [null,null]
  let dateModalValue = ''
  if (isArray(dateModel.value))
    dateModalValue = dateModel.value[0] || void 0
  else dateModalValue = dateModel.value || void 0
  if (dateModalValue && dateModalValue.length > 0) {
    // 判断是 前面的单选选项 哪里到哪里
    const startMonthTime = dayjs(dateModalValue).startOf('month').format('YYYY-MM-DD') // 当前月的第一天
    const endMonthTime = dayjs(dateModalValue).endOf('month').format('YYYY-MM-DD') // 当前月的最后一天
    const defaultTime = dayjs(dateModalValue).format('YYYY-MM-DD')
    const panlTime = dayjs(dateModalValue).format('YYYY-MM-DD')
    const defaultsModelDate: { [x in ISetValueEnum]: any } = {
      12: startMonthTime,
      13: [startMonthTime, endMonthTime],
      14: endMonthTime,
      15: startMonthTime,
      21: dayjs(dateModel.value).format('YYYY-MM'),
      23: [startMonthTime, endMonthTime],
      24: defaultTime,
      25: defaultTime,
      31: dayjs(panlTime).format('YYYY-MM'),
      32: panlTime,
      34: panlTime,
      35: panlTime,
      41: dayjs(dateModel.value).format('YYYY-MM'),
      42: defaultTime,
      43: [startMonthTime, endMonthTime],
      45: defaultTime,
      51: dayjs(dateModel.value).format('YYYY-MM'),
      52: defaultTime,
      53: [startMonthTime, endMonthTime],
      54: defaultTime,
    }
    if (newV === '6' || newV === '7' || newV === '8') {
      switch (newV) {
        case '6':
          dateModel.value = dayjs().format('YYYY')
          break
        case '7':
          // 获取当月
          dateModel.value = dayjs().format('YYYY-MM')
          break
        case '8':
          // 获取上月
          dateModel.value = dayjs().subtract(1, 'month').format('YYYY-MM')
          break

        default:
          break
      }
    }
    else {
      dateModel.value = defaultsModelDate[v]
    }
  }
  else if (newV === '6' || newV === '7' || newV === '8') {
    switch (newV) {
      case '6':
        dateModel.value = dayjs().format('YYYY')
        break
      case '7':
        // 获取当月
        dateModel.value = dayjs().format('YYYY-MM')
        break
      case '8':
        // 获取上月
        dateModel.value = dayjs().subtract(1, 'month').format('YYYY-MM')
        break

      default:
        break
    }
  }
  const time = changeTime(dateModel.value, selectModel.value)
  emit('handle-change', time)
  emit('handle-value-change', selectModel.value, dateModel.value)
  emit('update:modelValue', selectModel.value)
  emit('update:modelTime', dateModel.value)
}
// 组件的change事件
function handleTimeChange(v: any) {
  // 当下拉数据发生变化的场景 重新进行赋值
  dateModel.value = v
  emit('handle-value-change', selectModel.value, dateModel.value)
  emit('update:modelTime', dateModel.value)
  const time = changeTime(dateModel.value, selectModel.value)
  emit('handle-change', time)
}
// 初始化数据
function init() {
  dateModel.value = props.modelTime
  emit('handle-value-change', selectModel.value, dateModel.value)
  const time = changeTime(dateModel.value, selectModel.value)
  emit('handle-change', time)
}
init()
</script>

<template>
  <div class="SjzyTimeSelect">
    <SjzySelectGroup class="sjzy-select-group-dom w-100% flex">
      <SjzySelect
        v-model="selectModel"
        class="w-auto"
        is-label-calc-width
        :options="{
          spareData:
            modelType === 1
              ? spareData
              : modelType === 3
                ? spareData.slice(0, 3)
                : spareData.concat(spareTypeData),
          noPage: true,
          labelKey: ['value'],
          valueKey: 'key',
        }"
        :clearable="false"
        :is-change-clear="false"
        @change="handleSelectChange"
      />
      <div class="w-full">
        <component
          v-bind="$attrs"
          :is="returnCom"
          v-model="dateModel"
          :disabled="disabled"
          :select-type="selectModel"
          @change="handleTimeChange"
        />
      </div>
    </SjzySelectGroup>
  </div>
</template>

<style lang="scss" scoped>
.SjzyTimeSelect {
  width: 100%;
  height: 100%;
}
</style>
