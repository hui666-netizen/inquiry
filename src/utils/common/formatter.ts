/* 去掉字符串里面所有的非数字 */
export function nonNumeric(v: string, isUpper: boolean = false) {
  const str = v.replace(/\D/g, '')
  return isUpper ? str.toUpperCase() : str
}

/* 录入英文，数字,空格 ,+  _  -  /  . , : ; & % * # {} 【】 [] () （） */
export function inputEnNumSpace(v: string, isUpper: boolean = false) {
  const str = v.replace(/[^\w\s+\-.,:;&%*#{}【】[\]()（）]/g, '')
  return isUpper ? str.toUpperCase() : str
}
/* 录入英文，数字 ,+  _  -  /  . , : ; & % * # {} 【】 [] () （） */
export function inputEnNum(v: string, isUpper: boolean = false) {
  const str = v.replace(/[^\w+\-.,:;&%*#{}【】[\]()（）]/g, '')
  return isUpper ? str.toUpperCase() : str
}

/* 录入空格 ,+  _  -  /  . , : ; & % * # {} 【】 [] () （） */
export function inputEnSpace(v: string, isUpper: boolean = false) {
  const str = v.replace(/[^a-z\s+_\-.,:;&%*#{}【】[\]()（）]/gi, '')
  return isUpper ? str.toUpperCase() : str
}

/* 多个空格合为一个 */
export function spaceToOne(v: string) {
  return v.replace(/\s+/g, ' ')
}

export function inputEnUpper(v: string) {
  return v.toUpperCase()
}

export function inputCopy(v: string) {
  return v
    .toUpperCase()
    .replace(/[^/\n\w:：()（）.。，,@-]+/g, ' ')
    .replace(/\n\s+/g, ' ')
}
