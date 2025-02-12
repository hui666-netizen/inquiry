<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ElInput } from 'element-plus'
import cookie from 'js-cookie'
import { SjzyIcon } from '@sjzy/ui'
import { useLogin } from '../hooks/useLogin'
import { clearAuthRememberMe, getAuthRememberMe, setAuthRememberMe } from '../hooks/useRemember'
import { REMEMBER_KEY } from '@/utils/cache/cacheEnum'
import { t } from "@/composables"

const formRef = ref<FormInstance>()

const passwordRef = ref<InstanceType<typeof ElInput>>()
const { userLogin } = useLogin()
function validateUsername(_: unknown, value: string, callback: any) {
  if (value === '')
    callback(new Error(t('用户名不能为空')))
  else callback()
}
function validatePassword(_: unknown, value: string, callback: any) {
  if (value === '')
    callback(new Error(t('验证码不能为空')))
  else if (value.trim().length < 6)
    callback(new Error(t('密码不能少于6位')))
  else callback()
}

const formRule = {
  Account: [
    {
      required: true,
      trigger: 'blur',
      validator: validateUsername,
    },
  ],
  Password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword,
    },
  ],
}

const state = reactive({
  form: {
    Account: '',
    Password: '',
  },
  loading: false,
  passwordType: 'password',
  checkPassWord: false,
})

function setLoading(bool: boolean) {
  state.loading = bool
}

function handleLogin() {
  unref(formRef)?.validate(async (valid) => {
    if (valid) {
      await userLogin({
        Account: state.form.Account,
        Password: state.form.Password,
        setLoading,
      })

      /**
       * 判断有没有token, 有就储存账号密码
       */
      const mode = import.meta.env.MODE
      const tokenname = `${mode}_` + `gtf_token`
      if (cookie.get(tokenname)) {
        if (state.checkPassWord) {
          setAuthRememberMe(REMEMBER_KEY, {
            Account: state.checkPassWord ? state.form.Account : '',
            Password: state.form.Password,
            checkPassWord: state.checkPassWord,
          })
          const { jwtUserId } = JSON.parse(localStorage.getItem('user') as string)
          console.log(jwtUserId)
        }
        else {
          clearAuthRememberMe()
        }

        state.form.Password = ''
        state.form.Account = ''
      }
    }
  })
}

function handlePassword() {
  state.passwordType === 'password' ? (state.passwordType = '') : (state.passwordType = 'password')
  nextTick(() => {
    passwordRef.value?.focus()
  })
}

onActivated(() => {
  const loginInfo = getAuthRememberMe(REMEMBER_KEY)
  if (loginInfo && loginInfo.checkPassWord) {
    state.form.Password = loginInfo.Password
    state.form.Account = loginInfo.Account
    state.checkPassWord = loginInfo.checkPassWord
  }
})
</script>

<template>
  <ElForm ref="formRef" label-position="left" :model="state.form" :rules="formRule">
    <ElFormItem prop="Account">
      <ElInput
        v-model.trim="state.form.Account"
        :placeholder="t('请输入用户名/手机号')"
        tabindex="1"
        link
        autocomplete="off"
        class="c-#000!"
      >
        <template #prefix>
          <SjzyIcon icon="ri:user-line" />
        </template>
      </ElInput>
    </ElFormItem>
    <ElFormItem prop="password" class="mb-18px!">
      <ElInput
        ref="passwordRef"
        :key="state.passwordType"
        v-model.trim="state.form.Password"
        autocomplete="off"
        :placeholder="t('请输入密码')"
        tabindex="2"
        :type="state.passwordType"
        @keyup.enter="handleLogin"
      >
        <template #prefix>
          <SjzyIcon icon="ri:lock-line" />
        </template>
        <template v-if="state.passwordType === 'password'" #suffix>
          <SjzyIcon class="cursor-pointer" icon="ri:eye-off-line" @click="handlePassword" />
        </template>
        <template v-else #suffix>
          <SjzyIcon class="cursor-pointer" icon="ri:eye-line" @click="handlePassword" />
        </template>
      </ElInput>
    </ElFormItem>
    <ElFormItem class="mb-8!">
      <div class="w-full flex justify-between text-xs">
        <ElCheckbox v-model="state.checkPassWord" :label="t('记住密码')" />
      </div>
    </ElFormItem>
    <ElFormItem class="mb-10!">
      <ElButton
        class="login-btn block w-full h-12!"
        :loading="state.loading"
        type="primary"
        @click="handleLogin"
      >
        {{ t('登录') }}
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>
