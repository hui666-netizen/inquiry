declare namespace DataCenterAPI {
  type AdministrativeDivisionGetDetailsGETParams = {
    /** 区划id */
    id?: number;
  };

  type AdministrativeDivisionGetPageGETParams = {
    /** 所属国家 */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type AirCompanyGetDetailsGETParams = {
    /** 航司id */
    id?: number;
  };

  type AirCompanyGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 国家id */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type AirCompanys = {
    /** 数据ID */
    id?: number;
    /** 航司ID */
    airCompanyId?: number;
    /** 航司Code */
    airCompanyCode?: string;
    /** 航司排序值 */
    airCompanyOrder?: number;
  };

  type AirportGetDetailsGETParams = {
    /** 空港id */
    id?: number;
  };

  type AirportGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 是否下拉框数据源 */
    IsSelected?: boolean;
    /** 当前港口Id */
    CurrentId?: number;
    /** 城市id */
    CityId?: number;
    /** 省份id */
    ProvinceId?: number;
    /** 国家id */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type AirportGetTimeDiffByAirPortCodePOSTParams = {
    airPortCode?: string;
  };

  type AirportGetTimeDiffByNationCodePOSTParams = {
    enName?: string;
  };

  type AirPortInfo = {
    /** 空港Id */
    id?: number;
    /** 空港名称 */
    cnName?: string;
    /** 空港代码 */
    code?: string;
  };

  type AirPorts = {
    /** 数据ID */
    id?: number;
    /** 空港ID */
    airPortId?: number;
    /** 空港Code */
    airPortCode?: string;
    /** 空港排序值 */
    airPortOrder?: number;
  };

  type AirRouteGetDetailsGETParams = {
    /** 空运航线id */
    id?: number;
  };

  type AirRouteGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type AliasGetAliasSelectListGETParams = {
    /** 数据Id */
    DataId?: number;
    /** 数据类型 */
    DataType?: number;
  };

  type AliasOutput = {
    /** 别名id */
    id?: number;
    /** 别名 */
    aliasName?: string;
  };

  type AlterabilityTypeEnum = 1 | 2 | 3 | 4;

  type AreaGetDetailsGETParams = {
    /** 区域id */
    id?: number;
  };

  type AreaGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type BagBoxConfigGetDetailsGETParams = {
    /** 袋（箱）配置id */
    id?: number;
  };

  type BagBoxConfigGetPageGETParams = {
    /** 袋（箱）名称 */
    Name?: string;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type BankOwnershipEnums = 1 | 2 | 3;

  type BatchDeleteInput = {
    /** id集合 */
    ids?: number[];
  };

  type BranchBankGetDetailsGETParams = {
    /** 支行id */
    id?: number;
  };

  type BranchBankGetPageGETParams = {
    /** 总行id */
    HeadBankId?: number;
    /** 是否有效 */
    IsValid?: boolean;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type BrandGetDetailsGETParams = {
    /** 品牌ID */
    id?: number;
  };

  type BrandGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type BusinessHoursInput = {
    id?: number;
    /** 营业时间段值 */
    weekDayValues?: WeekDaysEnum[];
    startTime?: TimeSpan;
    endTime?: TimeSpan;
  };

  type CategoryGetDetailsGETParams = {
    /** 商品分类id */
    id?: number;
  };

  type CategoryGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type CityGetDetailsGETParams = {
    /** 城市id */
    id?: number;
  };

  type CityGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 省份id */
    ProvinceId?: number;
    /** 国家id */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type CommodityCustomsHsCodeGetDetailsGETParams = {
    id?: number;
  };

  type CommodityCustomsHsCodeInput = {
    options?: OptionType;
    /** 车辆id */
    id?: number;
    /** 国家Id */
    countryId?: number;
    name?: string;
    /** 商品HsCode */
    hsCode?: string;
  };

  type ContactGetDetailsGETParams = {
    /** 联系人ID */
    id?: number;
  };

  type ContactGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 外部主体id */
    ExternalSubjectId?: number;
    /** 课题组id */
    ResearchGroupId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type ContractType =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 29
    | 30
    | 31
    | 32
    | 33
    | 34
    | 35
    | 37
    | 38
    | 39
    | 40
    | 41
    | 42
    | 43
    | 44
    | 45
    | 46
    | 47
    | 48
    | 49
    | 50
    | 51
    | 52
    | 53
    | 54
    | 55
    | 56
    | 57
    | 58
    | 59
    | 60
    | 61
    | 62
    | 63
    | 64
    | 65
    | 66
    | 67
    | 68
    | 69
    | 70
    | 71
    | 72
    | 73
    | 74
    | 75
    | 76;

  type CountryGetDetailsGETParams = {
    /** 国家id */
    id?: number;
  };

  type CountryGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 区域id */
    AreaId?: number;
    /** 传-1,查*号 */
    Type?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type CurrencyGetDetailsByCodeGETParams = {
    code?: string;
  };

  type CurrencyGetDetailsByNameGETParams = {
    /** 币种名称 */
    name?: string;
  };

  type CurrencyGetDetailsGETParams = {
    /** 币种id */
    id?: number;
  };

  type CurrencyGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type CustomerType = 1 | 2 | 3;

  type DelNationalHotdataInput = {
    /** 待删除数据ID集合 */
    ids?: number[];
  };

  type DelSeaExportWharfInput = {
    /** 批量删除ID */
    ids?: number[];
  };

  type DepartmentGetDetailsGETParams = {
    /** 部门院系ID */
    id?: number;
  };

  type DepartmentGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 外部主体id */
    ExternalSubjectId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type DistrictGetDetailsGETParams = {
    /** 区县id */
    id?: number;
  };

  type DistrictGetPageGETParams = {
    /** 城市id */
    CityId?: number;
    /** id集合 */
    Id?: number[];
    /** 省份id */
    ProvinceId?: number;
    /** 国家id */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type DistrictGetVerifyZipCodeGETParams = {
    /** 区县id */
    DistrictId?: number;
    /** 邮编 */
    ZipCode?: string;
  };

  type DriverInfo = {
    /** 司机Id */
    id?: number;
    /** 司机名称 */
    name?: string;
  };

  type DriverInfoGetDetailsGETParams = {
    id?: number;
  };

  type DriverSourceEnum = 1 | 2;

  type DropDownFlagTypeWordGroupInputDto = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** * Type=-1,
港口 Type = 1  or 航司 Type=1
城市 Type = 4,
省份 Type = 5,
国家 Type = 2,
区域 Type = 3
航线 Type = 6,
区县 Type = 7 */
    types?: number[];
    /** 选中项的类型
跟上面的类型对应 */
    selectedIdType?: number;
    /** 选中项的类型(多选)
跟上面的类型对应 */
    selectedIdsType?: number[];
    /** 排序方式
0：字母排序
1：国内排序字段
2：国外排序字段 */
    orderFlag?: number;
    /** 选中多行 */
    selectedIds?: number[];
    /** 是否启用查询置顶 */
    isQueryTop?: boolean;
    /** 查询国家下的港口 */
    filterateId?: number[];
    /** 查询城市下的港口 */
    filterCityId?: number[];
    /** 查询区域下的港口 */
    filterAreaId?: number[];
    /** 排除选中 */
    noSelectedIds?: number[];
    /** 排除选中项的类型(多选)
跟上面的类型对应 */
    noSelectedIdsType?: number[];
    /** 排除所选国家查询其他国家下的港口 */
    excludeFilterateId?: number[];
    /** 排序国家ID */
    orderCoutryId?: number;
    /** 排序业务类型:0: 进口 1：出口 */
    orderType?: number;
    /** 排序港口类型:1：起运港 2：目的港 */
    orderPortType?: number;
    isGroup?: boolean;
  };

  type DropDownFlagTypeWordInputDto = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** * Type=-1,
港口 Type = 1  or 航司 Type=1
城市 Type = 4,
省份 Type = 5,
国家 Type = 2,
区域 Type = 3
航线 Type = 6,
区县 Type = 7 */
    types?: number[];
    /** 选中项的类型
跟上面的类型对应 */
    selectedIdType?: number;
    /** 选中项的类型(多选)
跟上面的类型对应 */
    selectedIdsType?: number[];
    /** 排序方式
0：字母排序
1：国内排序字段
2：国外排序字段 */
    orderFlag?: number;
    /** 选中多行 */
    selectedIds?: number[];
    /** 是否启用查询置顶 */
    isQueryTop?: boolean;
    /** 查询国家下的港口 */
    filterateId?: number[];
    /** 查询城市下的港口 */
    filterCityId?: number[];
    /** 查询区域下的港口 */
    filterAreaId?: number[];
    /** 排除选中 */
    noSelectedIds?: number[];
    /** 排除选中项的类型(多选)
跟上面的类型对应 */
    noSelectedIdsType?: number[];
    /** 排除所选国家查询其他国家下的港口 */
    excludeFilterateId?: number[];
    /** 排序国家ID */
    orderCoutryId?: number;
    /** 排序业务类型:0: 进口 1：出口 */
    orderType?: number;
    /** 排序港口类型:1：起运港 2：目的港 */
    orderPortType?: number;
  };

  type DropdownListDataDto = {
    key?: string;
    value?: number;
  };

  type DropdownListDataDtoUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: DropdownListDataDto[];
  };

  type DropDownOutputVO = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 国家-城市 */
    cnFullName?: string;
    /** 国家-城市 */
    enFullName?: string;
    /** 城市 */
    cnCityName?: string;
    /** 城市 */
    enCityName?: string;
    /** 国家代码 */
    countryCode?: string;
    type?: RegionDorpDownListTypeEnums;
    typeName?: string;
    enTypeName?: string;
    /** 组合字段，类型_Id */
    cId?: string;
  };

  type DropDownOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: DropDownOutputVO[];
  };

  type EditAdministrativeDivisionInput = {
    options?: OptionType;
    id?: number;
    /** 所属国家 */
    countryId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditAirCompanyInput = {
    options?: OptionType;
    id?: number;
    /** 所属国家 */
    countryId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 英文别名 */
    aliass?: string[];
    /** 简称 */
    abbreviation?: string;
    /** 代码 */
    code?: string;
    /** IATA码 */
    iata?: string;
    /** 数字代码 */
    numCode?: string;
    /** 数字代码2 */
    num2Code?: number;
    /** 数字代码3 */
    num3Code?: number;
    /** 中文地址 */
    cnAddress?: string;
    /** 英文地址 */
    enAddress?: string;
    /** PIMA */
    pima?: string;
    /** FWB */
    fwb?: string;
    /** FHl */
    fhl?: string;
    /** 官网URL */
    websiteUrl?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditAirportInput = {
    options?: OptionType;
    id?: number;
    /** 空港主港口Id */
    mId?: number;
    /** 空运航线 */
    airRouteId?: number;
    /** 所属城市 */
    cityId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 英文别名 */
    aliass?: string[];
    /** 代码 */
    code?: string;
    /** 代码别名 */
    aliasCodes?: string[];
    /** 海关代码 */
    customsCode?: string;
    /** 海关名称 */
    customsName?: string;
    /** 离境口岸代码 */
    departurePortCode?: string;
    /** 离境口岸名称 */
    departurePortName?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditAirRouteInput = {
    options?: OptionType;
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 排序 */
    sort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditAliasInput = {
    options?: OptionType;
    /** 别名Id */
    id?: number;
    /** 航司或者空港（起运港、目的港）Id */
    dataId?: number;
    /** 数据类型(1空港 ，2海港 ，3航空公司，4船公司，5城市) */
    dataType?: number;
    /** 原英文别名 */
    oldAliasName?: string;
    /** 英文别名 */
    newAliasName?: string;
  };

  type EditAliasOutput = {
    /** 别名Id */
    id?: number;
    /** 英文别名 */
    aliasName?: string;
  };

  type EditAliasOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: EditAliasOutput;
  };

  type EditAreaInput = {
    options?: OptionType;
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditBagBoxConfigInput = {
    options?: OptionTypeNoDelete;
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 包装重(kg) */
    packingWeight?: number;
    /** 长(cm) */
    length?: number;
    /** 宽(cm) */
    width?: number;
    /** 高(cm) */
    height?: number;
  };

  type EditBranchBankInput = {
    options?: OptionType;
    id?: number;
    /** 总行id */
    headBankId?: number;
    /** 省份id */
    provinceId?: number;
    /** 城市id */
    cityId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 支行名称 */
    abbreviation?: string;
    /** 支行代码 */
    code?: string;
    bankOwnership?: BankOwnershipEnums;
    /** 联行号 */
    bankNo?: string;
    /** SWIFTBIC */
    swiftBic?: string;
    /** 中文地址 */
    cnAddress?: string;
    /** 英文地址 */
    enAddress?: string;
    /** 是否有效 */
    isValid?: boolean;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditBrandInput = {
    options?: OptionType;
    id?: number;
    /** 品牌名称 */
    name?: string;
    state?: ProductTypeEnum;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditCategoryInput = {
    options?: OptionType;
    id?: number;
    /** 分类名称 */
    name?: string;
    /** 上级id，根级为0 */
    parentId?: number;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditCheckSeaWarehouseInput = {
    id?: number;
    /** 仓库地址 */
    address?: string;
    /** 所属城市 */
    belongCityId?: number;
    /** 仓库英文名称 */
    enName?: string;
    /** 仓库全称 */
    fullName?: string;
    /** 仓库名称 */
    name?: string;
  };

  type EditCityInput = {
    options?: OptionType;
    id?: number;
    /** 所属国家 */
    countryId?: number;
    /** 所属省份 */
    provinceId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 联合国code */
    unCode?: string;
    /** 城市别名 */
    aliass?: string[];
    /** 所属分组(1华南，2华东，3华北，4 西南，5华中) */
    cityType?: number;
    /** 时区 */
    timeZone?: string;
    /** 排序 */
    sort?: number;
    /** 创建人/修改人 */
    userId?: number;
    /** 维护时区 */
    maintainTimeZone?: number;
    /** 经度 */
    longitude?: string;
    /** 维度 */
    latitude?: string;
    /** 海拔 */
    elevation?: string;
    /** 语言 */
    language?: string;
    /** timezoneURL */
    timezoneURL?: string;
  };

  type EditContactInput = {
    options?: OptionType;
    id?: number;
    /** 外键类型(0=外部主体,1=课题组) */
    foreignType?: number;
    /** 外部主体id/课题组id */
    foreignId?: number;
    /** 联系人姓名 */
    name?: string;
    /** 联系方式 */
    contactWay?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditCountryInput = {
    options?: OptionType;
    id?: number;
    /** 所属区域 */
    areaId?: number;
    /** 币种 */
    currencyId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 二字代码 */
    digit2Code?: string;
    /** 三字代码 */
    digit3Code?: string;
    /** 企业代码类型 */
    enterpriseCodeType?: string;
    /** 区号 */
    countryCode?: number;
    /** 时差 */
    jetLag?: number;
    /** 城市名 */
    countryName?: string;
    /** 是否不可使用 */
    isUnusable?: boolean;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditCurrencyInput = {
    options?: OptionType;
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 显示代码 */
    displayCode?: string;
    /** 币种符号 */
    sign?: string;
    /** 币种本地化 */
    localized?: string;
    /** 排序 */
    sort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditDepartmentInput = {
    /** Id */
    id?: number;
    /** 外部主体id */
    externalSubjectId?: number;
    /** 名称 */
    name?: string;
    options?: OptionType;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditDistrictInput = {
    options?: OptionType;
    id?: number;
    /** 所属城市 */
    cityId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 邮编 */
    zipCodes?: string[];
    /** 排序 */
    sort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditDriverInfoInput = {
    /** 司机Id */
    driverInfoId?: number;
    /** 车辆Id集合 */
    truckInfoIds?: number[];
    /** 驾照 */
    drivingLicense?: number;
  };

  type EditEnumValueInfoInput = {
    options?: OptionType;
    id?: number;
    /** 属性 */
    property?: string;
    /** 关键字 */
    enumkey?: number;
    /** 描述 */
    disp?: string;
    /** 描述英文名 */
    enDisp?: string;
    /** 是否内部使用 */
    isInside?: boolean;
    /** 备注 */
    remark?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditEnumValueInfoRelevanceInput = {
    options?: OptionType;
    id?: number;
    /** 父级属性 */
    parentProperty?: string;
    /** 父级关键字 */
    parentEnumkey?: number;
    /** 子级属性 */
    property?: string;
    /** 子级关键字 */
    enumkey?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditEnumValuePropertyInput = {
    options?: OptionType;
    id?: number;
    /** 属性 */
    property?: string;
    /** 中文属性值 */
    propertyCnName?: string;
    /** 是否固定 */
    isFixed?: boolean;
    /** 关键字是否按位运算 */
    isBitwise?: boolean;
  };

  type EditFeeItemInput = {
    options?: OptionType;
    id?: number;
    /** 计量单位id集合（多选） */
    meteringUnitIds?: number[];
    /** 默认单位（数据源：计量单位id集合） */
    meteringUnitId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** 代码 */
    code?: string;
    /** 费用二字代码 */
    fee2Code?: string;
    /** 用途 */
    purpose?: number[];
    /** 财务业务费用 */
    financialFee?: number[];
    /** 费用属性 */
    feeAttributes?: number[];
    /** 自动设置供应商 */
    isAtuoSetSupplier?: boolean;
    /** 是否录入负数 */
    isInputNegative?: boolean;
    /** 是否公摊文件费 */
    isSharedDocumentFee?: boolean;
    /** 是否公摊费用 */
    isSharedFee?: boolean;
    /** 是否禁用 */
    isDisable?: boolean;
    /** 是否加收费用 */
    isSurcharge?: boolean;
    alterabilityType?: AlterabilityTypeEnum;
    /** 是否可下拉 */
    isPulldown?: boolean;
    /** 备注 */
    remark?: string;
    /** 创建人/修改人 */
    userId?: number;
    /** 费用归段 */
    costAllocation?: number;
  };

  type EditFreightrainCompanyInput = {
    options?: OptionType;
    /** 主键Id */
    id?: number;
    /** 主键Id集合（删除时传值） */
    ids?: number[];
    /** 代码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 英文名称 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** 国家id */
    countryId?: number;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
  };

  type EditGlobalWarehouseInput = {
    options?: OptionType;
    id?: number;
    /** 仓库名称 */
    name?: string;
    /** 英文名称 */
    enName?: string;
    /** 仓库代码 */
    code?: string;
    /** 所属公司 */
    externalSubjectId?: number;
    /** 是否内部子公司 */
    isInnerCompany?: boolean;
    /** 仓库类型 */
    warehouseType?: number;
    /** 业务范围 */
    businessScope?: string;
    /** 面积 */
    area?: number;
    /** 备注 */
    remark?: string;
    /** 国家/地区 */
    countryId?: number;
    /** 省/ 州 */
    provinceId?: number;
    /** 城市 */
    cityId?: number;
    /** 邮编 */
    postalCode?: string;
    /** 详细地址 */
    address?: string;
    /** 联系人1 */
    contactPerson1?: string;
    /** 联系人1手动输入 */
    contactPerson1Input?: string;
    /** 联系电话1 */
    telPhone1?: string;
    /** 邮箱1 */
    mail1?: string;
    /** 联系人2 */
    contactPerson2?: string;
    /** 联系人2手动输入 */
    contactPerson2Input?: string;
    /** 联系电话2 */
    telPhone2?: string;
    /** 邮箱2 */
    mail2?: string;
    /** 仓库地图 */
    map?: string;
    /** 仓库营业时间段 */
    businessHoursInputs?: BusinessHoursInput[];
  };

  type EditHeadBankInput = {
    options?: OptionType;
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称/代码 */
    abbreviation?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditMeteringUnitInput = {
    options?: OptionType;
    id?: number;
    /** 类型 */
    type?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 内部码 */
    intraCode?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditProductInput = {
    options?: OptionType;
    id?: number;
    /** 分类id */
    categoryId?: number;
    /** 品牌id */
    brandId?: number;
    /** 计量单位 */
    meteringUnit?: string;
    /** 商品名称 */
    name?: string;
    /** 货号 */
    no?: string;
    /** 规格型号 */
    specification?: string;
    /** 市场价 */
    marketPrice?: number;
    state?: ProductTypeEnum;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditProvinceInput = {
    options?: OptionType;
    id?: number;
    /** 所属国家 */
    countryId?: number;
    /** 行政区划id */
    administrativeDivisionId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditResearchGroupContactInput = {
    options?: OptionType;
    id?: number;
    /** 课题组id */
    researchGroupId?: number;
    /** 联系人姓名 */
    name?: string;
    /** 联系方式 */
    contactWay?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditResearchGroupInput = {
    options?: OptionType;
    id?: number;
    /** 部门院系id */
    departmentId?: number;
    /** 课题组名称 */
    name?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EditSeaCompanyInput = {
    options?: OptionType;
    id?: number;
    /** 所属国家 */
    countryId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 英文别名 */
    aliass?: string[];
    /** 简称 */
    abbreviation?: string;
    /** SCAC */
    scac?: string;
    /** 是否禁用 */
    isDisabled?: boolean;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditSeaportInput = {
    options?: OptionType;
    id?: number;
    /** 海港主港口Id */
    mId?: number;
    /** 海运航线 */
    seaRouteId?: number;
    /** 所属城市 */
    cityId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 英文别名 */
    aliass?: string[];
    /** SCAC */
    scac?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditSeaRouteInput = {
    options?: OptionType;
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 是否远洋 */
    isOceanGoing?: boolean;
    /** 排序 */
    sort?: number;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditSeaWarehouseInput = {
    id?: number;
    /** 仓库地址 */
    address?: string;
    /** 所属城市 */
    belongCityId?: number;
    /** 仓库英文名称 */
    enName?: string;
    /** 仓库全称 */
    fullName?: string;
    /** 仓库名称 */
    name?: string;
  };

  type EditStreetInput = {
    options?: OptionType;
    id?: number;
    /** 区县id */
    districtId?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 创建人/修改人 */
    userId?: number;
  };

  type EditTruckDriverInfoInput = {
    options?: OptionType;
    /** 车辆id */
    id?: number;
    source?: TruckSourceEnum;
    /** 车牌号码 */
    no?: string;
    /** 车辆类型(主数据枚举) */
    type?: number;
    /** 车辆载重 */
    load?: number;
    /** 车辆尺寸 */
    size?: string;
    /** 状态 */
    status?: number;
    /** 车辆备注 */
    remark?: string;
    /** 内部车辆,司机ID集合 */
    driverInfoIds?: number[];
    /** 司机名称 */
    driverInfoName?: string;
    /** 司机电话 */
    driverInfoPhone?: string;
    /** 司机身份证号 */
    driverInfoIdNo?: string;
  };

  type EditWarehouseInput = {
    options?: OptionType;
    id?: number;
    /** 仓库名称 */
    name?: string;
    /** 仓库管理员ID */
    adminId?: string;
    /** 创建人 */
    createUserId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type EnumValueInfoGetCustomerNatureGETParams = {
    /** 客户类型 */
    customerType?: CustomerType;
    /** 合同类型 */
    contractType?: ContractType;
  };

  type EnumValueInfoGetDetailsGETParams = {
    /** 枚举信息id */
    id?: number;
  };

  type EnumValueInfoGetEnumSourceListGETParams = {
    id?: number;
  };

  type EnumValueInfoGetEnumValueInfoTreeByPropertysGETParams = {
    propertys?: string[];
  };

  type EnumValueInfoGetFactorFieldDropdownListGETParams = {
    id?: number;
  };

  type EnumValueInfoGetFactorOptionDropdownListGETParams = {
    /** ID */
    Id?: number;
    /** 搜索词 */
    KeyWords?: string;
    PageIndex?: number;
    PageSize?: number;
  };

  type EnumValueInfoGetListGETParams = {
    /** 属性 */
    Property?: string;
    /** 关键字 */
    Enumkey?: number;
    /** 描述 */
    Disp?: string;
  };

  type EnumValueInfoGetListPageGETParams = {
    /** 属性 */
    Property?: string;
    /** 关键字 */
    Enumkey?: number;
    /** 描述 */
    Disp?: string;
    /** 选中项的Id */
    SelectedKey?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type EnumValueInfoGetPageGETParams = {
    /** 属性 */
    Property?: string;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type EnumValueInfoGetPropertyGETParams = {
    /** 属性 */
    property?: string;
  };

  type EnumValueInfoRelevanceGetDetailsGETParams = {
    /** 枚举关联关系ID */
    id?: number;
  };

  type EnumValueInfoRelevanceGetPageGETParams = {
    /** 属性 */
    Property?: string;
    /** 关键字 */
    Enumkey?: number;
    PageIndex?: number;
    PageSize?: number;
  };

  type EnumValueInfoRelevanceGetRelevanceWithIdGETParams = {
    /** 属性 */
    Property?: string;
    /** 子属性 */
    ChildProperty?: string;
    /** 枚举Id */
    EnumId?: number;
    PageIndex?: number;
    PageSize?: number;
  };

  type EnumValueOutput = {
    /** key */
    enumkey?: number;
    /** 描述 */
    disp?: string;
  };

  type EnumValuePropertyGetEnumValuePropertyDetialGETParams = {
    Id?: number;
  };

  type EnumValuePropertyGetEnumValuePropertyPageListGETParams = {
    /** 搜索关键字 */
    KeyWord?: string;
    PageIndex?: number;
    PageSize?: number;
  };

  type EnumValueTreeOutputVO = {
    /** 属性 */
    property?: string;
    /** 关键字 */
    enumkey?: number;
    /** 描述 */
    disp?: string;
    /** 描述英文名 */
    enDisp?: string;
    /** 枚举描述子级 */
    childEnumValueInfo?: EnumValueTreeOutputVO[];
  };

  type FeeItemGetDetailsGETParams = {
    /** 费用项目id */
    id?: number;
  };

  type FeeItemGetPageDropDownListGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number[];
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type FeeItemGetPageGETParams = {
    /** 是否禁用 */
    IsDisable?: boolean;
    /** 用途，位运算存储；1空运费用管理，2打单用，4海运费用管理，8铁运费用管理，16FBA费用管理，32小包费用管理 */
    Purpose?: number;
    /** 费用属性，t_enum_value_info表Property=’ChargeProperty‘; */
    FeeAttribute?: number;
    /** 不包含费用属性 */
    ExcludeFeeAttribute?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type FreightrainCompanyGetDetailsGETParams = {
    id?: number;
  };

  type GeographicalBaseGetCityLevelListGETParams = {
    /** 国家id，不传默认为中国 */
    CountryId?: number;
  };

  type GeographicalBaseGetDistrictLevelListGETParams = {
    /** 国家id，不传默认为中国 */
    CountryId?: number;
  };

  type GeographicalBaseGetPageGETParams = {
    /** 区域/国家/省份/城市的主键，根据所传行政区划级别而定 */
    Id?: number;
    /** 行政区划级别，1国家，2省份，3城市，4区县 */
    RegionLevel?: RegionLevelEnums;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type GetAdministrativeDivisionOutputVO = {
    id?: number;
    /** 国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetAdministrativeDivisionOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAdministrativeDivisionOutputVO[];
  };

  type GetAirCompanyCargoInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港，空港id */
    airportId?: number;
  };

  type GetAirCompanyCargoOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 航司英文名 */
    airCompanyEnName?: string;
    /** 起运港，空港id */
    airportId?: number;
    /** 港口代码 */
    airportCode?: string;
    /** 港口中文名 */
    airportCnName?: string;
    /** 所属货站id */
    cargoId?: number;
    /** 货站中文名 */
    cargoCnName?: string;
    /** 货站英文名 */
    cargoEnName?: string;
    /** 客/货机，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 客/货机描述 */
    typeDisp?: string;
    /** 是否直飞 */
    isDirect?: number;
  };

  type GetAirCompanyCargoOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirCompanyCargoOutput[];
  };

  type GetAirCompanyDetailsOutput = {
    id?: number;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** 代码 */
    code?: string;
    /** 中文地址 */
    cnAddress?: string;
    /** 英文地址 */
    enAddress?: string;
    /** IATA码 */
    iata?: string;
    /** 数字代码 */
    numCode?: string;
    /** 数字代码2 */
    num2Code?: number;
    /** 数字代码3 */
    num3Code?: number;
    /** PIMA */
    pima?: string;
    /** FWB */
    fwb?: string;
    /** FHL */
    fhl?: string;
    /** 官网URL */
    websiteUrl?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 别名list */
    aliass?: AliasOutput[];
  };

  type GetAirCompanyDropDownListOutput = {
    id?: number;
    /** 代码 */
    code?: string;
    /** 数字代码 */
    numCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 别名Id */
    aliasId?: number;
    /** 别名 */
    aliasName?: string;
  };

  type GetAirCompanyDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirCompanyDropDownListOutput[];
  };

  type GetAirCompanyOutput = {
    id?: number;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** 代码 */
    code?: string;
    /** 中文地址 */
    cnAddress?: string;
    /** 英文地址 */
    enAddress?: string;
    /** IATA码 */
    iata?: string;
    /** 数字代码 */
    numCode?: string;
    /** 数字代码2 */
    num2Code?: number;
    /** 数字代码3 */
    num3Code?: number;
    /** PIMA */
    pima?: string;
    /** FWB */
    fwb?: string;
    /** FHL */
    fhl?: string;
    /** 官网URL */
    websiteUrl?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetAirCompanyOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirCompanyOutput[];
  };

  type GetAircraftTypeInfoInput = {
    /** 机型id */
    id?: number;
  };

  type GetAircraftTypeInfoOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 中文名称 */
    airCompanyCnName?: string;
    /** 飞机名称 */
    name?: string;
    /** 飞机载重 */
    load?: number;
    /** 单位限重 */
    unitWeightLimit?: number;
    /** 机型，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 客/货机描述 */
    typeDisp?: string;
    /** 长 */
    length?: number;
    /** 宽 */
    width?: number;
    /** 高 */
    height?: number;
  };

  type GetAircraftTypeListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 精准匹配航司 */
    airCompanyId?: number;
    /** 精准匹配飞机名称 */
    name?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetAircraftTypeListOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 中文名称 */
    airCompanyCnName?: string;
    /** 飞机名称 */
    name?: string;
    /** 飞机载重 */
    load?: number;
    /** 单位限重 */
    unitWeightLimit?: number;
    /** 客/货机，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 客/货机描述 */
    typeDisp?: string;
    /** 长 */
    length?: number;
    /** 宽 */
    width?: number;
    /** 高 */
    height?: number;
  };

  type GetAircraftTypeListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAircraftTypeListOutput[];
  };

  type GetAirlinesPathInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetAirlinesPathOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 起运港，空港id */
    startAirportId?: number;
    /** 起运港代码 */
    startAirportCode?: string;
    /** 目的港，空港id */
    endAirportId?: number;
    /** 目的港代码 */
    endAirportCode?: string;
    /** 中转港，多个逗号分隔 */
    transferAirportId?: string;
    /** 中转港集合 */
    transferAirportList?: AirPortInfo[];
    /** 路径 */
    path?: string;
  };

  type GetAirlinesPathOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirlinesPathOutput[];
  };

  type GetAirportDetailsOutput = {
    id?: number;
    /** 空运航线id */
    airRouteId?: number;
    /** 空运航线中文名 */
    airRouteCnName?: string;
    /** 空运航线英文名 */
    airRouteEnName?: string;
    /** 所属区域id */
    areaId?: number;
    /** 区域中文名 */
    areaCnName?: string;
    /** 区域英文名 */
    areaEnName?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 所属省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市联合国code */
    cityUnCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 海关代码 */
    customsCode?: string;
    /** 海关名称 */
    customsName?: string;
    /** 离境口岸代码 */
    departurePortCode?: string;
    /** 离境口岸名称 */
    departurePortName?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 空港主港口Id */
    mId?: number;
    /** 空港主港口中文名 */
    mainCnName?: string;
    /** 空港主港口英文名 */
    mainEnName?: string;
    /** 空港主港口代码 */
    mainCode?: string;
    /** 是否主港口 */
    isMainPort?: boolean;
    /** 别名list */
    aliass?: AliasOutput[];
    /** 别名代码list */
    aliasCodes?: AliasOutput[];
  };

  type GetAirportDropDownListOutput = {
    pageIndex?: number;
    pageSize?: number;
    type?: PortDorpDownListTypeEnums;
    /** 下拉类型名称（中/英文公用） */
    typeName?: string;
    /** 排序字段 */
    level?: string;
    id?: number;
    /** 代码 */
    code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 城市中文 */
    cityId?: number;
    /** 城市中文 */
    cnCity?: string;
    /** 城市英文 */
    enCity?: string;
    /** 国家Id */
    countryId?: number;
    /** 国家中文 */
    cnCountry?: string;
    /** 国家英文 */
    enCountry?: string;
    /** 国家代码 */
    countryCode?: string;
    /** 排序 */
    sort?: string;
    /** 主港口 */
    mId?: number;
    /** 组合字段，类型_Id */
    cId?: string;
  };

  type GetAirportDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirportDropDownListOutput[];
  };

  type GetAirportOutput = {
    id?: number;
    /** 空运航线id */
    airRouteId?: number;
    /** 空运航线中文名 */
    airRouteCnName?: string;
    /** 空运航线英文名 */
    airRouteEnName?: string;
    /** 所属区域id */
    areaId?: number;
    /** 区域中文名 */
    areaCnName?: string;
    /** 区域英文名 */
    areaEnName?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 所属省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市联合国code */
    cityUnCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 海关代码 */
    customsCode?: string;
    /** 海关名称 */
    customsName?: string;
    /** 离境口岸代码 */
    departurePortCode?: string;
    /** 离境口岸名称 */
    departurePortName?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 空港主港口Id */
    mId?: number;
    /** 空港主港口中文名 */
    mainCnName?: string;
    /** 空港主港口英文名 */
    mainEnName?: string;
    /** 空港主港口代码 */
    mainCode?: string;
    /** 是否主港口 */
    isMainPort?: boolean;
  };

  type GetAirportOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirportOutput[];
  };

  type GetAirportPlaceDropDownListOutput = {
    type?: PortDorpDownListTypeEnums;
    /** 下拉类型名称 */
    typeName?: string;
    /** 类型名称（中/英文公用） */
    enTypeName?: string;
    /** 下拉类型名称 */
    level?: number;
    id?: number;
    /** 代码 */
    code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 城市中文 */
    cityId?: number;
    /** 城市中文 */
    cnCity?: string;
    /** 城市英文 */
    enCity?: string;
    /** 国家Id */
    countryId?: number;
    /** 国家中文 */
    cnCountry?: string;
    /** 国家英文 */
    enCountry?: string;
    /** 是否不可使用 */
    isUnusable?: boolean;
    /** 航线中文 */
    routeId?: number;
    /** 航线中文 */
    cnRoute?: string;
    /** 航线英文 */
    enRoute?: string;
    /** 国家代码 */
    countryCode?: string;
    /** 组合字段，类型_Id */
    cId?: string;
    /** 所属城市时区 */
    timeZone?: string;
    /** 别名Id */
    aliasId?: number;
    /** 别名 */
    aliasName?: string;
  };

  type GetAirportPlaceDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirportPlaceDropDownListOutput[];
  };

  type GetAirRouteOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetAirRouteOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAirRouteOutput[];
  };

  type GetAliasSelectOutputVO = {
    /** 别名Id */
    id?: number;
    /** 数据Id */
    dataId?: number;
    /** 数据类型 */
    dataType?: number;
    /** 英文名称 */
    enName?: string;
    /** 别名 */
    aliasName?: string;
  };

  type GetAreaOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetAreaOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetAreaOutput[];
  };

  type GetBagBoxConfigOutput = {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 包装重(kg) */
    packingWeight?: number;
    /** 长(cm) */
    length?: number;
    /** 宽(cm) */
    width?: number;
    /** 高(cm) */
    height?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type GetBagBoxConfigOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBagBoxConfigOutput[];
  };

  type GetBranchBankOutput = {
    id?: number;
    /** 总行Id */
    headBankId?: number;
    /** 总行中文名 */
    headBankCnName?: string;
    /** 总行英文名 */
    headBankEnName?: string;
    /** 总行简称 */
    headBankAbbreviation?: string;
    /** 国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 所属省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市联合国code */
    cityUnCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 支行名称 */
    abbreviation?: string;
    /** 支行代码 */
    code?: string;
    /** 银行归属，1大陆，2香港，3其他 */
    bankOwnership?: number;
    /** 联行号 */
    bankNo?: string;
    /** SWIFT BIC */
    swiftBic?: string;
    /** 中文地址 */
    cnAddress?: string;
    /** 英文地址 */
    enAddress?: string;
    /** 是否有效 */
    isValid?: boolean;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetBranchBankOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBranchBankOutput[];
  };

  type GetBrandOutputValueObject = {
    id?: number;
    /** 品牌名称 */
    name?: string;
    /** 状态(0=禁用，1=启用) */
    state?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetBrandOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetBrandOutputValueObject[];
  };

  type GetCargoListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** 城市id */
    cityId?: number;
  };

  type GetCargoOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 货站中文名 */
    cnName?: string;
    /** 货站英文名 */
    enName?: string;
    /** 装板地勤单价 */
    plateGroundPrice?: number;
    /** 交散地勤单价 */
    groundFeePrice?: number;
    /** 地勤费最低收费 */
    groundFeeMin?: number;
    /** 翌飞货站代码 */
    fayeTerminalCode?: string;
    /** 是否禁用 */
    isDisabled?: boolean;
    /** 中文地址 */
    cnAddress?: string;
    /** 货站备注 */
    cargoRemark?: string;
    /** 备注1 */
    remark1?: string;
    /** 备注2 */
    remark2?: string;
    /** 币种id */
    currencyId?: number;
    /** 币种 */
    currency?: string;
  };

  type GetCargoOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCargoOutput[];
  };

  type GetCategoryOutputValueObject = {
    id?: number;
    /** 分类名称 */
    name?: string;
    /** 父级分类 */
    parentName?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetCategoryOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCategoryOutputValueObject[];
  };

  type GetCityDetailsOutput = {
    id?: number;
    /** 国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 国家是否不可使用 */
    countryIsUnusable?: boolean;
    /** 省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 联合国code */
    unCode?: string;
    /** 所属分组(1华南，2华东，3华北，4 西南，5华中) */
    cityType?: number;
    /** 时区 */
    timeZone?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 维护时区 */
    maintainTimeZone?: number;
    /** 经度 */
    longitude?: string;
    /** 维度 */
    latitude?: string;
    /** 海拔 */
    elevation?: string;
    /** 语言 */
    language?: string;
    /** timezoneURL */
    timezoneURL?: string;
    /** 别名list */
    aliass?: AliasOutput[];
  };

  type GetCityDropDownListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** 国家id */
    countryId?: number;
  };

  type GetCityDropDownListOutputVO = {
    id?: number;
    /** 国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
  };

  type GetCityDropDownListOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCityDropDownListOutputVO[];
  };

  type GetCityLevelOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    children?: GetNameOutput[];
  };

  type GetCityLevelOutputListUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetCityLevelOutput[];
  };

  type GetCityOutput = {
    id?: number;
    /** 国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 国家是否不可使用 */
    countryIsUnusable?: boolean;
    /** 省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 联合国code */
    unCode?: string;
    /** 所属分组(1华南，2华东，3华北，4 西南，5华中) */
    cityType?: number;
    /** 时区 */
    timeZone?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 维护时区 */
    maintainTimeZone?: number;
    /** 经度 */
    longitude?: string;
    /** 维度 */
    latitude?: string;
    /** 海拔 */
    elevation?: string;
    /** 语言 */
    language?: string;
    /** timezoneURL */
    timezoneURL?: string;
  };

  type GetCityOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCityOutput[];
  };

  type GetCityTimeDiffVO = {
    airPortCode?: string;
    /** 时区 */
    gmt?: string;
  };

  type GetContactOutputValueObject = {
    id?: number;
    /** 外键类型(0=外部主体,1=课题组) */
    foreignType?: number;
    /** 外部主体id/课题组id */
    foreignId?: number;
    /** 联系人姓名 */
    name?: string;
    /** 联系方式 */
    contactWay?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetContactOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetContactOutputValueObject[];
  };

  type GetCountryOutput = {
    id?: number;
    /** 区域id */
    areaId?: number;
    /** 区域中文名 */
    areaCnName?: string;
    /** 区域英文名 */
    areaEnName?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 币种id */
    currencyId?: number;
    /** 币种代码 */
    currencyCode?: string;
    /** 币种中文名 */
    currencyCnName?: string;
    /** 币种英文名 */
    currencyEnName?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 二字代码 */
    digit2Code?: string;
    /** 三字代码 */
    digit3Code?: string;
    /** 是否不可使用 */
    isUnusable?: boolean;
    /** 企业代码类型 */
    enterpriseCodeType?: string;
    /** 区号 */
    countryCode?: number;
    /** 时差 */
    jetLag?: number;
    /** 城市名 */
    countryName?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetCountryOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCountryOutput[];
  };

  type GetCurrencyDropDownListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetCurrencyDropDownListOutputVO = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
  };

  type GetCurrencyDropDownListOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCurrencyDropDownListOutputVO[];
  };

  type GetCurrencyOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 显示代码 */
    displayCode?: string;
    /** 符号 */
    sign?: string;
    /** 本地化 */
    localized?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetCurrencyOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetCurrencyOutput[];
  };

  type GetDepartmentOutput = {
    /** Id */
    id?: number;
    /** 外部主体id */
    externalSubjectId?: number;
    /** 部门院系名称 */
    name?: string;
  };

  type GetDepartmentOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetDepartmentOutput[];
  };

  type GetDistrictLevelOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    children?: GetCityLevelOutput[];
  };

  type GetDistrictOutput = {
    id?: number;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 所属省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市联合国code */
    cityUnCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 首字母 */
    firstLetter?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 邮编list */
    zipCodes?: ZipCodeOutput[];
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetDistrictOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetDistrictOutput[];
  };

  type GetDriverInfoPageIntputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 司机来源(1=内部,2=外部) */
    source?: number;
  };

  type GetDriverInfoPageOutputVO = {
    /** 司机Id */
    id?: number;
    /** 用户id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
    source?: DriverSourceEnum;
    /** 司机来源描述 */
    sourceDisp?: string;
    /** 驾照 */
    drivingLicense?: number;
    /** 驾照描述 */
    drivingLicenseDisp?: string;
    /** 司机名称 */
    name?: string;
    /** 司机英文名称 */
    enName?: string;
    /** 电话号码 */
    phone?: string;
    /** 身份证号 */
    idNo?: string;
    /** 性别 */
    sex?: number;
    /** 性别描述 */
    sexDisp?: string;
    /** 出生日期 */
    birthDate?: string;
    /** 年龄 */
    age?: number;
    /** 状态 */
    status?: number;
    /** 是否送货司机 */
    isDelivery?: boolean;
    /** 是否送货司机描述 */
    isDeliveryDisp?: string;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 关联车辆（多辆车辆，逗号分割） */
    truckInfoNo?: string;
    /** 车辆集合信息 */
    truckInfoList?: TruckInfo[];
  };

  type GetDriverInfoPageOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetDriverInfoPageOutputVO[];
  };

  type GetEnumValueInfoListOutput = {
    /** 属性名 */
    property?: string;
    /** 属性对应枚举列表 */
    enumValueInfoItem?: GetEnumValueInfoOutput[];
  };

  type GetEnumValueInfoOutput = {
    id?: number;
    /** 属性 */
    property?: string;
    /** 关键字 */
    enumkey?: number;
    /** 描述 */
    disp?: string;
    /** 描述英文名 */
    enDisp?: string;
    /** 是否内部使用 */
    isInside?: boolean;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetEnumValueInfoOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetEnumValueInfoOutput[];
  };

  type GetEnumValueInfoPropertyOutput = {
    /** 属性 */
    property?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetEnumValueInfoPropertyOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetEnumValueInfoPropertyOutput[];
  };

  type GetEnumValueInfoRelevanceItem = {
    /** 属性 */
    property?: string;
    /** 关键字 */
    enumkey?: number;
  };

  type GetEnumValueInfoRelevanceListInputVO = {
    /** 条件集合 */
    items?: GetEnumValueInfoRelevanceItem[];
  };

  type GetEnumValueInfoRelevanceListOutputVO = {
    /** 属性 */
    parentProperty?: string;
    /** 关键字 */
    parentEnumkey?: number;
    /** 枚举关联关系集合 */
    enumValueInfoRelevanceItem?: GetEnumValueInfoRelevanceOutputValueObject[];
  };

  type GetEnumValueInfoRelevanceOutputValueObject = {
    id?: number;
    /** 父级属性 */
    parentProperty?: string;
    /** 父级关键字 */
    parentEnumkey?: number;
    /** 父级描述 */
    parentDisp?: string;
    /** 父级英文描述 */
    parentEnDisp?: string;
    /** 子级属性 */
    childProperty?: string;
    /** 子级关键字 */
    childEnumkey?: number;
    /** 子级描述 */
    childDisp?: string;
    /** 子级英文描述 */
    childEnDisp?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建人英文 */
    createEnUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改人英文 */
    updateEnUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetEnumValueInfoRelevanceOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetEnumValueInfoRelevanceOutputValueObject[];
  };

  type GetEnumValueInfoSelectListInput = {
    /** 属性集合 */
    propertys?: string[];
  };

  type GetEnumValuePropertyListOutput = {
    /** 属性Id */
    id?: number;
    /** 英文属性值 */
    property?: string;
    /** 中文属性值 */
    propertyCnName?: string;
    /** 是否固定 */
    isFixed?: boolean;
    /** 枚举信息记录总计 */
    enumValueInfoCount?: number;
    /** 关键字是否按位运算 */
    isBitwise?: boolean;
  };

  type GetEnumValuePropertyListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetEnumValuePropertyListOutput[];
  };

  type GetEnumValuePropertyOutput = {
    /** 枚举属性Id */
    id?: number;
    /** 英文属性值 */
    property?: string;
    /** 中文属性值 */
    propertyCnName?: string;
    /** 是否固定 */
    isFixed?: boolean;
    /** 关键字是否按位运算 */
    isBitwise?: boolean;
  };

  type GetFeeItemDropDownListOutput = {
    id?: number;
    /** 计量单位id */
    meteringUnitId?: number;
    /** 费用中文名 */
    cnName?: string;
    /** 费用英文名 */
    enName?: string;
    /** 费用代码 */
    code?: string;
    /** 计量单位中文名 */
    meteringUnitCnName?: string;
    /** 计量单位英文名 */
    meteringUnitEnName?: string;
  };

  type GetFeeItemDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFeeItemDropDownListOutput[];
  };

  type GetFeeItemOutput = {
    id?: number;
    /** 默认计量单位id */
    meteringUnitId?: number;
    /** 默认计量单位中文名 */
    defaultMeteringUnitCnName?: string;
    /** 默认计量单位英文名 */
    defaultMeteringUnitEnName?: string;
    /** 默认计量单位代码 */
    defaultMeteringUnitCode?: string;
    /** 计量单位id字符串列表 */
    meteringUnitIds?: string;
    /** 计量单位中文名 */
    meteringUnitCnName?: string;
    /** 计量单位英文名 */
    meteringUnitEnName?: string;
    /** 计量单位代码 */
    meteringUnitCode?: string;
    /** 计量单位内部码 */
    meteringUnitIntraCode?: string;
    /** 计量单位信息 */
    meteringUnitItems?: MeteringUnitInfo[];
    /** 费用中文名 */
    cnName?: string;
    /** 费用英文名 */
    enName?: string;
    /** 费用简称 */
    abbreviation?: string;
    /** 费用代码 */
    code?: string;
    /** 费用二字代码 */
    fee2Code?: string;
    /** 用途，位运算存储；t_enum_value_info表Property=’ChargeUser‘;1空运费用管理，2打单用，4海运费用管理，8铁运费用管理，16FBA费用管理，32小包费用管理 */
    purpose?: number;
    /** 用途list */
    purposes?: EnumValueOutput[];
    /** 用途名称逗号分割 */
    purposesDisp?: string;
    /** 财务业务费用，t_enum_value_info表Property = ’FinanceBusiness‘;1仅业务，2仅财务，4公用 */
    financialFee?: number;
    /** 财务业务费用List */
    financialFees?: EnumValueOutput[];
    /** 财务业务费用名称逗号分割 */
    financialFeesDisp?: string;
    /** 费用属性，t_enum_value_info表Property=’ChargeProperty‘;1IsTF，2FIXED，4LocalCharge，8自动TC费用，16自动入闸费用，32手动费用，64自动报关，128IsTFTrans，256FclOF，512LclOF，1024LclOFBulkload，2048LclOFTrans，4096FclOfBarge，8912FclOfTrans */
    feeAttribute?: number;
    /** 费用属性集合 */
    feeAttributes?: number[];
    /** 费用属性描述 */
    feeAttributeDisp?: string;
    /** 自动设置供应商 */
    isAtuoSetSupplier?: boolean;
    /** 是否录入负数 */
    isInputNegative?: boolean;
    /** 是否公摊文件费 */
    isSharedDocumentFee?: boolean;
    /** 是否公摊费用 */
    isSharedFee?: boolean;
    /** 是否禁用 */
    isDisable?: boolean;
    /** 是否加收费用 */
    isSurcharge?: boolean;
    alterabilityType?: AlterabilityTypeEnum;
    /** 可改类型描述 */
    alterabilityTypeDisp?: string;
    /** 是否可下拉 */
    isPulldown?: boolean;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 费用归段 */
    costAllocation?: number;
    /** 费用归段描述 */
    costAllocationDisp?: string;
  };

  type GetFeeItemOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFeeItemOutput[];
  };

  type GetFlightInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 模糊匹配航班号 */
    flightNo?: string;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 客货机 */
    type?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetFlightOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 航司中文名 */
    airCompanyCnName?: string;
    /** 起运港，空港id */
    startAirportId?: number;
    /** 起运港代码 */
    startAirportCode?: string;
    /** 起运港中文名 */
    startAirportCnName?: string;
    /** 起运港英文名 */
    startAirportEnName?: string;
    /** 目的港，空港id */
    endAirportId?: number;
    /** 目的港代码 */
    endAirportCode?: string;
    /** 目的港中文名 */
    endAirportCnName?: string;
    /** 目的港英文名 */
    endAirportEnName?: string;
    /** 机型id */
    aircraftTypeId?: number;
    /** 机型 */
    aircraftTypeName?: string;
    /** 航班号 */
    flightNo?: string;
    /** 起飞时间 */
    startTime?: string;
    /** 到达时间 */
    endTime?: string;
    /** 第几天到达 */
    arriveDay?: number;
    /** 频率，位运算存储；t_enum_value_info表Property=’WeekPropertyNum‘; */
    frequency?: string;
    /** 频率描述 */
    frequencyDisp?: string;
    /** 客/货机，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 客/货机描述 */
    typeDisp?: string;
    /** 备注 */
    remark?: string;
  };

  type GetFlightOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFlightOutput[];
  };

  type GetFlightTruckListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 客/货机 */
    type?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetFlightTruckOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 起运港，空港id */
    startAirportId?: number;
    /** 起运港代码 */
    startAirportCode?: string;
    /** 目的港，空港id */
    endAirportId?: number;
    /** 目的港代码 */
    endAirportCode?: string;
    /** 编号 */
    flightTruckNo?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 航班频率，位运算存储；t_enum_value_info表Property=’WeekPropertyNum‘; */
    frequency?: string;
    /** 频率描述 */
    frequencyDisp?: string;
    /** 客/货机，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 客/货机描述 */
    typeDisp?: string;
    /** 第几天到达 */
    arriveDay?: number;
    /** 卡车公司 */
    truckCompany?: string;
    /** 备注 */
    remark?: string;
  };

  type GetFlightTruckOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFlightTruckOutput[];
  };

  type GetFreightrainCompanyDetailOutputVO = {
    /** 主键Id */
    id?: number;
    /** 代码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 英文名称 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** 国家id */
    countryId?: number;
    /** 国家名称 */
    countryName?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
  };

  type GetFreightrainCompanyDropDownIntputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 搜索关键字 */
    keyword?: string;
    /** 国家 */
    countryId?: number;
    /** 选中的id集合 */
    selectIds?: number[];
    /** 类型 */
    type?: number;
  };

  type GetFreightrainCompanyPageIntputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 搜索关键字 */
    keyword?: string;
    /** 国家 */
    countryId?: number;
  };

  type GetFreightrainCompanyPageOutputVO = {
    /** 主键Id */
    id?: number;
    /** 代码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 英文名称 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** 国家id */
    countryId?: number;
    /** 国家名称 */
    countryName?: string;
    /** 国家英文名称 */
    countryEnName?: string;
    /** 国家二字代码 */
    digit2Code?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type GetFreightrainCompanyPageOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFreightrainCompanyPageOutputVO[];
  };

  type GetFuelInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 起运地类型 */
    startPlaceType?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 目的地类型 */
    endPlaceType?: number;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetFuelOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 起运港，空港id */
    startAirportId?: number;
    /** 起运地类型 */
    startPlaceType?: number;
    /** 起运港代码 */
    startAirportCode?: string;
    /** 目的港，空港id */
    endAirportId?: number;
    /** 目的地类型 */
    endPlaceType?: number;
    /** 目的港代码 */
    endAirportCode?: string;
    /** 燃油单价 */
    price?: number;
    /** 最低收费 */
    chargeMin?: number;
    /** 开始生效时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 币种id */
    currencyId?: number;
    /** 币种 */
    currency?: string;
  };

  type GetFuelOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetFuelOutput[];
  };

  type GetFuelOutputUnifyPageResultDtoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetFuelOutputUnifyPageResultDto;
  };

  type GetGeographicalBaseOutput = {
    /** 数据id */
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    regionLevel?: RegionLevelEnums;
  };

  type GetGeographicalBaseOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetGeographicalBaseOutput[];
  };

  type GetGlobalWarehouseBusinessHoursOutputValueObject = {
    id?: number;
    /** 仓库Id */
    warehouseId?: number;
    /** 营业时间段值 */
    weekDayValues?: number[];
    /** 营业时间段文本 */
    weekDayTexts?: string[];
    startTime?: TimeSpan;
    endTime?: TimeSpan;
  };

  type GetGlobalWarehouseOutputValueObject = {
    id?: number;
    /** 仓库名称 */
    name?: string;
    /** 英文名称 */
    enName?: string;
    /** 仓库代码 */
    code?: string;
    /** 所属公司 */
    externalSubjectId?: number;
    /** 是否内部子公司 */
    isInnerCompany?: boolean;
    /** 所属公司 */
    externalSubjectName?: string;
    /** 仓库类型 */
    warehouseType?: number;
    /** 仓库类型 */
    warehouseTypeDisp?: string;
    /** 业务范围 */
    businessScope?: string;
    /** 业务范围 */
    businessScopeDisp?: string;
    /** 面积 */
    area?: string;
    /** 备注 */
    remark?: string;
    /** 国家/地区 */
    countryId?: number;
    /** 国家/地区 */
    country?: string;
    /** 省/ 州 */
    provinceId?: number;
    /** 省/ 州 */
    province?: string;
    /** 城市 */
    cityId?: number;
    /** 城市 */
    city?: string;
    /** 邮编 */
    postalCode?: string;
    /** 详细地址 */
    address?: string;
    /** 联系人1 */
    contactPerson1?: string;
    /** 联系人1手动输入 */
    contactPerson1Input?: string;
    /** 联系电话1 */
    telPhone1?: string;
    /** 邮箱1 */
    mail1?: string;
    /** 联系人2 */
    contactPerson2?: string;
    /** 联系人2手动输入 */
    contactPerson2Input?: string;
    /** 联系电话2 */
    telPhone2?: string;
    /** 邮箱2 */
    mail2?: string;
    /** 仓库地图 */
    map?: string;
    /** 仓库地图 */
    mapUrl?: string;
    /** 是否禁用 */
    isDiabled?: boolean;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
    /** 仓库营业时间段 */
    businessHours?: GetGlobalWarehouseBusinessHoursOutputValueObject[];
    /** 仓库营业时间段拼接字符串 */
    businessHoursStr?: string;
  };

  type GetGlobalWarehouseOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetGlobalWarehouseOutputValueObject[];
  };

  type GetGlobalWarehousePageInputValueObject = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 仓库代码 */
    code?: string;
    /** 仓库名称 */
    name?: string;
    /** 所属公司 */
    externalSubjectId?: number;
    /** 仓库类型 */
    warehouseType?: number;
    /** 业务范围 */
    businessScope?: number[];
    /** 启用禁用过滤 */
    isDiabled?: boolean;
    /** 是否内部公司 */
    isInnerCompany?: number;
    /** 是否过滤禁用数据 */
    isFilterDisabled?: boolean;
  };

  type GetGoodsTypeAirListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 货物类型名称 */
    goodsTypeName?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetGoodsTypeAirOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 货物类型名称 */
    goodsTypeName?: string;
    /** 货物类型英文名 */
    goodsTypeEnName?: string;
    /** 货物类型id */
    goodsTypeId?: number;
    /** 计算方式 */
    goodsTypeCalculation?: string;
    /** 开始值 */
    goodsTypeStartValue?: number;
    /** 结束值 */
    goodsTypeEndValue?: number;
    /** 最低收货重量 */
    goodsTypeWeightReceivedMin?: number;
  };

  type GetGoodsTypeAirOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetGoodsTypeAirOutput[];
  };

  type GetGoodsTypeListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetGoodsTypeOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    id?: number;
    /** 货物类型名称 */
    name?: string;
    /** 货物类型英文名称 */
    enName?: string;
    calculation?: GoodsTypeCalculationEnums;
    /** 计算方式描述 */
    calculationDescribe?: string;
    /** 开始值 */
    startValue?: number;
    /** 结算值 */
    endValue?: number;
    /** 最低收货重量 */
    weightReceivedMin?: number;
  };

  type GetGoodsTypeOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetGoodsTypeOutput[];
  };

  type GetHeadBankOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称\代码 */
    abbreviation?: string;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetHeadBankOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetHeadBankOutput[];
  };

  type GetHsCodePageInputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 国家Id */
    countryId?: number;
    name?: string;
  };

  type GetHsCodePageOutputVO = {
    id?: number;
    /** 国家Id */
    countryId?: number;
    /** 国家名称 */
    cnName?: string;
    /** 商品HsCode */
    hsCode?: string;
    /** 名称 */
    name?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUserName?: string;
    /** 创建人id */
    createUserId?: number;
    /** 修改人 */
    updateUserName?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetHsCodePageOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetHsCodePageOutputVO[];
  };

  type GetIdInput = {
    /** 国家名称 */
    countrCnName: string;
    /** 省份名称 */
    provinceCnName?: string;
    /** 城市名称 */
    cityCnName?: string;
    /** 区县名称 */
    districtCnName?: string;
  };

  type GetIdOutput = {
    /** 国家ID */
    countrId?: number;
    /** 省份ID */
    provinceId?: number;
    /** 城市ID */
    cityId?: number;
    /** 区县ID */
    districtId?: number;
  };

  type GetIdOutputUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetIdOutput;
  };

  type GetMeteringUnitOutputValueObject = {
    id?: number;
    /** 类型 */
    type?: number;
    /** 类型描述 */
    disp?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** Intra代码 */
    intraCode?: string;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetMeteringUnitOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetMeteringUnitOutputValueObject[];
  };

  type GetNameOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
  };

  type GetNationalHotdataListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 国家ID */
    countryId?: number;
    /** 进出口 */
    inOut?: boolean;
    /** 航司ID */
    airCompanyId?: number;
    /** 空港ID */
    airPortId?: number;
    /** 海港ID */
    seaPortId?: number;
    /** 船司ID */
    shippingHouseId?: number;
  };

  type GetNationalHotdataListOutput = {
    /** 主键ID(多条记录合并以逗号进行分割) */
    ids?: string;
    /** 国家ID */
    countryId?: number;
    /** 国家代码 */
    countryCode?: string;
    /** 进出口0：进口 1:出口 */
    inOut?: boolean;
    /** 进出口名称 0：进口 1:出口 */
    inOutName?: string;
    /** 空港代码 */
    airPortCode?: string;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 海港英文名 */
    seaPortEnName?: string;
    /** 船司英文名 */
    shippingHouseEnName?: string;
    /** 创建时间，格式 yyyy-mm-dd HH:MM */
    createTime?: string;
    /** 创建人ID */
    createUserId?: number;
    /** 创建人名称(英文) */
    createUserName?: string;
    /** 修改时间，格式 yyyy-mm-dd HH:MM */
    updateTime?: string;
    /** 修改人ID */
    updateUserId?: number;
    /** 修改人名称(英文) */
    updateUserName?: string;
  };

  type GetNationalHotdataListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetNationalHotdataListOutput[];
  };

  type GetNearAirportInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 省市 */
    cityId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 目的港，空港类型 */
    endAirportType?: number;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetNearAirportOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    id?: number;
    /** 城市/省份id */
    cityId?: number;
    /** 城市/省份中文名 */
    cityCnName?: string;
    /** 城市/省份英文名 */
    cityEnName?: string;
    /** 始发机场，空港id */
    startAirportId?: number;
    /** 始发机场，空港中文名 */
    startAirportCnName?: string;
    /** 始发机场，空港英文名 */
    startAirportEnName?: string;
    /** 目的港，空港id */
    endAirportId?: number;
    /** 目的港，空港代码 */
    endAirportCode?: string;
    /** 目的港，空港类型 */
    endAirportType?: number;
    /** 起运港类型：4=城市,5=省份 */
    startAirportType?: number;
    /** 起运港类型描述 */
    startAirportTypeDisp?: string;
    /** 排序 */
    sort?: number;
  };

  type GetNearAirportOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetNearAirportOutput[];
  };

  type GetNearSeaportInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 城市 */
    cityId?: number;
    /** 港口 */
    seaportId?: number;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetNearSeaportOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 海港id */
    seaportId?: number;
    /** 海港中文名 */
    seaportCnName?: string;
    /** 海港英文名 */
    seaportEnName?: string;
  };

  type GetNearSeaportOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetNearSeaportOutput[];
  };

  type GetPackingDropDownInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number[];
    /** 业务类型 */
    businessType?: number;
  };

  type GetPackingDropDownOutputVO = {
    /** id */
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 包装编码 */
    code?: string;
  };

  type GetPackingDropDownOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetPackingDropDownOutputVO[];
  };

  type GetPackingInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number[];
    /** id集合 */
    id?: number[];
    /** 业务类型 */
    businessType?: number;
  };

  type GetPackingOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 包装编码 */
    code?: string;
    /** Intra代码 */
    intraCode?: string;
    /** 业务类型，t_enum_value_info的“PackageBusinessType” */
    businessType?: string;
    /** 业务类型 */
    businessTypeList?: EnumValueOutput[];
  };

  type GetPackingOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetPackingOutput[];
  };

  type GetPlayPlateFeeInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetPlayPlateFeeOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 起运港，空港id */
    startAirportId?: number;
    /** 起运港代码 */
    startAirportCode?: string;
    /** 单价 */
    price?: number;
    /** 币种id */
    currencyId?: number;
    /** 币种 */
    currency?: string;
  };

  type GetPlayPlateFeeOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetPlayPlateFeeOutput[];
  };

  type GetPortListOutput = {
    /** 空港 */
    airPort?: GetPortListOutputValueObject[];
    /** 海港 */
    seaPort?: GetPortListOutputValueObject[];
  };

  type GetPortListOutputValueObject = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
  };

  type GetProductOutputValueObject = {
    id?: number;
    /** 货号 */
    no?: string;
    /** 品牌id */
    brandId?: number;
    /** 品名 */
    name?: string;
    /** 分类 */
    categoryName?: string;
    /** 品牌 */
    brandName?: string;
    /** 规格型号 */
    specification?: string;
    /** 计量单位 */
    meteringUnit?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 状态(0=禁用，1=启用) */
    state?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetProductOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetProductOutputValueObject[];
  };

  type GetProvinceOutput = {
    id?: number;
    /** 国家Id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 国家是否不可使用 */
    countryIsUnusable?: boolean;
    /** 行政区划id */
    administrativeDivisionId?: number;
    /** 行政区划中文名 */
    administrativeDivisionCnName?: string;
    /** 行政区划英文名 */
    administrativeDivisionEnName?: string;
    /** 行政区划代码 */
    administrativeDivisionCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetProvinceOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetProvinceOutput[];
  };

  type GetResearchGroupContactOutputValueObject = {
    id?: number;
    /** 课题组id */
    researchGroupId?: number;
    /** 联系人姓名 */
    name?: string;
    /** 联系方式 */
    contactWay?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetResearchGroupContactOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetResearchGroupContactOutputValueObject[];
  };

  type GetResearchGroupOutputValueObject = {
    id?: number;
    /** 部门院系id */
    departmentId?: number;
    /** 课题组名称 */
    name?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetResearchGroupOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetResearchGroupOutputValueObject[];
  };

  type GetSeaArkTypeInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetSeaArkTypeOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 柜型名称 */
    name?: string;
    /** 限制体积CBM */
    limitCBM?: number;
    /** 限制重量KG */
    limitKG?: number;
    /** TEU */
    teu?: number;
    /** SCAC */
    scac?: string;
    /** 排序 */
    sort?: number;
  };

  type GetSeaArkTypeOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaArkTypeOutput[];
  };

  type GetSeaCompanyDetailsOutput = {
    id?: number;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** SCAC */
    scac?: string;
    /** 是否禁用 */
    isDisabled?: boolean;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 别名list */
    aliass?: AliasOutput[];
  };

  type GetSeaCompanyDropDownListOutput = {
    /** 下拉类型 */
    type?: number;
    id?: number;
    /** 简称 */
    code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 国家 */
    cnCountry?: string;
    /** 国家(英文) */
    enCountry?: string;
    /** 排序 */
    sort?: string;
  };

  type GetSeaCompanyDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaCompanyDropDownListOutput[];
  };

  type GetSeaCompanyOutput = {
    id?: number;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 简称 */
    abbreviation?: string;
    /** SCAC */
    scac?: string;
    /** 是否禁用 */
    isDisabled?: boolean;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetSeaCompanyOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaCompanyOutput[];
  };

  type GetSeaExportWharfListInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 起运港ID */
    startPlaceId?: number;
    /** 码头英文名称(英文)，长度不能超过68位 */
    wharfEnName?: string;
    /** 码头名称(中文) */
    wharfName?: string;
  };

  type GetSeaOutwharfDetailOutput = {
    /** 主键ID */
    id?: number;
    /** 起运地编码 */
    startPlaceCode?: string;
    /** 起运起ID */
    startPlaceId?: number;
    /** 起运地类型，1：城市 4：港口 */
    startPlaceType?: number;
    /** 码头名称(英文) */
    wharfEnName?: string;
    /** 码头名称(中文) */
    wharfName?: string;
  };

  type GetSeaOutwharfListOutput = {
    /** 主键ID */
    id?: number;
    /** 创建时间，格式 yyyy-mm-dd HH:MM */
    createTime?: string;
    /** 创建人ID */
    createUserId?: number;
    /** 创建人名称(英文) */
    createUserName?: string;
    /** 起运地中文名称 */
    startPlaceCnName?: string;
    /** 起运地英文文名称 */
    startPlaceEnName?: string;
    /** 起运地ID */
    startPlaceId?: number;
    /** 起运地类型，1：港口 4：城市 */
    startPlaceType?: number;
    /** 修改时间，格式 yyyy-mm-dd HH:MM */
    updateTime?: string;
    /** 修改人ID */
    updateUserId?: number;
    /** 修改人名称(英文) */
    updateUserName?: string;
    /** 码头英文名称 */
    wharfEnName?: string;
    wharfName?: string;
  };

  type GetSeaOutwharfListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaOutwharfListOutput[];
  };

  type GetSeaportDetailsOutput = {
    id?: number;
    /** 海运航线id */
    seaRouteId?: number;
    /** 海运航线中文名 */
    seaRouteCnName?: string;
    /** 海运航线英文名 */
    seaRouteEnName?: string;
    /** 所属区域id */
    areaId?: number;
    /** 区域中文名 */
    areaCnName?: string;
    /** 区域英文名 */
    areaEnName?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 所属省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市联合国code */
    cityUnCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** SCAC */
    scac?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 海港主港口Id */
    mId?: number;
    /** 海港主港口中文名 */
    mainCnName?: string;
    /** 海港主港口英文名 */
    mainEnName?: string;
    /** 是否主港口 */
    isMainPort?: boolean;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 别名list */
    aliass?: AliasOutput[];
  };

  type GetSeaportDropDownListOutput = {
    /** Id */
    id?: number;
    type?: PortDorpDownListTypeEnums;
    /** 排序字段 */
    level?: string;
    /** 类型名称（中/英文公用） */
    typeName?: string;
    /** 类型名称（中/英文公用） */
    enTypeName?: string;
    /** SCAC */
    code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 城市中文 */
    cityId?: number;
    /** 城市中文 */
    cnCity?: string;
    /** 城市英文 */
    enCity?: string;
    /** 国家Id */
    countryId?: number;
    /** 国家中文 */
    cnCountry?: string;
    /** 国家英文 */
    enCountry?: string;
    /** 国家代码 */
    countryCode?: string;
    /** 是否不可使用 */
    isUnusable?: boolean;
    /** 航线中文 */
    routeId?: number;
    /** 航线中文 */
    cnRoute?: string;
    /** 航线英文 */
    enRoute?: string;
    /** 排序 */
    sort?: string;
    /** 组合字段，类型_Id */
    cId?: string;
  };

  type GetSeaportDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaportDropDownListOutput[];
  };

  type GetSeaportOutput = {
    id?: number;
    /** 海运航线id */
    seaRouteId?: number;
    /** 海运航线中文名 */
    seaRouteCnName?: string;
    /** 海运航线英文名 */
    seaRouteEnName?: string;
    /** 所属区域id */
    areaId?: number;
    /** 区域中文名 */
    areaCnName?: string;
    /** 区域英文名 */
    areaEnName?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 所属国家id */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 所属省份id */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市联合国code */
    cityUnCode?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** SCAC */
    scac?: string;
    /** 国内排序 */
    domcSort?: number;
    /** 国外排序 */
    overSort?: number;
    /** 备注 */
    remark?: string;
    /** 海港主港口Id */
    mId?: number;
    /** 海港主港口中文名 */
    mainCnName?: string;
    /** 海港主港口英文名 */
    mainEnName?: string;
    /** 是否主港口 */
    isMainPort?: boolean;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetSeaportOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaportOutput[];
  };

  type GetSeaRouteDropDownPageInput = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number[];
  };

  type GetSeaRouteOutput = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 是否远洋 */
    isOceanGoing?: boolean;
    /** 排序 */
    sort?: number;
    /** 备注 */
    remark?: string;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetSeaRouteOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaRouteOutput[];
  };

  type GetSeaWarehouseDropDownListInputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 关键字搜索 */
    keyWord?: string;
    /** 所属城市 */
    belongCityId?: number;
    /** 选中id */
    selectedId?: number;
  };

  type GetSeaWarehouseInput = {
    pageIndex?: number;
    pageSize?: number;
    /** 关键字搜索 */
    keyWord?: string;
    /** 所属城市 */
    belongCityId?: number;
  };

  type GetSeaWarehouseOutput = {
    id?: number;
    /** 仓库地址 */
    address?: string;
    /** 所属城市 */
    belongCityId?: number;
    /** 所属城市名称 */
    belongCityName?: string;
    /** 仓库英文名称 */
    enName?: string;
    /** 仓库全称 */
    fullName?: string;
    /** 仓库名称 */
    name?: string;
    /** 创建人Id */
    createUserId?: number;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人ID */
    updateUserId?: number;
    /** 修改人 */
    updateUserName?: string;
    /** 修改创建时间 */
    updateTime?: string;
  };

  type GetSeaWarehouseOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetSeaWarehouseOutput[];
  };

  type GetStreetOutputValueObject = {
    id?: number;
    /** 街道中文名 */
    cnName?: string;
    /** 街道英文名 */
    enName?: string;
    /** 国家ID */
    countryId?: number;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家二字代码 */
    countryDigit2Code?: string;
    /** 省份ID */
    provinceId?: number;
    /** 省份中文名 */
    provinceCnName?: string;
    /** 省份英文名 */
    provinceEnName?: string;
    /** 省份代码 */
    provinceCode?: string;
    /** 城市ID */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 城市代码 */
    cityCode?: string;
    /** 区县ID */
    districtId?: number;
    /** 区县中文名 */
    districtCnName?: string;
    /** 区县英文名 */
    districtEnName?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type GetStreetOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetStreetOutputValueObject[];
  };

  type GetTimeDiffInfoInput = {
    /** 机场代码集合 */
    airPortCodes?: string[];
  };

  type GetTrainsRouteInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetTrainsRouteOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    id?: number;
    /** 航线中文名 */
    cnName?: string;
    /** 航线英文名 */
    enName?: string;
  };

  type GetTrainsRouteOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetTrainsRouteOutput[];
  };

  type GetTrainsSiteDropDownListOutput = {
    /** Id */
    id?: number;
    type?: PortDorpDownListTypeEnums;
    /** 排序字段 */
    level?: string;
    /** 类型名称（中/英文公用） */
    typeName?: string;
    /** 类型名称（中/英文公用） */
    enTypeName?: string;
    /** SCAC */
    code?: string;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 城市中文 */
    cityId?: number;
    /** 城市中文 */
    cnCity?: string;
    /** 城市英文 */
    enCity?: string;
    /** 国家Id */
    countryId?: number;
    /** 国家中文 */
    cnCountry?: string;
    /** 国家英文 */
    enCountry?: string;
    /** 国家代码 */
    countryCode?: string;
    /** 组合字段，类型_Id */
    cId?: string;
    /** 排序 */
    sort?: string;
    /** 是否口岸 */
    isPort?: boolean;
    /** 是否口岸描述 */
    isPortDisp?: string;
  };

  type GetTrainsSiteDropDownListOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetTrainsSiteDropDownListOutput[];
  };

  type GetTrainsSiteInfoOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 铁运航线id */
    trainsRouteId?: number;
    /** 铁运航线中文名 */
    trainsRouteCnName?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家代码 */
    countryDigit2Code?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 区域中文名 */
    areaCnName?: string;
    /** 铁路站点中文名 */
    cnName?: string;
    /** 铁路站点英文名 */
    enName?: string;
    /** 铁路代码 */
    code?: string;
    /** 英文别名 */
    enNameAliass?: AliasOutput[];
    /** 港口别名 */
    portAliass?: AliasOutput[];
    /** 是否口岸 */
    isPort?: boolean;
  };

  type GetTrainsSiteInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** * Type=-1,
港口 Type = 1,
城市 Type = 4,
省份 Type = 5,
国家 Type = 2,
区域 Type = 3
航线 Type = 6,
区县 Type = 7 */
    types?: number[];
  };

  type GetTrainsSiteOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 铁运航线id */
    trainsRouteId?: number;
    /** 铁运航线中文名 */
    trainsRouteCnName?: string;
    /** 铁运航线英文名 */
    trainsRouteEnName?: string;
    /** 所属城市id */
    cityId?: number;
    /** 城市中文名 */
    cityCnName?: string;
    /** 城市英文名 */
    cityEnName?: string;
    /** 国家中文名 */
    countryCnName?: string;
    /** 国家英文名 */
    countryEnName?: string;
    /** 国家代码 */
    countryDigit2Code?: string;
    /** 区域代码 */
    areaCode?: string;
    /** 区域中文名 */
    areaCnName?: string;
    /** 区域英文名 */
    areaEnName?: string;
    /** 铁路站点中文名 */
    cnName?: string;
    /** 铁路站点英文名 */
    enName?: string;
    /** 铁路代码 */
    code?: string;
    /** 是否口岸 */
    isPort?: boolean;
  };

  type GetTrainsSiteOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetTrainsSiteOutput[];
  };

  type GetTruckInfoPageIntputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 车辆来源(1=内部车辆,2=外部车辆,3=送货车辆) */
    source?: number;
  };

  type GetTruckInfoPageOutputVO = {
    /** 车辆Id */
    id?: number;
    source?: TruckSourceEnum;
    /** 车辆来源描述 */
    sourceDisp?: string;
    /** 车牌号码 */
    no?: string;
    /** 车辆类型(主数据枚举) */
    type?: number;
    /** 车辆类型描述 */
    typeDisp?: string;
    /** 车辆载重 */
    load?: number;
    /** 车辆尺寸 */
    size?: string;
    /** 状态 */
    status?: number;
    /** 车辆备注 */
    remark?: string;
    /** 创建人 */
    createUserName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 司机ID */
    driverInfoId?: number;
    /** 司机名称 */
    driverInfoName?: string;
    /** 司机电话 */
    driverInfoPhone?: string;
    /** 司机身份证号 */
    driverInfoIdNo?: string;
    /** 内部车辆对应司机信息集合 */
    driverInfoList?: DriverInfo[];
  };

  type GetTruckInfoPageOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetTruckInfoPageOutputVO[];
  };

  type GetVerifyZipCodeOutput = {
    /** 是否通过校验 */
    isPass?: boolean;
  };

  type GetWarehouseOutputValueObject = {
    id?: number;
    /** 仓库名称 */
    name?: string;
    /** 仓库管理员ID */
    adminId?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 是否删除 */
    isDeleted?: boolean;
  };

  type GetWarehouseOutputValueObjectUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetWarehouseOutputValueObject[];
  };

  type GetWarRiskInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 起运地类型 */
    startPlaceType?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 目的地类型 */
    endPlaceType?: number;
    /** 选中项的Id */
    selectedId?: number;
  };

  type GetWarRiskOutput = {
    /** 创建人 */
    createUserId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 航司代码 */
    airCompanyCode?: string;
    /** 起运地，空港id */
    startAirportId?: number;
    /** 起运地类型 */
    startPlaceType?: number;
    /** 起运港代码 */
    startAirportCode?: string;
    /** 目的地，空港id */
    endAirportId?: number;
    /** 目的地类型 */
    endPlaceType?: number;
    /** 目的港代码 */
    endAirportCode?: string;
    /** 战险单价 */
    price?: number;
    /** 最低收费 */
    chargeMin?: number;
    /** 币种id */
    currencyId?: number;
    /** 币种 */
    currency?: string;
  };

  type GetWarRiskOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetWarRiskOutput[];
  };

  type GetWarRiskOutputUnifyPageResultDtoUnifyResultDto = {
    code?: string;
    msg?: string;
    data?: GetWarRiskOutputUnifyPageResultDto;
  };

  type GetZipCodeLevelPageListInputVO = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 国家id */
    countryId?: number;
    /** 数据选择id */
    dataId?: any;
    /** 二级关键字 */
    levelKeyWord?: string;
    /** 层级 */
    level?: number;
  };

  type GetZipCodeLevelPageListOutputVO = {
    /** 左列表 */
    leftInfoList?: LefInfoList[];
    rightInfoList?: RightInfoListUnifyPageResultDto;
  };

  type GlobalWarehouseGetDetailByIdGETParams = {
    /** 仓库ID */
    id?: number;
  };

  type GoodsTypeCalculationEnums = 1 | 2 | 3 | 4;

  type HeadBankGetDetailsGETParams = {
    /** 总行id */
    id?: number;
  };

  type HeadBankGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type IdBaseDto = {
    id?: number;
  };

  type LefInfoList = {
    /** 层级 */
    level?: number;
    /** 数据id */
    id?: any;
    /** 名称 */
    name?: string;
  };

  type MeteringUnitGetDetailsGETParams = {
    /** 计量单位id */
    id?: number;
  };

  type MeteringUnitGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 类型 */
    Type?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type MeteringUnitInfo = {
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 代码 */
    code?: string;
    /** 内部代码 */
    intraCode?: string;
  };

  type NationalHotdataEditInput = {
    option?: OptionType;
    ids?: string;
    /** 国家ID */
    countryId?: number;
    countryCode?: string;
    /** 进出口0：进口 1：出口 */
    inOut?: boolean;
    /** 进出口名称 0：进口 1：出口 */
    inOutName?: string;
    /** 空港集合 */
    airPorts?: AirPorts[];
    /** 航司集合 */
    airCompanys?: AirCompanys[];
    /** 海港集合 */
    seaPorts?: SeaPorts[];
    /** 船司ID集合 */
    shippingHouses?: ShippingHouses[];
  };

  type NationalHotdataGetNationalHotdataByCountryAndInOutGETParams = {
    countryId?: number;
    inOut?: boolean;
  };

  type NationalHotdataValidInput = {
    option?: OptionType;
    /** 国家ID */
    countryId?: number;
    /** 进出口0：进口 1：出口 */
    inOut?: boolean;
    /** 空港集合 */
    airPorts?: AirPorts[];
    /** 航司集合 */
    airCompanys?: AirCompanys[];
    /** 海港集合 */
    seaPorts?: SeaPorts[];
    /** 船司ID集合 */
    shippingHouses?: ShippingHouses[];
  };

  type OptionType = 0 | 1 | 2 | 3;

  type OptionTypeNoDelete = 1 | 3;

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
  };

  type PortDorpDownListTypeEnums = 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;

  type PortGetListGETParams = {
    /** 港口类型 0：所有，1：空港，2：海港 */
    Type?: PortTypeEnums;
    /** 关键字 */
    KeyWord?: string;
  };

  type PortTypeEnums = 0 | 1 | 2;

  type ProductGetDetailsGETParams = {
    /** 商品ID */
    id?: number;
  };

  type ProductGetPageGETParams = {
    /** 品牌 */
    BrandId?: number;
    /** 分类 */
    CategoryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type ProductTypeEnum = 0 | 1;

  type ProvinceGetDetailsGETParams = {
    /** 省份id */
    id?: number;
  };

  type ProvinceGetPageGETParams = {
    /** 国家id */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type RegionDorpDownListTypeEnums = 1 | 2 | 3 | 4 | 5 | 6 | 7 | -1;

  type RegionDorpDownListTypeEnumsDropDownFlagTypeWordInputDto = {
    /** 当前页 */
    pageIndex?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 关键字 */
    keyWord?: string;
    /** 选中项的Id */
    selectedId?: number;
    /** 类型集合 */
    types?: RegionDorpDownListTypeEnums[];
    selectedIdType?: RegionDorpDownListTypeEnums;
    /** 选中多行 */
    selectedIds?: number[];
    /** 选中的类型 */
    selectedIdsType?: RegionDorpDownListTypeEnums[];
  };

  type RegionLevelEnums = 1 | 2 | 3 | 4;

  type RelevanceWithIdOutput = {
    id?: number;
    /** 父级属性 */
    parentProperty?: string;
    /** 父级关键字 */
    parentEnumkey?: number;
    /** 父级描述 */
    parentDisp?: string;
    /** 父级英文描述 */
    parentEnDisp?: string;
    /** 子级属性 */
    childProperty?: string;
    /** 子级关键字 */
    childEnumkey?: number;
    /** 子级描述 */
    childDisp?: string;
    /** 子级英文描述 */
    childEnDisp?: string;
    /** 创建人id */
    createUserId?: number;
    /** 创建人 */
    createUser?: string;
    /** 创建人英文 */
    createEnUser?: string;
    /** 创建时间 */
    createTime?: string;
    /** 修改人id */
    updateUserId?: number;
    /** 修改人 */
    updateUser?: string;
    /** 修改人英文 */
    updateEnUser?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 父级Id */
    parentPropertyId?: number;
    /** 子级Id */
    childPropertyId?: number;
  };

  type RelevanceWithIdOutputUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: RelevanceWithIdOutput[];
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

  type ResearchGroupContactGetDetailsGETParams = {
    /** 联系人ID */
    id?: number;
  };

  type ResearchGroupContactGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type ResearchGroupGetDetailsGETParams = {
    /** 课题组ID */
    id?: number;
  };

  type ResearchGroupGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 部门院系id */
    DepartmentId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type RightInfoList = {
    /** 层级 */
    level?: number;
    /** 数据id */
    id?: string;
    /** 辖区名称 */
    placeName?: string;
    /** 邮编 */
    zipCode?: string;
    /** 经度 */
    latitude?: number;
    /** 纬度 */
    longitude?: number;
    /** 是否有下级 */
    isHaveNextLevel?: boolean;
  };

  type RightInfoListUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: RightInfoList[];
  };

  type SeaCompanyGetDetailsGETParams = {
    /** 船司id */
    id?: number;
  };

  type SeaCompanyGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 国家id */
    CountryId?: number;
    /** 是否禁用 */
    IsDisabled?: boolean;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type SeaOutwharfEditInput = {
    option?: OptionType;
    /** 数据ID 新增时为0 修改时大于0 */
    id?: number;
    /** 起运港ID */
    startPlaceId?: number;
    /** 起运地类型，起运地类型：1.港口、4.城市
默认都传1 */
    startPlaceType?: number;
    /** 码头英文名称，长度限制68位,只能输入英文 */
    wharfEnName?: string;
    /** 码头中文名称，长度限制68位 */
    wharfName?: string;
  };

  type SeaOutwharfValidInput = {
    option?: OptionType;
    /** 数据ID 新增时为0 修改时大于0 */
    id?: number;
    /** 起运港ID */
    startPlaceId?: number;
    /** 起运地类型，起运地类型：1.港口、4.城市
默认都传1 */
    startPlaceType?: number;
    /** 码头英文名称，长度限制68位,只能输入英文 */
    wharfEnName?: string;
    /** 码头中文名称，长度限制68位 */
    wharfName?: string;
  };

  type SeaportGetDetailsGETParams = {
    /** 海港id */
    id?: number;
  };

  type SeaportGetPageGETParams = {
    /** id集合 */
    Id?: number[];
    /** 是否下拉框数据源 */
    IsSelected?: boolean;
    /** 当前港口Id */
    CurrentId?: number;
    /** 城市id */
    CityId?: number;
    /** 省份id */
    ProvinceId?: number;
    /** 国家id */
    CountryId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type SeaPorts = {
    /** 数据ID */
    id?: number;
    /** 海港ID */
    seaPortId?: number;
    /** 海港Code */
    seaPortCode?: string;
    /** 海港排序值 */
    seaPortOrder?: number;
  };

  type SeaRouteGetDetailsGETParams = {
    /** 海运航线id */
    id?: number;
  };

  type SeaRouteGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type SeaWarehouseGetSeaWarehouseDetailPOSTParams = {
    id?: number;
  };

  type SeaWharfConfigurationGetSeaExportWharfDetailByIdGETParams = {
    id?: number;
  };

  type ShippingHouses = {
    /** 数据ID */
    id?: number;
    /** 船公司ID */
    seaCompanyId?: number;
    /** 船公司Code */
    seaCompanyCode?: string;
    /** 船公司排序值 */
    seaCompanyOrder?: number;
  };

  type StreetGetDetailsGETParams = {
    /** 街道ID */
    id?: number;
  };

  type StreetGetPageGETParams = {
    /** 国家ID */
    CountryId?: number;
    /** 省份ID */
    ProvinceId?: number;
    /** 城市ID */
    CityId?: number;
    /** 区县ID */
    DistrictId?: number;
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type TimeSpan = {
    ticks?: number;
    days?: number;
    hours?: number;
    milliseconds?: number;
    microseconds?: number;
    nanoseconds?: number;
    minutes?: number;
    seconds?: number;
    totalDays?: number;
    totalHours?: number;
    totalMilliseconds?: number;
    totalMicroseconds?: number;
    totalNanoseconds?: number;
    totalMinutes?: number;
    totalSeconds?: number;
  };

  type TruckInfo = {
    /** 车辆Id */
    id?: number;
    /** 车牌号码 */
    no?: string;
  };

  type TruckInfoGetDetailsGETParams = {
    id?: number;
  };

  type TruckSourceEnum = 1 | 2 | 3;

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };

  type UpdateAirCompanyCargoInput = {
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 起运港，空港id */
    airportId?: number;
    /** 所属货站id */
    cargoId?: number;
    /** 客/货机，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 是否直飞 */
    isDirect?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateAircraftTypeInput = {
    /** 机型Id */
    id?: number;
    /** 航司Id */
    airCompanyId?: number;
    /** 飞机名称 */
    name?: string;
    /** 飞机载重 */
    load?: number;
    /** 单位限重 */
    unitWeightLimit?: number;
    /** 机型 */
    type?: number;
    /** 长 */
    length?: number;
    /** 宽 */
    width?: number;
    /** 高 */
    height?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateAirlinesPathInput = {
    /** id */
    id?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 路径 */
    path?: string;
    /** 中转港Id集合 */
    transferAirportIds?: number[];
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateCargoInput = {
    /** id */
    id?: number;
    /** 货站中文名 */
    cnName?: string;
    /** 货站英文名 */
    enName?: string;
    /** 城市id */
    cityId?: number;
    /** 装板地勤单价 */
    plateGroundPrice?: number;
    /** 交散地勤单价 */
    groundFeePrice?: number;
    /** 地勤费最低收费 */
    groundFeeMin?: number;
    /** 翌飞货站代码 */
    fayeTerminalCode?: string;
    /** 是否禁用 */
    isDisabled?: boolean;
    /** 中文地址 */
    cnAddress?: string;
    /** 货站备注 */
    cargoRemark?: string;
    /** 备注1 */
    remark1?: string;
    /** 备注2 */
    remark2?: string;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 币种id */
    currencyId?: number;
  };

  type UpdateFlightInput = {
    /** Id */
    id?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 航班号 */
    flightNo?: string;
    /** 机型 */
    aircraftTypeId?: number;
    /** 起飞时间 */
    startTime?: string;
    /** 到达时间 */
    endTime?: string;
    /** 第几天到达 */
    arriveDay?: number;
    /** 频率，位运算存储 */
    frequency?: string;
    /** 客/货机 */
    type?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 备注 */
    remark?: string;
  };

  type UpdateFlightTruckInput = {
    /** id */
    id?: number;
    /** 航司id */
    airCompanyId?: number;
    /** 起运港，空港id */
    startAirportId?: number;
    /** 目的港，空港id */
    endAirportId?: number;
    /** 编号 */
    flightTruckNo?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 航班频率，位运算存储；t_enum_value_info表Property=’WeekPropertyNum‘; */
    frequency?: string;
    /** 客/货机，t_enum_value_info表Property=’PlaneType‘;1客机，2货机，3客/货机 */
    type?: number;
    /** 第几天到达 */
    arriveDay?: number;
    /** 卡车公司 */
    truckCompany?: string;
    /** 备注 */
    remark?: string;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateFuelInput = {
    /** id */
    id?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 起运地类型 */
    startPlaceType?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 目运地类型 */
    endPlaceType?: number;
    /** 燃油单价 */
    price?: number;
    /** 最低收费 */
    chargeMin?: number;
    /** 开始生效时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 币种id */
    currencyId?: number;
  };

  type UpdateGoodsTypeAirInput = {
    /** id */
    id?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 货物类型 */
    goodsTypeId?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateGoodsTypeInput = {
    /** id */
    id?: number;
    /** 货物类型名称 */
    name?: string;
    /** 货物类型英文名称 */
    enName?: string;
    calculation?: GoodsTypeCalculationEnums;
    /** 开始值 */
    startValue?: number;
    /** 结算值 */
    endValue?: number;
    /** 最低收货重量 */
    weightReceivedMin?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateNearAirportInput = {
    /** id */
    id?: number;
    /** 城市/省份Id */
    cityId?: number;
    /** 始发机场 */
    startAirportId?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 目的港，空港类型 */
    endAirportType?: number;
    /** 排序 */
    sort?: number;
    /** 起运港类型：4=城市,5=省份 */
    startAirportType?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateNearSeaportInput = {
    /** id */
    id?: number;
    /** 城市id */
    cityId?: number;
    /** 海港id */
    seaportId?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdatePakcingInput = {
    /** id */
    id?: number;
    /** 中文名 */
    cnName?: string;
    /** 英文名 */
    enName?: string;
    /** 包装编码 */
    code?: string;
    /** Intra代码 */
    intraCode?: string;
    /** 业务类型，t_enum_value_info的“PackageBusinessType” */
    businessType?: string;
    /** 业务类型集合 */
    businessTypeLsit?: number[];
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdatePlayPlateFeeInput = {
    /** id */
    id?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 单价 */
    price?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 币种id */
    currencyId?: number;
  };

  type UpdateSeaArkTypeInput = {
    /** id */
    id?: number;
    /** 柜型名称 */
    name?: string;
    /** 限制体积CBM */
    limitCBM?: number;
    /** 限制重量KG */
    limitKG?: number;
    /** TEU */
    teu?: number;
    /** SCAC */
    scac?: string;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 排序 */
    sort?: number;
  };

  type UpdateTrainsRouteInput = {
    /** id */
    id?: number;
    /** 航线中文名 */
    cnName?: string;
    /** 航线英文名 */
    enName?: string;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
  };

  type UpdateTrainsSiteInput = {
    /** id */
    id?: number;
    /** 铁运航线id */
    trainsRouteId?: number;
    /** 所属城市id */
    cityId?: number;
    /** 铁路站点中文名 */
    cnName?: string;
    /** 铁路站点英文名 */
    enName?: string;
    /** 铁路港口代码 */
    code?: string;
    /** 英文别名 */
    enNameAliass?: string[];
    /** 港口别名 */
    portAliass?: string[];
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 是否口岸 */
    isPort?: boolean;
  };

  type UpdateTruckInfoStateInput = {
    /** 主键id */
    id?: number;
    /** 状态 */
    status?: number;
  };

  type UpdateWarehouseIsDisabledInput = {
    ids?: number[];
    /** 是否禁用 */
    isDisabled?: boolean;
  };

  type UpdateWarRiskInput = {
    /** id */
    id?: number;
    /** 航司 */
    airCompanyId?: number;
    /** 起运港 */
    startAirportId?: number;
    /** 起运地类型 */
    startPlaceType?: number;
    /** 目的港 */
    endAirportId?: number;
    /** 目的地类型 */
    endPlaceType?: number;
    /** 战险单价 */
    price?: number;
    /** 最低收费 */
    chargeMin?: number;
    updateType?: OptionType;
    /** 操作人 */
    userId?: number;
    /** 币种id */
    currencyId?: number;
  };

  type WarehouseGetDetailsGETParams = {
    /** 仓库ID */
    id?: number;
  };

  type WarehouseGetPageGETParams = {
    /** 关键字 */
    KeyWord?: string;
    /** 选中项的Id */
    SelectedId?: number;
    /** 当前页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type WeekDaysEnum = 1 | 2 | 3 | 4 | 5 | 6 | 7;

  type ZipCodeOutput = {
    /** 邮编id */
    id?: number;
    /** 邮编 */
    zipCode?: string;
  };
}
