<script lang="ts" setup>
import { SjzyTableAction, SjzyTableForm, TableButtons, useSjzyTableForm } from '@sjzy/ui'
import type { profitSearchRule, profitTableRule } from './common'
import { computedCustomerType, getCurTimes, profitComColumns } from './common'
import ProfitModal from './components/ProfitModal.vue'
import { AirCompanyGetPageGET } from '@/api/dc-default/AirCompany'
import { AirportGetPageGET } from '@/api/dc-default/Airport'
import { ProfitDelete, ProfitGetPageList, ProfitProfitExportExcel } from '@/api/cams-inquiry/Profit'

defineOptions({
  name: 'GrossProfit',
})

/** 存储被选择的行的ID */
const deleteRowIds = ref<number[]>()
/** 表格数据模型 */
const modelValue = ref<profitTableRule[]>([])
/** 搜索表单的值 */
const searchValues = ref<profitSearchRule>()
/** 引用ProfitModal组件实例 */
const profitModal = ref<InstanceType<typeof ProfitModal>>()

const [register, { reload, formInstance }] = useSjzyTableForm({
  table: {
    api: ProfitGetPageList,
    searchInfo: {
      PageIndex: 1,
      PageSize: 50,
    },
    // immediate:false,
    currentPageField: 'PageIndex',
    pageSizeField: 'PageSize',
    dataField: 'data.Data.List',
    totalField: 'data.Data.Pagination.Total',
    autoHeight: true,
    columnsKey: 'table-v2-form-columns',
    showToolbar: true,
    showCheckbox: true,
    showPager: true,
    showAction: true,
    actionWidth: 100,
    offsetHeight: 20,
    tableRowId: 'id',
    showSetting: true,
    columns: profitComColumns,
  },
  form: {
    showResetButton: true,
    resetFunc: () => {
      searchValues.value = undefined
      reload()
    },
    schemas: [
      {
        label: '航司',
        field: 'AirlineCompanyCode',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              api: AirCompanyGetPageGET,
              labelKey: ['code', 'numCode', 'cnName', 'enName'],
              tableTitle: ['代码', '数字代码', '名称', '英文名'],
              valueKey: 'code',
            },
            onSelectChange: async () => {
              searchValues.value = (await formInstance()).getFormValue()
            },
          }
        },
        colProps: {
          span: 5,
        },
      },
      {
        label: '起运港',
        field: 'StartPlaceCode',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              api: AirportGetPageGET,
              labelKey: ['code', 'cnName', 'enName', 'cityCnName', 'countryEnName'],
              tableTitle: ['代码', '名称', '英文名', '城市名', '国家/地区代码'],
              valueKey: 'code',
            },
            immediate: true,
            onSelectChange: async () => {
              searchValues.value = (await formInstance()).getFormValue()
            },
          }
        },
        rules: [
          {
            validator: (_rule: any, value: any, callback: any) => {
              if (searchValues.value?.StartPlaceCode === undefined) {
                callback()
              }
              else if (searchValues.value?.StartPlaceCode === searchValues.value?.EndPlaceCode) {
                callback(new Error('直飞起运港和转运起运港不能相同'))
              }
              else {
                callback()
              }
            },
            trigger: 'change',
          },
        ],
        colProps: {
          span: 5,
        },
      },
      {
        label: '目的港',
        field: 'EndPlaceCode',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              api: AirportGetPageGET,
              labelKey: ['code', 'cnName', 'enName', 'cityCnName', 'countryEnName'],
              tableTitle: ['代码', '名称', '英文名', '城市名', '国家/地区代码'],
              valueKey: 'code',
            },
            immediate: true,
            onSelectChange: async () => {
              searchValues.value = (await formInstance()).getFormValue()
            },
          }
        },
        rules: [
          {
            validator: (_rule: any, value: any, callback: any) => {
              if (searchValues.value?.EndPlaceCode === undefined) {
                callback()
              }
              else if (searchValues.value?.StartPlaceCode === searchValues.value?.EndPlaceCode) {
                callback(new Error('直飞起运港和转运起运港不能相同'))
              }
              else {
                callback()
              }
            },
            trigger: 'change',
          },
        ],
        colProps: {
          span: 5,
        },
      },
      {
        label: '客户类型',
        field: 'CustomerType',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              spareData: [
                { label: '直客', value: 1 },
                { label: '同行', value: 2 },
                { label: '海外代理', value: 3 },
              ],
              labelKey: ['label'],
              valueKey: 'value',
            },
            onSelectChange: async () => {
              searchValues.value = (await formInstance()).getFormValue()
            },
          }
        },
        colProps: {
          span: 5,
        },
      },
    ],
  },
})

function handleEdit(row: profitTableRule) {
  profitModal.value?.onDrawerClick('edit', searchValues.value, row)
}
function handleAdd() {
  profitModal.value?.onDrawerClick('add', searchValues.value)
}
function handleSelectRow(val: any) {
  deleteRowIds.value = val.rows.map((item: any) => {
    return item.Id
  })
}

/** 点击删除按钮 */
function handleCannel() {
  $baseConfirm({
    content: '确认要删除吗？',
    title: '警告',
    type: 'warning',
    onOk: () => {
      ProfitDelete({ Id: deleteRowIds.value })
        .then((res) => {
          console.log(res)
          if (res.data.Code === 200) {
            $baseMessage(`${res.data.Msg}`, 'success')
          }
          else {
            $baseMessage(`${res.data.Msg}`, 'error')
          }
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          reload()
        })
    },
  })
}

/** 点击导出按钮 */
function handleExpose() {
  ProfitProfitExportExcel({
    Id: deleteRowIds.value,
  })
    .then((res) => {
      if (res.code === '200') {
        const url: string = res.data.Value || ''
        const curTime = getCurTimes()
        const fileName = `毛利润导出${curTime}.xlsx`

        fetch(url)
          .then(response => response.blob())
          .then((blob) => {
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob)

            a.href = objectUrl
            a.download = fileName
            a.style.display = 'none'

            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)

            URL.revokeObjectURL(objectUrl)

            $baseMessage('下载成功', 'success')
          })
          .catch(() => {
            $baseMessage('下载失败', 'error')
          })
      }
      else {
        $baseMessage('导出失败', 'error')
      }
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      reload()
    })
}
</script>

<template>
  <div class="p-2">
    <SjzyTableForm
      v-model:table-data="modelValue"
      @register="register"
      @selection-change="handleSelectRow"
    >
      <template #t-CustomerType="{ row }">
        {{ computedCustomerType(row.CustomerType) }}
      </template>
      <template #t-toolbar_buttons>
        <TableButtons
          :actions="[
            {
              label: '添加',
              type: 'primary',
              iconFont: 'icon-tianjia',
              onClick: handleAdd,
            },

            {
              label: '删除',
              disabled: !deleteRowIds?.length,
              onClick: handleCannel,
              iconFont: 'icon-a-shanchu9',
            },
            {
              label: '导出',
              disabled: !deleteRowIds?.length,
              iconFont: 'icon-daochu',
              onClick: handleExpose,
            },
          ]"
        />
      </template>
      <template #t-action="{ row }">
        <SjzyTableAction
          :actions="[
            {
              label: '修改',
              onClick: handleEdit.bind(null, row),
            },
          ]"
        />
      </template>
    </SjzyTableForm>
    <ProfitModal ref="profitModal" @reload="reload" />
  </div>
</template>
