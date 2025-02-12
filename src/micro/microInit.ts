import MicroApp, { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import type { Router } from 'vue-router'
import { microApps } from './microApps'

/**
 * 初始化 micro app
 */
export function initMicroApp() {
  const modules: { [key: string]: any } = {}
  MicroApp.start({
    'customProxyDocumentProps': new Map([['title', (): void => {}]]),
    'disableScopecss': false,
    // 'disable-memory-router': true,
    // 'keep-router-state': true,
    'iframe': true,
    'keep-alive': true,
    // 'shadowDOM': true,
    'plugins': {
      modules,
    },
  })
}

/**
 * 主应用-子应用通信 事件中心
 */
export function initEventCenter() {
  // 注意：每个子应用根据appName单独分配一个通信对象
  microApps.forEach((ele) => {
    ;(window as any)[`eventCenterFor${ele.name}`] = new EventCenterForMicroApp(ele.name)
  })
}

/**
 * 与基座进行数据交互 - 接收
 * @param router
 */
export function initMicroData(router: Router) {
  if (window.rawWindow[`eventCenterFor${window?.__MICRO_APP_NAME__}`]) {
    // 直接获取数据
    const data = window.rawWindow[`eventCenterFor${window?.__MICRO_APP_NAME__}`].getData() // 返回data数据
    console.log('%c[来自主应用数据-初始化]：', 'color:#f18c07', data)
    // 监听基座下发的数据变化
    window.rawWindow[`eventCenterFor${window?.__MICRO_APP_NAME__}`].addDataListener((data: any) => {
      console.log('%c[来自主应用数据-动态]：', 'color:#f18c07', data)
      // 当基座下发跳转指令时进行跳转
      if (data.path)
        router.push(data.path?.replace(window?.__MICRO_APP_NAME__, ''))
    })
  }
}
/**
 * 与基座进行数据交互 - 发送
 * @param data
 */
export function sendMicroData(data: any) {
  window.rawWindow[`eventCenterFor${window?.__MICRO_APP_NAME__}`].dispatch(data)
}

/** 初始化注册 */
export function setupMicroApp(app: any, router: Router) {
  if (window?.__MICRO_APP_ENVIRONMENT__) {
    console.log('%c[子应用]：', 'color:#f18c07', `子应用${window?.__MICRO_APP_NAME__}渲染了`)
    initMicroData(router)
    sendMicroData({
      isMicroAppDone: true,
    })

    // 卸载应用
    window.unmount = () => {
      app.unmount()
    }
  }
  else {
    // micro app 初始化
    initMicroApp()
    // micro app 事件中心
    initEventCenter()
  }
}
