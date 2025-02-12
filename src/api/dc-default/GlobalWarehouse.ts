// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 仓库精准查询接口 GET /GlobalWarehouse/GetDetailById */
export async function GlobalWarehouseGetDetailByIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.GlobalWarehouseGetDetailByIdGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGlobalWarehouseOutputValueObject>({
    url: `/dataCenterApi/GlobalWarehouse/GetDetailById`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 仓库模糊查询接口 POST /GlobalWarehouse/GetPageList */
export async function GlobalWarehouseGetPageListPOST(
  body: DataCenterAPI.GetGlobalWarehousePageInputValueObject,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGlobalWarehouseOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/GlobalWarehouse/GetPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 仓库模糊查询接口（提供给FBA订单用） POST /GlobalWarehouse/GetPageListByOrder */
export async function GlobalWarehouseGetPageListByOrderPOST(
  body: DataCenterAPI.GetGlobalWarehousePageInputValueObject,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGlobalWarehouseOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/GlobalWarehouse/GetPageListByOrder`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 仓库更新接口 POST /GlobalWarehouse/Save */
export async function GlobalWarehouseEditPOST(
  body: DataCenterAPI.EditGlobalWarehouseInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/GlobalWarehouse/Save`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 仓库启用禁用 POST /GlobalWarehouse/UpdateWarehouseIsDisabled */
export async function GlobalWarehouseUpdateWarehouseIsDisabledPOST(
  body: DataCenterAPI.UpdateWarehouseIsDisabledInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/GlobalWarehouse/UpdateWarehouseIsDisabled`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
