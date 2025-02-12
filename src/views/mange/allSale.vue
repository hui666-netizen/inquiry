<script lang="ts" setup>
import { SjzyTableForm, useSjzyTableForm } from '@sjzy/ui'
import { allSaleColumn } from './data'
import {
  SalemanCheckSalemanByManyConditions,
  SalemanFuzzyQueryByCompany,
  SalemanFuzzyQueryByName,
  SalemanFuzzyQueryByPhoneNumber,
} from '@/api/cams-inquiry/Saleman'

defineOptions({
  name: 'Allsale',
})

const [register] = useSjzyTableForm({
  table: {
    api: SalemanCheckSalemanByManyConditions,
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
    showIndex: true,
    showPager: true,
    offsetHeight: 20,
    tableRowId: 'id',
    showSetting: true,
    showToolbar: true,
    columns: allSaleColumn,
  },
  form: {
    schemas: [
      {
        label: '公司',
        field: 'CompanyName',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              api: SalemanFuzzyQueryByCompany,
              labelKey: ['CompanyName'],
              valueKey: 'CompanyName',
              dataField: 'data.Data.List',
              // resultField: 'data.Data.List',
              // totalField: 'data.Data.Pagination.Total',
            },
            searchKey: 'CompanyName',
          }
        },
        colProps: {
          span: 6,
        },
      },
      {
        label: '姓名',
        field: 'SalemanName',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              api: SalemanFuzzyQueryByName,
              labelKey: ['SalemanName'],
              valueKey: 'SalemanName',
              dataField: 'data.Data.List',
              // resultField: 'data.Data.List',
              // totalField: 'data.Data.Pagination.Total',
            },
            searchKey: 'SalemanName',
          }
        },
        rules: [{ max: 9 }],
        colProps: {
          span: 6,
        },
      },
      {
        label: '手机号',
        field: 'PhoneNumber',
        component: 'SjzySelect',
        componentProps: () => {
          return {
            options: {
              api: SalemanFuzzyQueryByPhoneNumber,
              labelKey: ['PhoneNumber'],
              valueKey: 'PhoneNumber',
              dataField: 'data.Data.List',
              // resultField: 'data.Data.List',
              // totalField: 'data.Data.Pagination.Total',
            },
            searchKey: 'PhoneNumber',
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
    ],
  },
})
</script>

<template>
  <div class="p-2">
    <SjzyTableForm @register="register" />
  </div>
</template>
