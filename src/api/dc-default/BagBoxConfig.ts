// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 袋（箱）配置批量删除接口 POST /BagBoxConfig/BatchDelete */
export async function BagBoxConfigBatchDeletePOST(
  body: DataCenterAPI.BatchDeleteInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/BagBoxConfig/BatchDelete`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 袋（箱）配置详情查询接口 GET /BagBoxConfig/Details */
export async function BagBoxConfigGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.BagBoxConfigGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetBagBoxConfigOutput>({
    url: `/dataCenterApi/BagBoxConfig/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 袋（箱）配置更新接口 POST /BagBoxConfig/Edit */
export async function BagBoxConfigEditPOST(
  body: DataCenterAPI.EditBagBoxConfigInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/BagBoxConfig/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 袋（箱）配置模糊查询接口 GET /BagBoxConfig/Page */
export async function BagBoxConfigGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.BagBoxConfigGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetBagBoxConfigOutputUnifyPageResultDto>({
    url: `/dataCenterApi/BagBoxConfig/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
