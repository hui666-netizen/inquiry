/**
 * @description 登录、获取用户信息、退出登录、清除token逻辑，不建议修改
 */
import cookie from 'js-cookie'
import { setStorage } from '@sjzy/utils'
import { jwtDecode } from 'jwt-decode'
import config from '@/config'
import { resetRouter, router } from '@/router'
import useUserProfile from '@/composables/feishu/useUserProfile'
import type { UserModuleType } from '@/types/store'
import { useGlobSetting } from '@/composables/setting/useGlobSetting'
import avatar from '@/assets/avatar.png'
import { UserGetCurrentUserBasicInfoPOST, UserIsRoleAdminPOST } from '@/api/user-user/User'
import { AuthItemGetUserPermissionLinkCodePOST } from '@/api/user-auth/AuthItem'
import { SystemGetSubSystemIdBykeyPOST } from '@/api/user-system/System'
import { OAuthRefreshTokenPOST } from '@/api/other'
import { REMEMBER_KEY } from '@/utils/cache/cacheEnum'
import { getAuthRememberMe, setAuthRememberMe } from '@/views/login/PageLogin/hooks/useRemember'
import constantRoutes from '@/router/routes/modules/constantRoutes'

const { getTicktSign } = useUserProfile()
let isTicktSign = true
const globSetting = useGlobSetting()

export const useUserStore = defineStore('user', {
  state: (): UserModuleType => ({
    token: '',
    username: '游客',
    userEnName: '',
    businessId: 0,
    userId: 0,
    jwtUserId: '',
    subSysId: 0,
    employeeId: 0,
    companyId: 0,
    telPhone: '',
    avatar,
    /** 用户角色 */
    businessRoleEnums: [],
    /** 用户主岗位的公司是否是大陆公司 */
    isMainlandCo: false,
    /** 用户角色集合 */
    roles: [],
    /** 是否为管理员 */
    isAdmin: false,
    /** 所属组织id */
    orgId: 0,
    /** 当前登录人的国家Id */
    country: 0,
    menu: [],
    /** 国家二字码 */
    digit2Code: '',
    /** 登录人所属公司 */
    companyShortName: '',
    companyCode: '',
  }),
  getters: {
    getToken: state => state.token,
    getUsername: state => state.username,
    getUserEnName: state => state.userEnName,
    getAvatar: state => state.avatar,
    getUserId: state => state.userId,
    getSubSysId: state => state.subSysId,
    getMenu: state => state.menu,
    getBusinessId: state => state.businessId,
    getEmployeeId: state => state.employeeId,
    getRoles: (state) => {
      console.log(state, 'state')

      return state.roles
    },
  },
  persist: true,
  actions: {
    /** 设置token */
    tokenSet(token?: string, type = 'token') {
      const mode = import.meta.env.MODE
      const name = `${mode}_` + `gtf_${type}`
      this.setCookie(name, token)
    },
    /** 设置Cookie */
    setCookie(key: string, value?: string) {
      const mode = import.meta.env.MODE
      const name = `${mode}_${key}`
      const domainc = import.meta.env.VITE_COOKIE_DOMAIN
      const obj = { domain: domainc, path: '/', expires: 1 }
      cookie.set(name, value || '', obj)
      // 再设置token或刷新token时候重新解析赋值
      if (key === 'gtf_token') {
        const decoded: { user_id: string } = jwtDecode(value || '')
        this.jwtUserId = decoded.user_id
        this.setCookie('userId', decoded.user_id)
      }
    },
    /** 设置用户id */
    setUserId(userId: string | number) {
      this.userId = userId
    },
    /** 设置系统id */
    setSubSysId(subSysId: number) {
      this.subSysId = subSysId
    },
    /** 设置用户名 */
    setUsername(username: string) {
      this.username = username
    },
    /** 设置权限 */
    setPermission(val: string[]) {
      setStorage('permission', val)
    },
    /** 设置用户英文名 */
    setUserEnname(username: string) {
      this.userEnName = username
    },
    /** 设置员工ID */
    setEmployeeId(employeeId: number) {
      this.employeeId = employeeId
    },
    /** 设置头像 */
    setAvatar(avatar: string) {
      this.avatar = avatar
    },
    /** 设置业务主体 */
    setBusinessId(businessId: number | string) {
      this.businessId = businessId
    },
    /** 获取新token */
    async refreshToken() {
      const mode = import.meta.env.MODE
      const xtokenCookie = cookie.get(`${mode}_gtf_x_token`)
      await OAuthRefreshTokenPOST({
        headers: {
          'x-Authorization': xtokenCookie,
        },
      })
    },
    /** 获取用户信息接口 */
    async getUserInfo() {
      const { code, data } = await UserGetCurrentUserBasicInfoPOST({})
      if (+code === 200) {
        this.setUsername(data?.userName || '')
        this.setUserEnname(data?.userEnName || '')
        this.setUserId(data?.userId || '')
        const url = data?.feiShuURL || 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif'
        if (isTicktSign) {
          isTicktSign = false
          setTimeout(async () => {
            const data = await getTicktSign()
            if (!data)
              isTicktSign = true
          }, 100)
          this.setAvatar(url)
          // 没有子系统id，获取子系统id
          const { data } = await SystemGetSubSystemIdBykeyPOST({
            key: 'freight',
          })
          this.subSysId = data
          this.getRoleGetRoleSystemInfoByUserIdGET()
        }

        Object.assign(this.$state, data)
      }
    },
    /** 查询当前角色是否是管理员 */
    async getRoleGetRoleSystemInfoByUserIdGET() {
      const params: UserApi.UserIsRoleAdminPOSTParams = {
        systemId: this.subSysId,
        userId: Number(this.userId),
      }
      const { data } = await UserIsRoleAdminPOST(params)
      this.isAdmin = data
      localStorage.setItem('isAdmin', JSON.stringify(data))
    },
    /** 退出登录 */
    async logout() {
      await this.resetAll()
    },
    /** 进入个人中心 */
    async goPersonalCenter() {
      router.push('/user')
    },
    /** 重置token、roles、permission、router、tabsBar等 */
    async resetAll() {
      const debug_server = localStorage.getItem('debug_server') || ''
      this.setUsername('游客')
      this.setUserId(0)
      const mode = import.meta.env.MODE
      cookie.remove(`${mode}_${config.tokenTableName}`, {
        domain: globSetting.loginCookieDomain,
        path: '/',
      })
      cookie.remove(`${mode}_gtf_x_token`, {
        domain: globSetting.loginCookieDomain,
        path: '/',
      })
      cookie.remove(`${mode}_timespan`, {
        domain: globSetting.loginCookieDomain,
        path: '/',
      })
      cookie.remove(`${mode}_expired`, {
        domain: globSetting.loginCookieDomain,
        path: '/',
      })
      // remove触发不了监听
      this.setCookie('userId', '')
      if (globSetting.loginUrl) {
        window.location.href = `${globSetting.loginUrl}/login?replaceUrl=${window.origin}/slogin`
      }
      const routesStore = useRoutesStore()
      const loginInfo = getAuthRememberMe(REMEMBER_KEY)

      localStorage.removeItem('feishuStroe')
      localStorage.removeItem('tabs')
      routesStore.clearRoutes()
      localStorage.clear()
      sessionStorage.clear()
      await resetRouter(constantRoutes)

      if (loginInfo && loginInfo.checkPassWord)
        setAuthRememberMe(REMEMBER_KEY, loginInfo)
      setStorage('enumDict', {})

      if (debug_server)
        localStorage.setItem('debug_server', debug_server)
    },
    /** 获取用户拥有权限 */
    async getUserPermission() {
      const { code, data } = await AuthItemGetUserPermissionLinkCodePOST({})
      if (code === '200')
        this.setPermission(data)
    },
  },
})

export default useUserStore
