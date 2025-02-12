// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 更新客户状态 POST /ExternalUser/ChangeCustomerStatusAsync */
export async function ExternalUserChangeCustomerStatusPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserChangeCustomerStatusPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/ChangeCustomerStatusAsync`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据账号id补充外部用户信息 POST /ExternalUser/EditExternalUserAsync */
export async function ExternalUserEditExternalUserPOST(
  body: UserApi.EditExternalUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDtoUnifyResultDto>({
    url: `/userApi/ExternalUser/EditExternalUserAsync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录 POST /ExternalUser/ExternalLogin */
export async function ExternalUserLoginPOST(
  body: {
    /** 账号/手机号 */
    Account: string;
    /** 密码 */
    Password: string;
    /** 子系统ID */
    SystemId?: number;
  },
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

  return request<UserApi.ExternalLoginOutput>({
    url: `/userApi/ExternalUser/ExternalLogin`,
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 用户手机号登录 POST /ExternalUser/ExternalTelLogin */
export async function ExternalUserExternalTelLoginPOST(
  body: {
    /** 手机号 */
    TelPhone: string;
    /** 通过该手机号发送的短信验证码 */
    MessageCode: string;
    /** 子系统ID */
    SystemId?: number;
    SendValidationMessageType?: UserApi.SendValidationMessageType;
  },
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

  return request<UserApi.ExternalLoginOutput>({
    url: `/userApi/ExternalUser/ExternalTelLogin`,
    method: 'POST',
    data: formData,
    ...(options || {}),
  });
}

/** 外部用户忘记密码发送短信接口 POST /ExternalUser/ExternalUserForgetPassWordSendMessage */
export async function ExternalUserExternalForgetPassWordSendMessagePOST(
  body: UserApi.SendSmsValidationInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.BasicResponseDto>({
    url: `/userApi/ExternalUser/ExternalUserForgetPassWordSendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 外部用户登录发送短信 POST /ExternalUser/ExternalUserLoginSendMessage */
export async function ExternalUserExternalUserLoginSendMessagePOST(
  body: UserApi.SendSmsValidationInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.BasicResponseDto>({
    url: `/userApi/ExternalUser/ExternalUserLoginSendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 外部用户注册发送短信接口 POST /ExternalUser/ExternalUserRegisterSendMessage */
export async function ExternalUserExternalUserRegisterSendMessagePOST(
  body: UserApi.SendSmsValidationInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.BasicResponseDto>({
    url: `/userApi/ExternalUser/ExternalUserRegisterSendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 外部用户忘记密码,校验验证码是否正确 POST /ExternalUser/ExternalUserVerfiyMessageCode */
export async function ExternalUserExternalUserVerfiyMessageCodePOST(
  body: UserApi.VerfiyMessageCodeInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/ExternalUser/ExternalUserVerfiyMessageCode`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 为用户生成邀请码 POST /ExternalUser/GenerateInvitationCode */
export async function ExternalUserGenerateInvitationCodePOST(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/ExternalUser/GenerateInvitationCode`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 生成二维码信息 POST /ExternalUser/GenerateInvitationQrCode */
export async function ExternalUserGenerateInvitationQrCodePOST(
  body: UserApi.GenerateInvitationQRCodeInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GenerateInvitationQRCodeOutput>({
    url: `/userApi/ExternalUser/GenerateInvitationQrCode`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ExternalUser/GetBusinessRoleListByUserIds/${param0} */
export async function ExternalUserGetBusinessRoleListByUserIdsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetBusinessRoleListByUserIdsGETParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<number>({
    url: `/userApi/ExternalUser/GetBusinessRoleListByUserIds/${param0}`,
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 外部用户id GET /ExternalUser/GetCurrentUserBasicInfo */
export async function ExternalUserGetCurrentUserBasicInfoGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetCurrentUserBasicInfoGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.CurrentUserInfoUnifyResultDto>({
    url: `/userApi/ExternalUser/GetCurrentUserBasicInfo`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据外部用户ID获取外部用户信息 GET /ExternalUser/GetExternalUserById */
export async function ExternalUserGetExternalUserByIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetExternalUserByIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.ExternalUserOutputUnifyResultDto>({
    url: `/userApi/ExternalUser/GetExternalUserById`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取外部用户信息分页 GET /ExternalUser/GetExternalUserListByPage */
export async function ExternalUserGetListByPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetListByPageGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.ExternalUserOutputUnifyPageResultDto>({
    url: `/userApi/ExternalUser/GetExternalUserListByPage`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据外部用户ID获取外部用户信息状态 GET /ExternalUser/GetExternalUserStatusById */
export async function ExternalUserGetExternalUserStatusByIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetExternalUserStatusByIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.ExternalUserStatusUnifyResultDto>({
    url: `/userApi/ExternalUser/GetExternalUserStatusById`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据外部主体ID获取外部用户主账号信息 POST /ExternalUser/GetMainAccountAsync */
export async function ExternalUserGetMainAccountPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetMainAccountPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.SearchExternalUserOutputUnifyResultDto>({
    url: `/userApi/ExternalUser/GetMainAccountAsync`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取外部子系统的运营主体公司 GET /ExternalUser/GetOperatingSubject */
export async function ExternalUserGetOperatingSubjectGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetOperatingSubjectGETParams,
  options?: { [key: string]: any },
) {
  return request<number>({
    url: `/userApi/ExternalUser/GetOperatingSubject`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取新外部用户Token POST /ExternalUser/GetSysToken */
export async function ExternalUserGetSysTokenPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetSysTokenPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.ExternalLoginOutput>({
    url: `/userApi/ExternalUser/GetSysToken`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据token获取外部用户 POST /ExternalUser/GetUserByToken */
export async function ExternalUserGetUserByTokenPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserGetUserByTokenPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.ExternalUserOutput>({
    url: `/userApi/ExternalUser/GetUserByToken`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 维护外部用户信息 POST /ExternalUser/MaintainExternalUser */
export async function ExternalUserMaintainExternalUserPOST(
  body: UserApi.MaintainExternalUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/MaintainExternalUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 外部用户通过短信验证码修改密码 POST /ExternalUser/ModifyPassWordByMessageCode */
export async function ExternalUserModifyPassWordByMessageCodePOST(
  body: UserApi.ModifyPassWordByMessageCodeInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDto>({
    url: `/userApi/ExternalUser/ModifyPassWordByMessageCode`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 小包系统 客户免登录
暂时返回 外部用户信息。实际应返回Token POST /ExternalUser/PackageCustomerLogin */
export async function ExternalUserPackageCustomerLoginPOST(
  body: UserApi.PackageCustomerLoginInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/PackageCustomerLogin`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** FBA系统 客户免登录
暂时返回 外部用户信息。实际应返回Token POST /ExternalUser/PackageCustomerLoginFba */
export async function ExternalUserPackageCustomerLoginFbaPOST(
  body: UserApi.PackageCustomerLoginInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/PackageCustomerLoginFba`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册外部用户信息 POST /ExternalUser/RegisterExternalUser */
export async function ExternalUserRegisterExternalUserPOST(
  body: UserApi.RegisterExternalUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/RegisterExternalUser`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册外部用户信息（FBA） POST /ExternalUser/RegisterExternalUserForFba */
export async function ExternalUserRegisterExternalUserForFbaPOST(
  body: UserApi.RegisterExternalUserFbaInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/RegisterExternalUserForFba`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置用户密码 POST /ExternalUser/ResetPassword */
export async function ExternalUserResetPasswordPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserResetPasswordPOSTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/ExternalUser/ResetPassword`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 验证注册外部用户账号是否重复 POST /ExternalUser/ValidExternalUserAccount */
export async function ExternalUserValidExternalUserAccountPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserValidExternalUserAccountPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/ValidExternalUserAccount`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户注册下一步校验 POST /ExternalUser/ValidExternalUserBasic */
export async function ExternalUserValidExternalUserBasicPOST(
  body: UserApi.RegisterExternalUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/ValidExternalUserBasic`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ExternalUser/ValidExternalUserBasicBeforeNext */
export async function ExternalUserValidExternalUserBasicBeforeNextPOST(
  body: UserApi.RegisterExternalUserInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/ValidExternalUserBasicBeforeNext`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证注册外部邮箱是否重复 POST /ExternalUser/ValidExternalUserMail */
export async function ExternalUserValidExternalUserMailPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserValidExternalUserMailPOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/ValidExternalUserMail`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 验证注册外部用户手机号是否重复 POST /ExternalUser/ValidExternalUserTelPhone */
export async function ExternalUserValidExternalUserTelPhonePOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.ExternalUserValidExternalUserTelPhonePOSTParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/ExternalUser/ValidExternalUserTelPhone`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
