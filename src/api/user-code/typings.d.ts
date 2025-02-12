declare namespace UserApi {
  type CaptchaGetCaptchaPOSTParams = {
    captchaId?: string;
  };

  type CaptchaResult = {
    id?: string;
    backgroundImage?: string;
    sliderImage?: string;
  };

  type SlideTrackContext = {
    captchaId?: string;
    bgW?: number;
    bgH?: number;
    sliderImgW?: number;
    sliderImgH?: number;
    startTime?: string;
    endTime?: string;
    tracks?: Track[];
    percent?: number;
  };

  type Track = {
    x?: number;
    y?: number;
  };

  type ValidateResultOutput = {
    result?: ValidateResultType;
    message?: string;
    requestId?: string;
  };

  type ValidateResultType = 0 | 1 | 2;
}
