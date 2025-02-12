<script lang="ts" setup>
import { SjzyForm, SjzyModal, useModal, useSjzyForm } from '@sjzy/ui'
import type { airSearchRule, airTableRule } from '../common'
import {
  AircrftTypeCol,
  IsAddBoardFeeCol,
  IsDisclosurePriceCol,
  IsInternalCol,
  IsRecommendCol,
  TransitMethodCol,
  currencyIdInterface,
  getCurTime,
  portInterface,
  priceRule,
  priceTypeCol,
} from '../common'
import { GoodsTypeAirGetGoodsTypeAirListPOST } from '@/api/dc-default/GoodsTypeAir'
import { DirectMaintainFreight } from '@/api/cams-inquiry/Direct'

defineOptions({
  name: 'AirModal',
})

const props = defineProps({
  numCode: {
    type: Number,
    defalut: 0,
  },
})

/** 用于触发 reload 事件 */
const emit = defineEmits<{
  reload: []
}>()

/** row: 当前行的数据 */
const row = ref<airTableRule>()

/** 用于区分操作类型（新增或编辑） */
const types = ref<'add' | 'edit'>()

/** 表单数据模型 */
const tableForm = ref<airTableRule>({
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
  CurrencyCode: undefined,
  CargoType: undefined,
  PriceType: undefined,
  StartTime: undefined,
  EndTime: undefined,
  ArrayDays: undefined,
  AircraftType: undefined,
  IsAddBoardFee: undefined,
  IsDisclosurePrice: undefined,
  IsRecommend: undefined,
  Transit1Code: undefined,
  TransitMethod1: undefined,
  Transit2Code: undefined,
  TransitMethod2: undefined,
  DestinationTransitMethodId: undefined,
  CnRemarks: undefined,
  EnRemarks: undefined,
  Carrier: undefined,
  IsInternal: undefined,
  ReviewedPersonName: undefined,
})

/** 解构Modal方法 */
const [modalRegister, { setModalProps, closeModal }] = useModal()

/** 表单方法,解构useSjzyForm方法 */
const [register, { validate, setFieldsValue }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      label: '航司代码',
      field: 'AirlineCompanyCode',
      component: 'SjzyInput',
      componentProps: () => {
        return {
          readonly: true,
        }
      },
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '起运港',
      field: 'StartPlaceCode',
      component: 'SjzyInput',
      componentProps: () => {
        return {
          readonly: true,
        }
      },
      rules: [
        { required: true, message: '请输入出发港口', trigger: 'change' },
        {
          validator: (_rule: any, value: any, callback: (arg0?: Error | undefined) => void) => {
            if (tableForm.value.StartPlaceCode === tableForm.value.EndPlaceCode) {
              return callback(new Error('起运港和目的港不能相同'))
            }
            callback()
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
        { required: true, message: '请输入目的港', trigger: 'change' },
        {
          validator: (_rule: any, value: any, callback: (arg0?: Error | undefined) => void) => {
            if (tableForm.value.EndPlaceCode === tableForm.value.StartPlaceCode) {
              return callback(new Error('起运港和目的港不能相同'))
            }
            callback()
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
      rules: priceRule(),
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
      rules: priceRule(),

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
      rules: priceRule(),
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
      rules: priceRule(),
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
      rules: priceRule(),
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
      rules: priceRule(),
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
      rules: priceRule(),
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
      rules: priceRule(),
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
      rules: priceRule(),
      colProps: {
        span: 8,
      },
    },
    {
      label: '币种',
      field: 'CurrencyCode',
      component: 'SjzySelect',
      componentProps: currencyIdInterface,
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '货物类型',
      field: 'CargoType',
      component: 'SjzySelect',
      componentProps: () => {
        return {
          options: {
            api: GoodsTypeAirGetGoodsTypeAirListPOST,
            labelKey: ['goodsTypeName'],
            valueKey: 'goodsTypeName',
          },
          immediate: true,
          extra: { airCompanyId: props.numCode },
        }
      },
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '价格类型',
      field: 'PriceType',
      component: 'SjzySelect',
      componentProps: priceTypeCol,
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '开始时间',
      field: 'StartTime',
      component: 'SjzyDatePicker',
      componentProps: () => {
        return {
          'unlink-panels': true,
          'value-format': 'YYYY-MM-DD',
          'format': 'YYYY-MM-DD',
        }
      },
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '结束时间',
      field: 'EndTime',
      component: 'SjzyDatePicker',
      componentProps: () => {
        return {
          'unlink-panels': true,
          'value-format': 'YYYY-MM-DD',
          'format': 'YYYY-MM-DD',
        }
      },
      rules: [
        {
          validator: (rule: any, value: any, callback: (error?: Error) => void) => {
            if (
              tableForm.value.StartTime
              && value
              && new Date(value).getTime() <= new Date(tableForm.value.StartTime).getTime()
            ) {
              callback(new Error('该时间必须要早于结束时间'))
            }
            else {
              callback()
            }
          },
        },
      ],
      colProps: {
        span: 8,
      },
    },
    {
      label: '预计到达天数',
      field: 'ArrayDays',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入预计到达天数',
      },
      dynamicRules() {
        return [
          {
            required: true,
          },
          {
            validator: (
              _rule: any,
              value: string,
              callback: (arg0?: Error | undefined) => void,
            ) => {
              const regex = /^\d{1,5}$/
              if (!regex.test(value)) {
                return callback(new Error('只能输入整数，不能超过五位数'))
              }
              callback()
            },
            trigger: 'change',
          },
        ]
      },
      colProps: {
        span: 8,
      },
    },
    {
      label: '飞机类型',
      field: 'AircraftType',
      component: 'SjzySelect',
      componentProps: AircrftTypeCol,
      colProps: {
        span: 8,
      },
    },
    {
      label: '加收打板费',
      field: 'IsAddBoardFee',
      component: 'SjzySelect',
      componentProps: IsAddBoardFeeCol,
      colProps: {
        span: 8,
      },
    },
    {
      label: '是否公开',
      field: 'IsDisclosurePrice',
      component: 'SjzySelect',
      componentProps: IsDisclosurePriceCol,
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '是否推荐',
      field: 'IsRecommend',
      component: 'SjzySelect',
      componentProps: IsRecommendCol,
      colProps: {
        span: 8,
      },
    },
    {
      label: '中转1',
      field: 'Transit1Code',
      component: 'SjzySelect',
      componentProps: portInterface,

      rules: [
        {
          validator: (_rule: any, value: any, callback: (arg0?: Error | undefined) => void) => {
            if (tableForm.value.Transit1Code === undefined || tableForm.value.Transit1Code === '') {
              callback()
            }
            else if (tableForm.value.Transit1Code === tableForm.value.Transit2Code) {
              callback(new Error('中转1和中转2不能相同'))
            }
            else if (tableForm.value.StartPlaceCode === tableForm.value.Transit1Code) {
              callback(new Error('中转1和起运港不能相同'))
            }
            else if (tableForm.value.EndPlaceCode === tableForm.value.Transit1Code) {
              callback(new Error('中转1和目的港不能相同'))
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
      label: '中转1方式',
      field: 'TransitMethod1',
      component: 'SjzySelect',
      componentProps: TransitMethodCol,
      colProps: {
        span: 8,
      },
    },
    {
      label: '中转2',
      field: 'Transit2Code',
      component: 'SjzySelect',
      componentProps: portInterface,
      rules: [
        {
          validator: (_rule: any, value: any, callback: (arg0?: Error | undefined) => void) => {
            if (tableForm.value.Transit2Code === undefined || tableForm.value.Transit2Code === '') {
              callback()
            }
            else if (tableForm.value.StartPlaceCode === tableForm.value.Transit2Code) {
              callback(new Error('中转2和起运港不能相同'))
            }
            else if (tableForm.value.EndPlaceCode === tableForm.value.Transit2Code) {
              callback(new Error('中转2和目的港不能相同'))
            }
            else if (tableForm.value.Transit1Code === tableForm.value.Transit2Code) {
              callback(new Error('中转1和中转2不能相同'))
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
      label: '中转2方式',
      field: 'TransitMethod2',
      component: 'SjzySelect',
      componentProps: TransitMethodCol,
      colProps: {
        span: 8,
      },
    },
    {
      label: '目的转运港方式',
      field: 'DestinationTransitMethodId',
      component: 'SjzySelect',
      componentProps: {
        options: {
          spareData: [
            { label: '飞机', value: 1 },
            { label: '卡车', value: 2 },
          ],
          labelKey: ['label'],
          valueKey: 'value',
        },
      },
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      label: '中文备注',
      field: 'CnRemarks',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入中文备注',
      },
      rules: [{ max: 1000, message: '输入文字数不能超过1000' }],
      colProps: {
        span: 8,
      },
    },
    {
      label: '英文备注',
      field: 'EnRemarks',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入英文备注',
      },
      rules: [{ max: 1000, message: '输入文字数不能超过1000' }],
      colProps: {
        span: 8,
      },
    },
    {
      label: '承运商',
      field: 'Carrier',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入承运商',
      },
      rules: [{ max: 100, message: '输入文字数不能超过100' }],
      colProps: {
        span: 8,
      },
    },
    {
      label: '内外部',
      field: 'IsInternal',
      component: 'SjzySelect',
      componentProps: IsInternalCol,
      colProps: {
        span: 8,
      },
    },
    {
      label: '审核人',
      field: 'ReviewedPersonName',
      component: 'SjzyInput',
      componentProps: {
        placeholder: '请输入审核人',
      },
      rules: [{ max: 20, message: '输入文字数不能超过20' }],
      colProps: {
        span: 8,
      },
    },
  ],
})

/** 打开弹窗事件 */
function onDrawerClick(
  type: 'add' | 'edit',
  searchData: airSearchRule | undefined,
  val?: airTableRule,
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
    tableForm.value.CurrencyCode = 'CNY'
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
        DestinationTransitMethodId: val?.DestinationTransitMethod,
        CurrencyCode: val?.Currency,
        Transit1Code: val?.Transit1,
        Transit2Code: val?.Transit2,
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

    DirectMaintainFreight({
      OptionType: actionType === 'add' ? 1 : 3,
      Id: actionType === 'add' ? 0 : selectedRow?.Id,
      ...tableForm.value,
      IsAddBoardFee: tableForm.value.IsAddBoardFee ?? 0,
      IsDisclosurePrice: tableForm.value.IsDisclosurePrice ?? 0,
      IsRecommend: tableForm.value.IsRecommend ?? 0,
      TransitMethod1Id: tableForm.value.TransitMethod1 ?? 0,
      TransitMethod2Id: tableForm.value.TransitMethod2 ?? 0,
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
