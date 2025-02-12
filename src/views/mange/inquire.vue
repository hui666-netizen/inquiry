<script lang="ts" setup>
import { SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { computedCustomerType } from '../airline/common'
import { mangeInquireColumn } from './data'
import { saleInquiryRecordByPhoneAndName } from '@/api/cams-inquiry/sale'

defineOptions({
  name: 'MangeInquire',
})

/**
 * 定义了一个 tabName 类型，该类型包含 'yes' 和 'no' 两个值。
 */
type tabName = 'yes' | 'no'

const activeName = ref<tabName>('no')

const [register, { reload }] = useSjzyTableForm({
  table: {
    api: newSaleInquiryRecordByPhoneAndName,
    currentPageField: 'PageIndex',
    pageSizeField: 'PageSize',
    dataField: 'data.Data.List',
    totalField: 'data.Data.Pagination.Total',
    autoHeight: true,
    columnsKey: 'table-v2-form-columns',
    showIndex: true,
    showPager: true,
    offsetHeight: 20,
    tableRowId: 'id',
    showSetting: true,
    showToolbar: true,
    columns: mangeInquireColumn,
  },
  form: {
    showResetButton: true,
    schemas: [
      {
        label: '客户手机号',
        field: 'phoneNumber',
        component: 'SjzyInput',
        componentProps: () => {
          return {
            type: 'number',
          }
        },
        rules: [
          {
            validator: (
              _rule: any,
              value: string,
              callback: (arg0?: Error | undefined) => void,
            ) => {
              if (value) {
                const isValidPhone = /^\d{11}$/.test(value)
                if (!isValidPhone) {
                  return callback(new Error('电话号码必须是 11 位数字'))
                }
              }
              callback()
            },
            trigger: 'change',
          },
        ],
        colProps: {
          span: 6,
        },
      },
      {
        label: '业务员姓名',
        field: 'saleManName',
        component: 'SjzyInput',
        componentProps: () => {
          return {}
        },
        rules: [{ max: 9 }],
        colProps: {
          span: 6,
        },
      },
    ],
  },
})

/** 重写api */
function newSaleInquiryRecordByPhoneAndName(val: any) {
  return new Promise((resolve, reject) => {
    saleInquiryRecordByPhoneAndName({
      status: activeName.value === 'yes' ? 1 : 0,
      ...val,
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
</script>

<template>
  <div class="p-2">
    <SjzyTableForm @register="register">
      <template #t-CustomerType="{ row }">
        {{ computedCustomerType(row.CustomerType) }}
      </template>
      <template #t-toolbar_buttons>
        <ElTabs v-model="activeName" class="demo-tabs" @tab-change="reload">
          <ElTabPane label="未处理" name="no" />
          <ElTabPane label="已处理" name="yes" />
        </ElTabs>
      </template>
    </SjzyTableForm>
  </div>
</template>

<style scoped lang="scss">
:deep() .el-tabs__nav-wrap {
  width: 80vw;
}
</style>
