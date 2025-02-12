// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取航司货站详情 POST /AirCompanyCargo/GetAirCompanyCargoInfo */
export async function AirCompanyCargoGetAirCompanyCargoInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirCompanyCargoOutput>({
    url: `/dataCenterApi/AirCompanyCargo/GetAirCompanyCargoInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取航司货站列表 POST /AirCompanyCargo/GetAirCompanyCargoList */
export async function AirCompanyCargoGetAirCompanyCargoListPOST(
  body: DataCenterAPI.GetAirCompanyCargoInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirCompanyCargoOutputUnifyPageResultDto>({
    url: `/dataCenterApi/AirCompanyCargo/GetAirCompanyCargoList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新航司货站信息 POST /AirCompanyCargo/UpdateAirCompanyCargo */
export async function AirCompanyCargoUpdateAirCompanyCargoPOST(
  body: DataCenterAPI.UpdateAirCompanyCargoInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/AirCompanyCargo/UpdateAirCompanyCargo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
