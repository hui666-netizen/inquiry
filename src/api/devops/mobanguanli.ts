// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 复制 POST /template/copy */
export async function PostTemplateCopy(
  body: {
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/template/copy`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /template/create */
export async function PostTemplateCreate(
  body: {
    template_name: string;
    template_content: { '1'?: number };
    module_id: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.templateResult }>({
    url: `/devops/template/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取默认模板详情 GET /template/defaultTempDetail */
export async function GetTemplateDefaultTempDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetTemplateDefaultTempDetailParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.templateResult }>({
    url: `/devops/template/defaultTempDetail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除 POST /template/delete */
export async function PostTemplateDelete(
  body: {
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/template/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /template/detail */
export async function GetTemplateDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetTemplateDetailParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.templateResult }>({
    url: `/devops/template/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 启用 POST /template/enable */
export async function PostTemplateEnable(
  body: {
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.templateResult }>({
    url: `/devops/template/enable`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /template/pageQuery */
export async function GetTemplatePageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetTemplatePageQueryParams,
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
      data?: API.templateResult[];
    };
  }>({
    url: `/devops/template/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改 POST /template/update */
export async function PostTemplateUpdate(
  body: {
    id: string;
    template_name: string;
    template_content: { '1'?: number };
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.templateResult }>({
    url: `/devops/template/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
