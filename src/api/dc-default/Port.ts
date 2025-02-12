// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 查询所有港口信息 GET /Port/GetList */
export async function PortGetListGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.PortGetListGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetPortListOutput>({
    url: `/dataCenterApi/Port/GetList`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
