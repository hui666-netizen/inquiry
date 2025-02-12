// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 删除直飞表某些数据 POST /trainee/inquiry/Direct/Delete */
export async function DirectDelete(
  body: InquiryApi.inquiryDirectDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryDirectDeleteResponse>({
    url: `/trainee/inquiry/Direct/Delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 直飞表导出Excel POST /trainee/inquiry/Direct/DirectExportExcel */
export async function DirectDirectExportExcel(
  body: InquiryApi.inquiryDirectExportExcelRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.basicString>({
    url: `/trainee/inquiry/Direct/DirectExportExcel`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取直飞表某些数据，分页 GET /trainee/inquiry/Direct/GetPageList */
export async function DirectGetPageList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: InquiryApi.DirectGetPageListParams,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryDirectGetPageListResponse>({
    url: `/trainee/inquiry/Direct/GetPageList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增或修改直飞表某条数据 POST /trainee/inquiry/Direct/MaintainFreight */
export async function DirectMaintainFreight(
  body: InquiryApi.inquiryDirectMaintainFreightRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryDirectMaintainFreightResponse>({
    url: `/trainee/inquiry/Direct/MaintainFreight`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
