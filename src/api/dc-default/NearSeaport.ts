// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取城市附近港口详情 POST /NearSeaport/GetNearSeaportInfo */
export async function NearSeaportGetNearSeaportInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetNearSeaportOutput>({
    url: `/dataCenterApi/NearSeaport/GetNearSeaportInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取城市附近港口列表 POST /NearSeaport/GetNearSeaportList */
export async function NearSeaportGetNearSeaportListPOST(
  body: DataCenterAPI.GetNearSeaportInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetNearSeaportOutputUnifyPageResultDto>({
    url: `/dataCenterApi/NearSeaport/GetNearSeaportList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新城市附近港口 POST /NearSeaport/UpdateNearSeaport */
export async function NearSeaportUpdateNearSeaportPOST(
  body: DataCenterAPI.UpdateNearSeaportInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/NearSeaport/UpdateNearSeaport`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
