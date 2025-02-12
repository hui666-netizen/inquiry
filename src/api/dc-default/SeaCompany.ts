// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 船司精准查询接口 GET /SeaCompany/Details */
export async function SeaCompanyGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaCompanyGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaCompanyDetailsOutput>({
    url: `/dataCenterApi/SeaCompany/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 船司更新接口 POST /SeaCompany/Edit */
export async function SeaCompanyEditPOST(
  body: DataCenterAPI.EditSeaCompanyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/SeaCompany/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉数据源
 * Type = -1, POST /SeaCompany/GetPageForDropDownList */
export async function SeaCompanyGetPageForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaCompanyDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/SeaCompany/GetPageForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 船司模糊查询接口 GET /SeaCompany/Page */
export async function SeaCompanyGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaCompanyGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaCompanyOutputUnifyPageResultDto>({
    url: `/dataCenterApi/SeaCompany/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
