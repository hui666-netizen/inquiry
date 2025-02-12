// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取航司路径维护信息详情 POST /AirlinesPath/GetAirlinesPathInfo */
export async function AirlinesPathGetAirlinesPathInfoPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirlinesPathOutput>({
    url: `/dataCenterApi/AirlinesPath/GetAirlinesPathInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取航司路径维护信息列表 POST /AirlinesPath/GetAirlinesPathList */
export async function AirlinesPathGetAirlinesPathListPOST(
  body: DataCenterAPI.GetAirlinesPathInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAirlinesPathOutputUnifyPageResultDto>({
    url: `/dataCenterApi/AirlinesPath/GetAirlinesPathList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新航司路径维护 POST /AirlinesPath/UpdateAirlinesPath */
export async function AirlinesPathUpdateAirlinesPathPOST(
  body: DataCenterAPI.UpdateAirlinesPathInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/AirlinesPath/UpdateAirlinesPath`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
