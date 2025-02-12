import config from '@/config'

import i18n from '@/i18n'

const { t, te } = i18n.global

export function translateTitle(title: string, ...args: any[]) {
  if (te(title))
    return t(title, args)
  return title
}

export function getPageTitle(pageTitle: string | undefined) {
  const { getTitle } = useSettingsStore()
  pageTitle = t(`${pageTitle}`)
  let newTitles = []
  if (pageTitle)
    newTitles.push(pageTitle)
  if (getTitle)
    newTitles.push(t(`${getTitle}`))
  if (config.titleReverse)
    newTitles = newTitles.reverse()
  return newTitles.join(config.titleSeparator)
}
