// 定义要加载的文件夹路径
const context: any = import.meta.glob('@/router/routes/modules/group/*.ts') as any
// 加载所有 .js 文件
let fileNameArr: any = []
const fileObj: any = {}
fileNameArr = []
for (const key in context) {
  if (Object.prototype.hasOwnProperty.call(context, key)) {
    const element: string = context[key]
      .toString()
      .replace(`() => import("`, '')
      .replace(`.ts")`, '')
      .replace('/src', '@')
    fileObj[element] = context[key]
    fileNameArr.push(element)
  }
}
export async function getFile(path: any) {
  const file = await fileObj[path]()
  return file.default
}
export const exportFileNameArr = fileNameArr
