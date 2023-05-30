<script>
import {defineComponent} from 'vue'
import TopView from "@/components/topView.vue";
import BottomView from "@/components/bottomView.vue";

export default defineComponent({
    name: "feelView",
    components: {BottomView, TopView}
})
</script>

<template>
    <div class="body">
        <!--    顶部-->
        <top-view></top-view>
        <!--内容   路由嵌套-->
        <div>
            <a-empty/>
        </div>
        <!--    底部-->
        <bottom-view></bottom-view>
    </div>

</template>

<style scoped lang="less">
.body {
    color: rgba(0, 0, 0, .65);
    background-color: #f5f7fa;
    div {
        padding: 100px;
        min-height: 200px;
    }
}

</style>