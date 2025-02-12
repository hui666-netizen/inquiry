// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 空港精准查询接口 GET /Airport/Details */
export async function AirportGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirportGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirportDetailsOutput>({
    url: `/dataCenterApi/Airport/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 空港更新接口 POST /Airport/Edit */
export async function AirportEditPOST(
  body: DataCenterAPI.EditAirportInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Airport/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 起运港，目的港下拉数据源
 * Type = -1,
港口 Type=1, POST /Airport/GetPageForDropDownList */
export async function AirportGetPageForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordGroupInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirportDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Airport/GetPageForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 起运地，目的地下拉数据源
 * Type = -1,
港口 Type=1,
城市 Type = 4,
省份 Type = 5,
国家 Type = 2,
区域 Type = 3,
区县 Type = 7 POST /Airport/GetPagePlaceForDropDownList */
export async function AirportGetPagePlaceForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirportPlaceDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Airport/GetPagePlaceForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据机场代码获取时区 POST /Airport/GetTimeDiffByAirPortCode */
export async function AirportGetTimeDiffByAirPortCodePOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirportGetTimeDiffByAirPortCodePOSTParams,
  options?: { [key: string]: any },
) {
  return request<string>({
    url: `/dataCenterApi/Airport/GetTimeDiffByAirPortCode`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据机场英文名称获取时区 POST /Airport/GetTimeDiffByNationCode */
export async function AirportGetTimeDiffByNationCodePOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirportGetTimeDiffByNationCodePOSTParams,
  options?: { [key: string]: any },
) {
  return request<string>({
    url: `/dataCenterApi/Airport/GetTimeDiffByNationCode`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据机场代码集合获取时区列表 POST /Airport/GetTimeDiffListByAirPortCodes */
export async function AirportGetTimeDiffByAirPortCodesPOST(
  body: DataCenterAPI.GetTimeDiffInfoInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCityTimeDiffVO[]>({
    url: `/dataCenterApi/Airport/GetTimeDiffListByAirPortCodes`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 空港模糊查询接口 GET /Airport/Page */
export async function AirportGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AirportGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirportOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Airport/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
