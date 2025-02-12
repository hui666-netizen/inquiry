// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 城市精准查询接口 GET /City/Details */
export async function CityGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CityGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCityDetailsOutput>({
    url: `/dataCenterApi/City/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 城市更新接口 POST /City/Edit */
export async function CityEditPOST(
  body: DataCenterAPI.EditCityInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/City/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 城市下拉框接口 POST /City/GetDropDownPageList */
export async function CityGetDropDownPageListPOST(
  body: DataCenterAPI.GetCityDropDownListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCityDropDownListOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/City/GetDropDownPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 城市模糊查询接口 GET /City/Page */
export async function CityGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CityGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCityOutputUnifyPageResultDto>({
    url: `/dataCenterApi/City/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
