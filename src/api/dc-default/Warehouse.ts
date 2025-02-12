// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 仓库精准查询接口 GET /Warehouse/Details */
export async function WarehouseGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.WarehouseGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetWarehouseOutputValueObject>({
    url: `/dataCenterApi/Warehouse/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 仓库更新接口 POST /Warehouse/Edit */
export async function WarehouseEditPOST(
  body: DataCenterAPI.EditWarehouseInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Warehouse/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 仓库模糊查询接口 GET /Warehouse/Page */
export async function WarehouseGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.WarehouseGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetWarehouseOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/Warehouse/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
