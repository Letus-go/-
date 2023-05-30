<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import {getAgoDay} from "@/formatTime";
import {getFeeling} from "@/views/hot-analysis/hotHttp";

export default defineComponent({
    name: "feelingView",
    data() {
        return {
            keywords: 'NVYzU4gBLwfWH3mSb_aH',
            feelDatax: {},
            feelDatay: {},

        }
    },
    methods: {
        chart() {
            return {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: ({d}%)' //自定义显示格式(b:name, c:value, d:百分比)
                },
                // legend: {
                //     top: '50%',
                //     left: '80%',
                //     formatter: '{name}:{value}',
                // },
                color: ['#3aa1ff', '#36cbcb'],
                series: [
                    {
                        // name: 'Access From',
                        type: 'pie',
                        radius: ['30%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            scale: false//不缩放
                        },
                        data: [
                            {value: this.feelDatax.y, name: this.feelDatax.x},
                            {value: this.feelDatay.y, name: this.feelDatay.x},
                        ]
                    }
                ]

            }
        }
    },
    created() {
        getFeeling(getAgoDay(10), getAgoDay(), this.keywords).then(res => {
            // console.log(res)
            this.feelDatax = res.data[0]
            this.feelDatay = res.data[1]
            var chartDom = document.getElementById('felling');
            var myChart = echarts.init(chartDom);
            myChart.setOption(this.chart());
        })
    }

})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            情感分析
        </div>
        <div class="content">
            <div id="felling" style="width: 400px;height: 380px;"></div>
            <ul class="fell_info">
                <li><span class="span1"></span><span class="span2">{{ feelDatax.x }}</span><span>|</span><span
                        class="span3">{{ ((feelDatax.y / (feelDatax.y + feelDatay.y)).toFixed(2) ).toString().slice(2)}}%</span><span
                        class="span4">{{ feelDatax.y }}</span></li>
                <li><span class="span1 span11"></span><span class="span2">{{ feelDatay.x }}</span><span>|</span><span
                        class="span3">{{ ((feelDatay.y / (feelDatax.y + feelDatay.y)).toFixed(2)).toString().slice(2) }}%</span><span
                        class="span4">{{ feelDatay.y }}</span></li>
            </ul>
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
  width: 468px;
  height: 350px;


  .title {
    margin-left: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    border-bottom: 1px solid #e8e8e8;
  }

  .content {
    width: 100%;
    height: 350px;
    margin-top: 10px;
    position: relative;

    #felling {
      margin: -74px -73px;
      padding: 10px 10px;
    }

    .fell_info {
      position: absolute;
      top: 60%;
      right: 20px;
      min-width: 200px;
      margin: 0 20px;
      padding: 0;
      list-style: none;
      transform: translateY(-50%);

      li {
        height: 22px;
        margin-bottom: 16px;
        line-height: 22px;
        cursor: pointer;
        font-size: 14px;

        span {
          margin-left: 10px;
        }

        .span1 {
          position: relative;
          top: 0;
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-right: 8px;
          border-radius: 8px;
          background-color: rgb(24, 144, 255);
        }

        .span11 {
          background-color: rgb(19, 194, 194);
        }

        .span2 {
          color: rgba(0, 0, 0, .65);
        }

        .span3 {
          color: rgba(0, 0, 0, .45);
        }

        .span4 {
          margin-left: 40px;
        }
      }
    }
  }
}
</style>