import type { App } from 'vue'
import { ProjectConfigGetProjectLanguageConfigInfoGET } from '@/api/dc-projectConfig/ProjectConfig'
import i18n from '@/i18n'
import messages from '@/i18n/lang/index'

type obj = {
  [key: string]: string | obj
}

const settingsStore = useSettingsStore()

const { getLanguage, getLanguageEnumKey } = settingsStore

/**
 * @description: 递归设置翻译
 * @param currentMessage 当前的对象
 * @param paramsMessage 需要遍历的对象
 * @param langPack 接口获取的语言包
 * @return 返回设置翻译的对象
 */
function setLangTranslate(currentMessage: obj, paramsMessage: obj, langPack: obj) {
  const params = currentMessage

  // 遍历对象
  for (const key in paramsMessage) {
    // 如果属性是对象类型 则 递归处理
    if (Object.prototype.toString.call(paramsMessage[key]) === '[object Object]') {
      if (!params[key]) {
        // 默认给字段设置为空对象  防止报错
        params[key] = {}
      }
      // 递归设置翻译
      params[key] = setLangTranslate(params[key] as obj, paramsMessage[key] as obj, langPack)
    }
    else {
      // 不是独享类型 则直接赋值
      params[key] = langPack[key] || paramsMessage[key]
    }
  }
  return params
}
async function getLangPack(time?: number) {
  const promiseList = [
    ProjectConfigGetProjectLanguageConfigInfoGET({
      projectCode: 'middlebusiness',
      languageEnumKey: Number(String(getLanguageEnumKey)?.split('-')[0]),
      time: time || String(getLanguageEnumKey)?.split('-')[1],
    } as any),

    ProjectConfigGetProjectLanguageConfigInfoGET({
      projectCode: 'sjzycomponents',
      languageEnumKey: Number(String(getLanguageEnumKey)?.split('-')[0]),
      time: time || String(getLanguageEnumKey)?.split('-')[1],
    } as any),

    // ProjectConfigGetProjectLanguageConfigInfoGET({
    //   projectCode: 'DevOps',
    //   languageEnumKey: Number(String(getLanguageEnumKey)?.split('-')[0]),
    //   time: time || String(getLanguageEnumKey)?.split('-')[1],
    // } as any),
  ]

  Promise.all(promiseList).then((res) => {
    let list: any[] = []
    res.map((item) => {
      list = list.concat(item.data || [])
      return item
    })

    const params: { [key: string]: any } = {}
    list?.forEach((item) => {
      params[item.cnName as string] = item.translation
    })

    if (getLanguage) {
      // 初始化当前语言
      const currentMessage = Object.assign(
        messages[getLanguage as 'zh-CN' | 'en-US'] || messages['zh-CN'],
        params,
      )

      // 获取修改后的语言
      const langTranslate = setLangTranslate({}, currentMessage, params)
      // 重置语言
      i18n.global.setLocaleMessage(getLanguage, langTranslate)
    }
  })
}

const lang = {
  install() {
    getLangPack(new Date().getTime())
  },
}

export function setupLanguage(app: App) {
  app.use(lang)
}
