<script lang="ts" setup>
import { setStorage } from '@sjzy/utils'
// import { useRequest } from 'vue-hooks-plus'
import {
  // ProjectConfigGetProjectLanguageByCodeGET,
  ProjectConfigGetProjectLanguageConfigInfoGET,
} from '@/api/dc-projectConfig/ProjectConfig'
import i18n from '@/i18n'
import messages from '@/i18n/lang/index'
import translateSvg from '@/assets/svg/translate.svg?raw'
import checkSvg from '@/assets/svg/check.svg?raw'

const settingsStore = useSettingsStore()

const langList = ref<DataCenterAPI.GetProjectLanguageByCodeOutputVO[]>([])
// const ProjectConfigGetProjectLanguageByCode = useRequest(ProjectConfigGetProjectLanguageByCodeGET, {
//   manual: true,
//   onSuccess({ code, data }) {
//     if (code === '200')
//       langList.value = data || []
//   },
// })

// function getLangList() {
//   ProjectConfigGetProjectLanguageByCode.run({
//     code: 'DevOps',
//   })
// }
const { theme } = storeToRefs(settingsStore)
const { changeLanguage, changeLanguageEnumKey, getLanguage, getLanguageEnumKey } = settingsStore

function handleCommand(language: string) {
  setStorage('enumDict', {}) // 切换语言需重新加载主数据
  // locale.value = language
  const langItem = langList.value?.find(item => item.enDisp === language)
  if (langItem && langItem.enumKey)
    changeLanguageEnumKey(`${langItem.enumKey}`)
  changeLanguage(language)
  const timer = setTimeout(() => {
    clearTimeout(timer)
    window.location.reload()
  })
}

// getLangList()

type obj = {
  [key: string]: string | obj
}

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
    // ProjectConfigGetProjectLanguageConfigInfoGET({
    //   projectCode: 'DevOps',
    //   languageEnumKey: Number(String(getLanguageEnumKey)?.split('-')[0]),
    //   time: time || String(getLanguageEnumKey)?.split('-')[1],
    // } as any),
    ProjectConfigGetProjectLanguageConfigInfoGET({
      projectCode: 'sjzycomponents',
      languageEnumKey: Number(String(getLanguageEnumKey)?.split('-')[0]),
      time: time || String(getLanguageEnumKey)?.split('-')[1],
    } as any),
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

const { time } = inject('getLanguageEnumKey') as { time: Ref<number>, updateTime: () => void }

watch(
  () => time.value,
  (val) => {
    getLangPack(val)
  },
)
</script>

<template>
  <ElDropdown v-if="theme.showLanguage" @command="handleCommand">
    <div class="h-full flex items-center px-10px">
      <SjzyIcon :icon="translateSvg" is-custom-svg :size="16" />
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="item in langList" :key="item.enDisp" :command="item.enDisp">
          <span class="min-w-60px">{{ item.translation }}</span>
          <span v-if="getLanguage === item.enDisp" class="m-l-10px flex items-center text-14px">
            <SjzyIcon :icon="checkSvg" is-custom-svg :size="14" />
          </span>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
