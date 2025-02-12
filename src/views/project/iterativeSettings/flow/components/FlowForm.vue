<script lang="ts" setup>
import { SjzyForm, useSjzyForm } from '@sjzy/ui'
import { Plus } from '@element-plus/icons-vue'
import type { FlowRow, Selector } from '../type'
import FlowTable from './FlowTable.vue'
import StatusModel from './StatusModel.vue'
import { GetIterateWorkflowDiagramSelector } from '@/api/devops/gongzuoliuchengtu'
import {
  GetIterateFlowStatusDetail,
  PostIterateFlowStatusCreate,
  PostIterateFlowStatusUpdate,
} from '@/api/devops/gongzuoliu'

defineOptions({
  name: 'FlowForm',
})

const { delVisitedRoute } = useTabsStore()
const route = useRoute()
const router = useRouter()
const loading = ref(false)
const title = ref('新建')
const detailId = ref(0)
const flowSelector = ref<Selector[]>([])
const selectData = ref<FlowRow[]>([])
const statusModelRef = ref<InstanceType<typeof StatusModel>>()
const formModel = reactive<Recordable>({
  project_id: 1,
  status_flow_desc: '',
})
const detailData = ref<Recordable>({})
const flowTableRef = ref<InstanceType<typeof FlowTable>>()
const [register, { validate }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'status_flow_name',
      label: '工作流名称',
      component: 'SjzyInput',
      required: true,
      componentProps: {
        placeholder: '请输入',
        maxlength: 20,
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'flow_process_id',
      label: '工作流程绑定',
      component: 'SjzySelect',
      required: true,
      componentProps: () => {
        return {
          options: {
            spareData: flowSelector.value,
            labelKey: ['label'],
            valueKey: 'value',
          },
          disabled: detailId.value,
          onSelectChange: () => {},
          placeholder: '请选择',
        }
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'status_flow_desc',
      label: '工作流说明',
      component: 'SjzyInputTextarea',
      componentProps: {
        placeholder: '请输入',
        maxlength: 200,
        showLimit: true,
      },
      colProps: {
        span: 12,
      },
    },
  ],
})

/** 添加状态 */
function handleAddClick() {
  statusModelRef.value?.handleModel(selectData.value)
}

/** 获取流程下拉数据 */
function getFlowSelector() {
  GetIterateWorkflowDiagramSelector({ project_id: '1' }).then((res: Recordable) => {
    flowSelector.value = res.data
  })
}

/** 获取详情数据 */
function getFlowStatusDetail(id: number) {
  GetIterateFlowStatusDetail({ flow_status_id: id }).then((res: Recordable) => {
    detailData.value = res.data
    const { flow_status_collection } = detailData.value
    Object.assign(formModel, detailData.value)
    flow_status_collection.forEach((item: Recordable) => {
      item.status_flow_name = item.status_enum_name
      item.process_node_ids = item.flow_status_node_relation.map(
        (item: Recordable) => item.process_node_id,
      )
    })
    submit(flow_status_collection)
  })
}

/** 保存 */
async function handleSave() {
  const flag = await validate()
  if (!flag)
    return
  loading.value = true
  const tableData = flowTableRef.value?.tableData
  if (formModel.status_flow_desc) {
    formModel.status_flow_desc = ''
  }
  const params: any = {
    ...formModel,
    flow_status_collection: tableData,
  }
  const api = detailId.value === 0 ? PostIterateFlowStatusCreate : PostIterateFlowStatusUpdate
  const { code }: Recordable = await api({ ...params }).finally(() => {
    loading.value = false
  })
  if (+code === 200) {
    $baseMessage('保存成功！')
    delVisitedRoute(route.path)
    router.push({ name: 'IterativeSettings', query: { type: 'flow' } })
  }
}

/** 取消 */
function handleCancel() {
  delVisitedRoute(route.path)
  router.push({ name: 'IterativeSettings', query: { type: 'flow' } })
}

/** 弹窗emit */
async function submit(data: FlowRow[]) {
  selectData.value = data
  flowTableRef.value?.handleData(selectData.value)
}

/** 表格emit */
async function onDelete(id: number) {
  selectData.value = selectData.value.filter(item => item.flow_status_id !== id)
  flowTableRef.value?.handleData(selectData.value)
}

onMountedOrActivated(() => {
  getFlowSelector()
  if (+route.params.id) {
    detailId.value = +route.params.id
    title.value = !detailId.value ? '新建' : '编辑'
    getFlowStatusDetail(detailId.value)
  }
})
</script>

<template>
  <div v-loading="loading" class="sjzy-box p-0!">
    <div class="sjzy-border-bottom flex items-center justify-between p-x-15px p-y-8px">
      <span class="text-16px font-bold">{{ title }}工作流</span>
      <div>
        <SjzyButton @click="handleCancel()">
          取消
        </SjzyButton>
        <SjzyButton type="primary" @click="handleSave()">
          保存
        </SjzyButton>
      </div>
    </div>

    <div>
      <SjzyPart title="工作流基本信息" type="outline">
        <div class="p-x-12px">
          <SjzyForm :model="formModel" @register="register" />
        </div>
      </SjzyPart>

      <SjzyPart title="工作流状态设置" type="outline">
        <template #actions>
          <div class="flex justify-between pl-0">
            <SjzyButton type="primary" link :icon="Plus" @click="handleAddClick()">
              添加状态
            </SjzyButton>
          </div>
        </template>
        <div class="h-[calc(100vh-290px)] p-x-12px p-b-12px">
          <FlowTable
            ref="flowTableRef"
            :flow-process-id="formModel?.flow_process_id!"
            @delete="onDelete"
          />
        </div>
      </SjzyPart>
    </div>

    <StatusModel ref="statusModelRef" @submit="submit" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.fe-part-header-operation) {
  padding-left: 0 !important;
}
</style>
