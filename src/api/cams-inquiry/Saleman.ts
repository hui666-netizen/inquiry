// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 增加业务员 POST /trainee/inquiry/Saleman/AddSaleman */
export async function SalemanAddSaleman(
  body: InquiryApi.inquiryAddSalemanRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryAddSalemanResponse>({
    url: `/trainee/inquiry/Saleman/AddSaleman`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企业认证时绑定业务员 POST /trainee/inquiry/Saleman/BindSaleManWhenAuthentication */
export async function SalemanBindSaleManWhenAuthentication(
  body: InquiryApi.inquiryBindSaleManWhenAuthenticationRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryBindSaleManWhenAuthenticationResponse>({
    url: `/trainee/inquiry/Saleman/BindSaleManWhenAuthentication`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 咨询时绑定业务员 POST /trainee/inquiry/Saleman/BindSaleManWhenCounsult */
export async function SalemanBindSaleManWhenCounsult(
  body: InquiryApi.inquiryBindSaleManWhenCounsultRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryBindSaleManWhenCounsultResponse>({
    url: `/trainee/inquiry/Saleman/BindSaleManWhenCounsult`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 后台登录过的业务员精准查询 通过公司名，姓名,手机号查询业务员 POST /trainee/inquiry/Saleman/CheckSalemanByManyConditions */
export async function SalemanCheckSalemanByManyConditions(
  body: InquiryApi.inquiryCheckSalemanByManyConditionsRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryCheckSalemanByManyConditionsResponse>({
    url: `/trainee/inquiry/Saleman/CheckSalemanByManyConditions`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过业务员Id查询业务员 POST /trainee/inquiry/Saleman/CheckSalemanBySalemanId */
export async function SalemanCheckSalemanBySalemanId(
  body: InquiryApi.inquiryCheckSalemanBySalemanIdRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryCheckSalemanBySalemanIdResponse>({
    url: `/trainee/inquiry/Saleman/CheckSalemanBySalemanId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据业务员Id查看微信二维码 POST /trainee/inquiry/Saleman/CheckWeChatQrBySalemanId */
export async function SalemanCheckWeChatQrBySalemanId(
  body: InquiryApi.inquiryCheckWeChatQrBySalemanIdRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryCheckWeChatQrBySalemanIdResponse>({
    url: `/trainee/inquiry/Saleman/CheckWeChatQrBySalemanId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 后台登录过的业务员模糊查询 通过公司（供下拉搜索框使用） POST /trainee/inquiry/Saleman/FuzzyQueryByCompany */
export async function SalemanFuzzyQueryByCompany(
  body: InquiryApi.inquiryFuzzyQueryByCompanyRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFuzzyQueryByCompanyResponse>({
    url: `/trainee/inquiry/Saleman/FuzzyQueryByCompany`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 后台登录过的业务员模糊查询 通过姓名（供下拉搜索框使用） POST /trainee/inquiry/Saleman/FuzzyQueryByName */
export async function SalemanFuzzyQueryByName(
  body: InquiryApi.inquiryFuzzyQueryByNameRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFuzzyQueryByNameResponse>({
    url: `/trainee/inquiry/Saleman/FuzzyQueryByName`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 后台登录过的业务员模糊查询 通过手机号（供下拉搜索框使用） POST /trainee/inquiry/Saleman/FuzzyQueryByPhoneNumber */
export async function SalemanFuzzyQueryByPhoneNumber(
  body: InquiryApi.inquiryFuzzyQueryByPhoneNumberRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFuzzyQueryByPhoneNumberResponse>({
    url: `/trainee/inquiry/Saleman/FuzzyQueryByPhoneNumber`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据业务员Id增加接收客户次数 POST /trainee/inquiry/Saleman/IncreaseFrequencyBySalemanId */
export async function SalemanIncreaseFrequencyBySalemanId(
  body: InquiryApi.inquiryIncreaseFrequencyBySalemanIdRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryIncreaseFrequencyBySalemanIdResponse>({
    url: `/trainee/inquiry/Saleman/IncreaseFrequencyBySalemanId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据业务员Id修改微信二维码 POST /trainee/inquiry/Saleman/UpdateWeChatQrBySalemanId */
export async function SalemanUpdateWeChatQrBySalemanId(
  body: InquiryApi.inquiryUpdateWeChatQrBySalemanIdRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryUpdateWeChatQrBySalemanIdResponse>({
    url: `/trainee/inquiry/Saleman/UpdateWeChatQrBySalemanId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
