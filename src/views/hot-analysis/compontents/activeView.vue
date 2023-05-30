<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import {geActive} from "@/views/hot-analysis/hotHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "activeView",
    data(){
      return{
          x:[],
          y:[]
      }
    },
    mounted() {
        // console.log(this.$store.state.keyWords)
        var chartDom = document.getElementById('active');
        var myChart = echarts.init(chartDom);
        geActive(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
                // console.log(res.data.map(item => item.x))
                // console.log(res.data.map(item => item.y))
            this.x=res.data.map(item => item.x)
            this.y=res.data.map(item => item.y)
                myChart.setOption(this.table(this.x,this.y));
            }
        )
    },
    methods: {
        table(x,y) {
            return {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: x,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        // name: 'Direct',
                        type: 'bar',
                        // label:{formatter: '{b}: {@score}'},
                        barWidth: '50%',
                        data: y,
                        itemStyle: {
                            // normal是柱状图的正常样式
                            normal: {
                                color: '#1890ff',
                            },

                        },
                    }
                ]
            };
        }
    },

})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            媒体活跃度
        </div>
        <div class="content">
            <div id="active" style="width: 600px;height: 400px"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
.hotTopic {
  padding: 20px 0 20px;
  border: 1px solid #e8e8e8;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  background: #fff;
  margin: 20px 0 20px 10px;

  .title {
    margin-left: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
  }

  .content {
    width: 100%;
    height: 404.8px;
    margin-top: 10px;

    #trend {
      margin: auto;
    }
  }
}
</style>