<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
import chinas from '../../../../public/echartsMap.json'
import {china} from '../../../views/hot-analysis/compontents/china'
import {getAddress} from "@/views/hot-analysis/hotHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "statiView",
    data() {
        return {
            datas:[]
        }
    },
    created() {
        getAddress(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res.data)
            this.datas = res.data.map(item => {
                return {
                    // name: item.word.replace('省','').replace('市',''),
                    name: item.word.slice(0, 2),
                    value: item.number,
                }
            })
            echarts.registerMap("china", chinas);
            let chinaMap = echarts.init(document.getElementById("mapChart"));
            window.onresize = chinaMap.resize; // 窗口或框架被调整大小时执行chinaMap.resize
            chinaMap.setOption(china(this.datas))
        })
    },

})
</script>


<template>
    <div class="stati_data">
        <div class="title"><span>统计数据</span></div>
        <div class="map">
            <p class="map_title">数据总量</p>
            <p class="map_number">1483112</p>
            <div id="mapChart" style="width: 100%;height: 70%;"></div>
        </div>
    </div>
</template>


<style scoped lang="less">
.stati_data {
  width: 100%;
  height: 100%;
  border: 10px solid transparent;
  border-image: url(@/assets/screen-border.png) 30 round;

  .title {
    height: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(@/assets/article.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    span {
      font-size: 18px;
      font-weight: 700;
      background-image: -webkit-gradient(linear, left top, right top, color-stop(0, #0072ff), color-stop(.4, #00eaff), color-stop(1, #01aaff));
      color: transparent;
      -webkit-background-clip: text;
    }
  }

  .map {
    width: 90%;
    height: 92%;
    margin: 2% auto;
    text-align: center;
    background-image: url(@/assets/mapbg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .map_title {
      color: white;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .map_number {
      color: #20FDFA;
      font-size: 36px;
    }
  }
}

</style>