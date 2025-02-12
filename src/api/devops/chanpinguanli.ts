// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /product/create */
export async function PostProductCreate(
  body: {
    product_name: string;
    extends?: Record<string, any>;
    client_ids?: number[];
    microservice_ids?: number[];
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/product/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /product/delete */
export async function PostProductDelete(
  body: {
    product_ids: number[];
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/product/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /product/detail */
export async function GetProductDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetProductDetailParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      product_id?: number;
      create_by?: number;
      create_by_name?: string;
      create_at?: string;
      update_by?: number;
      update_by_name?: string;
      update_at?: string;
      product_name?: string;
      extends?: string[];
      is_enable?: number;
      fieldList?: string[];
      microservice_info?: { label?: string; value?: number; is_enable?: string }[];
      client_info?: { label?: string; value?: number; is_enable?: string }[];
    };
  }>({
    url: `/devops/product/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 状态禁用 POST /product/disable */
export async function PostProductDisable(
  body: {
    product_ids: number[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/product/disable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 状态启用 POST /product/enable */
export async function PostProductEnable(
  body: {
    product_ids: number[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/product/enable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /product/pageQuery */
export async function GetProductPageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetProductPageQueryParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/product/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 POST /product/update */
export async function PostProductUpdate(
  body: {
    product_id: number;
    product_name: string;
    extends?: Record<string, any>;
    client_ids?: number[];
    microservice_ids?: number[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/product/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
