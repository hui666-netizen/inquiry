<script lang="ts" setup>
import type { Recordable } from '@sjzy/ui'
import { SjzyModal, SjzyTableAction, SjzyTableV2, useModal, useSjzyTable } from '@sjzy/ui'
import { ElInput } from 'element-plus'
import type { FlowRow, FlowStatusDetail, FlowStatusRow } from '../type'
import {
  GetIterateFlowStatusEnumListQuery,
  PostIterateFlowStatusEnumCreate,
  PostIterateFlowStatusEnumDelete,
  PostIterateFlowStatusEnumUpdate,
} from '@/api/devops/zhuangtaiku'

defineOptions({
  name: 'StatusModel',
})

const emit = defineEmits<{
  submit: [data: FlowRow[]]
}>()

/** 默认颜色数组 */
const showColor = [
  'blue',
  'green',
  'light-cyan',
  'aqua',
  'light-yellow',
  'yellow',
  'earthy-yellow',
  'brick-red',
  'purple',
  'dark-gray',
]

const tableData = ref<FlowStatusRow[]>([])
const selectData = ref<FlowRow[]>([])
const selectIds = ref<number[]>([])
const loading = ref<boolean>(false)
const [modalRegister, { setModalProps, closeModal }] = useModal()
const [register, { setEditCell, loadData, getSelectRows }] = useSjzyTable({
  showPager: false,
  showToolbar: true,
  showCheckbox: true,
  border: 'full',
  isCellSort: false,
  mouseConfig: {
    area: false,
  },
  tableRowId: 'status_enum_id',
  height: '100%',
  columns: [
    {
      title: '状态名称',
      field: 'name',
      width: 250,
      slots: { default: 'defaultName', edit: 'editName' },
      editRender: {},
    },
    {
      title: '',
      field: 'colour',
      width: 40,
      align: 'center',
      slots: { default: 'colour' },
    },
    {
      title: '已应用的工作流',
      field: 'flow_status_text_detail',
      minWidth: 300,
      slots: { default: 'flow_status_text_detail' },
    },
    {
      title: '操作',
      field: 'action',
      width: 100,
      slots: { default: 'action' },
    },
  ],
  editConfig: {
    trigger: 'manual',
    mode: 'row',
  },
  checkboxConfig: {
    checkField: 'isChecked',
    checkRowKeys: selectIds as any, // 类型有问题，暂时用any
    checkMethod: ({ row }) => {
      return !selectIds.value.includes(row.status_enum_id!)
    },
    reserve: true,
  },
})

/** 编辑行 */
function handleRowEdit(row: FlowStatusRow) {
  setEditCell(row, 'name')
  row.isActived = true
}

/** 保存行 */
async function handleRowSave(row: FlowStatusRow) {
  const { name, colour } = row
  if (!row?.status_enum_id) {
    if (row.name) {
      const param = { project_id: 1, name, colour }
      await PostIterateFlowStatusEnumCreate(param)
      $baseMessage('添加成功', 'success')
      row.isActived = false
      resetData()
    }
    else {
      row.isActived = false
      resetData()
    }
  }
  else {
    const param = { status_enum_id: row.status_enum_id!, name, colour }
    await PostIterateFlowStatusEnumUpdate(param)
    $baseMessage('编辑成功', 'success')
    row.isActived = false
    resetData()
  }
}

/** 取消行 */
async function handleRowCancel(row: FlowStatusRow) {
  row.isActived = false
  resetData()
}

/** 编辑颜色 */
function handleColor(row: FlowStatusRow) {
  setEditCell(row, 'name')
  row.isActived = true
}
/** 保存 */
async function handleSave() {
  selectData.value = getSelectRows().map((item: Recordable) => {
    return {
      status_enum_id: item.status_enum_id,
      status_flow_name: item.name,
    }
  })
  emit('submit', selectData.value)
  resetData()
  closeModal()
}

/** 重置数据 */
function resetData() {
  tableData.value = []
  getList()
}
/** 取消 */
function handleCancel() {
  resetData()
  closeModal()
}

/** 删除 */
async function handleRemove(row: FlowStatusRow) {
  if (row.name) {
    await PostIterateFlowStatusEnumDelete({ status_enum_ids: [row.status_enum_id] })
    $baseMessage('删除成功', 'success')
    resetData()
  }
  else {
    tableData.value = tableData.value.filter(
      (item: Recordable) => row.status_enum_id !== item.status_enum_id,
    )
  }
}

/**
 * 打开弹窗
 * @param row 行数据
 */
function handleModel(data: FlowRow[]) {
  if (data.length) {
    selectData.value = data
    selectIds.value = data.map((item: FlowRow) => item.status_enum_id!)
  }
  setModalProps({
    title: '状态库',
    size: 'medium',
    visible: true,
    cancelText: '取消',
    okText: '保存',
    height: 450,
  })
}

/** 添加状态 */
async function handleAddClick() {
  const record = {
    project_id: 1,
    status_enum_id: 0,
    name: '',
    colour: '',
    flow_status_text_detail: [],
    isActived: true,
  }
  tableData.value.unshift(record)
  await loadData(tableData.value)
  setEditCell(tableData.value[0], 'name')
}

/**
 * 处理已应用的工作流
 * @param arr 详情数组
 * @return {string}
 */
function handleDetail(arr: FlowStatusDetail[]) {
  return arr.map(item => item.status_flow_name).join('、')
}

/** 获取列表 */
function getList() {
  loading.value = true
  GetIterateFlowStatusEnumListQuery({ project_id: 1 }, {})
    .then((res: Recordable) => {
      tableData.value = res.data
      tableData.value.forEach((item: FlowStatusRow) => {
        item.isActived = false
      })
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  getList()
})

defineExpose({
  handleModel,
})
</script>

<template>
  <SjzyModal @register="modalRegister" @ok="handleSave()" @cancel="handleCancel()">
    <SjzyTableV2 v-loading="loading" class="mt-0" :data="tableData" @register="register">
      <template #toolbar_buttons>
        <SjzyButton type="primary" @click="handleAddClick()">
          添加状态
        </SjzyButton>
      </template>
      <template #defaultName="{ row }">
        <div v-if="!row.name" class="flex-inline">
          {{ row.name }}
        </div>
        <div
          v-else-if="row.colour === 'dark-gray'"
          class="flex-inline border-rd-2px px-8px py-5px"
          :style="{
            color: 'var(--sjzy-color-dark-gray)',
          }"
        >
          {{ row.name }}
        </div>
        <div
          v-else
          class="flex-inline border-rd-2px px-8px py-5px"
          :style="{
            color: `var(--sjzy-color-${row.colour})`,
            backgroundColor: `var(--sjzy-bg-color-${row.colour})`,
          }"
        >
          {{ row.name }}
        </div>
      </template>
      <template #editName="params">
        <ElInput
          v-model="params.row.name"
          class="w-70"
          placeholder="请输入状态名称"
          clearable
          maxlength="20"
          show-word-limit
        />
      </template>
      <template #colour="{ row }">
        <SjzyColor v-model="row.colour" :default-color="showColor" @click="handleColor(row)">
          <template #default>
            <div class="flex items-center justify-center">
              <span
                class="icon iconfont icon-yanse"
                :style="{
                  color: `var(--sjzy-color-${row.colour || 'dark-gray'})`,
                }"
              />
            </div>
          </template>
        </SjzyColor>
      </template>
      <template #flow_status_text_detail="{ row }">
        {{ handleDetail(row.flow_status_text_detail) }}
      </template>

      <template #action="{ row }">
        <SjzyTableAction
          :show-btn-nums="2"
          :actions="[
            {
              label: '删除',
              onClick: handleRemove.bind(null, row),
              disabled: row.flow_status_text_detail.length > 0,
              ifShow: !row.isActived,
            },
            {
              label: '编辑',
              onClick: handleRowEdit.bind(null, row),
              ifShow: !row.isActived,
            },
            {
              label: '保存',
              onClick: handleRowSave.bind(null, row),
              ifShow: row.isActived,
            },
            {
              label: '取消',
              onClick: handleRowCancel.bind(null, row),
              ifShow: row.isActived,
            },
          ]"
        />
      </template>
    </SjzyTableV2>
  </SjzyModal>
</template>

<style lang="scss" scoped>
.member-item {
  display: flex;
  justify-content: space-between;
  height: 28px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 28px;
  color: #202122;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

:deep(.el-divider__text) {
  padding: 0 4px;
  background-color: var(--sjzy-part-table-head-bg-color);
}

:deep(.vxe-toolbar) {
  padding: 0 0 8px;
}
</style>
