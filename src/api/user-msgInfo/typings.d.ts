declare namespace API {
  type ChannelEnum = 1 | 2 | 4 | 8 | 16

  type FailTypeEnum = 1 | 2 | 3

  type GetMoreMessageInput = {
    pageIndex?: number
    pageSize?: number
    /** 消息标题 */
    msgTitle?: string
    /** 消息内容 */
    msgContent?: string
    /**
 发送日期，不为空时查询该日发送的消息。
格式：年-月-日 2023-04-02
     */
    sendDate?: string
    /** 消息类型Id */
    msgTypeId?: number
    /** 消息状态：true已读，false未读，undefined、null查所有 */
    isRead?: boolean
    /** 接收人用户Id */
    receiverUserId?: number
    /** 是否发送成功  true成功  false失败 null查所有 */
    isSuccess?: boolean
  }

  type GetMoreMessageOutput = {
    id?: number
    /** 消息状态：true已读，false未读 */
    isRead?: boolean
    /** 消息类型Id */
    msgTypeId?: number
    /** 消息类型名称 */
    msgTypeName?: string
    /** 消息标题 */
    msgTitle?: string
    /** 消息内容 */
    msgContent?: string
    /** 文件下载地址 */
    fileDownUrl?: string
    /** 发送时间 */
    sendTime?: string
    /** pc端链接 */
    pcUrl?: string
    /** 移动端链接 */
    mobileUrl?: string
  }

  type GetMoreMessageOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: GetMoreMessageOutput[]
  }

  type GetNotifyInput = {
    pageIndex?: number
    pageSize?: number
    userId?: number
    systemId?: number
  }

  type GetNotifyOutput = {
    total?: number
    msgCount?: number
    taskCount?: number
    flowCount?: number
    msgRes?: GetMoreMessageOutputUnifyPageResultDto
    taskRes?: GetTaskProgresValueObjectUnifyPageResultDto
    flowRes?: GetUnprocessedProcessVoUnifyPageResultDto
  }

  type GetTaskProgresValueObject = {
    /** 任务实例Id */
    id?: number
    /** 任务名称 */
    taskName?: string
    /** 任务状态 */
    status?: number
    /** 子系统Id */
    subsystemId?: number
    /** 子系统名称 */
    subsystemName?: string
    type?: TaskClassfiy
    /** 任务状态名称 */
    statusName?: string
    /** 是否有进度 */
    isProgress?: boolean
    /** 进度条 */
    progressbar?: number
    /** 创建时间 */
    createTime?: string
  }

  type GetTaskProgresValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: GetTaskProgresValueObject[]
  }

  type GetUnprocessedProcessVo = {
    title?: string
    createTime?: string
    urlPC?: string
    urlMobile?: string
  }

  type GetUnprocessedProcessVoUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: GetUnprocessedProcessVo[]
  }

  type GetUnreadMessageInput = {
    pageIndex?: number
    pageSize?: number
    /** 子系统Id */
    systemId?: number
    /** 用户Id */
    userId?: number
  }

  type GetUnreadMessageOutput = {
    /** 消息记录id */
    id?: number
    /** 模板 */
    templateId?: number
    /** 模板 */
    templateName?: string
    /** 消息标题 */
    msgTitle?: string
    /** 消息内容 */
    msgContent?: string
    /** 文件下载地址 */
    fileDownUrl?: string
    /** 发送时间 */
    sendTime?: string
  }

  type GetUnreadMessageOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: GetUnreadMessageOutput[]
  }

  type MessageRecordOutput = {
    id?: number
    /** 模板Id */
    templateId?: number
    /** 模板名称 */
    templateName?: string
    operator?: OperatorEnum
    /** 运营商描述 */
    operatorDesc?: string
    channel?: ChannelEnum
    /** 发送通道描述 */
    channelDesc?: string
    /** 消息接收对象 */
    receiver?: string
    /** 接收人Id */
    receiverId?: number
    /** 邮箱 */
    mail?: string
    /** 手机号 */
    mobilePhone?: string
    /** 消息标题 */
    title?: string
    /** 消息内容 */
    content?: string
    /** 消息读取状态 */
    isRead?: boolean
    /** 文件下载地址 */
    fileDownUrl?: string
    /** 发送时间 */
    sendTime?: string
    /** 是否成功 */
    isSussess?: boolean
    /** 是否成功描述 */
    isSussessDesc?: string
    /** 回执消息 */
    receiptMsg?: string
    /** 重试次数 */
    retry?: number
    failType?: FailTypeEnum
    /** 创建人 */
    createUserId?: number
    /** 创建人名称 */
    createUserName?: string
    /** 创建时间 */
    createTime?: string
    /** 修改人 */
    updateUserId?: number
    /** 修改人名称 */
    updateUserName?: string
    /** 修改时间 */
    updateTime?: string
  }

  type MessageRecordOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput
    list?: MessageRecordOutput[]
  }

  type MessageSendReportOutput = {
    /** 成功条数 */
    successCount?: number
    /** 请求错误条数 */
    requestFailCount?: number
    /** 接收对象原因条数 */
    receiverFailCount?: number
    /** 总数 */
    totalCount?: number
  }

  type MessageTrendOutput = {
    key?: string
    /** 成功数 */
    success?: number
    /** 异常数 */
    error?: number
    /** 显示名 */
    displayName?: string
  }

  type MsgRecordGetMessageRecordListGETParams = {
    /** 模板名称 */
    templateName?: string
    /** 接收对象 */
    receiveObject?: string
    /** 运营服务商 */
    operatorEnum?: OperatorEnum
    /** 发送状态 */
    isSendSuccessed?: boolean
    pageIndex?: number
    pageSize?: number
  }

  type MsgRecordGetMessageSendReportGETParams = {
    /** 子系统 */
    systemId?: number
    /** 消息类型 */
    messageType?: number
    /** 运营服务商 */
    operatorEnum?: OperatorEnum
    /** 发送通道 */
    channelEnum?: ChannelEnum
    /** 时间区间类型 */
    timeSelectEnum?: TimeSelectEnum
  }

  type MsgRecordGetMessageTrendListGETParams = {
    /** 子系统 */
    systemId?: number
    /** 消息类型 */
    messageType?: number
    /** 运营服务商 */
    operatorEnum?: OperatorEnum
    /** 发送通道 */
    channelEnum?: ChannelEnum
    /** 时间区间类型 */
    timeSelectEnum?: TimeSelectEnum
  }

  type OperatorEnum = 1 | 2 | 4

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

  type TaskClassfiy = 1 | 2 | 3 | 4 | 5

  type TimeSelectEnum = 1 | 2 | 3 | 4
}
