// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取机型详情 POST /AircraftType/GetAircraftTypeInfo */
export async function AircraftTypeGetAircraftTypeInfoPOST(
  body: DataCenterAPI.GetAircraftTypeInfoInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAircraftTypeInfoOutput>({
    url: `/dataCenterApi/AircraftType/GetAircraftTypeInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取机型列表 POST /AircraftType/GetAircraftTypeList */
export async function AircraftTypeGetAircraftTypeListPOST(
  body: DataCenterAPI.GetAircraftTypeListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAircraftTypeListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/AircraftType/GetAircraftTypeList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新机型 POST /AircraftType/UpdateAircraftType */
export async function AircraftTypeUpdateAircraftTypePOST(
  body: DataCenterAPI.UpdateAircraftTypeInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/AircraftType/UpdateAircraftType`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
