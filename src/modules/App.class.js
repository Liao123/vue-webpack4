import Account from './Account.class.js'
import JsonStringify from 'fast-json-stable-stringify'

export default class  App {
  constructor() {
    this.data = null;
  }

  static get isMobile () {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return !flag;
  }
  
  static get instance () {
    let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
    if (isiOS) {
      return window.WebViewJavascriptBridge;
    } else {
      return window.Android;
    }
  }

  static set params(params = {}) {
    try {
      this.data = this.instance.getSignParam(JSON.stringify(params))
    } catch (error) {
      this.data = JsonStringify({})
    }
    if (!(JSON.parse(this.data).uuid)) this.data = JsonStringify(params)
  }

  static get params () {
    return JSON.parse(this.data)
  }

  static get logInApp () {
    return !!parseInt(this.instance.checkUserLogin())
  }

  static ShareWeChat () {
    this.instance.shareToWx("你好", "分享啊", "https://s.gravatar.com/avatar/fa6719aa3cb274e29e9bec58459e8425?size=100&default=retro", "https://www.baidu.com")
    
  }


  static setImgList(imgs,index) {
    let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
    if (isiOS) {
      this.instance.picPreview(imgs, index);
    } else {
      this.instance.previewImage(imgs, index);
    }
  }


  static ShowAppToast(data) {
    this.instance.jsShowToast(data);
  }

  // 环境校验
  static get verification () {
    if (this.isMobile) {
      if (this.logInApp) {
        return true
      } else {
        Account.clean()
        this.instance.openNativeView('user_to_login')
        return false
      }
    } else {
        return true
    }
  }

  static get weakVerification() {
    if (this.isMobile) {
      if (this.logInApp) {
        return true
      } else {
        Account.clean()
        return false
      }
    } else {
      return true
    }
  }

}
