// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 删除转运表某些数据 POST /trainee/inquiry/Transport/Delete */
export async function TransportDelete(
  body: InquiryApi.inquiryTransportDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryTransportDeleteResponse>({
    url: `/trainee/inquiry/Transport/Delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取转运表某些数据，分页 GET /trainee/inquiry/Transport/GetPageList */
export async function TransportGetPageList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: InquiryApi.TransportGetPageListParams,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryTransportGetPageListResponse>({
    url: `/trainee/inquiry/Transport/GetPageList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增或修改转运表某条数据 中转表导出Excel POST /trainee/inquiry/Transport/MaintainFreight */
export async function TransportMaintainFreight(
  body: InquiryApi.inquiryTransportMaintainFreightRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryTransportMaintainFreightResponse>({
    url: `/trainee/inquiry/Transport/MaintainFreight`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /trainee/inquiry/Transport/TransportExportExcel */
export async function TransportTransportExportExcel(
  body: InquiryApi.inquiryTransportExportExcelRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.basicString>({
    url: `/trainee/inquiry/Transport/TransportExportExcel`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
