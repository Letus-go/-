<script>
import {defineComponent} from 'vue'
import * as echarts from "echarts";
import {getSourceFrom} from "@/views/home/compontents/homeHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "mediaActivity",
    data() {
        return {
            data1: [],
        }
    },
    methods: {
        chart(data1) {
            return {
                legend: {
                    top: '30%',
                    left: '80%',
                    width: '100',
                    //默认为10
                    //2.主副标题之间的间距
                    itemGap: 20,
                    // 3.标题文本样式
                    text: '标题文本',
                    textStyle: {
                        //文字颜色
                        color: '#ccc',
                        //字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'bold',
                        //字体系列
                        fontFamily: 'sans-serif',
                        //字体大小
                        fontSize: 10
                    }

                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: ({d}%)' //自定义显示格式(b:name, c:value, d:百分比)
                },
                color:['#318ae3','#b31e15',],
                series: [
                    {
                        // name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '65%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        data: data1
                    }
                ]
            };
        }
    },
    mounted() {

        getSourceFrom(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res.data)
            this.data1 = res.data
            // this.data2 = res.data.map(item => item.percentage)
            var chartDom = document.getElementById('loopChart');
            var myChart = echarts.init(chartDom);
            myChart.setOption(this.chart(this.data1));
        })


    }
})
</script>

<template>
    <div class="mediaActivity">
        <p>媒体活跃占比</p>
        <div style="height: 250px;width: 350px">
            <div id="loopChart" style="width: 90%;height:100%;cursor: default;"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
.mediaActivity {
  padding-left: 10px;
  padding-right: 10px;

  p {
    height: 26.9px;
    color: #1efffb;
    font-size: 18px;
  }

  #loopChart {
    margin: auto;
  }
}
</style>