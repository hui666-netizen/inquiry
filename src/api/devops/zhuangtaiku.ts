// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /iterate/flowStatusEnum/create */
export async function PostIterateFlowStatusEnumCreate(
  body: {
    project_id: number;
    name: string;
    colour: string;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/iterate/flowStatusEnum/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /iterate/flowStatusEnum/delete */
export async function PostIterateFlowStatusEnumDelete(
  body: {
    status_enum_ids: number[];
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/iterate/flowStatusEnum/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 GET /iterate/flowStatusEnum/listQuery */
export async function GetIterateFlowStatusEnumListQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateFlowStatusEnumListQueryParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      status_enum_id?: number;
      name?: string;
      project_id?: number;
      colour?: string;
      flow_status_text_detail?: { flow_status_id?: number; status_flow_name?: string }[];
    }[];
  }>({
    url: `/devops/iterate/flowStatusEnum/listQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑 POST /iterate/flowStatusEnum/update */
export async function PostIterateFlowStatusEnumUpdate(
  body: {
    status_enum_id: number;
    name: string;
    colour: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: string[] }>({
    url: `/devops/iterate/flowStatusEnum/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
