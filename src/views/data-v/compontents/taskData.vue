<script>
import {defineComponent} from 'vue'
import OpinionTrends from "@/views/data-v/compontents/opinionTrends.vue";
import MediaActivity from "@/views/data-v/compontents/mediaActivity.vue";
import GreenCloud from "@/views/data-v/compontents/greenCloud.vue";
import HotNews from "@/views/data-v/compontents/hotNews.vue";

export default defineComponent({
    name: "taskData",
    components: {HotNews, GreenCloud, MediaActivity, OpinionTrends}
})
</script>

<template>
    <div class="taskData">
        <div class="title"><span>任务数据</span></div>
        <div class="content">
            <div class="content_top">
                <a-row>
                    <a-col :span="12">
                        <opinion-trends></opinion-trends>
                    </a-col>
                    <a-col :span="12">
                        <media-activity></media-activity>
                    </a-col>
                </a-row>
            </div>
            <div class="content_bottom">
                <a-row>
                    <a-col :span="12">
                       <green-cloud></green-cloud>
                    </a-col>
                    <a-col :span="12">
                        <hot-news></hot-news>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.taskData {
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

  .content {
    width: 100%;
    height: 96%;
    padding: 2%;

    .content_top,.content_bottom {
      margin-left: -10px;
      margin-right: -10px;
      height: 50%;
      overflow: hidden;
    }

  }
}
</style>