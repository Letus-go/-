<script>
import {defineComponent} from 'vue'

import {transition} from "@/views/detail/compontents/trans";

export default defineComponent({
    name: "transView",
    data() {
        return {
            keyWords: '阳性 检测 开展 密接 隔离 发热 核酸 区域 病例 人员',
            transData: {},
            detailData:'',
            detailid: '-zhqI4gBLwfWH3mSNjw3',
        }
    },
    created() {
        if (this.$route.query.id) {
            console.log(this.$store.state.keyWords)
            transition(this.$route.query.id,this.$store.state.keyWords)
        } else {
            // console.log(this.$store.state.keyWords)
            transition(this.detailid,this.keyWords)
        }
    },
})
</script>

<template>
    <div class="box">
        <div class="title">传播路径</div>
        <div class="content">
            <div id="container" style="width: 1000px;height: 500px"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
.box {
  font-size: 16px;
  background-color: white;
  margin-bottom: 15px;
  padding: 20px 20px;

  .title {
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 0;
    color: rgba(0, 0, 0, .85);
  }
}
</style>