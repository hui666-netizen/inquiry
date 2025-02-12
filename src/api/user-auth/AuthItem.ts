// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 此处后端没有提供注释 POST /Auth/GetAuthByClassIdsList */
export async function AuthItemGetAuthByClassIdsPageListPOST(
  body: API.GetAuthByClassIdsListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetAuthListOutputValueObjectUnifyPageResultDto>({
    url: `/userApi/Auth/GetAuthByClassIdsList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色拥有的权限 GET /Auth/GetAuthByRoleIds */
export async function AuthItemGetAuthByRoleIdsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AuthItemGetAuthByRoleIdsGETParams,
  options?: { [key: string]: any },
) {
  return request<API.AuthValueObject[]>({
    url: `/userApi/Auth/GetAuthByRoleIds`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /Auth/GetAuthList */
export async function AuthItemGetAuthItemPageListPOST(
  body: API.GetAuthListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetAuthListOutputValueObjectUnifyPageResultDto>({
    url: `/userApi/Auth/GetAuthList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 角色未拥有的权限 GET /Auth/GetNotAuthByRoleIds */
export async function AuthItemGetNotAuthByRoleIdsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AuthItemGetNotAuthByRoleIdsGETParams,
  options?: { [key: string]: any },
) {
  return request<API.AuthValueObject[]>({
    url: `/userApi/Auth/GetNotAuthByRoleIds`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取角色拥有的权限 GET /Auth/GetPageListByRoleId */
export async function AuthItemGetPageListByRoleIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AuthItemGetPageListByRoleIdGETParams,
  options?: { [key: string]: any },
) {
  return request<API.AuthValueObjectUnifyPageResultDto>({
    url: `/userApi/Auth/GetPageListByRoleId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户拥有的权限 POST /Auth/GetUserAllocatedOfAuthListAsync */
export async function AuthItemGetUserAllocatedOfAuthListPOST(
  body: API.GetUserAllocatedOfAuthTreeListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetUserAuthListOutput[]>({
    url: `/userApi/Auth/GetUserAllocatedOfAuthListAsync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户拥有的权限 分页 POST /Auth/GetUserAuthListAsync */
export async function AuthItemGetUserAuthListPOST(
  body: API.GetUserAuthListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetUserAuthListOutputUnifyPageResultDto>({
    url: `/userApi/Auth/GetUserAuthListAsync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户拥有的目录权限 POST /Auth/GetUserMenuList */
export async function AuthItemGetUserMenuListPOST(
  body: API.GetUserMenuListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetMenuAuthInfo[]>({
    url: `/userApi/Auth/GetUserMenuList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户拥有的权限编码 POST /Auth/GetUserPermissionLinkCode */
export async function AuthItemGetUserPermissionLinkCodePOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AuthItemGetUserPermissionLinkCodePOSTParams,
  options?: { [key: string]: any },
) {
  return request<string[]>({
    url: `/userApi/Auth/GetUserPermissionLinkCode`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户未拥有的权限
有问题，看逻辑就是查的用户已拥有的权限 POST /Auth/GetUserUnassignedOfAuthAsync */
export async function AuthItemGetUserUnassignedOfAuthPOST(
  body: API.GetUserAllocatedOfAuthTreeListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetUserAuthListOutput[]>({
    url: `/userApi/Auth/GetUserUnassignedOfAuthAsync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户未分配的权限 POST /Auth/GetUserUnassignedOfAuthListAsync */
export async function AuthItemGetUserUnassignedOfAuthListPOST(
  body: API.GetUserAllocatedOfAuthTreeListInput,
  options?: { [key: string]: any },
) {
  return request<API.GetUserAuthListOutput[]>({
    url: `/userApi/Auth/GetUserUnassignedOfAuthListAsync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /Auth/MatainAuth */
export async function AuthItemMatainAuthPOST(
  body: API.MaintainAuthInput,
  options?: { [key: string]: any },
) {
  return request<API.IdBaseDto>({
    url: `/userApi/Auth/MatainAuth`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户通过角色转移拥有的权限 GET /AuthItem/GetTransferToUserRoleOfAuth */
export async function AuthItemGetTransferToUserRoleOfAuthGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AuthItemGetTransferToUserRoleOfAuthGETParams,
  options?: { [key: string]: any },
) {
  return request<API.GetUserAuthListOutput[]>({
    url: `/userApi/AuthItem/GetTransferToUserRoleOfAuth`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
