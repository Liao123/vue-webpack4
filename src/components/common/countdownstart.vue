<template>
    <div class="count_style">
      <!-- <span>{{hours[0]}}</span><span>{{hours[1]}}</span>天<span>{{minutes[0]}}</span><span>{{minutes[1]}}</span>时<span>{{seconds[0]}}</span><span>{{seconds[1]}}</span>分 -->
        <div class="daojishi" >
            <span class="ziju">
                <span class="number"><i>{{days[0]}}</i><i>{{days[1]}}</i></span>
                天
                <span class="number"><i>{{hours[0]}}</i><i>{{hours[1]}}</i></span>
                时
                <span class="number"><i>{{minutes[0]}}</i><i>{{minutes[1]}}</i></span>
                分
            </span>
        </div> 
    </div>
</template>
<script>
import moment from "moment"
import { evaluate } from 'mathjs'
import date from 'date-and-time';
export default {
    name: 'CountDownStart',
    props: ['dates'],
    data () {
      return {
          hours:"00",
          minutes:"00",
          days:"00",
          dateVlaue: this.dates,
          timer:null,
      }
    },
    computed:{
    },
    created(){
        
    },
    mounted(){
        this.last_time();
    },
    methods: {
        last_time() {
            this.timer = null;
            // this.jisuan();
            this.timer = setInterval(this.jisuan,1000);
        },
        jisuan(){
            if (this.dates) {
                let m1 = moment();
                let m2 = moment(this.dates*1000)
                var du = moment.duration(m2 - m1, 'ms');
                this.days = this.repair_zero(m2.diff(m1,"days"))+ "";
                this.hours = this.repair_zero(du.get('hours'))+ "";
                this.minutes = this.repair_zero(du.get('minutes')) + "";
            }
            // console.log(m1,m2,this.minutes,du)
            if(this.days<=0 && this.hours<=0 && this.minutes<=0) {
                // return "已超时"
                clearInterval(this.timer);
            }else {
            }

        },
        repair_zero(num){
            var len = num.toString().length,n=2;
            while(len < n){
                num ="0" + num;
                len++;
            }
            return num;
        },
    },
    watch: {
        dates: function (time) {
            this.dates = time
            this.jisuan()
        }
    },
    filters: {
        time (num) {
            var len = num.toString().length,n=2;
            while(len < n){
                num ="0" + num;
                len++;
            }
            return num;
        }
    }
};
</script>
<style lang="scss" scoped>
    .daojishi{
        font-size:0.2rem;
        font-family:PingFang-SC;
        font-weight:500;
        color:#FFFFFF;
        width:2.5rem;
        height:0.36rem;
        background:rgba(200,37,25,1);
        border-radius:0.26rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ziju{
        letter-spacing: 0.05em;
        margin-left: 0.1rem;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .number{
        letter-spacing: 0em!important;
        font-size:0.24rem;
        font-family:PingFang-SC;
        font-weight:bold;
        color:#C82519;
        line-height:0.24rem;
        i{
            display: inline-block;
            font-style: normal;
            padding: 0.03rem;
            background:rgba(255,255,255,1);
            border-radius:0.03rem;
            margin-left: 0.05rem;
            text-align: center;
        }
    }
   
</style>

