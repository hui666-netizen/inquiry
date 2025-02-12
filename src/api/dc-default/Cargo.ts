// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取货站详情 POST /Cargo/GetCargoInfo */
export async function CargoGetCargoInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCargoOutput>({
    url: `/dataCenterApi/Cargo/GetCargoInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取货站列表 POST /Cargo/GetCargoList */
export async function CargoGetCargoListPOST(
  body: DataCenterAPI.GetCargoListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCargoOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Cargo/GetCargoList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新货站信息 POST /Cargo/UpdateCargo */
export async function CargoUpdateCargoPOST(
  body: DataCenterAPI.UpdateCargoInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/Cargo/UpdateCargo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
