<template>
  <div class="conent">
    <div class="box-backgrounUrl" @click.stop="goHDXQ(list.id)">
      <img v-if="list.backgrounUrl" class="icon-backgrounUrl" v-lazy="list.backgrounUrl" />
    </div>
    <div class="activity" @click.stop="goHDXQ(list.id)">
      <div class="activity-top">
        <div class="title-biaoQian">
          <p v-show="list.coupon" class="biaoQian-coupon">{{list.coupon}}</p>
          <span class="activity-biaoQian" :key="index" v-for="(item,index) in list.tags">{{item.name}}</span>
        </div>
        <div class="title">
          <span class="title-span">{{list.name}}</span>
          <span class="title-description">{{list.description}}</span>
        </div>
      </div>
      <div class="jianju"></div>
      <goods v-if="list.products[0]" class="sp sp-noleft" :brandId="list.id" :list="list.products[0]"></goods>
      <goods v-if="list.products[1]" class="sp" :brandId="list.id" :list="list.products[1]"></goods>
      <goods v-if="list.products[2]" class="sp" :brandId="list.id" :list="list.products[2]"></goods>
      <div class="footer"> 
        <daojishi v-if="list.endTime && !timeType" :date="(list.endTime)"></daojishi>
        <daojishistart v-if="list.startTime && timeType" :date="(list.startTime)"></daojishistart>
        <div class="button-huichang">进入会场</div>
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
      date: 86400 //倒计时
    };
  },
  components: { goods, daojishi, daojishistart },
  created() {},
  mounted() {},
  methods: {
    goHDXQ(id) {
      // this.$router.push({
      //   name: "brand-activities",
      //   query: { activityId: id, codeId: localStorage.codeId }
      // });
      Router.go('brand-activities', { activityId: id });
    }
  },
  props: ["list", "timeType"]
};
</script>
<style lang="scss" scoped>
.conent {
  margin-top: 0.2rem;
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
  width: 1.54rem;
  height: 0.56rem;
  background: #c82519;
  border-radius: 0.32rem;
  border: 0.01rem solid #c82519;
  font-size: 0.26rem;
  font-family: PingFang-SC;
  font-weight: 500;
  color: white;
  line-height: 0.35rem;
  padding: 0.09rem 0.24rem 0.1rem 0.24rem;
  
}
.activity {
  width: 7.02rem;
  min-height: 5.08rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.2rem;
  padding: 0rem 0.24rem 0.4rem 0.24rem;
  font-size: 0;
}
.box-backgrounUrl{
  border-radius:0.2rem 0.2rem 0rem 0rem;
  width: 7.02rem;
  height: 2.4rem;
  position: relative;
  overflow: hidden;
  .icon-backgrounUrl {
    height: auto;
	  width: 100%;
  }
}
.activity-top {
  width: 100%;
  min-height: 0.8rem;
  font-size: 0px;
  margin-top: -0.3rem;
}
.title {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 0.24rem;
}
.title-span {
  font-size: 0.28rem;
  font-family: Helvetica;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 0.28rem;
  margin-bottom: 0.07rem;
  display: block;
  word-wrap: break-word;
}
.title-description {
  font-size: 0.26rem;
  font-family: Helvetica;
  color:rgba(102,102,102,1);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.title-biaoQian {
  width: 6rem;
  height: 0.5rem;
  position: relative;
  top: -0.1rem;
  margin-left: 0.24rem;
  vertical-align: bottom;
  font-size: 0.28rem;
  font-family: Helvetica;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  word-break: keep-all;
  overflow: hidden;
  overflow-x: scroll;
  padding-top: 0.1rem;
  display: flex;
  justify-content: start;
}
.title-biaoQian::-webkit-scrollbar {
  display: none;
}
.biaoQian-coupon{
  background: url('/static/images/icon_mjq_tc@2x.png');
  background-size: 100% 100%;
  padding: 0.1rem 0.2rem;
  font-size:0.24rem;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  margin-right: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activity-biaoQian {
  padding: 0.1rem 0.2rem;
  background:rgba(217,172,103,1);
  border-radius:0.04rem;
  margin-right: 0.1rem;
  font-size: 0.22rem;
  font-family: PingFang-SC;
  font-weight: 500;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

