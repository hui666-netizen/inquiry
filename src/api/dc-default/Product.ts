// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 商品精准查询接口 GET /Product/Details */
export async function ProductGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ProductGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetProductOutputValueObject>({
    url: `/dataCenterApi/Product/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品更新接口 POST /Product/Edit */
export async function ProductEditPOST(
  body: DataCenterAPI.EditProductInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Product/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品模糊查询接口 GET /Product/Page */
export async function ProductGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ProductGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetProductOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/Product/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
