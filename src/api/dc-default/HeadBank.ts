// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 银行总行精准查询接口 GET /HeadBank/Details */
export async function HeadBankGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.HeadBankGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetHeadBankOutput>({
    url: `/dataCenterApi/HeadBank/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 银行总行更新接口 POST /HeadBank/Edit */
export async function HeadBankEditPOST(
  body: DataCenterAPI.EditHeadBankInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/HeadBank/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 银行总行模糊查询接口 GET /HeadBank/Page */
export async function HeadBankGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.HeadBankGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetHeadBankOutputUnifyPageResultDto>({
    url: `/dataCenterApi/HeadBank/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
