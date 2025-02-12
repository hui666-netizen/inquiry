// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取最近30条企业认证记录 GET /trainee/inquiry/CarouselImage/GetCompanyAuthenticate */
export async function CarouselImageGetCompanyAuthenticate(options?: { [key: string]: any }) {
  return request<InquiryApi.inquiryCompanyAuthenticateResponse>({
    url: `/trainee/inquiry/CarouselImage/GetCompanyAuthenticate`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取最近30条询价记录 GET /trainee/inquiry/CarouselImage/GetInquireList */
export async function CarouselImageGetInquireList(options?: { [key: string]: any }) {
  return request<InquiryApi.inquiryInquireResponse>({
    url: `/trainee/inquiry/CarouselImage/GetInquireList`,
    method: 'GET',
    ...(options || {}),
  });
}
