// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 查询航线报价信息 POST /trainee/inquiry/Home/FindRoutePriceInfo */
export async function HomeFindRoutePriceInfo(
  body: InquiryApi.inquiryFindRoutePriceInfoRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFindRoutePriceInfoResponse>({
    url: `/trainee/inquiry/Home/FindRoutePriceInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户历史搜索记录 POST /trainee/inquiry/Home/FindSearchHistory */
export async function HomeFindSearchHistory(
  body: InquiryApi.inquiryFindSearchHistoryRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryFindSearchHistoryResponse>({
    url: `/trainee/inquiry/Home/FindSearchHistory`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户历史搜索记录 POST /trainee/inquiry/Home/ModifySearchHistory */
export async function HomeModifySearchHistory(
  body: InquiryApi.inquiryPutSearchHistoryRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryPutSearchHistoryResponse>({
    url: `/trainee/inquiry/Home/ModifySearchHistory`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
