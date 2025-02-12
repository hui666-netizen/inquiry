<script lang="ts" setup>
import { SjzyTableAction, SjzyTableForm, TableButtons, useSjzyTableForm } from '@sjzy/ui'
import { airComColumns, getAircrftType, getCurTimes, getTransitMethod } from './common'
import AirModal from './components/AirModal.vue'
import type { airSearchRule } from './common'
import { AirCompanyGetPageGET } from '@/api/dc-default/AirCompany'
import { AirportGetPageGET } from '@/api/dc-default/Airport'
import { DirectDelete, DirectDirectExportExcel, DirectGetPageList } from '@/api/cams-inquiry/Direct'

defineOptions({
  name: 'Directfreight',
})

/** 控制新增按钮的状态 */
const isShow = ref(false)
/** 引用AirModal组件实例 */
const airModal = ref<InstanceType<typeof AirModal>>()
/** 存储被选择的行的ID */
const deleteRowIds = ref<number[]>([])
/** 搜索表单的值 */
const searchValues = ref<airSearchRule>()
/** 航司数字代码 */
const numCode = ref(0)
/** 是否可以搜索 */
const isSearch = ref(false)
/** 注册表单和表格，并配置相关属性 */
const [register, { reload, formInstance }] = useSjzyTableForm({
  table: {
    api: DirectGetPageList,
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
    columns: airComColumns,
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
              valueKey: ['code'],
            },
            immediate: true,
            onSelectChange: async (res: any) => {
              searchValues.value = (await formInstance()).getFormValue()
              numCode.value = res.numCode
            },
          }
        },
        required: true,
        colProps: {
          span: 6,
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
          { required: true, message: '请输入起运港', trigger: 'change' },
          {
            validator: (_rule: any, value: any, callback: any) => {
              if (
                searchValues.value?.EndPlaceCode === undefined
                && searchValues.value?.StartPlaceCode === undefined
              ) {
                callback()
              }
              else if (searchValues.value?.EndPlaceCode === searchValues.value?.StartPlaceCode) {
                callback(new Error('起运港和目的港不能相同'))
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
              if (
                searchValues.value?.EndPlaceCode === undefined
                && searchValues.value?.StartPlaceCode === undefined
              ) {
                callback()
              }
              else if (searchValues.value?.EndPlaceCode === searchValues.value?.StartPlaceCode) {
                callback(new Error('起运港和目的港不能相同'))
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

/** 点击修改按钮 */
function handleEdit(row: any) {
  airModal.value?.onDrawerClick('edit', searchValues.value, row)
}

/** 点击添加按钮 */
async function handleAdd() {
  airModal.value?.onDrawerClick('add', searchValues.value)
}

/** 处理行选择变化 */
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
      DirectDelete({ Id: deleteRowIds.value })
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
  DirectDirectExportExcel({
    Id: deleteRowIds.value,
  })
    .then((res) => {
      if (res.code === '200') {
        const url: string = res.data.Value || ''
        const curTime = getCurTimes()
        const fileName = `直飞运价导出${curTime}.xlsx`

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
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      reload()
    })
}
</script>

<template>
  <div class="p-2">
    <SjzyTableForm @register="register" @selection-change="handleSelectRow">
      <template #t-AircraftType="{ row }">
        {{ getAircrftType(row.AircraftType) }}
      </template>
      <template #t-IsAddBoardFee="{ row }">
        {{ row.IsAddBoardFee === 1 ? '是' : '否' }}
      </template>
      <template #t-IsDisclosurePrice="{ row }">
        {{ row.IsDisclosurePrice === 1 ? '公开' : '不公开' }}
      </template>
      <template #t-IsRecommend="{ row }">
        {{ row.IsRecommend === 1 ? '推荐' : '不推荐' }}
      </template>
      <template #t-Transit1="{ row }">
        {{ getTransitMethod(row.TransitMethod1) }}
      </template>
      <template #t-Transit2="{ row }">
        {{ getTransitMethod(row.TransitMethod2) }}
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
              ifShow: isShow,
              iconFont: 'icon-tianjia',
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
              iconFont: 'icon-daochu',
              disabled: !deleteRowIds?.length,
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
    <AirModal ref="airModal" @reload="reload" />
  </div>
</template>
