import type { FormSchema } from '@sjzy/ui'

/** 主表格表头数据 */
export const columnsData = [
  {
    field: 'PhoneNumber',
    title: '账号',
  },
  {
    field: 'Email',
    title: '邮箱',
    formatter: ['formatEmpty', '- -'],
  },
  {
    field: 'CustomerType',
    title: '类型',
    slots: { default: 'select_default' },
    // editRender: { autofocus: '.el-input__inner' },
  },
  {
    field: 'SaleManName',
    title: '归属业务员',
    formatter: ['formatEmpty', '- -'],
  },
  {
    field: 'SaleManPhoneNumber',
    title: '业务员手机号',
    formatter: ['formatEmpty', '- -'],
  },
  {
    field: 'RegistTime',
    title: '注册时间',
  },
  {
    field: 'IsAuthenticated',
    title: '企业认证',
    slots: { default: 'authentication_click_default' },
  },
  {
    field: 'IsDelete',
    title: '启用',
    slots: { default: 'switch_default' },
  },
  {
    field: 'CompanyName',
    title: '所属企业',
    formatter: ['formatEmpty', '- -'],
  },
  {
    title: '企业认证资料',
    slots: { default: 'information_click_default' },
  },
]

/** 状态下拉框数据 */
export const stateDropDownData = [
  {
    label: '启用',
    value: 0,
  },
  {
    label: '禁用',
    value: 1,
  },
]

/** 类型下拉数据 */
export const typeDropDownData = [
  {
    label: '直客',
    value: 1,
  },
  {
    label: '同行',
    value: 2,
  },
  {
    label: '海外代理',
    value: 3,
  },
]

/** 增加表单数据 */
export const add1SchemasData = ref<FormSchema[]>([
  {
    label: '客户手机号(账号)',
    field: 'account',
    component: 'SjzyInput',
    componentProps: () => {
      return {
        placeholder: '请输入',
        maxlength: 11,
      }
    },
    rules: [
      {
        required: true,
        pattern: /^1[3-9]\d{9}$/,
        message: '只能输入整数',
        trigger: 'change',
      },
    ],
  },
  {
    label: '客户登录密码',
    field: 'passWord',
    component: 'SjzyInput',
    componentProps: () => {
      return {
        placeholder: '请输入',
        maxlength: 19,
      }
    },
    rules: [
      {
        required: true,
        pattern: /^[a-z\d!@#$%^&*(),.?":{}|<>]{6,19}$/i,
        message: '长度为6-19位,支持数字、字母、符号',
        trigger: 'change',
      },
    ],
  },
  {
    label: '确认您的手机号',
    field: 'telPhone',
    component: 'SjzyInput',
    componentProps: () => {
      return {
        placeholder: '请输入',
        maxlength: 11,
      }
    },
    rules: [
      {
        required: true,
        pattern: /^1[3-9]\d{9}$/,
        message: '只能输入整数',
        trigger: 'change',
      },
    ],
  },
  {
    label: '您收到的验证码',
    field: 'messageCode',
    component: 'SjzyInput',
    rules: [
      {
        required: true,
        pattern: /^\d{6}$/,
        message: '请输入6位数字验证码',
        trigger: 'change',
      },
    ],
    slot: 'messageCode_default',
  },
])

/** 企业认证资料弹框数据 */
export const EnterprisePopSchemas = [
  {
    label: '企业营业执照',
    field: 'CompanyLisecePic',
    component: 'SjzyInput',
    colProps: {
      span: 8,
    },
    slot: 'CompanyLisecePic_default',
  },
  {
    label: '法人身份证正面',
    field: 'LegalPersonIdCardBackPic',
    component: 'SjzyInput',
    colProps: {
      span: 8,
    },
    slot: 'LegalPersonIdCardBackPic_default',
  },
  {
    label: '法人身份证反面',
    field: 'LegalPersonIdCardFrontPic',
    component: 'SjzyInput',
    colProps: {
      span: 8,
    },
    slot: 'LegalPersonIdCardFrontPic_default',
  },
  {
    label: '国家',
    field: 'CountryCnName',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '省/市',
    field: 'ProvinceCnName',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '市/区',
    field: 'CityCnName',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '企业名称',
    field: 'CityCnName',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '企业简称',
    field: 'CompanyIntroduction',
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '企业英文名',
    field: 'CompanyEnName',
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '公司代码',
    field: 'CompanyCustomCode',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '统一信用社代码',
    field: 'CompanyCode',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '代理联系人',
    field: 'ProxyPerson',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '代理联系人电话',
    field: 'ProxyPhone',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '注册时间',
    field: 'RegistTime',
    required: true,
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
  {
    label: '期望航线',
    field: 'ExpectedRoute',
    component: 'SjzyInput',
    componentProps: {
      disabled: true,
    },
    colProps: {
      span: 8,
    },
  },
]
