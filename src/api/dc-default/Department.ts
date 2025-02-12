// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 部门院系精准查询接口 GET /Department/Details */
export async function DepartmentGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.DepartmentGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDepartmentOutput>({
    url: `/dataCenterApi/Department/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新 POST /Department/Edit */
export async function DepartmentEditPOST(
  body: DataCenterAPI.EditDepartmentInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Department/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 部门院系模糊查询接口 GET /Department/Page */
export async function DepartmentGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.DepartmentGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetDepartmentOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Department/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
