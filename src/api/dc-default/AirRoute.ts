// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 空运航线精准查询接口 GET /AirRoute/Details */
export async function AirRouteGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirRouteGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirRouteOutput>({
    url: `/dataCenterApi/AirRoute/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 空运航线更新接口 POST /AirRoute/Edit */
export async function AirRouteEditPOST(
  body: DataCenterAPI.EditAirRouteInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/AirRoute/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 空运航线模糊查询接口 GET /AirRoute/Page */
export async function AirRouteGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirRouteGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirRouteOutputUnifyPageResultDto>({
    url: `/dataCenterApi/AirRoute/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
