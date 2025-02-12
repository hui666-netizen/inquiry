import { debounce } from 'lodash-es'
import { enumLocal } from './enum'
import {
  EnumValueInfoGetEnumValueInfoListPOST,
  EnumValueInfoGetEnumValueInfoTreeByPropertysGET,
} from '@/api/dc-default/EnumValueInfo'
import { EnumValueInfoRelevanceGetListPOST } from '@/api/dc-default/EnumValueInfoRelevance'
import { isCN } from '@/utils'

export type IEnumDict<T extends string[]> = {
  [K in T[number]]: IEnumDictItem[]
}
export type IEnumDictItem = {
  id?: number
  label: string
  value: number | string
  /** 属性 */
  property?: string
  /** 关键字 */
  enumkey?: number
  /** 描述 */
  disp?: string
  /** 描述英文名 */
  enDisp?: string
  /** 枚举描述子级 */
  childEnumValueInfo?: IEnumDictItem[]
}

// 定义返回的字典
const dict = reactive<{ [key: string]: IEnumDictItem[] }>({})
// 需要重新获取的字典名称集合
let fetchKey: string[] = []
// 需要重新获取的字典名称集合
let fetchGroupKey: string[] = []

/**
 * 通用状态字典 过滤器 将键值转换为label显示
 * @param value key
 * @param dictList 字典数组
 */
export function dictToLabel(value: string | number | boolean, dictList: IEnumDictItem[]): string {
  if (!dictList?.length)
    return value as unknown as string

  if (value === undefined || value === null)
    return '--'

  const item = dictList.find(el => el.value === value)
  if (item)
    return item.id ? isCN(item.disp, item.enDisp) : t(item.label)
  else return value as unknown as string
}

/**
 * @description 字典获取 二维数组
 * @param keys 字典名称数组
 */
export function useDict<T extends string[]>(
  keys: string[],
): {
    dictData: IEnumDict<typeof keys>
    dictToLabel: (value: string | number | boolean, dictList: IEnumDictItem[]) => string
  } {
  // 更新本地静态枚举
  Object.assign(dict, enumLocal)

  // 获取本地没有的字典名称集合
  const fetch = keys.filter(i => !dict[i])
  fetchKey = [...fetchKey, ...fetch]
  fetchKey.forEach((ele) => {
    dict[ele] = []
  })

  // 请求没有的字典然后追加
  if (fetchKey.length)
    debounceGetDict(fetchKey)

  return {
    dictData: dict as IEnumDict<T>,
    dictToLabel,
  }
}

/**
 * @description 字典获取 分组
 * @param keys 字典名称数组
 */
export function useDictGroup<T extends string[]>(
  keys: T,
): {
    dictGroupData: IEnumDict<typeof keys>
  } {
  // 更新本地静态枚举
  Object.assign(dict, enumLocal)

  // 获取本地没有的字典名称集合
  const fetch = keys.filter(i => !dict[i])
  fetchGroupKey = [...fetchGroupKey, ...fetch]
  fetchGroupKey.forEach((ele) => {
    dict[ele] = []
  })

  // 请求没有的字典然后追加
  if (fetchGroupKey.length) {
    debounceGetDictGroup(
      fetchGroupKey?.map((i) => {
        const keyArr = i.split('_')
        return {
          property: keyArr?.[0],
          enumkey: keyArr?.[1] ? Number(keyArr?.[1]) : undefined,
        }
      }),
    )
  }

  return {
    dictGroupData: dict as IEnumDict<T>,
  }
}

/**
 * @description 字典获取 树型
 * @param keys 字典名称数组
 */
export function useDictTree<T extends string[]>(
  keys: T,
): {
    dictDataTree: IEnumDict<typeof keys>
  } {
  // 更新本地静态枚举
  Object.assign(dict, enumLocal)

  // 获取本地没有的字典名称集合
  const fetch = keys.filter(i => !dict[i])
  fetch.forEach((ele) => {
    dict[ele] = []
  })

  const promises: Promise<void>[] = []
  for (const property of fetch) promises.push(debounceGetDictTree(property))

  Promise.all(promises)

  return {
    dictDataTree: dict as IEnumDict<T>,
  }
}

/** 获取新枚举-基本 */
const debounceGetDict = debounce(async (propertys: string[] = []) => {
  fetchKey = []
  const { data } = await EnumValueInfoGetEnumValueInfoListPOST({ propertys })
  if (data) {
    data.forEach((ele) => {
      const property = ele.property as string
      const enumValue
        = ele.enumValueInfoItem?.map((item: DataCenterAPI.GetEnumValueInfoOutput) => ({
          ...item,
          label: isCN(item.disp, item.enDisp),
          value: item.enumkey,
        })) ?? []
      dict[property] = enumValue as IEnumDictItem[]
    })
  }
}, 50)
/** 获取新枚举-分组 */
const debounceGetDictGroup = debounce(
  async (propertys: DataCenterAPI.GetEnumValueInfoRelevanceItem[] = []) => {
    fetchGroupKey = []
    const { data } = await EnumValueInfoRelevanceGetListPOST({ items: propertys })
    if (data) {
      data.forEach((ele) => {
        const property = `${ele.parentProperty}_${ele.parentEnumkey}` as string
        const enumValue
          = ele.enumValueInfoRelevanceItem?.map(
            (item: DataCenterAPI.GetEnumValueInfoRelevanceOutputValueObject) => ({
              ...item,
              label: isCN(item.childDisp, item.childEnDisp),
              value: item.childEnumkey,
            }),
          ) ?? []
        dict[property] = enumValue as IEnumDictItem[]
      })
    }
  },
  50,
)
/** 获取新枚举-树型 */
async function debounceGetDictTree(property: string) {
  const { data } = await EnumValueInfoGetEnumValueInfoTreeByPropertysGET({ propertys: [property] })
  if (data)
    dict[property] = data as IEnumDictItem[]
}
