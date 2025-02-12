// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 班列公司批量导出 POST /FreightrainCompany/BulkExport */
export async function FreightrainCompanyBulkExportPOST(
  body: DataCenterAPI.GetFreightrainCompanyPageIntputVO,
  options?: { [key: string]: any },
) {
  return request<any>({
    url: `/dataCenterApi/FreightrainCompany/BulkExport`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量导入 POST /FreightrainCompany/BulkImport */
export async function FreightrainCompanyBulkImportPOST(
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
    url: `/dataCenterApi/FreightrainCompany/BulkImport`,
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 班列公司更新 POST /FreightrainCompany/Edit */
export async function FreightrainCompanyEditPOST(
  body: DataCenterAPI.EditFreightrainCompanyInput,
  options?: { [key: string]: any },
) {
  return request<boolean>({
    url: `/dataCenterApi/FreightrainCompany/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取导入模板 POST /FreightrainCompany/ExportTemplate */
export async function FreightrainCompanyExportTemplatePOST(options?: { [key: string]: any }) {
  return request<any>({
    url: `/dataCenterApi/FreightrainCompany/ExportTemplate`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 班列公司详情 GET /FreightrainCompany/GetDetails */
export async function FreightrainCompanyGetDetailsGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.FreightrainCompanyGetDetailsGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFreightrainCompanyDetailOutputVO>({
    url: `/dataCenterApi/FreightrainCompany/GetDetails`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取班列公司分页下拉 POST /FreightrainCompany/GetPageDropDownList */
export async function FreightrainCompanyGetPageDropDownListPOST(
  body: DataCenterAPI.GetFreightrainCompanyDropDownIntputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFreightrainCompanyPageOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/FreightrainCompany/GetPageDropDownList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 班列公司列表查询 POST /FreightrainCompany/GetPageList */
export async function FreightrainCompanyGetPageListPOST(
  body: DataCenterAPI.GetFreightrainCompanyPageIntputVO,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetFreightrainCompanyPageOutputVOUnifyPageResultDto>({
    url: `/dataCenterApi/FreightrainCompany/GetPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}
