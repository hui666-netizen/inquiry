// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取航班详情 POST /Flight/GetFlightInfo */
export async function FlightGetFlightInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFlightOutput>({
    url: `/dataCenterApi/Flight/GetFlightInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取航班列表 POST /Flight/GetFlightList */
export async function FlightGetFlightListPOST(
  body: DataCenterAPI.GetFlightInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFlightOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Flight/GetFlightList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新航班信息 POST /Flight/UpdateFlight */
export async function FlightUpdateFlightPOST(
  body: DataCenterAPI.UpdateFlightInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/Flight/UpdateFlight`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
