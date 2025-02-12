// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 费用项目精准查询接口 GET /FeeItem/Details */
export async function FeeItemGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.FeeItemGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFeeItemOutput>({
    url: `/dataCenterApi/FeeItem/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 费用项目更新接口 POST /FeeItem/Edit */
export async function FeeItemEditPOST(
  body: DataCenterAPI.EditFeeItemInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/FeeItem/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 费用项目下拉框接口 GET /FeeItem/GetPageDropDownList */
export async function FeeItemGetPageDropDownListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.FeeItemGetPageDropDownListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFeeItemDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/FeeItem/GetPageDropDownList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 费用项目模糊查询接口 GET /FeeItem/Page */
export async function FeeItemGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.FeeItemGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFeeItemOutputUnifyPageResultDto>({
    url: `/dataCenterApi/FeeItem/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
