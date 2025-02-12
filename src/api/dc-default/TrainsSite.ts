// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 铁运站台下拉数据源
 * Type = -1,
港口 Type=1,
城市 Type = 4,
省份 Type = 5,
国家 Type = 2,
区域 Type = 3
航线 Type = 6 POST /TrainsSite/GetPageForDropDownList */
export async function TrainsSiteGetPageForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTrainsSiteDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/TrainsSite/GetPageForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取铁运站点详情 POST /TrainsSite/GetTrainsSiteInfo */
export async function TrainsSiteGetTrainsSiteInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTrainsSiteInfoOutput>({
    url: `/dataCenterApi/TrainsSite/GetTrainsSiteInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取铁运站点列表 POST /TrainsSite/GetTrainsSiteList */
export async function TrainsSiteGetTrainsSiteListPOST(
  body: DataCenterAPI.GetTrainsSiteInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetTrainsSiteOutputUnifyPageResultDto>({
    url: `/dataCenterApi/TrainsSite/GetTrainsSiteList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新铁运站点 POST /TrainsSite/UpdateTrainsSite */
export async function TrainsSiteUpdateTrainsSitePOST(
  body: DataCenterAPI.UpdateTrainsSiteInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/TrainsSite/UpdateTrainsSite`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
