declare namespace UserApi {
  type ApiConfigGetStringGETParams = {
    key: string;
  };

  type BasicResponseDto = {
    /** 是否成功 */
    success?: boolean;
    /** 异常消息 */
    errorMessage?: string;
    /** 返回的具体业务数据 */
    data?: any;
  };

  type CurrentUserInfo = {
    /** 用户ID */
    userId?: number;
    /** 用户中文名 */
    userName?: string;
    /** 用户英文名 */
    userEnName?: string;
    /** 用户公司ID */
    companyId?: number;
    /** 用户公司Code */
    companyCode?: string;
    /** 用户公司名 */
    companyName?: string;
    /** 是否大陆公司 */
    isMainlandCo?: boolean;
    /** 用户公司英文名 */
    companyEnName?: string;
    /** 公司简称 */
    companyShortName?: string;
    /** 用户部门ID */
    departmentId?: number;
    /** 用户部门名 */
    departmentName?: string;
    /** 用户部门英文名 */
    departmentEnName?: string;
    /** 岗位业务类型 */
    positionBizType?: number;
    /** 用户组织ID */
    orgId?: number;
    /** 用户组织名 */
    orgName?: string;
    /** 用户组织英文名 */
    orgEnName?: string;
    /** 组织简称 */
    orgShortName?: string;
    /** 账号 */
    account?: string;
    /** 员工Id */
    employeeId?: number;
    /** 手机号 */
    telPhone?: string;
    /** 用户飞书头像URL */
    feiShuURL?: string;
    /** 业务角色 */
    businessRoleEnums?: number[];
    /** 国家 */
    country?: number;
    /** 市 */
    city?: number;
    /** 城市英文名 */
    cityEnName?: string;
    /** 国家二字码 */
    digit2Code?: string;
    /** 币种Id */
    currencyId?: number;
    /** 币种Code */
    currencyCode?: string;
  };

  type CurrentUserInfoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: CurrentUserInfo;
  };

  type EditExternalUserInput = {
    /** 账号Id */
    accountId?: number;
    /** 外部主体Id */
    externalSubjectId?: number;
    /** 账号类型1主账号，子账号 */
    accountType?: number;
    /** 客户公司名称 */
    customerCompanyName?: string;
    /** 账号姓名 */
    name?: string;
  };

  type ExternalLoginOutput = {
    /** 生成的token */
    token?: string;
    /** 核准状态 */
    isApprove?: boolean;
    /** 审核状态 */
    auditState?: number;
    msg?: string;
    /** 启用状态 */
    isEnable?: boolean;
    /** 客户启用状态 */
    customerStatus?: boolean;
    /** 合同签署状态 */
    isSigning?: boolean;
    userInfo?: any;
  };

  type ExternalUserAccountType = 1 | 2;

  type ExternalUserChangeCustomerStatusPOSTParams = {
    ExternalSubjectId?: number;
    CustomerStatus?: boolean;
  };

  type ExternalUserGetBusinessRoleListByUserIdsGETParams = {
    userId: number;
  };

  type ExternalUserGetCurrentUserBasicInfoGETParams = {
    userId?: number;
  };

  type ExternalUserGetExternalUserByIdGETParams = {
    userId?: number;
  };

  type ExternalUserGetExternalUserStatusByIdGETParams = {
    userId?: number;
  };

  type ExternalUserGetListByPageGETParams = {
    /** 外部主体Id */
    ExternalMainId?: number;
    /** 客户状态 */
    CustomerStatus?: boolean;
    /** 客户公司名称 */
    CustomerCompanyName?: string;
    /** 从小包点击跳转过去传入当前的小包子系统Id */
    PkgSystemId?: number;
    /** 客户中心查看下拉框选择外部子系统ID */
    SystemId?: number;
    /** 账号 */
    Account?: string;
    /** 姓名 */
    Name?: string;
    /** 手机号 */
    TelPhone?: string;
    IsEnable?: boolean;
    /** 外部用户账号类型(1.主账号 2.子账号) */
    AccountType?: ExternalUserAccountType;
    PageIndex?: number;
    PageSize?: number;
  };

  type ExternalUserGetMainAccountPOSTParams = {
    /** 外部主体ID */
    ExternalSubjectId?: number;
  };

  type ExternalUserGetOperatingSubjectGETParams = {
    SystemId?: number;
  };

  type ExternalUserGetSysTokenPOSTParams = {
    ptoken?: string;
  };

  type ExternalUserGetUserByTokenPOSTParams = {
    token?: string;
  };

  type ExternalUserOutput = {
    createUserId?: number;
    /** 创建人名称 */
    createUserName?: string;
    /** 修改人名称 */
    updateUserName?: string;
    id?: number;
    /** 账号 */
    account?: string;
    accountType?: ExternalUserAccountType;
    /** 账号类型(1.主账号 2.子账号) */
    accountTypeDesc?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 手机号 */
    telPhone?: string;
    /** 邮箱 */
    mail?: string;
    /** 国际区号 */
    countryCode?: string;
    /** 外部主体id */
    externalMainId?: number;
    /** 是否启用 */
    isEnable?: boolean;
    /** 客户状态 */
    customerStatus?: boolean;
    /** 客户状态描述 */
    customerStatusDesc?: string;
    /** 客户公司名称 */
    customerCompanyName?: string;
    /** 创建时间 */
    createTime?: string;
    updateTime?: string;
    updateUserId?: number;
    isDeleted?: boolean;
    /** 邀请码 */
    invitationCode?: string;
    /** 外部用户关联的系统 */
    associatedSystems?: ExternalUserSystemElemnet[];
  };

  type ExternalUserOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: ExternalUserOutput[];
  };

  type ExternalUserOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: ExternalUserOutput;
  };

  type ExternalUserResetPasswordPOSTParams = {
    userId?: number;
  };

  type ExternalUserStatus = {
    /** 核准状态 */
    isApprove?: boolean;
    /** 启用状态 */
    isEnable?: boolean;
    /** 客户启用状态 */
    customerStatus?: boolean;
    /** 合同签署状态 */
    isSigning?: boolean;
  };

  type ExternalUserStatusUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: ExternalUserStatus;
  };

  type ExternalUserSystemElemnet = {
    /** 外部用户所属系统 */
    systemId?: number;
    /** 外部用户所属外部系统名称 */
    systemName?: string;
    /** 外部子系统关联内部子系统Id */
    associatedInternalSubsystemId?: number;
    /** 外部子系统关联内部子系统名称 */
    associatedInternalSubsystemName?: string;
  };

  type ExternalUserValidExternalUserAccountPOSTParams = {
    Account?: string;
  };

  type ExternalUserValidExternalUserMailPOSTParams = {
    Mail?: string;
  };

  type ExternalUserValidExternalUserTelPhonePOSTParams = {
    TelPhone?: string;
  };

  type GenerateInvitationQRCodeInput = {
    /** 外部用户id */
    externalUserId?: number;
    /** 子系统code */
    subSystemCode?: string;
    type?: RegisterDevice;
  };

  type GenerateInvitationQRCodeOutput = {
    /** 邀请码 */
    invitationCode?: string;
    /** 外部主体Id */
    externalMainId?: number;
    /** 背景图片 */
    image?: string;
    /** 注册链接 */
    url?: string;
  };

  type IdBaseDto = {
    id?: number;
  };

  type IdBaseDtoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: IdBaseDto;
  };

  type MaintainExternalUserInput = {
    options?: OptionType;
    /** Id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 密码 */
    passWord?: string;
    /** 国际区号 */
    countryCode?: string;
    /** 手机号 */
    telPhone?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 邮箱 */
    mail?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 客户状态 1启用，0禁用，客户中心是反的 */
    customerStatus?: boolean;
    accountType?: ExternalUserAccountType;
    /** 所属系统
tips：2024 8-22 支持多选 for小包 */
    systemIds?: number[];
    /** 外部主体id */
    externalMainId?: number;
  };

  type ModifyPassWordByMessageCodeInput = {
    /** 手机号 */
    telPhone?: string;
    /** 通过该手机号发送的短信验证码 */
    messageCode?: string;
    /** 新密码 */
    newPassWord?: string;
    /** 确认新密码 */
    confirmNewPassWord?: string;
    sendValidationMessageType?: SendValidationMessageType;
    channel?: VerificationCodeChannelEnum;
  };

  type OptionType = 0 | 1 | 2 | 3;

  type PackageCustomerLoginInput = {
    /** 内部的小包子系统Id */
    systemId?: number;
    /** 外部主体Id */
    externalMainId?: number;
  };

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
  };

  type RegisterDevice = 1 | 2;

  type RegisterExternalUserFbaInput = {
    /** 账号 */
    account?: string;
    /** 密码 */
    passWord?: string;
    /** 确认密码 */
    confirmPassWord?: string;
    /** 国际区号 */
    countryCode?: string;
    /** 手机号 */
    telPhone?: string;
    /** 销售手机号 */
    saleTelPhonePhone?: string;
    /** 邮箱 */
    mail?: string;
    /** 验证码 */
    messageCode?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    accountType?: ExternalUserAccountType;
    /** 所属系统,多个以英文逗号隔开（9517,9520） */
    systemId?: string;
    sendValidationMessageType?: SendValidationMessageType;
    /** 公司名称 */
    companyName?: string;
    /** 统一社会信用代码 */
    socialUniformCode?: string;
    /** 注册地址 */
    registerAddresss?: string;
    /** 法人 */
    legalPerson?: string;
    /** 注册时间 */
    registerTime?: string;
    /** 注册资本 */
    registerCapital?: string;
    /** 客户代码 */
    code?: string;
    /** 营业执照 */
    businessLicense?: string;
  };

  type RegisterExternalUserInput = {
    /** 账号 */
    account?: string;
    /** 密码 */
    passWord?: string;
    /** 确认密码 */
    confirmPassWord?: string;
    /** 国际区号 */
    countryCode?: string;
    /** 手机号 */
    telPhone?: string;
    /** 销售手机号 */
    saleTelPhonePhone?: string;
    /** 邮箱 */
    mail?: string;
    /** 验证码 */
    messageCode?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    accountType?: ExternalUserAccountType;
    /** 所属系统 */
    systemId?: number;
    sendValidationMessageType?: SendValidationMessageType;
    /** 邀请码 */
    invitationCode?: string;
    /** 邀请公司id */
    invitationCompanyId?: number;
    /** 用户姓名 */
    name?: string;
    /** 用户英文名称 */
    enName?: string;
  };

  type RemoteServiceErrorInfo = {
    code?: string;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    validationErrors?: RemoteServiceValidationErrorInfo[];
  };

  type RemoteServiceErrorResponse = {
    error?: RemoteServiceErrorInfo;
  };

  type RemoteServiceValidationErrorInfo = {
    message?: string;
    members?: string[];
  };

  type SearchExternalUserOutput = {
    /** 账号Id */
    accountId?: number;
    /** 外部主体Id */
    externalSubjectId?: number;
    /** 账号类型1主账号，子账号 */
    accountType?: number;
    /** 客户公司名称 */
    customerCompanyName?: string;
    /** 英文名 */
    eName?: string;
    /** 账号姓名 */
    name?: string;
    /** 邮箱 */
    mail?: string;
    /** 手机号码 */
    telPhone?: string;
  };

  type SearchExternalUserOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: SearchExternalUserOutput;
  };

  type SendSmsValidationInput = {
    /** 账号id */
    id?: number;
    /** 手机号码 */
    phoneNumber?: string;
    /** 邮箱 */
    email?: string;
    channel?: VerificationCodeChannelEnum;
    sendValidationMessageType?: SendValidationMessageType;
    /** 图片验证码Guid,作为发送短信的唯一id */
    guid?: string;
    /** 用户Id */
    userId?: number;
  };

  type SendValidationMessageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };

  type VerfiyMessageCodeInput = {
    /** 手机号 */
    telPhone?: string;
    /** 验证码 */
    messageCode?: string;
    sendValidationMessageType?: SendValidationMessageType;
  };

  type VerificationCodeChannelEnum = 1 | 2;
}
