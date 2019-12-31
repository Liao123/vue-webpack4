import axios from 'axios'
import Url from './Url.class.js'
import Sign from './Sign.class.js'
import Account from './Account.class.js'
import App from './App.class.js'
import Storage from './Storage.class.js'
//import Router from './Router.class.js'
//import { log } from 'util';

const Environment =  {
  'local': 'http://192.168.2.109:88',
  'test': 'http://test-api.uhui.club',
  'online': 'https://api.pandabuyer.net'
}

export default class Http {
  constructor () {
    this.successCallback = null
    this.failCallback = null
    this.defaultCallback = null
  }
  
  static send (args) {
    let instance = new Http()
    args.data = args.data ? args.data : {}
    // alert(App.isMobile)
    if (App.isApp) {
      App.params = args.data
      args.data = App.params
      // alert(JSON.stringify(args.data));
    } else {
      args.data = {
        ...args.data,
        ...Account.info, 
      }

      args.data.sign = Sign.create(args.data)
    }
    console.log(args.data);

    let datas = new FormData()
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded:charset=UTF-8',
    }

    for (const key in args.data) {
      datas.append(key, args.data[key])
    }

    // alert(1)
    axios({
      url: Environment[process.env.VUE_APP_CURRENTMODE=='production' ? 'online' :'test'] + Url[args.url],
      method: 'post',
      // baseURL: Environment['test'],
      // withCredentials: true,
      headers: headers,
      data: datas
    }).then(response => {
      // alert(JSON.stringify(response.data))
      instance.dispense(response.data)
      if (instance.defaultCallback) instance.defaultCallback()
    }).catch(error => {
      // alert(JSON.stringify(error))

      if (error.response) {
        if (error.response.data) {
          if (error.response.data.msg) {
          }
        }
      }
      if (instance.defaultCallback) instance.defaultCallback()
    })
    return instance
  }
  


  dispense (response) {
    switch (response.code) {
      case '00':
        if (this.successCallback) this.successCallback(response.result)
        break
      default:
        if (this.failCallback) this.failCallback(response)
        Storage.instance.toast(response.msg)
    }
  }
  success (callback) {
    this.successCallback = callback
    return this
  }
  fail (callback) {
    this.failCallback = callback
    return this
  }
  default (callback) {
    this.defaultCallback = callback
    return this
  }
}
