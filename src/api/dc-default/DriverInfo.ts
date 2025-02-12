// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 司机详情 GET /DriverInfo/GetDetails */
export async function DriverInfoGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.DriverInfoGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDriverInfoPageOutputVO>({
    url: `/dataCenterApi/DriverInfo/GetDetails`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 司机列表查询 POST /DriverInfo/GetPageList */
export async function DriverInfoGetPageListPOST(
  body: DataCenterAPI.GetDriverInfoPageIntputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDriverInfoPageOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/DriverInfo/GetPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 同步司机信息 POST /DriverInfo/Synchronization */
export async function DriverInfoSynchronizationPOST(options?: { [key: string]: any }) {
  return request<boolean>({
    url: `/dataCenterApi/DriverInfo/Synchronization`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 修改司机信息 POST /DriverInfo/Update */
export async function DriverInfoUpdatePOST(
  body: DataCenterAPI.EditDriverInfoInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/DriverInfo/Update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
