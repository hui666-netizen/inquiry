// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 区域精准查询接口 GET /Area/Details */
export async function AreaGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AreaGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAreaOutput>({
    url: `/dataCenterApi/Area/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 区域更新接口 POST /Area/Edit */
export async function AreaEditPOST(
  body: DataCenterAPI.EditAreaInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Area/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区域模糊查询接口 GET /Area/Page */
export async function AreaGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AreaGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAreaOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Area/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
