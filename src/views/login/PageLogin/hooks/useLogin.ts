import { encryptedData } from '@sjzy/utils'
import cookie from 'js-cookie'
import dayjs from 'dayjs'
import type { Router } from 'vue-router'
import proxyConfig from '@/config/proxy.config'
import { OAuthLogin20POST } from '@/api/user-oAuth/OAuth'
import { OAuthTelLoginPOST } from '@/api/other'
import config from '@/config'

const userStore = useUserStore()

const publicKey
  = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7Nsa8do705Vvn1mLHxNNxaiY0HqhKv2+BHQbIzXUycf8I3XKvWbqa0Ids5xU8isp0wHbKKYV53w1kwUQUM/yU96b2cHovkxnN3OdrgLxaSpZE56tyQX+ToocCQJmrXUYJqvkqRklaDbQd9vuWW2wEkJ0mYJXcjMsJpi+z21CyduywVmVo/j0DQOX7KZdV1UOHjjzHPT+v/htlY1nfad2uhxcULWpLJLm11Ner+Gr/noA96Efg1ZDoC7NROMUIfXqIyl8UD0pxRCCPEg4gO9Aq6e0m8KOG5w9HwvfZ8R2WEjF3bUEBkQgOqI3ULEoZIBd0YfEsOgHOqwMsREO3bNr4wIDAQAB'

async function login(userInfo: UserApi.LoginInput) {
  // userStore.tokenSet('')
  // userStore.tokenSet('', 'x_token')
  try {
    const { data, code } = await OAuthLogin20POST(userInfo)
    if (code === '200') {
      const mode = import.meta.env.MODE
      const expiredCookie = cookie.get(`${mode}_expired`) || 5
      const timespanCookie = cookie.get(`${mode}_timespan`) || 5
      const timespan = dayjs.unix(Number(timespanCookie))
      const add = dayjs().add(Number(expiredCookie), 'm')
      const subtract = dayjs().subtract(Number(expiredCookie), 'm')

      if (subtract.isAfter(timespan)) {
        $baseMessage(
          `当前本地时间已超过服务器时间${expiredCookie}分钟，可能会导致登录状态异常！`,
          'error',
        )
      }
      if (add.isBefore(timespan)) {
        $baseMessage(
          `当前本地时间已晚于服务器时间${expiredCookie}分钟，可能会导致登录状态异常！`,
          'error',
        )
      }
      userStore.setUsername(data.userInfo.username)
      userStore.setUserEnname(data.userInfo.userEnName)
      userStore.setUserId(data.userInfo.userId)
    }
  }
  catch (error) {}
}

async function loginIndex({
  router,
  setRoutes,
}: {
  router: Router
  setRoutes: (mode?: string) => Promise<void>
}) {
  // TODO 处理登录后的SDMS逻辑

  // TODO 处理登录跳转的路径需要修改一下，判断有没有修改密码
  // 登录成功重新加载路由
  await setRoutes(config.authentication)
  router.push({
    name: 'Index',
  })
}

export function useLogin() {
  const router = useRouter()
  const { setRoutes } = useRoutesStore()
  /** 用户登录 */
  async function userLogin(props: {
    Account: string
    Password: string
    setLoading: (bool: boolean) => void
  }) {
    props.setLoading(true)
    const Password = await encryptedData(props.Password, publicKey)
    await login({
      account: props.Account,
      password: Password,
    }).finally(() => {
      props.setLoading(false)
    })
    loginIndex({
      router,
      setRoutes,
    })
  }

  /**
   * 手机号登录
   */
  async function phoneLogin(userInfo: {
    TelPhone: string
    MessageCode: string
    SendValidationMessageType: UserApi.SendValidationMessageType
  }) {
    const { data, code } = await OAuthTelLoginPOST(userInfo)
    if (code === '200') {
      userStore.setUsername(data.userInfo.username)
      userStore.setUserEnname(data.userInfo.userEnName)
      userStore.setUserId(data.userInfo.userId)

      loginIndex({
        router,
        setRoutes,
      })
    }
  }

  /**
   * 飞书登录
   */
  function loginWithFeishu() {
    const path = `${window.location.origin}/tlogin`
    const url = `https://open.feishu.cn/open-apis/authen/v1/index?app_id=${
      proxyConfig.fs_login_appid
    }&redirect_uri=${encodeURIComponent(path)}&response_type=code&state=RANDOMSTATE`
    // window.open(url, '_blank')
    window.location.href = url
  }

  return {
    loginWithFeishu,
    userLogin,
    phoneLogin,
  }
}
