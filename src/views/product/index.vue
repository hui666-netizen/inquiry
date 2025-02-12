<script lang="ts" setup>
import { SjzyButton, SjzyTableAction, SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { isArray } from '@sjzy/utils'
import type { IProductRow } from './type'
import {
  GetProductDetail,
  GetProductPageQuery,
  PostProductCreate,
  PostProductDelete,
  PostProductDisable,
  PostProductEnable,
  PostProductUpdate,
} from '@/api/devops/chanpinguanli'
import FieldModelSchemas from '@/components/SystemCom/field/FieldModelSchemas.vue'

defineOptions({
  name: 'ProductList',
})

const router = useRouter()
const fieldModelSchemasRef = ref<InstanceType<typeof FieldModelSchemas>>()

/** 页面表格配置 */
const [tableRegister, { reload }] = useSjzyTableForm({
  useSearchForm: true,
  table: {
    /** 此处格式的 _module_ 为固定选项 后面数字是模块id，后端保存配置时需要 */
    columnsKey: 'product_module_3',
    useHttpCache: true,
    tableRowId: 'row_id',
    showToolbar: true,
    api: GetProductPageQuery,
    autoHeight: true,
    offsetHeight: 20,
    showIndex: false,
    isCellSort: false,
    showAction: true,
    showRefresh: false,
    showLineHeight: false,
    actionWidth: 150,
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
    // editConfig: {
    //   trigger: 'dblclick',
    //   mode: 'cell',
    // },
  },
  form: {
    showFilterButton: false,
    schemas: [
      {
        label: `产品名称 `,
        field: 'product_name',
        component: 'SjzyInput',
        componentProps: {
          placeholder: '请输入产品名称',
          maxlength: 50,
        },
        colProps: {
          span: 6,
        },
      },
      {
        label: `终端 `,
        field: 'client_name',
        component: 'SjzyInput',
        componentProps: {
          placeholder: '请输入终端名称',
          maxlength: 50,
        },
        colProps: {
          span: 6,
        },
      },
      {
        label: `微服务 `,
        field: 'microservice_name',
        component: 'SjzyInput',
        componentProps: {
          placeholder: '请输入微服务名称',
          maxlength: 50,
        },
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
 */
function tableRowClassName({ row }: { row: IProductRow }) {
  if (row.is_enable === 0) {
    return 'grey-row'
  }
  else {
    return ''
  }
}
/** 开启 */
function handleOpen(row: IProductRow) {
  $baseConfirm({
    content: '是否确认开启？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostProductEnable({ product_ids: [row.product_id] }).then(async () => {
        $baseMessage('开启成功', 'success')
        reload()
      })
    },
  })
}
/** 关闭 */
function handleClose(row: IProductRow) {
  $baseConfirm({
    content: '关闭后,关联此微服务的项目与迭代等将置灰展示;新创建项目与迭代,不再出现此微服务选项!',
    title: '是否关闭此微服务',
    type: 'warning',
    onOk: () => {
      PostProductDisable({ product_ids: [row.product_id] }).then(async () => {
        $baseMessage('关闭成功', 'success')
        reload()
      })
    },
  })
}
/** 删除 */
function handleDel(row: IProductRow) {
  $baseConfirm({
    content: '是否确认删除？',
    title: '提示',
    type: 'warning',
    onOk: () => {
      PostProductDelete({ product_ids: [row.product_id] }).then(async () => {
        $baseMessage('删除成功', 'success')
        reload()
      })
    },
  })
}
/** 跳转详情 */
function goDetail(row: Recordable) {
  router.push({ name: 'ProductDetail', params: { id: row?.product_id } })
}
/** 跳转终端详情 */
function goClientDetail(row: Recordable) {
  router.push({ name: 'TerminalDetail', params: { id: row?.client_id } })
}
/** 跳转微服务详情 */
function goMicroserviceDetail(row: Recordable) {
  router.push({ name: 'MicroservicesDetail', params: { id: row?.microservice_id } })
}
/** 点击新增 编辑打开弹窗 */
function onModalForm(type: 'add' | 'edit', row?: IProductRow) {
  fieldModelSchemasRef.value?.handleModel(type, row)
}
</script>

<template>
  <div class="product-container">
    <SjzyTableForm @register="tableRegister">
      <template #t-toolbar_buttons>
        <SjzyButton type="primary" @click="onModalForm('add')">
          创建产品
        </SjzyButton>
      </template>

      <!-- 名称 -->
      <template #t-http_custom_product_name="{ row }">
        <ElLink class="mr-3" @click="goDetail(row)">
          {{ row?.product_name }}
        </ElLink>
        <ElTag v-if="row?.is_enable === 0" type="info" size="small">
          已关闭
        </ElTag>
      </template>

      <!-- 终端 -->
      <template #t-http_custom_product_client_list="{ row }">
        <ElLink
          v-for="(item, index) in row.client"
          :key="item.client_id"
          class="mr-3px"
          @click="goClientDetail(item)"
        >
          {{ item?.client_name }}
          <span v-if="index !== row.client.length - 1">、</span>
        </ElLink>
      </template>
      <!-- 微服务 -->
      <template #t-http_custom_product_microservice_list="{ row }">
        <ElLink
          v-for="(item, index) in row.microservice"
          :key="item.microservice_id"
          class="mr-3px"
          @click="goMicroserviceDetail(item)"
        >
          {{ item?.microservice_name }}
          <span v-if="index !== row.microservice.length - 1">、</span>
        </ElLink>
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

    <!-- 新增编辑弹窗 -->
    <FieldModelSchemas
      ref="fieldModelSchemasRef"
      title="产品"
      field-key="product"
      module-id="3"
      :edit-api="PostProductUpdate"
      :add-api="PostProductCreate"
      :info-api="GetProductDetail"
      @reload="reload()"
    />
  </div>
</template>

<style lang="scss" scoped>
.product-container {
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
