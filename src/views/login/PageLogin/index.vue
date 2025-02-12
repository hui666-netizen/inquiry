<script lang="ts" setup>
import LoginForm from './LoginForm/index.vue'
import login_bg from '@/assets/login_images/background.png'
</script>

<template>
  <div
    class="login-container"
    :style="{
      'background-image': `url(${login_bg})`,
    }"
  >
    <div class="login-container-warpper">
      <div class="pl-76px pt-10%">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1920px 1080px;

  &-warpper {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
