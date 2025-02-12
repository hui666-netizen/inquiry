<script setup lang="ts">
import cookie from 'js-cookie'
import useRequest from 'vue-hooks-plus/es/useRequest'
import { OAuthGetSysTokenPOST } from '@/api/user-oAuth/OAuth'
import {
  // SystemGetBusinessBySystemGET,
  SystemGetSubSystemIdBykeyPOST,
} from '@/api/user-system/System'
import rotate from '@/assets/loading/rotate.gif'
import config from '@/config'

defineOptions({
  name: 'SystemLogin',
})
// import img from '@/assets/loading/img.png'
// import config from '@/config'
// import { MenuGetUserMenuListGET } from '@/api/user-menu/Menu'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const tabsStore = useTabsStore()
const { delVisitedRoute } = tabsStore
const { run } = useRequest(OAuthGetSysTokenPOST, {
  manual: true,
  async onSuccess({ code, data }) {
    if (code === '200') {
      let subSysIds = 0
      const { setUsername, setUserEnname, setUserId, setSubSysId, setEmployeeId } = userStore
      setUsername(data.userInfo!.name!)
      setUserEnname(data.userInfo!.enName)
      setUserId(data.userInfo!.id!)
      setEmployeeId(data.userInfo!.employeeId!)
      delVisitedRoute(route.path)
      if (route.query && route.query.subSysId) {
        subSysIds = Number(route.query.subSysId)
      }
      else {
        const { data } = await SystemGetSubSystemIdBykeyPOST({
          key: 'DevOps',
        })
        subSysIds = data
      }
      userStore.setBusinessId(0)
      setSubSysId(subSysIds)
      router.replace('/index')
    }
  },
})

function sLogin() {
  // const cookie = cookieToObj(document.cookie)
  const mode = import.meta.env.MODE
  const token = cookie.get(`${mode}_${config.tokenTableName}`)
  if (token) {
    // userStore.setToken(token)
    run({
      token,
    })
  }
  else {
    userStore.logout()
  }
}
onMounted(() => {
  sLogin()
})
onActivated(() => {
  sLogin()
})
</script>

<template>
  <div class="loading">
    <img class="img1" :src="rotate" alt="loading">
    <!-- <img class="img2 absolute" :src="img" alt="loading" />
    <span class="text-26px font-400" style="color: var(--el-color-primary)">
      加载中
    </span> -->
  </div>
</template>

<style lang="scss" scoped>
@keyframes loadingAnimate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  background-color: #fff;

  // .img1 {
  //   animation: loadingAnimate 1s linear infinite;
  // }
}
</style>
