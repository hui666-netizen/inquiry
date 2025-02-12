// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取海运整柜柜型详情 POST /SeaArkType/GetSeaArkTypeInfo */
export async function SeaArkTypeGetSeaArkTypeInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaArkTypeOutput>({
    url: `/dataCenterApi/SeaArkType/GetSeaArkTypeInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取海运整柜柜型列表 POST /SeaArkType/GetSeaArkTypeList */
export async function SeaArkTypeGetSeaArkTypeListPOST(
  body: DataCenterAPI.GetSeaArkTypeInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaArkTypeOutputUnifyPageResultDto>({
    url: `/dataCenterApi/SeaArkType/GetSeaArkTypeList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新海运整柜柜型 POST /SeaArkType/UpdateSeaArkType */
export async function SeaArkTypeUpdateSeaArkTypePOST(
  body: DataCenterAPI.UpdateSeaArkTypeInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/SeaArkType/UpdateSeaArkType`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
