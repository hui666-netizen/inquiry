// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 国家精准查询接口 GET /Country/Details */
export async function CountryGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CountryGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCountryOutput>({
    url: `/dataCenterApi/Country/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 国家更新接口 POST /Country/Edit */
export async function CountryEditPOST(
  body: DataCenterAPI.EditCountryInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Country/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 国家模糊查询接口 GET /Country/Page */
export async function CountryGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CountryGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCountryOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Country/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
