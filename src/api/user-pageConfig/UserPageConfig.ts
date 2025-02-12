// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 查询用户页面配置 POST /UserPageConfig/GetUserPageConfig */
export async function UserPageConfigGetUserPageConfigPOST(
  body: API.GetUserPageConfigInput,
  options?: { [key: string]: any },
) {
  return request<API.UnifyResultDto>({
    url: `/userApi/UserPageConfig/GetUserPageConfig`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户页面配置维护 POST /UserPageConfig/MaintainUserPageConfig */
export async function UserPageConfigMaintainUserPageConfigPOST(
  body: API.MaintainUserPageConfigInput,
  options?: { [key: string]: any },
) {
  return request<API.IdBaseDto>({
    url: `/userApi/UserPageConfig/MaintainUserPageConfig`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
