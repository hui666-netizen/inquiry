// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 省份精准查询接口 GET /Province/Details */
export async function ProvinceGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ProvinceGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetProvinceOutput>({
    url: `/dataCenterApi/Province/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 省份更新接口 POST /Province/Edit */
export async function ProvinceEditPOST(
  body: DataCenterAPI.EditProvinceInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Province/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 省份模糊查询接口 GET /Province/Page */
export async function ProvinceGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ProvinceGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetProvinceOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Province/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
