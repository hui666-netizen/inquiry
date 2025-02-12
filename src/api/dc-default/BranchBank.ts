// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 银行支行精准查询接口 GET /BranchBank/Details */
export async function BranchBankGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.BranchBankGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetBranchBankOutput>({
    url: `/dataCenterApi/BranchBank/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 银行支行更新接口 POST /BranchBank/Edit */
export async function BranchBankEditPOST(
  body: DataCenterAPI.EditBranchBankInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/BranchBank/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 银行支行模糊查询接口 GET /BranchBank/Page */
export async function BranchBankGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.BranchBankGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetBranchBankOutputUnifyPageResultDto>({
    url: `/dataCenterApi/BranchBank/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
