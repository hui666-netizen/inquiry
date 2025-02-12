<script setup lang="ts">
import { useLogin } from '../hooks/useLogin'
import UserLogin from './UserLogin.vue'
import PhoneLogin from './PhoneLogin.vue'
import otherLoginFeishu from '@/assets/login_images/other_login_feishu.png'
import { t } from "@/composables"

const activeName = ref('account')

const { loginWithFeishu } = useLogin()

onActivated(() => {
  activeName.value = 'account'
})
</script>

<template>
  <div class="login-form">
    <div class="px-5 pb-5 pt-15%">
      <div class="text-center text-2xl font-bold">
        {{ t('欢迎使用运连网系统') }}
      </div>
      <div class="login-tabs mt-10 px-5">
        <ElTabs v-model="activeName" :stretch="true">
          <ElTabPane :label="t('密码登录')" name="account">
            <UserLogin />
          </ElTabPane>
          <ElTabPane :label="t('验证码登录')" name="phone">
            <PhoneLogin />
          </ElTabPane>
        </ElTabs>
      </div>
      <ElDivider>{{ t('第三方登录') }}</ElDivider>
      <div class="other-login">
        <span @click="loginWithFeishu">
          <img :src="otherLoginFeishu" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  position: absolute;
  top: 50%;
  right: 12%;
  width: 460px;
  padding: 0 12px;
  background-color: #fff;
  border-radius: 8px;
  transform: translateY(-50%);

  :deep(.el-form) {
    --el-component-size: 48px;

    .el-form-item {
      margin-bottom: 24px;

      &__error {
        font-size: var(--sjzy-font-size-small);
        line-height: 18px;
        color: var(--el-color-error);
      }
    }
  }
}

.login-tabs {
  :deep(.el-tabs) {
    --el-font-size-base: 16px;

    .el-tabs__active-bar {
      display: none !important;
    }

    .el-tabs__item {
      font-weight: 600;

      &.is-active {
        position: relative;

        &::after {
          position: absolute;
          bottom: 0;
          width: 30px;
          height: 2px;
          margin: 0 auto;
          content: '';
          background-color: var(--sjzy-color-primary);
        }
      }
    }

    .el-tabs__nav-wrap::after {
      height: 1px;
    }

    .el-tabs__header {
      margin-bottom: 32px;
    }

    .el-checkbox {
      --el-font-size-base: 14px;
    }
  }
}

.other-login {
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    width: 40px;
    height: 40px;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      border: 1px solid #dedede;
      border-radius: 4px;
    }
  }
}
</style>
