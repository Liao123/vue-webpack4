import App from './App.class.js'
export default class  Login {
  constructor() {
    this.data = null;
  }
  static isLogin() {
    App.params = '{}';
    let obj = App.params;
    if (obj.hasOwnProperty('uuid')) {
      if(!obj.uuid){
        return location.href = 'pandabuyer://router.pandabuyer.com/pb_other/login';
      }else{
        return true
      }
    } else {
      return location.href = 'pandabuyer://router.pandabuyer.com/pb_other/login';
    }
  }
  

}



