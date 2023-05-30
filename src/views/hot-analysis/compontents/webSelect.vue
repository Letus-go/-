<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import {getWeb} from "@/views/hot-analysis/hotHttp";
import {formatTime2, getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "webSelect",
    data() {
        return {
            chartDataX: [],
            webData: [],

        }
    },
    created() {
        getWeb(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.webData = res.data.websiteList.map(item => item.value)
            // console.log(this.webData)
            // x轴
            this.chartDataX = res.data.chartData.map(item => {
                return formatTime2(item.x)
            })
            // console.log(this.chartDataX)
            // y轴
            this.chartData = res.data.websiteList.reverse().map((item, index) => {
                return {
                    name: item.value,
                    type: 'line',
                    // stack: 'Total',
                    data: res.data.chartData.map(itemY => {
                        return itemY[`y${index+1}`]
                        // if (index === 0) {
                        //     return Number(itemY.y1)
                        // } else if (index === 1) {
                        //     return Number(itemY.y2)
                        // } else if (index === 2) {
                        //     return Number(itemY.y3)
                        // } else {
                        //     return Number(itemY.y4)
                        // }
                    }),
                    smooth: true
                }
            })
            // console.log(this.chartData)
            var chartDom = document.getElementById('webSelect');
            var myChart = echarts.init(chartDom);
            myChart.setOption(this.chart(this.webData.reverse(), this.chartDataX, this.chartData));
        })
    },
    methods: {
        chart(webData, chartDataX, chartData) {
            // console.log(chartDataX)
            return {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: webData
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '13%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        // saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: chartDataX
                },
                yAxis: [
                    {
                        type: 'value',
                        // name:'左侧Y轴名称',
                        min: 0,
                        max: 300,
                    },
                    {
                        type: 'value',
                        // name:'右侧Y轴名称',
                        min: 0,
                        max: 300,
                        // interval: 10,
                        // splitNumber: 6, //设置坐标轴的分割段数
                    },
                ],

                dataZoom: [
                    {
                        type: 'inside',
                        start: 0,
                        end: 100//默认全部显示
                    },
                    {
                        start: 0,
                        end: 10
                    }
                ],
                series: chartData
            };
        }
    }
    ,
})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            网站统计
        </div>
        <div class="content">
            <div id="webSelect" style=" width:100%;height:460px"></div>
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

  .title {
    margin-left: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;

  }

  .content {
    width: 100%;
    height: 470px;
    margin-top: 10px;


  }
}
</style>