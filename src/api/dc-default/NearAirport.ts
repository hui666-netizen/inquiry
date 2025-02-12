// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取城市附近机场详情 POST /NearAirport/GetNearAirportInfo */
export async function NearAirportGetNearAirportInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetNearAirportOutput>({
    url: `/dataCenterApi/NearAirport/GetNearAirportInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取城市附近机场列表 POST /NearAirport/GetNearAirportList */
export async function NearAirportGetNearAirportListPOST(
  body: DataCenterAPI.GetNearAirportInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetNearAirportOutputUnifyPageResultDto>({
    url: `/dataCenterApi/NearAirport/GetNearAirportList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新城市附近机场信息 POST /NearAirport/UpdateNearAirport */
export async function NearAirportUpdateNearAirportPOST(
  body: DataCenterAPI.UpdateNearAirportInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/NearAirport/UpdateNearAirport`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
