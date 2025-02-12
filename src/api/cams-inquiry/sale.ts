// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 根据业务员Id和处理状态查询询价记录 POST /trainee/inquiry/sale/inquiryRecord */
export async function saleInquiryRecord(
  body: InquiryApi.inquirySaleRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquirySaleResponse>({
    url: `/trainee/inquiry/sale/inquiryRecord`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据客户手机号和业务员姓名模糊查询询价记录 POST /trainee/inquiry/sale/inquiryRecordByPhoneAndName */
export async function saleInquiryRecordByPhoneAndName(
  body: InquiryApi.inquiryInquiryRecordByPhoneAndNameRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquirySaleResponse>({
    url: `/trainee/inquiry/sale/inquiryRecordByPhoneAndName`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改询价记录的处理状态 POST /trainee/inquiry/sale/modifyState */
export async function saleModifyState(
  body: InquiryApi.inquiryModifyStatusRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquirySaleResponse>({
    url: `/trainee/inquiry/sale/modifyState`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
