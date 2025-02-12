declare namespace API {
  type CreateFlowExampleInput = {
    /** 流程编号 */
    flowCode?: string;
    /** 业务id */
    businessId?: string;
    /** 流程实例标题 */
    title?: string;
    /** 所属系统id */
    systemId?: number;
  };

  type FlowExampleDeletePUTParams = {
    id?: number;
  };

  type FlowExampleDeleteSyncPUTParams = {
    /** 流程编号 */
    flowCode: string;
    /** 业务id */
    businessId: string;
  };

  type FlowExampleGetDetailByBusinessIdAndFlowCodeGETParams = {
    /** 业务id */
    businessId: string;
    /** 流程编号 */
    flowCode: string;
  };

  type FlowExampleGetDetailByIdGETParams = {
    id?: number;
  };

  type FlowExampleGetPageGETParams = {
    /** 流程标题 */
    Title?: string;
    /** 发起人 */
    SponsorId?: number;
    /** 流程状态 1：待提交，2：审批中，3：已取消，4：已完成，5：异常中断，6：作废 */
    State?: number;
    /** 发起开始时间 */
    StartTime?: string;
    /** 发起结束时间 */
    EndTime?: string;
    PageIndex?: number;
    PageSize?: number;
  };

  type FlowExampleGetPersonnelGETParams = {
    /** 流程实例id */
    exampleFlowId?: number;
  };

  type FlowExampleGetPrecomputationGETParams = {
    /** 流程实例id */
    exampleFlowId?: number;
  };

  type FlowExampleGetUnprocessedProcessGETParams = {
    /** 用户id */
    userId?: number;
    /** 子系统id */
    systemId?: number;
    pageIndex?: number;
    pageSize?: number;
  };

  type FlowExampleRepealPUTParams = {
    /** 流程实例id */
    id?: number;
  };

  type GetApproverInput = {
    /** 流程编号 */
    flowCode?: string;
    /** 业务id */
    businessId?: string;
    /** 节点编号集合 */
    nodeCodes?: string[];
    /** 状态 0：未审批，1：已审批 */
    state?: number;
  };

  type GetApproverOutput = {
    /** 节点编号 */
    nodeCode?: string;
    /** 节点名称 */
    nodeName?: string;
    /** 审批人 */
    approver?: GetPrecomputationApprover[];
  };

  type GetCurrentNodeApproverValueObject = {
    /** 审批人id */
    approverId?: number;
    /** 审批人姓名 */
    approverName?: string;
  };

  type GetFlowExampleDetailOutput = {
    id?: number;
    /** 流程标题 */
    title?: string;
    /** 所属流程id */
    flowId?: number;
    /** 所属流程名称 */
    flowName?: string;
    /** 所属流程英文名称 */
    flowEnName?: string;
    /** 所属流程编号 */
    flowCode?: string;
    /** 流程类型 0：系统流程，1：自定义流程 */
    type?: number;
    /** PC端页面URL */
    urlPC?: string;
    /** 移动端页面URL */
    urlMobile?: string;
    /** 业务id */
    businessId?: string;
    /** 发起人id */
    sponsorId?: number;
    /** 发起人姓名 */
    sponsorName?: string;
    /** 发起时间 */
    sponsorTime?: string;
    /** 当前实例节点id */
    exampleNodeId?: number;
    /** 当前节点id */
    nodeId?: number;
    /** 当前节点名称 */
    nodeName?: string;
    /** 当前节点英文名称 */
    nodeEnName?: string;
    /** 当前节点编号 */
    nodeCode?: string;
    /** 流程状态 1：待提交，2：审批中，3：已取消，4：已完成，5：异常中断，6：作废 */
    state?: number;
    /** 流程状态名称 */
    stateName?: string;
    /** 当前节点审批人信息 */
    approverInfo?: GetCurrentNodeApproverValueObject[];
  };

  type GetFlowExamplePageOutputValueObject = {
    id?: number;
    /** 流程标题 */
    title?: string;
    /** 所属流程 */
    flowName?: string;
    /** 发起时间 */
    sponsorTime?: string;
    /** 发起人 */
    sponsorUser?: string;
    /** 所属系统 */
    systemName?: string;
    /** 流程状态 */
    state?: string;
    /** 当前审批节点 */
    approvalNode?: string;
    /** PC端页面URL */
    urlPC?: string;
  };

  type GetFlowExamplePageOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFlowExamplePageOutputValueObject[];
  };

  type GetPersonalFlowPageInputValueObject = {
    pageIndex?: number;
    pageSize?: number;
    /** 所属系统id */
    systemId?: number;
    /** 标题 */
    title?: string;
    /** 发起开始时间 */
    sponsorStartTime?: string;
    /** 发起结束时间 */
    sponsorEndTime?: string;
    /** 处理开始时间 */
    handleStartTime?: string;
    /** 处理结束时间 */
    handleEndTime?: string;
    /** 流程分类 */
    classifyId?: number;
    /** 复选框
0:未处理 1:已处理 2:抄送我的 3:本人提交 4:本人审核 */
    checkBox?: PersonalFlowWebEnums[];
  };

  type GetPersonalFlowPageOutputValueObject = {
    id?: number;
    /** 流程标题 */
    title?: string;
    /** 流程分类id */
    classifyId?: number;
    /** 流程分类 */
    classifyName?: string;
    /** 发起人名称 */
    sponsorName?: string;
    /** 发起人英文名称 */
    sponsorEnName?: string;
    /** 发起时间 */
    sponsorTime?: string;
    /** 流程状态枚举值 */
    stateEnumKey?: number;
    /** 流程状态 */
    state?: string;
    /** 当前审批节点id */
    currentNodeId?: number;
    /** 当前审批节点 */
    currentNodeName?: string;
    /** 当前节点审批人 */
    approverName?: string;
    /** 当前节点审批人英文名 */
    approverEnName?: string;
    /** 我审批结果id */
    buttonId?: number;
    /** 我审批结果 */
    buttonName?: string;
    /** 处理时间 */
    operationTime?: string;
    /** PC端页面URL */
    urlPC?: string;
    /** PC路由 */
    pcRoute?: string;
  };

  type GetPersonalFlowPageOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetPersonalFlowPageOutputValueObject[];
  };

  type GetPrecomputationApprover = {
    /** 用户id */
    userId?: number;
    /** 名称 */
    name?: string;
    /** 英文名称 */
    enName?: string;
    /** 飞书OpenId */
    fsOpenId?: string;
  };

  type GetPrecomputationOutput = {
    id?: number;
    /** 节点id */
    nodeId?: number;
    /** 节点名称 */
    nodeName?: string;
    /** 节点类型 0：开始节点，1：中间节点，2：结束节点 */
    type?: number;
    /** 审批人id */
    approverId?: string;
    /** 审批人 */
    approver?: GetPrecomputationApprover[];
  };

  type GetUnprocessedProcessVo = {
    /** 流程标题 */
    title?: string;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** PC端页面URL */
    pcUrl?: string;
    /** 移动端页面URL */
    mobileUrl?: string;
  };

  type GetUnprocessedProcessVoUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetUnprocessedProcessVo[];
  };

  type IdBaseDto = {
    id?: number;
  };

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
  };

  type PersonalFlowWebEnums = 0 | 1 | 2 | 3 | 4;

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

  type SyncFlowExampleInput = {
    /** 流程编号 */
    flowCode?: string;
    /** 业务id */
    businessId?: string;
    /** 流程实例关联的业务id集合 （,号拼接） */
    businessIds?: string;
    /** 是否允许放弃流程 */
    isCanWaive?: boolean;
    /** 是否完全同步 (true:流程同步；false:流程批量审批) */
    isCompleteSync?: boolean;
  };
}
