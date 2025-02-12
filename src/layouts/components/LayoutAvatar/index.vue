<script lang="ts" setup>
import { toLoginRoute } from '@/router'
import { translateTitle } from '@/utils'
import type { SjzyRoute } from '@/types/router'
import ArrowDownSvg from '@/assets/svg/arrow-down.svg?raw'

const route = useRoute() as SjzyRoute
const router = useRouter()

const userStore = useUserStore()

const { username, avatar } = storeToRefs(userStore)
const { logout, goPersonalCenter } = userStore
const active = ref(false)
function handleVisibleChange(val: boolean) {
  active.value = val
}
async function handleCommand(command: string) {
  switch (command) {
    case 'logout':
      await logout()
      await router.push(toLoginRoute(route.fullPath))
      break
    case 'goPersonalCenter':
      await goPersonalCenter()

      break
    case 'personalCenter':
      await router.push('/personalCenter')
      break
    case 'business':
      await router.push('/business')
      break
  }
}
</script>

<template>
  <ElDropdown trigger="click" @command="handleCommand" @visible-change="handleVisibleChange">
    <span class="avatar-dropdown">
      <ElAvatar v-if="avatar" class="user-avatar" :src="avatar" :size="24" />
      <div class="user-name">
        <span class="hidden-xs-only">{{ username }}</span>
        <SjzyIcon
          class="sjzy-dropdown"
          :class="{ 'sjzy-dropdown-active': active }"
          :icon="ArrowDownSvg"
          is-custom-svg
        />
      </div>
    </span>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem command="goPersonalCenter">
          <span>{{ translateTitle('个人中心') }}</span>
        </ElDropdownItem>
        <ElDropdownItem command="logout">
          <span>{{ translateTitle('退出登录') }}</span>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style lang="scss" scoped>
.avatar-dropdown {
  display: flex;
  place-content: center center;
  place-items: center center;

  .user-avatar {
    margin-left: 10px;
    cursor: pointer;
    border-radius: 50%;
  }

  .user-name {
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;

    // min-width: 100px;
    // height: 40px;
    margin-left: 6px;

    // line-height: 40px;

    // 文字不换行
    white-space: nowrap;
    cursor: pointer;

    [class*='ri-'] {
      margin-left: 0 !important;
    }
  }
}
</style>
