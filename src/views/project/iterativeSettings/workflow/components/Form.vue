<script lang="ts" setup>
import { SjzyForm, useSjzyForm } from '@sjzy/ui'
import { isObject } from '@sjzy/utils'
import {
  GetIterateWorkflowDiagramDetail,
  PostIterateWorkflowDiagramCreate,
  PostIterateWorkflowDiagramUpdate,
} from '@/api/devops/gongzuoliuchengtu'
import type { IWorkFlowNode } from '@/components/WorkFlow/types'
import WorkFlow from '@/components/WorkFlow/index.vue'
import { gteInitNodeData } from '@/components/WorkFlow/hooks/useFlowModel'

defineOptions({
  name: 'IterativeSettingsWorkflowForm',
})

/** tabsStore */
const tabsStore = useTabsStore()
/** route */
const route = useRoute()
/** router */
const router = useRouter()
/** 详情id */
const id = ref<number>()
/** loading */
const loading = ref(false)
/** 工作流程组件Ref */
const workFlowRef = ref<InstanceType<typeof WorkFlow>>()
/** 表单数据 */
const formModel = reactive<API.flowProcessReuslt & { node_list?: IWorkFlowNode[] }>({
  flow_process_id: 0,
  flow_process_name: '',
  flow_process_desc: '',
  project_id: 1,
  version: 0,
  node_list: [],
})
/** 删除页面标签 */
const { delVisitedRoute } = tabsStore
/** useSjzyForm */
const [register, { validate }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      field: 'flow_process_name',
      label: '工作流程名称',
      component: 'SjzyInput',
      required: true,
      componentProps: {
        placeholder: '请输入',
        maxlength: 50,
      },
      colProps: {
        span: 6,
      },
    },
    {
      field: 'flow_process_desc',
      label: '流程说明',
      component: 'SjzyInputTextarea',
      componentProps: {
        placeholder: '请输入',
        maxlength: 500,
      },
      colProps: {
        span: 18,
      },
    },
  ],
})

/** 保存 */
async function handleSave() {
  const flag = await validate()
  if (!flag)
    return
  const node_list = await workFlowRef.value?.getNodes()
  // console.log(node_list,'node_list');
  if (!node_list)
    return

  loading.value = true
  const params = {
    ...formModel,
    flow_process_id: Number(id.value),
    node_list: node_list.map((item) => {
      return {
        ...item.data,
      }
    }),
  }
  const api = id.value ? PostIterateWorkflowDiagramUpdate : PostIterateWorkflowDiagramCreate

  const { data }: any = await api(params).finally(() => {
    loading.value = false
  })
  $baseMessage('保存成功！')
  if (!id.value) {
    delVisitedRoute(route.path)
    router.push({
      name: 'IterativeSettingsWorkflowEdit',
      params: { id: data.flow_process_id },
      query: { name: data.flow_process_name },
    })
  }
  else {
    handleInit(data.flow_process_id)
  }
}
/** 详情获取 */
async function handleInit(id: string) {
  if (!id)
    return
  loading.value = true
  const { data }: any = await GetIterateWorkflowDiagramDetail({
    flow_process_id: String(id),
  }).finally(() => {
    loading.value = false
  })
  Object.assign(formModel, {
    ...data,
    node_list: (data as API.flowProcessReuslt).node_list?.map((i: any) => {
      return {
        id: String(i.node?.row_id),
        data: {
          ...i,
          setting_config: {
            ...i.setting_config,
            advanced: isObject(i.setting_config.advanced) ? i.setting_config.advanced : {},
            basic: isObject(i.setting_config.basic) ? i.setting_config.basic : {},
            node_manger: isObject(i.setting_config.node_manger) ? i.setting_config.node_manger : {},
          },
        },
      }
    }),
  })
  nextTick(() => {
    workFlowRef.value?.layoutGraph()
  })
}
/** 取消 */
function handleCancel() {
  router.push({ name: 'IterativeSettings', query: { type: 'flow' } })
}

onMountedOrActivated(() => {
  id.value = Number(route.params.id)
  if (id.value) {
    handleInit(String(id.value))
  }
  else {
    formModel.node_list = [gteInitNodeData(0, '开始'), gteInitNodeData(998, '结束')]
  }
})
</script>

<template>
  <div v-loading="loading" class="sjzy-box p-0!">
    <div class="sjzy-border-bottom flex items-center justify-between p-x-15px p-y-8px">
      <span class="text-16px font-bold">{{ id ? '编辑' : '新建' }}工作流程</span>
      <div>
        <SjzyButton @click="handleCancel()">
          取消
        </SjzyButton>
        <SjzyButton :loading="loading" type="primary" @click="handleSave()">
          保存
        </SjzyButton>
      </div>
    </div>

    <div>
      <SjzyPart title="流程基本信息" type="outline">
        <div class="p-x-12px">
          <SjzyForm :model="formModel" @register="register" />
        </div>
      </SjzyPart>

      <SjzyPart title="工作流程节点设置" type="outline">
        <div class="h-[calc(100vh-280px)] p-x-12px p-b-12px">
          <WorkFlow
            ref="workFlowRef"
            :nodes-data="formModel.node_list"
            style="border: 1px solid #d2d9dd"
          />
        </div>
      </SjzyPart>
    </div>
  </div>
</template>
