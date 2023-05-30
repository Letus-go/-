<script>
import {defineComponent} from 'vue'
import StatiView from "@/views/data-v/compontents/statiView.vue";
import TaskData from "@/views/data-v/compontents/taskData.vue";

export default defineComponent({
    name: "dataVView",
    components: {TaskData, StatiView}
})
</script>

<template>
    <div class="screen_container">
        <div class="screen_container_inner">
            <!--        标题-->
            <div class="screen_header">
                <div class="header_content"><img class="title_img" src="../../assets/img/logo.png"/></div>
            </div>
            <!--            内容-->
            <div class="screen_content">
                <div class="content_left">
                    <stati-view></stati-view>
                </div>
                <div class="content_right">
                    <task-data></task-data>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.screen_container {
  width: 100%;
  height: 100vh;
  min-width: 700px;
  min-height: 700px;
  background-image: url(@/assets/img/yuqing.76669b57195f44977131.png);
  background-size: cover;

  .screen_container_inner {
    width: 190vh;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;

    .screen_header {
      height: 10%;
      line-height: 100%;
      text-align: center;

      .header_content {
        height: 60%;
        width: 100%;
        position: relative;
        top: 20%;

        .title_img {
          height: 80%;
          margin: 0 auto;
          vertical-align: middle;
          border-style: none;
        }
      }
    }

    .screen_content {
      width: 100%;
      height: 85%;

      .content_left {
        float: left;
        width: 45%;
        height: 100%;
      }

      .content_right {
        float: left;
        width: 55%;
        height: 100%;

      }
    }
  }
}
</style>