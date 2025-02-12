// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 币种精准查询接口 GET /Currency/Details */
export async function CurrencyGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CurrencyGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCurrencyOutput>({
    url: `/dataCenterApi/Currency/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 币种更新接口 POST /Currency/Edit */
export async function CurrencyEditPOST(
  body: DataCenterAPI.EditCurrencyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Currency/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过币种代码，获取币种信息 GET /Currency/GetDetailsByCode */
export async function CurrencyGetDetailsByCodeGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CurrencyGetDetailsByCodeGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCurrencyOutput>({
    url: `/dataCenterApi/Currency/GetDetailsByCode`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过币种名称，获取币种信息 GET /Currency/GetDetailsByName */
export async function CurrencyGetDetailsByNameGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CurrencyGetDetailsByNameGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCurrencyOutput>({
    url: `/dataCenterApi/Currency/GetDetailsByName`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 币种下拉框接口 POST /Currency/GetDropDownListPage */
export async function CurrencyGetDropDownListPagePOST(
  body: DataCenterAPI.GetCurrencyDropDownListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCurrencyDropDownListOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/Currency/GetDropDownListPage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 币种模糊查询接口 GET /Currency/Page */
export async function CurrencyGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CurrencyGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetCurrencyOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Currency/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
