<template>
  <div class="count_style">
      <!-- <span>{{hours[0]}}</span><span>{{hours[1]}}</span>天<span>{{minutes[0]}}</span><span>{{minutes[1]}}</span>时<span>{{seconds[0]}}</span><span>{{seconds[1]}}</span>分 -->
      <div class="daojishi" >距活动开始 <span class="ziju">
             <span class="number">{{repair_zero(days)}}</span>
             天
             <span class="number">{{repair_zero(hours)}}</span>
             小时
             <span class="number">{{repair_zero(minutes)}}</span>
             分</span></div> 
  </div>
</template>
<script>
import moment from "moment"
export default {
    name: 'CountDown',
    props: ['date'],
    data () {
      return {
          hours:"00",
          minutes:"00",
          days:"00",
          dateVlaue:+this.date,
          timer:null,
      }
    },
    computed:{
    },
    created(){
    },
    mounted(){
        // this.dateVlaue = this.date;
        this.last_time();
    },
    methods: {
        last_time() {
            this.timer = null;
            // this.jisuan();
            this.timer = setInterval(this.jisuan,1000);  
        },
        jisuan(){
            let m1 = moment();
            let m2 = moment(this.date*1000)
            var du = moment.duration(m2 - m1);
            // this.days = du.get('days');
            this.days = m2.diff(m1,"days");
            this.hours = du.get('hours');
            this.minutes = du.get('minutes');
            if(this.days<=0 && this.hours<=0 && this.minutes<=0) {
                // return "已超时"
                 clearInterval(this.timer);
            }else {
            }
            
        },
        repair_zero(num){
            var len=num.toString().length,n=2;
            while(len < n){
                num ="0" + num;
                len++;
            }
            return num;
        },
    }
};
</script>
<style lang="scss" scoped>
    .daojishi{
        height:0.24rem;
        font-size:0.24rem;
        font-family:PingFang-SC;
        font-weight:500;
        color:rgba(102,102,102,1);
        line-height:0.24rem;
        margin-top: 0.32rem;
    }
    .ziju{
        letter-spacing: 0.05em;
        margin-left: 0.1rem;
    }
    .number{
        letter-spacing: 0em!important;
        font-size:0.24rem;
        font-family:PingFang-SC;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:0.24rem;
    }
   
</style>

