// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 用户登录 POST /user/login */
export async function PostUserLogin(
  body: {
    account: string;
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>({
    url: `/devops/user/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
