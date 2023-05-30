<script>
import {defineComponent} from 'vue'
import SelectView from "@/views/info-display/compontents/selectView.vue";
import ResultView from "@/views/info-display/compontents/resultView.vue";
import TopView from "@/components/topView.vue";
import BottomView from "@/components/bottomView.vue";
import {getInfoData} from "@/views/info-display/infoHttp";
import {getAgoDay} from "@/formatTime";


export default defineComponent({
    name: "infoView",
    components: {BottomView, TopView, ResultView, SelectView},
    data() {
        return {
            infoDatas:[],
            infoData:[],
        }
    },
    methods:{
        getInfo(data){
            this.infoDatas=data
            // console.log(this.infoDatas)
        },
        getCurrent(){
            console.log(this.$store.state.current)
        }
    },
    created() {
        this.$store.commit('changeRoute',{id:1})
        // 搜索数据
        // this.getCurrent()
        getInfoData(getAgoDay(10), getAgoDay(), this.$store.state.current).then(res => {
            // console.log(res)
            // this.infoData =
            // this.infoDatas=res.data.records
            this.infoDatas=res.data.records
            // console.log(this.infoData)
        })
    }
})
</script>

<template>
    <div class="body">
        <!--    顶部-->
        <top-view></top-view>
        <!--内容 -->
        <div >
            <!--    检索方式-->
            <select-view @getInfo="getInfo"></select-view>
            <!--    检索结果-->
            <result-view :infoDatas="infoDatas"></result-view>
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
</style>