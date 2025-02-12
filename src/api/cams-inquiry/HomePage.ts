// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取推荐航线 GET /trainee/inquiry/HomePage/GetRecommendedRoute */
export async function HomePageGetRecommendedRoute(options?: { [key: string]: any }) {
  return request<InquiryApi.inquiryRecommendedResponse>({
    url: `/trainee/inquiry/HomePage/GetRecommendedRoute`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取特价航线 GET /trainee/inquiry/HomePage/GetSpecialOfferRoute */
export async function HomePageGetSpecialOfferRoute(options?: { [key: string]: any }) {
  return request<InquiryApi.inquirySpecialOfferResponse>({
    url: `/trainee/inquiry/HomePage/GetSpecialOfferRoute`,
    method: 'GET',
    ...(options || {}),
  });
}
