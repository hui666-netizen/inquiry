// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 根据省Id查询所属大区 POST /trainee/inquiry/Provincedivision/FindByProvinceId */
export async function ProvincedivisionFindByProvinceId(
  body: InquiryApi.inquiryFindByProvinceIdRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFindByProvinceIdResponse>({
    url: `/trainee/inquiry/Provincedivision/FindByProvinceId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改省对应的区 POST /trainee/inquiry/Provincedivision/UpdateProvincedivision */
export async function ProvincedivisionUpdateProvincedivision(
  body: InquiryApi.inquiryUpdateProvincedivisionRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryUpdateProvincedivisionResponse>({
    url: `/trainee/inquiry/Provincedivision/UpdateProvincedivision`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
