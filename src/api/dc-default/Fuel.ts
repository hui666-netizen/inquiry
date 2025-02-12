// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取燃油信息详情 POST /Fuel/GetFuelInfo */
export async function FuelGetFuelInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFuelOutput>({
    url: `/dataCenterApi/Fuel/GetFuelInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取燃油信息列表 POST /Fuel/GetFuelList */
export async function FuelGetFuelListPOST(
  body: DataCenterAPI.GetFuelInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFuelOutputUnifyPageResultDtoUnifyResultDto>({
    url: `/dataCenterApi/Fuel/GetFuelList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新燃油信息 POST /Fuel/UpdateFuel */
export async function FuelUpdateFuelPOST(
  body: DataCenterAPI.UpdateFuelInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/Fuel/UpdateFuel`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
