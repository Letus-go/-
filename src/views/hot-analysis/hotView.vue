<script>
import {defineComponent} from 'vue'
import TopSearch from "@/views/hot-analysis/compontents/topSearch.vue";
import LevelView from "@/views/hot-analysis/compontents/levelView.vue";
import FeelingView from "@/views/hot-analysis/compontents/feelingView.vue";
import CloudView from "@/views/hot-analysis/compontents/cloudView.vue";
import WebSelect from "@/views/hot-analysis/compontents/webSelect.vue";
import AddressView from "@/views/hot-analysis/compontents/addressView.vue";
import proportionView from "@/views/hot-analysis/compontents/proportionView.vue";
import ActiveView from "@/views/hot-analysis/compontents/activeView.vue";
import TopView from "@/components/topView.vue";
import BottomView from "@/components/bottomView.vue";

export default defineComponent({
    name: "hotView",
    components: {
        BottomView, TopView,
        ActiveView,
        proportionView, AddressView, WebSelect, CloudView, FeelingView, LevelView, TopSearch
    },
    created() {
        // console.log(this.$route.query.searchKeyword)
        this.$store.commit('changeRoute',{id:2})
        // this.$store.commit('changeKey',{keywords:this.$route.query.searchKeyword,keywordsId:0})
    }
})
</script>

<template>
    <div class="body">
        <!--    顶部-->
        <top-view></top-view>
        <!--内容  -->
        <div class="typeCenter">
            <!--    顶部搜索-->
            <top-search></top-search>
            <!--  热度排行榜-->
            <level-view></level-view>
            <!--        情感 词云-->
            <div class="feel_cloud">
                <div class="feel"> <!--    情感分析-->
                    <feeling-view></feeling-view>
                </div>
                <div class="cloud">
                    <!--    词云-->
                    <cloud-view></cloud-view>
                </div>
            </div>
            <!--        网站统计-->
            <web-select></web-select>
            <!--        地域统计-->
            <address-view></address-view>
            <!--        媒体信息-->
            <a-row>
                <a-col :span="12" class="aRow">
                    <proportionView></proportionView>
                </a-col>
                <a-col :span="12" class="aRow">
                    <active-view></active-view>
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

  .feel_cloud {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
}
</style>