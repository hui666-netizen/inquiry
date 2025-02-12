// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 海运航线精准查询接口 GET /SeaRoute/Details */
export async function SeaRouteGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaRouteGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaRouteOutput>({
    url: `/dataCenterApi/SeaRoute/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 海运航线更新接口 POST /SeaRoute/Edit */
export async function SeaRouteEditPOST(
  body: DataCenterAPI.EditSeaRouteInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/SeaRoute/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 海运航线下拉框 POST /SeaRoute/GetDropDownListPage */
export async function SeaRouteGetDropDownListPagePOST(
  body: DataCenterAPI.GetSeaRouteDropDownPageInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaRouteOutputUnifyPageResultDto>({
    url: `/dataCenterApi/SeaRoute/GetDropDownListPage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 海运航线模糊查询接口 GET /SeaRoute/Page */
export async function SeaRouteGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaRouteGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaRouteOutputUnifyPageResultDto>({
    url: `/dataCenterApi/SeaRoute/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
