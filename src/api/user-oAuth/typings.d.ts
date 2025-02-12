declare namespace UserApi {
  type ApiConfigGetStringGETParams = {
    key: string;
  };

  type BasicResponseDto = {
    /** 是否成功 */
    success?: boolean;
    /** 异常消息 */
    errorMessage?: string;
    /** 返回的具体业务数据 */
    data?: any;
  };

  type FsData = {
    /** 用户在应用内的唯一标识 */
    open_id?: string;
    user_id?: string;
    access_token?: string;
    /** 30天有效期 */
    refresh_token?: string;
  };

  type GetJsTicketAndSignatureOutput = {
    needFsBrowserLogin?: boolean;
    /** 最新的飞书refresh_token */
    refresh_token?: string;
    openId?: string;
    signature?: string;
    timestamp?: string;
    nonceStr?: string;
    url?: string;
  };

  type LoginInput = {
    /** 账号/手机号 */
    account: string;
    /** 密码 */
    password: string;
  };

  type LoginOutput = {
    /** 生成的token */
    token?: string;
    /** 用户信息 */
    userInfo?: any;
    fsData?: FsData;
  };

  type OAuthBrowserFsSigninPOSTParams = {
    authorizationCode?: string;
  };

  type OAuthCheckTokenIsInvalidPOSTParams = {
    token?: string;
  };

  type OAuthGetJsTicketAndSignatureGETParams = {
    url?: string;
  };

  type OAuthGetRefreshTokenWithHbPOSTParams = {
    token?: string;
  };

  type OAuthGetSysTokenPOSTParams = {
    token?: string;
  };

  type OAuthGetUserByTokenPOSTParams = {
    token?: string;
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

  type SendSmsInput = {
    /** 账号id */
    id?: number;
    /** 手机号码 */
    phoneNumber?: string;
    sendValidationMessageType?: SendValidationMessageType;
  };

  type SendSmsValidationInput = {
    /** 账号id */
    id?: number;
    /** 手机号码 */
    phoneNumber?: string;
    sendValidationMessageType?: SendValidationMessageType;
    /** 图片验证码Guid,作为发送短信的唯一id */
    guid?: string;
    /** 用户Id */
    userId?: number;
  };

  type SendValidationMessageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  type UnifyResultDto = {
    code?: string;
    msg?: string;
    data?: any;
  };

  type UserInfoOutput = {
    /** id */
    id?: number;
    /** 账号 */
    account?: string;
    /** 姓名 */
    name?: string;
    /** 英文名 */
    enName?: string;
    /** 手机号 */
    telPhone?: string;
    /** 员工Id */
    employeeId?: number;
    /** 公司Id */
    companyId?: number;
    /** 用户飞书头像URL */
    feiShuURL?: string;
  };

  type WMSTempLoginInput = {
    /** 账号/手机号 */
    account: string;
    /** 密码 */
    password: string;
    /** 过期分钟 */
    expiredTime?: number;
  };
}
