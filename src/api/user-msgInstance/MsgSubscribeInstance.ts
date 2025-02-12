// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 新增消息实例 POST /MsgSubscribeInstance/AddMessageInstance */
export async function MsgSubscribeInstanceAddMessageInstancePOST(
  body: UserApi.AddMessageInstanceInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDtoUnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/AddMessageInstance`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量配置实例接收人 POST /MsgSubscribeInstance/BatchSetMessageInstanceReceiver */
export async function MsgSubscribeInstanceBatchSetMessageInstanceReceiverPOST(
  body: UserApi.BatchSetMessageInstanceReceiverInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/BatchSetMessageInstanceReceiver`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询消息实例 GET /MsgSubscribeInstance/GetMessageInstance */
export async function MsgSubscribeInstanceGetMessageInstanceGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MsgSubscribeInstanceGetMessageInstanceGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetMessageInstanceOutputUnifyPageResultDto>({
    url: `/userApi/MsgSubscribeInstance/GetMessageInstance`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据子系统、消息模板code、消息服务code获取消息实例Id GET /MsgSubscribeInstance/GetMessageInstanceId */
export async function MsgSubscribeInstanceGetMessageInstanceIdGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MsgSubscribeInstanceGetMessageInstanceIdGETParams,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDtoUnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/GetMessageInstanceId`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据子系统获取相关的订阅服务 POST /MsgSubscribeInstance/GetSubscription */
export async function MsgSubscribeInstanceGetSubscriptionPOST(
  body: UserApi.GetSubscriptionInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.GetSubscriptionOutputUnifyPageResultDto>({
    url: `/userApi/MsgSubscribeInstance/GetSubscription`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解除消息订阅 POST /MsgSubscribeInstance/ReleaseMessageInstance */
export async function MsgSubscribeInstanceReleaseMessageInstancePOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MsgSubscribeInstanceReleaseMessageInstancePOSTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/MsgSubscribeInstance/ReleaseMessageInstance`,
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据子系统发送当前登录人历史信息 GET /MsgSubscribeInstance/SendHistoryMessageBySystem */
export async function MsgSubscribeInstanceSendHistoryMessageBySystemGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: UserApi.MsgSubscribeInstanceSendHistoryMessageBySystemGETParams,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/userApi/MsgSubscribeInstance/SendHistoryMessageBySystem`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 子系统触发服务 POST /MsgSubscribeInstance/SendMessage */
export async function MsgSubscribeInstanceSendMessagePOST(
  body: UserApi.SystemSendMessageInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.IdBaseDtoUnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/SendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据空白模板发送消息 POST /MsgSubscribeInstance/SendMessageByEmptyTemplate */
export async function MsgSubscribeInstanceSendMessageByEmptyTemplatePOST(
  body: UserApi.SendMessageByEmptyTemplateInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/SendMessageByEmptyTemplate`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据自定义模板发送消息 POST /MsgSubscribeInstance/SendMessageByTemplate */
export async function MsgSubscribeInstanceSendMessageByTemplatePOST(
  body: UserApi.SendMessageByTemplateInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/SendMessageByTemplate`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置消息实例发送通道及规则 POST /MsgSubscribeInstance/SetMessageInstance */
export async function MsgSubscribeInstanceSetMessageInstancePOST(
  body: UserApi.SetMessageInstanceInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/SetMessageInstance`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 配置实例接收人 POST /MsgSubscribeInstance/SetMessageInstanceReceiver */
export async function MsgSubscribeInstanceSetMessageInstanceReceiverPOST(
  body: UserApi.SetMessageInstanceReceiverInput,
  options?: { [key: string]: any },
) {
  return request<UserApi.UnifyResultDto>({
    url: `/userApi/MsgSubscribeInstance/SetMessageInstanceReceiver`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
