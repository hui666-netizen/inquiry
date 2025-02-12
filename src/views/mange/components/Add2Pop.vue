<script lang="ts" setup>
import { SjzyForm, SjzyModal, useModal, useSjzyForm } from '@sjzy/ui'
import { ElMessageBox } from 'element-plus'
import { typeDropDownData } from '../data'
import { ExternalUserMaintainExternalUserPOST } from '@/api/user-externalUser/ExternalUser'
import { CustomerSaveCustomer } from '@/api/cams-inquiry/Customer'

defineOptions({
  name: 'Add2Pop',
})

const props = defineProps({
  registerData: {
    type: Object,
    default: () => {},
  },
})

/** 刷新表格 */
const emit = defineEmits<{
  reload: []
}>()

/** 获取用户信息 */
const userStore = useUserStore()

/** 引入 */
const [modalRegister, { setModalProps, closeModal }] = useModal()

/** 弹框表单 */
const [registerPop, { validate, getFormValue, setFieldsValue }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: [
    {
      label: '类型',
      required: true,
      field: 'CustomerType',
      component: 'SjzySelect',
      componentProps: {
        options: {
          spareData: typeDropDownData,
          labelKey: ['label'],
          valueKey: 'value',
        },
      },
    },
    {
      label: '所属企业',
      field: 'CompanyName',
      component: 'SjzyInput',
      componentProps: () => {
        return {
          placeholder: '请输入',
          maxlength: 50,
        }
      },
      rules: [
        {
          required: true,
          message: '请输入企业名称',
          trigger: 'blur',
        },
        {
          pattern: /^.{0,50}$/,
          message: '企业名称长度不能超过50个字符',
          trigger: 'change',
        },
      ],
    },
  ],
})

/** 新增的第二个弹框 */
function onOpenAdd2Pop() {
  setModalProps({
    title: '新建',
    width: '450px',
    visible: true,
    okText: '确定',
    showCancelBtn: false,
    showClose: false,
  })

  nextTick(() => {
    setFieldsValue({
      CustomerType: 1,
    })
  })
}

/** 保存 */
async function handleSave() {
  const flag = await validate()
  if (flag) {
    console.log(props.registerData, 'props.registerData')

    const params: InquiryApi.inquirySaveCustomerRequest = {
      CompanyName: getFormValue().CompanyName,
      CustomerId: props.registerData.CustomerId,
      CustomerType: getFormValue().CustomerType,
      PhoneNumber: props.registerData.PhoneNumber,
      ReviewerId: userStore.userId as number,
    }
    const {
      data: { Code, Data },
    } = await CustomerSaveCustomer(params)

    if (Code === '200') {
      ElMessageBox.confirm(`${t('将绑定的手机号改为客户的?')}`, `${t('提示')}`, {
        type: 'warning',
        lockScroll: false,
        center: false,
        showClose: false,
        showCancelButton: false,
        customClass: 'sjzy-hey-message-box',
        confirmButtonText: t('确定'),
      })
        .then(async () => {
          // 将之前注册的手机号改为用户自己的
          const params: UserApi.MaintainExternalUserInput = {
            options: 3,
            id: props.registerData.CustomerId,
            account: props.registerData.PhoneNumber,
            telPhone: props.registerData.PhoneNumber,
            accountType: 1,
            systemIds: [userStore.subSysId],
          }
          const { data } = await ExternalUserMaintainExternalUserPOST(params)
          if (data) {
            emit('reload')
            closeModal()
          }
        })
        .catch(() => {
          console.log('bbb')
        })
    }
    else {
      $baseMessage(Data as string, 'error')
    }
  }
}

defineExpose({
  onOpenAdd2Pop,
})
</script>

<template>
  <div class="p-2">
    <!-- 弹窗 -->
    <SjzyModal @register="modalRegister" @ok="handleSave()">
      <SjzyForm @register="registerPop" />
    </SjzyModal>
  </div>
</template>
