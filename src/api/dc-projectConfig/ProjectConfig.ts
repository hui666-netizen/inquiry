// @ts-ignore
/* eslint-disable */
import request from '@/utils/http/request';

/** 关键字更新 POST /LanguageKey/EditLanguageKey */
export async function ProjectConfigEditLanguageKeyPOST(
  body: DataCenterAPI.EditLanguageKeyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/LanguageKey/EditLanguageKey`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目配置编辑 POST /ProjectConfig/Edit */
export async function ProjectConfigEditPOST(
  body: DataCenterAPI.EditProjectConfigInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/ProjectConfig/Edit`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 语言包导出 POST /ProjectConfig/GetLanguageBagImportList */
export async function ProjectConfigGetLanguageBagImportListPOST(
  body: DataCenterAPI.ImportLanguageBagInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.ImportLanguageBagOutput[]>({
    url: `/dataCenterApi/ProjectConfig/GetLanguageBagImportList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 语言包分页列表 POST /ProjectConfig/GetLanguageBagPageList */
export async function ProjectConfigGetLanguageBagPageListPOST(
  body: DataCenterAPI.GetLanguageBagPageListInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetLanguageBagPageListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/ProjectConfig/GetLanguageBagPageList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关键字导出 POST /ProjectConfig/GetLanguageKeyExportList */
export async function ProjectConfigGetLanguageKeyExportListPOST(
  body: DataCenterAPI.ExportLanguageKeyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.ExportLanguageKeyOutput[]>({
    url: `/dataCenterApi/ProjectConfig/GetLanguageKeyExportList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 关键字列表 POST /ProjectConfig/GetLanguageKeyList */
export async function ProjectConfigGetLanguageKeyListPOST(
  body: DataCenterAPI.GetLanguageKeyListInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetLanguageKeyListOutputUnifyPageResultDto>({
    url: `/dataCenterApi/ProjectConfig/GetLanguageKeyList`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目配置详情 POST /ProjectConfig/GetProjectConfigDetail */
export async function ProjectConfigGetProjectConfigDetailPOST(
  body: DataCenterAPI.IdBaseDto,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetProjectConfigDetailOutput>({
    url: `/dataCenterApi/ProjectConfig/GetProjectConfigDetail`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目配置列表 POST /ProjectConfig/GetProjectConfigList */
export async function ProjectConfigGetProjectConfigListPOST(options?: { [key: string]: any }) {
  return request<DataCenterAPI.GetProjectConfigListOutput[]>({
    url: `/dataCenterApi/ProjectConfig/GetProjectConfigList`,
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据code查询项目支持语言 GET /ProjectConfig/GetProjectLanguageByCode */
export async function ProjectConfigGetProjectLanguageByCodeGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ProjectConfigGetProjectLanguageByCodeGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetProjectLanguageByCodeOutputVO[]>({
    url: `/dataCenterApi/ProjectConfig/GetProjectLanguageByCode`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 导入项目配置关键字 POST /ProjectConfig/ImportProjectConfigKey */
export async function ProjectConfigImportProjectConfigKeyPOST(
  body: DataCenterAPI.ImportProjectConfigKeyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.UnifyResultDto>({
    url: `/dataCenterApi/ProjectConfig/ImportProjectConfigKey`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 导入项目配置关键字检验 POST /ProjectConfig/ImportProjectConfigKeyCheck */
export async function ProjectConfigImportProjectConfigKeyCheckPOST(
  body: DataCenterAPI.ImportProjectConfigKeyInput,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.ImportProjectConfigKeyDto[]>({
    url: `/dataCenterApi/ProjectConfig/ImportProjectConfigKeyCheck`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json-patch+json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取指定项目语言信息 GET /ProjectConfig/ProjectLanguageConfigInfo */
export async function ProjectConfigGetProjectLanguageConfigInfoGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: DataCenterAPI.ProjectConfigGetProjectLanguageConfigInfoGETParams,
  options?: { [key: string]: any },
) {
  return request<DataCenterAPI.GetLanguageConfigInfoVOListUnifyResultDto>({
    url: `/dataCenterApi/ProjectConfig/ProjectLanguageConfigInfo`,
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
