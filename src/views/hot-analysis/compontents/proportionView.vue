<script>
import {defineComponent} from 'vue'
import * as echarts from "echarts";
import {getSourceFrom} from "@/views/home/compontents/homeHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "mediaView",
    data() {
        return {
            newsdata:[],
            medadata:[]
        }
    },
    methods: {
        chart(type, datas, color) {
            var chartDom = document.getElementById(type);
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                // tooltip: {
                //     trigger: 'item',
                //     formatter: '{b}: ({d}%)' //自定义显示格式(b:name, c:value, d:百分比)
                // },
                color: color,
                series: [
                    {
                        // name: 'Access From',
                        type: 'pie',
                        radius: ['60%', '80%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            position: 'center',
                            formatter: '{b}\n{d}%'
                        },
                        emphasis: {
                            scale: false//不缩放
                        },
                        data:datas
                    }
                ]
            };

            option && myChart.setOption(option);

        },
    },
    mounted() {
        getSourceFrom(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res.data[0])
            this.newsdata = [
                {value: res.data[0].value, name: res.data[0].name},
                {value: res.data[1].value, name: res.data[1].name},
            ]
            this.medadata = [
                {value: res.data[1].value, name: res.data[0].name},
                {value: res.data[0].value, name: res.data[1].name},
            ]
            this.chart('news', this.newsdata, ['#3aa1ff', '#f2f4f6'])
            this.chart('meda', this.medadata, ['#6dd48c', '#f2f4f6'])
        })
    }
})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            媒体来源占比
        </div>
        <div class="content">
            <a-row>
                <a-col :span="12" class="aRow">
                    <div id="news" style="width: 312px;height: 128px"></div>
                </a-col>
                <a-col :span="12" class="aRow">
                    <div id="meda" style="width: 312px;height: 128px"></div>
                </a-col>
            </a-row>
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
  margin: 20px 0 20px 0px;

  .title {
    margin-left: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;
    border-bottom: 1px solid #e8e8e8;
  }

  .content {
    width: 100%;
    height: 388.8px;
    margin-top: 25px;
  }
}
</style>