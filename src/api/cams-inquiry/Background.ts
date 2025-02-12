// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 获取业务角色 GET /trainee/inquiry/Background/GetBusinessRole */
export async function BackgroundGetBusinessRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: InquiryApi.BackgroundGetBusinessRoleParams,
  options?: { [key: string]: any },
) {
  return request<InquiryApi.inquiryRoleInquiryResponse>({
    url: `/trainee/inquiry/Background/GetBusinessRole`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
