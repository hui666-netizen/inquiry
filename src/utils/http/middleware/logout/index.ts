import { ElMessageBox } from 'element-plus'

let flag = false
// token过期
async function logout() {
  if (flag)
    return
  flag = true
  const { resetAll } = useUserStore()
  await ElMessageBox.confirm(
    `${t('很抱歉，由于您的登录凭证已过期，您需要重新登录以继续操作。')}`,
    `${t('温馨提示')}`,
    {
      type: 'warning',
      lockScroll: false,
      customClass: 'sjzy-hey-message-box',
      confirmButtonText: t('确定'),
      cancelButtonText: t('取消'),
    },
  )
    .then(() => {
      resetAll()
    })
    .catch(() => {
      flag = false
    })
}

export default logout
