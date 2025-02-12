// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 计量单位精准查询接口 GET /MeteringUnit/Details */
export async function MeteringUnitGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.MeteringUnitGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetMeteringUnitOutputValueObject>({
    url: `/dataCenterApi/MeteringUnit/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 计量单位更新接口 POST /MeteringUnit/Edit */
export async function MeteringUnitEditPOST(
  body: DataCenterAPI.EditMeteringUnitInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/MeteringUnit/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 计量单位模糊查询接口 GET /MeteringUnit/Page */
export async function MeteringUnitGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.MeteringUnitGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetMeteringUnitOutputValueObjectUnifyPageResultDto>({
    url: `/dataCenterApi/MeteringUnit/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
