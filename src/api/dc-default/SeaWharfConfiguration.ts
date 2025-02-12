// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 校验码头数据是否重复 POST /SeaExportWharf/CheckSeaOutwharf */
export async function SeaWharfConfigurationCheckSeaOutwharfPOST(
  body: DataCenterAPI.SeaOutwharfValidInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/SeaExportWharf/CheckSeaOutwharf`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID批量删除海运出口码头配置数据 POST /SeaExportWharf/DelSeaExportWharfByIds */
export async function SeaWharfConfigurationDelSeaExportWharfByIdsPOST(
  body: DataCenterAPI.DelSeaExportWharfInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/SeaExportWharf/DelSeaExportWharfByIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID获取海运出口码头配置详情 GET /SeaExportWharf/GetSeaExportWharfDetailById */
export async function SeaWharfConfigurationGetSeaExportWharfDetailByIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaWharfConfigurationGetSeaExportWharfDetailByIdGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaOutwharfDetailOutput>({
    url: `/dataCenterApi/SeaExportWharf/GetSeaExportWharfDetailById`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取海运出口码头配置列表 POST /SeaExportWharf/GetSeaOutwharfPageList */
export async function SeaWharfConfigurationGetSeaOutwharfPageListPOST(
  body: DataCenterAPI.GetSeaExportWharfListInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaOutwharfListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/SeaExportWharf/GetSeaOutwharfPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 海运出口码头配置数据保存接口 POST /SeaExportWharf/Save */
export async function SeaWharfConfigurationSavePOST(
  body: DataCenterAPI.SeaOutwharfEditInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/SeaExportWharf/Save`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
