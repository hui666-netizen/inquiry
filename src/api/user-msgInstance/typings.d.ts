declare namespace UserApi {
  type AddMessageInstanceInput = {
    /** 服务Code */
    serviceCode?: string;
    /** 子系统Id */
    systemId?: number;
    /** 订阅人 */
    subscribers?: string;
  };

  type ApiConfigGetStringGETParams = {
    key: string;
  };

  type BatchSetMessageInstanceReceiverInput = {
    batchInput?: SetMessageInstanceReceiverInput[];
  };

  type ChannelEnum = 1 | 2 | 4 | 8 | 16;

  type ComponentStyle = 1 | 2 | 3 | 4;

  type CycleConfigurationOutput = {
    /** 服务配置周期Id */
    id?: number;
    /** 描述 */
    desc?: string;
    /** 是否被选中 */
    isSelect?: boolean;
    /** 如果为每周、每半月、每月则有多个 */
    cycles?: CycleConfigurationOutput[];
  };

  type GetMessageInstanceOutput = {
    /** 实例Id */
    id?: number;
    /** 服务Id */
    serviceId?: number;
    /** 服务名称 */
    serviceName?: string;
    /** 子系统Id */
    systemId?: number;
    /** 子系统名称 */
    systemName?: string;
    /** 订阅人 */
    subscribers?: string;
    /** 模板Id */
    templateId?: number;
    /** 模板名称 */
    templateName?: string;
    /** 枚举的位值 */
    channel?: number;
    componentStyle?: ComponentStyle;
    /** 发送通道枚举值 */
    channels?: number[];
    /** 发送通道枚举描述 */
    channelName?: string;
    /** 发送规则 */
    rule?: number;
    /** 发送规则描述 */
    ruleDesc?: string;
    /** 接收人信息 */
    receivers?: GetReceiverObject[];
    /** 接收人名称 */
    receiverName?: string;
    /** 订阅状态 */
    subscriptioStatus?: boolean;
    /** 订阅状态描述 */
    subscriptioStatusDesc?: string;
    /** 退订时间 */
    unsubscribeTime?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type GetMessageInstanceOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetMessageInstanceOutput[];
  };

  type GetReceiverObject = {
    id?: number;
    /** 订阅Id */
    subscribeId?: number;
    /** 接收人类型(1:内部用户 2.外部用户) */
    recipientType?: number;
    /** 接收人Id */
    receiverId?: number;
    /** 接收人姓名 */
    receiverName?: string;
    /** 邮箱 */
    mail?: string;
    /** 手机号 */
    mobilePhone?: string;
  };

  type GetSubscriptionInput = {
    pageIndex?: number;
    pageSize?: number;
    systemId?: number;
  };

  type GetSubscriptionOutput = {
    /** 服务id */
    id?: number;
    /** 服务名称 */
    serviceName?: string;
    /** 服务code */
    serviceCode?: string;
    /** 模板id */
    templateId?: number;
    /** 该服务配置的实例Id */
    instanceId?: number;
    instanceRule?: number;
    /** 接收人信息 */
    receivers?: GetReceiverObject[];
    /** 模板名称 */
    templateName?: string;
    /** 子系统Id */
    systemId?: number;
    /** 服务发送通道位值 */
    msgServeChannel?: number;
    /** 实例发送通道位值 */
    channel?: number;
    rule?: SendRuleEnum;
    /** 发送通道 */
    sendAisles?: SendAisleCycleOutput[];
    /** 服务周期 */
    subscriptionCycle?: CycleConfigurationOutput[];
  };

  type GetSubscriptionOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSubscriptionOutput[];
  };

  type IdBaseDto = {
    id?: number;
  };

  type IdBaseDtoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: IdBaseDto;
  };

  type MsgInstanceReceiverInput = {
    /** 接收人类型 (1:内部用户 2.外部用户) */
    recipientType?: number;
    /** 接收人id : 内部用户Id,外部用户Id,或只有邮箱跟短信时不需要接收人Id */
    receiverId?: number;
    /** 接收人姓名 */
    receiverName?: string;
    /** 邮箱 */
    mail?: string;
    /** 手机号 */
    mobilePhone?: string;
  };

  type MsgSourceEnum = 1 | 2 | 3 | 4;

  type MsgSubscribeInstanceGetMessageInstanceGETParams = {
    /** 模板名称 */
    TemplateName?: string;
    /** 子系统Id */
    SystemId?: number;
    /** 服务名称 */
    ServiceName?: string;
    /** 消息接收人名称 */
    UserName?: string;
    PageIndex?: number;
    PageSize?: number;
  };

  type MsgSubscribeInstanceGetMessageInstanceIdGETParams = {
    /** 子系统Id */
    SystemId?: number;
    /** 模板Code */
    TemplateCode?: string;
    /** 服务Code */
    ServiceCode?: string;
  };

  type MsgSubscribeInstanceReleaseMessageInstancePOSTParams = {
    /** 订阅实例id */
    subscribeId: number;
  };

  type MsgSubscribeInstanceSendHistoryMessageBySystemGETParams = {
    /** 不传取请求子系统 */
    systemId?: number;
  };

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

  type SendAisleCycleOutput = {
    /** 通道描述 */
    key?: string;
    /** 通道枚举值 */
    value?: number;
    /** 是否被选中 */
    isSelected?: boolean;
  };

  type SendMessageByEmptyTemplateInput = {
    /** 是否需要处理(默认为未处理,传false为无需处理,针对站内信是否处理功能) */
    isNeedToHandle?: boolean;
    msgSource?: MsgSourceEnum;
    /** 子系统Id */
    systemId?: number;
    /** 模板Code */
    templateCode?: string;
    /** 指定发送通道，只能传模板设置的发送通道范围 */
    channels?: ChannelEnum[];
    /** 标题 */
    msgTitle?: string;
    /** 正文 */
    msgContent?: string;
    /** PC链接 */
    pcURl?: string;
    /** 移动端链接 */
    mobileURl?: string;
    /** 包含邮箱通道时，如果附件地址不为空，则请求该地址获取文件信息 */
    fileUrl?: string;
    /** 附件名称且带后缀，不指定将从附件地址上截取末尾部分作为附件名称及后缀 */
    fileName?: string;
    /** 接收人的信息 */
    receivers?: MsgInstanceReceiverInput[];
    siteLetterComponentStyle?: ComponentStyle;
  };

  type SendMessageByTemplateInput = {
    /** 是否需要处理(默认为未处理,传false为无需处理,针对站内信是否处理功能) */
    isNeedToHandle?: boolean;
    msgSource?: MsgSourceEnum;
    /** 子系统Id */
    systemId?: number;
    /** 模板Code */
    templateCode?: string;
    /** 指定发送通道，只能传模板设置的发送通道范围 */
    channels?: ChannelEnum[];
    /** 变量信息 */
    variables?: VariableDto[];
    /** PC链接 */
    pcURl?: string;
    /** 移动端链接 */
    mobileURl?: string;
    /** 包含邮箱通道时，如果附件地址不为空，则请求该地址获取文件信息 */
    fileUrl?: string;
    /** 附件名称且带后缀，不指定将从附件地址上截取末尾部分作为附件名称及后缀 */
    fileName?: string;
    /** 接收人的信息 */
    receivers?: MsgInstanceReceiverInput[];
    siteLetterComponentStyle?: ComponentStyle;
  };

  type SendRuleEnum = 1 | 2;

  type SetMessageInstanceInput = {
    /** 实例Id */
    id?: number;
    /** 发送通道 */
    channels?: ChannelEnum[];
    /** 发送规则,存发送规则的id,子系统触发则为空 */
    rule?: number;
    componentStyle?: ComponentStyle;
  };

  type SetMessageInstanceReceiverInput = {
    /** 订阅实例id */
    subscribeId?: number;
    /** 接收人信息 */
    receiver?: MsgInstanceReceiverInput[];
  };

  type SystemSendMessageInput = {
    /** 是否需要处理(默认为未处理,传false为无需处理,针对站内信是否处理功能) */
    isNeedToHandle?: boolean;
    /** 订阅服务的Code */
    serviceCode?: string;
    /** 订阅实例Id */
    subscribleInstanceId?: number;
    /** 变量地址对应的请求参数,json字符串 */
    forwardVaraibleContent?: string;
    /** 附件地址对应的请求参数,json字符串 */
    forwardFileContent?: string;
  };

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };

  type VariableDto = {
    /** 变量key */
    key?: string;
    /** 变量值 */
    value?: string;
  };
}
