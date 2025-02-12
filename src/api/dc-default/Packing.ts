// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取包装信息列表 POST /Packing/GetPackingDropDownList */
export async function PackingGetPackingDropDownListPOST(
  body: DataCenterAPI.GetPackingDropDownInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetPackingDropDownOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/Packing/GetPackingDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取包装信息详情 POST /Packing/GetPackingInfo */
export async function PackingGetPackingInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetPackingOutput>({
    url: `/dataCenterApi/Packing/GetPackingInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取包装信息列表 POST /Packing/GetPackingList */
export async function PackingGetPackingListPOST(
  body: DataCenterAPI.GetPackingInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetPackingOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Packing/GetPackingList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新包装信息 POST /Packing/UpdatePacking */
export async function PackingUpdatePackingPOST(
  body: DataCenterAPI.UpdatePakcingInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/Packing/UpdatePacking`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
