import axios from 'axios'
import Url from './Url.class.js'

const Environment =  {
  'local': 'http://192.168.2.109:88',
  'test': 'http://test-api.uhui.club',
  'online': 'https://api.pandabuyer.net'
}
export default class Https {
  constructor () {
    this.successCallback = null
    this.failCallback = null
    this.errorCallback = null
    this.defaultCallback = null
  }

  
  static sendSync(args) {
    return new Promise((resolve, reject) => {
      axios(this.formatOption(args)).then(response => {
        switch (response.data.code) {
          case 200:
            resolve(response.data)
            break
          case 2000:
            delete localStorage.token
          default:
            reject(response.data);
        }
      }).catch(error => {
        console.log(error);
      })
    })
  }

  static send (args) {
    let instance = new Https()
    axios(this.formatOption(args)).then(response => {
      
      instance.dispense(response.data)
      if (instance.defaultCallback) instance.defaultCallback()
    }).catch(error => {
      if (instance.defaultCallback) instance.defaultCallback(error)
    })
    return instance
  }

  static formatData(data) {
    let datas = new FormData()
    for (const key in data) {
      datas.append(key, data[key])
    }
    return datas
  }

  static formatOption(args) {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded:charset=UTF-8',
    }
    if (args.headers) Object.assign(headers, args.headers)


    let option = {
      url: Url[args.url],
      method: args.method.toLowerCase(),
      baseURL: Environment['test'],
      headers: headers
    }
    console.log(JSON.stringify(option));
    if (args.tail && args.tail.length > 0) option.url = `${option.url}/${args.tail.join('/')}`
    switch (option.method) {
      case 'get':
        option.params = args.data
        break
      default:
        option.data = this.formatData(args.data)
        break
    }
    
    if (headers['Content-Type'] == 'application/json') option.data = args.data
    return option
  }
  
  dispense(response) {
    switch (response.code) {
      case '00':
        if (this.successCallback) this.successCallback(response.data)
        break
      default:
        if (this.failCallback) this.failCallback(response)
    }
  }

  success(callback) {
    this.successCallback = callback
    return this
  }

  fail(callback) {
    this.failCallback = callback
    return this
  }

  error(callback) {
    this.errorCallback = callback
    return this
  }

  default (callback) {
    this.defaultCallback = callback
    return this
  }
}