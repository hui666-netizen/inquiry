<script lang="ts" setup>
import { SjzyButton, SjzyTableAction, SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { isArray } from '@sjzy/utils'
import type { EnvData, FieldItem, ImicroserviceRow, TerminalUnit } from './type'
import {
  GetMicroserviceDetail,
  GetMicroservicePageQuery,
  PostMicroserviceCreate,
  PostMicroserviceDelete,
  PostMicroserviceDisable,
  PostMicroserviceEnable,
  PostMicroserviceUpdate,
} from '@/api/devops/weifuwuguanli'
import FieldModelSchemas from '@/components/SystemCom/field/FieldModelSchemas.vue'

defineOptions({
  name: 'MicroservicesList',
})

const router = useRouter()
const fieldModelSchemasRef = ref<InstanceType<typeof FieldModelSchemas>>()

/** 页面表格配置 */
const [tableRegister, { reload }] = useSjzyTableForm({
  useSearchForm: true,
  table: {
    /** 此处格式的 _module_ 为固定选项 后面数字是模块id，后端保存配置时需要 */
    columnsKey: 'product_module_2',
    useHttpCache: true,
    tableRowId: 'microservice_id',
    showToolbar: true,
    api: GetMicroservicePageQuery,
    autoHeight: true,
    offsetHeight: 20,
    showIndex: false,
    isCellSort: false,
    showAction: true,
    showRefresh: false,
    showLineHeight: false,
    actionWidth: 150,
    border: true,
    showCheckbox: false,
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
        label: `微服务名称 `,
        field: 'microservice_name',
        component: 'SjzyInput',
        colProps: {
          span: 6,
        },
      },
    ],
  },
})

/**
 * 行样式置灰
 * @param row 行数据
 * @returns {string} 样式类名
 */
function tableRowClassName({ row }: { row: ImicroserviceRow }) {
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

/** 开启 */
function handleOpen(row: ImicroserviceRow) {
  $baseConfirm({
    content: '是否确认开启？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostMicroserviceEnable({ microservice_id: row.microservice_id }).then(async () => {
        $baseMessage('开启成功', 'success')
        reload()
      })
    },
  })
}
/** 关闭 */
function handleClose(row: ImicroserviceRow) {
  $baseConfirm({
    content: '关闭后,关联此微服务的项目与迭代等将置灰展示;新创建项目与迭代,不再出现此微服务选项!',
    title: '是否关闭此微服务',
    type: 'warning',
    onOk: () => {
      PostMicroserviceDisable({ microservice_id: row.microservice_id }).then(async () => {
        $baseMessage('关闭成功', 'success')
        reload()
      })
    },
  })
}
/** 删除 */
function handleDel(row: ImicroserviceRow) {
  $baseConfirm({
    content: '是否确认删除？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostMicroserviceDelete({ microservice_id: row.microservice_id }).then(async () => {
        $baseMessage('删除成功', 'success')
        reload()
      })
    },
  })
}
/** 跳转详情 */
function goDetail(row: ImicroserviceRow) {
  router.push({ name: 'MicroservicesDetail', params: { id: row.microservice_id } })
}

/** 点击新增 编辑打开弹窗 */
function onModalForm(type: 'add' | 'edit', row?: ImicroserviceRow) {
  fieldModelSchemasRef.value?.handleModel(type, row)
}
</script>

<template>
  <div class="microservices-container">
    <SjzyTableForm @register="tableRegister">
      <template #t-toolbar_buttons>
        <SjzyButton type="primary" @click="onModalForm('add')">
          创建微服务
        </SjzyButton>
      </template>

      <!-- 微服务名称 -->
      <template #t-http_custom_microservice_name="{ row }">
        <ElLink class="mr-3" @click="goDetail(row)">
          {{ row?.microservice_name }}
        </ElLink>
        <ElTag v-if="row?.is_enable === 0" type="info" size="small">
          已关闭
        </ElTag>
      </template>

      <template #t-http_custom_microservice_env="{ row }">
        <div>
          <span class="mr-3">{{ handleExtendsData(row?.extends, 'microservice_env') }}</span>
        </div>
      </template>

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
              ifShow: row.is_enable === 0,
              onClick: handleOpen.bind(null, row),
            },
            {
              label: '关闭',
              ifShow: row.is_enable === 1,
              onClick: handleClose.bind(null, row),
            },
            {
              label: '删除',
              onClick: handleDel.bind(null, row),
            },
          ]"
        />
      </template>
    </SjzyTableForm>

    <FieldModelSchemas
      ref="fieldModelSchemasRef"
      title="微服务"
      field-key="microservice"
      module-id="2"
      :edit-api="PostMicroserviceUpdate"
      :add-api="PostMicroserviceCreate"
      :info-api="GetMicroserviceDetail"
      @reload="reload()"
    />
  </div>
</template>

<style lang="scss" scoped>
.microservices-container {
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
