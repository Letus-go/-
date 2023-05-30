<script>
import {defineComponent} from 'vue'
import HotTopic from "@/views/home/compontents/hotTopic.vue";
import sourceFrom from "@/views/home/compontents/sourceFrom.vue";
import HotEvent from "@/views/home/compontents/hotEvent.vue";
import NegativeInfor from "@/views/home/compontents/negativeInfor.vue";
import WordCloud from "@/views/home/compontents/wordCloud.vue";
import EventTrend from "@/views/home/compontents/eventTrend.vue";
import TopView from "@/components/topView.vue";
import BottomView from "@/components/bottomView.vue";

export default defineComponent({
    name: "homeView",
    components: {BottomView, TopView, EventTrend, WordCloud, NegativeInfor, HotEvent, HotTopic, sourceFrom}
})
</script>

<template>
    <div class="body">
        <!--    顶部-->
        <top-view></top-view>
        <!--内容   -->
        <div class="typeCenter">
            <p class="information">全网信息</p>
            <a-row>
                <a-col :span="12" class="aRow">
                    <hot-topic></hot-topic>
                </a-col>
                <a-col :span="12" class="aRow">
                    <source-from></source-from>
                </a-col>
            </a-row>
            <div class="inFormation">监测信息
                <div class="select">
                    <a-dropdown>
                        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                            <a-input/>
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">新冠病毒</a>
                            </a-menu-item>

                        </a-menu>
                    </a-dropdown>
                </div>
            </div>
            <a-row>
                <a-col :span="12" class="aRow">
                    <hot-event></hot-event>
                </a-col>
                <a-col :span="12" class="aRow">
                    <negative-infor></negative-infor>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="12" class="aRow">
                    <word-cloud></word-cloud>
                </a-col>
                <a-col :span="12" class="aRow">
                    <event-trend></event-trend>
                </a-col>
            </a-row>
        </div>
        <!--    底部-->
        <bottom-view></bottom-view>
    </div>

</template>

<style scoped lang="less">
.body {
    color: rgba(0, 0, 0, .65);
    background-color: #f5f7fa;
}
.typeCenter {
  width: 1200px;
  margin: 5px auto 0;
  color: rgba(0, 0, 0, .65);
  background-color: #f5f7fa;

  .information {
    font-size: 18px;
    color: #333;
    padding-left: 5px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .inFormation {
    font-size: 18px;
    color: #333;
    padding-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;

    .select {
      float: right;
      width: 180px;
    }
  }

  .aRow {
    padding: 2.5px;
  }
}
</style>