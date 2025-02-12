<script lang="ts" setup>
import { SjzyForm, SjzyModal, Vertify, useModal, useSjzyForm } from '@sjzy/ui'
import { encryptedData } from '@sjzy/utils'
import { add1SchemasData } from '../data'
import { CaptchaGetCaptchaPOST, CaptchaVerfiyCaptchaPOST } from '@/api/user-code/Captcha'
import {
  ExternalUserExternalUserRegisterSendMessagePOST,
  ExternalUserRegisterExternalUserPOST,
} from '@/api/user-externalUser/ExternalUser'

defineOptions({
  name: 'AddPop',
})

/** 告诉父组件打开第二个弹框 */
const emit = defineEmits<{
  'next-add-pop': [CustomerId: number, PhoneNumber: string]
}>()

/** 密码加密参数 */
const publicKey
  = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7Nsa8do705Vvn1mLHxNNxaiY0HqhKv2+BHQbIzXUycf8I3XKvWbqa0Ids5xU8isp0wHbKKYV53w1kwUQUM/yU96b2cHovkxnN3OdrgLxaSpZE56tyQX+ToocCQJmrXUYJqvkqRklaDbQd9vuWW2wEkJ0mYJXcjMsJpi+z21CyduywVmVo/j0DQOX7KZdV1UOHjjzHPT+v/htlY1nfad2uhxcULWpLJLm11Ner+Gr/noA96Efg1ZDoC7NROMUIfXqIyl8UD0pxRCCPEg4gO9Aq6e0m8KOG5w9HwvfZ8R2WEjF3bUEBkQgOqI3ULEoZIBd0YfEsOgHOqwMsREO3bNr4wIDAQAB'

/** 表单数据 */
const modelData = reactive({
  account: '',
  passWord: '',
  telPhone: '',
  messageCode: '',
})

/** 获取用户信息 */
const userStore = useUserStore()

/** 验证码 */
const clickMessageCode = reactive({
  isVertify: true,
  count: 60,
  dialogVisible: false,
})

/** 引入弹框 */
const [modalRegister, { setModalProps, closeModal }] = useModal()

/** 弹框 */
const [registerPop, { validate, setFieldsValue, validateField }] = useSjzyForm({
  labelPosition: 'top',
  showActionButtonGroup: false,
  schemas: add1SchemasData,
})

/** 打开弹框 */
function onOpenAdd1Pop() {
  setModalProps({
    title: '新建',
    width: '450px',
    visible: true,
    cancelText: '关闭',
    okText: '确定',
  })
  nextTick(() => {
    setFieldsValue({
      passWord: 'bsi888999',
      telPhone: userStore.telPhone,
    })
  })
}

/** 手机号发送验证码滑块验证 */
async function phoneSendCode() {
  const flag = await validateField('telPhone')
  console.log(flag, 'flag')

  if (flag) {
    clickMessageCode.dialogVisible = true
  }
}

/** 滑块验证成功 */
function handleDialogSuccess(guid: any) {
  if (!guid)
    return
  ExternalUserExternalUserRegisterSendMessagePOST({
    phoneNumber: modelData.telPhone,
    sendValidationMessageType: 6,
    guid,
  })
    .then((res) => {
      if (res.code === '200') {
        if (res.data.errorMessage) {
          $baseMessage(res.data.errorMessage, 'error')
        }
        else {
          $baseMessage(t('验证码发送成功'), 'success')
          // 获取验证码字段跟换
          clickMessageCode.isVertify = false
          onCountDown()
        }
      }
    })
    .catch((err) => {
      console.log(err)
    })

  // 关闭遮罩层
  clickMessageCode.dialogVisible = false
}

/** 滑块验证失败 */
function handleDialogFail() {
  $baseMessage('验证失败,请重新再试', 'warning')
}

/** 计时器 */
function onCountDown() {
  let timer: NodeJS.Timeout | null = null
  timer = setInterval(() => {
    if (clickMessageCode.count > 0) {
      clickMessageCode.count--
    }
    else {
      clearInterval(timer!)
      clickMessageCode.count = 60
      clickMessageCode.isVertify = true
    }
  }, 1000)
}

/** 保存 */
async function handleSave() {
  const flag = await validate()
  if (flag) {
    const passWord = await encryptedData(modelData.passWord, publicKey)
    const confirmPassWord = await encryptedData(modelData.passWord, publicKey)
    const registerUserData: UserApi.RegisterExternalUserInput = {
      account: modelData.account,
      passWord,
      confirmPassWord,
      telPhone: modelData.telPhone,
      mail: '',
      messageCode: modelData.messageCode,
      saleTelPhonePhone: '',
      systemId: userStore.subSysId,
      countryCode: '86',
      isEnable: true,
      accountType: 1,
      sendValidationMessageType: 6,
    }
    const { code, data } = await ExternalUserRegisterExternalUserPOST(registerUserData)
    if (code === '200') {
      emit('next-add-pop', data, modelData.account)
      closeModal()
    }
  }
}

defineExpose({
  onOpenAdd1Pop,
})
</script>

<template>
  <div class="p-2">
    <!-- 弹窗 -->
    <SjzyModal @register="modalRegister" @ok="handleSave()">
      <SjzyForm :model="modelData" @register="registerPop">
        <template #messageCode_default>
          <ElInput v-model="modelData.messageCode" placeholder="请输入" maxlength="6">
            <template #suffix>
              <span
                v-if="clickMessageCode.isVertify"
                class="phone-code color-$el-color-primary"
                @click="phoneSendCode"
              >
                {{ t('获取验证码') }}
              </span>
              <span v-else class="phone-code color-$el-color-primary">
                {{ clickMessageCode.count }}{{ t('后可再获取') }}
              </span>
            </template>
          </ElInput>
        </template>
      </SjzyForm>
    </SjzyModal>
    <ElDialog
      v-model="clickMessageCode.dialogVisible"
      destroy-on-close
      :width="450"
      class="vertifyBox"
    >
      <Vertify
        :get-api="CaptchaGetCaptchaPOST"
        :check-api="CaptchaVerfiyCaptchaPOST"
        :text="t('向右滑动填充拼图')"
        :on-success="handleDialogSuccess"
        :on-fail="handleDialogFail"
      />
    </ElDialog>
  </div>
</template>

<style lang="scss" scoped>
:deep() .el-input__wrapper {
  height: 26px;
}

.phone-code {
  cursor: pointer;
}
</style>
