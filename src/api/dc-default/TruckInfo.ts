// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 车辆更新1 POST /TruckInfo/Edit */
export async function TruckInfoEditPOST(
  body: DataCenterAPI.EditTruckDriverInfoInput,
  options?: { [key: string]: any },
) {
  return request<number>({
    url: `/dataCenterApi/TruckInfo/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 车辆详情 GET /TruckInfo/GetDetails */
export async function TruckInfoGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.TruckInfoGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTruckInfoPageOutputVO>({
    url: `/dataCenterApi/TruckInfo/GetDetails`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 车辆列表查询 POST /TruckInfo/GetPageList */
export async function TruckInfoGetPageListPOST(
  body: DataCenterAPI.GetTruckInfoPageIntputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTruckInfoPageOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/TruckInfo/GetPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 车辆状态更新 POST /TruckInfo/UpdateState */
export async function TruckInfoUpdateStatePOST(
  body: DataCenterAPI.UpdateTruckInfoStateInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/TruckInfo/UpdateState`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
