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

  type CurrentUser = {
    /** 用户id */
    userId?: number;
    /** 员工Id */
    employeeId?: number;
    /** 员工工号(账号) */
    account?: string;
    /** 员工姓名 */
    name?: string;
    /** 员工英文名 */
    enName?: string;
    /** 电话 */
    telPhone?: string;
    /** 外部主体id */
    externalMainId?: number;
    /** 外部主体名称 */
    externalMainName?: string;
    /** 外部用户关联的内部子系统id */
    systemId?: number;
    /** 内部用户、外部用户、系统 */
    tokenOrigin?: string;
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

  type CurrentUserUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: CurrentUser;
  };

  type CustomerInfo = {
    /** 用户ID */
    userId?: number;
    /** 客户简称 */
    abbreviation?: string;
    /** 客户代码 */
    code?: string;
    /** 客户类型 */
    cooperationNature?: number;
    /** 客户id */
    externalSubjectId?: number;
    /** 客户名称 */
    name?: string;
    /** 客户英文名称 */
    enName?: string;
    /** 授权开始时间 */
    authBeginTime?: string;
    /** 授权结束时间 */
    authEndTime?: string;
  };

  type CustomerInformation = {
    /** 客户id */
    customerId?: number;
    /** 客户简称 */
    customerAbbreviation?: string;
  };

  type DoubleToken = {
    accessToken?: string;
    refreshToken?: string;
  };

  type DoubleTokenUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: DoubleToken;
  };

  type FsOpenAndUnionIdElement = {
    /** 手机号 */
    mobile?: string;
    /** 飞书id */
    fsId?: string;
  };

  type GetAllUserByOrgIdInput = {
    /** 组织Id */
    orgId?: number;
    /** 用户Id */
    userIds?: number[];
    /** 是否需要下级组织数据 true:需要 false:不需要 */
    isNeedLower?: boolean;
    jobStatus?: JobStatus;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type GetAllUserByOrgIdOutput = {
    /** 员工Id */
    userId?: number;
    /** 用户Id */
    empId?: number;
    /** 员工姓名 */
    name?: string;
    /** 员工英文名 */
    enName?: string;
  };

  type GetBasicSalesmanAuthUserOutput = {
    id?: number;
    /** 员工姓名 */
    name?: string;
    /** 员工英文名 */
    enName?: string;
    /** 工号 */
    employeeCode?: string;
    /** 公司中文名 */
    coName?: string;
    /** 公司英文名 */
    coEnName?: string;
    /** 部门中文名 */
    deptName?: string;
    /** 部门英文名 */
    deptEnName?: string;
    /** 手机号 */
    telPhone?: string;
    /** 备注信息 */
    remark?: string;
    /** 业务员用户Id */
    userId?: number;
    /** 业务员英文姓名 */
    userEnName?: string;
    /** 业务员中文姓名 */
    userName?: string;
    /** 接收人英文姓名 */
    agentUserEnName?: string;
    /** 接收人用户Id */
    agentUserId?: number;
    /** 接收人中文姓名 */
    agentUserName?: string;
    /** 授权开始时间 */
    authBeginTime?: string;
    /** 授权结束时间 */
    authEndTime?: string;
    /** 创建人英文姓名 */
    createEnName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人Id */
    createUserId?: number;
    /** 列表展示客户名称 */
    customerDisplayName?: string;
    /** 客户信息 */
    customerInfo?: CustomerInformation[];
    /** 修改时间 */
    updateTime?: string;
    /** 修改人英文姓名 */
    updateUserEnName?: string;
    /** 修改人 */
    updateUserId?: number;
    customerIds?: number[];
  };

  type GetBasicSalesmanAuthUserOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBasicSalesmanAuthUserOutput[];
  };

  type GetCoIdAssociatedWithUserInput = {
    /** 用户id集合 */
    userIds?: number[];
  };

  type GetCoIdAssociatedWithUserOutput = {
    /** 公司Id */
    companyId?: number;
    /** 用户Id */
    userId?: number;
    /** 直接组织Id */
    orgId?: number;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type GetCoIdAssociatedWithUserOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetCoIdAssociatedWithUserOutput[];
  };

  type GetFsInfoInput = {
    userIds?: number[];
  };

  type GetFsInfoOutput = {
    userId?: number;
    fsAvatar?: string;
  };

  type GetFsInfoOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetFsInfoOutput[];
  };

  type GetFsOpenAndUnionIdInput = {
    fsQuery?: FsOpenAndUnionIdElement[];
  };

  type GetFsOpenAndUnionIdOutput = {
    /** 飞书id */
    fsId?: string;
    /** 手机号 */
    mobile?: string;
    /** 飞书unionid */
    unionId?: string;
    /** 飞书appOpenid */
    fsLoginOpenId?: string;
  };

  type GetInformationByUserIdsInput = {
    userIds?: number[];
  };

  type GetOrgUserIdsInput = {
    orgId?: number;
    jobStatus?: JobStatus;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type GetPositionOrgListByEmpIdValueObject = {
    /** 岗位员工Id */
    id?: number;
    /** 员工Id */
    employeeId?: number;
    /** id */
    positionId?: number;
    /** 岗位名称 */
    positionName?: string;
    /** 英文名称 */
    positionEnName?: string;
    /** 岗位类型 */
    positionType?: number;
    /** 描述信息 */
    positionDescription?: string;
    /** 任职时间 */
    workingTime?: string;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
    /** 岗位身份ID */
    identityId?: number;
    /** 岗位身份 */
    identityName?: string;
    /** 组织ID */
    orgId?: number;
    /** 组织类型 */
    orgType?: number;
    /** 组织代码 */
    orgCode?: string;
    /** 组织中文名 */
    orgName?: string;
    /** 组织英文名 */
    orgEnName?: string;
    /** 说明 */
    orgDescription?: string;
    /** 公司ID */
    companyId?: number;
    /** 公司类型 */
    companyType?: number;
    /** 公司中文名 */
    companyName?: string;
    /** 公司英文名 */
    companyEnName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 编制公司 */
    preparationCompanyName?: string;
    /** 公司说明 */
    companyDescription?: string;
    /** 合同公司ID */
    contractCompanyId?: number;
    /** 合同公司类型 */
    contractCompanyType?: number;
    /** 合同公司中文名 */
    contractCompanyName?: string;
    /** 合同公司英文名 */
    contractCompanyEnName?: string;
    /** 合同公司说明 */
    contractCompanyDescription?: string;
    /** 员工上级所有组织 */
    positionnRelateOrgs?: PositionnRelateOrg[];
  };

  type GetPrincipalByUserIdsOutput = {
    /** 用户Id */
    id?: number;
    /** 员工Id */
    empId?: number;
    /** 账号信息 */
    account?: string;
    /** 姓名 */
    userName?: string;
    /** 英文名 */
    enName?: string;
    /** 主职岗位名称 */
    jobName?: string;
    /** 主职所在公司Id */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 公司简称 */
    sCompanyName?: string;
    /** 主职所在部门Id */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 部门简称 */
    sDepartmentName?: string;
    /** 主岗位岗位ID */
    jobId?: number;
  };

  type GetUserAssociatedWithCoPosCodeInput = {
    /** 公司Id */
    companyId?: number;
    /** 岗位Code */
    positionCode?: string;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type GetUserBasicEmpInfo = {
    /** 员工Id */
    id?: number;
    /** 员工姓名 */
    name?: string;
    /** 员工英文名 */
    enName?: string;
    /** 性别 */
    sex?: string;
    /** 联系电话 */
    telPhone?: string;
    /** 学历 */
    education?: string;
    /** 邮箱 */
    mail?: string;
    /** 微信 */
    wxNumber?: string;
    /** QQ */
    qq?: string;
    /** 员工身份证 */
    idCard?: string;
    /** 备注 */
    reMark?: string;
    /** 工号 */
    employeeCode?: string;
    /** 用工类型 */
    workType?: string;
    /** 办公地址 */
    address?: string;
    /** 直属上级 */
    managerName?: string;
    /** 直属上级工号 */
    managerCode?: string;
    /** 导师姓名 */
    tutorName?: string;
    /** 导师工号 */
    tutorCode?: string;
    /** 工作状态 */
    jobStatus?: string;
    /** 是否启用 */
    officeStatus?: string;
    /** 企业邮箱 */
    qyMail?: string;
    /** 企业QQ */
    qyQQ?: string;
    /** 年龄 */
    age?: number;
    /** 员工所属部门 */
    deptName?: string;
    /** 座机号 */
    landlineNo?: string;
    /** 传真号 */
    faxNo?: string;
    /** 合同公司ID */
    contractCompanyId?: number;
    /** 合同公司类型 */
    contractCompanyType?: number;
    /** 合同公司中文名 */
    contractCompanyName?: string;
    /** 合同公司英文名 */
    contractCompanyEnName?: string;
    /** 合同公司说明 */
    contractCompanyDescription?: string;
  };

  type GetUserBasicFsInfo = {
    /** 飞书 union id */
    union_id?: string;
    /** 飞书 user id */
    fs_employee_id?: string;
  };

  type GetUserBasicListInput = {
    userIds?: number[];
  };

  type GetUserBasicListOutput = {
    userInfo?: GetUserBasicUserInfo;
    fsInfo?: GetUserBasicFsInfo;
    empInfo?: GetUserBasicEmpInfo;
    generalPositionInfo?: GetPositionOrgListByEmpIdValueObject[];
    positionOrgInfo?: GetPositionOrgListByEmpIdValueObject[];
    maninPositionInfo?: GetPositionOrgListByEmpIdValueObject;
    canLoginSystem?: string;
  };

  type GetUserBasicUserInfo = {
    /** id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 手机号 */
    telPhone?: string;
    /** 固定电话 */
    landlinePhone?: string;
    /** 国际区号 */
    countryCode?: string;
    /** 员工Id */
    employeeId?: number;
  };

  type GetUserByConditionInput = {
    /** 用户名称模糊查询 */
    userName?: string;
    jobStatus?: JobStatus;
  };

  type GetUserByConditionOutput = {
    userId?: number;
    userName?: string;
    userEnName?: string;
  };

  type GetUserByDepartmentInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 部门id */
    departmentId?: number;
    /** 用户名称 */
    userName?: string;
    /** 用户英文名称 */
    userEnName?: string;
    /** 是否启用(不传这个字段默认为true,传空查全部,传false查未启用) */
    isEnable?: boolean;
  };

  type GetUserByDepartmentOutput = {
    /** 用户id */
    id?: number;
    /** 员工id */
    empId?: number;
    /** 用户名称 */
    cnName?: string;
    /** 员工工号 */
    employeeCode?: string;
    /** 用户英文名称 */
    enName?: string;
    /** 用户绑定电话 */
    telphone?: string;
  };

  type GetUserByDepartmentOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserByDepartmentOutput[];
  };

  type GetUserByIdentityCodeInput = {
    /** 组织id */
    orgId?: number;
    /** 岗位身份Code */
    identityCode?: string;
    /** 是否查询父级组织 */
    queryParentOrg?: boolean;
  };

  type GetUserByOrgIdInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 是否分页 */
    isPage?: boolean;
    /** 组织ID */
    orgIds?: number[];
    /** 总纪录数 */
    totalCount?: number;
  };

  type GetUserByOrgIdOutput = {
    userId?: number;
    userName?: string;
    userAccount?: string;
    userEnName?: string;
    companyId?: number;
    companyName?: string;
    deptId?: number;
    deptName?: string;
    orgId?: number;
    orgName?: string;
  };

  type GetUserByOrgIdOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserByOrgIdOutput[];
  };

  type GetUserByOrgPageDropDownListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    orgId?: number;
  };

  type GetUserByPageDropDownListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
  };

  type GetUserByPageDropDownListValueObject = {
    /** 用户id */
    id?: number;
    /** 用户姓名 */
    name?: string;
    /** 用户英文名 */
    enName?: string;
    /** 账号 */
    account?: string;
    /** 是否启用 */
    isEnable?: boolean;
    origin?: RoleUserOrigin;
    /** 是否由因素维护 */
    isMaintainByFactor?: boolean;
    /** 部门名称 */
    deptName?: string;
    /** 部门英文名 */
    deptEnName?: string;
    /** 公司名称 */
    companyName?: string;
    /** 公司英文名 */
    companyEnName?: string;
    /** 公司简称 */
    companyShortName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 员工状态 1：在职 2：离职 */
    jobStatus?: number;
    /** 用户邮箱 */
    email?: string;
    /** 手机号 */
    telPhone?: string;
    /** 组织id */
    orgId?: number;
  };

  type GetUserByPageDropDownListValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserByPageDropDownListValueObject[];
  };

  type GetUserBySysIdsPageDropDownListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    /** 子系统Id集合 */
    systemIds?: number[];
    /** 是否主岗位 */
    isMasterPosition?: boolean;
    isEnable?: boolean;
  };

  type GetUserBySysIdsPageDropDownListOutput = {
    /** 用户id */
    id?: number;
    /** 用户姓名 */
    name?: string;
    /** 用户英文名 */
    enName?: string;
    /** 账号 */
    account?: string;
    /** 是否启用 */
    isEnable?: boolean;
    origin?: RoleUserOrigin;
    /** 是否由因素维护 */
    isMaintainByFactor?: boolean;
    /** 部门名称 */
    deptName?: string;
    /** 部门英文名 */
    deptEnName?: string;
    /** 公司名称 */
    companyName?: string;
    /** 公司英文名 */
    companyEnName?: string;
    /** 公司简称 */
    companyShortName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 员工状态 1：在职 2：离职 */
    jobStatus?: number;
    /** 用户邮箱 */
    email?: string;
    /** 手机号 */
    telPhone?: string;
    /** 组织id */
    orgId?: number;
  };

  type GetUserBySysIdsPageDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserBySysIdsPageDropDownListOutput[];
  };

  type GetUserBySystemInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 子系统Id,不传则取请求头 */
    systemId?: number;
    /** 用户名模糊查询 */
    userName?: string;
    /** 员工名字模糊查询 */
    employeeName?: string;
  };

  type GetUserBySystemOutput = {
    /** 用户Id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
    /** 员工Id */
    employeeId?: number;
    /** 员工名称 */
    employeeName?: string;
    /** 主职岗位名称 */
    positionName?: string;
    /** 主职所在的部门 */
    departName?: string;
    /** 主职所在的公司 */
    companyame?: string;
  };

  type GetUserBySystemOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserBySystemOutput[];
  };

  type GetUserBySystemPageDropDownListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    /** 子系统Id */
    systemId?: number;
    /** 因素Id */
    factorId?: number;
    permissionsType?: PermissionsType;
    isEnable?: boolean;
  };

  type GetUserCommpanyInfoOutput = {
    /** 公司表的Id，不是组织表的组织Id */
    companyId?: number;
    /** 公司中文名 */
    cnName?: string;
    /** 公司英文名 */
    enName?: string;
    /** 公司简称 */
    shortName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 省 */
    provinc?: number;
    /** 市 */
    city?: number;
    /** 大区 */
    bigDistrict?: number;
  };

  type GetUserCountryOutput = {
    /** 公司id */
    companyId?: number;
    /** 组织id */
    orgId?: number;
    /** 公司中文名 */
    companyCnName?: string;
    /** 公司简称 */
    companyShortName?: string;
    /** 公司英文名 */
    companyEnName?: string;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
    /** 国家/地区id */
    countryId?: number;
    /** 国家/地区名称 */
    countryName?: string;
  };

  type GetUserDetaliByCustomerOutput = {
    /** 用户Id */
    id?: number;
    /** 员工Id */
    empId?: number;
    /** 账号信息 */
    account?: string;
    /** 姓名 */
    userName?: string;
    /** 英文名 */
    enName?: string;
    /** 主职岗位名称 */
    jobName?: string;
    /** 主职所在公司Id */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 公司简称 */
    sCompanyName?: string;
    /** 主职所在部门Id */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 部门简称 */
    sDepartmentName?: string;
    /** 飞书头像信息 */
    avatar?: string;
  };

  type GetUserDetialInfoByFsIdsInput = {
    fsUserIds?: string[];
  };

  type GetUserDetialInfoByIdsInput = {
    userIds?: number[];
  };

  type GetUserDirectSupervisorOutput = {
    /** 用户id */
    userId?: number;
    /** 直属上级Id */
    supervisorId?: number;
    /** 直属上级用户名 */
    name?: string;
    /** 直属上级用户英文名 */
    enName?: string;
  };

  type GetUserDirectSupervisorOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserDirectSupervisorOutput[];
  };

  type GetUserHaveAuthOfBusinessRoleInput = {
    pageIndex?: number;
    pageSize?: number;
    userIds?: number[];
    keyWord?: string;
    /** 受权人用户Id */
    agentUserId?: number;
    /** 客户id */
    customerId?: number;
    /** 单个业务员id */
    userId?: number;
  };

  type GetUserIdNameBaseValueObject = {
    /** 用户id */
    id?: number;
    /** 用户姓名 */
    name?: string;
    /** 用户英文名 */
    enName?: string;
    /** 账号 */
    account?: string;
    /** 是否启用 */
    isEnable?: boolean;
    origin?: RoleUserOrigin;
    /** 是否由因素维护 */
    isMaintainByFactor?: boolean;
  };

  type GetUserIdNameBaseValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserIdNameBaseValueObject[];
  };

  type GetUserIdNameListOutput = {
    /** 用户id */
    userId?: number;
    /** 用户名 */
    name?: string;
    /** 用户英文名 */
    enName?: string;
    /** 用户账号 */
    account?: string;
    /** 公司id */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 公司英文名称 */
    companyEnName?: string;
    /** 公司Code */
    companyCode?: string;
    /** 公司简称 */
    abbreviation?: string;
    /** 是否大陆公司 */
    isMainlandCo?: boolean;
    /** 部门Id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
    /** 部门英文名称 */
    deptEnName?: string;
    /** 员工Id */
    employeeId?: number;
    /** 组织id */
    orgId?: number;
  };

  type GetUserIdNameListOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserIdNameListOutput[];
  };

  type GetUserInfoByCustomerInput = {
    /** id */
    ids?: number[];
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 公司id */
    companyId?: number;
    /** 部门id */
    deptId?: number;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 手机号 */
    telPhone?: string;
    /** 员工Id */
    employeeIds?: number[];
  };

  type GetUserInfoByCustomerOutput = {
    /** 用户Id */
    id?: number;
    /** 员工Id */
    empId?: number;
    /** 账号信息 */
    account?: string;
    /** 姓名 */
    userName?: string;
    /** 英文名 */
    enName?: string;
    /** 主职岗位名称 */
    jobName?: string;
    /** 主职所在公司Id */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 公司代码 */
    companyCode?: string;
    /** 公司简称 */
    sCompanyName?: string;
    /** 主职所在部门Id */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 部门简称 */
    sDepartmentName?: string;
  };

  type GetUserInfoByOrgIdsInput = {
    /** 组织id集合 */
    orgIds?: number[];
    jobStatus?: JobStatus;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type GetUserJobStatusOutput = {
    /** 用户id */
    id?: number;
    /** 名称 */
    name?: string;
    jobStatus?: JobStatus;
    /** 用户所在的组织id */
    orgId?: number;
    /** 用户所在的公司id */
    companyId?: number;
    /** 用户所在的部门id */
    deptId?: number;
  };

  type GetUserJobStatusOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserJobStatusOutput;
  };

  type GetUserListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户Id */
    userId?: number[];
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
  };

  type GetUserListOutput = {
    /** id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 英文名 */
    enName?: string;
    /** 姓名 */
    name?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 公司id */
    companyId?: number;
    /** 公司名 */
    companyName?: string;
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
    /** 是否业务员 */
    isBusiness?: boolean;
    /** 手机号 */
    telPhone?: string;
    /** 员工Id */
    employeeId?: number;
    /** 第三方登录说明 */
    userLoginRecord?: GetUserLoginRecordOutput[];
    /** 可登录系统（等） */
    canLoginSystem?: number[];
    /** 可登录子系统 */
    canLoginSystemName?: string;
    userOrigin?: UserOriginEnum;
    userOrignDesc?: string;
    /** 用户编码 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人编码 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetUserListValueObject = {
    /** id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 公司id */
    companyId?: number;
    /** 部门id */
    deptId?: number;
    /** 是否业务员 */
    isBusiness?: boolean;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 手机号 */
    telPhone?: string;
    /** 员工Id */
    employeeId?: number;
    /** 用户所属大区 */
    userBelongBigDistrict?: number;
    /** 用户所属大区名称 */
    userBelongBigDistrictName?: string;
    /** 公司名称 */
    companyName?: string;
    /** 公司英文名 */
    companyEnName?: string;
    /** 部门名称 */
    deptCnName?: string;
    /** 部门英文名 */
    deptEnName?: string;
    /** 用户编码 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人编码 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetUserListValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserListValueObject[];
  };

  type GetUserLoginRecordOutput = {
    /** 账号 */
    account?: string;
    /** 登录类型 */
    loginType?: number;
    /** 绑定值 */
    value?: string;
  };

  type GetUserOrgsOutput = {
    /** 组织Id */
    orgId?: number;
    /** 组织Code */
    orgCode?: string;
    orgType?: OrgTypeEnum;
  };

  type GetUserOrgsOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserOrgsOutput[];
  };

  type GetUserPageDropDownListByPositionBizTypesInput = {
    pageIndex?: number;
    pageSize?: number;
    /** id集合 */
    id?: number[];
    /** 在下拉框选中的id集合 */
    selectIds?: number[];
    /** 模糊搜索关键字 */
    keyWord?: string;
    /** 岗位业务类型 */
    positionBizTypes?: number[];
    jobStatus?: JobStatus;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type GetUserPageDropDownListByPositionBizTypesVO = {
    /** UserId */
    userId?: number;
    /** 用户中文名 */
    userName?: string;
    /** 用户英文名 */
    userEnName?: string;
    /** 用户账号 */
    account?: string;
    /** 员工Id */
    empId?: number;
    /** 员工姓名 */
    empName?: string;
    /** 员工英文名 */
    empEnName?: string;
  };

  type GetUserPageDropDownListByPositionBizTypesVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserPageDropDownListByPositionBizTypesVO[];
  };

  type GetUserSalesmanPageListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 公司id */
    companyIds?: number[];
    /** 模糊搜索关键字（用户名称/英文名） */
    keyWord?: string;
  };

  type GetUserSalesmanPageListOutput = {
    /** 用户id */
    id?: number;
    /** 用户姓名 */
    name?: string;
    /** 用户英文姓名 */
    enName?: string;
    /** 公司Id */
    companyId?: number;
    /** 部门id */
    deptId?: number;
  };

  type GetUserSalesmanPageListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserSalesmanPageListOutput[];
  };

  type IdBaseDto = {
    id?: number;
  };

  type InputOrOutputBasicId = {
    /** id */
    id?: number;
  };

  type Int32ListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: number[];
  };

  type JobStatus = 1 | 2;

  type MaintainUserInput = {
    options?: OptionType;
    /** Id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 密码 */
    passWord?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 手机号 */
    telPhone?: string;
    /** 公司Id */
    companyId?: number;
    /** 部门Id */
    deptId?: number;
    /** 组织Id */
    orgId?: number;
    /** 业务员密码 */
    messageCode?: string;
    /** 是否业务员 */
    isBusiness?: boolean;
    /** 员工Id */
    employeeId?: number;
  };

  type OfficeStatus = 1 | 2 | 3;

  type OptionType = 0 | 1 | 2 | 3;

  type OrgTypeEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
  };

  type PermissionsType = 1 | 2;

  type PositionnRelateOrg = {
    /** 组织ID */
    orgId?: number;
    /** 组织类型 */
    orgType?: number;
    /** 组织代码 */
    orgCode?: string;
    /** 组织中文名 */
    orgName?: string;
    /** 组织英文名 */
    orgShortName?: string;
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

  type RoleUserOrigin = 1 | 2;

  type SendSmsValidationInput = {
    /** 账号id */
    id?: number;
    /** 手机号码 */
    phoneNumber?: string;
    sendValidationMessageType?: SendValidationMessageType;
    /** 图片验证码Guid,作为发送短信的唯一id */
    guid?: string;
    /** 用户Id */
    userId?: number;
  };

  type SendValidationMessageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  type Sex = 1 | 2;

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };

  type UserEditTheSalesmantoSendsmsPOSTParams = {
    /** 触发验证码唯一id */
    Guid?: string;
    /** 用户id */
    userId?: number;
  };

  type UserEmpInfo = {
    /** 用户Id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
    /** 用户英文名 */
    userEnName?: string;
    /** 用户账号 */
    account?: string;
    /** 员工Id */
    empId?: number;
    /** 员工名称 */
    empName?: string;
    /** 员工英文名 */
    empEnName?: string;
    /** 主职公司Id */
    companyId?: number;
    /** 主职部门Id */
    deptId?: number;
    /** 组织id */
    orgId?: number;
    /** 岗位Id */
    positionId?: number;
    /** 是否为主职 */
    isMasterPosition?: boolean;
  };

  type UserGeneratorTokenByUserGETParams = {
    userId?: number;
  };

  type UserGetCurrentUserBasicInfoPOSTParams = {
    userId?: number;
  };

  type UserGetCurrentUserGETParams = {
    token?: string;
  };

  type UserGetCurrentUserSameAndSubordinateUserPOSTParams = {
    employeeId?: number;
  };

  type UserGetCurrentUserSubordinateUserPOSTParams = {
    employeeId?: number;
  };

  type UserGetOrgManagerGETParams = {
    orgIds?: number[];
  };

  type UserGetOrgUserIdsByIdPOSTParams = {
    userId?: number;
  };

  type UserGetRoleUserGETParams = {
    orgId?: number;
    roleCode?: string;
  };

  type UserGetRoleUserListByOrgIdGETParams = {
    OrgIds?: number[];
    /** 子系统Id */
    SystemId?: number;
    PageIndex?: number;
    PageSize?: number;
  };

  type UserGetRoleUserListByOrgPositionIdGETParams = {
    OrgId?: number;
    /** 岗位ID */
    PositionId?: number;
    /** 子系统Id */
    SystemId?: number;
    PageIndex?: number;
    PageSize?: number;
  };

  type UserGetRoleUserListByPositionIdGETParams = {
    /** 岗位ID */
    PositionId?: number;
    /** 子系统Id */
    SystemId?: number;
    PageIndex?: number;
    PageSize?: number;
  };

  type UserGetRoleUserListByRoleIdGETParams = {
    /** 角色ID */
    RoleId?: number;
    /** 子系统Id */
    SystemId?: number;
    PageIndex?: number;
    PageSize?: number;
  };

  type UserGetTopThreeUsersPOSTParams = {
    userId?: number;
  };

  type UserGetUserBasicDetialInfoByIdPOSTParams = {
    userId?: number;
  };

  type UserGetUserByUserIdPositionCodeGETParams = {
    /** 用户Id */
    userId?: number;
    /** 岗位code */
    code?: string;
    /** 是否主岗位 */
    isMasterPosition?: boolean;
  };

  type UserGetUserCommpanyInfoGETParams = {
    userId: number;
  };

  type UserGetUserDetialInfoByIdPOSTParams = {
    userId?: number;
  };

  type UserGetUserHaveAuthMyCustomerGETParams = {
    userId?: number;
  };

  type UserGetUserJobStatusPOSTParams = {
    userId?: number;
  };

  type UserGetUserManagerGETParams = {
    userId?: number;
  };

  type UserGetUserOrgsGETParams = {
    userId?: number;
  };

  type UserInfo = {
    /** 员工Id */
    employeeId?: number;
    /** 用户id */
    userId?: number;
    /** 员工工号 */
    employeeCode?: string;
    /** 员工姓名 */
    employeeName?: string;
    /** 员工英文名 */
    employeeEnName?: string;
    /** 电话 */
    telPhone?: string;
    /** 邮箱 */
    mail?: string;
    /** 出生日期 */
    birthDate?: string;
    sex?: Sex;
    workType?: WorkType;
    jobStatus?: JobStatus;
    officeStatus?: OfficeStatus;
  };

  type UserInfoListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: UserInfo[];
  };

  type UserIsRoleAdminPOSTParams = {
    systemId?: number;
    userId?: number;
  };

  type UserIsSysAdminPOSTParams = {
    token?: string;
  };

  type UserOriginEnum = 1 | 2 | 3;

  type UserResetPasswordPOSTParams = {
    userId?: number;
  };

  type WorkType = 1 | 2 | 3 | 4 | 5 | 6;
}
