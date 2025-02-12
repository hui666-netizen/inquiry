<script lang="ts" setup>
import {
  GetIterateWorkflowDiagramPageQuery,
  PostIterateWorkflowDiagramCopy,
  PostIterateWorkflowDiagramDelete,
} from '@/api/devops/gongzuoliuchengtu'
import { GetIterateFlowStatusListQuery, PostIterateFlowStatusDelete } from '@/api/devops/gongzuoliu'

defineOptions({
  name: 'FlowManagement',
})

type FlowStatusRow = {
  flow_status_id?: number
  status_flow_name?: string
}
/** router */
const router = useRouter()
/** 流程列表 */
const flowDataList = ref<API.listResult[]>()
/** 流程列表loading */
const flowDataLoading = ref(false)
/** 工作流列表 */
const workFlowDataList = ref<FlowStatusRow[]>()
/** 工作流列表loading */
const workFlowDataLoading = ref(false)

/** 新增编辑工作流程 */
function handleFlowAdd() {
  router.push({ name: 'IterativeSettingsWorkflowAdd' })
}
/** 新增编辑工作流程 */
function handleFlowEdit(item: API.listResult) {
  router.push({
    name: 'IterativeSettingsWorkflowEdit',
    params: { id: item.flow_process_id },
    query: { name: item.flow_process_name },
  })
}
/** 复制工作流程 */
async function handleFlowCopy(item: API.listResult) {
  await PostIterateWorkflowDiagramCopy({
    id: item.flow_process_id,
  })
  $baseMessage('复制成功!', 'success')
  handleGetIterateWorkflowDiagramPageQuery()
}
/** 删除工作流程 */
function handleFlowDel(item: API.listResult) {
  $baseConfirm({
    content: t('是否确认删除此模板?'),
    title: t('温馨提示'),
    onOk: async () => {
      await PostIterateWorkflowDiagramDelete({
        flow_process_id: item.flow_process_id,
      })
      $baseMessage('删除成功!', 'success')
      handleGetIterateWorkflowDiagramPageQuery()
    },
  })
}
/** 获取工作流程列表 */
async function handleGetIterateWorkflowDiagramPageQuery() {
  flowDataLoading.value = true
  const { data } = await GetIterateWorkflowDiagramPageQuery({ project_id: 1 }).finally(() => {
    flowDataLoading.value = false
  })
  flowDataList.value = data as any
}
/** 新增工作流 */
function handleWorkFlowAdd() {
  router.push({ name: 'IterativeSettingsFlowAddForm' })
}
/** 编辑工作流 */
function handleWorkFlowEdit(item: FlowStatusRow) {
  router.push({
    name: 'IterativeSettingsFlowEditForm',
    params: { id: item.flow_status_id },
  })
}
/** 删除工作流 */
function handleWorkFlowDel(item: FlowStatusRow) {
  $baseConfirm({
    content: t('是否确认删除此模板?'),
    title: t('温馨提示'),
    onOk: async () => {
      await PostIterateFlowStatusDelete({
        flow_status_ids: [item.flow_status_id!.toString()],
      })
      $baseMessage('删除成功!', 'success')
      handleGetIterateFlowStatusPageQuery()
    },
  })
}
/** 获取工作流列表 */
async function handleGetIterateFlowStatusPageQuery() {
  workFlowDataLoading.value = true
  const { data } = await GetIterateFlowStatusListQuery({ project_id: 1 }).finally(() => {
    workFlowDataLoading.value = false
  })
  workFlowDataList.value = data as any
}

onMountedOrActivated(() => {
  handleGetIterateWorkflowDiagramPageQuery()
  handleGetIterateFlowStatusPageQuery()
})
</script>

<template>
  <div class="flowManagement">
    <SjzyPart title="流程管理" type="outline">
      <div v-loading="flowDataLoading" class="flex flex-wrap p-x-12px">
        <div
          class="border-box h-204px flex flex-col items-center justify-center border-style-dashed!"
          @click="handleFlowAdd()"
        >
          <SjzyIcon icon-font="icon-tianjia" :size="20" />
          <span class="m-t-10px">新增流程</span>
        </div>
        <div v-for="item in flowDataList" :key="item.flow_process_id" class="border-box">
          <div
            class="h-164px bg-[var(--sjzy-part-bg-color)] p-4px"
            @click.stop="handleFlowEdit(item)"
          >
            <img src="../../../../assets//svg/flow.svg" alt="" class="h-100% w-100%">
          </div>
          <div class="flex items-center justify-between p-10px leading-18px">
            <span clss="text-14px">{{ item.flow_process_name }}</span>
            <span>
              <ElDropdown trigger="hover">
                <span><SjzyIcon icon-font="icon-shenglve" :size="16" /></span>
                <template #dropdown>
                  <ElDropdownMenu>
                    <ElDropdownItem>
                      <div class="p-x-15px" @click.stop="handleFlowEdit(item)"> 编辑 </div>
                    </ElDropdownItem>
                    <ElDropdownItem>
                      <div class="p-x-15px" @click.stop="handleFlowCopy(item)"> 复制 </div>
                    </ElDropdownItem>
                    <ElDropdownItem>
                      <div class="p-x-15px" @click.stop="handleFlowDel(item)"> 删除 </div>
                    </ElDropdownItem>
                  </ElDropdownMenu>
                </template>
              </ElDropdown>
            </span>
          </div>
        </div>
      </div>
    </SjzyPart>
    <SjzyPart title="工作流" type="outline">
      <div v-loading="workFlowDataLoading" class="flex flex-wrap p-x-12px">
        <div
          class="border-box h-204px flex flex-col items-center justify-center border-style-dashed!"
          @click="handleWorkFlowAdd()"
        >
          <SjzyIcon icon-font="icon-tianjia" :size="20" />
          <span class="m-t-10px">新增工作流</span>
        </div>
        <div v-for="item in workFlowDataList" :key="item.flow_status_id" class="border-box">
          <div
            class="h-164px bg-[var(--sjzy-part-bg-color)] p-4px"
            @click.stop="handleWorkFlowEdit(item)"
          >
            <img src="../../../../assets//svg/work_flow.svg" alt="" class="h-100% w-100%">
          </div>
          <div class="flex items-center justify-between p-10px leading-18px">
            <span clss="text-14px">{{ item.status_flow_name }}</span>
            <span>
              <ElDropdown trigger="hover">
                <span><SjzyIcon icon-font="icon-shenglve" :size="16" /></span>
                <template #dropdown>
                  <ElDropdownMenu>
                    <ElDropdownItem>
                      <div class="p-x-15px" @click.stop="handleWorkFlowEdit(item)"> 编辑 </div>
                    </ElDropdownItem>
                    <ElDropdownItem>
                      <div class="p-x-15px" @click.stop="handleWorkFlowDel(item)"> 删除 </div>
                    </ElDropdownItem>
                  </ElDropdownMenu>
                </template>
              </ElDropdown>
            </span>
          </div>
        </div>
      </div>
    </SjzyPart>
  </div>
</template>

<style lang="scss" scoped>
.flowManagement {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 110px);
  overflow-y: auto;

  .border-box {
    width: 285px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    border: 1px solid #e1e6eb;

    &:hover {
      border-color: var(--el-color-primary);
    }
  }
}
</style>
