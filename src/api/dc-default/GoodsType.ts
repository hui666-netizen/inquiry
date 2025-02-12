// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 计算方式下拉列表 POST /GoodsType/GetCalculationDropdownList */
export async function GoodsTypeGetCalculationDropdownListPOST(options?: { [key: string]: any }) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/GoodsType/GetCalculationDropdownList`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取货物详情 POST /GoodsType/GetGoodsTypeInfo */
export async function GoodsTypeGetGoodsTypeInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGoodsTypeOutput>({
    url: `/dataCenterApi/GoodsType/GetGoodsTypeInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取货物类型列表 POST /GoodsType/GetGoodsTypeList */
export async function GoodsTypeGetGoodsTypeListPOST(
  body: DataCenterAPI.GetGoodsTypeListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetGoodsTypeOutputUnifyPageResultDto>({
    url: `/dataCenterApi/GoodsType/GetGoodsTypeList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新货物类型 POST /GoodsType/UpdateGoodsType */
export async function GoodsTypeUpdateGoodsTypePOST(
  body: DataCenterAPI.UpdateGoodsTypeInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/GoodsType/UpdateGoodsType`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
