<script lang="ts" setup>
import { SjzyForm, SjzyModal, useModal, useSjzyForm } from '@sjzy/ui'
import type { profitSearchRule, profitTableRule } from '../common'
import {
  CompanyInterface,
  CustomerTypeCol,
  currencyIdInterface,
  getCurTime,
  portInterface,
  profitPriceRule,
} from '../common'
import { ProfitMaintainFreight } from '@/api/cams-inquiry/Profit'

defineOptions({
  name: 'TransModal',
})

/** 用于触发 reload 事件 */
const emit = defineEmits<{
  reload: []
}>()

/** row: 当前行的数据 */
const row = ref<profitTableRule>()

/** 用于区分操作类型（新增或编辑） */
const types = ref<'add' | 'edit'>()

/** 表单数据模型 */
const tableForm = ref<profitTableRule>({
  CustomerType: undefined,
  AirlineCompanyCode: undefined,
  StartPlaceCode: undefined,
  EndPlaceCode: undefined,
  Mini: undefined,
  N: undefined,
  A45: undefined,
  A100: undefined,
  A250: undefined,
  A300: undefined,
  A500: undefined,
  A1000: undefined,
  A3000: undefined,
  Currency: undefined,
})

/** 解构Modal方法 */
const [modalRegister, { setModalProps, closeModal }] = useModal()

/** 表单方法,解构useSjzyForm方法 */
const [register, { validate, setFieldsValue }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      label: '客户类型',
      field: 'CustomerType',
      component: 'SjzySelect',
      componentProps: CustomerTypeCol,
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '航司',
      field: 'AirlineCompanyCode',
      component: 'SjzySelect',
      componentProps: () => CompanyInterface,
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '起运港',
      field: 'StartPlaceCode',
      component: 'SjzySelect',
      componentProps: portInterface,
      rules: [
        { required: true, message: '请输入起运港口', trigger: 'change' },
        {
          validator: (_rule: any, value: any, callback: (arg0?: Error | undefined) => void) => {
            if (tableForm.value.StartPlaceCode === tableForm.value.EndPlaceCode) {
              callback(new Error('起运港口和目的港口不能相同'))
            }
            else {
              callback()
            }
          },
          trigger: 'change',
        },
      ],
      colProps: {
        span: 8,
      },
    },

    {
      label: '目的港',
      field: 'EndPlaceCode',
      component: 'SjzySelect',
      componentProps: portInterface,
      rules: [
        { required: true, message: '请输入目的港口', trigger: 'change' },
        {
          validator: (_rule: any, value: any, callback: (arg0?: Error | undefined) => void) => {
            if (tableForm.value.StartPlaceCode === tableForm.value.EndPlaceCode) {
              callback(new Error('起运港口和目的港口不能相同'))
            }
            else {
              callback()
            }
          },
          trigger: 'change',
        },
      ],
      colProps: {
        span: 8,
      },
    },
    {
      label: '底价',
      field: 'Mini',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入底价',
      },
      rules: profitPriceRule('底价'),
      colProps: {
        span: 8,
      },
    },
    {
      label: '初始价格',
      field: 'N',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入初始价格',
      },
      rules: profitPriceRule('初始'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_45价格',
      field: 'A45',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_45价格',
      },
      rules: profitPriceRule('A_45'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_100价格',
      field: 'A100',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_100价格',
      },
      rules: profitPriceRule('A_100'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_250价格',
      field: 'A250',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_250价格',
      },
      rules: profitPriceRule('A_250'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_300价格',
      field: 'A300',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_300价格',
      },
      rules: profitPriceRule('A_300'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_500价格',
      field: 'A500',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_500价格',
      },
      rules: profitPriceRule('A_500'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_1000价格',
      field: 'A1000',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_1000价格',
      },
      rules: profitPriceRule('A_1000'),
      colProps: {
        span: 8,
      },
    },
    {
      label: 'A_3000价格',
      field: 'A3000',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入A_3000价格',
      },
      rules: profitPriceRule('A_3000'),
      colProps: {
        span: 8,
      },
    },
    {
      label: '币种',
      field: 'Currency',
      component: 'SjzySelect',
      componentProps: currencyIdInterface,
      required: true,
      colProps: {
        span: 8,
      },
    },
  ],
})

/** 打开弹窗事件 */
async function onDrawerClick(
  type: 'add' | 'edit',
  searchData: profitSearchRule | undefined,
  val?: profitTableRule,
) {
  row.value = undefined
  setModalProps({
    title: types.value === 'add' ? '新增直飞运价维护' : '修改直飞运价维护',
    width: '1200px',
    height: 500,
    visible: true,
    cancelText: '取消',
    okText: '保存',
  })

  if (type === 'add') {
    types.value = 'add'
    tableForm.value.AirlineCompanyCode = searchData?.AirlineCompanyCode
    tableForm.value.StartPlaceCode = searchData?.StartPlaceCode
    tableForm.value.EndPlaceCode = searchData?.EndPlaceCode
    tableForm.value.CustomerType = searchData?.CustomerType
    tableForm.value.Currency = 'CNY'
    tableForm.value.PriceType = '普价'
  }
  else if (type === 'edit') {
    row.value = val
    types.value = 'edit'
    nextTick(() => {
      setFieldsValue({
        StartPlaceCode: val?.StartPlace,
        EndPlaceCode: val?.EndPlace,
        AirlineCompanyCode: val?.AirlineCompany,
        ...val,
      })
    })
  }
}

/** 保存事件 */
async function handleSave() {
  const flag = await validate()
  const user = JSON.parse(localStorage.getItem('user') ?? '{}')
  const curTime = getCurTime()

  if (flag) {
    const { value: actionType } = types
    const { value: selectedRow } = row

    ProfitMaintainFreight({
      ...tableForm.value,
      OptionType: actionType === 'add' ? 1 : 3,
      Id: actionType === 'add' ? 0 : selectedRow?.Id,
      CreateUserId: actionType === 'add' ? user.userId : row.value?.CreateUserId,
      UpdateUserId: user.userId,
      CreateTime: actionType === 'add' ? curTime : row.value?.CreateTime,
      UpdateTime: curTime,
    })
      .then((res) => {
        $baseMessage(`${res.data.Msg}`, res.data.Code === 200 ? 'success' : 'error')
      })
      .catch((error) => {
        console.log(error)
        $baseMessage('失败', 'error')
      })
      .finally(() => {
        emit('reload')
      })

    closeModal()
  }
  else {
    $baseMessage('校验失败', 'error')
  }
}

/** 暴露方法 */
defineExpose({
  onDrawerClick,
})
</script>

<template>
  <div>
    <SjzyModal @register="modalRegister" @ok="handleSave">
      <SjzyForm :model="tableForm" @register="register" />
    </SjzyModal>
  </div>
</template>
