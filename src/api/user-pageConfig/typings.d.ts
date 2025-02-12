declare namespace API {
  type GetUserPageConfigInput = {
    /** 子系统Id */
    systemId?: number
    /** 页面Code */
    pageCode?: string
    /** 用户id */
    userId?: number
  }

  type IdBaseDto = {
    id?: number
  }

  type MaintainUserPageConfigInput = {
    /** 子系统Id */
    systemId?: number
    /** 页面Code */
    pageCode?: string
    /** 用户id */
    userId?: number
    /** 用户页面配置json */
    config?: string
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

  type UnifyResultDto = {
    code?: string
    msg?: string
    data?: any
  }
}
