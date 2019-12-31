import Url from './Url.class.js'
import Storage from './Storage.class.js'
import App from './App.class.js'
import Dictionary from './Dictionary.class.js'
export default class Router {

  // constructor () {
  //   let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
  //   if (isiOS) {
  //     this.instance = WebViewJavascriptBridge;
  //   } else {
  //     this.instance = window.JxhAndroid;
  //   }
  // }

  static get instance() {
    let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
    if (isiOS) {
      return WebViewJavascriptBridge;
    } else {
      return window.JxhAndroid;
    }
  }

  static get params () {
    let params = window.location.href.split('?')[1]
    let data = {}
    let num = 0
    params.split('&').forEach(item => {
      let [key, value] = item.split('=')
      data[key] = value
      num++
    });

    if (num == 0) {
      data = null
    }
    return data
  }

  static push (vueObj, params) {
    let data = {}
    if (typeof params === 'string') {
      if (params in Dictionary.page) {
        params = Dictionary.page[params]
      }
      data.path = '/' + params
    } else {
      if (params.name in Dictionary.page) {
        params.name = Dictionary.page[params.name]
      }
      data = {
        path: '/' + params.name,
        query: params.params
      }
    }
    vueObj.$router.push(data)
  }

  static targetApp (viewName, json = false) {
    if (json) {
      this.instance.openNativeViewWithJson(viewName, json)
    } else {
      this.instance.openNativeView(viewName)
    }
  }

  static openWindow (params) {
    if (App.isMobile) {
      let [url, name] = ['', params]
      if (typeof params !== 'string') {
        name = Url[params.name]
        Object.entries(params.params).forEach(([key, value]) => {
          url += `${key}=${value}&`
        });
      } else {
        name = Url[params]
      }
      url = `${name}?${url}`
      url = url.substring(0, url.length - 1)
      this.instance.openNewPage(url)
    } else {
      this.push(Storage.instance, params)
    }
  }

  static goBack () {
    if (App.isMobile) {
      this.instance.webViewBack()
    } else {
      this.push(Storage.instance, 'pinActivity')
    }
  }

  static closeWindow() {
    if (App.isMobile) {
      this.instance.webViewClose()
    } else {
      this.push(Storage.instance, 'pinActivity')
    }
  }

  static jumpOtherApp (urlName) {
    this.instance.openNewPageWithToolbar(Url[urlName])
  }

}
