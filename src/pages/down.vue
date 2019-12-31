<template>
  <div class="wh">
    <img class="logo" src="../assets/imgs/title@3x.png" />
    <img class="icon" src="../assets/imgs/gift@3x.png" />

    <div class="bottomImg">
      <div class="pr">
        <div class="requ" @click="requClick()"></div>
        <img class="w100" src="../assets/imgs/bg@3x.png" />
      </div>
    </div>
    <div class="share" v-show="lijixiazai" @click="hideShare()">
      <img class="share-text" src="../assets/imgs/pic_lyqdk@2x.png" />
    </div>
    <cube-popup type="my-popup" :mask="false" ref="myPopup2">{{yanzhengmaMessage}}</cube-popup>
  </div>
</template>

<script>
import comm from "../comm/comm.js";
export default {
  name: "down",
  data() {
    return {
      lijixiazai: false,
      yanzhengmaMessage:""
    };
  },
  mounted() {
    if (comm.isWeiXin) {

    }else{
      if (comm.isIhone) {
      } else {
        this.requClick();
      }
    }
  
  },
  methods: {
    showPopup(data) {
      this.yanzhengmaMessage = data;
      const component = this.$refs.myPopup2;
      component.show();
      setTimeout(() => {
        component.hide();
      }, 2000);
    },
    down() {
      location.href =
        "https://res.pandabuyer.net/download/platformapi/startApp/pandabuyer.apk";
    },
    requClick() {
      if (comm.isWeiXin) {
        if (comm.isIhone) {
          location.href =
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.shuniao.pandabuyer";
        }
        if (comm.isAndroid) {
          this.showShare();
        }
      } else {
        if (comm.isIhone) {
          location.href =
        "https://a.app.qq.com/o/simple.jsp?pkgname=com.shuniao.pandabuyer";
        }
        if (comm.isAndroid) {
          this.down();
        }
      }
    },
    hideShare() {
      this.lijixiazai = false;
    },
    showShare() {
      this.lijixiazai = true;
    }
  },
  components: {}
};
</script>
<style >
  .cube-my-popup .cube-popup-content {
      padding: 0.6rem 0.2rem;
      font-size: 0.28rem;
      color: #fff;
      border-radius: 0.1rem;
      background-color: rgba(0,0,0,.8);
  }
</style>
<style scoped>
.share-text {
  width: 5rem;
  float: right;
  margin-right: 0.76rem;
  margin-top: 1.3rem;
}
.share {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 10;
}
.requ{
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
.icon {
  width: 5.12rem;
  height: 3.93rem;
  margin: auto;
  margin-top: 1.69rem;
  display: block;
}
.logo {
  width: 5.03rem;
  height: 1.29rem;
  margin: auto;
  margin-top: 1.41rem;
  display: block;
}
.wh {
  width: 100%;
  height: 100%;
}
.bottomImg {
  position: absolute;
  bottom: 0;
  left: 0;
  /* width: 100%; */
  font-size: 0;
}
.w100 {
  width: 100%;
}
.pr {
  position: relative;
}
.requ {
  position: absolute;
  bottom: 16%;
  /* background-color: red; */
  width: 46%;
  height: 16%;
  left: 27%;
}
</style>
