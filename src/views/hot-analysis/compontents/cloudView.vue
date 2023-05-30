<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import "echarts-wordcloud";
import {getWordCloud} from "@/views/home/compontents/homeHttp";
import {getAgoDay} from "@/formatTime";
import {cloud} from "@/views/home/compontents/wordCloud";

export default defineComponent({
    name: "cloudView",
    data() {
        return {
            keywords:[]
        }
    },
    mounted() {
        getWordCloud(getAgoDay(10), getAgoDay(),this.$store.state.keyWords).then(res=>{
            // console.log(res)
            this.keywords=res.data.map(item=>{
                return {
                    name:item.x,
                    value:item.value
                }
            })
            this.chart = echarts.init(document.getElementById("cloud"));
            this.chart.setOption(cloud(this.keywords));
        })
    }


})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            词云
        </div>
        <div class="content">
            <div id="cloud" style="width:230px;height:280px"></div>
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
  width: 720px;
  height: 350px;
    margin-left: 10px;

  .title {
    margin-left: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
      border-bottom: 1px solid #e8e8e8;
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