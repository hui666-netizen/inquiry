// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 区县精准查询接口 GET /District/Details */
export async function DistrictGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.DistrictGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDistrictOutput>({
    url: `/dataCenterApi/District/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 区县更新接口 POST /District/Edit */
export async function DistrictEditPOST(
  body: DataCenterAPI.EditDistrictInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/District/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 区县模糊查询接口 GET /District/Page */
export async function DistrictGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.DistrictGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDistrictOutputUnifyPageResultDto>({
    url: `/dataCenterApi/District/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 区县邮编重复值校验接口 GET /District/VerifyZipCode */
export async function DistrictGetVerifyZipCodeGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.DistrictGetVerifyZipCodeGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetVerifyZipCodeOutput>({
    url: `/dataCenterApi/District/VerifyZipCode`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
