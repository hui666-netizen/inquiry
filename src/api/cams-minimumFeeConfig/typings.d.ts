declare namespace CamsApi {
  type BatchDeleteInput = {
    ids?: number[];
  };

  type CompareDirectPriceAndMinPriceInput = {
    /** 单所属公司id */
    belongCompanyId?: number;
    /** 客户直飞币种 */
    customerDirectCurrency?: string;
    /** 客户直飞价格 */
    customerDirectPrice?: number;
    /** 目的港Id */
    endPortId?: number;
    /** 起运港Id */
    startPortId?: number;
    timeType?: TimeTypeEnum;
    /** 工作单时间 */
    workOrderTime?: string;
  };

  type EditMinCostInput = {
    /** 目的港航线 */
    airRouteId?: number;
    /** 起运港国家 */
    countryId?: number;
    /** 币种代码 */
    currencyCode?: string;
    /** 币种id */
    currencyId?: number;
    id?: number;
    /** 最低卖价 */
    minPrice?: number;
  };

  type GetMinCostDetailOutputVO = {
    /** 目的港航线 */
    airRouteId?: number;
    /** 目的港航线名称 */
    airRouteName?: string;
    /** 起运港国家 */
    countryId?: number;
    /** 起运港国家名称 */
    countryName?: string;
    /** 币种代码 */
    currencyCode?: string;
    /** 币种id */
    currencyId?: number;
    id?: number;
    /** 最低卖价 */
    minPrice?: number;
  };

  type GetMinCostListInputVO = {
    pageIndex?: number;
    pageSize?: number;
    /** 目的港航线 */
    airRouteId?: number;
    /** 起运港国家 */
    countryId?: number;
    /** 币种id */
    currencyId?: number;
  };

  type GetMinCostListOutputVO = {
    /** 目的港航线 */
    airRoute?: string;
    /** 起运港国家 */
    country?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUserName?: string;
    /** 币种代码 */
    currencyCode?: string;
    id?: number;
    /** 最低卖价 */
    minPrice?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUserName?: string;
  };

  type GetMinCostListOutputVOUnifyPageResultDto = {
    pagination?: PageInfoOutput;
    list?: GetMinCostListOutputVO[];
  };

  type PageInfoOutput = {
    pageIndex?: number;
    pageSize?: number;
    total?: number;
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

  type TimeTypeEnum = 1 | 2;

  type WorkOrderAirMinCostGetMinCostDetailGETParams = {
    id?: number;
  };
}
