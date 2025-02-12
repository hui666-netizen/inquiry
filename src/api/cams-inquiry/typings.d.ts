declare namespace InquiryApi {
  type BackgroundGetBusinessRoleParams = {
    /** 用户ID */
    Id?: number;
    /** 鉴权凭证 */
    Token?: string;
  };

  type basicString = {
    Value?: string;
  };

  type CompanyGetCompanyInfoParams = {
    /** 客户Id */
    CustomerId?: number;
  };

  type CompanyGetCustomerCompanyParams = {
    /** 客户Id */
    CustomerId?: number;
  };

  type DirectGetPageListParams = {
    /** 航司Id  变为Code */
    AirlineCompanyCode?: string;
    /** 起运港Id  变为Code */
    StartPlaceCode?: string;
    /** 目的港Id  变为Code */
    EndPlaceCode?: string;
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type inquiryAddSalemanRequest = {
    SalemanId?: number;
  };

  type inquiryAddSalemanResponse = {
    /** 响应码 */
    Code?: number;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryAllData = {
    Pagination?: inquiryPagination;
    /** 航线参数信息 */
    RouteData?: inquiryRouteData[];
  };

  type inquiryBindSaleManWhenAuthenticationRequest = {
    /** 员工Id */
    CustomerId?: number;
    /** 省份Id */
    provinceId?: number;
  };

  type inquiryBindSaleManWhenAuthenticationResponse = {
    /** 响应码 */
    Code?: number;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryBindSaleManWhenCounsultData = {
    /** 员工Id */
    CustomerId?: number;
    /** 业务员Id */
    SalemanId?: number;
  };

  type inquiryBindSaleManWhenCounsultRequest = {
    /** 用户Id */
    CustomerId?: number;
    /** 目的港CountryName */
    EndPlaceCountryName?: string;
    /** 目的港Id */
    EndPlaceProvinceId?: number;
    /** 起运港CountryName */
    StartPlaceCountryName?: string;
    /** 起运港Id */
    StartPlaceProvinceId?: number;
  };

  type inquiryBindSaleManWhenCounsultResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryBindSaleManWhenCounsultData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryCheckSalemanByManyConditionsData = {
    List?: inquirySalemanInfo[];
    Pagination?: inquirySalemanPagination;
  };

  type inquiryCheckSalemanByManyConditionsRequest = {
    CompanyName?: string;
    PageIndex?: number;
    PageSize?: number;
    PhoneNumber?: string;
    SalemanName?: string;
  };

  type inquiryCheckSalemanByManyConditionsResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryCheckSalemanByManyConditionsData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryCheckSalemanBySalemanIdRequest = {
    SalemanId?: number;
  };

  type inquiryCheckSalemanBySalemanIdResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquirySalemanInfo;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryCheckWeChatQrBySalemanIdRequest = {
    SalemanId?: number;
  };

  type inquiryCheckWeChatQrBySalemanIdResponse = {
    /** 响应码 */
    Code?: number;
    /** 响应信息 */
    Msg?: string;
    /** 图片链接 */
    Url?: string;
  };

  type inquiryCompanyAuthenticateResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: inquiryCompanyData[];
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryCompanyAuthenticationAuditRequest = {
    /** 企业Id */
    CompanyId?: number;
    /** 客户Id */
    CustomerId?: number;
    /** 是否通过 0：不通过 1：通过 */
    IsPass?: number;
    /** 审核人Id */
    ReviewedPersonId?: number;
  };

  type inquiryCompanyAuthenticationAuditResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryCompanyData = {
    /** 企业中文名称 */
    CompanyCnName?: string;
    /** 用户名 */
    customer?: string;
  };

  type inquiryConsult = {
    /** 客户类型 */
    CustomerType?: number;
    /** 航司 */
    airlineCompany?: string;
    /** 目的港 */
    endPlace?: string;
    /** 询价记录id */
    id?: number;
    /** 询价日期 */
    inquiryDate?: string;
    /** 询价单号 */
    inquiryNumber?: string;
    /** 件数 */
    number?: number;
    /** 客户手机号 */
    phoneNumber?: string;
    /** 销售员姓名 */
    saleManName?: string;
    /** 起运港 */
    startPlace?: string;
    /** 贸易条款 */
    tradeTerms?: string;
    /** 体积 */
    volume?: string;
    /** 重量 */
    weight?: string;
  };

  type inquiryconsultRequest = {
    /** 路线ID */
    AirlineId?: number;
    /** 航线类型Id（1:直飞,2:中转) */
    AirlineTypeId?: number;
    /** 客户ID */
    CustomerId?: number;
    /** 毛重量 */
    GrossWeight?: string;
    /** 件数 */
    Number?: number;
    /** 查询时间 */
    QueryTime?: string;
    /** 业务员ID */
    SaleManId?: number;
    /** 贸易条款ID */
    TradeClauseId?: number;
    /** 体积 */
    Volume?: string;
  };

  type inquiryconsultResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryCustomerInfoList = {
    /** 公司名称 */
    CompanyName?: string;
    /** 用户名 */
    CustomerName?: string;
    /** 客户类型枚举(1:同行 2:直客 3:海外代理) */
    CustomerType?: number;
    /** 邮箱 */
    Email?: string;
    /** 性别 */
    Gender?: string;
    /** 头像链接 */
    HeadPortrait?: string;
    /** 手机号 */
    PhoneNumber?: string;
    /** 归属业务员Id */
    SaleManId?: number;
  };

  type inquiryCustomerListInfoByFuzzy = {
    /** 所属企业名称 */
    CompanyName?: string;
    /** 客户Id */
    CustomerId?: number;
    /** 客户类型枚举(1:同行 2:直客 3:海外代理) */
    CustomerType?: number;
    /** 邮箱 */
    Email?: string;
    /** 是否通过企业认证(0:没提交 1:待审核 2:已通过 3:未通过)' */
    IsAuthenticated?: number;
    /** 是否删除(0:未删除 1:已删除) */
    IsDelete?: number;
    /** (账号)手机号 */
    PhoneNumber?: string;
    /** 注册时间 */
    RegistTime?: string;
    /** 归属业务员姓名 */
    SaleManName?: string;
    /** 归属业务员手机号 */
    SaleManPhoneNumber?: string;
  };

  type inquiryDirectDeleteRequest = {
    /** IDs */
    Id?: number[];
  };

  type inquiryDirectDeleteResponse = {
    /** 响应码 */
    Code?: number;
    /** 数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryDirectExportExcelRequest = {
    Id?: number[];
  };

  type inquiryDirectFlightResponse = {
    /** A_100价格 */
    A100?: string;
    /** A_1000价格 */
    A1000?: string;
    /** A_250价格 */
    A250?: string;
    /** A_300价格 */
    A300?: string;
    /** A_3000价格 */
    A3000?: string;
    /** A_45价格 */
    A45?: string;
    /** A_500价格 */
    A500?: string;
    /** 飞机类型Id(1:客机，2:货机，0:客机/货机) */
    AircraftType?: number;
    /** 航司 */
    AirlineCompany?: string;
    /** 航司Id */
    AirlineCompanyId?: number;
    /** 预计到达时间(天) */
    ArrayDays?: number;
    /** 货物类型 */
    CargoType?: string;
    /** 货物类型Id */
    CargoTypeId?: number;
    /** 承运商 */
    Carrier?: string;
    /** 中文备注 */
    CnRemarks?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 创建人 */
    CreateUserName?: string;
    /** 币种 */
    Currency?: string;
    /** 币种Id */
    CurrencyId?: number;
    /** 目的港转运方式Id(1:飞机 2：卡车) */
    DestinationTransitMethod?: number;
    /** 英文备注 */
    EnRemarks?: string;
    /** 目的港 */
    EndPlace?: string;
    /** 目的港Id */
    EndPlaceId?: number;
    /** 结束时间 */
    EndTime?: string;
    /** Id */
    Id?: number;
    /** 是否加收打板费(0:否 1:是) */
    IsAddBoardFee?: number;
    /** 是否公开价格(0:不公开 1：公开) */
    IsDisclosurePrice?: number;
    /** 是否为内部数据(0: 否 1：是) */
    IsInternal?: number;
    /** 是否推荐(0:不推荐 1：推荐) */
    IsRecommend?: number;
    /** 底价 */
    Mini?: string;
    /** 初始价格 */
    N?: string;
    /** 价格类型 */
    PriceType?: string;
    /** 审核人 */
    ReviewedPersonName?: string;
    /** 起运港 */
    StartPlace?: string;
    /** 起运港Id */
    StartPlaceId?: number;
    /** 开始时间 */
    StartTime?: string;
    /** 中转1 */
    Transit1?: string;
    /** 中转1Id */
    Transit1Id?: number;
    /** 中转2 */
    Transit2?: string;
    /** 中转2Id */
    Transit2Id?: number;
    /** 中转1方式Id(1:飞机 2：卡车) */
    TransitMethod1?: number;
    /** 中转2方式Id(1:飞机 2：卡车) */
    TransitMethod2?: number;
    /** 更新时间 */
    UpdateTime?: string;
    /** 更新人 */
    UpdateUserName?: string;
  };

  type inquiryDirectGetPageListResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryDirectResultData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryDirectMaintainFreightRequest = {
    /** A_100价格 */
    A100?: string;
    /** A_1000价格 */
    A1000?: string;
    /** A_250价格 */
    A250?: string;
    /** A_300价格 */
    A300?: string;
    /** A_3000价格 */
    A3000?: string;
    /** A_45价格 */
    A45?: string;
    /** A_500价格 */
    A500?: string;
    /** 飞机类型ID(1:客机，2:货机，0:客机/货机) */
    AircraftType?: number;
    /** 航司Id  变为Code */
    AirlineCompanyCode?: string;
    /** 预计到达时间(天) */
    ArrayDays?: number;
    /** 货物类型 */
    CargoType?: string;
    /** 承运商 */
    Carrier?: string;
    /** 中文备注 */
    CnRemarks?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 创建人ID */
    CreateUserId?: number;
    /** 币种Id  变为Code */
    CurrencyCode?: string;
    /** 目的港转运方式Id(1:飞机 2：卡车) */
    DestinationTransitMethodId?: number;
    /** 英文备注 */
    EnRemarks?: string;
    /** 目的港Id  Code */
    EndPlaceCode?: string;
    /** 结束时间 */
    EndTime?: string;
    /** ID */
    Id?: number;
    /** 是否加收打板费(0:否 1:是) */
    IsAddBoardFee?: number;
    /** 是否公开价格(0:不公开 1：公开) */
    IsDisclosurePrice?: number;
    /** 是否为内部数据(0: 是 1：否) */
    IsInternal?: number;
    /** 是否推荐(0:不推荐 1：推荐) */
    IsRecommend?: number;
    /** 底价 */
    Mini?: string;
    /** 初始价格 */
    N?: string;
    /** 操作类型 */
    OptionType?: number;
    /** 价格类型 */
    PriceType?: string;
    /** 审核人姓名 */
    ReviewedPersonName?: string;
    /** 起运港Id  Code */
    StartPlaceCode?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 中转1Id  Code */
    Transit1Code?: string;
    /** 中转2Id  Code */
    Transit2Code?: string;
    /** 中转1方式Id(1:飞机 2：卡车) */
    TransitMethod1Id?: number;
    /** 中转2方式Id(1:飞机 2：卡车) */
    TransitMethod2Id?: number;
    /** 更新时间 */
    UpdateTime?: string;
    /** 更新人ID */
    UpdateUserId?: number;
  };

  type inquiryDirectMaintainFreightResponse = {
    /** 响应码 */
    Code?: number;
    /** 数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryDirectResultData = {
    /** 查出的数据 */
    List?: inquiryDirectFlightResponse[];
    Pagination?: inquiryDirectResultPagination;
  };

  type inquiryDirectResultPagination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总数 */
    Total?: number;
  };

  type inquiryFindByProvinceIdRequest = {
    PageIndex?: number;
    PageSize?: number;
    ProvinceId?: number;
  };

  type inquiryFindByProvinceIdResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryProvinceDivisionResultData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryFindCustomerByIdRequest = {
    /** 客户Id */
    CustomerId?: number;
  };

  type inquiryFindCustomerByIdResponse = {
    /** 响应码 */
    Code?: string;
    Data?: inquiryCustomerInfoList;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryFindCustomerFuzzyRequest = {
    /** 客户Id */
    CustomerId?: number;
    /** 客户状态 是否启用（0：是，1：否 2:全部查询) */
    CustomerStatus?: number;
    /** 客户类型枚举(1:同行 2:直客 3:海外代理) */
    CustomerType?: number;
    /** 注册时间结束 */
    EndTime?: string;
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 手机号 */
    PhoneNumber?: string;
    /** 归属业务员Id */
    SaleManId?: number;
    /** 归属业务员姓名 */
    SaleManName?: string;
    /** 归属业务员手机号 */
    SaleManPhoneNumber?: string;
    /** 注册时间开始 */
    StartTime?: string;
  };

  type inquiryFindCustomerFuzzyResponse = {
    /** 响应码 */
    Code?: string;
    Data?: inquiryFindCustomerFuzzyResultDate;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryFindCustomerFuzzyResultDate = {
    /** 客户信息列表 */
    CustomerListInfo?: inquiryCustomerListInfoByFuzzy[];
    Pageination?: inquiryPageination;
  };

  type inquiryFindRoutePriceInfoRequest = {
    /** 客户类型枚举 */
    CustomerType?: number;
    /** 目的港 */
    EndPlaceCode?: string;
    /** 是否直达 */
    IsDirect?: number;
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 起运港 */
    StartPlaceCode?: string;
  };

  type inquiryFindRoutePriceInfoResponse = {
    /** 返回码 */
    Code?: string;
    Data?: inquiryAllData;
    /** 返回信息 */
    Msg?: string;
  };

  type inquiryFindSaleManFuzzyInfoData = {
    /** 业务员信息列表 */
    List?: inquiryFindSaleManFuzzyInfoList[];
    Pageination?: inquiryPageination;
  };

  type inquiryFindSaleManFuzzyInfoList = {
    /** 业务员Id */
    SaleManId?: number;
    /** 业务员姓名 */
    SaleManName?: string;
    /** 业务员手机号 */
    SaleManPhoneNumber?: string;
  };

  type inquiryFindSaleManFuzzyRequest = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 输入信息 */
    keyword?: string;
  };

  type inquiryFindSaleManFuzzyResponse = {
    /** 响应码 */
    Code?: string;
    Data?: inquiryFindSaleManFuzzyInfoData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryFindSearchHistoryRequest = {
    /** 客户Id */
    CustomerId?: string;
  };

  type inquiryFindSearchHistoryResponse = {
    /** 返回码 */
    Code?: string;
    Data?: inquirySearchHistoryData;
    /** 返回信息 */
    Msg?: string;
  };

  type inquiryFuzzyQueryByCompanyData = {
    List?: inquiryFuzzyQueryByCompanyList[];
    Pagination?: inquirySalemanPagination;
  };

  type inquiryFuzzyQueryByCompanyList = {
    CompanyName?: string;
  };

  type inquiryFuzzyQueryByCompanyRequest = {
    CompanyName?: string;
    PageIndex?: number;
    PageSize?: number;
  };

  type inquiryFuzzyQueryByCompanyResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryFuzzyQueryByCompanyData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryFuzzyQueryByNameData = {
    List?: inquiryFuzzyQueryByNameList[];
    Pagination?: inquirySalemanPagination;
  };

  type inquiryFuzzyQueryByNameList = {
    SalemanName?: string;
  };

  type inquiryFuzzyQueryByNameRequest = {
    PageIndex?: number;
    PageSize?: number;
    SalemanName?: string;
  };

  type inquiryFuzzyQueryByNameResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryFuzzyQueryByNameData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryFuzzyQueryByPhoneNumberData = {
    List?: inquiryFuzzyQueryByPhoneNumberList[];
    Pagination?: inquirySalemanPagination;
  };

  type inquiryFuzzyQueryByPhoneNumberList = {
    PhoneNumber?: string;
  };

  type inquiryFuzzyQueryByPhoneNumberRequest = {
    PageIndex?: number;
    PageSize?: number;
    PhoneNumber?: string;
  };

  type inquiryFuzzyQueryByPhoneNumberResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryFuzzyQueryByPhoneNumberData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryGetCompanyInfoResponse = {
    /** 响应码 */
    Code?: string;
    Data?: inquiryGetCompanyInfoResponseData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryGetCompanyInfoResponseData = {
    /** 市/区名 */
    CityCnName?: string;
    /** 企业中文名称 */
    CompanyCnName?: string;
    /** 统一社会信用代码 */
    CompanyCode?: string;
    /** 企业自定义代码 */
    CompanyCustomCode?: string;
    /** 企业英文名称 */
    CompanyEnName?: string;
    /** 企业Id */
    CompanyId?: number;
    /** 企业简介 */
    CompanyIntroduction?: string;
    /** 营业执照图片OSS_Key */
    CompanyLisecePic?: string;
    /** 国家名 */
    CountryCnName?: string;
    /** 期望航线 */
    ExpectedRoute?: string;
    /** 法人身份证反面图片OSS_Key */
    LegalPersonIdCardBackPic?: string;
    /** 法人身份证正面图片OSS_Key */
    LegalPersonIdCardFrontPic?: string;
    /** 省/直辖市名 */
    ProvinceCnName?: string;
    /** 代理联系人 */
    ProxyPerson?: string;
    /** 代理联系人电话 */
    ProxyPhone?: string;
    /** 注册时间 */
    RegistTime?: string;
  };

  type inquiryGetCustomerCompanyResponse = {
    /** 响应码 */
    Code?: string;
    /** 客户、企业关系（ 0：没提交 1：待审核   2：已通过   3：未通过） */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryGrossProfitResponse = {
    /** A_100价格 */
    A100?: string;
    /** A_1000价格 */
    A1000?: string;
    /** A_250价格 */
    A250?: string;
    /** A_300价格 */
    A300?: string;
    /** A_3000价格 */
    A3000?: string;
    /** A_45价格 */
    A45?: string;
    /** A_500价格 */
    A500?: string;
    /** 航司代码 */
    AirlineCompany?: string;
    /** 航司Id */
    AirlineCompanyId?: number;
    /** 创建时间 */
    CreateTime?: string;
    /** 创建人姓名 */
    CreateUserName?: string;
    /** 币种 */
    Currency?: string;
    /** 币种Id */
    CurrencyId?: number;
    /** 客户类型Id */
    CustomerType?: number;
    /** 目的港 */
    EndPlace?: string;
    /** 目的港Id */
    EndPlaceId?: number;
    /** ID */
    Id?: number;
    /** 底价 */
    Mini?: string;
    /** 初始价格 */
    N?: string;
    /** 起运港 */
    StartPlace?: string;
    /** 起运港Id */
    StartPlaceId?: number;
    /** 更新时间 */
    UpdateTime?: string;
    /** 更新人姓名 */
    UpdateUserName?: string;
  };

  type inquiryIncreaseFrequencyBySalemanIdRequest = {
    SalemanId?: number;
  };

  type inquiryIncreaseFrequencyBySalemanIdResponse = {
    /** 响应码 */
    Code?: number;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryInquireResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: inquiryInquiryData[];
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryInquiryData = {
    /** 航司代码 */
    AirlineCompany?: string;
    /** 航司中文名称 */
    AirlineCompanyCnName?: string;
    /** 目的港 */
    EndPlace?: string;
    /** 目的港中文名称 */
    EndPlaceCnName?: string;
    /** 起运港 */
    StartPlace?: string;
    /** 起运港中文名称 */
    StartPlaceCnName?: string;
    /** 用户名 */
    customer?: string;
    /** 时间 */
    time?: string;
  };

  type inquiryInquiryListData = {
    /** 响应数据(询价记录) */
    List?: inquiryConsult[];
    Pagination?: inquiryInquiryRecordPagination;
  };

  type inquiryInquiryRecordByPhoneAndNameRequest = {
    /** 页码 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 客户手机号 */
    phoneNumber?: string;
    /** 销售员姓名 */
    saleManName?: string;
    /** 询价记录状态 0 未处理 1 已处理 */
    status?: number;
  };

  type inquiryInquiryRecordPagination = {
    /** 页码 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总条数 */
    Total?: number;
  };

  type inquiryMeta = {
    breadcrumbHidden?: boolean;
    icon?: string;
    isLevel1?: boolean;
    noClosable?: boolean;
    subTitle?: string;
    title?: string;
  };

  type inquiryModifyCustomerStatusRequest = {
    /** 客户Id */
    CustomerId?: number;
    /** 客户状态 是否启用（0：是，1：否） */
    CustomerStatus?: number;
  };

  type inquiryModifyCustomerStatusResponse = {
    /** 响应码 */
    Code?: string;
    /** 返回数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryModifyCustomerTypeRequest = {
    /** 客户Id */
    CustomerId?: number;
    /** 客户类型枚举(1:同行 2:直客 3:海外代理) */
    CustomerType?: number;
  };

  type inquiryModifyCustomerTypeResponse = {
    /** 响应码 */
    Code?: string;
    /** 返回数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryModifyCutsomerBySelfRequest = {
    /** 客户Id */
    CustomerId?: number;
    /** 邮箱 */
    Email?: string;
    /** 性别 */
    Gender?: string;
    /** 头像OSS_Key */
    HeadPortrait?: string;
    /** 用户名 */
    UserName?: string;
  };

  type inquiryModifyCutsomerBySelfResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryModifyStatusRequest = {
    /** 询价记录id */
    id?: number;
  };

  type inquiryPageination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总条数 */
    Total?: number;
  };

  type inquiryPagination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总条数 */
    Total?: number;
  };

  type inquiryPriceData = {
    /** 价格参数—A_100 */
    A_100?: number;
    /** 价格参数—A_1000 */
    A_1000?: number;
    /** 价格参数—A_200 */
    A_250?: number;
    /** 价格参数—A_300 */
    A_300?: number;
    /** 价格参数—A_3000 */
    A_3000_?: number;
    /** 价格参数—A_45 */
    A_45?: number;
    /** 价格参数—A_500 */
    A_500?: number;
    /** 货物类型 */
    CargoType?: string;
    /** 是否加收打板费 */
    IsAddBoardFee?: number;
    /** 是否公开 */
    IsPublic?: number;
    /** 是否推荐 */
    IsRecommend?: number;
    /** 价格参数—Mini */
    Mini?: number;
    /** 价格参数—N */
    N?: number;
    /** 价格类型枚举 1：普价 2：特价  3：TACT RATE 4 ：IATA RATE  5：公布运价 6：快件运价  7：特殊货物运价 */
    PriceType?: string;
  };

  type inquiryProfitDeleteRequest = {
    /** IDs */
    Id?: number[];
  };

  type inquiryProfitDeleteResponse = {
    /** 响应码 */
    Code?: number;
    /** 数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryProfitExportExcelRequest = {
    Id?: number[];
  };

  type inquiryProfitGetPageListResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryResultData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryProfitMaintainFreightRequest = {
    /** A_100价格 */
    A100?: string;
    /** A_1000价格 */
    A1000?: string;
    /** A_250价格 */
    A250?: string;
    /** A_300价格 */
    A300?: string;
    /** A_3000价格 */
    A3000?: string;
    /** A_45价格 */
    A45?: string;
    /** A_500价格 */
    A500?: string;
    /** 航司代码Id 变为Code */
    AirlineCompanyCode?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 创建人ID */
    CreateUserId?: number;
    /** 币种Id 变为Code */
    Currency?: string;
    /** 客户类型Id */
    CustomerType?: number;
    /** 目的港Id 变为Code */
    EndPlaceCode?: string;
    /** ID */
    Id?: number;
    /** 底价 */
    Mini?: string;
    /** 初始价格 */
    N?: string;
    /** 操作类型 */
    OptionType?: number;
    /** 起运港Id 变为Code */
    StartPlaceCode?: string;
    /** 更新时间 */
    UpdateTime?: string;
    /** 更新人ID */
    UpdateUserId?: number;
  };

  type inquiryProfitMaintainFreightResponse = {
    /** 响应码 */
    Code?: number;
    /** 数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryProvince = {
    /** 省的Id */
    ProvinceId?: number;
    /** 省的Name */
    ProvinceName?: string;
  };

  type inquiryProvinceDivision = {
    /** 省 */
    Province?: inquiryProvince[];
    /** 大区 */
    RegionName?: string;
  };

  type inquiryProvinceDivisionPagination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总数 */
    Total?: number;
  };

  type inquiryProvinceDivisionResultData = {
    /** 查出的数据 */
    List?: inquiryProvinceDivision[];
    Pagination?: inquiryProvinceDivisionPagination;
  };

  type inquiryPutSearchHistoryRequest = {
    /** 客户Id */
    CustomerId?: number;
    /** 搜索历史记录 */
    SearchHistory?: string;
  };

  type inquiryPutSearchHistoryResponse = {
    /** 返回码 */
    Code?: string;
    /** 返回数据 */
    Data?: string;
    /** 返回信息 */
    Msg?: string;
  };

  type inquiryRecommendedResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: inquiryRecommendedRouteData[];
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryRecommendedRouteData = {
    /** 航司中文名称 */
    AirlineCnName?: string;
    /** 航司代码 */
    AirlineCompany?: string;
    /** 预计到达时间 */
    ArrayDays?: number;
    /** 目的港中转方式 */
    DestinationTransitMethod?: number;
    /** 目的港 */
    EndPlace?: string;
    /** 目的港中文名称 */
    EndPlaceCnName?: string;
    /** ID */
    Id?: number;
    /** 是否转运 */
    IsTransfer?: boolean;
    /** 起运港 */
    StartPlace?: string;
    StartPlaceCnName?: string;
    /** 直飞第一中转港 */
    StartTransit1?: string;
    /** 直飞第一中转港中文名称 */
    StartTransit1CnName?: string;
    /** 转运起运港 */
    TransitStartPlace?: string;
    /** 转运起运港中文名称 */
    TransitStartPlaceCnName?: string;
  };

  type inquiryResultData = {
    /** 查出的数据 */
    List?: inquiryGrossProfitResponse[];
    Pagination?: inquiryresultPagination;
  };

  type inquiryresultPagination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总数 */
    Total?: number;
  };

  type inquiryRoleData = {
    children?: inquiryRoleData[];
    component?: string;
    meta?: inquiryMeta;
    name?: string;
    path?: string;
    redirect?: string;
  };

  type inquiryRoleInquiryResponse = {
    /** 响应码 */
    Code?: string;
    /** 角色数据 */
    Data?: inquiryRoleData[];
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryRouteData = {
    /** 航线代码 */
    AirlineCompanyCode?: string;
    /** 航司代码 */
    AirlineCompanyId?: number;
    /** 航线中文名 */
    AirlineCompanyName?: string;
    /** 预估到达天数 */
    ArriveDays?: number;
    /** 货物类型名称 */
    CargoTypeName?: string;
    /** 币种 */
    CurrencyCodeId?: number;
    /** 币种名称 */
    CurrencyCodeName?: string;
    /** 目的港转运方式 枚举 (1:飞机 2:卡车) */
    DestinationTransitMethodId?: number;
    /** 目的港 */
    EndPlace?: number;
    /** 终点港代码 */
    EndPlaceCode?: string;
    /** 终点港中文名 */
    EndPlaceName?: string;
    /** 航线Id */
    Id?: number;
    /** 是否直达（0:直达/中转 1:直达 2:中转） */
    IsDirect?: number;
    /** 是否推荐 */
    IsRecommend?: number;
    /** 价格参数 */
    PriceData?: inquiryPriceData[];
    /** 价格类型 */
    PriceType?: string;
    /** 起始港代码 */
    StartPlaceCode?: string;
    /** 直飞起运港 */
    StartPlaceId?: number;
    /** 起始港中文名 */
    StartPlaceName?: string;
    /** 中转港1代码 */
    StartTransit1Code?: string;
    /** 直飞第一中转港 */
    StartTransit1Id?: number;
    /** 中转港1中文名 */
    StartTransit1Name?: string;
    /** 中转港1代码 */
    Transit1Code?: string;
    /** 转运港1 */
    Transit1Id?: number;
    /** 转运港1方式 枚举 (1:飞机 2:卡车) */
    Transit1Methond1?: number;
    /** 中转港1中文名 */
    Transit1Name?: string;
    /** 中转港2代码 */
    Transit2Code?: string;
    /** 转运港2 */
    Transit2Id?: number;
    /** 中转港2中文名 */
    Transit2Name?: string;
    /** 中转港3代码 */
    Transit3Code?: string;
    /** 转运港3 */
    Transit3Id?: number;
    /** 中转港3中文名 */
    Transit3Name?: string;
    /** 转运港2方式 枚举 (1:飞机 2:卡车) */
    TransitMethod2?: number;
    /** 转运港3方式 枚举 (1:飞机 2:卡车) */
    TransitMethod3?: number;
    /** 转运起运港 */
    TransitStartPlaceId?: number;
    /** 起飞中转港代码 */
    TransitStratPlaceCode?: string;
    /** 起飞中转港中文名 */
    TransitStratPlaceName?: string;
  };

  type inquirySalemanInfo = {
    /** 接收客户次数 */
    AcceptCustomerfrequency?: string;
    /** 公司名 */
    CompanyName?: string;
    /** 部门名 */
    DeptName?: string;
    /** 电话号码 */
    PhoneNumber?: string;
    /** 大区 */
    RegionName?: string;
    /** 业务员Id */
    SalemanId?: number;
    /** 业务员姓名 */
    SalemanName?: string;
    /** 微信号 */
    WxNumber?: string;
  };

  type inquirySalemanPagination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总数 */
    Total?: number;
  };

  type inquirySaleRequest = {
    /** 页码 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 业务员id */
    salemanId?: number;
    /** 询价记录状态 */
    status?: number;
  };

  type inquirySaleResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryInquiryListData;
    /** 响应信息 */
    Message?: string;
  };

  type inquirySaveCompanyInfoData = {
    /** 企业认证Id */
    CompanyAuthenticationId?: number;
  };

  type inquirySaveCompanyInfoRequest = {
    /** 市/区Id */
    CityId?: number;
    /** 企业中文名称 */
    CompanyCnName?: string;
    /** 统一社会信用代码 */
    CompanyCode?: string;
    /** 企业自定义代码 */
    CompanyCustomCode?: string;
    /** 企业英文名称 */
    CompanyEnName?: string;
    /** 企业简介 */
    CompanyIntroduction?: string;
    /** 营业执照图片OSS_Key */
    CompanyLisecePic?: string;
    /** 国家Id */
    CountryId?: number;
    /** 期望航线 */
    ExpectedRoute?: string;
    /** 法人身份证反面图片OSS_Key */
    LegalPersonIdCardBackPic?: string;
    /** 法人身份证正面图片OSS_Key */
    LegalPersonIdCardFrontPic?: string;
    /** 省/直辖市Id */
    ProvinceId?: number;
    /** 代理联系人 */
    ProxyPerson?: string;
    /** 代理联系人电话 */
    ProxyPhone?: string;
    /** 注册时间 */
    RegistTime?: string;
  };

  type inquirySaveCompanyInfoResponse = {
    /** 响应码 */
    Code?: string;
    Data?: inquirySaveCompanyInfoData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquirySaveCustomerAndCompanyRelationshipRequest = {
    /** 企业认证Id */
    CompanyAuthenticationId?: number;
    /** 申请认证时间 */
    CreateTime?: string;
    /** 客户Id */
    CustomerId?: number;
  };

  type inquirySaveCustomerAndCompanyRelationshipResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquirySaveCustomerRequest = {
    /** 所属企业名称 */
    CompanyName?: string;
    /** 客户Id */
    CustomerId?: number;
    /** 客户类型枚举(1:同行 2:直客 3:海外代理)； */
    CustomerType?: number;
    /** 客户邮箱 */
    Email?: string;
    /** 客户手机号 */
    PhoneNumber?: string;
    /** 审核人Id(后台注册绑定企业时传入) */
    ReviewerId?: number;
  };

  type inquirySaveCustomerResponse = {
    /** 响应码 */
    Code?: string;
    /** 返回数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquirySearchHistoryData = {
    /** 客户Id */
    CustomerId?: number;
    /** 搜索历史记录 */
    SearchHistory?: string;
  };

  type inquirySpecialOfferResponse = {
    /** 响应码 */
    Code?: string;
    /** 响应数据 */
    Data?: inquirySpecialOfferResponseData[];
    /** 响应信息 */
    Msg?: string;
  };

  type inquirySpecialOfferResponseData = {
    /** 机型ID(1:客机，2:货机，0:客机/货机) */
    AircraftType?: number;
    /** 航司中文名称 */
    AirlineCnName?: string;
    /** 航司代码 */
    AirlineCompany?: string;
    /** 预计到达时间 */
    ArrayDays?: number;
    /** 目的港中转方式 */
    DestinationTransitMethod?: number;
    /** 目的港 */
    EndPlace?: string;
    /** 目的港中文名称 */
    EndPlaceCityCnName?: string;
    /** ID */
    Id?: number;
    /** 是否转运 */
    IsTransfer?: boolean;
    /** 起运港 */
    StartPlace?: string;
    /** 起运港中文名称 */
    StartPlaceCityCnName?: string;
    /** 直飞第一中转港 */
    StartTransit1?: string;
    /** 直飞第一中转港中文名称 */
    StartTransit1CityCnName?: string;
    /** 转运起运港 */
    TransitStartPlace?: string;
    /** 转运起运港中文名称 */
    TransitStartPlaceCityCnName?: string;
  };

  type inquiryTestInquiryRequest = {
    Hello?: string;
  };

  type inquiryTransportDeleteRequest = {
    /** IDs */
    Id?: number[];
  };

  type inquiryTransportDeleteResponse = {
    /** 响应码 */
    Code?: number;
    /** 数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryTransportExportExcelRequest = {
    Id?: number[];
  };

  type inquiryTransportFlightResponse = {
    /** A_100价格 */
    A100?: string;
    /** A_1000价格 */
    A1000?: string;
    /** A_250价格 */
    A250?: string;
    /** A_300价格 */
    A300?: string;
    /** A_3000价格 */
    A3000?: string;
    /** A_45价格 */
    A45?: string;
    /** A_500价格 */
    A500?: string;
    /** 飞机类型ID(1:客机，2:货机，0:客机/货机) */
    AircraftType?: number;
    /** 航司 */
    AirlineCompany?: string;
    /** 航司Id */
    AirlineCompanyId?: number;
    /** 预计到达时间(天) */
    ArrayDays?: number;
    /** 货物类型 */
    CargoType?: string;
    /** 货物类型Id */
    CargoTypeId?: number;
    /** 中文备注 */
    CnRemarks?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 创建人 */
    CreateUserName?: string;
    /** 币种 */
    Currency?: string;
    /** 币种Id */
    CurrencyId?: number;
    /** 目的港转运方式(1:飞机 2：卡车) */
    DestinationTransitMethod?: number;
    /** 英文备注 */
    EnRemarks?: string;
    /** 目的港 */
    EndPlace?: string;
    /** 目的港Id */
    EndPlaceId?: number;
    /** 结束时间 */
    EndTime?: string;
    /** Id */
    Id?: number;
    /** 是否加收打板费(0:否 1:是) */
    IsAddBoardFee?: number;
    /** 是否公开价格(0:不公开 1：公开) */
    IsDisclosurePrice?: number;
    /** 是否为内部数据(0: 否 1：是) */
    IsInternal?: number;
    /** 是否推荐(0:不推荐 1：推荐) */
    IsRecommend?: number;
    /** 底价 */
    Mini?: string;
    /** 初始价格 */
    N?: string;
    /** 价格类型 */
    PriceType?: string;
    /** 审核人 */
    ReviewedPersonName?: string;
    /** 起运港 */
    StartPlace?: string;
    /** 起运港Id */
    StartPlaceId?: number;
    /** 开始时间 */
    StartTime?: string;
    /** 直飞第一中转港 */
    StartTransit1?: string;
    /** 直飞第一中转港Id */
    StartTransit1Id?: number;
    /** 供应商 */
    Suppliers?: string;
    /** 中转1 */
    Transit1?: string;
    /** 中转1Id */
    Transit1Id?: number;
    /** 中转2 */
    Transit2?: string;
    /** 中转2Id */
    Transit2Id?: number;
    /** 中转3 */
    Transit3?: string;
    Transit3Id?: number;
    /** 中转1方式(1:飞机 2：卡车) */
    TransitMethod1?: number;
    /** 中转2方式(1:飞机 2：卡车) */
    TransitMethod2?: number;
    /** 中转3方式(1:飞机 2：卡车) */
    TransitMethod3?: number;
    /** 转运起运港 */
    TransitStartPlace?: string;
    /** 转运起运港Id */
    TransitStartPlaceId?: number;
    /** 更新时间 */
    UpdateTime?: string;
    /** 更新人 */
    UpdateUserName?: string;
  };

  type inquiryTransportGetPageListResponse = {
    /** 响应码 */
    Code?: number;
    Data?: inquiryTransportResultData;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryTransportMaintainFreightRequest = {
    /** A_100价格 */
    A100?: string;
    /** A_1000价格 */
    A1000?: string;
    /** A_250价格 */
    A250?: string;
    /** A_300价格 */
    A300?: string;
    /** A_3000价格 */
    A3000?: string;
    /** A_45价格 */
    A45?: string;
    /** A_500价格 */
    A500?: string;
    /** 飞机类型ID(1:客机，2:货机，0:客机/货机) */
    AircraftType?: number;
    /** 航司Id 变为Code */
    AirlineCompanyCode?: string;
    /** 预计到达时间(天) */
    ArrayDays?: number;
    /** 货物类型Id 变为Code */
    CargoType?: string;
    /** 中文备注 */
    CnRemarks?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 创建人ID */
    CreateUserId?: number;
    /** 币种Id 变为Code */
    CurrencyCode?: string;
    /** 目的港转运方式Id(1:飞机 2：卡车) */
    DestinationTransitMethodId?: number;
    /** 英文备注 */
    EnRemarks?: string;
    /** 目的港Id   变为Code */
    EndPlaceCode?: string;
    /** 结束时间 */
    EndTime?: string;
    /** Id */
    Id?: number;
    /** 是否加收打板费(0:否 1:是) */
    IsAddBoardFee?: number;
    /** 是否公开价格(0:不公开 1：公开) */
    IsDisclosurePrice?: number;
    /** 是否为内部数据(0: 否 1：是) */
    IsInternal?: number;
    /** 是否推荐(0:不推荐 1：推荐) */
    IsRecommend?: number;
    /** 底价 */
    Mini?: string;
    /** 初始价格 */
    N?: string;
    /** 操作类型 */
    OptionType?: number;
    /** 价格类型 */
    PriceType?: string;
    /** 审核人姓名 */
    ReviewedPersonName?: string;
    /** 起运港Id 变为Code */
    StartPlaceCode?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 直飞第一中转港Id 变为Code */
    StartTransit1Code?: string;
    /** 供应商 */
    Suppliers?: string;
    /** 中转1Id 变为Code */
    Transit1Code?: string;
    /** 中转2Id 变为Code */
    Transit2Code?: string;
    /** 中转3Id 变为Code */
    Transit3Code?: string;
    /** 中转1方式Id(1:飞机 2：卡车) */
    TransitMethod1Id?: number;
    /** 中转2方式Id(1:飞机 2：卡车) */
    TransitMethod2Id?: number;
    /** 中转3方式Id(1:飞机 2：卡车) */
    TransitMethod3Id?: number;
    /** 转运起运港Id 变为Code */
    TransitStartPlaceCode?: string;
    /** 更新时间 */
    UpdateTime?: string;
    /** 更新人ID */
    UpdateUserId?: number;
  };

  type inquiryTransportMaintainFreightResponse = {
    /** 响应码 */
    Code?: number;
    /** 数据 */
    Data?: string;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryTransportResultData = {
    /** 查出的数据 */
    List?: inquiryTransportFlightResponse[];
    Pagination?: inquiryTransportResultPagination;
  };

  type inquiryTransportResultPagination = {
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 总数 */
    Total?: number;
  };

  type inquiryUpdateProvinceDivision = {
    ProvinceIds?: number[];
    RegionName?: string;
  };

  type inquiryUpdateProvincedivisionRequest = {
    List?: inquiryUpdateProvinceDivision[];
  };

  type inquiryUpdateProvincedivisionResponse = {
    /** 响应码 */
    Code?: number;
    /** 响应信息 */
    Msg?: string;
  };

  type inquiryUpdateWeChatQrBySalemanIdRequest = {
    Key?: string;
    SalemanId?: number;
  };

  type inquiryUpdateWeChatQrBySalemanIdResponse = {
    /** 响应码 */
    Code?: number;
    /** 响应信息 */
    Msg?: string;
  };

  type ProfitGetPageListParams = {
    /** 航司Id 变为Code */
    AirlineCompanyCode?: string;
    /** 起运港Id 变为Code */
    StartPlaceCode?: string;
    /** 目的港Id 变为Code */
    EndPlaceCode?: string;
    /** 客户类型Id */
    CustomerType?: number;
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };

  type protobufAny = {
    '@type'?: string;
  };

  type rpcStatus = {
    code?: number;
    details?: protobufAny[];
    message?: string;
  };

  type TransportGetPageListParams = {
    /** 航司Id  变为Code */
    AirlineCompanyCode?: string;
    /** 直飞起运港Id  变为Code */
    StartPlaceCode?: string;
    /** 转运起运港Id  变为Code */
    TransitStartPlaceCode?: string;
    /** 起始页 */
    PageIndex?: number;
    /** 每页条数 */
    PageSize?: number;
  };
}
