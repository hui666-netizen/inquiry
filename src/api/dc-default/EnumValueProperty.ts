// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 枚举属性更新接口 POST /EnumValueInfo/EditEnumValueProperty */
export async function EnumValuePropertyEditEnumValuePropertyPOST(
  body: DataCenterAPI.EditEnumValuePropertyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/EnumValueInfo/EditEnumValueProperty`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 枚举属性详情 GET /EnumValueProperty/GetEnumValuePropertyDetial */
export async function EnumValuePropertyGetEnumValuePropertyDetialGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValuePropertyGetEnumValuePropertyDetialGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValuePropertyOutput>({
    url: `/dataCenterApi/EnumValueProperty/GetEnumValuePropertyDetial`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举属性列表 GET /EnumValueProperty/GetEnumValuePropertyPageList */
export async function EnumValuePropertyGetEnumValuePropertyPageListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValuePropertyGetEnumValuePropertyPageListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValuePropertyListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/EnumValueProperty/GetEnumValuePropertyPageList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
