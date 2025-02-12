<script lang="ts" setup>
import { SjzyTableForm, TableButtons, useSjzyTableForm } from '@sjzy/ui'
import { columnsData, stateDropDownData, typeDropDownData } from './data'
import AddPop from './components/AddPop.vue'
import Add2Pop from './components/Add2Pop.vue'
import EnterprisePop from './components/EnterprisePop.vue'
import { ExternalUserMaintainExternalUserPOST } from '@/api/user-externalUser/ExternalUser'
import {
  CustomerFindCustomerFuzzy,
  CustomerFindSaleManFuzzy,
  CustomerModifyCustomerStatus,
  CustomerModifyCustomerType,
} from '@/api/cams-inquiry/Customer'

defineOptions({
  name: 'UserMange',
})

/** 获取用户id */
const userStore = useUserStore()

/** 新增弹框1组件 */
const addPopRef = ref<InstanceType<typeof AddPop>>()

/** 新增弹框2组件 */
const addPopRef2 = ref<InstanceType<typeof Add2Pop>>()

/** 企业认证弹框组件 */
const enterprisePopRef = ref<InstanceType<typeof EnterprisePop>>()

/** 注册的用户id和用户手机号 */
const registerData = ref<{ CustomerId: number, PhoneNumber: string }>({
  CustomerId: 0,
  PhoneNumber: '',
})

/** 主体表格 */
const [register, { reload }] = useSjzyTableForm({
  table: {
    api: filterCustomerFindAllCustomerList,
    currentPageField: 'PageIndex',
    pageSizeField: 'PageSize',
    dataField: 'CustomerListInfo',
    totalField: 'Pageination.Total',

    autoHeight: true,
    showToolbar: true,
    actionWidth: 100,
    offsetHeight: 20,
    tableRowId: 'CustomerId',

    columns: columnsData,
  },
  form: {
    defaultSliceSchemasNum: 5,
    schemas: [
      {
        label: '手机号',
        field: 'PhoneNumber',
        component: 'SjzyInput',
        componentProps: () => {
          return {
            placeholder: '客户注册的手机号',
            maxlength: 11,
          }
        },
        colProps: {
          span: 4,
        },
        rules: [
          {
            validator: (rule, value, callback) => {
              const regex = /^\d{11}$/
              if (regex.test(value) || value === undefined) {
                callback()
              }
              else {
                callback(new Error('请输入11位整数'))
              }
            },
          },
        ],
      },
      {
        label: '类型',
        field: 'CustomerType',
        component: 'SjzySelect',
        componentProps: {
          placeholder: t('全部'),
          options: {
            spareData: typeDropDownData,
            labelKey: ['label'],
            valueKey: 'value',
          },
        },
        colProps: {
          span: 3,
        },
      },
      {
        label: '状态',
        field: 'CustomerStatus',
        component: 'SjzySelect',
        componentProps: {
          placeholder: t('全部'),
          options: {
            spareData: stateDropDownData,
            labelKey: ['label'],
            valueKey: 'value',
          },
        },
        colProps: {
          span: 3,
        },
      },
      {
        label: '创建时间',
        field: 'time',
        component: 'DatePicker',
        componentProps: () => ({
          'format': 'YYYY-MM-DD HH:mm:ss',
          'value-format': 'YYYY-MM-DD HH:mm:ss',
          'type': 'datetimerange',
          'range-separator': t('至'),
          'start-placeholder': t('开始时间'),
          'end-placeholder': t('结束时间'),
        }),
        colProps: {
          span: 6,
        },
      },
      {
        label: '归属业务员',
        field: 'SaleManId',
        component: 'SjzySelect',
        componentProps: {
          placeholder: t('全部'),
          searchKey: 'keyword',
          isChangeClear: true,
          isFetchClear: true,
          options: {
            api: CustomerFindSaleManFuzzy,
            tableTitle: ['业务员姓名', '业务员手机号'],
            labelKey: ['SaleManName', 'SaleManPhoneNumber'],
            valueKey: 'SaleManId',
            dataField: 'data.Data.List',
            // resultField: 'data.Data.List',
            // totalField: 'data.Data.Pageination.Total',
          },
        },
        colProps: {
          span: 4,
        },
      },
    ],
  },
})

/** 对象映射渲染企业认证状态 */
const statusMap: { [key: number]: { class: string, text: string } } = {
  0: { class: 'status-unsubmitted', text: '未提交' },
  1: { class: 'status-pending', text: '审核' },
  2: { class: 'status-approved', text: '已通过' },
  3: { class: 'status-rejected', text: '未通过' },
}

/**
 * 查询接口
 * @param params 入参
 */
async function filterCustomerFindAllCustomerList(params: any) {
  const { CustomerStatus, time } = params
  const optimizedCustomerStatus = CustomerStatus !== 0 && CustomerStatus !== 1 ? 2 : CustomerStatus
  const [StartTime, EndTime] = time || ['', '']
  const res = await CustomerFindCustomerFuzzy({
    ...params,
    CustomerStatus: optimizedCustomerStatus,
    StartTime,
    EndTime,
  })
  return res.data.Data
}

/** 点击新增，打开第一个弹框 */
function onAddClick() {
  addPopRef.value?.onOpenAdd1Pop()
}

/** 新增第一步后，打开第二个弹框 */
function onNextAddPop(CustomerId: number, PhoneNumber: string) {
  addPopRef2.value?.onOpenAdd2Pop()
  registerData.value.CustomerId = CustomerId
  registerData.value.PhoneNumber = PhoneNumber
}

/** 修改客户状态 */
function onSwitchChange(row: { CustomerId: number, PhoneNumber: string, IsDelete: number }) {
  const data: UserApi.MaintainExternalUserInput = {
    options: 3,
    id: row.CustomerId,
    account: row.PhoneNumber,
    telPhone: row.PhoneNumber,
    isEnable: !row.IsDelete,
    customerStatus: !row.IsDelete,
    accountType: 1,
    systemIds: [userStore.subSysId],
  }
  ExternalUserMaintainExternalUserPOST(data).then((res) => {
    if (res.code === '200') {
      CustomerModifyCustomerStatus({
        CustomerId: row.CustomerId,
        CustomerStatus: row.IsDelete,
      }).then((res) => {
        const {
          data: { Data },
        } = res
        $baseMessage(Data as string, 'success')
      })
    }
  })
}

/** 修改客户类型 */
function onSelectChange(row: { CustomerId: number, CustomerType: number }) {
  CustomerModifyCustomerType({
    CustomerId: row.CustomerId,
    CustomerType: row.CustomerType,
  })
    .then(() => {
      $baseMessage('修改成功', 'success')
    })
    .catch((err: any) => {
      console.log(err)
    })
}

/** 点击审核 */
function onauthenticationClick(row: { CustomerId: number | undefined, CustomerType: number }) {
  enterprisePopRef.value?.onModalClick(row)
}

/** 点击企业认证资料 */
function onInformationClick(row: { CustomerId: number | undefined, CustomerType: number }) {
  enterprisePopRef.value?.onModalClick(row)
}
</script>

<template>
  <div class="p-2">
    <!-- 主体 -->
    <SjzyTableForm @register="register">
      <template #t-switch_default="{ row }">
        <VxeSwitch
          v-model="row.IsDelete"
          :open-value="0"
          :close-value="1"
          @change="onSwitchChange(row)"
        />
      </template>

      <template #t-select_default="{ row }">
        <SjzySelect
          v-model="row.CustomerType"
          :clearable="false"
          :options="{
            spareData: typeDropDownData,
            labelKey: ['label'],
            valueKey: 'value',
          }"
          @change="onSelectChange(row)"
        />
      </template>

      <template #t-authentication_click_default="{ row }">
        <p
          :class="statusMap[row.IsAuthenticated].class"
          @click="row.IsAuthenticated === 1 ? onauthenticationClick(row) : null"
        >
          {{ statusMap[row.IsAuthenticated].text }}
        </p>
      </template>

      <template #t-information_click_default="{ row }">
        <div class="information" @click="onInformationClick(row)">
          认证资料
        </div>
      </template>

      <template #t-toolbar_buttons>
        <TableButtons
          :actions="[
            {
              type: 'primary',
              label: '新建',
              onClick: onAddClick,
            },
          ]"
        />
      </template>
    </SjzyTableForm>

    <!-- 弹窗 -->
    <AddPop ref="addPopRef" class="!p-0" @next-add-pop="onNextAddPop" />
    <Add2Pop ref="addPopRef2" class="!p-0" :register-data="registerData" @reload="reload" />
    <EnterprisePop ref="enterprisePopRef" class="!p-0" @reload="reload" />
  </div>
</template>

<style lang="scss" scoped>
:deep() .sjzy-table-v2-form-wrapper {
  padding: 0 15px;
}

.status-unsubmitted {
  color: #767984;
}

.status-pending {
  color: #1684fc;
  cursor: pointer;
}

.status-approved {
  color: #3b9f08;
}

.status-rejected {
  color: #ec4646;
}

.information {
  width: 160px;
  color: #1684fc;
  cursor: pointer;
}

.enterprise-pop {
  width: 0;
  height: 0;
}

// :deep()
// .el-select__wrapper{
//   background-color:none;
//   box-shadow:none;
// }

// :deep()
// .el-select__wrapper:hover{
//   box-shadow:none;
// }

// :deep()
// .el-select__wrapper.is-focused{
//   box-shadow:none;
// }

// :deep()
// .el-select__wrapper.hover{
//   box-shadow:none;
// }
</style>
