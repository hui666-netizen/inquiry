import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { setupDirectives } from './directives'
import { router, setupRouter } from './router'
import { setupStore } from './store'
import { setupGlobProp } from './utils/system/emitt'
import { setupMicroApp } from '@/micro/microInit'
import { setupElementPlus } from '@/plugins/elementPlus'
import { setupSjzyUi } from '@/plugins/sjzyUi'
import { setupSjzyEditor } from '@/plugins/sjzyEditor'
import { setupI18n } from '@/i18n'
import { setupVxeTable } from '@/plugins/VxeTable'
import { setupLanguage } from '@/plugins/language'
import 'uno.css'
import 'driver.js/dist/driver.css'
import '@/styles/css/global.css'
import '@/styles/scss/main.scss'
import '../iconfont/iconfont.css'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import '@vue-flow/controls/dist/style.css'

async function setupApp() {
  const app = createApp(App)

  const settingsStore = useSettingsStore()
  const { initTheme } = settingsStore
  initTheme()
  setupGlobProp(app)
  /** createHead */
  app.use(createHead())
  /** directive */
  setupDirectives(app)
  /** VxeTable */
  setupVxeTable(app)
  /** ElemenPlus */
  setupElementPlus(app)
  /** SjzyUi */
  setupSjzyUi(app)
  /** setupSjzyEditor */
  setupSjzyEditor()
  /** pinia */
  setupStore(app)
  /** router */
  await setupRouter(app)
  /** language */
  setupLanguage(app)
  /** i18n */
  setupI18n(app)
  /** mount */
  app.mount('#micro-devops-app')
  /** microapp */
  setupMicroApp(app, router)
}

setupApp()
