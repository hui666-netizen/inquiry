// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 添加询价记录 POST /trainee/inquiry/Airline/Consult */
export async function AirlineConsult(
  body: InquiryApi.inquiryconsultRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryconsultResponse>({
    url: `/trainee/inquiry/Airline/Consult`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
