<script>
import {defineComponent} from 'vue'
import {getNegativeInfor} from "@/views/home/compontents/homeHttp";
import {getAgoDay} from "@/formatTime";


export default defineComponent({
    name: "negativeInfor",
    data() {
        return {
            negaetivData: [],

        }
    },
    created() {
       getNegativeInfor(getAgoDay(10), getAgoDay(),this.$store.state.keyWords).then(res=>{
           // console.log(res)
           this.negaetivData=res.data.records
       })
    }
})
</script>


<template>
    <div class="hotTopic">
        <div class="title">
            负面信息
        </div>
        <div class="content">
            <div class="content_box" v-for="item in negaetivData" :key="item.id">
                <p>
                    <router-link to="" class="box_info">{{
                            item.title
                        }}
                    </router-link>
                </p>
                <div class="box_from">
                    <span>发布媒体：{{ item.mediaType }}</span>
                    <span>发布时间：{{ item.publishTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.hotTopic {
  padding: 20px 0 0;
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

    .content_box {
      border-bottom: 1px solid #e8e8e8;
      padding: 12px 28px;

      .box_info {
        color: #333;
      }

      .box_from {
        display: flex;
        justify-content: space-between;

        span {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}

</style>