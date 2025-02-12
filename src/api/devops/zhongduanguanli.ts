// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /client/create */
export async function PostClientCreate(
  body: {
    client_name: string;
    extends: Record<string, any>;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.clientResult }>({
    url: `/devops/client/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /client/delete */
export async function PostClientDelete(
  body: {
    client_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/client/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /client/detail */
export async function GetClientDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetClientDetailParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.clientResult }>({
    url: `/devops/client/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 禁用 POST /client/disable */
export async function PostClientDisable(
  body: {
    client_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/client/disable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用 POST /client/enable */
export async function PostClientEnable(
  body: {
    client_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/client/enable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /client/pageQuery */
export async function GetClientPageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetClientPageQueryParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      total?: string;
      per_page?: string;
      current_page?: string;
      last_page?: string;
      data?: API.clientResult[];
    };
  }>({
    url: `/devops/client/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 终端下拉框数据 GET /client/selector */
export async function GetClientSelector(options?: { [key: string]: any }) {
  return request<{ code: number; message: string; data: { label?: string; value?: number }[] }>({
    url: `/devops/client/selector`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改 POST /client/update */
export async function PostClientUpdate(
  body: {
    client_name?: string;
    extends?: { '1'?: number };
    client_id: string;
    version: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.clientResult }>({
    url: `/devops/client/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
