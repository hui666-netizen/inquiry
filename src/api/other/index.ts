// import md5 from 'js-md5'
import dayjs from 'dayjs'
import md5 from 'crypto-js/md5'
import request from '@/utils/http/request'

/** 下载 */
export async function DownloadOtherFile(
  params: {
    // query
    serviceCode?: string
    typeCode?: string
  },
  options?: { [key: string]: any },
) {
  return request<any>({
    url: 'upload/ImportTemplate/Download',
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  })
}
/** 上传图片 */
export async function WTMUploadFile(
  body: {
    isAddWatermark?: boolean
    imageType: string
    serviceCode: string
  },
  files?: File[],
  options?: { [key: string]: any },
) {
  const formData = new FormData()
  if (files)
    formData.append('file', files[0] || '')

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele]
    if (item !== undefined && item !== null)
      formData.append(ele, typeof item === 'object' ? JSON.stringify(item) : item)
  })
  return request<
    Array<{
      id: number
      key: string
      url: string
      size: string
    }>
  >({
    url: '/uploadApi/Upload/ImageToOSS',
    method: 'POST',
    data: formData,
    noApiPrefix: true,
    ...(options || {}),
  },
  )
}

/** 刷新token */
export async function OAuthRefreshTokenPOST(options: { [key: string]: any }) {
  return request<UserApi.LoginOutput>({
    url: `/userApi/OAuth/RefreshToken`,
    method: 'POST',
    // data: body,
    ...(options || {}),
  })
}

export async function OAuthTelLoginPOST(
  body: {
    /** 手机号 */
    TelPhone: string
    /** 通过该手机号发送的短信验证码 */
    MessageCode: string
    SendValidationMessageType?: UserApi.SendValidationMessageType
  },
  // options?: { [key: string]: any }
) {
  return request<UserApi.LoginOutput>({
    url: `/userApi/OAuth/TelLogin`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    data: body,
    // ...(options || {}),
  })
}
