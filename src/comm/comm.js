
export default class comm {

    // static get LinkType () {
    //   return "http://wap.jinxianghui.net"
    //   // return process.env.NODE_ENV == "pre" ? "http://wap.jinxianghui.net" : "http://youdai-test.bitker.cn"
    // }
    //领奖验证码
    static get isWeiXin () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    static get isIhone(){
        let u = navigator.userAgent;				
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isiOS;
    }
    static get isAndroid(){
        let u = navigator.userAgent;				
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端
        return isAndroid;
    }

    static get appUrl(){
        let url = process.env.VUE_APP_CURRENTMODE=='production' ? "https://wxuser.pandabuyer.net" : "http://test-m.uhui.club";				
        return url;
    }

  }
  