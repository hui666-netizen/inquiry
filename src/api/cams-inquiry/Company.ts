// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 企业认证审核 POST /trainee/inquiry/Company/CompanyAuthenticationAudit */
export async function CompanyCompanyAuthenticationAudit(
  body: InquiryApi.inquiryCompanyAuthenticationAuditRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryCompanyAuthenticationAuditResponse>({
    url: `/trainee/inquiry/Company/CompanyAuthenticationAudit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过客户Id获取绑定的企业信息 GET /trainee/inquiry/Company/GetCompanyInfo */
export async function CompanyGetCompanyInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: InquiryApi.CompanyGetCompanyInfoParams,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryGetCompanyInfoResponse>({
    url: `/trainee/inquiry/Company/GetCompanyInfo`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询客户-企业关系 GET /trainee/inquiry/Company/GetCustomerCompany */
export async function CompanyGetCustomerCompany(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: InquiryApi.CompanyGetCustomerCompanyParams,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryGetCustomerCompanyResponse>({
    url: `/trainee/inquiry/Company/GetCustomerCompany`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 企业信息认证上传 POST /trainee/inquiry/Company/SaveCompanyInfo */
export async function CompanySaveCompanyInfo(
  body: InquiryApi.inquirySaveCompanyInfoRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquirySaveCompanyInfoResponse>({
    url: `/trainee/inquiry/Company/SaveCompanyInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 客户-企业关系 POST /trainee/inquiry/Company/SaveCustomerAndCompanyRelationship */
export async function CompanySaveCustomerAndCompanyRelationship(
  body: InquiryApi.inquirySaveCustomerAndCompanyRelationshipRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquirySaveCustomerAndCompanyRelationshipResponse>({
    url: `/trainee/inquiry/Company/SaveCustomerAndCompanyRelationship`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
