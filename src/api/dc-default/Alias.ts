// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 别名更新 POST /Alias/Edit */
export async function AliasEditPOST(
  body: DataCenterAPI.EditAliasInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.EditAliasOutputUnifyResultDto>({
    url: `/dataCenterApi/Alias/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取别名下拉数据 GET /Alias/GetAliasSelectList */
export async function AliasGetAliasSelectListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AliasGetAliasSelectListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAliasSelectOutputVO[]>({
    url: `/dataCenterApi/Alias/GetAliasSelectList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
