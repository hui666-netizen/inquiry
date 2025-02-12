/** 通用删除方法 */
export function commonDelMethod(
  api: (...arg: any[]) => Promise<any>,
  params: any,
  callback?: (flag: boolean, res?: any) => void,
  title?: string,
  content?: string,
) {
  $baseConfirm({
    content: content || t('是否确认删除？'),
    title: title || t('温馨提示'),
    onOk: () => {
      api(params)
        .then((res) => {
          if (res.code === '200') {
            $baseMessage(`${t('删除成功')}`, 'success')
            callback && callback(true, res)
          }
          else {
            $baseMessage(res.msg, 'error')
            callback && callback(false, res)
          }
        })
        .catch(() => {
          callback && callback(false)
        })
    },
  })
}
