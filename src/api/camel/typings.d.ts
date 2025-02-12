declare namespace BsiCamelApi {
  type StringResult = {
    isSuccess?: boolean;
    bsiKey?: string;
    value?: string;
  };

  type StringResultHttpResult = {
    status?: number;
    code?: string;
    message?: string;
    value?: StringResult;
  };
}
