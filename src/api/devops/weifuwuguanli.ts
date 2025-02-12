// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /microservice/create */
export async function PostMicroserviceCreate(
  body: {
    microservice_name: string;
    extends: Record<string, any>;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.microserviceResult }>({
    url: `/devops/microservice/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /microservice/delete */
export async function PostMicroserviceDelete(
  body: {
    microservice_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/microservice/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /microservice/detail */
export async function GetMicroserviceDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetMicroserviceDetailParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.microserviceResult }>({
    url: `/devops/microservice/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 禁用 POST /microservice/disable */
export async function PostMicroserviceDisable(
  body: {
    microservice_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/microservice/disable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用 POST /microservice/enable */
export async function PostMicroserviceEnable(
  body: {
    microservice_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/microservice/enable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /microservice/pageQuery */
export async function GetMicroservicePageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetMicroservicePageQueryParams,
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
      data?: API.microserviceResult[];
    };
  }>({
    url: `/devops/microservice/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 微服务下拉框数据 GET /microservice/selector */
export async function GetMicroserviceSelector(options?: { [key: string]: any }) {
  return request<{ code: number; message: string; data: { label?: string; value?: number }[] }>({
    url: `/devops/microservice/selector`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 修改 POST /microservice/update */
export async function PostMicroserviceUpdate(
  body: {
    microservice_name?: string;
    extends?: { '1'?: number };
    microservice_id: number;
    version: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.microserviceResult }>({
    url: `/devops/microservice/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
