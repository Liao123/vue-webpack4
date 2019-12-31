import md5 from 'md5'
export default class Sign {
  static create(postData) {
    delete postData.sign;

    var newKeyData = Object.keys(postData).sort();
    var str = '';
    for (var i = 0; i < newKeyData.length; i++) {
      str += newKeyData[i] + '=' + (postData[newKeyData[i]]+'')+ '&';
    }
    str = str.substring(0, str.length - 1);

    var secretKeyDict = {
      h5: 'j&7KHW#EImuXRDMbS2M2r8iw#r4HAyGNO@RsFeGU'
    };

    var k = secretKeyDict[postData.appKey];

    var signStr = k + str + k;
    var sign = md5(signStr);
    return sign;
  }

}
