import { cloneDeep } from 'lodash-es'

type RootObj = {
  [key: string]: any
}
export function useResetData(obj: RootObj) {
  const cloneObj = cloneDeep(obj)
  Object.keys(cloneObj).forEach((i) => {
    if (cloneObj[i] === '--')
      cloneObj[i] = undefined
  })
  return cloneObj
}
