// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 枚举信息精准查询接口 GET /EnumValueInfo/Details */
export async function EnumValueInfoGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoOutput>({
    url: `/dataCenterApi/EnumValueInfo/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举信息更新接口 POST /EnumValueInfo/Edit */
export async function EnumValueInfoEditPOST(
  body: DataCenterAPI.EditEnumValueInfoInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/EnumValueInfo/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 合同中心 查询客户性质 GET /EnumValueInfo/GetCustomerNature */
export async function EnumValueInfoGetCustomerNatureGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetCustomerNatureGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.DropdownListDataDto[]>({
    url: `/dataCenterApi/EnumValueInfo/GetCustomerNature`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询枚举对应选项数据 GET /EnumValueInfo/GetEnumSourceListAsync */
export async function EnumValueInfoGetEnumSourceListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetEnumSourceListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.DropdownListDataDto[]>({
    url: `/dataCenterApi/EnumValueInfo/GetEnumSourceListAsync`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据枚举属性集合批量查询枚举信息接口 POST /EnumValueInfo/GetEnumValueInfoList */
export async function EnumValueInfoGetEnumValueInfoListPOST(
  body: DataCenterAPI.GetEnumValueInfoSelectListInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoListOutput[]>({
    url: `/dataCenterApi/EnumValueInfo/GetEnumValueInfoList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据枚举属性返回枚举（树型） GET /EnumValueInfo/GetEnumValueInfoTreeByPropertys */
export async function EnumValueInfoGetEnumValueInfoTreeByPropertysGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetEnumValueInfoTreeByPropertysGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.EnumValueTreeOutputVO[]>({
    url: `/dataCenterApi/EnumValueInfo/GetEnumValueInfoTreeByPropertys`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 价格因素业务类型枚举查询接口 GET /EnumValueInfo/GetFactorBussinessDropdownList */
export async function EnumValueInfoGetFactorBussinessDropdownListGET(options?: {
  [key: string]: any;
}) {
  return request<DataCenterAPI.DropdownListDataDto[]>({
    url: `/dataCenterApi/EnumValueInfo/GetFactorBussinessDropdownList`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 价格因素系统字段映射枚举查询接口 GET /EnumValueInfo/GetFactorFieldDropdownList */
export async function EnumValueInfoGetFactorFieldDropdownListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetFactorFieldDropdownListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.DropdownListDataDto[]>({
    url: `/dataCenterApi/EnumValueInfo/GetFactorFieldDropdownList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询价格因素选项枚举对应的枚举值 GET /EnumValueInfo/GetFactorOptionDropdownList */
export async function EnumValueInfoGetFactorOptionDropdownListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetFactorOptionDropdownListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.DropdownListDataDtoUnifyPageResultDto>({
    url: `/dataCenterApi/EnumValueInfo/GetFactorOptionDropdownList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 价格因素类型枚举查询接口 GET /EnumValueInfo/GetFactorTypeDropdownList */
export async function EnumValueInfoGetFactorTypeDropdownListGET(options?: { [key: string]: any }) {
  return request<DataCenterAPI.DropdownListDataDto[]>({
    url: `/dataCenterApi/EnumValueInfo/GetFactorTypeDropdownList`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 枚举属性查询接口 GET /EnumValueInfo/GetProperty */
export async function EnumValueInfoGetPropertyGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetPropertyGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoPropertyOutput[]>({
    url: `/dataCenterApi/EnumValueInfo/GetProperty`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举信息通过属性查询关键字及描述接口 GET /EnumValueInfo/List */
export async function EnumValueInfoGetListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoOutput[]>({
    url: `/dataCenterApi/EnumValueInfo/List`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举信息通过属性查询关键字及描述分页接口 GET /EnumValueInfo/ListPage */
export async function EnumValueInfoGetListPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetListPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoOutputUnifyPageResultDto>({
    url: `/dataCenterApi/EnumValueInfo/ListPage`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 枚举信息属性查询接口 GET /EnumValueInfo/PropertyPage */
export async function EnumValueInfoGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.EnumValueInfoGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetEnumValueInfoPropertyOutputUnifyPageResultDto>({
    url: `/dataCenterApi/EnumValueInfo/PropertyPage`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
