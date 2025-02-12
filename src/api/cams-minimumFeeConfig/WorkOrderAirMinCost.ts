// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 批量删除 POST /WorkOrderAir/MinCost/BatchDelete */
export async function WorkOrderAirMinCostBatchDeletePOST(
  body: CamsApi.BatchDeleteInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/camsApi/WorkOrderAir/MinCost/BatchDelete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 比对直飞单价与最低卖价 POST /WorkOrderAir/MinCost/CompareDirectPriceAndMinPrice */
export async function WorkOrderAirMinCostCompareDirectPriceAndMinPricePOST(
  body: CamsApi.CompareDirectPriceAndMinPriceInput,
  options?: { [key: string]: any },
) {
  return request<string>({
    url: `/camsApi/WorkOrderAir/MinCost/CompareDirectPriceAndMinPrice`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /WorkOrderAir/MinCost/Detail */
export async function WorkOrderAirMinCostGetMinCostDetailGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: CamsApi.WorkOrderAirMinCostGetMinCostDetailGETParams,
  options?: { [key: string]: any },
) {
  return request<CamsApi.GetMinCostDetailOutputVO>({
    url: `/camsApi/WorkOrderAir/MinCost/Detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 POST /WorkOrderAir/MinCost/Edit */
export async function WorkOrderAirMinCostEditMinCostPOST(
  body: CamsApi.EditMinCostInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/camsApi/WorkOrderAir/MinCost/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 POST /WorkOrderAir/MinCost/List */
export async function WorkOrderAirMinCostGetMinCostListPOST(
  body: CamsApi.GetMinCostListInputVO,
  options?: { [key: string]: any },
) {
  return request<CamsApi.GetMinCostListOutputVOUnifyPageResultDto>({
    url: `/camsApi/WorkOrderAir/MinCost/List`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
