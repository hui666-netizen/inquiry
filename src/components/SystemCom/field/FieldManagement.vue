<script lang="ts" setup>
import { SjzyButton, SjzyTableAction, SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { WarningFilled } from '@element-plus/icons-vue'
import FieldModal from './FieldModal.vue'
import { GetFieldConfigPageQuery, PostFieldConfigDelete } from '@/api/devops/ziduanguanli'

defineOptions({
  name: 'FieldManagement',
})

const props = defineProps({
  moduleId: {
    type: String /* 归属模块;1-终端 2微服务 3-产品 4-迭代 */,
    required: true,
  },
})

const { dictData, dictToLabel } = useDict<['fieldMap']>(['fieldMap'])

/** 抽屉弹窗 */
const fieldModalRef = ref<InstanceType<typeof FieldModal>>()

// 全局配置的也可以单独配置
const [tableRegister, { reload }] = useSjzyTableForm({
  useSearchForm: false,
  table: {
    tableRowId: 'field_id',
    searchInfo: { module_id: props?.moduleId },
    showToolbar: true,
    showRefresh: false,
    showSetting: false,
    showLineHeight: false,
    api: GetFieldConfigPageQuery,
    autoHeight: true,
    showPager: true,
    /** 此处格式的 _module_ 为固定选项 后面数字是模块id，后端保存配置时需要 */
    columnsKey: 'fieldMana_module_1',
    offsetHeight: 20,
    showIndex: false,
    isCellSort: false,
    showAction: true,
    actionWidth: 120,
    border: true,
    height: 'auto',
    useHttpCache: false,
    columns: [
      {
        field: 'field_label',
        title: '字段名称',
        minWidth: 200,
      },
      {
        field: 'field_component.componentType',
        title: '字段类型',
        minWidth: 200,
        slots: { default: 'componentType' },
      },
      {
        field: 'field_type',
        title: '字段来源',
        minWidth: 200,
        slots: { default: 'field_type' },
      },
      {
        field: 'field_name',
        title: 'ID标识',
        minWidth: 200,
      },
      {
        field: 'remark',
        title: '字段备注',
        minWidth: 280,
      },
    ],
    // editConfig: {
    //   trigger: 'dblclick',
    //   mode: 'cell',
    // },
  },
})

/**
 * 删除
 * @param row 行数据
 */
function onDelete(row: Recordable) {
  $baseConfirm({
    content: '删除自定义字段后，终端的对应字段值将会被清空，且无法恢复，请谨慎操作！',
    title: '是否确认删除此字段？',
    type: 'error',
    icon: WarningFilled,
    onOk: () => {
      PostFieldConfigDelete({ field_id: row?.field_id }).then(async () => {
        $baseMessage('删除成功', 'success')
        reload()
      })
    },
  })
}

/** 新增/修改抽屉 */
function onModalClick(field_id?: string) {
  fieldModalRef.value?.handleOpen(field_id)
}
</script>

<template>
  <div class="h-[calc(100vh-138px)] w-full overflow-auto">
    <div h-full>
      <SjzyTableForm h-full @register="tableRegister">
        <template #t-action="{ row }">
          <SjzyTableAction
            :show-btn-nums="2"
            :actions="[
              {
                label: '编辑',
                onClick: onModalClick.bind(null, row?.field_id),
              },
              {
                label: '删除',
                onClick: onDelete.bind(null, row),
                ifShow: row.field_type !== 1,
              },
            ]"
          />
        </template>
        <template #t-field_type="{ row }">
          <div>
            {{ row.field_type === 1 ? '系统字段' : '自定义字段' }}
          </div>
        </template>
        <template #t-componentType="{ row }">
          <div>
            {{ dictToLabel(row.field_component?.componentType, dictData.fieldMap) || '-' }}
          </div>
        </template>

        <template #t-toolbar_buttons>
          <SjzyButton type="primary" @click="onModalClick()">
            新增字段
          </SjzyButton>
        </template>
      </SjzyTableForm>
    </div>

    <FieldModal ref="fieldModalRef" :module-id="moduleId" @success="reload()" />
  </div>
</template>
