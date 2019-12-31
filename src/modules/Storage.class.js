export default class Storage {

  constructor () {
    this._instance = null
    this._home = null
    this._haggleDetail = null
  }


  static set instance (instance) {
    this._instance = instance
  }

  static get instance() {
    return this._instance
  }

  static get home () {
    return this._home
  }

  static set home (home) {
    this._home = home
  }

  static get haggleDetail() {
    return this._haggleDetail
  }

  static set haggleDetail(haggleDetail) {
    this._haggleDetail = haggleDetail
  }
}
