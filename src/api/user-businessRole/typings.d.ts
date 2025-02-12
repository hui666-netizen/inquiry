declare namespace UserApi {
  type ApiConfigGetStringGETParams = {
    key: string;
  };

  type BuinessRoleUserOutput = {
    /** id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 手机号 */
    telPhone?: string;
    /** 员工Id */
    employeeId?: number;
  };

  type BuinessRoleUserOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: BuinessRoleUserOutput[];
  };

  type BuinessRoleUserOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: BuinessRoleUserOutput[];
  };

  type BuinessRoleUserOutputUnifyPageResultDtoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: BuinessRoleUserOutputUnifyPageResultDto;
  };

  type BusinessRoleDeleteBusinessRoleListByUserIdGETParams = {
    ids?: number[];
  };

  type BusinessRoleEnum =
    | 1
    | 2
    | 11
    | 12
    | 21
    | 22
    | 31
    | 32
    | 41
    | 42
    | 43
    | 44
    | 50
    | 60
    | 62
    | 64
    | 80
    | 90
    | 92
    | 94
    | 101
    | 102
    | 107
    | 108
    | 125
    | 130
    | 150
    | 155
    | 160
    | 171
    | 176
    | 200;

  type BusinessRoleGetBusinessRoleByUserIdGETParams = {
    userId?: number;
  };

  type BusinessRoleGetBusinessRoleEmpListByBusinessRoleGETParams = {
    businessRole?: number;
  };

  type BusinessRoleGetBusinessRoleEmpListByEmpIdGETParams = {
    empId?: number;
  };

  type BusinessRoleGetBusinessRoleListByUserIdGETParams = {
    userId?: number;
  };

  type BusinessRoleGetBusRoleUserPageListByTypeAndCompanyGETParams = {
    businessRole?: number;
    businessType?: CamsBusinessTypeEnum;
    orgId?: number;
    pageIndex?: number;
    pageSize?: number;
  };

  type BusinessRoleGetBussinessRoleUserByUserIdPOSTParams = {
    userId: number;
  };

  type BusinessRoleGetCustomerIdByBussinessRoleUserIdPOSTParams = {
    userId: number;
  };

  type BusinessRoleGetUserRelationBusinessRoleItemsGETParams = {
    userId?: number;
  };

  type BusinessRoleQueryHaveAuthToSelectCustomerWithContractGETParams = {
    /** 子系统Id */
    systemId?: number;
    /** 用户Id */
    userId?: number;
  };

  type BusinessRoleRelationOutput = {
    /** 业务角色id */
    roleEnumValue?: number;
    /** 业务角色名称 */
    bizRoleDesc?: string;
  };

  type CamsBusinessTypeEnum = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256;

  type CombineCondition = {
    /** 大区id集合 */
    bigDistricts?: number[];
    /** 排除公司id集合 */
    excludeCompanyIds?: number[];
  };

  type CustomerQualityEnum = 1 | 4 | 16 | 64 | 512 | 1024 | 2048;

  type EmployeeConditionOutput = {
    /** 员工ID */
    employeeId?: number;
    /** 用户Id */
    userId?: number;
    /** 工号 */
    employeeCode?: string;
    /** 员工名称 */
    employeeName?: string;
    /** 员工英文名 */
    enName?: string;
    /** 岗位名称Id */
    positionId?: number;
    /** 岗位名称 */
    positionName?: string;
    /** 组织名称Id */
    organizationId?: number;
    /** 组织名称 */
    organizationName?: string;
    /** 公司名称 */
    companyName?: string;
  };

  type GetBuinessRoleListOutput = {
    /** 业务角色列表 */
    businessRoleUserList?: UserBusinessInfo[];
    /** 用户所属公司 */
    companyId?: number;
    /** 用户所属大区 */
    bigDistrict?: number;
    /** 用户大区名称 */
    bigDistrictName?: string;
    /** 用户大区名称 */
    bigDistrictEnName?: string;
    /** 用户id */
    userId?: number;
  };

  type GetBuinessRoleListOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetBuinessRoleListOutput[];
  };

  type GetBuinessRoleOutput = {
    /** 业务角色列表 */
    businessRoleUserList?: UserBusinessInfo[];
    /** 用户所属公司 */
    companyId?: number;
    /** 用户所属大区 */
    bigDistrict?: number;
    /** 用户大区名称 */
    bigDistrictName?: string;
    /** 用户大区名称 */
    bigDistrictEnName?: string;
  };

  type GetBuinessRoleOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetBuinessRoleOutput;
  };

  type GetBusinessRoleDropDownListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** id集合 */
    id?: number[];
    /** 在下拉框选中的id集合 */
    selectIds?: number[];
    /** 模糊搜索关键字 */
    keyWord?: string;
    /** 是否启用 */
    isEnable?: boolean;
  };

  type GetBusinessRoleDropDownListValueObject = {
    id?: number;
    name?: string;
  };

  type GetBusinessRoleDropDownListValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBusinessRoleDropDownListValueObject[];
  };

  type GetBusinessRoleEmpListOutput = {
    /** 业务角色id */
    businessRoleId?: number[];
    /** 业务角色名称 */
    name?: string;
  };

  type GetBusinessRoleEmpValueObject = {
    id?: number;
    /** 业务角色id */
    busRoleId?: number;
    /** 业务角色名字 */
    name?: string;
  };

  type GetBusinessRoleInfoByUserIdInput = {
    /** 用户id */
    userId?: number;
  };

  type GetBusinessRoleInfoByUserIdOutput = {
    /** 用户Id */
    userId?: number;
    /** Code */
    code?: string;
    /** 业务角色名称 */
    name?: string;
    /** 业务角色id */
    roleId?: number;
    /** 业务角色枚举描述 */
    roleDesc?: string;
    /** 业务角色组成项 */
    roleList?: number[];
    type?: CamsBusinessTypeEnum;
    /** 业务类型枚举描述 */
    typeDesc?: string;
    /** 业务类型组成项 */
    typeList?: number[];
    customerNature?: CustomerQualityEnum;
    /** 客户性质枚举描述 */
    customerNatureDesc?: string;
    /** 客户性质组成项 */
    customerNatureList?: number[];
  };

  type GetBusinessRoleInfoByUserIdOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetBusinessRoleInfoByUserIdOutput[];
  };

  type GetBusinessRoleInfoPageListInput = {
    pageIndex?: number;
    pageSize?: number;
    userId?: number;
    businessRolesEnumKey?: number;
  };

  type GetBusinessRoleInfoPageListOutput = {
    /** 业务角色与员工表的主键ID */
    businessRoleEmployeeId?: number;
    /** 业务角色表Id */
    businessRoleId?: number;
    /** 业务角色名称 */
    businessRoleName?: string;
    /** 业务角色枚举描述 */
    roleDesc?: string;
    /** 业务角色组成项 */
    roleList?: number[];
    /** 用户Id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
    /** 账号 */
    account?: string;
    /** 主岗Id */
    mainPositoin?: number;
    /** 主岗名称 */
    mainPositoinName?: string;
    /** 主岗部门Id */
    mainDepartId?: number;
    /** 主岗部门名称 */
    mainDepartName?: string;
    /** 主岗公司Id */
    mainCompanyId?: number;
    /** 主岗公司名称,组织表的名称 */
    mainCompanyName?: string;
  };

  type GetBusinessRoleInfoPageListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBusinessRoleInfoPageListOutput[];
  };

  type GetBusinessRoleListByUserIdsInput = {
    /** 用户id集合 */
    userIds?: number[];
  };

  type GetBusinessRoleListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 为空查询所有，传值跟查询指定数据 */
    isEnable?: boolean;
    /** 角色名称 */
    name?: string;
  };

  type GetBusinessRoleListOutput = {
    /** 创建人Id */
    createUserId?: number;
    /** 创建人名称 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人Id */
    updateUserId?: number;
    /** 修改人名称 */
    updateUserName?: string;
    /** 修改时间 */
    updateTime?: string;
    id?: number;
    name?: string;
    /** 业务角色编码 */
    code?: string;
    /** 客户性质 */
    customerNature?: number[];
    /** 客户性质名称 */
    customerNatureDisplayName?: string;
    /** 业务类型 */
    type?: number[];
    /** 业务类型显示名称 */
    typeDisplayName?: string;
    /** 业务角色 */
    role?: number[];
    /** 业务角色显示名称 */
    roleDisplayName?: string;
    /** 是否启用 */
    isEnable?: boolean;
  };

  type GetBusinessRoleListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBusinessRoleListOutput[];
  };

  type GetBusinessRoleUserDropDownListByPageInput = {
    pageIndex?: number;
    pageSize?: number;
    /** id集合 */
    id?: number[];
    /** 在下拉框选中的id集合 */
    selectIds?: number[];
    /** 模糊搜索关键字 */
    keyWord?: string;
    /** 组织Id */
    orgIds?: number;
    /** 业务角色集合 */
    businessRoles?: BusinessRoleEnum[];
    /** 岗位代码集合 */
    positionCodes?: string[];
  };

  type GetBusinessRoleUserDropDownListByPageOutput = {
    /** 用户id */
    id?: number;
    /** 用户名 */
    name?: string;
    /** 用户名 */
    enName?: string;
    /** 组织id */
    orgId?: number;
    /** 用户账号 */
    account?: string;
    /** 部门名称 */
    deptName?: string;
    /** 部门英文名称 */
    deptEnName?: string;
    /** 公司Code */
    companyCode?: string;
    /** 手机号 */
    telPhone?: string;
    /** 邮箱 */
    mail?: string;
  };

  type GetBusinessRoleUserDropDownListByPageOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBusinessRoleUserDropDownListByPageOutput[];
  };

  type GetBusinessRoleUserInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    /** 业务角色ID */
    businessRole?: number[];
    /** 业务类型 */
    businessType?: CamsBusinessTypeEnum[];
    /** 公司id集合 */
    companyIds?: number[];
    combineCondition?: CombineCondition;
  };

  type GetBusinessRoleUserRelationByUserIdInput = {
    pageIndex?: number;
    pageSize?: number;
    /** id集合 */
    id?: number[];
    /** 在下拉框选中的id集合 */
    selectIds?: number[];
    /** 模糊搜索关键字 */
    keyWord?: string;
    /** 传入的用户id(为空默认登陆人) */
    userId?: number;
  };

  type GetBusinessRoleUserRelationDropDownListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    businessRoles?: number[];
  };

  type GetBusinessRoleUserRelationListInput = {
    businessRoles?: number[];
    userId?: number;
  };

  type GetBusinessRoleUserRelationPageListInput = {
    pageIndex?: number;
    pageSize?: number;
    businessRoles?: number[];
    userId?: number;
    keyword?: string;
  };

  type GetBusinessRoleUserRelationValueObject = {
    /** 用户id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
    /** 用户英文名 */
    userEnName?: string;
    /** 公司id */
    coId?: number;
    /** 公司名称 */
    coName?: string;
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
  };

  type GetBusinessRoleUserRelationValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBusinessRoleUserRelationValueObject[];
  };

  type GetBusinessRoleUserWithCompanyOrgInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    /** 或条件的 业务角色集合 */
    busRoleListOr?: BusinessRoleEnum[];
    busRole?: BusinessRoleEnum;
    /** 所属公司，组织表Id */
    companyOrgId?: number;
    /** 所属国家Id */
    countryId?: number;
  };

  type GetBusinessRoleUserWithUserInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 用户id */
    userId?: number[];
    /** 选择的id */
    selectedIds?: number[];
    /** 模糊搜索的key */
    name?: string;
    /** 或条件的 业务角色集合 */
    busRoleListOr?: BusinessRoleEnum[];
    busRole?: BusinessRoleEnum;
    /** 委托客户id */
    customerId?: number;
  };

  type GetBusinessRoleWithUserBySystemInput = {
    businessRoleId?: number[];
    /** 子系统id,不传取请求头 */
    subSystemId?: number;
  };

  type GetBusinessRoleWithUserBySystemValueObject = {
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
    /** 所属岗位名称 */
    positionName?: string;
    positionEnName?: string;
    /** 所属公司名称 */
    companyName?: string;
    companyEnName?: string;
    /** 部门名称 */
    deptName?: string;
  };

  type GetCamsBusinessRoleUserValueObject = {
    /** 用户id */
    userId?: number;
    /** 用户Name */
    userName?: string;
    /** 用户英文名 */
    userEnName?: string;
    /** 账号 */
    account?: string;
    /** 公司id */
    companyOrgId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 公司Code */
    companyCode?: string;
    /** 公司简称 */
    companyAbbreviation?: string;
    /** 是否大陆公司 */
    isMainlandCo?: boolean;
    /** 部门Id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
    /** 飞书id */
    fsLoginApp_OpenId?: string;
    businessRoleEnums?: number[];
  };

  type GetCamsBusinessRoleUserValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCamsBusinessRoleUserValueObject[];
  };

  type GetSalesmanAuthUserOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
    id?: number;
    /** 业务员Id */
    salesmanId?: number;
    /** 业务员中文名 */
    salesmanName?: string;
    /** 业务员英文名 */
    salesmanEnName?: string;
    /** 接收人Id */
    recipientId?: number;
    /** 接收人中文名 */
    recipientName?: string;
    /** 接收人英文名 */
    recipientEnName?: string;
    /** 授权开始时间 */
    authBeginTime?: string;
    /** 授权结束时间 */
    authEndTime?: string;
    /** 公司中文名 */
    coName?: string;
    /** 公司英文名 */
    coEnName?: string;
    /** 部门中文名 */
    deptName?: string;
    /** 部门英文名 */
    deptEnName?: string;
    /** 用户Id */
    createUserId?: number;
    /** 用户Id */
    createName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人编码 */
    updateUserId?: number;
    /** 修改人姓名 */
    updateUserName?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetSalesmanAuthUserOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSalesmanAuthUserOutput[];
  };

  type GetSalesmanAuthUserPageListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 业务员Id */
    salesmanId?: number;
    /** 接收人Id */
    recipientId?: number;
  };

  type GetUserAssociatedWithCompanyBizRolesInput = {
    /** 所属公司Id */
    companyId?: number;
    /** 业务角色枚举值 */
    businessRoles?: BusinessRoleEnum[];
    businessRole?: BusinessRoleEnum;
    /** 是否公司业务员 */
    isSalesman?: boolean;
  };

  type GetUserAssociatedWithPositionIdentityInput = {
    /** 所属公司Id */
    companyId?: number;
    /** 业务角色枚举值 */
    businessRoles?: BusinessRoleEnum[];
    businessRole?: BusinessRoleEnum;
    /** 岗位身份 */
    positionIdentity?: string[];
  };

  type GetUserAssociatedWithPositionIdentityOutput = {
    /** 用户id */
    userId?: number;
    /** 用户名称 */
    name?: string;
    /** 用户英文名称 */
    enName?: string;
    /** 岗位身份编码 */
    identityCode?: string;
    /** 岗位身份中文名 */
    identityName?: string;
    /** 岗位身份英文名 */
    identityEnName?: string;
  };

  type GetUserAssociatedWithPositionIdentityOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserAssociatedWithPositionIdentityOutput[];
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

  type GetUserIdNameListBasicOutput = {
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
  };

  type GetUserIdNameListBasicOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserIdNameListBasicOutput[];
  };

  type GetUserInfoAssociatedWithBizRoleInput = {
    /** 业务角色的主键id */
    ids?: number[];
  };

  type GetUserInfoAssociatedWithBizRoleOutput = {
    /** 业务角色表主键id */
    id?: number;
    /** 业务角色Code */
    bizRoleCode?: string;
    /** 业务角色Code */
    bizRoleName?: string;
    /** 用户id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
    /** 用户英文名称 */
    userEnName?: string;
    /** 公司Id */
    companyId?: number;
    /** 公司Code */
    companyCode?: string;
    /** 公司名称 */
    companyName?: string;
    /** 公司英文名称 */
    companyEnName?: string;
    /** 部门Id */
    deptId?: number;
    /** 部门Code */
    deptCode?: string;
    /** 部门名称 */
    deptName?: string;
    /** 部门英文名称 */
    deptEnName?: string;
  };

  type GetUserInfoAssociatedWithBizRoleOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserInfoAssociatedWithBizRoleOutput[];
  };

  type GetUserInfoByBizRoleInput = {
    /** 搜索关键字 */
    keyWord?: string;
    /** 业务角色id */
    bizRoleId?: number;
    /** 公司Id */
    companyId?: number;
    /** 部门Id */
    deptId?: number;
    /** 用户id */
    userIds?: number[];
  };

  type GetUserInfoByBizRoleOutput = {
    /** 用户id */
    userId?: number;
    /** 是否启用（false，离职） */
    isEnable?: boolean;
    /** 工号、账号 */
    account?: string;
    /** 用户名称 */
    name?: string;
    /** 用户英文名 */
    enName?: string;
    /** 公司id */
    companyId?: number;
    /** 公司名称 */
    companyName?: string;
    /** 部门id */
    deptId?: number;
    /** 部门名称 */
    deptName?: string;
    /** 业务角色名称 */
    bizRoleName?: string;
    /** 业务子角色 */
    businessRoleRelation?: BusinessRoleRelationOutput[];
  };

  type GetUserInfoByBizRoleOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserInfoByBizRoleOutput[];
  };

  type GetUserListByBusinessRoleInfoInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 关键字搜索 */
    keyWord?: string;
    /** 业务角色名称对应的Code集合 */
    codeList?: string[];
    /** 客户性质集合，集合里面传明确的枚举项 */
    customerNatureList?: CustomerQualityEnum[];
    /** 业务类型集合，集合里面传明确的枚举项 */
    businessTypeList?: CamsBusinessTypeEnum[];
    /** 业务角色集合，集合里面传明确的枚举项 */
    businessRoleList?: number[];
  };

  type GetUserListByBusinessRoleInfoOutput = {
    /** id */
    id?: number;
    /** Account */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 公司id */
    companyId?: number;
    /** 部门id */
    deptId?: number;
    /** 所属大区id */
    maintainerAdministrativeDivisionId?: number;
    /** 大区名称 */
    maintainerAdministrativeDivisionCnName?: string;
    /** 大区英文名称 */
    maintainerAdministrativeDivisionEnName?: string;
    /** 公司名称 */
    companyCnName?: string;
    /** 公司英文名称 */
    companyEnName?: string;
  };

  type GetUserListByBusinessRoleInfoOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUserListByBusinessRoleInfoOutput[];
  };

  type GetUserListByBusinessRoleInfoOutputUnifyPageResultDtoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetUserListByBusinessRoleInfoOutputUnifyPageResultDto;
  };

  type Int32ListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: number[];
  };

  type IsHaveBusinessRoleByUserInput = {
    /** 用户Id */
    userId?: number;
    /** code */
    code?: string;
    searchType?: SerachTypeEnum;
    /** 该维度下的值
如：查询维度传 客户性质 1，
value 传 3， 则表示 查询 客户性质下 包含 国内同行1和国外同行2 的数据，这里是且的关系
查询维度为业务角色时，业务角色为关联表，传具体值 */
    value?: number;
    /** 如果需要判断多个业务角色传这个值(其中有一个角色满足条件就返回true) */
    businessRole?: number[];
  };

  type IsHaveBusinessRoleByUserOutput = {
    isHave?: boolean;
  };

  type IsHaveBusinessRoleByUserOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: IsHaveBusinessRoleByUserOutput;
  };

  type MaintainBusinessRoleEmpInput = {
    options?: OptionTypeNoDelete;
    /** 员工 */
    empId?: number;
    /** (用户)账号Id */
    userId?: number;
    /** 业务角色Id */
    businessRoleId?: number[];
  };

  type MaintainBusinessRoleInput = {
    options?: OptionTypeNoDelete;
    id?: number;
    /** 业务角色名称 */
    name?: string;
    /** 业务角色编码 */
    code?: string;
    /** 客户性质 */
    customerNatures?: CustomerQualityEnum[];
    /** 业务类型 */
    types?: CamsBusinessTypeEnum[];
    /** 业务角色 */
    roles?: number[];
    /** 是否启用 */
    isEnable?: boolean;
  };

  type MaintainBusinessRoleUserRelationField = {
    id?: number;
    /** 用户id */
    userId?: number;
    /** 代理人id */
    agentUserId?: number;
    /** 授权开始时间 */
    authBeginTime?: string;
    /** 授权结束时间 */
    authEndTime?: string;
    /** 委托客户 */
    customerIds?: number[];
  };

  type MaintainBusinessRoleUserRelationInput = {
    options?: OptionType;
    input?: MaintainBusinessRoleUserRelationField[];
  };

  type OptionType = 0 | 1 | 2 | 3;

  type OptionTypeNoDelete = 1 | 3;

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
  };

  type PostBusinessRoleInfoInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 业务角色ID */
    businessRole?: number[];
    businessType?: CamsBusinessTypeEnum;
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

  type SerachTypeEnum = 1 | 2 | 3;

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };

  type UserBusinessInfo = {
    /** 配置业务角色Id */
    businessRoleSettingId?: number;
    /** 配置业务角色名称 */
    businessRoleSettingName?: string;
    /** 业务角色列表 */
    businessRoleList?: number[];
    /** 多个业务角色逗号分割 */
    businessRoleName?: string;
    /** 业务类型列表 */
    businessTypeList?: CamsBusinessTypeEnum[];
    /** 多个业务类型逗号分割 */
    businessTypeName?: string;
  };

  type UserInfoOutput = {
    /** id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 手机号 */
    telPhone?: string;
    /** 员工Id */
    employeeId?: number;
    /** 公司Id */
    companyId?: number;
    /** 用户飞书头像URL */
    feiShuURL?: string;
  };

  type UserInfoOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: UserInfoOutput[];
  };
}
