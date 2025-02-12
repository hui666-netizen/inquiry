// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 关键字分页查询 POST /ZipCode/GetZipCodeLevelPageListAsync */
export async function ZipCodeGetZipCodeLevelPageListPOST(
  body: DataCenterAPI.GetZipCodeLevelPageListInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetZipCodeLevelPageListOutputVO>({
    url: `/dataCenterApi/ZipCode/GetZipCodeLevelPageListAsync`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
