<script>
import {defineComponent} from 'vue'
import {getDetailInfo} from "@/views/detail/detailHttp";
import {formatTime} from "@/formatTime";
// import {formatTime} from "@/formatTime";

export default defineComponent({
    name: "detailInfo",
    data(){
        return{
            detailData:{},
            detailid:'-zhqI4gBLwfWH3mSNjw3',
            publishTime:'2022年4月15日'
        }
    },
    methods:{
        back(){
            history.back()
        }
    },
    created() {
            if(this.$route.query.id){
                getDetailInfo(this.$route.query.id).then(res=>{
                    this.detailData=res.data
                    // console.log(this.$route.query.id)
                    // console.log(res)
                    // console.log((res.data.keyword).toString())
                    // 关键字转字符串类型
                    this.$store.commit('changeKey',{keywords:(res.data.keyword).toString(),keywordsId:0})
                    this.publishTime=formatTime(res.data.publishTime)
                    // console.log(this.detailData)
                    // 定时器---修改可以key值
                    // setTimeout(()=>{
                    //     this.$router.go(0)
                    // },10000)
                })
            }else{
                getDetailInfo(this.detailid).then(res=>{
                    // console.log(res)
                    this.detailData=res.data
                    // this.$store.commit('changeKey',{keywords:res.data.keywords,keywordsId:0})
                    this.publishTime=formatTime(res.data.publishTime)
                    // console.log(this.detailData)

                })
            }

    },
})
</script>

<template>
    <div class="box">
        <a-button @click="back">返回</a-button>
        <h3>{{ detailData.title }}</h3>
        <a-row>
            <a-col :span="6">
                <span style="color: rgba(0,0,0,.85);">时间：<span style="color: #999;">{{ publishTime }}</span></span>
            </a-col>
            <a-col :span="6">
                <span style="color: rgba(0,0,0,.85);">来源：<span style="color: #999;">{{ detailData.source }}</span></span>

            </a-col>
            <a-col :span="6">
                <span style="color: rgba(0,0,0,.85);">类型：<span style="color: #999;">{{ detailData.mediaType }}</span></span>
            </a-col>
            <a-col :span="6">
                <a-button class="look"><router-link to="">查看原文</router-link></a-button>
            </a-col>

        </a-row>
        <div class="content1">摘要：</div>
        <div class="content2">&nbsp;{{detailData.summary}}</div>
        <div class="content3">
            <span class="balck">关键字：</span>
            <span v-for="(itemkey,index) in detailData.keyword" :key="index" class="blue">{{ itemkey }}</span>

        </div>
    </div>
</template>

<style scoped lang="less">
.box {
  margin-bottom: 15px;
  padding: 20px 20px;
  background-color: white;

  h3 {
    font-size: 16px;
    color: rgba(0, 0, 0, .85);
    text-align: center;
    padding: 10px 25px;
  }

  .look {
    float: right;
    color: #1890ff;
    border: 1px solid #1890ff;
  }

  .content1 {
    color: rgba(0, 0, 0, .85);
    margin-top: 10px;
    font-size: 13px;
  }

  .content2 {
    letter-spacing: 1px;
    color: #999;
    padding: 0 50px;
    margin-top: 10px;
    font-size: 13px;
    line-height: 21px;
  }

  .content3 {
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 13px;

    .balck {
      color: rgba(0, 0, 0, .85);
    }

    .blue {
      color: #1890ff;
      margin-right: 1em;
    }
  }
}
</style>