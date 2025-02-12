declare namespace API {
  type AuthItemGetAuthByRoleIdsGETParams = {
    systemId?: number
    FactorId?: number
    roleIds?: number
  }

  type AuthItemGetNotAuthByRoleIdsGETParams = {
    systemId?: number
    FactorId?: number
    roleIds?: number
  }

  type AuthItemGetPageListByRoleIdGETParams = {
    /** 子系统Id */
    SystemId?: number
    RoleId?: number
    AuthName?: string
    FactorId?: number
    PageIndex?: number
    PageSize?: number
  }

  type AuthItemGetTransferToUserRoleOfAuthGETParams = {
    userId?: number
    systemId?: number
  }

  type AuthItemGetUserPermissionLinkCodePOSTParams = {
    userId?: number
    subSysId?: number
  }

  type AuthLink = {
    /** 链接名 */
    linkName?: string
    /** 链接地址 */
    linkAddress?: string
    /** 编码 */
    code?: string
  }

  type AuthLinkEntity = {
    /** Id */
    id?: number
    /** 权限项Id */
    authId?: number
    /** 编码 */
    code?: string
    /** 链接名 */
    linkName?: string
    /** 链接地址 */
    linkAddress?: string
    isDeleted?: boolean
  }

  type AuthSourceEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

  type AuthValueObject = {
    /** 权限项Id */
    id?: number
    /** 权限名称 */
    name?: string
    authClassifyId?: number
  }

  type AuthValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: AuthValueObject[]
  }

  type GetAuthByClassIdsListInput = {
    pageIndex?: number
    pageSize?: number
    /** 子系统Id */
    systemId?: number
    /** 权限项名称 */
    name?: string
    /** 权限分类Id */
    authClassifyId?: number[]
    /** 是否启用 */
    isEnable?: boolean
  }

  type GetAuthListInput = {
    pageIndex?: number
    pageSize?: number
    /** 子系统Id */
    systemId?: number
    /** 权限项名称 */
    name?: string
    /** 权限分类Id */
    authClassifyId?: number
    /** 是否启用 */
    isEnable?: boolean
  }

  type GetAuthListOutputValueObject = {
    /** 创建人Id */
    createUserId?: number
    /** 创建人名称 */
    createUserName?: string
    /** 创建时间 */
    createTime?: string
    /** 修改人Id */
    updateUserId?: number
    /** 修改人名称 */
    updateUserName?: string
    /** 修改时间 */
    updateTime?: string
    /** 权限项Id */
    id?: number
    /** 子系统Id */
    systemId?: number
    /** 权限项名称 */
    name?: string
    /** 权限分类Id */
    authClassifyId?: number
    /** 权限分类名称 */
    authClassifyName?: string
    /** 链接信息列表 */
    links?: AuthLinkEntity[]
    /** 备注 */
    comment?: string
    /** 排序 */
    order?: number
    /** 是否启用 */
    isEnable?: boolean
  }

  type GetAuthListOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: GetAuthListOutputValueObject[]
  }

  type GetMenuAuthInfo = {
    /** 权限项Id */
    id?: number
    /** 权限项名称 */
    name?: string
    /** 权限按钮编码 */
    btnCode?: string
    /** 链接名称 */
    linkName?: string
    /** 链接地址 */
    linkAddress?: string
  }

  type GetUserAllocatedOfAuthTreeListInput = {
    /** 子系统Id */
    systemId?: number
    /** 用户Id */
    userId?: number
    /** 权限项名称 */
    authName?: string
    factorId?: number
  }

  type GetUserAuthListInput = {
    pageIndex?: number
    pageSize?: number
    /** 子系统Id */
    systemId?: number
    /** 用户Id */
    userId?: number
    /** 权限项名称 */
    authName?: string
    factorId?: number
  }

  type GetUserAuthListOutput = {
    /** 权限项Id */
    authId?: number
    /** 权限项名称 */
    authName?: string
    /** 权限项分类 */
    authClassifyId?: number
    /** 授权类型 */
    empowerType?: string
    /** 角色名 */
    roleName?: string
    /** 权限来源 */
    authSource?: string
    authSourceType?: AuthSourceEnum
    /** 被转移人 */
    userName?: string
    /** 被转移人 */
    userId?: number
    /** 授权接收人 */
    agentUserId?: number
    /** 转移原因 */
    agentType?: string
    /** 有效期 */
    termOfValidity?: string
    /** 有效期开始日期 */
    termBeginTime?: string
    /** 有效期结束日期 */
    termEndTime?: string
    /** 因素Id */
    factorId?: number
  }

  type GetUserAuthListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: GetUserAuthListOutput[]
  }

  type GetUserMenuListInput = {
    /** 子系统Id */
    systemId?: number
    /** 用户Id */
    userId?: number
  }

  type IdBaseDto = {
    id?: number
  }

  type MaintainAuthInput = {
    options?: OptionType
    /** 权限项Id */
    id?: number
    /** 子系统Id */
    systemId?: number
    /** 权限项名称 */
    name?: string
    /** 权限分类Id */
    authClassifyId?: number
    /** 链接信息列表 */
    links?: AuthLink[]
    /** 备注 */
    comment?: string
    /** 排序 */
    order?: number
    /** 是否启用 */
    isEnable?: boolean
  }

  type OptionType = 0 | 1 | 2 | 3

  type PageInfoOutput = {
    pageIndex?: number
    pageSize?: number
    total?: number
  }

  type RemoteServiceErrorInfo = {
    code?: string
    message?: string
    details?: string
    data?: Record<string, any>
    validationErrors?: RemoteServiceValidationErrorInfo[]
  }

  type RemoteServiceErrorResponse = {
    error?: RemoteServiceErrorInfo
  }

  type RemoteServiceValidationErrorInfo = {
    message?: string
    members?: string[]
  }
}
