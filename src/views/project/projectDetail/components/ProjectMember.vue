<script setup lang="tsx">
import { SjzyTableAction, SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { Search, WarningFilled } from '@element-plus/icons-vue'
import type { CheckboxValueType } from 'element-plus'
import { ElCheckbox } from 'element-plus'
import MemberModel from './MemberModel.vue'
import { GetProjectProjectUserPageQuery } from '@/api/devops/xiangmuyonghu'

defineOptions({
  name: 'ProjectMember',
})

const memberModelRef = ref<InstanceType<typeof MemberModel>>()
const isChecked = ref(false)
const searchInfo = reactive({
  project_id: 1,
  keywork: '',
})
const [tableRegister, { reload }] = useSjzyTableForm({
  useSearchForm: false,
  table: {
    tableRowId: 'user_id',
    searchInfo,
    api: GetProjectProjectUserPageQuery,
    isHanderSubmit: true,
    autoHeight: true,
    showPager: true,
    offsetHeight: 20,
    showAction: true,
    actionWidth: 120,
    border: true,
    height: 'auto',
    isCellSort: false,
    columns: [
      { field: 'user_name', title: '姓名' },
      { field: 'position_name', title: '岗位' },
      { field: 'account', title: '工号' },
      { field: 'enable_name', title: '在职状态' },
      { field: 'role_name', title: '角色' },
      { field: 'create_at', title: '加入项目时间' },
    ],
  },
})

/** 删除 */
function handleRemove() {
  $baseConfirm({
    title: '是否确认移除此人员？',
    type: 'error',
    icon: WarningFilled,
    onOk: () => {}, // 后续补充接口
    content: (
      <ElCheckbox value={isChecked.value} onUpdate:modelValue={handleChecked}>
        清空该成员名下代办工作
      </ElCheckbox>
    ),
  })
}

/** 点击新增 编辑打开弹窗 */
function onModal() {
  memberModelRef.value?.handleModel()
}

/** 确认框是否勾选 */
function handleChecked(val: CheckboxValueType) {
  isChecked.value = val as boolean
}
</script>

<template>
  <div>
    <div class="mx-3 mt-3 flex justify-between">
      <SjzyButton type="primary" @click="onModal">
        添加成员
      </SjzyButton>
      <ElInput
        v-model="searchInfo.keywork"
        class="w-70"
        placeholder="请输入姓名"
        clearable
        maxlength="50"
        show-word-limit
      >
        <template #prefix>
          <ElIcon>
            <Search />
          </ElIcon>
        </template>
        <template #append>
          <ElButton :icon="Search" @click="reload" />
        </template>
      </ElInput>
    </div>
    <div class="h-[calc(100%-70px)]">
      <SjzyTableForm @register="tableRegister">
        <template #t-action>
          <SjzyTableAction
            :actions="[
              {
                label: '移除项目',
                type: 'primary',
                onClick: handleRemove.bind(null),
              },
            ]"
          />
        </template>
      </SjzyTableForm>
    </div>
    <MemberModel ref="memberModelRef" @reload="reload" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.sjzy-table-v2 .vxe-toolbar) {
  padding: 6px 0;
}
</style>
