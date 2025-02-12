// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增 POST /iterate/flowStatus/create */
export async function PostIterateFlowStatusCreate(
  body: {
    project_id: number;
    status_flow_name: string;
    flow_process_id: number;
    status_flow_desc: string;
    flow_status_collection: {
      status_enum_id?: number;
      status_type?: number;
      process_node_ids?: number[];
    }[];
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/iterate/flowStatus/create`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /iterate/flowStatus/delete */
export async function PostIterateFlowStatusDelete(
  body: {
    flow_status_ids: string[];
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/iterate/flowStatus/delete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情 GET /iterate/flowStatus/detail */
export async function GetIterateFlowStatusDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateFlowStatusDetailParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: {
      flow_status_id?: number;
      create_by?: number;
      create_by_name?: string;
      create_at?: string;
      update_by?: number;
      update_by_name?: string;
      update_at?: string;
      flow_process_id?: number;
      status_flow_name?: string;
      status_flow_desc?: string;
      project_id?: number;
      flow_status_collection?: {
        status_type_text?: string;
        status_text_id?: number;
        status_enum_id?: number;
        status_type?: number;
        status_enum_name?: string;
        flow_status_node_relation?: { process_node_name?: string; process_node_id?: number }[];
      }[];
      flow_process_info: { flow_process_id?: number; flow_process_name?: string };
    };
  }>({
    url: `/devops/iterate/flowStatus/detail`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列表 GET /iterate/flowStatus/listQuery */
export async function GetIterateFlowStatusListQuery(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetIterateFlowStatusListQueryParams,
  options?: { [key: string]: any },
) {
  return request<{
    code: number;
    message: string;
    data: { flow_status_id?: number; status_flow_name?: string }[];
  }>({
    url: `/devops/iterate/flowStatus/listQuery`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 状态类型下拉数据 GET /iterate/flowStatus/selectorStatusType */
export async function GetIterateFlowStatusSelectorStatusType(options?: { [key: string]: any }) {
  return request<{ code: number; message: string; data: { label?: string; value?: string }[] }>({
    url: `/devops/iterate/flowStatus/selectorStatusType`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 编辑 POST /iterate/flowStatus/update */
export async function PostIterateFlowStatusUpdate(
  body: {
    flow_status_id: number;
    status_flow_name: string;
    flow_process_id: number;
    status_flow_desc: string;
    flow_status_collection: {
      status_enum_id?: number;
      status_type?: number;
      process_node_ids?: number[];
    }[];
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/iterate/flowStatus/update`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
