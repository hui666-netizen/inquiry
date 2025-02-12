// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /project/iterationCategory/create */
export async function PostProjectIterationCategoryCreate(
  body: {
    project_id: number;
    category_name: string;
    category_en_name: string;
    icon: string;
    template_id: number;
    workflow_id: number;
    workflow_path_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/project/iterationCategory/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /project/iterationCategory/delete */
export async function PostProjectIterationCategoryDelete(
  body: {
    category_ids: string[];
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/project/iterationCategory/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /project/iterationCategory/detail */
export async function GetProjectIterationCategoryDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetProjectIterationCategoryDetailParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/project/iterationCategory/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 状态禁用 POST /project/iterationCategory/disable */
export async function PostProjectIterationCategoryDisable(
  body: {
    category_ids: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/project/iterationCategory/disable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 状态启用 POST /project/iterationCategory/enable */
export async function PostProjectIterationCategoryEnable(
  body: {
    category_ids: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/project/iterationCategory/enable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /project/iterationCategory/listQuery */
export async function GetProjectIterationCategoryListQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetProjectIterationCategoryListQueryParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      iteration_category_id?: number;
      category_name?: string;
      category_en_name?: string;
      icon?: string;
      template_id?: number;
      workflow_id?: number;
      workflow_path_id?: number;
      project_id?: number;
      is_enable?: number;
      template_text?: string;
      workflow_text?: string;
      workflow_path_text?: string;
    }[];
  }>({
    url: `/devops/project/iterationCategory/listQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 POST /project/iterationCategory/update */
export async function PostProjectIterationCategoryUpdate(
  body: {
    project_id: number;
    category_id: number;
    category_name: string;
    category_en_name: string;
    icon: string;
    template_id: number;
    workflow_id: number;
    workflow_path_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/project/iterationCategory/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
