<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "speakView",
    data() {
        return {
            current: 5,
        };
    },
    created() {
        // console.log(this.$store.state.keyWords)
    }
})
</script>

<template>
    <div class="box">
        <div class="title">评论</div>
        <div class="content">
            <div id="container">
                <a-empty />
                <div class="bottom"><a-pagination v-model="current" :total="50" show-less-items /></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.box {
  font-size: 16px;
  background-color: white;
  margin-bottom: 15px;
  padding: 20px 20px 0 20px;

  .title {
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 0;
    color: rgba(0,0,0,.85);
  }

  #container {
    width: 1000px;
    height: 300px;
    margin: 90px auto 0;
    .ant-empty-image {
      height: 180px;
      margin-bottom: 8px;
    }
    .bottom{
      width: 300px;
      margin: 40px auto 10px;
    }
  }
}
</style>