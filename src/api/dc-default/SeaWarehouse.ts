// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 唯一校验 POST /Check */
export async function SeaWarehouseCheckPOST(
  body: DataCenterAPI.EditCheckSeaWarehouseInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/Check`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /DelSeaWarehouse */
export async function SeaWarehouseDelSeaWarehousePOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/DelSeaWarehouse`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑 POST /EditAirInDDPLocalFee */
export async function SeaWarehouseEditSeaWarehousePOST(
  body: DataCenterAPI.EditSeaWarehouseInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/EditAirInDDPLocalFee`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 POST /GetSeaWarehouseDetail */
export async function SeaWarehouseGetSeaWarehouseDetailPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaWarehouseGetSeaWarehouseDetailPOSTParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaWarehouseOutput>({
    url: `/dataCenterApi/GetSeaWarehouseDetail`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下拉框查询 POST /GetSeaWarehouseDropDownList */
export async function SeaWarehouseGetSeaWarehouseDropDownListPOST(
  body: DataCenterAPI.GetSeaWarehouseDropDownListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaWarehouseOutputUnifyPageResultDto>({
    url: `/dataCenterApi/GetSeaWarehouseDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表查询 POST /GetSeaWarehouseListByPage */
export async function SeaWarehouseGetSeaWarehouseListByPagePOST(
  body: DataCenterAPI.GetSeaWarehouseInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaWarehouseOutputUnifyPageResultDto>({
    url: `/dataCenterApi/GetSeaWarehouseListByPage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
