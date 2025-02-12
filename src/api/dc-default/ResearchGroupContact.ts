// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 联系人精准查询接口 GET /ResearchGroupContact/Details */
export async function ResearchGroupContactGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ResearchGroupContactGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetResearchGroupContactOutputValueObject>({
    url: `/dataCenterApi/ResearchGroupContact/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 联系人更新接口 POST /ResearchGroupContact/Edit */
export async function ResearchGroupContactEditPOST(
  body: DataCenterAPI.EditResearchGroupContactInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/ResearchGroupContact/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 联系人模糊查询接口 GET /ResearchGroupContact/Page */
export async function ResearchGroupContactGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ResearchGroupContactGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetResearchGroupContactOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/ResearchGroupContact/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
