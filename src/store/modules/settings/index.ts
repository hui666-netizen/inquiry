/**
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */

import { isJson, setStorage } from '@sjzy/utils'
import VXETable from 'vxe-table'
import config from '@/config'
import type { SettingsModuleType } from '@/types/store'
import type { ThemeType } from '@/types/theme'

const defaultTheme: ThemeType = {
  layout: config.layout,
  themeName: config.themeName,
  background: config.background,
  columnStyle: config.columnStyle,
  fixedHeader: config.fixedHeader,
  foldSidebar: config.foldSidebar,
  menuWidth: config.menuWidth,
  showProgressBar: config.showProgressBar,
  showTabs: config.showTabs,
  showTabsIcon: config.showTabsIcon,
  showLanguage: config.showLanguage,
  showRefresh: config.showRefresh,
  showSearch: config.showSearch,
  showTheme: config.showTheme,
  showNotice: config.showNotice,
  showFullScreen: config.showFullScreen,
  showThemeSetting: config.showThemeSetting,
  showPageTransition: config.showPageTransition,
  showLock: config.showLock,
  tabsBarStyle: config.tabsBarStyle,
  showMenu: config.showMenu,
  menuBarStyle: config.menuBarStyle,
  showDark: config.showDark,
  primaryColor: config.primaryColor,
}

function getLocalStorage(key: string) {
  const value: string | null = localStorage.getItem(key)
  return value && isJson(value) ? JSON.parse(value) : false
}
const theme = getLocalStorage('theme') || { ...defaultTheme }
const { collapse = config.foldSidebar } = getLocalStorage('collapse')
const { language = config.i18n } = getLocalStorage('language')

// 初始化语言
if (!getLocalStorage('language'))
  setStorage('language', { language: 'zh-CN' })

const { languageEnumKey = config.i18nEnumKey } = getLocalStorage('languageEnumKey')
const { lock = false } = getLocalStorage('lock')
const { logo = config.logo } = getLocalStorage('logo')
const { title = config.title } = getLocalStorage('title')

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsModuleType => ({
    theme,
    device: 'desktop',
    collapse,
    language,
    lock,
    logo,
    title,
    languageEnumKey,
    echartsGraphic1: ['#3ED572', '#399efd'],
    echartsGraphic2: ['#399efd', '#8cc8ff'],
    version: {},
  }),
  getters: {
    getTheme: state => state.theme,
    getDevice: state => state.device,
    getCollapse: state => state.collapse,
    getLanguage: state => state.language,
    getLock: state => state.lock,
    getLogo: state => state.logo,
    getLanguageEnumKey: (state) => {
      return state.languageEnumKey
    },
    getTitle: state => state.title,
    getVersion: state => state.version,
  },
  actions: {
    updateState(obj: any) {
      Object.getOwnPropertyNames(obj).forEach((key) => {
        // @ts-expect-error
        this[key] = obj[key]
        localStorage.setItem(
          key,
          typeof obj[key] == 'string' ? `{"${key}":"${obj[key]}"}` : `{"${key}":${obj[key]}}`,
        )
      })
    },
    saveTheme() {
      localStorage.setItem('theme', JSON.stringify(this.theme))
    },
    resetTheme() {
      this.theme = { ...defaultTheme }
      localStorage.removeItem('theme')
    },
    toggleCollapse(collapse?: boolean) {
      this.collapse = collapse ?? !this.collapse
      if (this.theme.layout === 'vertical') {
        if (this.collapse)
          useCssVar('--sjzy-left-menu-width', ref<any>(null)).value = '60px'
        else if (this.language !== 'zh-CN')
          useCssVar('--sjzy-left-menu-width', ref<any>(null)).value = '260px'
        else useCssVar('--sjzy-left-menu-width', ref<any>(null)).value = '220px'
      }

      // 分栏布局
      if (this.theme.layout === 'column') {
        if (this.collapse)
          useCssVar('--sjzy-left-menu-width', ref<any>(null)).value = '60px'
        else if (this.language !== 'zh-CN')
          useCssVar('--sjzy-left-menu-width', ref<any>(null)).value = '300px'
        else useCssVar('--sjzy-left-menu-width', ref<any>(null)).value = '260px'
      }
    },
    openSideBar(collapse: boolean = false) {
      this.updateState({ collapse })
    },
    changeLanguageEnumKey(languageEnumKey: string) {
      this.updateState({ languageEnumKey })
    },
    foldSideBar() {
      this.updateState({ collapse: true })
    },
    changeLanguage(language: string) {
      this.updateState({ language })
    },
    handleLock() {
      this.updateState({ lock: true })
    },
    handleUnLock() {
      this.updateState({ lock: false })
    },
    changeLogo(logo: string) {
      this.updateState({ logo })
    },
    changeTitle(title: string) {
      this.updateState({ title })
    },
    toggleDark() {
      if (this.theme.isDark)
        document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')

      // 切换为暗黑主题
      VXETable.setConfig({
        theme: this.theme.isDark ? 'dark' : 'light',
      })

      this.saveTheme()
    },
    setVersion() {
      fetch(`/meta.json?${new Date().getTime()}`, { cache: 'no-cache' }).then(
        async (metaJsonRes) => {
          const versionJson = await metaJsonRes.json()
          // console.log(versionJson, 'versionJson')
          this.version = versionJson
        },
      )
    },
    /** 切换主题模式 */
    changeDark(event?: MouseEvent) {
      const x = event?.clientX || 0
      const y = event?.clientY || 0
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

      if (!document.startViewTransition) {
        this.toggleDark()
        return
      }
      const transition = document.startViewTransition(() => {
        this.toggleDark()
      })
      transition.ready.then(() => {
        const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
        document.documentElement.animate(
          {
            clipPath: this.theme.isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 300,
            easing: 'ease-in',
            pseudoElement: this.theme.isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          },
        )
      })
    },
    /** 切换主题颜色 */
    changeColor() {
      const el = ref<any>(null)
      useCssVar('--sjzy-color-primary', el).value = this.theme.primaryColor || config.primaryColor
      this.saveTheme()
    },
    /** 切换菜单模式 */
    changeMenu() {
      if (this.theme.menuBarStyle === 'light')
        document.documentElement.classList.add('theme-menu-light')
      else document.documentElement.classList.remove('theme-menu-light')

      this.saveTheme()
    },
    /** 更新主题 */
    updateTheme() {
      const el = ref<any>(null)
      if (this.theme.layout === 'vertical' || this.theme.layout === 'column') {
        if (this.language === 'en-US')
          useCssVar('--sjzy-left-menu-width', el).value = '260px'
        else useCssVar('--sjzy-left-menu-width', el).value = '220px'
      }
      else {
        if (this.language === 'en-US')
          useCssVar('--sjzy-left-menu-width', el).value = '300px'
        else useCssVar('--sjzy-left-menu-width', el).value = '260px'
      }

      this.toggleCollapse(this.collapse)
    },
    /** 初始化主题布局等 */
    initTheme() {
      this.changeColor()
      this.updateTheme()
      this.changeMenu()
      this.toggleDark()
    },
  },
})

export default useSettingsStore
