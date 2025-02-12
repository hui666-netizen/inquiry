// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 此处后端没有提供注释 POST /trainee/inquiry/Test/TestInquiry */
export async function TestTestInquiry(
  body: InquiryApi.inquiryTestInquiryRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.basicString>({
    url: `/trainee/inquiry/Test/TestInquiry`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
