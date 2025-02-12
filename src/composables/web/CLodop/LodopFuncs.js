// ==本JS是加载Lodop插件或Web打印服务CLodop/Lodop7的综合示例，可直接使用，建议理解后融入自己程序==
// import { message } from 'ant-design-vue'
// import { useMessage } from '/@/hooks/web/useMessage'
import { h } from 'vue'
import { $baseConfirm, $baseMessage } from '@/composables/core/useMessage'

let CreatedOKLodopObject, CLodopJsState
// var CLodopIsLocal;
// const { createInfoModal } = useMessage()

// ==判断是否需要CLodop(那些不支持插件的浏览器):==
// eslint-disable-next-line complexity
function needCLodop() {
  try {
    const ua = navigator.userAgent
    if (ua.match(/Windows\sPhone/i))
      return true
    if (ua.match(/iPhone|iPod|iPad/i))
      return true
    if (ua.match(/Android/i))
      return true
    if (ua.match(/Edge\D?\d+/i))
      return true

    const verTrident = ua.match(/Trident\D?\d+/i)
    const verIE = ua.match(/MSIE\D?\d+/i)
    let verOPR = ua.match(/OPR\D?\d+/i)
    let verFF = ua.match(/Firefox\D?\d+/i)
    const x64 = ua.match(/x64/i)
    if (!verTrident && !verIE && x64) {
      return true
    }
    else if (verFF) {
      verFF = verFF[0].match(/\d+/)
      if (verFF[0] >= 41 || x64)
        return true
    }
    else if (verOPR) {
      verOPR = verOPR[0].match(/\d+/)
      if (verOPR[0] >= 32)
        return true
    }
    else if (!verTrident && !verIE) {
      let verChrome = ua.match(/Chrome\D?\d+/i)
      if (verChrome) {
        verChrome = verChrome[0].match(/\d+/)
        if (verChrome[0] >= 41)
          return true
      }
    }
    return false
  }
  catch (err) {
    return true
  }
}

function getCLodop() {
  return window.CLODOP2015_7028
}

// 加载CLodop时用双端口(http是8000/18000,而https是8443/8444)以防其中某端口被占,
// 主JS文件名“CLodopfuncs.js”是固定名称，其内容是动态的，与其链接的打印环境有关:
function loadCLodop() {
  if (CLodopJsState === 'loading' || CLodopJsState === 'complete')
    return
  CLodopJsState = 'loading'
  const head = document.head || document.getElementsByTagName('head')[0] || document.documentElement
  const JS1 = document.createElement('script')
  const JS2 = document.createElement('script')

  //   if (window.location.protocol == 'https:') {
  //     JS1.src = 'https://localhost.lodop.net:8443/CLodopfuncs.js';
  //     JS2.src = 'https://localhost.lodop.net:8444/CLodopfuncs.js';
  //   } else {
  JS1.src = 'http://localhost:8000/CLodopfuncs.js'
  JS2.src = 'http://localhost:18000/CLodopfuncs.js'
  //   }
  JS1.onload = JS2.onload = function () {
    CLodopJsState = 'complete'
  }
  JS1.onerror = JS2.onerror = function () {
    CLodopJsState = 'complete'
  }
  head.insertBefore(JS1, head.firstChild)
  head.insertBefore(JS2, head.firstChild)
  //   CLodopIsLocal = !!(JS1.src + JS2.src).match(/\/\/localho|\/\/127.0.0./i);
}

if (needCLodop())
  loadCLodop()
// 开始加载

// ==获取LODOP对象主过程,判断是否安装、需否升级:==
// eslint-disable-next-line complexity
export function getLodop(oOBJECT, oEMBED) {
  let LODOP
  try {
    const isWinIE = /MSIE/i.test(navigator.userAgent) || /Trident/i.test(navigator.userAgent)
    // var isWinIE64 = isWinIE && /x64/i.test(navigator.userAgent);
    const isLinuxX86 = /Linux/i.test(navigator.platform) && /x86/i.test(navigator.platform)
    const isLinuxARM = /Linux/i.test(navigator.platform) && /aarch/i.test(navigator.platform)

    if (needCLodop() || isLinuxX86 || isLinuxARM) {
      try {
        LODOP = getCLodop()
      }
      catch (err) {}
      if (!LODOP && CLodopJsState !== 'complete') {
        // if (CLodopJsState == 'loading') alert('网页还没下载完毕，请稍等一下再操作.');
        // else alert('未曾加载Lodop主JS文件，请先调用loadCLodop过程.');
        $baseConfirm({
          title: '提示',
          content: h('div', {}, [
            h('span', {}, '未下载打印插件!点击这里'),
            h(
              'a',
              {
                href: 'https://file.gotofreight.com/camsfiles/CLodop_Setup_for_Win32NT.exe',
                target: '_blank',
                style: {
                  color: 'blue',
                },
              },
              '下载插件',
            ),
            h(
              'div',
              {
                style: {
                  marginTop: '16px',
                },
              },
              '下载安装成功后请重启浏览器或刷新页面',
            ),
          ]),

          okText: '我知道了',
        })
        // "未下载!点击这里<a href='https://file.gotofreight.com/camsfiles/CLodop_Setup_for_Win32NT.exe' target='_blank'>执行下载</a>下载安装成功后请刷新本页面或重启浏览器。",
        // message.info('Lodop打印控件还没准备好，请稍后再试！')
        return
      }
      let strAlertMessage
      if (!LODOP) {
        // if (isLinuxX86) strAlertMessage = strLodop7Install_X86;
        // else if (isLinuxARM) strAlertMessage = strLodop7Install_ARM;
        // else strAlertMessage = strCLodopInstallA + (CLodopIsLocal ? strCLodopInstallB : '');
        // document.body.innerHTML = strAlertMessage + strInstallOK + document.body.innerHTML;
        // $baseMessage('未下载插件', 'error')
        $baseConfirm({
          title: '提示',
          content: h('div', {}, [
            h('span', {}, '未下载打印插件!点击这里'),
            h(
              'a',
              {
                href: 'https://file.gotofreight.com/camsfiles/CLodop_Setup_for_Win32NT.exe',
                target: '_blank',
                style: {
                  color: 'blue',
                },
              },
              '下载插件',
            ),
            h(
              'div',
              {
                style: {
                  marginTop: '16px',
                },
              },
              '下载安装成功后请重启浏览器或刷新页面',
            ),
          ]),

          okText: '我知道了',
        })
        // createInfoModal({
        //   title: '下载地址',
        //   content:
        //     "未下载!点击这里<a href='https://file.gotofreight.com/camsfiles/CLodop_Setup_for_Win32NT.exe' target='_blank'>执行下载</a>下载安装成功后请刷新本页面或重启浏览器。",
        //   okText: '我知道了',
        // })
        return
      }
      else {
        if (isLinuxX86 && LODOP.CVERSION < '7.0.4.2')
          $baseMessage('版本过低，请更新Lodop打印控件。', 'error')
        // message.info('版本过低，请更新Lodop打印控件。')
        // strAlertMessage = strLodop7Update_X86;
        else if (isLinuxARM && LODOP.CVERSION < '7.0.4.2')
          $baseMessage('版本过低，请更新Lodop打印控件', 'error')
        // message.info('版本过低，请更新Lodop打印控件')
        //  strAlertMessage = strLodop7Update_ARM;
        else if (LODOP.CVERSION < '4.1.5.9')
          $baseMessage('版本过低，请更新Lodop打印控件', 'error')
        // message.info('版本过低，请更新Lodop打印控件')

        // strAlertMessage = strCLodopUpdate;
        if (strAlertMessage)
          $baseMessage('成功后请刷新本页面或重启浏览器。!', 'error')

        // document.body.innerHTML = strAlertMessage + strInstallOK + document.body.innerHTML;
      }
    }
    else {
      // ==如果页面有Lodop插件就直接使用,否则新增:==
      if (oOBJECT || oEMBED) {
        if (isWinIE)
          LODOP = oOBJECT
        else LODOP = oEMBED
      }
      else if (!CreatedOKLodopObject) {
        LODOP = document.createElement('object')
        LODOP.setAttribute('width', 0)
        LODOP.setAttribute('height', 0)
        LODOP.setAttribute('style', 'position:absolute;left:0px;top:-100px;width:0px;height:0px;')
        if (isWinIE)
          LODOP.setAttribute('classid', 'clsid:2105C259-1E0C-4534-8141-A753534CB4CA')
        else LODOP.setAttribute('type', 'application/x-print-lodop')
        document.documentElement.appendChild(LODOP)
        CreatedOKLodopObject = LODOP
      }
      else {
        LODOP = CreatedOKLodopObject
      }

      // ==Lodop插件未安装时提示下载地址:==
      if (!LODOP || !LODOP.VERSION) {
        // document.body.innerHTML =
        //   (isWinIE64 ? strLodop64Install : strLodopInstall) +
        //   strInstallOK +
        //   document.body.innerHTML;
        // message.info('请安装Lodop打印控件成功后请刷新本页面或重启浏览器。!');
        $baseMessage('未下载插件', 'error')
        $baseConfirm({
          title: '提示',
          content: h('div', {}, [
            h('span', {}, '未下载打印插件!点击这里'),
            h(
              'a',
              {
                href: 'https://file.gotofreight.com/camsfiles/CLodop_Setup_for_Win32NT.exe',
                target: '_blank',
                style: {
                  color: 'blue',
                },
              },
              '下载插件',
            ),
            h(
              'div',
              {
                style: {
                  marginTop: '16px',
                },
              },
              '下载安装成功后请重启浏览器或刷新页面',
            ),
          ]),

          okText: '我知道了',
        })
        // createInfoModal({
        //   title: '下载地址',
        //   content:
        //     "未下载!点击这里<a href='https://file.gotofreight.com/camsfiles/CLodop_Setup_for_Win32NT.exe' target='_blank'>执行下载</a>,下载安装成功后请刷新本页面或重启浏览器。",
        //   okText: '我知道了',
        // })
        return LODOP
      }
      if (LODOP.VERSION < '6.2.2.6') {
        // document.body.innerHTML =
        //   (isWinIE64 ? strLodop64Update : strLodopUpdate) + strInstallOK + document.body.innerHTML;
        $baseMessage('版本过低，请更新Lodop打印控件,成功后请刷新本页面或重启浏览器。', 'error')
        // message.info(
        //   '版本过低，请更新Lodop打印控件,成功后请刷新本页面或重启浏览器。'
        // )
      }
    }
    // ===如下空白位置适合调用统一功能(如注册语句、语言选择等):=======================
    LODOP.SET_LICENSES('', '0E75C8B77E0DACEBF819AD7D54A42C22364', '', '')
    // ===============================================================================

    return LODOP
  }
  catch (err) {
    // eslint-disable-next-line no-alert
    alert(`cLodop出错:${err}`)
  }
}
