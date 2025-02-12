// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 行政区划精准查询接口 GET /AdministrativeDivision/Details */
export async function AdministrativeDivisionGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AdministrativeDivisionGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAdministrativeDivisionOutputVO>({
    url: `/dataCenterApi/AdministrativeDivision/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 行政区划更新接口 POST /AdministrativeDivision/Edit */
export async function AdministrativeDivisionEditPOST(
  body: DataCenterAPI.EditAdministrativeDivisionInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/AdministrativeDivision/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉数据源 POST /AdministrativeDivision/GetPageForDropDownList */
export async function AdministrativeDivisionGetPageForDropDownListPOST(
  body: DataCenterAPI.RegionDorpDownListTypeEnumsDropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.DropDownOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/AdministrativeDivision/GetPageForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 行政区划模糊查询接口 GET /AdministrativeDivision/Page */
export async function AdministrativeDivisionGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.AdministrativeDivisionGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetAdministrativeDivisionOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/AdministrativeDivision/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
