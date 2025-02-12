// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 街道精准查询接口 GET /Street/Details */
export async function StreetGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.StreetGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetStreetOutputValueObject>({
    url: `/dataCenterApi/Street/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 街道更新接口 POST /Street/Edit */
export async function StreetEditPOST(
  body: DataCenterAPI.EditStreetInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Street/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 街道模糊查询接口 GET /Street/Page */
export async function StreetGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.StreetGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetStreetOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/Street/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
