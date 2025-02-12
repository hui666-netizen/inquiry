<script lang="ts" setup>
import type { Recordable } from '@sjzy/ui'
import { SjzyButton, SjzyTableAction, SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { WarningFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { isArray } from '@sjzy/utils'
import type { EnvData, FieldItem, TerminalUnit } from './type'
import FieldModelSchemas from '@/components/SystemCom/field/FieldModelSchemas.vue'
import {
  GetClientDetail,
  GetClientPageQuery,
  PostClientCreate,
  PostClientDelete,
  PostClientDisable,
  PostClientEnable,
  PostClientUpdate,
} from '@/api/devops/zhongduanguanli'
import { GetEnumGet } from '@/api/devops/tongyong'

defineOptions({
  name: 'Terminal',
})

const router = useRouter()
const terminalType = ref<TerminalUnit[]>([])
const fieldModelSchemasRef = ref<InstanceType<typeof FieldModelSchemas>>()

const [tableRegister, { reload }] = useSjzyTableForm({
  useSearchForm: true,
  table: {
    /** 此处格式的 _module_ 为固定选项 后面数字是模块id，后端保存配置时需要 */
    columnsKey: 'terminal_module_1',
    useHttpCache: true,
    tableRowId: 'client_id',
    showToolbar: true,
    showRefresh: false,
    showLineHeight: false,
    api: GetClientPageQuery,
    autoHeight: true,
    showPager: true,
    offsetHeight: 20,
    showIndex: false,
    isCellSort: false,
    showAction: true,
    showHeader: true,
    actionWidth: 150,
    height: 'auto',
    border: true,
    rowClassName: tableRowClassName,
    columns: [],
    afterFetch: (val) => {
      const list = val?.map((i: any) => {
        const obj: Recordable = {}
        isArray(i.extends)
        && i.extends?.forEach((j: any) => {
          obj[j.field_name] = j.default_value
        })
        return {
          ...i,
          ...obj,
        }
      })
      return list
    },
  },
  form: {
    showFilterButton: false,
    schemas: [
      {
        label: `终端名称`,
        field: 'client_name',
        component: 'SjzyInput',
        colProps: {
          span: 4,
        },
      },
    ],
  },
})

/**
 * 开启按钮
 * @param row 行数据
 */
function onOpen(row: Recordable) {
  $baseConfirm({
    content: '是否确认开启？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostClientEnable({ client_id: row?.client_id }).then(async () => {
        $baseMessage('开启成功', 'success')
        reload()
      })
    },
  })
}

/**
 * 关闭按钮
 * @param row 行数据
 */
function onClose(row: Recordable) {
  $baseConfirm({
    content:
      '关闭后，选择此终端的项目、产品等终端字段将置灰展示；新创建项目、产品时，无此终端选项！',
    title: '是否确认关闭此终端？',
    type: 'warning',
    onOk: () => {
      PostClientDisable({ client_id: row?.client_id }).then(async () => {
        $baseMessage('关闭成功', 'success')
        reload()
      })
    },
  })
}

/**
 * 删除按钮
 * @param row 行数据
 */
function onDelete(row: Recordable) {
  $baseConfirm({
    content: '删除后，选择此终端的迭代、产品等终端字段都将展示为空！',
    title: '是否确认删除此终端？',
    type: 'error',
    icon: WarningFilled,
    onOk: () => {
      PostClientDelete({ client_id: row?.client_id }).then(async () => {
        $baseMessage('删除成功', 'success')
        reload()
      })
    },
  })
}

/**
 * 行样式置灰
 * @param row 行数据
 * @returns {string} 样式类名
 */
function tableRowClassName({ row }: { row: Recordable }) {
  if (row.is_enable === 0) {
    return 'grey-row'
  }
  else {
    return ''
  }
}

/**
 * 处理枚举名称格式
 * @param data 行数据里的envData
 * @returns {string} 名称集合
 */
function handleExtendsData(arr: FieldItem[], rowName: string) {
  if (arr.length) {
    const data: EnvData[] = arr.filter((item: FieldItem) => item.field_name === rowName)[0].envData
    return data
      .filter((item: EnvData) => item.link)
      .map((item: EnvData) => item.enum_name)
      .join('、')
  }
}

/**
 * 跳转详情
 * @param row 行数据
 */
function goDetail(row: Recordable) {
  router.push({ name: 'TerminalDetail', params: { id: row?.client_id } })
}

/** 点击新增 编辑打开弹窗 */
function onModalForm(type: 'add' | 'edit', row?: any) {
  fieldModelSchemasRef.value?.handleModel(type, row)
}

onMountedOrActivated(() => {
  /** 获取枚举值 */
  GetEnumGet({ code: 'env' }, {}).then((res: Recordable) => {
    terminalType.value = res.data
  })
})
</script>

<template>
  <div class="terminalSettings-container">
    <SjzyTableForm @register="tableRegister">
      <template #t-action="{ row }">
        <SjzyTableAction
          :show-btn-nums="2"
          :actions="[
            {
              label: '编辑',
              onClick: onModalForm.bind(null, 'edit', row),
            },
            {
              label: '开启',
              onClick: onOpen.bind(null, row),
              ifShow: row.is_enable === 0,
            },
            {
              label: '关闭',
              onClick: onClose.bind(null, row),
              ifShow: row.is_enable === 1,
            },
            {
              label: '删除',
              onClick: onDelete.bind(null, row),
            },
          ]"
        />
      </template>
      <template #t-http_custom_client_name="{ row }">
        <ElLink class="mr-3" @click="goDetail(row)">
          {{ row?.client_name }}
        </ElLink>
        <ElTag v-if="row?.is_enable === 0" type="info" size="small">
          已关闭
        </ElTag>
      </template>
      <template #t-http_custom_client_env="{ row }">
        <div>
          <span class="mr-3">{{ handleExtendsData(row?.extends, 'client_env') }}</span>
        </div>
      </template>
      <template #t-toolbar_buttons>
        <SjzyButton type="primary" @click="onModalForm('add')">
          创建终端
        </SjzyButton>
      </template>
    </SjzyTableForm>

    <FieldModelSchemas
      ref="fieldModelSchemasRef"
      title="终端"
      field-key="client"
      module-id="1"
      :edit-api="PostClientUpdate"
      :add-api="PostClientCreate"
      :info-api="GetClientDetail"
      @reload="reload()"
    />
  </div>
</template>

<style lang="scss" scoped>
.terminalSettings-container {
  width: 100%;
  height: 100%;
}

:deep(.grey-row .el-link--default) {
  color: var(--el-color-info-light-5);

  &:hover {
    color: var(--el-color-primary);
  }
}

:deep(.grey-row) {
  color: var(--el-color-info-light-5);
}
</style>
