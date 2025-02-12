// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 根据客户id查询客户信息 POST /trainee/inquiry/Customer/FindCustomerById */
export async function CustomerFindCustomerById(
  body: InquiryApi.inquiryFindCustomerByIdRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFindCustomerByIdResponse>({
    url: `/trainee/inquiry/Customer/FindCustomerById`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 模糊查询客户 分页 POST /trainee/inquiry/Customer/FindCustomerFuzzy */
export async function CustomerFindCustomerFuzzy(
  body: InquiryApi.inquiryFindCustomerFuzzyRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFindCustomerFuzzyResponse>({
    url: `/trainee/inquiry/Customer/FindCustomerFuzzy`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 后台 归属业务员模糊查询接口 POST /trainee/inquiry/Customer/FindSaleManFuzzy */
export async function CustomerFindSaleManFuzzy(
  body: InquiryApi.inquiryFindSaleManFuzzyRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFindSaleManFuzzyResponse>({
    url: `/trainee/inquiry/Customer/FindSaleManFuzzy`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改客户状态 POST /trainee/inquiry/Customer/ModifyCustomerStatus */
export async function CustomerModifyCustomerStatus(
  body: InquiryApi.inquiryModifyCustomerStatusRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryModifyCustomerStatusResponse>({
    url: `/trainee/inquiry/Customer/ModifyCustomerStatus`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改客户类型 POST /trainee/inquiry/Customer/ModifyCustomerType */
export async function CustomerModifyCustomerType(
  body: InquiryApi.inquiryModifyCustomerTypeRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryModifyCustomerTypeResponse>({
    url: `/trainee/inquiry/Customer/ModifyCustomerType`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改客户信息--个人中心 POST /trainee/inquiry/Customer/ModifyCutsomerBySelf */
export async function CustomerModifyCutsomerBySelf(
  body: InquiryApi.inquiryModifyCutsomerBySelfRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryModifyCutsomerBySelfResponse>({
    url: `/trainee/inquiry/Customer/ModifyCutsomerBySelf`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增客户信息 POST /trainee/inquiry/Customer/SaveCustomer */
export async function CustomerSaveCustomer(
  body: InquiryApi.inquirySaveCustomerRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquirySaveCustomerResponse>({
    url: `/trainee/inquiry/Customer/SaveCustomer`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
