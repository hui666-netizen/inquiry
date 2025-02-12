// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 海港精准查询接口 GET /Seaport/Details */
export async function SeaportGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaportGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaportDetailsOutput>({
    url: `/dataCenterApi/Seaport/Details`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 海港更新接口 POST /Seaport/Edit */
export async function SeaportEditPOST(
  body: DataCenterAPI.EditSeaportInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/Seaport/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 海港下拉数据源
 * Type = -1,
港口 Type=1, POST /Seaport/GetPageForDropDownList */
export async function SeaportGetPageForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaportDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Seaport/GetPageForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 海地下拉数据源
 * Type = -1,
港口 Type=1,
城市 Type = 4,
省份 Type = 5,
国家 Type = 2,
区域 Type = 3
航线 Type = 6,
区县 Type = 7 POST /Seaport/GetPagePlaceForDropDownList */
export async function SeaportGetPagePlaceForDropDownListPOST(
  body: DataCenterAPI.DropDownFlagTypeWordInputDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaportDropDownListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Seaport/GetPagePlaceForDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 海港模糊查询接口 GET /Seaport/Page */
export async function SeaportGetPageGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.SeaportGetPageGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetSeaportOutputUnifyPageResultDto>({
    url: `/dataCenterApi/Seaport/Page`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
