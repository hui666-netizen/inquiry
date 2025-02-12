// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /fieldConfig/create */
export async function PostFieldConfigCreate(
  body: {
    field_label: string;
    field_component: { '1'?: number };
    remark?: string;
    module_id: string;
    field_sort?: string;
    field_type?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.fieldConfigModelResult }>({
    url: `/devops/fieldConfig/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /fieldConfig/delete */
export async function PostFieldConfigDelete(
  body: {
    field_id: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.commonResponse>({
    url: `/devops/fieldConfig/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /fieldConfig/detail */
export async function GetFieldConfigDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetFieldConfigDetailParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.fieldConfigModelResult }>({
    url: `/devops/fieldConfig/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取指定模块固定字段集合 GET /fieldConfig/getFixedList */
export async function GetFieldConfigGetFixedList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetFieldConfigGetFixedListParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.fieldConfigModelResult[] }>({
    url: `/devops/fieldConfig/getFixedList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据fieldName获取集合 POST /fieldConfig/getListByFieldName */
export async function PostFieldConfigGetListByFieldName(
  body: {
    fieldNameList: string[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.fieldConfigModelResult[] }>({
    url: `/devops/fieldConfig/getListByFieldName`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表无分页&按照field_type分组（不显示allow_setting=0的数据） GET /fieldConfig/getListGroupByModuleId */
export async function GetFieldConfigGetListGroupByModuleId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetFieldConfigGetListGroupByModuleIdParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: { sys?: API.fieldConfigModelResult[]; customer?: API.fieldConfigModelResult[] };
  }>({
    url: `/devops/fieldConfig/getListGroupByModuleId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列表 GET /fieldConfig/pageQuery */
export async function GetFieldConfigPageQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetFieldConfigPageQueryParams,
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
      data?: API.fieldConfigModelResult[];
    };
  }>({
    url: `/devops/fieldConfig/pageQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改 POST /fieldConfig/update */
export async function PostFieldConfigUpdate(
  body: {
    field_id: string;
    field_label?: string;
    field_component?: { '1'?: number };
    remark?: string;
    field_sort?: string;
    field_type?: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.fieldConfigModelResult }>({
    url: `/devops/fieldConfig/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
