declare namespace UserApi {
  type ApiConfigGetStringGETParams = {
    key: string;
  };

  type BusinessInfo = {
    id?: number;
    /** 员工Id */
    userId?: number;
    /** 业务主体名称 */
    name?: string;
    type?: BusinessMainBodyType;
    /** 业务主体英文名称 */
    enName?: string;
    /** 主体代码 */
    code?: string;
    /** 父级业务主体Id */
    parentId?: number;
    /** 所属组织公司Id */
    orgId?: number;
    /** 联系人 */
    contactName?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 联系地址 */
    contactAddress?: string;
    /** 子系统id */
    subSysId?: number;
    /** 是否启用 */
    isEnable?: boolean;
    /** 备注 */
    remark?: string;
    /** 树状子节点 */
    childBusinessList?: BusinessInfo[];
  };

  type BusinessMainBodyType = 1 | 2 | 3 | 4;

  type DropdownListDataDto = {
    key?: string;
    value?: number;
  };

  type GetAuthSystemListByLoginInput = {
    /** 业务类型：跨境电商物流1   干线物流2   国内代理贸易3
非业务类型 4 */
    sysBusinessTypeList?: number[];
    isBusinessType?: boolean;
  };

  type GetCompanyOut = {
    /** 关联公司层级集合 */
    associatedCompaniesList?: number[];
    /** 运营主体公司 */
    operatingSubjectCompany?: number;
  };

  type GetCompanyOutUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetCompanyOut;
  };

  type GetEmployeeByCompanyInput = {
    /** 关联公司的id */
    associatedCompanies?: number[];
  };

  type GetInternalInfoOutput = {
    /** 内部子系统Id */
    internalSystemId?: number;
    /** 运营主体Id */
    operatingSubjectId?: number;
    /** 运营主体名称 */
    operatingSubjectName?: string;
  };

  type GetSystemAuthUserInfoOutput = {
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
    /** 用户id */
    userId?: number;
    mode?: SubSysAuthMode;
    /** 授权模式 */
    modeName?: string;
  };

  type GetSystemDropDownListByPageInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 子系统id */
    id?: number[];
    /** 在下拉框中被选中的子系统id */
    selectIds?: number[];
    /** 子系统名称(中英文皆可) */
    name?: string;
  };

  type GetSystemDropDownListValueObject = {
    /** 子系统id */
    id?: number;
    /** 子系统名称 */
    name?: string;
    /** 子系统英文名称 */
    enName?: string;
  };

  type GetSystemDropDownListValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSystemDropDownListValueObject[];
  };

  type GetSystemListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 子系统名称，可查询中文名称以及英文名称 */
    systemName?: string;
    /** 启用状态 */
    isEnable?: boolean;
    systemProperty?: SystemPropertyEnum;
  };

  type GetSystemListOutput = {
    /** 子系统Id */
    id?: number;
    /** 子系统Id */
    key?: string;
    /** 权限类型 */
    sysAuthType?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    systemProperty?: SystemPropertyEnum;
    /** 子系统类型：1-Web、2-安装包exe */
    systemType?: string;
    /** 安装包下载链接，当类型为安装包时，必填 */
    downloadUrl?: string;
    /** 移动端链接 */
    mobileUrl?: string;
    /** 子系统Logo图标 */
    logoIcon?: string;
    /** 子系统Logo图标地址 */
    logoIconUrl?: string;
    /** 备注 */
    comment?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 主账号Id */
    mainUserId?: number;
    /** 排序值 */
    order?: number;
    /** 关联公司的id */
    associatedCompanies?: number[];
    /** 是否允许欠费下单 */
    isAllowPlaceOrder?: boolean;
    /** 创建编码 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人编码 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否开通余额 */
    isOpenBalance?: boolean;
    sysBusinessType?: SysBusinessType;
    /** 是否启用业务主体 */
    isEnableBusiness?: boolean;
    /** 是否开通授信 */
    isCredit?: boolean;
    /** 运营主体 */
    operatingSubject?: number;
    /** 是否结束初始化 */
    isEndInit?: boolean;
    /** 余额币种 */
    balanceCurrency?: number[];
    /** 关联的内部子系统 */
    associatedInternalSubsystem?: number;
    /** 飞书应用Id */
    fsAppId?: string;
  };

  type GetSystemListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSystemListOutput[];
  };

  type GetSystemNotPageListInput = {
    /** 子系统Id */
    systemId?: number;
    /** 子系统名称，可查询中文名称以及英文名称 */
    systemName?: string;
    /** 启用状态 */
    isEnable?: boolean;
    /** 只查非非业务类  true查非"非业务类"子系统，false不入查询条件 */
    isBusiness?: boolean;
    systemProperty?: SystemPropertyEnum;
    sysBusinessType?: SysBusinessType;
    /** 多个业务类型(或关系) */
    sysBusinessTypes?: SysBusinessType[];
  };

  type GetSystemOrgInput = {
    /** 子系统id */
    systemId?: number;
  };

  type GetSystemOrgListInput = {
    /** 子系统id */
    systemIds?: number[];
  };

  type GetSystemOrgOutput = {
    /** 公司Id */
    orgId?: number;
    /** 公司Code */
    coCode?: string;
    /** 公司简称 */
    shortName?: string;
    /** 中文名称 */
    orgCnName?: string;
    /** 英文名称 */
    orgEnName?: string;
  };

  type IdBaseDto = {
    id?: number;
  };

  type InputOrOutputBasicId = {
    /** id */
    id?: number;
  };

  type MainAccountOutput = {
    /** 用户Id */
    userId?: number;
    /** 员工名称 */
    employeeName?: string;
    /** 员工英文名 */
    employeeEnName?: string;
  };

  type MaintainSystemInput = {
    options?: OptionType;
    /** Id */
    id?: number;
    /** Key */
    key?: string;
    sysAuthType?: SysAuthType;
    systemProperty?: SystemPropertyEnum;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    systemType?: SystemTypeEnum;
    /** 安装包下载链接，当类型为安装包时，必填 */
    downloadUrl?: string;
    /** 移动端链接 */
    mobileUrl?: string;
    /** 子系统Logo图标 */
    logoIcon?: string;
    /** 备注 */
    comment?: string;
    /** 是否启用（状态） */
    isEnable?: boolean;
    /** 主账号Id */
    mainUserId?: number;
    /** 排序值 */
    order?: number;
    /** 是否开通余额 */
    isOpenBalance?: boolean;
    sysBusinessType?: SysBusinessType;
    /** 是否启用业务主体 */
    isEnableBusiness?: boolean;
    /** 是否开通授信 */
    isCredit?: boolean;
    /** 运营主体 */
    operatingSubject?: number;
    /** 余额币种 */
    balanceCurrency?: number[];
    /** 关联的内部子系统 */
    associatedInternalSubsystem?: number;
    /** 是否允许欠费下单 */
    isAllowPlaceOrder?: boolean;
    /** 飞书应用Id */
    fsAppId?: string;
    /** 是否结束初始化 */
    isEndInit?: boolean;
    /** 关联公司的id */
    associatedCompanies?: number[];
    /** 订单类型 */
    orderTypeList?: OrderTypeDto[];
    /** 子系统授权用户 */
    usersList?: MaintainSystemUser[];
  };

  type MaintainSystemUser = {
    id?: number;
    mode?: SubSysAuthMode;
    /** 用户Id */
    userId?: number;
    optionType?: OptionType;
  };

  type MaintainSystemUserInput = {
    /** 所属子系统 */
    systemId?: number;
    usersList?: MaintainSystemUser[];
  };

  type OptionType = 0 | 1 | 2 | 3;

  type OrderTypeDto = {
    id?: number;
    name?: string;
    orderTypeId?: number;
    financeOrderTypeId?: OrderTypeSignEnum;
    voucherTypeId?: number;
    settlementMethod?: SettlementMethodEnum;
    operationType?: OptionType;
  };

  type OrderTypeSignEnum = 1 | 2 | 4;

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
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

  type SettlementMethodEnum = 1 | 2 | 4;

  type SubSysAuthMode = 1 | 2;

  type SysAuthType = 1 | 2;

  type SysBusinessType = 1 | 2 | 3 | 4 | 5;

  type SystemGetAuthExternalSystemListByMaintainCustomerAccountPOSTParams = {
    /** 内部子系统Id */
    internalSystemId?: number;
  };

  type SystemGetBusinessBySystemGETParams = {
    /** 选择的子系统Id，必填 */
    systemId: number;
  };

  type SystemGetInternalInfoGETParams = {
    externalSystemId: number;
  };

  type SystemGetSubSystemIdBykeyPOSTParams = {
    key?: string;
  };

  type SystemGetSubSystemIsAllowPlaceOrderGETParams = {
    subKey?: string;
  };

  type SystemGetSystemAssociatedCompaniesPOSTParams = {
    systemId?: number;
  };

  type SystemGetSystemDropdownListPOSTParams = {
    /** 内部 = 1, 外部 = 2 null = 查所有 */
    systemProperty?: SystemPropertyEnum;
  };

  type SystemGetSystemTokenPOSTParams = {
    subKey?: string;
  };

  type SystemPropertyEnum = 1 | 2;

  type SystemTypeEnum = 1 | 2;

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };
}
