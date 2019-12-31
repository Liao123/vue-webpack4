<template>
    <div class="goods-page" @click.stop="goSPXQ(list.productId)">
      <img class="icon-goods" v-lazy="list.imageUrl" />
      <div class="goods-title">{{list.itemNo}}.{{list.productName}}</div>
      <div class="goods-price">
        ￥{{list.agentBuyPrice}}
        <span class="goods-oldprice">省赚{{list.saveAmount}}元</span>
      </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import numeral from 'numeral';
import { evaluate } from 'mathjs';
import Router from "@/modules/Router.class.js";
export default {
  name: "fenlei",
  data() {
    return {
      title: 12
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    goSPXQ(id){
      // Router.go('details', {
      //   productId:id,activityId:this.activityId
      // })
      location.href = "pandabuyer://router.pandabuyer.com/pb_home/brand_detail?ActivityId="+ this.activityId +"&ProductId=" + id;
    },
  },
    filters: {
        //转价格
        price(price) {
          price = evaluate(`${price || 0} / 100`)
          let format = price.toString().includes('.') ? '0.00' : '0'
          return numeral(price).format(format)
        },
    },
  props:["list","activityId"]
};
</script>
<style lang="scss" scoped>
.fn0{
    font-size: 0;
}
.goods-page {
  font-size: 0px;
  display: inline-block;
  vertical-align: top;
//   margin-left: 0.09rem;
}
// .goods-page:first-child{
//     margin-left: 0rem!important;
// }
.icon-goods {
  width: 2.12rem;
  height: 2.12rem;
  background: rgba(246, 226, 226, 1);
  border-radius: 0.04rem;
}
.goods-title {
  width: 2rem;
  font-size: 0.24rem;
  font-family: PingFang-SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.08rem;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
}
.goods-price {

  font-size: 0.28rem;
  font-family: DINAlternate;
  font-weight: bold;
  color: rgba(200, 37, 25, 1);
  margin-top: 0.15rem;
  width: 2.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods-oldprice {
  font-size: 0.2rem;
  font-family: PingFang-SC;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
</style>

