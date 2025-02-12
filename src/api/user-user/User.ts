// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 通过PHP获取飞书用户信息及调用飞书中台获取 业务中台应用的OpenId GET /FeiShuUser/GetFeiSuUserByPHP */
export async function UserGetFeiSuUserByPHPToOAGET(options?: { [key: string]: any }) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/FeiShuUser/GetFeiSuUserByPHP`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据用户Id生成Token GET /User/GeneratorTokenByUserAsync */
export async function UserGeneratorTokenByUserGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGeneratorTokenByUserGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.DoubleTokenUnifyResultDto>({
    url: `/userApi/User/GeneratorTokenByUserAsync`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过用户id获取所有及下级节点下属信息 POST /User/GetAllSubordinateByUserIds */
export async function UserGetAllSubordinateByUserIdsPOST(
  body: UserApi.GetInformationByUserIdsInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserInfoByCustomerOutput[]>({
    url: `/userApi/User/GetAllSubordinateByUserIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 oa 所有人员 POST /User/GetAllUserByOrgId */
export async function UserGetAllUserByOrgIdPOST(
  body: UserApi.GetAllUserByOrgIdInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetAllUserByOrgIdOutput[]>({
    url: `/userApi/User/GetAllUserByOrgId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改是否业务员,发送短信接口 POST /User/GetBuinessSendMessage */
export async function UserEditTheSalesmantoSendsmsPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserEditTheSalesmantoSendsmsPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.BasicResponseDto>({
    url: `/userApi/User/GetBuinessSendMessage`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取与用户关联的公司id POST /User/GetCoIdAssociatedWithUser */
export async function UserGetCoIdAssociatedWithUserPOST(
  body: UserApi.GetCoIdAssociatedWithUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetCoIdAssociatedWithUserOutputListUnifyResultDto>({
    url: `/userApi/User/GetCoIdAssociatedWithUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /User/GetCurrentRequestUser */
export async function UserGetCurrentRequestUserPOST(options?: { [key: string]: any }) {
  return request<UserApi.CurrentUser>({
    url: `/userApi/User/GetCurrentRequestUser`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 当前用户信息 GET /User/GetCurrentUser */
export async function UserGetCurrentUserGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetCurrentUserGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.CurrentUserUnifyResultDto>({
    url: `/userApi/User/GetCurrentUser`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户信息 POST /User/GetCurrentUserBasicInfo */
export async function UserGetCurrentUserBasicInfoPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetCurrentUserBasicInfoPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.CurrentUserInfoUnifyResultDto>({
    url: `/userApi/User/GetCurrentUserBasicInfo`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询指定员工查询包含自己及同级以及所有下级用户，如果员工为空则取当前登录人 POST /User/GetCurrentUserSameAndSubordinateUser */
export async function UserGetCurrentUserSameAndSubordinateUserPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetCurrentUserSameAndSubordinateUserPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameListOutputListUnifyResultDto>({
    url: `/userApi/User/GetCurrentUserSameAndSubordinateUser`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询指定员工查询包含自己以及所有下级用户，如果员工为空则取当前登录人 POST /User/GetCurrentUserSubordinateUser */
export async function UserGetCurrentUserSubordinateUserPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetCurrentUserSubordinateUserPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameListOutputListUnifyResultDto>({
    url: `/userApi/User/GetCurrentUserSubordinateUser`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取飞书信息 POST /User/GetFsAvatar */
export async function UserGetFsInfoPOST(
  body: UserApi.GetFsInfoInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetFsInfoOutputListUnifyResultDto>({
    url: `/userApi/User/GetFsAvatar`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据飞书id和手机号获取飞书用户信息 POST /User/GetFsOpenAndUnionId */
export async function UserGetFsOpenAndUnionIdPOST(
  body: UserApi.GetFsOpenAndUnionIdInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetFsOpenAndUnionIdOutput[]>({
    url: `/userApi/User/GetFsOpenAndUnionId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据组织Ids集合获取组织负责人 GET /User/GetOrgManager */
export async function UserGetOrgManagerGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetOrgManagerGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameListOutputListUnifyResultDto>({
    url: `/userApi/User/GetOrgManager`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过用户Id获取该组织下所有的用户 POST /User/GetOrgUserIdsById */
export async function UserGetOrgUserIdsByIdPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetOrgUserIdsByIdPOSTParams,
  options?: { [key: string]: any },
) {
  return request<number[]>({
    url: `/userApi/User/GetOrgUserIdsById`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过公司Id或部门Id获取对应下所有职员Id POST /User/GetOrgUserIdsByOrgId */
export async function UserGetOrgUserIdsByOrgIdPOST(
  body: UserApi.GetOrgUserIdsInput,
  options?: { [key: string]: any },
) {
  return request<number[]>({
    url: `/userApi/User/GetOrgUserIdsByOrgId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过用户id获取所有组织节点的负责人 POST /User/GetPrincipalByUserIds */
export async function UserGetPrincipalByUserIdsPOST(
  body: UserApi.GetInformationByUserIdsInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetPrincipalByUserIdsOutput[]>({
    url: `/userApi/User/GetPrincipalByUserIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取指定组织的上级中，最近的角色人员 GET /User/GetRoleUser */
export async function UserGetRoleUserGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetRoleUserGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.Int32ListUnifyResultDto>({
    url: `/userApi/User/GetRoleUser`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组织层级角色下的用户 GET /User/GetRoleUserListByOrgId */
export async function UserGetRoleUserListByOrgIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetRoleUserListByOrgIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameBaseValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetRoleUserListByOrgId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取组织层级岗位角色下的用户 GET /User/GetRoleUserListByOrgPositionId */
export async function UserGetRoleUserListByOrgPositionIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetRoleUserListByOrgPositionIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameBaseValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetRoleUserListByOrgPositionId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据岗位id获取角色下用户 GET /User/GetRoleUserListByPositionId */
export async function UserGetRoleUserListByPositionIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetRoleUserListByPositionIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameBaseValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetRoleUserListByPositionId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据个人角色id获取角色下用户 GET /User/GetRoleUserListByRoleId */
export async function UserGetRoleUserListByRoleIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetRoleUserListByRoleIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameBaseValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetRoleUserListByRoleId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过用户id获取所有节点下属信息 POST /User/GetSubordinateByUserIds */
export async function UserGetSubordinateByUserIdsPOST(
  body: UserApi.GetInformationByUserIdsInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserInfoByCustomerOutput[]>({
    url: `/userApi/User/GetSubordinateByUserIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据管理Id查询其下级的所有详细信息 POST /User/GetSubordinateUserByMgrId */
export async function UserGetSubordinateUserByMgrIdsPOST(
  body: UserApi.GetUserBasicListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserBasicListOutput[]>({
    url: `/userApi/User/GetSubordinateUserByMgrId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过用户id获取向上三层关系的用户信息 POST /User/GetTopThreeUsers */
export async function UserGetTopThreeUsersPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetTopThreeUsersPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UserEmpInfo[]>({
    url: `/userApi/User/GetTopThreeUsers`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据公司id、岗位code 获取所在组织对应的相关岗位的人员Id POST /User/GetUserAssociatedWithCoPosCode */
export async function UserGetUserAssociatedWithCoPosCodePOST(
  body: UserApi.GetUserAssociatedWithCoPosCodeInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.Int32ListUnifyResultDto>({
    url: `/userApi/User/GetUserAssociatedWithCoPosCode`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户ID获取用户列表详细信息 POST /User/GetUserBasicDetialInfoById */
export async function UserGetUserBasicDetialInfoByIdPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserBasicDetialInfoByIdPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserListOutput>({
    url: `/userApi/User/GetUserBasicDetialInfoById`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有用户信息 GET /User/GetUserBasicInfos */
export async function UserGetUserBasicInfosGET(options?: { [key: string]: any }) {
  return request<UserApi.UserInfoListUnifyResultDto>({
    url: `/userApi/User/GetUserBasicInfos`,
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据公司ID查询公司下所有用户下拉分页 POST /User/GetUserByCompanyPageDropDownList */
export async function UserGetUserByCompanyPageDropDownListPOST(
  body: UserApi.GetUserByOrgPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserByCompanyPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件查询用户 POST /User/GetUserByCondition */
export async function UserGetUserByConditionPOST(
  body: UserApi.GetUserByConditionInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByConditionOutput[]>({
    url: `/userApi/User/GetUserByCondition`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据部门id获取部门下所有用户信息 POST /User/GetUserByDepartment */
export async function UserGetUserByDepartmentPOST(
  body: UserApi.GetUserByDepartmentInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByDepartmentOutputUnifyPageResultDto>({
    url: `/userApi/User/GetUserByDepartment`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据部门ID查询部门下所有用户下拉分页 POST /User/GetUserByDeptPageDropDownList */
export async function UserGetUserByDeptPageDropDownListPOST(
  body: UserApi.GetUserByOrgPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserByDeptPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询指定组织或上级中，指定岗位身份Code的用户 POST /User/GetUserByIdentityCode */
export async function UserGetUserByIdentityCodePOST(
  body: UserApi.GetUserByIdentityCodeInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.Int32ListUnifyResultDto>({
    url: `/userApi/User/GetUserByIdentityCode`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询有在职员工资料的用户信息下拉分页 POST /User/GetUserByIncumbencyEmpPageDropList */
export async function UserGetUserByIncumbencyEmpPageDropListPOST(
  body: UserApi.GetUserByPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserByIncumbencyEmpPageDropList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据组织查询当前组织下及下级所有组织的用户下拉分页 POST /User/GetUserByOrgChildPageDropDownList */
export async function UserGetUserByOrgChildPageDropDownListPOST(
  body: UserApi.GetUserByOrgPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserByOrgChildPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据组织ID查询当前组织及下属组织对应的用户(不分页) POST /User/GetUserByOrgIdsList */
export async function UserGetUserByOrgIdsListPOST(
  body: UserApi.GetUserByOrgIdInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByOrgIdOutput[]>({
    url: `/userApi/User/GetUserByOrgIdsList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据组织ID查询当前组织及下属组织对应的用户(分页) POST /User/GetUserByOrgIdsPageList */
export async function UserGetUserByOrgIdsPageListPOST(
  body: UserApi.GetUserByOrgIdInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByOrgIdOutputUnifyPageResultDto>({
    url: `/userApi/User/GetUserByOrgIdsPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据组织查询当前组织下的用户下拉分页 POST /User/GetUserByOrgPageDropDownList */
export async function UserGetUserByOrgPageDropDownListPOST(
  body: UserApi.GetUserByOrgPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserByOrgPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件获取用户分页下拉信息 POST /User/GetUserByPageDropDownList */
export async function UserGetUserByPageDropDownListPOST(
  body: UserApi.GetUserByPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserByPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据子系统id集合查询用户集合 POST /User/GetUserBySysIdsPageDropDownList */
export async function UserGetUserBySysIdsPageDropDownListPOST(
  body: UserApi.GetUserBySysIdsPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserBySysIdsPageDropDownListOutputUnifyPageResultDto>({
    url: `/userApi/User/GetUserBySysIdsPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件以及子系統获取用户分页信息 权限模块使用，修改之前和余祥龙联系 POST /User/GetUserBySysPageDropDownList */
export async function UserGetUserBySysPageDropDownListPOST(
  body: UserApi.GetUserBySystemPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserBySysPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户，非用户中心查询关联公司之下的 POST /User/GetUserBySystem */
export async function UserGetUserBySystemPOST(
  body: UserApi.GetUserBySystemInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserBySystemOutputUnifyPageResultDto>({
    url: `/userApi/User/GetUserBySystem`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据条件以及子系統获取用户分页信息 POST /User/GetUserBySystemPageDropDownList */
export async function UserGetUserBySystemPageDropDownListPOST(
  body: UserApi.GetUserBySystemPageDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GetUserBySystemPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户id和岗位Code获取在职员工 GET /User/GetUserByUserIdPositionCode */
export async function UserGetUserByUserIdPositionCodeGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserByUserIdPositionCodeGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameListOutputListUnifyResultDto>({
    url: `/userApi/User/GetUserByUserIdPositionCode`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户主职的组织 关联的 公司表的信息 返回了 公司的省市区信息 GET /User/GetUserCommpanyInfoAsync */
export async function UserGetUserCommpanyInfoGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserCommpanyInfoGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserCommpanyInfoOutput>({
    url: `/userApi/User/GetUserCommpanyInfoAsync`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户id,查询用户所属国家 POST /User/GetUserCountryById */
export async function UserGetUserCountryByIdPOST(
  body: UserApi.InputOrOutputBasicId,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserCountryOutput[]>({
    url: `/userApi/User/GetUserCountryById`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据飞书用户ID集合获取用户详细信息集合 POST /User/GetUserDetialInfoByFsIds */
export async function UserGetUserDetialInfoByFsIdsPOST(
  body: UserApi.GetUserDetialInfoByFsIdsInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserBasicListOutput[]>({
    url: `/userApi/User/GetUserDetialInfoByFsIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户ID获取用户详细信息 界面上会获取其它用户的信息 POST /User/GetUserDetialInfoById */
export async function UserGetUserDetialInfoByIdPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserDetialInfoByIdPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserBasicListOutput>({
    url: `/userApi/User/GetUserDetialInfoById`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户ID集合获取用户详细信息集合 POST /User/GetUserDetialInfoByIds */
export async function UserGetUserDetialInfoByIdsPOST(
  body: UserApi.GetUserDetialInfoByIdsInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserBasicListOutput[]>({
    url: `/userApi/User/GetUserDetialInfoByIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过用户Id数组获取各自的直属上级信息 POST /User/GetUserDirectSupervisor */
export async function UserGetUserDirectSupervisorPOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserDirectSupervisorOutputListUnifyResultDto>({
    url: `/userApi/User/GetUserDirectSupervisor`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 人与业务员授权的我的客户数据 GET /User/GetUserHaveAuthMyCustomer */
export async function UserGetUserHaveAuthMyCustomerGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserHaveAuthMyCustomerGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.CustomerInfo[]>({
    url: `/userApi/User/GetUserHaveAuthMyCustomer`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 业务角色用户的授权用户 POST /User/GetUserHaveAuthOfBusinessRole */
export async function UserGetUserHaveAuthOfBusinessRolePOST(
  body: UserApi.GetUserHaveAuthOfBusinessRoleInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBasicSalesmanAuthUserOutputUnifyPageResultDto>({
    url: `/userApi/User/GetUserHaveAuthOfBusinessRole`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过公司Id或部门Id集合获取对应的用户id POST /User/GetUserIdByOrgIds */
export async function UserGetUserIdByOrgIdsPOST(
  body: UserApi.GetUserInfoByOrgIdsInput,
  options?: { [key: string]: any },
) {
  return request<number[]>({
    url: `/userApi/User/GetUserIdByOrgIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过自定义where条件获取用户信息 POST /User/GetUserInfoByCustomer */
export async function UserGetUserInfoByCustomerPOST(
  body: UserApi.GetUserInfoByCustomerInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserDetaliByCustomerOutput[]>({
    url: `/userApi/User/GetUserInfoByCustomer`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户id返回在职状态 POST /User/GetUserJobStatus */
export async function UserGetUserJobStatusPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserJobStatusPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserJobStatusOutputUnifyResultDto>({
    url: `/userApi/User/GetUserJobStatus`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户获取组织负责人 GET /User/GetUserManager */
export async function UserGetUserManagerGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserManagerGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameListOutputListUnifyResultDto>({
    url: `/userApi/User/GetUserManager`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取用户组织，一直往上找 GET /User/GetUserOrgs */
export async function UserGetUserOrgsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserGetUserOrgsGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserOrgsOutputListUnifyResultDto>({
    url: `/userApi/User/GetUserOrgs`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据岗位业务类型查询用户
!:https://gotofreight.feishu.cn/wiki/PutFwzQlKiAazCk4KNDcxTSwnvb POST /User/GetUserPageDropDownListByPositionBizTypes */
export async function UserGetUserPageDropDownListByPositionBizTypesPOST(
  body: UserApi.GetUserPageDropDownListByPositionBizTypesInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserPageDropDownListByPositionBizTypesVOUnifyPageResultDto>({
    url: `/userApi/User/GetUserPageDropDownListByPositionBizTypes`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询公司业务员
!:https://gotofreight.feishu.cn/wiki/PutFwzQlKiAazCk4KNDcxTSwnvb POST /User/GetUserSalesmanPageList */
export async function UserGetUserSalesmanPageListPOST(
  body: UserApi.GetUserSalesmanPageListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserSalesmanPageListOutputUnifyPageResultDto>({
    url: `/userApi/User/GetUserSalesmanPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户信息查询 POST /User/GeUserList */
export async function UserGeUserListPOST(
  body: UserApi.GetUserListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserListValueObject[]>({
    url: `/userApi/User/GeUserList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户信息分页查询 POST /User/GeUserPageList */
export async function UserGeUserPageListPOST(
  body: UserApi.GetUserListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserListValueObjectUnifyPageResultDto>({
    url: `/userApi/User/GeUserPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 是否是角色管理员 POST /User/IsRoleAdmin */
export async function UserIsRoleAdminPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserIsRoleAdminPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/User/IsRoleAdmin`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 判断是否是管理员 POST /User/IsSysAdmin */
export async function UserIsSysAdminPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserIsSysAdminPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/User/IsSysAdmin`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 维护用户信息 POST /User/MaintainUser */
export async function UserMaintainUserPOST(
  body: UserApi.MaintainUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDto>({
    url: `/userApi/User/MaintainUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 个人中心修改密码发送短信 POST /User/PersonalCenterEditPwd */
export async function UserPersonalCenterEditThePasswordPOST(
  body: UserApi.SendSmsValidationInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.BasicResponseDto>({
    url: `/userApi/User/PersonalCenterEditPwd`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置用户密码 POST /User/ResetPassword */
export async function UserResetPasswordPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.UserResetPasswordPOSTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/User/ResetPassword`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新用户公司，部门ID POST /User/UpdateDeptIdWithUser */
export async function UserUpdateDeptIdWithUserPOST(options?: { [key: string]: any }) {
  return request<boolean>({
    url: `/userApi/User/UpdateDeptIdWithUser`,
    method: 'POST',
    ...(options || {}),
  });
}
