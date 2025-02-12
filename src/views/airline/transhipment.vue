<script lang="ts" setup>
import { SjzyTableAction, SjzyTableForm, TableButtons, useSjzyTableForm } from '@sjzy/ui'
import type { transSearchRule, transTableRule } from './common'
import { getCurTimes, getTransitMethod, transComColumns } from './common'
import TransModal from './components/TransModal.vue'
import { AirCompanyGetPageGET } from '@/api/dc-default/AirCompany'
import { AirportGetPageGET } from '@/api/dc-default/Airport'
import {
  TransportDelete,
  TransportGetPageList,
  TransportTransportExportExcel,
} from '@/api/cams-inquiry/Transport'

defineOptions({
  name: 'Transhipment',
})

/** 控制新增按钮的状态 */
const isShow = ref(false)
/** 引用TransModal组件实例 */
const transModal = ref<InstanceType<typeof TransModal>>()
/** 存储被选择的行的ID */
const deleteRowIds = ref<number[]>()
/** 表格数据模型 */
const modelValue = ref<transTableRule[]>([])
/** 搜索表单的值 */
const searchValues = ref<transSearchRule>()
/** 是否可以搜索 */
const isSearch = ref(false)
/** 注册表单和表格，并配置相关属性 */
const [register, { reload, formInstance }] = useSjzyTableForm({
  table: {
    api: TransportGetPageList,
    searchInfo: {
      PageIndex: 1,
      PageSize: 50,
    },
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
    columns: transComColumns,
  },
  form: {
    showResetButton: true,
    resetFunc: () => {
      searchValues.value = undefined
      isShow.value = false
      isSearch.value = true
    },
    submitFunc: () => {
      if (
        searchValues.value?.AirlineCompanyCode === undefined
        && searchValues.value?.StartPlaceCode === undefined
        && isSearch.value
      ) {
        isSearch.value = false
        return
      }
      if (searchValues.value?.AirlineCompanyCode === undefined) {
        $baseMessage('请输入航司', 'error')
      }
      else if (searchValues.value?.StartPlaceCode === undefined) {
        $baseMessage('请输入起运港', 'error')
      }
      else {
        isShow.value = true
        reload()
      }
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
            immediate: true,
            onSelectChange: async () => {
              searchValues.value = (await formInstance()).getFormValue()
            },
          }
        },
        required: true,
        colProps: {
          span: 6,
        },
      },
      {
        label: '直飞起运港',
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
          { required: true, message: '请输入直飞起运港', trigger: 'change' },
          {
            validator: (_rule: any, value: any, callback: any) => {
              if (
                searchValues.value?.StartPlaceCode === searchValues.value?.TransitStartPlaceCode
              ) {
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
          span: 6,
        },
      },
      {
        label: '转运起运港',
        field: 'TransitStartPlaceCode',
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
              if (
                searchValues.value?.StartPlaceCode === searchValues.value?.TransitStartPlaceCode
              ) {
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
          span: 6,
        },
      },
    ],
  },
})

/** 点击编辑按钮，打开编辑模态框 */
function handleEdit(row: transTableRule) {
  transModal.value?.onDrawerClick('edit', searchValues.value, row)
}

/** 点击添加按钮，打开添加模态框 */
function handleAdd() {
  transModal.value?.onDrawerClick('add', searchValues.value)
}

/** 处理行选择变化，更新被选择行的ID */
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
      TransportDelete({ Id: deleteRowIds.value })
        .then((res) => {
          $baseMessage(`${res.data.Msg}`, res.data.Code === 200 ? 'success' : 'error')
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
  TransportTransportExportExcel({
    Id: deleteRowIds.value,
  })
    .then((res) => {
      if (res.code === '200') {
        const url: string = res.data.Value || ''
        const curTime = getCurTimes()
        const fileName = `转运运价导出${curTime}.xlsx`

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
    .catch(() => {
      $baseMessage('操作失败', 'error')
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
      <template #t-AircraftType="{ row }">
        {{ row.AircraftType }}
      </template>
      <template #t-IsAddBoardFee="{ row }">
        {{ row.IsAddBoardFee === 1 ? '是' : '否' }}
      </template>
      <template #t-IsDisclosurePrice="{ row }">
        {{ row.IsDisclosurePrice === 1 ? '公开' : '不公开' }}
      </template>
      <template #t-IsRecommend="{ row }">
        {{ row.IsRecommend === 1 ? '不推荐' : '推荐' }}
      </template>
      <template #t-Transit1="{ row }">
        {{ getTransitMethod(row.TransitMethod1) }}
      </template>
      <template #t-Transit2="{ row }">
        {{ getTransitMethod(row.TransitMethod2) }}
      </template>
      <template #t-Transit3="{ row }">
        {{ getTransitMethod(row.TransitMethod3) }}
      </template>
      <template #t-DestinationTransitMethod="{ row }">
        {{ getTransitMethod(row.DestinationTransitMethod) }}
      </template>
      <template #t-IsInternal="{ row }">
        {{ row.IsInternal === 1 ? '否' : '是' }}
      </template>
      <template #t-toolbar_buttons>
        <TableButtons
          :actions="[
            {
              label: '添加',
              type: 'primary',
              iconFont: 'icon-tianjia',
              ifShow: isShow,
              onClick: handleAdd,
            },
            {
              label: '删除',
              disabled: !deleteRowIds?.length,
              iconFont: 'icon-a-shanchu9',
              onClick: handleCannel,
            },
            {
              label: '导出',
              disabled: !deleteRowIds?.length,
              onClick: handleExpose,
              iconFont: 'icon-daochu',
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
    <TransModal ref="transModal" @reload="reload" />
  </div>
</template>

<style scoped lang="scss">
:deep() .row-red {
  color: #fff;
  background-color: rgb(255, 139, 139);
}
</style>
