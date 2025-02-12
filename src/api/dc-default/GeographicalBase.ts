// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 地理基础信息省份+城市层级查询接口 GET /GeographicalBase/CityLevelList */
export async function GeographicalBaseGetCityLevelListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.GeographicalBaseGetCityLevelListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCityLevelOutputListUnifyResultDto>({
    url: `/dataCenterApi/GeographicalBase/CityLevelList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 地理基础信息省份+城市+区县层级查询接口 GET /GeographicalBase/DistrictLevelList */
export async function GeographicalBaseGetDistrictLevelListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.GeographicalBaseGetDistrictLevelListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDistrictLevelOutput[]>({
    url: `/dataCenterApi/GeographicalBase/DistrictLevelList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取id POST /GeographicalBase/GetId */
export async function GeographicalBaseGetIdPOST(
  body: DataCenterAPI.GetIdInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetIdOutputUnifyResultDto>({
    url: `/dataCenterApi/GeographicalBase/GetId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 地理基础信息自定义查询接口 GET /GeographicalBase/Page */
export async function GeographicalBaseGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.GeographicalBaseGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGeographicalBaseOutputUnifyPageResultDto>({
    url: `/dataCenterApi/GeographicalBase/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
