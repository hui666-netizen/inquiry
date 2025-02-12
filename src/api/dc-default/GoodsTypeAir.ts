// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取航司货物类型详情 POST /GoodsTypeAir/GetGoodsTypeAirInfo */
export async function GoodsTypeAirGetGoodsTypeAirInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGoodsTypeAirOutput>({
    url: `/dataCenterApi/GoodsTypeAir/GetGoodsTypeAirInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取航司货物类型列表 POST /GoodsTypeAir/GetGoodsTypeAirList */
export async function GoodsTypeAirGetGoodsTypeAirListPOST(
  body: DataCenterAPI.GetGoodsTypeAirListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGoodsTypeAirOutputUnifyPageResultDto>({
    url: `/dataCenterApi/GoodsTypeAir/GetGoodsTypeAirList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新航司货物类型 POST /GoodsTypeAir/UpdateGoodsTypAir */
export async function GoodsTypeAirUpdateGoodsTypAirPOST(
  body: DataCenterAPI.UpdateGoodsTypeAirInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/GoodsTypeAir/UpdateGoodsTypAir`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
