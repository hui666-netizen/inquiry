<script setup lang="ts">
import { SjzyTableAction, SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { computedCustomerType } from '../airline/common'
import { saleInquireColumn } from '../mange/data'
import { saleInquiryRecord, saleModifyState } from '@/api/cams-inquiry/sale'
import { useRole } from '@/store/modules/user/useRole'
import { SalemanAddSaleman, SalemanCheckSalemanBySalemanId } from '@/api/cams-inquiry/Saleman'
/**
 * 定义了一个 tabKeys 类型，该类型包含 'tab1' 和 'tab2' 两个值。
 * tabModel 用于存储当前选中的 tab，初始值为 'tab1'。
 * useStore 调用了 useUserStore 方法，获取用户的 store 数据。
 */
type tabKeys = 'tab1' | 'tab2'
const tabModel = ref<tabKeys>('tab1')
const useStore = useUserStore()
const userRole = useRole()
const [register1, { reload: reload1 }] = useSjzyTableForm({
  table: {
    api: newSaleInquiryRecord,
    currentPageField: 'PageIndex',
    pageSizeField: 'PageSize',
    dataField: 'data.Data.List',
    totalField: 'data.Data.Pagination.Total',
    autoHeight: true,
    columnsKey: 'table-v2-form-columns',
    showPager: true,
    offsetHeight: 20,
    tableRowId: 'id',
    showAction: true,
    actionWidth: 100,
    columns: saleInquireColumn,
  },
  form: {
    showActionButtonGroup: false,
  },
})

const [register2, { reload: reload2 }] = useSjzyTableForm({
  table: {
    api: newSaleInquiryRecord,
    currentPageField: 'PageIndex',
    pageSizeField: 'PageSize',
    dataField: 'data.Data.List',
    totalField: 'data.Data.Pagination.Total',
    autoHeight: true,
    columnsKey: 'table-v2-form-columns',
    showPager: true,
    offsetHeight: 20,
    tableRowId: 'id',
    columns: saleInquireColumn,
  },
  form: {
    showActionButtonGroup: false,
  },
})

/** 重写api */
function newSaleInquiryRecord(val: any) {
  return new Promise((resolve, reject) => {
    saleInquiryRecord({
      salemanId: useStore.userId,
      status: tabModel.value === 'tab1' ? 0 : 1,
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

/** 处理操作 */
function handleEdit(row: any) {
  saleModifyState({
    id: row.id,
  })
    .then(() => {
      $baseMessage('处理成功', 'success')
    })
    .finally(() => {
      reload1()
    })
}

/** 不在库中的业务员新增进库中 */
function judgmentSale() {
  if (userRole.isRoleName) {
    SalemanCheckSalemanBySalemanId({
      SalemanId: useStore.userId as number,
    })
      .then((res) => {
        if (res.data.Code !== 200) {
          SalemanAddSaleman({
            SalemanId: useStore.userId as number,
          })
            .then((res) => {
              if (res.data.Code === 200) {
                $baseMessage('新增业务员成功', 'success')
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

onMounted(() => judgmentSale())
</script>

<template>
  <div class="p-2">
    <div class="sjzy-box">
      <ElTabs v-model="tabModel" @tab-change="tabModel === 'tab1' ? reload1() : reload2()">
        <ElTabPane label="未处理" name="tab1" style="height: calc(100vh - 132px)">
          <SjzyTableForm @register="register1">
            <template #t-CustomerType="{ row }">
              {{ computedCustomerType(row.CustomerType) }}
            </template>
            <template #t-action="{ row }">
              <SjzyTableAction
                :actions="[
                  {
                    label: '处理',
                    onClick: handleEdit.bind(null, row),
                  },
                ]"
              />
            </template>
          </SjzyTableForm>
        </ElTabPane>
        <ElTabPane label="已处理" name="tab2" style="height: calc(100vh - 132px)">
          <SjzyTableForm @register="register2">
            <template #t-CustomerType="{ row }">
              {{ computedCustomerType(row.CustomerType) }}
            </template>
          </SjzyTableForm>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep() .sjzy-table-v2-form-header {
  padding: 0;
  margin: 0;
}
</style>
