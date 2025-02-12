// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 复制 POST /iterate/workflowDiagram/copy */
export async function PostIterateWorkflowDiagramCopy(
  body: {
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/iterate/workflowDiagram/copy`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /iterate/workflowDiagram/create */
export async function PostIterateWorkflowDiagramCreate(
  body: API.flowProcessReuslt,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: Record<string, any> }>({
    url: `/devops/iterate/workflowDiagram/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /iterate/workflowDiagram/delete */
export async function PostIterateWorkflowDiagramDelete(
  body: {
    flow_process_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/iterate/workflowDiagram/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /iterate/workflowDiagram/detail */
export async function GetIterateWorkflowDiagramDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateWorkflowDiagramDetailParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.flowProcessReuslt }>({
    url: `/devops/iterate/workflowDiagram/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 流程节点下拉数据 GET /iterate/workflowDiagram/nodeSelector */
export async function GetIterateWorkflowDiagramNodeSelector(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateWorkflowDiagramNodeSelectorParams,
  options?: { [key: string]: any },
) {
  return request<API.selector>({
    url: `/devops/iterate/workflowDiagram/nodeSelector`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列表 GET /iterate/workflowDiagram/pageQuery */
export async function GetIterateWorkflowDiagramPageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateWorkflowDiagramPageQueryParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.listResult[] }>({
    url: `/devops/iterate/workflowDiagram/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 流程下拉数据 GET /iterate/workflowDiagram/selector */
export async function GetIterateWorkflowDiagramSelector(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateWorkflowDiagramSelectorParams,
  options?: { [key: string]: any },
) {
  return request<API.selector>({
    url: `/devops/iterate/workflowDiagram/selector`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改 POST /iterate/workflowDiagram/update */
export async function PostIterateWorkflowDiagramUpdate(
  body: API.flowProcessReuslt,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: Record<string, any> }>({
    url: `/devops/iterate/workflowDiagram/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
