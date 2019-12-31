import Storage from './Storage.class.js'
import App from './App.class.js'
export default class Account {
  constructor() {
    this._desc = {};
  }
  
  static get info () {
    // let uuid = App.params.uuid ? App.params.uuid : null
    // let sessionId = App.params.sessionId ? App.params.sessionId : null
    return {
      appKey: "h5",
      source: "JxhOfficial",
      tstamp:(new Date()).valueOf(),
      version: 'v0.5.0',
      // uuid: "6527256284286423040",
      // sessionId: "6efa6eb700ba9725fe42f6fec9751ce3",
      // appKey: "h5",
      // uuid: uuid,
      // sessionId: sessionId,
      // source: "appstore",
    }
  }


  static get vip () {
    return !!parseInt(this._desc.isVipUser)
  }
  
  static get real () {
    return !!parseInt(this._desc.isReal)
  }
  
  static get times () {
    return parseInt(this._desc.userBonusTimes) || 0
  }

  static set desc (desc) {
    this._desc = desc
  }

  static clean () {
    this._desc = {
      isVipUser: false,
      isReal: false,
      userBonusTimes: 0,
    }
  }

}
