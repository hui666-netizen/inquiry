// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 枚举关联关系精准查询接口 GET /EnumValueInfoRelevance/Details */
export async function EnumValueInfoRelevanceGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoRelevanceGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoRelevanceOutputValueObject>({
    url: `/dataCenterApi/EnumValueInfoRelevance/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举关联关系更新接口 POST /EnumValueInfoRelevance/Edit */
export async function EnumValueInfoRelevanceEditPOST(
  body: DataCenterAPI.EditEnumValueInfoRelevanceInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/EnumValueInfoRelevance/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 枚举关联关系批量查询 POST /EnumValueInfoRelevance/GetList */
export async function EnumValueInfoRelevanceGetListPOST(
  body: DataCenterAPI.GetEnumValueInfoRelevanceListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoRelevanceListOutputVO[]>({
    url: `/dataCenterApi/EnumValueInfoRelevance/GetList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 枚举Id精准查询子级接口 GET /EnumValueInfoRelevance/GetRelevanceWithId */
export async function EnumValueInfoRelevanceGetRelevanceWithIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoRelevanceGetRelevanceWithIdGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.RelevanceWithIdOutputUnifyPageResultDto>({
    url: `/dataCenterApi/EnumValueInfoRelevance/GetRelevanceWithId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举关联关系模糊查询接口 GET /EnumValueInfoRelevance/Page */
export async function EnumValueInfoRelevanceGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoRelevanceGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoRelevanceOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/EnumValueInfoRelevance/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
