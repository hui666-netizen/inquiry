// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 维护目录页面 POST /Menu/Edit */
export async function MenuEditPOST(
  body: UserApi.MaintainMenuInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDto>({
    url: `/userApi/Menu/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据子系统查询权限和权限项 POST /Menu/GetAuthClassifyItemTreeList */
export async function MenuGetAuthClassifyItemTreeListPOST(
  body: UserApi.GetAuthClassifyListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetAuthClassifyItemsTreeListOutput[]>({
    url: `/userApi/Menu/GetAuthClassifyItemTreeList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询目录页面 POST /Menu/GetListMenu */
export async function MenuGetListMenuPOST(
  body: UserApi.GetMenuListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetMenuListOutput[]>({
    url: `/userApi/Menu/GetListMenu`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询目录页面父级信息 返回树形结构 POST /Menu/GetListMenuParent */
export async function MenuGetListMenuParentPOST(
  body: UserApi.GetMenuParentListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetMenuParentListOutput[]>({
    url: `/userApi/Menu/GetListMenuParent`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 子系统获取菜单列表 GET /Menu/GetsubSystemMenuTreeList */
export async function MenuGetsubSystemMenuTreeListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MenuGetsubSystemMenuTreeListGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetMenuParentListOutputListUnifyResultDto>({
    url: `/userApi/Menu/GetsubSystemMenuTreeList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 子系统获取菜单列表 GET /Menu/GetsubSystemMenuTreeListByBizId */
export async function MenuGetsubSystemMenuTreeListByBizIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MenuGetsubSystemMenuTreeListByBizIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetMenuParentListOutputListUnifyResultDto>({
    url: `/userApi/Menu/GetsubSystemMenuTreeListByBizId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取登录菜单信息 GET /Menu/GetUserMenuList */
export async function MenuGetUserMenuListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MenuGetUserMenuListGETParams,
  options?: { [key: string]: any },
) {
  return request<string[]>({
    url: `/userApi/Menu/GetUserMenuList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
