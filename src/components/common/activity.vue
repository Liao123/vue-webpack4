<template>
  <div class="conent">
    <div class="activity">
      <div class="activity-top" @click="godetail(list.activityId)">
        <img v-if="list.brandLogoUrl" class="icon-logo" v-lazy="list.brandLogoUrl" />
        <div class="title">
          <span class="title-span">{{list.brandName}}</span>
          <div class="title-biaoQian">
            <!-- <p v-show="list.coupon" class="biaoQian-coupon">{{list.coupon}}</p> -->
            <span :class="item.type == 1 ? 'activity-biaoQian': 'biaoQian-coupon'" :key="index" v-for="(item,index) in list.tagList">{{item.tagName}}</span>
          </div>
        </div>
      </div>
      <div class="jianju"></div>
      <goods v-if="list.productList[0]" class="sp sp-noleft" :activityId="list.activityId" :list="list.productList[0]"></goods>
      <goods v-if="list.productList[1]" class="sp" :activityId="list.activityId" :list="list.productList[1]"></goods>
      <goods v-if="list.productList[2]" class="sp" :activityId="list.activityId" :list="list.productList[2]"></goods>
      <div class="footer"> 
        <daojishi v-if="list.startTime < currentTime" :date="(list.endTime)"></daojishi>
        <daojishistart v-if="list.startTime >= currentTime" :date="(list.startTime)"></daojishistart>
        <div class="button-huichang"  @click.stop="goHDXQ(list.activityId)">
          <i></i>
          <span>转发</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import daojishi from "@/components/common/daojishi.vue";
import daojishistart from "@/components/common/daojishistart.vue";
import Router from "@/modules/Router.class.js";
import goods from "@/components/common/goods.vue";
export default {
  name: "activity",
  data() {
    return {
      title: 12,
      date: 86400, //倒计时
      currentTime:null,//当前时间
    };
  },
  components: { goods, daojishi, daojishistart },
  created() {},
  mounted() {
    this.currentTime = Math.round(new Date().getTime()/1000).toString();
  },
  methods: {

    goHDXQ(id) {
      location.href = 'pandabuyer://router.pandabuyer.com/pb_home/forward_brand?ActivityId=' + id;
    },
    godetail(id) {
      location.href = 'pandabuyer://router.pandabuyer.com/pb_home/brand_detail?ActivityId=' + id;
    }
  },
  props: ["list", "timeType"]
};
</script>
<style lang="scss" scoped>
.conent {
  padding-top: 0.24rem;
}
.sp {
  margin-left: 0.09rem;
}
.sp-noleft {
  margin-left: 0rem !important;
}
.jianju {
  width: 100%;
  height: 0.32rem;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 0.3rem;
  height: 0.56rem;
}
.button-huichang {
  width: 1.34rem;
  height: 0.6rem;
  background: #c82519;
  border-radius: 0.32rem;
  border: 0.01rem solid #c82519;
  font-size: 0.26rem;
  font-family: PingFang-SC;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  i{
    width: 0.3rem;
    height: 0.3rem;
    background: url('../../assets/imgs/template/icon_sy_zhuanfa.png') no-repeat;
    background-size: 100% 100%;
    margin-right: 0.1rem;
  }
}
.activity {
  // width: 7.02rem;
  min-height: 5.08rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem;
  padding: 0.24rem 0.24rem 0.4rem 0.24rem;
  font-size: 0;
}
.icon-logo {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.04rem;
  border: 0.01rem solid rgba(228, 228, 228, 1);
  vertical-align: top;
}
.activity-top {
  width: 100%;
  min-height: 0.8rem;
  font-size: 0px;
  display: flex;
  justify-content: start;
  flex: 1;
}
.title {
  min-height: 0.8rem;
  // display: inline-block;
  margin-left: 0.16rem;
  // max-width: 4rem;
  display: flex;
  flex-direction: column;
}
.title-span {
  font-size: 0.28rem;
  font-family: Helvetica;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 0.28rem;
  vertical-align: top;
  margin-bottom: 0.07rem;
  display: block;
  word-wrap: break-word;
  width: 5rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.title-biaoQian {
  vertical-align: bottom;
  width: 5.51rem;
  font-size: 0.28rem;
  font-family: Helvetica;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  word-break: keep-all;
  overflow: hidden;
  overflow-x: scroll;
  display: flex;
  justify-content: start;
}
.title-biaoQian::-webkit-scrollbar {
  display: none;
}
.biaoQian-coupon{
  background: url('../../assets/imgs/icon_mjq.png') no-repeat;
  background-size: 100% 100%;
  padding: 0.08rem 0.2rem;
  font-size:0.24rem;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:#F7671F;
  margin-right: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activity-biaoQian {
  padding: 0.08rem 0.2rem;
  border-radius: 0.04rem;
  border: 1px solid rgba(217, 172, 103, 1);
  margin-right: 0.1rem;
  font-size: 0.22rem;
  font-family: PingFang-SC;
  font-weight: 500;
  color: rgba(217, 172, 103, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

