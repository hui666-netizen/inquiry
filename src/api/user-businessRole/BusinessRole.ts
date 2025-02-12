// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 批量删除授权用户 POST /BusinessRole/BatchDelBusinessRoleUserRelation */
export async function BusinessRoleBatchDelBusinessRoleUserRelationPOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/BatchDelBusinessRoleUserRelation`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验维护用户授权用户 POST /BusinessRole/CheckMaintainBusinessRoleUserRelation */
export async function BusinessRoleCheckMaintainBusinessRoleUserRelationPOST(
  body: UserApi.MaintainBusinessRoleUserRelationInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/BusinessRole/CheckMaintainBusinessRoleUserRelation`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除业务角色关联人 GET /BusinessRole/DeleteBusinessRoleListByUserId */
export async function BusinessRoleDeleteBusinessRoleListByUserIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleDeleteBusinessRoleListByUserIdGETParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/DeleteBusinessRoleListByUserId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 组合业务角色页面获取业务角色下拉分页列表 POST /BusinessRole/GetBusinessRoleDropDownList */
export async function BusinessRoleGetBusinessRoleDropDownListPOST(
  body: UserApi.GetBusinessRoleDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据业务角色查询员工 GET /BusinessRole/GetBusinessRoleEmpListByBusinessRole */
export async function BusinessRoleGetBusinessRoleEmpListByBusinessRoleGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetBusinessRoleEmpListByBusinessRoleGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.EmployeeConditionOutput[]>({
    url: `/userApi/BusinessRole/GetBusinessRoleEmpListByBusinessRole`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据员工id查询业务角色 GET /BusinessRole/GetBusinessRoleEmpListByEmpId */
export async function BusinessRoleGetBusinessRoleEmpListByEmpIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetBusinessRoleEmpListByEmpIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleEmpListOutput>({
    url: `/userApi/BusinessRole/GetBusinessRoleEmpListByEmpId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** CAMS：按照用户Id获取对应的业务角色信息接口 POST /BusinessRole/GetBusinessRoleInfoByUserId */
export async function BusinessRoleGetBusinessRoleInfoByUserIdPOST(
  body: UserApi.GetBusinessRoleInfoByUserIdInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleInfoByUserIdOutputListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleInfoByUserId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 业务角色人员查询按钮内部的分页列表 根据业务角色枚举值、用户Id查询 业务角色名称及其人员相关信息 POST /BusinessRole/GetBusinessRoleInfoPageList */
export async function BusinessRoleGetBusinessRoleInfoPageListPOST(
  body: UserApi.GetBusinessRoleInfoPageListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleInfoPageListOutputUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleInfoPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 组合之后的业务角色页面获取业务角色分页列表 POST /BusinessRole/GetBusinessRoleList */
export async function BusinessRoleGetBusinessRoleListPOST(
  body: UserApi.GetBusinessRoleListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleListOutputUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户id查询业务角色 GET /BusinessRole/GetBusinessRoleListByUserId */
export async function BusinessRoleGetBusinessRoleListByUserIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetBusinessRoleListByUserIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleEmpValueObject[]>({
    url: `/userApi/BusinessRole/GetBusinessRoleListByUserId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据业务类型、业务角色、公司、集合查询用户集合 POST /BusinessRole/GetBusinessRoleUser */
export async function BusinessRoleGetBusinessRoleUserPOST(
  body: UserApi.GetBusinessRoleUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleUserDropDownListByPageOutputUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务角色接口 POST /BusinessRole/GetBusinessRoleUserDropDownListByPage */
export async function BusinessRoleGetBusinessRoleUserDropDownListByPagePOST(
  body: UserApi.GetBusinessRoleUserDropDownListByPageInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleUserDropDownListByPageOutputUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserDropDownListByPage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户id获取该用户下主岗位公司下用户信息 用户有FOB身份则查主岗位公司下FOB用户,无则只查在职用户 POST /BusinessRole/GetBusinessRoleUserRelationByUserId */
export async function BusinessRoleGetBusinessRoleUserRelationByUserIdPOST(
  body: UserApi.GetBusinessRoleUserRelationByUserIdInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserByPageDropDownListValueObjectUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserRelationByUserId`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务关联人下拉接口 POST /BusinessRole/GetBusinessRoleUserRelationDropDownPageList */
export async function BusinessRoleGetBusinessRoleUserRelationDropDownPageListPOST(
  body: UserApi.GetBusinessRoleUserRelationDropDownListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameBaseValueObjectUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserRelationDropDownPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务角色人员分配关联列表 POST /BusinessRole/GetBusinessRoleUserRelationList */
export async function BusinessRoleGetBusinessRoleUserRelationListPOST(
  body: UserApi.GetBusinessRoleUserRelationListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleUserRelationValueObject[]>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserRelationList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务角色人员分配关联分页列表 POST /BusinessRole/GetBusinessRoleUserRelationPageList */
export async function BusinessRoleGetBusinessRoleUserRelationPageListPOST(
  body: UserApi.GetBusinessRoleUserRelationPageListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleUserRelationValueObjectUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserRelationPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 11. 根据公司过滤业务角色人员 POST /BusinessRole/GetBusinessRoleUserWithCompanyOrgDropDownPageList */
export async function BusinessRoleGetBusinessRoleUserWithCompanyOrgDropDownPageListPOST(
  body: UserApi.GetBusinessRoleUserWithCompanyOrgInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetCamsBusinessRoleUserValueObjectUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserWithCompanyOrgDropDownPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 10. 查用户及关联用户的业务角色人员 POST /BusinessRole/GetBusinessRoleUserWithUserDropDownPageList */
export async function BusinessRoleGetBusinessRoleUserWithUserDropDownPageListPOST(
  body: UserApi.GetBusinessRoleUserWithUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetCamsBusinessRoleUserValueObjectUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusinessRoleUserWithUserDropDownPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取子系统下,有业务角色关联的用户 POST /BusinessRole/GetBusinessRoleWithUserBySystem */
export async function BusinessRoleGetBusinessRoleWithUserBySystemPOST(
  body: UserApi.GetBusinessRoleWithUserBySystemInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBusinessRoleWithUserBySystemValueObject[]>({
    url: `/userApi/BusinessRole/GetBusinessRoleWithUserBySystem`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /BusinessRole/GetBusRoleUserPageListByTypeAndCompany */
export async function BusinessRoleGetBusRoleUserPageListByTypeAndCompanyGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetBusRoleUserPageListByTypeAndCompanyGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UserInfoOutputUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetBusRoleUserPageListByTypeAndCompany`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过用户id获取人与业务员授权表的被授权人 POST /BusinessRole/GetBussinessRoleUserByUserId/${param0} */
export async function BusinessRoleGetBussinessRoleUserByUserIdPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetBussinessRoleUserByUserIdPOSTParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<UserApi.BuinessRoleUserOutputListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetBussinessRoleUserByUserId/${param0}`,
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 通过授权用户Id,获取客户Id POST /BusinessRole/GetCustomerIdByBussinessRoleUserId/${param0} */
export async function BusinessRoleGetCustomerIdByBussinessRoleUserIdPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetCustomerIdByBussinessRoleUserIdPOSTParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<UserApi.Int32ListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetCustomerIdByBussinessRoleUserId/${param0}`,
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询业务员授权用户配置分页列表 POST /BusinessRole/GetSalesmanAuthUserPageList */
export async function BusinessRoleGetSalesmanAuthUserPageListPOST(
  body: UserApi.GetSalesmanAuthUserPageListInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSalesmanAuthUserOutputUnifyPageResultDto>({
    url: `/userApi/BusinessRole/GetSalesmanAuthUserPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询指定公司下，包含具体业务角色下（是/否）公司业务员用户 POST /BusinessRole/GetUserAssociatedWithCompanyBizRoles */
export async function BusinessRoleGetUserAssociatedWithCompanyBizRolesPOST(
  body: UserApi.GetUserAssociatedWithCompanyBizRolesInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserIdNameListBasicOutputListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetUserAssociatedWithCompanyBizRoles`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询给定公司里，具体的业务角色下拥有某些岗位的用户 POST /BusinessRole/GetUserAssociatedWithPositionIdentity */
export async function BusinessRoleGetUserAssociatedWithPositionIdentityPOST(
  body: UserApi.GetUserAssociatedWithPositionIdentityInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserAssociatedWithPositionIdentityOutputListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetUserAssociatedWithPositionIdentity`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取业务角色关联的用户相关信息 POST /BusinessRole/GetUserInfoAssociatedWithBizRole */
export async function BusinessRoleGetUserInfoAssociatedWithBizRolePOST(
  body: UserApi.GetUserInfoAssociatedWithBizRoleInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserInfoAssociatedWithBizRoleOutputListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetUserInfoAssociatedWithBizRole`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询组织、部门、业务角色用户
https://gotofreight.feishu.cn/wiki/AuXfwQWlQiobDMkOB3ycngzpnnh POST /BusinessRole/GetUserInfoByBizRole */
export async function BusinessRoleGetUserInfoByBizRolePOST(
  body: UserApi.GetUserInfoByBizRoleInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserInfoByBizRoleOutputListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetUserInfoByBizRole`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** CAMS：按照业务角色获取用户列表接口 POST /BusinessRole/GetUserListByBusinessRoleInfo */
export async function BusinessRoleGetUserListByBusinessRoleInfoPOST(
  body: UserApi.GetUserListByBusinessRoleInfoInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetUserListByBusinessRoleInfoOutputUnifyPageResultDtoUnifyResultDto>({
    url: `/userApi/BusinessRole/GetUserListByBusinessRoleInfo`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户关联的业务角色的详细业务角色枚举项 GET /BusinessRole/GetUserRelationBusinessRoleItems */
export async function BusinessRoleGetUserRelationBusinessRoleItemsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetUserRelationBusinessRoleItemsGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.Int32ListUnifyResultDto>({
    url: `/userApi/BusinessRole/GetUserRelationBusinessRoleItems`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** CAMS：判断用户是否有对应的业务角色接口 POST /BusinessRole/IsHaveBusinessRoleByUser */
export async function BusinessRoleIsHaveBusinessRoleByUserPOST(
  body: UserApi.IsHaveBusinessRoleByUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IsHaveBusinessRoleByUserOutputUnifyResultDto>({
    url: `/userApi/BusinessRole/IsHaveBusinessRoleByUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 维护业务角色 POST /BusinessRole/MaintainBusinessRole */
export async function BusinessRoleMaintainBusinessRolePOST(
  body: UserApi.MaintainBusinessRoleInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/MaintainBusinessRole`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 维护业务角色对应的人员 POST /BusinessRole/MaintainBusinessRoleEmp */
export async function BusinessRoleMaintainBusinessRoleEmpPOST(
  body: UserApi.MaintainBusinessRoleEmpInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/MaintainBusinessRoleEmp`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 维护用户授权用户 POST /BusinessRole/MaintainBusinessRoleUserRelation */
export async function BusinessRoleMaintainBusinessRoleUserRelationPOST(
  body: UserApi.MaintainBusinessRoleUserRelationInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/MaintainBusinessRoleUserRelation`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 判断在提交合同申请时，用户是否有选择客户的权限。 干线类型的子系统，用户的业务角色项中，必须包含 业务、操作 等关键字 小包类型的子系统，都具有权限。 其他类型的子系统，则无法进行合同业务。 GET /BusinessRole/QueryHaveAuthToSelectCustomerWithContract */
export async function BusinessRoleQueryHaveAuthToSelectCustomerWithContractGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleQueryHaveAuthToSelectCustomerWithContractGETParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/QueryHaveAuthToSelectCustomerWithContract`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除业务角色 POST /BusinessRole/RemoveBusinessRole */
export async function BusinessRoleRemoveBusinessRolePOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/BusinessRole/RemoveBusinessRole`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户id获取业务类型、业务角色、所属公司、所属大区 GET /BusinessService/GetBusinessRoleByUserId */
export async function BusinessRoleGetBusinessRoleByUserIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.BusinessRoleGetBusinessRoleByUserIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBuinessRoleOutputUnifyResultDto>({
    url: `/userApi/BusinessService/GetBusinessRoleByUserId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户id集合获取业务类型、业务角色、所属公司、所属大区 POST /BusinessService/GetBusinessRoleListByUserIds */
export async function BusinessRoleGetBusinessRoleListByUserIdsPOST(
  body: UserApi.GetBusinessRoleListByUserIdsInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetBuinessRoleListOutputListUnifyResultDto>({
    url: `/userApi/BusinessService/GetBusinessRoleListByUserIds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据业务类型+业务角色集合查询用户 POST /BusinessService/GetBusRoleUserPageListByType */
export async function BusinessRoleGetBusRoleUserPageListByTypePOST(
  body: UserApi.PostBusinessRoleInfoInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.BuinessRoleUserOutputUnifyPageResultDtoUnifyResultDto>({
    url: `/userApi/BusinessService/GetBusRoleUserPageListByType`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
