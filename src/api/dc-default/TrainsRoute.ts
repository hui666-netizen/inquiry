// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取铁运航线详情 POST /TrainsRoute/GetTrainsRouteInfo */
export async function TrainsRouteGetTrainsRouteInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTrainsRouteOutput>({
    url: `/dataCenterApi/TrainsRoute/GetTrainsRouteInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取铁运航线列表 POST /TrainsRoute/GetTrainsRouteList */
export async function TrainsRouteGetTrainsRouteListPOST(
  body: DataCenterAPI.GetTrainsRouteInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTrainsRouteOutputUnifyPageResultDto>({
    url: `/dataCenterApi/TrainsRoute/GetTrainsRouteList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新铁运航线 POST /TrainsRoute/UpdateTrainsRoute */
export async function TrainsRouteUpdateTrainsRoutePOST(
  body: DataCenterAPI.UpdateTrainsRouteInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/TrainsRoute/UpdateTrainsRoute`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
