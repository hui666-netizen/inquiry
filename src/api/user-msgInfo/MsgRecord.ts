// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 消息发送监控接口 GET /MsgRecord/GetMessageSendReport */
export async function MsgRecordGetMessageSendReportGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MsgRecordGetMessageSendReportGETParams,
  options?: { [key: string]: any },
) {
  return request<API.MessageSendReportOutput>({
    url: `/userApi/MsgRecord/GetMessageSendReport`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 消息监控发送消息趋势 GET /MsgRecord/GetMessageTrendList */
export async function MsgRecordGetMessageTrendListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MsgRecordGetMessageTrendListGETParams,
  options?: { [key: string]: any },
) {
  return request<API.MessageTrendOutput[]>({
    url: `/userApi/MsgRecord/GetMessageTrendList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查看更多消息 POST /MsgRecord/GetMoreMessage */
export async function MsgRecordGetMoreMessagePOST(
  body: API.GetMoreMessageInput,
  options?: { [key: string]: any },
) {
  return request<API.GetMoreMessageOutputUnifyPageResultDto>({
    url: `/userApi/MsgRecord/GetMoreMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询消息发送记录 GET /MsgRecord/GetMsgRecordList */
export async function MsgRecordGetMessageRecordListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MsgRecordGetMessageRecordListGETParams,
  options?: { [key: string]: any },
) {
  return request<API.MessageRecordOutputUnifyPageResultDto>({
    url: `/userApi/MsgRecord/GetMsgRecordList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取铃铛数量 POST /MsgRecord/GetNotify */
export async function MsgRecordGetNotifyPOST(
  body: API.GetNotifyInput,
  options?: { [key: string]: any },
) {
  return request<API.GetNotifyOutput>({
    url: `/userApi/MsgRecord/GetNotify`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据子系统Id和用户Id查询未读消息 POST /MsgRecord/GetUnreadMessage */
export async function MsgRecordGetUnreadMessagePOST(
  body: API.GetUnreadMessageInput,
  options?: { [key: string]: any },
) {
  return request<API.GetUnreadMessageOutputUnifyPageResultDto>({
    url: `/userApi/MsgRecord/GetUnreadMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 将未读消息改为已读(可批量) POST /MsgRecord/SetReadingMsg */
export async function MsgRecordSetReadingMsgPOST(body: number[], options?: { [key: string]: any }) {
  return request<boolean>({
    url: `/userApi/MsgRecord/SetReadingMsg`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
