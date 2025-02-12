import type { Ref } from 'vue'
import { OAuthBrowserFsSigninPOST, OAuthGetJsTicketAndSignatureGET } from '@/api/user-oAuth/OAuth'
import proxyConfig from '@/config/proxy.config'

/** window对象 */
const windowGlo = ref<any>(window)
/** 飞书组件顶间距 */
const fsComponentTop = ref(0)
/** 飞书组件左间距 */
const fsComponentLeft = ref(0)
/** 飞书组件实例 */
const fsComponent = ref<any>()
/** 飞书储存信息 */
const feishuData: Ref<{ fsData: Indexable }> = useStorage(
  'feishuStroe',
  {
    fsData: {},
  },
  localStorage,
  { mergeDefaults: true },
)
/** 飞书名片的width:320 height:520 */
const { width, height } = useWindowSize()
let isTicktSign = true
/** 查看员工事件 */
async function openUserView(viewOpenId: string, e: MouseEvent) {
  if (unref(feishuData)?.fsData?.openId) {
    if (!viewOpenId)
      return $baseMessage('查看目标用户未绑定飞书，请联系管理员！', 'error')

    // 是否有飞书组件
    if (windowGlo.value.addProfileDynamical) {
      //   console.log('有飞书组件，直接打开')
      openFeishuCard(viewOpenId, e)
    }
    else {
      //   console.log('没有挂在飞书组件,需要重新走认证')
      if (isTicktSign) {
        isTicktSign = false
        // 加载飞书组件
        getTicktSign(viewOpenId, e)
      }
    }
  }
  else {
    loginWithFeishu()
  }
}
/** 打开飞书名片 */
function openFeishuCard(viewOpenId: string | number, e: MouseEvent) {
  fsComponentTop.value = e.clientY - e.offsetY + (e.target as HTMLDivElement).offsetHeight
  fsComponentLeft.value = e.clientX - e.offsetX + (e.target as HTMLDivElement).offsetWidth
  /* 处理边界 */
  if (fsComponentLeft.value + 320 > width.value)
    fsComponentLeft.value = width.value - 321
  if (height.value - fsComponentTop.value < 520)
    fsComponentTop.value = height.value - 521

  windowGlo.value.addProfileDynamical(viewOpenId)
}
/** 飞书授权 */
function getTicktSign(openId?: string | number, e?: MouseEvent) {
  return new Promise((resolve, reject) => {
    OAuthGetJsTicketAndSignatureGET({
      url: encodeURI(location.href.split('#')[0].split('?')[0]),
    })
      .then(({ data }) => {
        if (data.needFsBrowserLogin) {
          feishuData.value.fsData = {}

          isTicktSign = true
        }
        else {
          feishuData.value.fsData = data

          addFSComponent(data, openId, e)
          resolve(data)
        }
      })
      .catch((err: any) => {
        isTicktSign = true
        feishuData.value.fsData = {}
        reject(err)
      })
  })
}
/** 加载飞书组件 */
function addFSComponent(data: any, userOpenId?: string | number, e?: MouseEvent) {
  if (!data?.openId)
    return
  if (fsComponent.value)
    return
  const { openId, signature, timestamp, nonceStr, url } = data

  windowGlo.value.webComponent
    .config({
      openId, // 当前登录用户的open id，要确保与生成signature使用的user_access_token相对应
      signature, // 签名
      appId: proxyConfig.fs_login_appid, // 应用 appId，在Step1中获得的应用appId
      timestamp, // 时间戳（毫秒）
      nonceStr, // 随机字符串
      url, // app URL
      jsApiList: ['user_profile'], // 使用成员名片组件时取值为 ['user_profile']
      locale: 'zh-CN', // 指定组件的国际化语言：en-US 英文、zh-CN 中文、ja-JP 日文
    })
    .then(() => {
      // 不在这里进行挂载方法 会出现挂载不上的情况
      // 可以在这里进行组件动态渲染
      windowGlo.value.addProfileDynamical = (viewOpenId: string) => {
        // 动态渲染，返回组件实例。
        fsComponent.value = windowGlo.value.webComponent.render(
          'UserProfile',
          {
            openId: viewOpenId, // 要展示哪个用户的成员名片
          },
          document.querySelector('#feishu-user-point'), // 将组件挂在到哪个元素上
        )
      }
      windowGlo.value.removeProfileDynamical = function () {
        // 销毁组件
        if (fsComponent.value)
          fsComponent.value.unmount()
      }

      if (userOpenId && e) {
        setTimeout(() => {
          openFeishuCard(userOpenId, e)
        }, 100)
      }
    })
  // 捕获组件内部错误
  windowGlo.value.webComponent.onError((error: Error) => {
    console.error('custom error:', error)
  })
  // 捕获 sdk 鉴权错误
  windowGlo.value.webComponent.onAuthError((error: Error) => {
    console.error('auth error callback', error)
  })
}
/** 飞书登录窗口 */
function loginWithFeishu() {
  const url = `https://open.feishu.cn/open-apis/authen/v1/index?app_id=${
    proxyConfig.fs_login_appid
  }&redirect_uri=${encodeURIComponent(location.href)}&response_type=code&state=RANDOMSTATE`

  const Top = (window.screen.availHeight - 30 - 800) / 2 // 获得窗口的垂直位置;
  const Left = (window.screen.availWidth - 10 - 1000) / 2 // 获得窗口的水平位置;
  window.open(
    url,
    'newwindow',
    `height=800, width=1000, top=${Top}, left=${Left}, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no`,
  )
}
/** 初始化 */
async function initFeishu() {
  //   console.log('初始化')
  try {
    if (useRoute()?.query?.code) {
      const { data, code } = await OAuthBrowserFsSigninPOST({
        authorizationCode: useRoute().query.code as string,
      })
      if (code === '200') {
        feishuData.value.fsData = data.fsData as UserApi.FsData
        feishuData.value.fsData.openId = data.fsData?.open_id
        window.close()
      }
    }
  }
  catch (error) {
    feishuData.value.fsData = {}
  }
}
/** 销毁飞书 */
function closeFeishuUser() {
  if (windowGlo.value.removeProfileDynamical)
    windowGlo.value.removeProfileDynamical()
}

export default () => {
  return {
    fsComponentTop,
    fsComponentLeft,
    getTicktSign,
    openUserView,
    closeFeishuUser,
    initFeishu,
  }
}
