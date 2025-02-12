<script lang="ts" setup>
import { translateTitle } from '@/utils'

const $pub: any = inject('$pub')

const settingsStore = useSettingsStore()
const { theme} = storeToRefs(settingsStore)
function handleOpenTheme() {
  $pub('theme')
}
function removeLocalStorage() {
  localStorage.clear()
  location.reload()
}
</script>

<template>
  <ul v-if="theme.showThemeSetting" class="sjzy-theme-setting">
    <li @click="handleOpenTheme">
      <a>
        <p class="flex items-center justify-center" />
        <p>{{ translateTitle('主题配置') }}</p>
      </a>
    </li>
    <li @click="removeLocalStorage">
      <a>
        <div class="flex items-center justify-center" />
        <p>
          {{ translateTitle('清理缓存') }}
        </p>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sjzy-theme-setting {
  position: fixed;
  top: 60%;
  right: -67px;
  z-index: 9999;
  padding: 10px 0 0;
  margin: 0;
  text-align: center;
  cursor: pointer;
  background: var(--el-color-white);
  border: 1px solid var(--sjzy-base-border-color);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 0 50px 0 rgb(82 63 105 / 0.15);
  transition: right 0.3s ease;
  transform: translateY(-50%);

  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px 10px 10px;
    margin: 0;
    list-style: none;

    &:nth-child(2) {
      [class*='ri-'] {
        animation: rotate 6s linear infinite;
      }
    }

    $colors: (
      1: #3698fd,
      2: #1bc3bb,
      3: #faa500,
      4: #b37feb,
      5: #ef4c5d,
    );

    @each $key, $color in $colors {
      &:nth-child(#{$key}) {
        a {
          color: $color;
          background: mix($base-color-white, $color, 90%);
          transition:
            color 0.15s ease,
            background-color 0.15s ease,
            border-color 0.15s ease,
            box-shadow 0.15s ease,
            -webkit-box-shadow 0.15s ease;

          &:hover {
            color: var(--el-color-white);
            background: $color;
          }
        }
      }
    }

    a {
      display: inline-block;
      width: 60px;
      height: 60px;
      padding-top: 10px;
      text-align: center;
      background: #f6f8f9;
      border-radius: $base-border-radius + 3;

      p {
        padding: 0;
        margin: 0;
        overflow: hidden;
        font-size: $base-font-size-small;
        line-height: 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  &:hover {
    right: 0;
    transition: right 0.3s ease;
  }
}
</style>
