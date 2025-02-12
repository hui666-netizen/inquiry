// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 联系人精准查询接口 GET /Contact/Details */
export async function ContactGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ContactGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetContactOutputValueObject>({
    url: `/dataCenterApi/Contact/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 联系人更新接口 POST /Contact/Edit */
export async function ContactEditPOST(
  body: DataCenterAPI.EditContactInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Contact/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 联系人模糊查询接口 GET /Contact/Page */
export async function ContactGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ContactGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetContactOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/Contact/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
