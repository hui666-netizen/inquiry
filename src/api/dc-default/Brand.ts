// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 品牌精准查询接口 GET /Brand/Details */
export async function BrandGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.BrandGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetBrandOutputValueObject>({
    url: `/dataCenterApi/Brand/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 品牌更新接口 POST /Brand/Edit */
export async function BrandEditPOST(
  body: DataCenterAPI.EditBrandInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Brand/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 品牌模糊查询接口 GET /Brand/Page */
export async function BrandGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.BrandGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetBrandOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/Brand/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
