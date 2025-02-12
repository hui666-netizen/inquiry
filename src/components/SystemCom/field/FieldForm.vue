<script lang="ts" setup>
import { SjzyButton, useModal } from '@sjzy/ui'
import { Plus } from '@element-plus/icons-vue'
import FieldTable from './FieldTable.vue'
import FieldAddModal from './FieldAddModal.vue'
import BasicTitle from '@/components/BasicTitle/index.vue'
import { GetTemplateDetail, PostTemplateCreate, PostTemplateUpdate } from '@/api/devops/mobanguanli'
import router from '@/router'
import { GetFieldConfigGetFixedList } from '@/api/devops/ziduanguanli'

defineOptions({
  name: 'FieldForm',
})

const props = defineProps({
  propsData: {
    type: Object as () => PropsData,
    required: true,
  },
})

type PropsData = {
  moduleId: string /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */
  fieldKey: string /* 模块关键词;client-终端 microservice微服务 product-产品 iterative-迭代 */
  routeName: string /* 列表路由名 */
}

type TableData = {
  field_label: string
  field_name?: string
  default_value?: string | string[]
  is_required: boolean
  lebel?: string
  field_sort?: string | number
  envData?: any[]
  template_default?: number
}

type TypeEnums = '1' | '2'

const [register, { openModal, setModalProps }] = useModal()
const route = useRoute()
const tabsStore = useTabsStore()
const { delVisitedRoute } = tabsStore
const { toLastTab } = useTabs()
const mergeList = ref<TableData[]>([])

const template_name = ref('')
const detailId = ref<string | undefined>(undefined)
/** 详情类型  新增1 编辑2 */
const type = ref<TypeEnums>('1')
const loading = ref(false)
/** 固定字段的数据 */
const fixedTableData = ref<TableData[]>([])
const resetTableData = ref<TableData[]>([])
/** 自定义字段的数据 */
const customTableData = ref<TableData[]>([])

/** 页面保存事件 */
async function handleSave() {
  if (!template_name.value) {
    return $baseMessage('请输入模板名称', 'error')
  }
  // 需要处理成接口的参数字段进行保存
  const api: {
    [x: string]: Fn
  } = {
    1: PostTemplateCreate,
    2: PostTemplateUpdate,
  }
  const envData = fixedTableData.value.filter(item => item.field_name === 'envs')
  const fixedData = fixedTableData.value.filter(item => item.field_name !== 'envs')
  const handleFixedData = fixedData.map((item) => {
    const param = {
      field_name: item.field_name,
      default_value: item.default_value,
      is_required: item.is_required,
    }
    if (item.field_name === `${props.propsData.fieldKey}_env`) {
      return {
        ...param,
        envData,
      }
    }
    else {
      return {
        ...param,
      }
    }
  })
  const handleCustomData = customTableData.value.map((item) => {
    const param = {
      field_name: item.field_name,
      default_value: item.default_value,
      is_required: item.is_required,
    }
    return {
      ...param,
    }
  })
  const data = await api[type.value]({
    module_id: props.propsData.moduleId,
    id: detailId.value!,
    template_name: template_name.value,
    template_content: [...handleFixedData, ...handleCustomData],
  })
  if (data.code === '200') {
    $baseMessage(
      detailId.value ? data.message || '编辑成功' : data.message || '新增成功',
      'success',
    )
    await delVisitedRoute(route.path)
    router.push({ name: props.propsData.routeName })
    resetData()
  }
}

/** 重置数据 */
function resetData() {
  template_name.value = ''
  fixedTableData.value = resetTableData.value
  customTableData.value = []
  type.value = '1'
  detailId.value = undefined
}

/** 添加字段事件 */
function handleAddClick() {
  setModalProps({
    title: '添加字段',
    width: 650,
  })
  openModal(true, {
    data: customTableData.value.map(item => item.field_name),
    fixedData: fixedTableData.value
      .filter(item => item.field_name !== 'envs')
      .map(item => item.field_name),
  })
}

/** 添加字段成功回调 */
function handleAddSuccess(
  data: { label: string, value: string, is_required: boolean, field_label: string }[],
) {
  const list = data.map((item) => {
    return { ...item, is_required: item.is_required }
  })

  const values = data.map(item => item.value)
  const dataList = customTableData.value.filter(item =>
    values.includes(item.field_name as string),
  )
  customTableData.value = list.reduce((prev, next) => {
    if (next) {
      const bool = prev.some(item => item.field_name === next.value)
      if (!bool) {
        prev.push(next)
      }
    }
    return prev
  }, dataList)
}

/** 获取详情 */
async function getDetail() {
  const { data } = await GetTemplateDetail({
    id: detailId.value!,
  })
  const apiData = data as Recordable
  const { fieldList, template_content } = apiData
  // 合并数据
  mergeList.value = fieldList.map((item: TableData) => {
    const arr = template_content.filter((item1: TableData) => item.field_name === item1.field_name)
    return {
      ...item,
      ...arr[0],
    }
  })
  template_name.value = apiData.template_name
  detailId.value = apiData.id
  fixedTableData.value = mergeList.value.filter((item: TableData) => item.template_default === 1)
  const envData = fixedTableData.value.filter(
    item => item.field_name === `${props.propsData.fieldKey}_env`,
  )[0]?.envData
  if (envData?.length) {
    fixedTableData.value = [...fixedTableData.value, ...envData]
  }
  customTableData.value = mergeList.value.filter((item: TableData) => item.template_default === 0)
}

/** 取消 */
async function handleClose() {
  await delVisitedRoute(route.path)
  toLastTab()
}

/** 获取固定字段数据 */
async function getFixedFieldData(module_id: string) {
  const { data } = await GetFieldConfigGetFixedList({ module_id })
  resetTableData.value = data as any
  resetTableData.value.forEach((item) => {
    item.is_required = true
  })
  fixedTableData.value = resetTableData.value
}

onMountedOrActivated(async () => {
  resetData()
  const { query } = route
  if (query) {
    detailId.value = query.id! as string
    type.value = (query.type as TypeEnums) || '1'
    loading.value = true

    if (query.id) {
      await getDetail()
    }
    else {
      await getFixedFieldData(props.propsData.moduleId)
    }
    loading.value = false
  }
})
</script>

<template>
  <div class="terminalSettings-container flex flex-col">
    <div v-loading="loading" class="flex-1 overflow-hidden">
      <div class="h-full overflow-auto bg-[var(--sjzy-bg)]">
        <!-- 头部 -->
        <div class="h-11 w-full flex justify-between p-x-4 leading-11">
          <div class="w-80">
            <ElInput
              v-model="template_name"
              placeholder="请输入模板名称"
              clearable
              maxlength="50"
              show-word-limit
            />
          </div>
          <div class="">
            <SjzyButton type="default" @click="handleClose">
              取消
            </SjzyButton>
            <SjzyButton type="primary" @click="handleSave">
              保存
            </SjzyButton>
          </div>
        </div>
        <ElDivider class="m-0" />

        <!-- 固定字段 -->
        <BasicTitle header="固定字段">
          <FieldTable
            :id="detailId"
            v-model="fixedTableData"
            :table-type="1"
            :field-key="props.propsData.fieldKey"
          />
        </BasicTitle>

        <!-- 自定义字段 -->
        <BasicTitle header="可配置字段">
          <template #title_left>
            <div>
              <SjzyButton type="primary" link :icon="Plus" @click="handleAddClick()">
                添加字段
              </SjzyButton>
            </div>
          </template>
          <FieldTable :id="detailId" v-model="customTableData" :table-type="2" />
        </BasicTitle>
      </div>
    </div>

    <!-- 添加字段 -->
    <FieldAddModal
      :module-id="props.propsData.moduleId"
      @register="register"
      @success="handleAddSuccess"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.vxe-table--render-default .vxe-table--border-line) {
  border: none !important;
}

:deep(.el-divider--horizontal) {
  border-top-color: var(--sjzy-table-border-color);
}
</style>
