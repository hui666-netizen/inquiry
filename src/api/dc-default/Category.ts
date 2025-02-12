// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 商品分类精准查询接口 GET /Category/Details */
export async function CategoryGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CategoryGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCategoryOutputValueObject>({
    url: `/dataCenterApi/Category/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品分类更新接口 POST /Category/Edit */
export async function CategoryEditPOST(
  body: DataCenterAPI.EditCategoryInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Category/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品分类模糊查询接口 GET /Category/Page */
export async function CategoryGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CategoryGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCategoryOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/Category/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
