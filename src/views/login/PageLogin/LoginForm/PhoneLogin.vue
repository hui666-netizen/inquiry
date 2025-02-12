<script setup lang="ts">
import { SjzyIcon, Vertify } from '@sjzy/ui'
import type { FormInstance } from 'element-plus'
import { useLogin } from '../hooks/useLogin'
import { CaptchaGetCaptchaPOST, CaptchaVerfiyCaptchaPOST } from '@/api/user-code/Captcha'
import { OAuthUserLoginSendMessagePOST } from '@/api/user-oAuth/OAuth'
import { t } from "@/composables"

const formRef = ref<FormInstance>()
const { phoneLogin } = useLogin()

let timer: NodeJS.Timeout | null = null
const state = reactive({
  isVertify: true,
  form: {
    TelPhone: localStorage.getItem('TelPhone') || '',
    MessageCode: '',
  },
  rules: {
    TelPhone: [
      {
        required: true,
        trigger: 'blur',
        message: t('请输入手机号'),
      },
      { validator: validateTelPhone, trigger: 'blur' },
    ],
    MessageCode: [
      {
        required: true,
        trigger: 'blur',
        validator: validateMessageCode,
      },
    ],
  },
  count: 60,
  loading: false,
  dialogVisible: false,
})

function validateTelPhone(_: any, value: string, callback: Fn) {
  if (!/^1\d{10}$/.test(value))
    callback(new Error(t('请输入正确的手机号')))
  else callback()
}
function validateMessageCode(_: any, value: string, callback: Fn) {
  if (value === '')
    callback(new Error(t('验证码不能为空')))
  else if (value.trim().length < 6)
    callback(new Error(t('验证码不能小于6位')))
  else callback()
}

/**
 * 手机号发送验证码
 */
function phoneSendCode() {
  unref(formRef)
    ?.validateField('TelPhone')
    .then((valid) => {
      if (valid) {
        state.dialogVisible = true
      }
    })
}

function handleLogin() {
  unref(formRef)?.validate(async (valid: boolean) => {
    if (valid) {
      state.loading = true
      await phoneLogin({
        ...state.form,
        SendValidationMessageType: 4,
      }).finally(() => {
        state.loading = false
      })
      state.isVertify = true
      state.form.MessageCode = ''
      state.form.TelPhone = ''
    }
  })
}

function onCountDown() {
  timer = setInterval(() => {
    if (state.count > 0) {
      state.count--
    }
    else {
      clearInterval(timer!)
      state.count = 60
      state.isVertify = true
    }
  }, 1000)
}

/** 滑块验证成功 */
function handleDialogSuccess(guid: any) {
  if (!guid)
    return
  OAuthUserLoginSendMessagePOST({
    phoneNumber: state.form.TelPhone,
    id: 0,
    sendValidationMessageType: 4,
    guid,
  })
    .then((res) => {
      if (res.code === '200') {
        if (res.data.errorMessage) {
          $baseMessage(res.data.errorMessage, 'error')
        }
        else {
          $baseMessage(t('验证码发送成功'), 'success')
          // 开启定时器
          state.isVertify = false
          onCountDown()
        }
      }
    })
    .catch((err) => {
      console.log(err)
    })

  // 关闭遮罩层
  state.dialogVisible = false
}

/** 滑块验证失败 */
function handleDialogFail() {
  $baseMessage('验证失败,请重新再试', 'warning')
}
</script>

<template>
  <div class="relative">
    <ElForm
      ref="formRef"
      class="login-form"
      label-position="left"
      :model="state.form"
      :rules="state.rules"
    >
      <ElFormItem prop="TelPhone">
        <ElInput
          v-model.trim="state.form.TelPhone"
          v-focus
          maxlength="11"
          :placeholder="t('手机号')"
          tabindex="1"
          type="text"
        >
          <template #prefix>
            <SjzyIcon icon="material-symbols:phone-android-outline" />
          </template>
        </ElInput>
      </ElFormItem>
      <ElFormItem prop="MessageCode">
        <ElCol :span="24">
          <ElInput
            v-model="state.form.MessageCode"
            :placeholder="t('输入验证码')"
            tabindex="1"
            type="text"
            maxlength="6"
          >
            <template #prefix>
              <SjzyIcon icon="mdi:shield-check-outline" />
            </template>
          </ElInput>
          <span
            v-if="state.isVertify"
            class="phone-code color-$el-color-primary"
            @click="phoneSendCode"
          >
            {{ t('获取验证码') }}
          </span>
          <span v-else class="phone-code color-$el-color-primary">
            {{ state.count }}s {{ t('后可再获取') }}
          </span>
        </ElCol>
      </ElFormItem>
      <ElFormItem class="mb-10!">
        <ElButton
          class="login-btn"
          type="primary"
          :loading="state.loading"
          @click.stop="handleLogin"
        >
          {{ t('登录') }}
        </ElButton>
      </ElFormItem>
    </ElForm>
    <ElDialog v-model="state.dialogVisible" destroy-on-close :width="400" class="vertifyBox">
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
.login-form {
  position: relative;

  .login-btn {
    display: inherit;
    width: 100%;
    height: 48px;
    background: var(--el-color-primary);
    border: 0;

    &:hover {
      opacity: 0.9;
    }
  }

  .phone-code {
    position: absolute;
    right: 16px;
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 48px;
    cursor: pointer;
    user-select: none;
    border-radius: 3px;
  }

  :deep() {
    .el-input {
      box-sizing: border-box;

      &__suffix-inner {
        position: absolute;
        right: 65px;
        width: 48px;
        cursor: pointer;
      }
    }

    // .code {
    //   position: absolute;
    //   top: 4px;
    //   right: 4px;
    //   cursor: pointer;
    //   border-radius: $base-border-radius;
    // }

    // .codeBtn {
    //   width: 100px;
    //   height: 50px;
    //   margin-left: 5px;
    // }
  }
}

:deep(.el-dialog__header) {
  padding: 0 !important;
  border-bottom: none !important;
}
</style>
