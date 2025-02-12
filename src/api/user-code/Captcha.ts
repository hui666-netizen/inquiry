// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 此处后端没有提供注释 POST /Captcha/GetCaptcha */
export async function CaptchaGetCaptchaPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.CaptchaGetCaptchaPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.CaptchaResult>({
    url: `/userApi/Captcha/GetCaptcha`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /Captcha/VerfiyCaptcha */
export async function CaptchaVerfiyCaptchaPOST(
  body: UserApi.SlideTrackContext,
  options?: { [key: string]: any },
) {
  return request<UserApi.ValidateResultOutput>({
    url: `/userApi/Captcha/VerfiyCaptcha`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
