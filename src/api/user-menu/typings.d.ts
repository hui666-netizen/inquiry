declare namespace UserApi {
  type AuthType = 1 | 2;

  type FunctionEnum = 1 | 2;

  type GetAuthClassifyItemsTreeListOutput = {
    /** Id */
    id?: number;
    authType?: AuthType;
    /** 名称 */
    name?: string;
    /** 类型为权限项PId为AuthClassifyId */
    pId?: number;
    /** 子对象 */
    children?: GetAuthClassifyItemsTreeListOutput[];
  };

  type GetAuthClassifyListInput = {
    /** 子系统id */
    systemId?: number;
    /** 因素Id,无因素传null或0 */
    factorId?: number;
    /** 权限项名称 */
    authName?: string;
    isEnable?: boolean;
  };

  type GetMenuListInput = {
    /** 子系统Id */
    systemId?: number;
    /** 中文名 */
    cnName?: string;
  };

  type GetMenuListOutput = {
    /** 目录菜单Id */
    id?: number;
    /** 子系统Id */
    systemId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 菜单类型 1目录 2页面 */
    menuType?: number;
    /** 父级Id */
    pId?: number;
    /** 图标 */
    icon?: string;
    /** 地址 */
    path?: string;
    /** 组件名称 */
    componentName?: string;
    /** 组件 */
    component?: string;
    /** 是否隐藏 */
    isHide?: boolean;
    /** 是否包含下级页面 */
    isIncludeSubPage?: boolean;
    /** 详情高亮菜单路径 */
    detailPath?: string;
    /** 是否缓存页面 */
    isCache?: boolean;
    /** 是否多开页面 */
    isMultipleOpenPage?: boolean;
    /** 重定向地址 */
    redirect?: string;
    /** 状态 */
    isEnable?: boolean;
    /** 权限Id */
    authId?: number;
    /** 排序 */
    order?: number;
    /** 备注 */
    comment?: string;
    /** 创建人编码 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人编码 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 子集 */
    children?: GetMenuListOutput[];
  };

  type GetMenuParentListInput = {
    /** 子系统Id */
    systemId?: number;
    function?: FunctionEnum;
    factorId?: number;
  };

  type GetMenuParentListOutput = {
    /** 菜单Id */
    id?: number;
    /** 访问路径 */
    path?: string;
    /** 组件名称 */
    name?: string;
    /** 组件路径 */
    component?: string;
    meta?: MenuMeta;
    /** 子集 */
    children?: GetMenuParentListOutput[];
  };

  type GetMenuParentListOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetMenuParentListOutput[];
  };

  type IdBaseDto = {
    id?: number;
  };

  type MaintainMenuInput = {
    options?: OptionType;
    /** 目录菜单Id */
    id?: number;
    /** 子系统Id */
    systemId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    menuType?: FunctionEnum;
    /** 父级节点 */
    pid?: number;
    /** 图标字符串 */
    icon?: string;
    /** 地址 */
    path?: string;
    /** 组件名称 */
    componentName?: string;
    /** 组件 */
    component?: string;
    /** 重定向地址 */
    redirect?: string;
    /** 权限项Id */
    authId?: number;
    /** 排序 */
    order?: number;
    /** 状态 */
    isEnable?: boolean;
    /** 备注说明 */
    comment?: string;
    /** 是否隐藏 */
    isHide?: boolean;
    /** 是否包含下级页面 */
    isIncludeSubPage?: boolean;
    /** 详情高亮菜单路径 */
    detailPath?: string;
    /** 是否缓存页面 */
    isCache?: boolean;
    /** 是否多开页面 */
    isMultipleOpenPage?: boolean;
  };

  type MenuGetsubSystemMenuTreeListByBizIdGETParams = {
    /** 业务Id/仓库Id */
    bizId?: number;
    /** 子系统id */
    subSysId?: number;
    /** 用户id */
    userId?: number;
  };

  type MenuGetsubSystemMenuTreeListGETParams = {
    /** 子系统id */
    subSysId?: number;
    /** 用户id */
    userId?: number;
    /** 用户id */
    factorId?: number;
  };

  type MenuGetUserMenuListGETParams = {
    /** 子系统id */
    subSysId?: number;
    /** 用户id */
    userId?: number;
  };

  type MenuMeta = {
    /** 页面标题 */
    title?: string;
    /** 页面英文标题 */
    enTitle?: string;
    /** 图标 */
    icon?: string;
    /** 是否缓存页面 */
    noKeepAlive?: boolean;
    /** 是否多开页面 */
    dynamicNewTab?: boolean;
    /** 详情高亮菜单路径 */
    activeMenu?: string;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 是否包含下级页面 */
    isLevel2?: boolean;
  };

  type OptionType = 0 | 1 | 2 | 3;

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
}
