declare namespace DataCenterAPI {
  type EditLanguageKeyInput = {
    options?: OptionType;
    /** 关键字Id */
    id?: number;
    /** 中文名称 */
    cnName?: string;
    /** 关键字 */
    key?: string;
    /** 项目配置Id */
    projectConfigId?: number;
  };

  type EditProjectConfigInput = {
    /** id */
    id?: number;
    /** 项目名称 */
    projectName?: string;
    /** 项目编码 */
    projectCode?: string;
    /** 支持语言 */
    languages?: number[];
    optionType?: OptionTypeNoNull;
  };

  type ExportLanguageKeyInput = {
    projectConfigId?: number;
  };

  type ExportLanguageKeyOutput = {
    /** 关键字 */
    key?: string;
    /** 中文名称 */
    cnName?: string;
  };

  type GetLanguageBagPageListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 目标语言 */
    language?: number;
    /** 项目名称 */
    projectName?: string;
  };

  type GetLanguageBagPageListOutput = {
    /** 项目语言配置Id */
    projectLanguageId?: number;
    /** 项目配置Id */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 目标语言 */
    language?: number;
    /** 目标语言描述 */
    languageDisp?: string;
    /** 关键字数量 */
    languageKeyCount?: number;
    /** 无内容关键字数量 */
    unTranslationLanguageKeyCount?: number;
    /** 创建时间 */
    createTime?: string;
  };

  type GetLanguageBagPageListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetLanguageBagPageListOutput[];
  };

  type GetLanguageConfigInfoVO = {
    /** 项目配置id/主数据项配置id */
    configId?: number;
    /** 项目配置code/主数据项配置code */
    configCode?: string;
    /** 支持语言(主数据枚举表 (属性=Language)中文,英文,法语,日语) */
    language?: number;
    /** 目标语言描述 */
    languageDisp?: string;
    /** 目标英文语言描述 */
    languageEnDisp?: string;
    /** 语言关键字id */
    languageKeyId?: number;
    /** 关键字 */
    key?: string;
    /** 中文名称 */
    cnName?: string;
    /** 目标语言内容 */
    translation?: string;
    /** 标识字段名（主数据使用） */
    fieldName?: string;
    /** 主数据表数据id（主数据使用） */
    dataId?: number;
  };

  type GetLanguageConfigInfoVOListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetLanguageConfigInfoVO[];
  };

  type GetLanguageKeyListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 项目配置Id */
    projectConfigId?: number;
  };

  type GetLanguageKeyListOutput = {
    /** 关键字Id */
    id?: number;
    /** 中文名称 */
    cnName?: string;
    /** 关键字 */
    key?: string;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type GetLanguageKeyListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetLanguageKeyListOutput[];
  };

  type GetProjectConfigDetailOutput = {
    /** 项目名称 */
    projectName?: string;
    /** 项目编码 */
    projectCode?: string;
    /** 支持语言 */
    languageStr?: string;
    /** 支持语言集合 */
    languages?: number[];
  };

  type GetProjectConfigListOutput = {
    /** 项目配置Id */
    id?: number;
    /** 项目名称 */
    projectName?: string;
    /** 支持语言描述,一个项目多个支持语言的，语言名称用逗号隔开。 */
    languageDisp?: string;
    /** 关键字数量 */
    languageKeyCount?: number;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserName?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetProjectLanguageByCodeOutputVO = {
    /** 语言中文名称 */
    disp?: string;
    /** 语音英文备注 */
    enDisp?: string;
    /** 枚举Key */
    enumKey?: number;
    /** 目标语言 */
    translation?: string;
  };

  type IdBaseDto = {
    id?: number;
  };

  type ImportLanguageBagInput = {
    /** 项目配置Id */
    projectConfigId?: number;
    /** 目标语言 */
    language?: number;
  };

  type ImportLanguageBagOutput = {
    /** 关键字 */
    key?: string;
    /** 中文名称 */
    cnName?: string;
    /** 目标语言内容 */
    translation?: string;
  };

  type ImportProjectConfigKeyDto = {
    /** 序列 */
    index?: number;
    /** 关键字 */
    key?: string;
    /** 中文名称 */
    cnName?: string;
    /** 错误信息 */
    errorMsg?: string;
  };

  type ImportProjectConfigKeyInput = {
    extra?: number;
    queueName?: string;
    taskNo?: string;
    pageIndex?: number;
    totalLine?: number;
    data?: ImportProjectConfigKeyDto[];
  };

  type OptionType = 0 | 1 | 2 | 3;

  type OptionTypeNoNull = 1 | 2 | 3;

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
  };

  type ProjectConfigGetProjectLanguageByCodeGETParams = {
    code?: string;
  };

  type ProjectConfigGetProjectLanguageConfigInfoGETParams = {
    /** 项目配置编号 */
    projectCode?: string;
    /** 语言枚举关键字 */
    languageEnumKey?: number;
  };

  type RemoteServiceErrorInfo = {
    code?: string;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    validationErrors?: RemoteServiceValidationErrorInfo[];
  };

  type RemoteServiceErrorResponse = {
    error?: RemoteServiceErrorInfo;
  };

  type RemoteServiceValidationErrorInfo = {
    message?: string;
    members?: string[];
  };

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };
}
