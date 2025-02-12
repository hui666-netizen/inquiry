// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取详情接口 POST /FlightTruck/GetFlightTruckInfo */
export async function FlightTruckGetFlightTruckInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFlightTruckOutput>({
    url: `/dataCenterApi/FlightTruck/GetFlightTruckInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取航班卡车时刻列表 POST /FlightTruck/GetFlightTruckList */
export async function FlightTruckGetFlightTruckListPOST(
  body: DataCenterAPI.GetFlightTruckListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFlightTruckOutputUnifyPageResultDto>({
    url: `/dataCenterApi/FlightTruck/GetFlightTruckList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新航班卡车时刻 POST /FlightTruck/UpdateFlightTruck */
export async function FlightTruckUpdateFlightTruckPOST(
  body: DataCenterAPI.UpdateFlightTruckInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/FlightTruck/UpdateFlightTruck`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
