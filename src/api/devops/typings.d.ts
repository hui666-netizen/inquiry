declare namespace API {
  type clientResult = {
    /** 终端名称 */
    client_name: string;
    /** 自定义字段 */
    extends: { '1'?: number };
    /** 创建人 */
    create_by: number;
    /** 创建人名称 */
    create_by_name: string;
    /** 创建时间 */
    create_at: string;
    /** 版本号 */
    version: number;
    /** 终端id */
    client_id: number;
    /** 是否开启;1-是 0-否 */
    is_enable: number;
    /** extends中的字段集合 此字段只在单个详情相关接口中才会存在 */
    fieldList?: fieldConfigModelResult[];
  };

  type commonResponse = {
    /** 状态码 */
    code: number;
    /** 消息 */
    message: string;
    /** 数据 */
    data: Record<string, any>;
  };

  type customerTableConfigResult = {
    /** 表格唯一标识 */
    table_unique: string;
    /** 字段集合 */
    columns_config: { sys?: Record<string, any>[]; customer?: Record<string, any>[] };
    /** 用户自定义显示字段 /customerTableConfig/save 提交过来的user_fields字段原样返回 */
    user_fields: Record<string, any>;
  };

  type fieldConfigModelResult = {
    /** 组件id */
    field_id: number;
    /** 显示名称 */
    field_label: string;
    /** 后端自动生成唯一标识 */
    field_name: string;
    /** 组件json串 */
    field_component: {
      type?: string;
      options?: string[];
      maxlength?: number;
      componentType?: string;
    };
    /** 备注 */
    remark: string;
    /** 排序，降序 */
    field_sort: number;
    /** 字段类型;1-系统 2-自定义 */
    field_type: number;
    /** 是否是模版固定字段,1:是，0:否 */
    template_default: number;
  };

  type flowProcessReuslt = {
    /** 流程id 修改时才需要 */
    flow_process_id: number;
    /** 工作流名称 */
    flow_process_name: string;
    /** 工作流说明 */
    flow_process_desc: string;
    /** 项目id */
    project_id: number;
    /** 版本号 修改时才需要 */
    version: number;
    node_list: nodeList2;
  };

  type GetClientDetailParams = {
    /** 终端id */
    client_id?: string;
  };

  type GetClientPageQueryParams = {
    /** 分页页码 */
    page?: string;
    /** 显示条数，默认20条 */
    list_rows?: string;
    /** 终端名称 */
    client_name?: string;
  };

  type GetCustomerTableConfigGetParams = {
    /** 表格唯一标识 */
    table_unique: string;
    /** 所属模块id,非必填，如果不传，返回值中的columns_config就会为null */
    module_id?: string;
  };

  type GetEnumGetParams = {
    /** 枚举code */
    code: string;
  };

  type GetFieldConfigDetailParams = {
    field_id: string;
  };

  type GetFieldConfigGetFixedListParams = {
    /** 归属模块;1-终端 2微服务 3-产品 4-迭代 */
    module_id: string;
  };

  type GetFieldConfigGetListGroupByModuleIdParams = {
    /** 归属模块;1-终端 2微服务 3-产品 4-迭代 */
    module_id: string;
    /** 获取是否允许配置(展示/隐藏);1-允许 0-不允许,不传返回所有 */
    allow_setting?: string;
  };

  type GetFieldConfigPageQueryParams = {
    /** 分页页码 */
    page?: string;
    /** 显示条数，默认20条 */
    list_rows?: string;
    /** 归属模块;1-终端 2微服务 3-产品 4-迭代 */
    module_id: string;
  };

  type GetIterateFlowStatusDetailParams = {
    /** 工作流id */
    flow_status_id?: number;
  };

  type GetIterateFlowStatusEnumListQueryParams = {
    /** 项目id */
    project_id?: number;
  };

  type GetIterateFlowStatusListQueryParams = {
    /** 项目id */
    project_id?: number;
  };

  type GetIterateWorkflowDiagramDetailParams = {
    /** 流程id */
    flow_process_id?: string;
  };

  type GetIterateWorkflowDiagramNodeSelectorParams = {
    /** 流程id */
    flow_process_id?: string;
  };

  type GetIterateWorkflowDiagramPageQueryParams = {
    /** 项目id */
    project_id: number;
  };

  type GetIterateWorkflowDiagramSelectorParams = {
    /** 项目id */
    project_id?: string;
  };

  type GetMicroserviceDetailParams = {
    /** 微服务id */
    microservice_id?: string;
  };

  type GetMicroservicePageQueryParams = {
    /** 分页页码 */
    page?: string;
    /** 显示条数，默认20条 */
    list_rows?: string;
    /** 微服务名称 */
    microservice_name?: string;
  };

  type GetProductDetailParams = {
    /** 分类id */
    product_id?: number;
  };

  type GetProductPageQueryParams = {
    /** 页码 */
    page?: number;
    /** 条数 */
    list_rows?: number;
    /** 项目名 */
    product_name?: number;
    /** 终端名 */
    client_name?: string;
    /** 微服务名 */
    microservice_name?: string;
  };

  type GetProjectIterationCategoryDetailParams = {
    /** 分类id */
    category_id?: number;
  };

  type GetProjectIterationCategoryListQueryParams = {
    /** 页码 */
    page?: number;
    /** 条数 */
    list_rows?: number;
    /** 项目id */
    project_id?: number;
  };

  type GetProjectProjectUserPageQueryParams = {
    /** 页码 */
    page?: number;
    /** 条数 */
    list_rows?: number;
    /** 项目id */
    project_id?: number;
    /** 关键字(模糊查询姓名、英文名) */
    keywork?: string;
  };

  type GetProjectProjectUserSelectorPageQueryParams = {
    /** 页码 */
    page?: number;
    /** 条数 */
    list_rows?: number;
    /** 关键字(模糊查询姓名、英文名) */
    keywork?: string;
  };

  type GetTemplateDefaultTempDetailParams = {
    /** 模块id */
    module_id: string;
  };

  type GetTemplateDetailParams = {
    /** id */
    id: string;
  };

  type GetTemplatePageQueryParams = {
    /** 分页页码 */
    page?: string;
    /** 显示条数，默认20条 */
    list_rows?: string;
    /** 模块id */
    module_id: string;
  };

  type listResult = {
    /** 流程id */
    flow_process_id: number;
    /** 项目id */
    project_id: number;
    /** 流程名称 */
    flow_process_name: string;
    /** 流程说明 */
    flow_process_desc: string;
    /** 版本号 */
    version: number;
    /** 是否可删除 true是，false否 */
    canBeDeleted: boolean;
  };

  type microserviceResult = {
    /** 微服务名称 */
    microservice_name: string;
    /** 自定义字段 */
    extends: { '1'?: number };
    /** 创建人 */
    create_by: number;
    /** 创建人名称 */
    create_by_name: string;
    /** 创建时间 */
    create_at: string;
    /** 版本号 */
    version: number;
    /** 微服务id */
    microservice_id: number;
    /** 是否开启;1-是 0-否 */
    is_enable: number;
    /** extends中的字段集合 此字段只在单个详情相关接口中才会存在 */
    fieldList?: fieldConfigModelResult[];
  };

  type nodeList2 = Record<string, any>;

  type pagingParameter = {
    /** 总条数 */
    total: string;
    /** 第一页 */
    per_page: string;
    /** 当前页 */
    current_page: string;
    /** 最后一页 */
    last_page: string;
    /** 数据 */
    data: Record<string, any>[];
  };

  type selector = {
    /** 状态码 */
    code: number;
    /** 消息 */
    message: string;
    /** 数据 */
    data: { label?: string; value?: string }[];
  };

  type templateResult = {
    /** 模版id */
    id: string;
    /** 是否默认模板;1-是 0-否 */
    is_default: string;
    /** 模板名称 */
    template_name: string;
    /** 模板内容 */
    template_content: string;
    /** template_content中的字段集合 此字段只在单个详情相关接口中才会存在 */
    fieldList: fieldConfigModelResult[];
  };
}
