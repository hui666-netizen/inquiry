// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 批量导入 POST /CommodityCustomsHsCode/BulkImport */
export async function CommodityCustomsHsCodeBulkImportPOST(
  body: {},
  excel?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (excel) {
    formData.append('excel', excel);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/CommodityCustomsHsCode/BulkImport`,
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** HsCode 更新接口 POST /CommodityCustomsHsCode/Edit */
export async function CommodityCustomsHsCodeEditPOST(
  body: DataCenterAPI.CommodityCustomsHsCodeInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.IdBaseDto>({
    url: `/dataCenterApi/CommodityCustomsHsCode/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /CommodityCustomsHsCode/ExportTemplate */
export async function CommodityCustomsHsCodeExportTemplatePOST(options?: { [key: string]: any }) {
  return request<any>({
    url: `/dataCenterApi/CommodityCustomsHsCode/ExportTemplate`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取详情 GET /CommodityCustomsHsCode/GetDetails */
export async function CommodityCustomsHsCodeGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.CommodityCustomsHsCodeGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetHsCodePageOutputVO>({
    url: `/dataCenterApi/CommodityCustomsHsCode/GetDetails`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取HsCode数据 POST /CommodityCustomsHsCode/GetPageList */
export async function CommodityCustomsHsCodeGetPageListPOST(
  body: DataCenterAPI.GetHsCodePageInputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetHsCodePageOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/CommodityCustomsHsCode/GetPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
