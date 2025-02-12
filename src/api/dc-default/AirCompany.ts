// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 航司精准查询接口 GET /AirCompany/Details */
export async function AirCompanyGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirCompanyGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirCompanyDetailsOutput>({
    url: `/dataCenterApi/AirCompany/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 航司更新接口 POST /AirCompany/Edit */
export async function AirCompanyEditPOST(
  body: DataCenterAPI.EditAirCompanyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/AirCompany/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉数据源
 * Type = -1, POST /AirCompany/GetPageForDropDownList */
export async function AirCompanyGetPageForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirCompanyDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/AirCompany/GetPageForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 航司模糊查询接口 GET /AirCompany/Page */
export async function AirCompanyGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirCompanyGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirCompanyOutputUnifyPageResultDto>({
    url: `/dataCenterApi/AirCompany/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
