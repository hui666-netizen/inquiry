import type { I18nOptions } from 'vue-i18n'
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './lang/index'

import { useSettingsStore } from '@/store'

function getLanguage() {
  const { getLanguage } = useSettingsStore(createPinia())
  return getLanguage || 'zh-CN'
}
const msg = messages as I18nOptions['messages']
const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: 'zh-CN',
  messages: msg,
  sync: true,
  legacy: false,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  missingWarn: false,
  fallbackWarn: false,
})
/** 国际化 */
export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
