<script lang="tsx" setup>
import { SjzyForm, SjzyTableAction, SjzyTableV2, useSjzyForm, useSjzyTable } from '@sjzy/ui'
import { WarningFilled } from '@element-plus/icons-vue'
import { concat, reduce, unionBy, uniq } from 'lodash-es'
import type { FlowRow, Selector, SelectorDisabled } from '../type'
import { GetIterateFlowStatusSelectorStatusType } from '@/api/devops/gongzuoliu'
import { GetIterateWorkflowDiagramNodeSelector } from '@/api/devops/gongzuoliuchengtu'

defineOptions({
  name: 'FlowTable',
})

const props = withDefaults(
  defineProps<{
    /** 流程绑定id */
    flowProcessId: number
  }>(),
  {},
)

const emit = defineEmits<{
  delete: [id: number]
}>()

const tableRef = ref<any>(null)
const tableData = ref<FlowRow[]>([])
const isStatus = ref(true)
const formModel = reactive({})
const flowNodeSelector = ref<Selector[]>([])
const flowStatusSelector = ref<Selector[]>([])
const isShow = ref(false)
const sumArr = ref<number[]>([])
const [formRegister] = useSjzyForm({
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'flow',
      label: '',
      component: 'SjzySelect',
      required: true,
      componentProps: ({ formModel }) => {
        return {
          options: {
            spareData: [],
            labelKey: ['label'],
            valueKey: 'value',
          },
          disabled: !!formModel.field_id,
          onSelectChange: () => {},
          placeholder: '请选择',
        }
      },
      colProps: {
        span: 24,
      },
    },
  ],
})

const [register] = useSjzyTable({
  showPager: false,
  border: 'inner',
  isCellSort: false,
  mouseConfig: {
    area: false,
  },
  tableRowId: 'flow_status_id',
  height: '100%',
  columns: [
    {
      title: '状态名称',
      field: 'status_flow_name',
      width: 250,
    },
    {
      title: '状态类型',
      field: 'status_type',
      width: 150,
      slots: { default: 'defaultType', edit: 'editType' },
      editRender: {},
    },
    {
      title: '相关节点绑定',
      field: 'process_node_ids',
      minWidth: 300,
      slots: { default: 'defaultNode', edit: 'editNode' },
      editRender: {},
    },
    {
      title: '操作',
      field: 'action',
      width: 100,
      slots: { default: 'action' },
    },
  ],
  editConfig: {
    trigger: 'click',
    mode: 'cell',
  },
  editRules: {
    date: [{ required: true, message: '请输入日期' }],
    name: [{ required: true, message: '请输入姓名' }],
  },
})

/**
 * 删除行
 * @param row 行数据
 */
function handleRemove(row: Recordable) {
  if (isStatus.value) {
    $baseConfirm({
      title: '提示',
      content: ' 是否确认删除此状态？',
      type: 'error',
      icon: WarningFilled,
      onOk: async () => {
        if (row.flow_status_id) {
          tableData.value = tableData.value.filter(
            (item: Recordable) => row.flow_status_id !== item.flow_status_id,
          )
          emit('delete', row.flow_status_id)
        }
      },
    })
  }
  else {
    // 本次迭代不做，后续补
    $baseConfirm({
      title: '是否确认删除此状态？',
      type: 'error',
      icon: WarningFilled,
      onOk: () => {},
      content: (
        <div>
          <div class="mb-2">共有xx个迭代处于“设计中”，删除此状态需分配一个新的状态</div>
          <SjzyForm model={formModel} onRegister={formRegister} />
        </div>
      ),
    })
  }
}

/** 获取节点下拉数据 */
function getFlowNodeSelector(id: number) {
  GetIterateWorkflowDiagramNodeSelector({ flow_process_id: id.toString() }).then(
    (res: Recordable) => {
      flowNodeSelector.value = res.data
    },
  )
}

/** 获取状态类型下拉数据 */
function getStatusSelector() {
  GetIterateFlowStatusSelectorStatusType({}).then((res: Recordable) => {
    flowStatusSelector.value = res.data
  })
}

/** 处理节点回显数据 */
function handleNode(ids: string[]) {
  if (ids?.length) {
    const arr = flowNodeSelector.value.filter((item: Selector) => ids.includes(item.value))
    return arr.map(item => item.label).join('、')
  }
  else {
    return ''
  }
}

/** 处理类型回显数据 */
function handleType(id: string) {
  const arr = flowStatusSelector.value.filter((item: Selector) => Number(item.value) === Number(id))
  return arr.map(item => item.label).join('')
}

/** 数据去重 */
function handleData(data: FlowRow[]) {
  tableData.value = unionBy(tableData.value, data, 'status_enum_id')
}

/** 选择状态类型 */
function handleTypeChange(row: FlowRow) {
  const filterData = tableData.value.filter(item => Number(item.status_type) === 1)
  if (filterData.length > 1) {
    const newId = row.flow_status_id
    const newIndex = filterData.findIndex(item => item.flow_status_id === newId)
    const oldIndex = filterData.findIndex(item => item.flow_status_id !== newId)
    isShow.value = true
    if (isShow.value) {
      $baseConfirm({
        content: '仅限一个“开始状态”，更换开始状态，原开始状态自动替换为过程状态。',
        title: '是否确认更换开始状态？',
        type: 'warning',
        onOk: () => {
          filterData[oldIndex].status_type = 2
          isShow.value = false
        },
        onCancel: () => {
          filterData[newIndex].status_type = 1
          isShow.value = false
        },
      })
    }
    else {
      isShow.value = false
    }
  }
}

/** 选择节点 */
function handleNodeChange() {
  const mapData: any = tableData.value
    .filter(item => item.process_node_ids)
    .map(item => item.process_node_ids)
  sumArr.value = reduce<number[], number[]>(
    mapData,
    (total: number[], value: number[]) => {
      return concat(total, value)
    },
    [],
  )
  sumArr.value = uniq(sumArr.value)
  flowNodeSelector.value.forEach((item: SelectorDisabled) => {
    if (sumArr.value.includes(+item.value)) {
      item.disabled = true
    }
    else {
      item.disabled = false
    }
  })
}

watch(
  () => props.flowProcessId,
  (val) => {
    getFlowNodeSelector(val)
  },
)

onMountedOrActivated(() => {
  getStatusSelector()
})

defineExpose({
  handleData,
  tableData,
})
</script>

<template>
  <SjzyTableV2 ref="tableRef" :data="tableData" class="mt-3" @register="register">
    <template #defaultType="{ row }">
      {{ handleType(row?.status_type) }}
    </template>
    <template #editType="{ row }">
      <SjzySelect
        v-model="row.status_type"
        :options="{
          spareData: flowStatusSelector,
          labelKey: ['label'],
          valueKey: 'value',
        }"
        @change="handleTypeChange"
      />
    </template>
    <template #defaultNode="{ row }">
      {{ handleNode(row?.process_node_ids) }}
    </template>
    <template #editNode="{ row }">
      <SjzySelect
        v-model="row.process_node_ids"
        multiple
        :options="{
          spareData: flowNodeSelector,
          labelKey: ['label'],
          valueKey: 'value',
        }"
        @change="handleNodeChange"
      />
    </template>
    <template #action="{ row }">
      <SjzyTableAction
        :show-btn-nums="1"
        :actions="[
          {
            label: '删除',
            onClick: handleRemove.bind(null, row),
          },
        ]"
      />
    </template>
  </SjzyTableV2>
</template>
