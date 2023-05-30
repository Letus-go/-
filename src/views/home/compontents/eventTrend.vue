<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import {getAgoDay} from "@/formatTime";
import {getEventTrend} from "@/views/home/compontents/homeHttp";
import {trend} from "@/views/home/compontents/eventTrend";

export default defineComponent({
    name: "eventTrend",
    data() {
        return {
            trendDate: []
        }
    },
    mounted() {
        getEventTrend(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.trendDate=res.data
            let chartDom = document.getElementById('trend');
            let myChart = echarts.init(chartDom);
            myChart.setOption(trend(this.trendDate));
        })
    }
})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            事件趋势
        </div>
        <div class="content">
            <div id="trend" style="width: 600px;height: 400px"></div>
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
    height: 404.8px;
    margin-top: 10px;

    #trend {
      margin: auto;
    }
  }
}
</style>