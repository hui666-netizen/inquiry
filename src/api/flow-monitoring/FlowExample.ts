// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 创建 POST /FlowExample/Create */
export async function FlowExampleCreatePOST(
  body: API.CreateFlowExampleInput,
  options?: { [key: string]: any },
) {
  return request<API.IdBaseDto>({
    url: `/flowApi/FlowExample/Create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 PUT /FlowExample/Delete */
export async function FlowExampleDeletePUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleDeletePUTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/flowApi/FlowExample/Delete`,
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除流程实例同步 PUT /FlowExample/DeleteSync */
export async function FlowExampleDeleteSyncPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleDeleteSyncPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.IdBaseDto>({
    url: `/flowApi/FlowExample/DeleteSync`,
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询流程实例节点审批人信息 POST /FlowExample/GetApprover */
export async function FlowExampleGetApproverPOST(
  body: API.GetApproverInput,
  options?: { [key: string]: any },
) {
  return request<API.GetApproverOutput[]>({
    url: `/flowApi/FlowExample/GetApprover`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据业务id和流程编号查询流程实例信息 GET /FlowExample/GetDetailByBusinessIdAndFlowCode */
export async function FlowExampleGetDetailByBusinessIdAndFlowCodeGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleGetDetailByBusinessIdAndFlowCodeGETParams,
  options?: { [key: string]: any },
) {
  return request<API.GetFlowExampleDetailOutput>({
    url: `/flowApi/FlowExample/GetDetailByBusinessIdAndFlowCode`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 精确查询 GET /FlowExample/GetDetailById */
export async function FlowExampleGetDetailByIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleGetDetailByIdGETParams,
  options?: { [key: string]: any },
) {
  return request<API.GetFlowExampleDetailOutput>({
    url: `/flowApi/FlowExample/GetDetailById`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 流程监控列表 GET /FlowExample/GetPage */
export async function FlowExampleGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<API.GetFlowExamplePageOutputValueObjectUnifyPageResultDto>({
    url: `/flowApi/FlowExample/GetPage`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 个人流程列表 POST /FlowExample/GetPersonalPage */
export async function FlowExampleGetPersonalPagePOST(
  body: API.GetPersonalFlowPageInputValueObject,
  options?: { [key: string]: any },
) {
  return request<API.GetPersonalFlowPageOutputValueObjectUnifyPageResultDto>({
    url: `/flowApi/FlowExample/GetPersonalPage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取流程实例相关人员 GET /FlowExample/GetPersonnel */
export async function FlowExampleGetPersonnelGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleGetPersonnelGETParams,
  options?: { [key: string]: any },
) {
  return request<number[]>({
    url: `/flowApi/FlowExample/GetPersonnel`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 流程预计算结果 GET /FlowExample/GetPrecomputation */
export async function FlowExampleGetPrecomputationGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleGetPrecomputationGETParams,
  options?: { [key: string]: any },
) {
  return request<API.GetPrecomputationOutput[]>({
    url: `/flowApi/FlowExample/GetPrecomputation`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取未处理的流程列表 GET /FlowExample/GetUnprocessedProcess */
export async function FlowExampleGetUnprocessedProcessGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleGetUnprocessedProcessGETParams,
  options?: { [key: string]: any },
) {
  return request<API.GetUnprocessedProcessVoUnifyPageResultDto>({
    url: `/flowApi/FlowExample/GetUnprocessedProcess`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 作废 PUT /FlowExample/Repeal */
export async function FlowExampleRepealPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.FlowExampleRepealPUTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/flowApi/FlowExample/Repeal`,
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 流程实例同步 POST /FlowExample/Sync */
export async function FlowExampleSyncPOST(
  body: API.SyncFlowExampleInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/flowApi/FlowExample/Sync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
