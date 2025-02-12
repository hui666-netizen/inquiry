// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 删除毛利润表某些数据 POST /trainee/inquiry/Profit/Delete */
export async function ProfitDelete(
  body: InquiryApi.inquiryProfitDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryProfitDeleteResponse>({
    url: `/trainee/inquiry/Profit/Delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取毛利润表的某些数据，分页 GET /trainee/inquiry/Profit/GetPageList */
export async function ProfitGetPageList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: InquiryApi.ProfitGetPageListParams,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryProfitGetPageListResponse>({
    url: `/trainee/inquiry/Profit/GetPageList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增或修改毛利润表某条数据 POST /trainee/inquiry/Profit/MaintainFreight */
export async function ProfitMaintainFreight(
  body: InquiryApi.inquiryProfitMaintainFreightRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryProfitMaintainFreightResponse>({
    url: `/trainee/inquiry/Profit/MaintainFreight`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 毛利润表导出Excel POST /trainee/inquiry/Profit/ProfitExportExcel */
export async function ProfitProfitExportExcel(
  body: InquiryApi.inquiryProfitExportExcelRequest,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.basicString>({
    url: `/trainee/inquiry/Profit/ProfitExportExcel`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
