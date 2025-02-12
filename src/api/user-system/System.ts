// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 09迭代，内部员工，在维护客户的主账号时，下拉框里可选择的外部子系统。 根据传入的内部子系统过滤。为空时返回所有的外部子系统，不为空时，返回该内部子系统关联的外部子系统 POST /System/GetAuthExternalSystemListByMaintainCustomerAccount */
export async function SystemGetAuthExternalSystemListByMaintainCustomerAccountPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetAuthExternalSystemListByMaintainCustomerAccountPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemListOutput[]>({
    url: `/userApi/System/GetAuthExternalSystemListByMaintainCustomerAccount`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 08迭代，员工登录，可访问的内部子系统列表 POST /System/GetAuthSystemListByLogin */
export async function SystemGetAuthSystemListByLoginPOST(
  body: UserApi.GetAuthSystemListByLoginInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemListOutput[]>({
    url: `/userApi/System/GetAuthSystemListByLogin`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 选择子系统，根据员工查询业务主体信息 中转点击查询 GET /System/GetBusinessBySystem */
export async function SystemGetBusinessBySystemGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetBusinessBySystemGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.BusinessInfo[]>({
    url: `/userApi/System/GetBusinessBySystem`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取类型为公司的 组织信息 POST /System/GetCompanyOrg */
export async function SystemGetCompanyOrgPOST(options?: { [key: string]: any }) {
  return request<UserApi.GetSystemOrgOutput[]>({
    url: `/userApi/System/GetCompanyOrg`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据选择的关联公司 查询其下的 在职员工信息 POST /System/GetEmployeeByCompany */
export async function SystemGetEmployeeByCompanyPOST(
  body: UserApi.GetEmployeeByCompanyInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.MainAccountOutput[]>({
    url: `/userApi/System/GetEmployeeByCompany`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据外部子系统Id查询关联的内部子系统及内部子系统的运营主体公司id及名称 GET /System/GetInternalInfo */
export async function SystemGetInternalInfoGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetInternalInfoGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetInternalInfoOutput>({
    url: `/userApi/System/GetInternalInfo`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据域名取子系统 POST /System/GetSubSystemIdByKey */
export async function SystemGetSubSystemIdBykeyPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetSubSystemIdBykeyPOSTParams,
  options?: { [key: string]: any },
) {
  return request<number>({
    url: `/userApi/System/GetSubSystemIdByKey`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取子系统是否允许欠费下单 GET /System/GetSubSystemIsAllowPlaceOrder */
export async function SystemGetSubSystemIsAllowPlaceOrderGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetSubSystemIsAllowPlaceOrderGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/System/GetSubSystemIsAllowPlaceOrder`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /System/GetSystemAssociatedCompanies */
export async function SystemGetSystemAssociatedCompaniesPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetSystemAssociatedCompaniesPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetCompanyOutUnifyResultDto>({
    url: `/userApi/System/GetSystemAssociatedCompanies`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 维护子系统信息授权用户查询 POST /System/GetSystemAuthUserInfo */
export async function SystemGetSystemAuthUserInfoPOST(
  body: UserApi.InputOrOutputBasicId,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemAuthUserInfoOutput[]>({
    url: `/userApi/System/GetSystemAuthUserInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据类型获取启用的子系统信息 POST /System/GetSystemDropdownList */
export async function SystemGetSystemDropdownListPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetSystemDropdownListPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.DropdownListDataDto[]>({
    url: `/userApi/System/GetSystemDropdownList`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取子系统下拉分页信息 POST /System/GetSystemDropDownListByPage */
export async function SystemGetSystemDropDownListByPagePOST(
  body: UserApi.GetSystemDropDownListByPageInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/System/GetSystemDropDownListByPage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询子系统信息,启用参数未传默认查询启用 POST /System/GetSystemList */
export async function SystemGetSystemListPOST(
  body: UserApi.GetSystemListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemListOutputUnifyPageResultDto>({
    url: `/userApi/System/GetSystemList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询子系统信息-不分页 POST /System/GetSystemNotPageList */
export async function SystemGetSystemNotPageListPOST(
  body: UserApi.GetSystemNotPageListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemListOutput[]>({
    url: `/userApi/System/GetSystemNotPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取该子系统已关联的 公司信息 POST /System/GetSystemOrg */
export async function SystemGetSystemOrgPOST(
  body: UserApi.GetSystemOrgInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemOrgOutput[]>({
    url: `/userApi/System/GetSystemOrg`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据子系统id集合 获取该子系统已关联的公司信息 POST /System/GetSystemOrgList */
export async function SystemGetSystemOrgListPOST(
  body: UserApi.GetSystemOrgListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSystemOrgOutput[]>({
    url: `/userApi/System/GetSystemOrgList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /System/GetSystemToken */
export async function SystemGetSystemTokenPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.SystemGetSystemTokenPOSTParams,
  options?: { [key: string]: any },
) {
  return request<string>({
    url: `/userApi/System/GetSystemToken`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 维护子系统信息 POST /System/MaintainSystem */
export async function SystemMaintainSystemPOST(
  body: UserApi.MaintainSystemInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDto>({
    url: `/userApi/System/MaintainSystem`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 维护子系统信息授权用户 POST /System/MaintainSystemUser */
export async function SystemMaintainSystemUserPOST(
  body: UserApi.MaintainSystemUserInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/System/MaintainSystemUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
