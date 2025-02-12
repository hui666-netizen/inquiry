// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取战险详情 POST /WarRisk/GetWarRiskInfo */
export async function WarRiskGetWarRiskInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetWarRiskOutput>({
    url: `/dataCenterApi/WarRisk/GetWarRiskInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取战险列表 POST /WarRisk/GetWarRiskList */
export async function WarRiskGetWarRiskListPOST(
  body: DataCenterAPI.GetWarRiskInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetWarRiskOutputUnifyPageResultDtoUnifyResultDto>({
    url: `/dataCenterApi/WarRisk/GetWarRiskList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新战险 POST /WarRisk/UpdateWarRisk */
export async function WarRiskUpdateWarRiskPOST(
  body: DataCenterAPI.UpdateWarRiskInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/WarRisk/UpdateWarRisk`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
