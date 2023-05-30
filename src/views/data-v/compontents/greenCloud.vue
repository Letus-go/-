<script>
import {defineComponent} from 'vue'
import * as echarts from "echarts";
import "echarts-wordcloud";
import {getWordCloud} from "@/views/home/compontents/homeHttp";
import {getAgoDay} from "@/formatTime";
import {cloud} from "@/views/home/compontents/wordCloud";

export default defineComponent({
    name: "greenCloud",
    mounted() {
        getWordCloud(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.keywords = res.data.map(item => {
                return {
                    name: item.x,
                    value: item.value
                }
            })
            this.chart = echarts.init(document.getElementById("green"));
            this.chart.setOption(cloud(this.keywords));
        })
    },
})
</script>

<template>
    <div class="opinionTrends">
        <p>词云</p>
        <div style="width: 300px;height: 200px">
            <div id="green" style="width:80%;height: 80%;cursor: default;"></div>
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

  #green {
    margin: auto;
  }
}
</style>