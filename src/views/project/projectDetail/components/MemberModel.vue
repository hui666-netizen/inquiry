<script lang="ts" setup>
import { SjzyModal, useModal } from '@sjzy/ui'
import { Close } from '@element-plus/icons-vue'
import { uniqBy } from 'lodash-es'
import {
  GetProjectProjectUserSelectorPageQuery,
  PostProjectProjectUserCreate,
} from '@/api/devops/xiangmuyonghu'

defineOptions({
  name: 'MemberModel',
})

const emit = defineEmits<{
  reload: []
}>()

type ListItem = {
  user_id?: number
  user_name?: string
  en_user_name?: string
  account?: string
  role_code?: string
  role_name?: string
  position_name?: string
  company_id?: number
  company_name?: string
  dept_id?: number
  dept_name?: string
  is_enable?: boolean
  enable_name?: string
}

const dataList = ref<ListItem[]>([])
const keyword = ref<string>('')
const selectData = ref<ListItem[]>([])
const [modalRegister, { setModalProps, closeModal }] = useModal()
const loading = ref<boolean>(false)

/** 保存 */
async function handleSave() {
  const ids = selectData.value.map((item: ListItem) => item.user_id!.toString())
  await PostProjectProjectUserCreate({ project_id: 1, user_ids: ids })
  $baseMessage('添加成功', 'success')
  emit('reload')
  resetData()
  closeModal()
}

/** 重置数据 */
function resetData() {
  keyword.value = ''
  selectData.value = []
}

/** 取消 */
function handleCancel() {
  resetData()
}

/** 删除 */
function handleRemove(id: number) {
  selectData.value = selectData.value.filter((item: Recordable) => id !== item.user_id)
}

/**
 * 打开弹窗
 * @param row 行数据
 */
function handleModel() {
  setModalProps({
    title: '添加成员',
    size: 'mini',
    visible: true,
    cancelText: '取消',
    okText: '保存',
  })
}

/** 远程下拉事件 */
async function remoteEvent(val: string) {
  const res: Recordable = await GetProjectProjectUserSelectorPageQuery({
    keywork: val,
    page: 1,
    list_rows: 2000,
  })
  dataList.value = res.data.data
}

/** 选择成员 */
function handleChange(id: number) {
  if (id) {
    selectData.value.push(dataList.value.filter((item: Recordable) => id === item.user_id)[0])
    selectData.value = uniqBy(selectData.value, 'user_id')
  }
}

onMountedOrActivated(() => {})

defineExpose({
  handleModel,
})
</script>

<template>
  <SjzyModal @register="modalRegister" @ok="handleSave" @cancel="handleCancel">
    <ElSelect
      v-model="keyword"
      placeholder="搜索成员"
      filterable
      remote
      reserve-keyword
      remote-show-suffix
      :remote-method="remoteEvent"
      :loading="loading"
      @change="handleChange"
    >
      <ElOption
        v-for="item in dataList"
        :key="item.user_id"
        :label="item.user_name"
        :value="item?.user_id || 0"
      >
        <div class="flex justify-between">
          <span class="w-33%">{{ item.user_name }}</span>
          <span class="w-33%">{{ item.account }}</span>
          <span class="w-33% text-right">{{ item.role_name }}</span>
        </div>
      </ElOption>
    </ElSelect>

    <div v-if="selectData.length > 0" class="mt-5 bg-[var(--sjzy-part-bg-color)] p-3">
      <ElDivider border-style="dashed" class="mb-4 mt-2">
        <span class="text-12px c-#8A9298">已选择{{ selectData.length }}个成员</span>
      </ElDivider>
      <div class="max-h-42 overflow-auto">
        <div v-for="item in selectData" :key="item.user_id" class="member-item">
          <div class="w-40%">
            {{ item.user_name }}-{{ item.account }}
          </div>
          <div class="w-30%">
            {{ item.role_name }}
          </div>
          <ElLink :underline="false" @click="handleRemove(item.user_id!)">
            <ElIcon>
              <Close />
            </ElIcon>
          </ElLink>
        </div>
      </div>
    </div>
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
  background-color: var(--sjzy-part-bg-color);
}
</style>
