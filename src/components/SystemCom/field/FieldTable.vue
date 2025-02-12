<script lang="ts" setup>
import { SjzyButton, SjzyDynamicPreview, SjzyTableV2, useSjzyTable } from '@sjzy/ui'
import type { CheckboxValueType } from 'element-plus'
import { ElCheckbox, ElCheckboxGroup, ElCol, ElInput, ElRow } from 'element-plus'
import { isEqual } from 'lodash-es'
import { Link } from '@element-plus/icons-vue'
import versionPng from '@/assets/version.png'
import { GetEnumGet } from '@/api/devops/tongyong'
import { h } from "vue"

type OptionItem = {
  label: string
  value: string
}
const props = defineProps({
  /** 表格类型 固定字段为1, 自定义字段为2 */
  tableType: {
    type: Number,
    default: 1,
  },
  fieldKey: {
    type: String,
    required: false,
  },
})
const client_options = ref<OptionItem[]>([])
// 表格数据
const tableData = defineModel<Recordable[]>('modelValue')
const [register, { loadData }] = useSjzyTable({
  data: unref(tableData),
  showPager: false,
  border: 'inner',
  isCellSort: false,
  mouseConfig: {
    area: false,
  },
  // rowStyle: { height: '50px' },
  tableRowId: 'field_id',
  columns: [
    {
      title: '字段名称',
      field: 'field_label',
      width: 400,
      slots: { default: 'field_name' },
    },
    {
      title: '默认值',
      field: 'default_value',
      slots: { default: 'default_value' },
    },
    {
      title: '是否必填',
      field: 'is_required',
      width: 150,
      align: 'center',
      slots: { default: 'is_required' },
    },
    {
      title: '操作列',
      field: 'action',
      fixed: 'right',
      width: 250,
      slots: { default: 'action' },
    },
  ],
})

/**
 * 删除行
 * @param row 行数据
 */
function onClickDelete(row: Recordable) {
  tableData.value = tableData.value!.filter(item => item.field_id !== row.field_id)
}

/**
 * 初始化
 * @param val 选中项
 */
function init(val: CheckboxValueType[]) {
  if (props.tableType !== 1)
    return
  const initialData = tableData.value?.filter(item => item.template_default === 1)
  const [, , ...remainingData] = tableData.value ?? []

  const checkboxModelValue = val
  if (!initialData || !checkboxModelValue)
    return

  const options = client_options.value
    .filter(item => checkboxModelValue.includes(item.value))
    .map(item => ({
      ...item,
      field_label: item.label,
      field_name: 'envs',
      is_required: true,
    }))
  const updatedData = [...initialData]
  options.forEach((option) => {
    const item = remainingData.find(item => item.value === option.value)
    if (!item) {
      updatedData.push(option)
    }
    else {
      updatedData.push(item!)
    }
  })

  if (JSON.stringify(tableData.value) !== JSON.stringify(updatedData)) {
    tableData.value = updatedData
  }
}

/**
 * 监听选中项变化
 * @param val 选中项
 */
function handleCheckChange(val: CheckboxValueType[]) {
  init(val)
}

/**
 * 初始化
 */
function handleInit() {
  const find = tableData.value?.find(item => item.field_name === `${props.fieldKey}_env`)
  if (find) {
    if (find.default_value) {
      init(find.default_value)
    }
    else {
      find.default_value = client_options.value.map(item => item.value)
      console.log(client_options.value)
      init(find!.default_value)
    }
  }
}

onMountedOrActivated(async () => {
  /** 请求环境数据 */
  const { data } = await GetEnumGet({ code: 'env' }, {})
  client_options.value = (data as Recordable).map(
    (item: { enum_name: string, enum_value: string }) => {
      return {
        ...item,
        label: item.enum_name,
        value: item.enum_value,
      }
    },
  )

  handleInit()

  watch(
    () => tableData.value,
    (val, oVal) => {
      if (!isEqual(val, oVal)) {
        handleInit()
        loadData(tableData.value || [])
      }
    },
    { deep: true, immediate: true },
  )
})
</script>

<template>
  <SjzyTableV2 class="mt-3" @register="register">
    <template #action="{ row }">
      <SjzyButton type="primary" link :disabled="props.tableType === 1" @click="onClickDelete(row)">
        删除
      </SjzyButton>
    </template>
    <template #field_name="{ row }">
      <div :class="row.field_name === 'envs' ? 'text-right' : ''">
        {{ row.field_label }}
      </div>
    </template>
    <template #is_required="{ row }">
      <ElCheckbox v-if="row.field_name !== 'envs'" v-model="row.is_required"
        :disabled="row.field_name === `${props.fieldKey}_name`" />
    </template>
    <template #default_value="{ row }">
      <ElRow v-if="row.field_name === 'envs'" :gutter="10">
        <ElCol :span="16">
          <ElInput v-model="row.link" :prefix-icon="Link" />
        </ElCol>
        <ElCol :span="8">
          <ElInput v-model="row.version" :prefix-icon="h('img', {
            src: versionPng,
            style: {
              width: '16px',
            },
          })
            " />
        </ElCol>
      </ElRow>
      <ElCheckboxGroup v-else-if="row.field_name === `${props.fieldKey}_env`" v-model="row.default_value"
        @change="handleCheckChange">
        <ElCheckbox v-for="(item, index) in client_options" :key="index" :label="item.label" :value="item.value" />
      </ElCheckboxGroup>
      <SjzyDynamicPreview v-else v-model:file-list="row.default_value" v-model="row.default_value"
        v-bind="row.field_component" :component-type="row.field_component.componentType" is-edit is-modal />
    </template>
  </SjzyTableV2>
</template>
