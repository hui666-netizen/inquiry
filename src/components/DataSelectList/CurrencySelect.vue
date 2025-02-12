<script lang="ts" setup>
import { CurrencyGetPageGET } from '@/api/dc-default/Currency'

defineProps({
  value: {
    type: [String, Number],
    default: () => '',
  },
  isMulti: {
    type: Boolean,
    default: () => false,
  },
  defaultValue: {
    type: [String, Number, Array],
    default: () => '',
  },
})
const emit = defineEmits<{
  'update:value': [val: string]
}>()

const selectValue = ref('')

const attrs = useAttrs()
const settingsStore = useSettingsStore()
const { language } = storeToRefs(settingsStore)
watch(
  selectValue,
  (val) => {
    emit('update:value', val)
  },
  {
    deep: true,
  },
)
const valueKey = (attrs && (attrs['currency-select-key'] as string)) || 'id'
</script>

<template>
  <SjzySelect
    v-bind="attrs"
    v-model="selectValue"
    :default-value="defaultValue"
    :multiple="isMulti"
    :options="{
      api: CurrencyGetPageGET,
      useTabel: true,
      tableTitle: language === 'zh-CN' ? ['代码', '名称'] : ['代码', '名称'],
      labelKey: language === 'zh-CN' ? ['code', 'cnName'] : ['code', 'enName'],
      tableWidth: language === 'zh-CN' ? [60, 140] : [60, 140],
      valueKey: valueKey || 'id',
    }"
  />
</template>
