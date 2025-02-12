// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 校验国家热门数据是否重复 POST /NationalHotdata/CheckNationalHotdata */
export async function NationalHotdataCheckNationalHotdataPOST(
  body: DataCenterAPI.NationalHotdataValidInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/NationalHotdata/CheckNationalHotdata`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID批量删除国家热门数据配置数据 POST /NationalHotdata/DelNationalHotdataByIds */
export async function NationalHotdataDelNationalHotdataByIdsPOST(
  body: DataCenterAPI.DelNationalHotdataInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/NationalHotdata/DelNationalHotdataByIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据国家+进出口获取空港,航司,海港,船司数据 GET /NationalHotdata/GetNationalHotdataByCountryAndInOut */
export async function NationalHotdataGetNationalHotdataByCountryAndInOutGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.NationalHotdataGetNationalHotdataByCountryAndInOutGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.NationalHotdataEditInput>({
    url: `/dataCenterApi/NationalHotdata/GetNationalHotdataByCountryAndInOut`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取国家热门数据配置列表 POST /NationalHotdata/GetNationalHotdataPageList */
export async function NationalHotdataGetNationalHotdataPageListPOST(
  body: DataCenterAPI.GetNationalHotdataListInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetNationalHotdataListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/NationalHotdata/GetNationalHotdataPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 国家热门配置数据保存接口 POST /NationalHotdata/Save */
export async function NationalHotdataSavePOST(
  body: DataCenterAPI.NationalHotdataEditInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/NationalHotdata/Save`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
