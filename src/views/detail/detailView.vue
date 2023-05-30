<script>
import {defineComponent} from 'vue'
import TransView from "@/views/detail/compontents/transView.vue";
import CommonView from "@/views/detail/compontents/commonView.vue";
import SpeakView from "@/views/detail/compontents/speakView.vue";
// import {getDetailInfo} from "@/views/detail/detailHttp";
import DetailInfo from "@/views/detail/compontents/detailInfo.vue";
import TopView from "@/components/topView.vue";
import BottomView from "@/components/bottomView.vue";


export default defineComponent({
    name: "detailView",
    components: {BottomView, TopView, DetailInfo, SpeakView, CommonView, TransView},
    data(){
        return{
            detailData:{}
        }
    },
    created() {
        // console.log(this.$store.state.keyWords)
      this.$store.commit('changeRoute',{id:1})
    }
})
</script>

<template>
    <div class="body">
        <!--    顶部-->
        <top-view></top-view>
        <!--内容   -->
        <div class="typeCenter">
            <!--  简介  -->

            <detail-info></detail-info>
            <!--    传播路径-->
            <trans-view></trans-view>
            <!--    相似舆情-->
            <common-view></common-view>
            <!--    评论-->
            <speak-view></speak-view>
        </div>
        <!--    底部-->
        <bottom-view></bottom-view>
    </div>

</template>

<style scoped lang="less">
.body {
    color: rgba(0, 0, 0, .65);
    background-color: #f5f7fa;
    .typeCenter {
        width: 1200px;
        margin: 5px auto 0;
        color: rgba(0, 0, 0, .65);
    }
}

</style>