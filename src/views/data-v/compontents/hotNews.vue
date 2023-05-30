<script>
import {defineComponent} from 'vue'
import Swiper from 'swiper'
import "swiper/css/swiper.css";
import {formatTime, getAgoDay} from "@/formatTime";
import {getHotInfo} from "@/views/data-v/dataHttp";

export default defineComponent({
    name: "hotNews",
    data() {
        return {
            infoData: [],
            title: '',
            publishTime: ''
        };
    },
    created() {
        getHotInfo(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.infoData = res.data.records.map(item => {
                return {
                    ...item,
                    publishTime: formatTime(item.publishTime)
                }
            })
            this.$nextTick(()=>{
                new Swiper('.swiper-container', {
                    // 改变swiper样式时，自动初始化swiper
                    observer: true,
                    // 监测swiper父元素，如果有变化则初始化swiper
                    observeParents: true,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    },
                    slidesPerView:6,
                    direction: "vertical",
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    // // 如果需要前进后退按钮
                    // nextButton: '.swiper-button-next',
                    // prevButton: '.swiper-button-prev',
                    // 如果需要滚动条
                    scrollbar: '.swiper-scrollbar',
                })
            })
            // console.log(this.infoData)
        })

    }
})
</script>


<template>
    <div class="opinionTrends">
        <p class="title">热点信息</p>
        <div class="hot_swiper">
            <div class="swiper-container">
                <div class="swiper-wrapper" style="height: 220px; ">
                    <div class="swiper-slide" v-for="item in infoData" :key="item.id" style="height: 40px;border-bottom: 1px solid #00c3f4">
<!--                        <div class="content">-->
                            <div class="content_left">{{ item.title }}
                            </div>
                            <div class="content_right">{{ item.publishTime }}</div>
<!--                        </div>-->
                    </div>

                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要滚动条 -->
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">


/* For demo */
.ant-carousel /deep/ .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel /deep/ .slick-slide h3 {
  height: 20px;
  line-height: 20px;
}

.swiper-slide {
  width: 100%;
  line-height: 40px;
  color: #00c3f4;
  overflow: hidden;
  cursor: pointer;
    display: flex;
    justify-content: space-around;
  .content_left {
    //float: left;
    width: 70%;
    //font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
    -webkit-line-clamp: 1; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
  }

  .content_right {
    //width: 100px;
    //float: right;
  }
}

.line_h {
  line-height: 50px;
}

//主题
.opinionTrends {
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  .title {
    height: 27.1px;
    color: #1efffb;
    font-size: 18px;
  }

  .hot_swiper {

  }
}
</style>