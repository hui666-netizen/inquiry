// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 用户表头获取 GET /customerTableConfig/get */
export async function GetCustomerTableConfigGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetCustomerTableConfigGetParams,
  options?: { [key: string]: any },
) {
  return request<{ code: number; message: string; data: API.customerTableConfigResult }>({
    url: `/devops/customerTableConfig/get`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户表头设置 POST /customerTableConfig/save */
export async function PostCustomerTableConfigSave(
  body: {
    table_unique: string;
    user_fields: { '1'?: number };
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/customerTableConfig/save`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 枚举获取 GET /enum/get */
export async function GetEnumGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GetEnumGetParams,
  body: {},
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<{
    code: number;
    message: string;
    data: { enum_code?: string; enum_name?: string; enum_value?: string; enum_type?: number }[];
  }>({
    url: `/devops/enum/get`,
    method: 'GET',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** oss直传服务端签名 GET /oss/policy */
export async function GetOssPolicy(options?: { [key: string]: any }) {
  return request<{
    code: number;
    message: string;
    data: {
      accessid?: string;
      host?: string;
      policy?: string;
      signature?: string;
      expire?: number;
      dir?: string;
      bucket?: string;
    };
  }>({
    url: `/devops/oss/policy`,
    method: 'GET',
    ...(options || {}),
  });
}
