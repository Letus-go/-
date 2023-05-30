<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import {formatTime1, getAgoDay} from "@/formatTime";
import {getInfoTrend} from "@/views/data-v/dataHttp";

export default defineComponent({
    name: "opinionTrends",
    data(){
      return{
          dataX:[],
          dataY:[]
      }
    },
    created() {

        getInfoTrend(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res=>{
          // console.log(res)
          this.dataX=res.data.map(item=>formatTime1(item.x))
          this.dataY=res.data.map(item=>item.y)
          // console.log(this.dataY)
            var chartDom = document.getElementById('areaChart');
            var myChart = echarts.init(chartDom);
            myChart.setOption(this.echart(this.dataX,this.dataY));
      })
    },
    methods:{
        echart(x,y){
            return  {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: x,
                },
                yAxis: {
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis'
                },
                series: [
                    {
                        data: y,
                        type: 'line',
                        areaStyle: {}
                    }
                ]
            };
        }
    },

})
</script>

<template>
    <div class="opinionTrends">
        <p>舆情走势</p>
        <div style="height: 250px;width: 350px">
            <div id="areaChart" style="width: 90%;height: 100%;cursor: default;"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
.opinionTrends {
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  p {
    height: 27.1px;
    color: #1efffb;
    font-size: 18px;
  }

  #areaChart {
    margin: auto;
  }
}
</style>