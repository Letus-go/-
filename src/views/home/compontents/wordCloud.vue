<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import "echarts-wordcloud";
import {getAgoDay} from "@/formatTime";
import {getWordCloud} from "@/views/home/compontents/homeHttp";
import {cloud} from "@/views/home/compontents/wordCloud";

export default defineComponent({
    name: "wordCloud",
    data() {
        return {
            keywords: []
        }
    },
    mounted() {
        getWordCloud(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.keywords = res.data.map(item => {
                return {
                    name: item.x,
                    value: item.value
                }
            })
            this.chart = echarts.init(document.getElementById("cloud"));
            this.chart.setOption(cloud(this.keywords));
            // var ecConfig = echarts.config;
            this.chart.on('click', eConsole);

            function eConsole(param) {
                // console.log(param)
                window.location.href = `/hot-analysis?searchKeyword="${param.data.name}"`;
                // if (typeof param.seriesIndex != 'undefined') {
                //     switch (param.name) {//简单的switch，大家应该能够明白怎么设置
                //         case "发展":
                //             // window.location.href = "http://www.sina.com";
                //             // window.open("http://www.sina.com", "_blank");//在新页面打开
                //             break;
                //         default:
                //             break;
                //     }
                // }
            }

        })
    }
})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            热词词云
        </div>
        <div class="content">
            <div id="cloud" style="width: 300px;height: 400px"></div>
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

    #cloud {
      margin: auto;
    }
  }
}
</style>