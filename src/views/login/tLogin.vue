<!-- eslint-disable complexity -->
<script setup lang="ts">
import rotate from '@/assets/loading/rotate.gif'

// import img from '@/assets/loading/img.png'

// import { OAuthFeiShuLoginPOST, getAppAccessToken, getUserAccesToken } from '@/api/other'
import { SystemGetSubSystemIdBykeyPOST } from '@/api/user-system/System'

// import { getEnv } from '@/utils/env'
// import { useGlobSetting } from '@/composables/setting/useGlobSetting'
import { FlowExampleGetDetailByBusinessIdAndFlowCodeGET } from '@/api/flow-monitoring/FlowExample'
import proxyConfig from '@/config/proxy.config'
import { OAuthFeiShuLogin20POST } from '@/api/user-oAuth/OAuth'

defineOptions({
  name: 'LoadingView',
})
const router = useRouter()
const userStore = useUserStore()
const tabsStore = useTabsStore()
// const globSetting = useGlobSetting()

const { delVisitedRoute } = tabsStore
const route = useRoute()

// interface routePathType {
//   [key: string]: string
// }
type IRouteQueryType = {
  [key: string]: any
}
onMounted(async () => {
  // 免密登录之后的跳转链接枚举
  const routePath: IRouteQueryType = {
    1: '/oceanFreightDClauseInquiry/createAirExport',
    3: '/dClauseLnquiry/EditSeaInLclInquiryInfo', // 散货审核
    2: '/dClauseLnquiry/EditFcLInfo', // 整柜审核
    4: '/dClauseLnquiry/createFCLImport', // 出口 整柜审核
    5: '/dClauseLnquiry/createLCLImport', // 出口 散货审核
    6: '/oceanFreightDClauseInquiry/createAirImport', // 进口询价
    // 'dClauseLnquiry/EditFcLInfo': '/dClauseLnquiry/EditFcLInfo', // 整柜审核
    // 'dClauseLnquiry/EditSeaInLclInquiryInfo': '/dClauseLnquiry/EditSeaInLclInquiryInfo', // 散货审核
    airexcessandoverdue: '/workOrder/airDetaile', // 空运进出口详情
    fclsalesexcessandoverdue: '/workOrder/fclSalesmanDetaile', // 海运整柜进出口详情
    lclsalesexcessandoverdue: '/workOrder/lclSalesmanDetaile', // 海运拼箱进出口详情
  }
  const routeQuery = (urlType: keyof IRouteQueryType, params: IRouteQueryType): IRouteQueryType => {
    console.log(params, 'tLogin-params')

    const returnParams: IRouteQueryType = {
      1: { flowId: params.flowid, type: 1, id: params.id, isClear: 0, time: 1 },
      2: { flowId: params.flowid, type: 'edit', id: params.id },
      3: { flowId: params.flowid, type: 'edit', id: params.id },
      4: { flowId: params.flowid, type: 'edit', id: params.id },
      5: { flowId: params.flowid, type: 1, id: params.id, isClear: 0, time: 1 },
      6: { flowId: params.flowid, type: 1, id: params.id, isClear: 0, time: 1 },
      airexcessandoverdue: { ...params },
      fclsalesexcessandoverdue: { ...params },
      lclsalesexcessandoverdue: { ...params },
    }
    return returnParams[urlType]
  }

  const params: Ref<{ app_id?: string, app_secret?: string }> = ref({
    app_id: undefined,
    app_secret: undefined,
  })
  params.value = {
    app_id: proxyConfig.fs_login_appid,
    app_secret: proxyConfig.fs_login_secret,
  }

  const path = ref('')
  const query = ref({
    ...route.query,
  })
  const win: any = window
  try {
    win.h5sdk.ready(() => {
      console.log(params.value.app_id, 'app_id')
      win.tt.requestAuthCode({
        appId: params.value.app_id,
        success: async (info: any) => {
          // const UserAccesToken = await getUserAccesToken(
          //   appAccessToken.tenant_access_token!,
          //   info.code,
          // )
          OAuthFeiShuLogin20POST({ AppCode: info.code }).then(async (res) => {
            if (res.code === '200') {
              const { setUsername, setUserEnname, setUserId, setSubSysId } = userStore
              setUsername(res.data.userInfo!.name!)
              setUserEnname(res.data.userInfo!.enName!)
              setUserId(res.data.userInfo!.id!)
              delVisitedRoute(route.path)
              const { data } = await SystemGetSubSystemIdBykeyPOST({
                key: 'DevOps',
              })
              setSubSysId(Number(data))

              localStorage.setItem('devops_url', window.location.href)

              // 跳转路由所需要的枚举类型
              const urlType = (query.value?.routepathtype as string) || ''

              path.value = (urlType && routePath[urlType]) || ''

              // 如果存在流程id 直接跳转
              if (query.value?.flowid && urlType && path.value) {
                router.replace({
                  path: path.value,
                  query: routeQuery(urlType, query.value),
                })
                return
              }

              // 判断链接是否存在业务id 或者 流程实例id
              if (route.query?.bizid && path.value && urlType) {
                const flowData = await FlowExampleGetDetailByBusinessIdAndFlowCodeGET({
                  businessId: route.query?.bizid as string,
                  flowCode: route.query?.flowcode as string,
                })

                router.replace({
                  path: path.value,
                  query: {
                    ...routeQuery(urlType, query.value),
                    flowId: flowData.data.id, //  这个是接口里面拿到的flowId
                    id: query.value.id || query.value.bizid,
                  },
                })
              }
              else {
                router.replace({
                  path: '/',
                })
              }
            }
          })
        },
        fail: () => {},
      })
    })
  }
  catch {}
})
</script>

<template>
  <div class="loading">
    <img class="img1" :src="rotate" alt="loading">
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  background-color: #fff;
}
</style>
