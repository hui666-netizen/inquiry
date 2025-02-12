// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取打板费详情 POST /PlayPlateFee/GetPlayPlateFeeInfo */
export async function PlayPlateFeeGetPlayPlateFeeInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetPlayPlateFeeOutput>({
    url: `/dataCenterApi/PlayPlateFee/GetPlayPlateFeeInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取打板费列表 POST /PlayPlateFee/GetPlayPlateFeeList */
export async function PlayPlateFeeGetPlayPlateFeeListPOST(
  body: DataCenterAPI.GetPlayPlateFeeInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetPlayPlateFeeOutputUnifyPageResultDto>({
    url: `/dataCenterApi/PlayPlateFee/GetPlayPlateFeeList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新打板费 POST /PlayPlateFee/UpdatePlayPlateFee */
export async function PlayPlateFeeUpdatePlayPlateFeePOST(
  body: DataCenterAPI.UpdatePlayPlateFeeInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/PlayPlateFee/UpdatePlayPlateFee`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
