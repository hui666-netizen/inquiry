// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 课题组精准查询接口 GET /ResearchGroup/Details */
export async function ResearchGroupGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ResearchGroupGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetResearchGroupOutputValueObject>({
    url: `/dataCenterApi/ResearchGroup/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 课题组更新接口 POST /ResearchGroup/Edit */
export async function ResearchGroupEditPOST(
  body: DataCenterAPI.EditResearchGroupInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/ResearchGroup/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 课题组模糊查询接口 GET /ResearchGroup/Page */
export async function ResearchGroupGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ResearchGroupGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetResearchGroupOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/ResearchGroup/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
