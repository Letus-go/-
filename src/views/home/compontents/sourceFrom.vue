<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts';
import {getAgoDay} from '../../../formatTime'
import {getSourceFrom} from "@/views/home/compontents/homeHttp";
import {source} from "@/views/home/compontents/sourceFrom";


export default defineComponent({
    name: "sourceClassification",
    data() {
        return {}
    },
    methods: {},
    // created() {
    //
    //     getSourceFrom(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
    //         let chartDom = document.getElementById('main');
    //         let myChart = echarts.init(chartDom);
    //         myChart.setOption(source(res.data));
    //     })
    // },
    mounted() {
        // console.log(this.$store.state.keyWords)
        getSourceFrom(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            let chartDom = document.getElementById('main');
            let myChart = echarts.init(chartDom);
            myChart.setOption(source(res.data));
        })
    },
})
</script>


<template>
    <div class="hotTopic">
        <div class="title">
            来源分类
        </div>
        <div class="content">
            <div id="main" style="width: 300px;height: 400px"></div>
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

    #main {
      margin: auto;
    }
  }
}
</style>