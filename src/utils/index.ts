export * from './common'
export * from './system'

const settingsStore = useSettingsStore()
const { language } = storeToRefs(settingsStore)

export function isEN(en: any, other: any) {
  return language.value !== 'zh-CN' ? en : other
}
export function isCN(cn: any, other: any) {
  return language.value === 'zh-CN' ? cn : other
}

export function isZhCn() {
  return language.value === 'zh-CN'
}
