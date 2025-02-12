// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /project/projectUser/create */
export async function PostProjectProjectUserCreate(
  body: {
    project_id: number;
    user_ids: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/project/projectUser/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /project/projectUser/pageQuery */
export async function GetProjectProjectUserPageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetProjectProjectUserPageQueryParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      total?: number;
      per_page?: number;
      current_page?: number;
      last_page?: number;
      data?: {
        user_id?: number;
        user_name?: string;
        en_user_name?: string;
        account?: string;
        role_code?: string;
        role_name?: string;
        position_name?: string;
        company_id?: number;
        company_name?: string;
        dept_id?: number;
        dept_name?: string;
        is_enable?: boolean;
        enable_name?: string;
        create_at?: string;
      }[];
    };
  }>({
    url: `/devops/project/projectUser/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户下拉数据 GET /project/projectUser/selectorPageQuery */
export async function GetProjectProjectUserSelectorPageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetProjectProjectUserSelectorPageQueryParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      total?: number;
      per_page?: number;
      current_page?: number;
      last_page?: number;
      data?: {
        user_id?: number;
        user_name?: string;
        en_user_name?: string;
        account?: string;
        role_code?: string;
        role_name?: string;
        position_name?: string;
        company_id?: number;
        company_name?: string;
        dept_id?: number;
        dept_name?: string;
        is_enable?: boolean;
        enable_name?: string;
      }[];
    };
  }>({
    url: `/devops/project/projectUser/selectorPageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
