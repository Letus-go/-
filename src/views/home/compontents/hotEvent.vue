<script>
import {defineComponent} from 'vue'
import {getHotEvent} from "@/views/home/compontents/homeHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "hotEvent",
    data(){
        return{
            eventData:[]
        }
    },
    methods:{
        changedeTAIiD(id){
            //储存详情页状态和id
            this.$store.commit('changeDetailId',{detailId:id})
        }
    },
    created() {
        getHotEvent(getAgoDay(10), getAgoDay(),this.$store.state.keyWords).then(res=>{
            // console.log(res)
            this.eventData=res.data.records
        })
    }
})
</script>


<template>
    <div class="hotTopic">
        <div class="title">
            热点事件
        </div>
        <div class="content">
            <div class="content_box" v-for="(item) in eventData" :key="item.id" @click="changedeTAIiD(item.id)">
<!--               <p @click="changeKey(item.key)"> <router-link :to="{path:'/detail',query:{id:item.id}}"  class="box_info">{{ item.title }}</router-link></p>-->
               <p @click="changeKey(item.key)"> <router-link :to="{path:'/detail',query:{id:item.id}}"  class="box_info">{{ item.title }}</router-link></p>
                <div class="box_from">
                    <span>发布媒体：{{ item.mediaType }}</span>
                    <span>热度：{{item.hotValue}}</span>
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
    .content_box{
      border-bottom: 1px solid #e8e8e8;
      padding: 10px 28px;
      .box_info{
        color: #333;
      }
      .box_from{
        display: flex;
        justify-content: space-between;
        span{
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>