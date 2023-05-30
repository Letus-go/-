<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "topSearch",
    data() {
        return {
            value: '',
            timeId: 0,
            timeList: ['10天', '7天', '3天', '24小时', '自定义'],
        }
    },

    methods: {
        input_delete() {
            this.value = ''
        },
        //     时间
        time(id) {
            this.timeId = id

        },
        onChangeTime(date, dateString) {
            console.log(date, dateString);
        },
    }
})
</script>

<template>
    <div class="box">
        <div class="box_input">
            <a-input v-model="value"/>
            <div class="delete" @click="input_delete">
                <a-icon type="close-circle"/>
            </div>
        </div>
        <div >
            <a-button class="btn btn1">添加对比词</a-button>
            <a-button type="primary" class="btn">
                搜索
            </a-button>
            <a-button type="primary " class="btn button3">
                添加到事件
            </a-button>
        </div>
        <div class="select_time">
            <span class="select" v-for="(item,index) in timeList" :key="index" @click="time(index)"
                        :class="timeId===index?'select_hover':''">{{ item }}</span>
        </div>
    </div>
</template>

<style scoped lang="less">
.box {
  padding-left: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: white;
  display: flex;

  .box_input {
    margin: 10px 10px;
    display: flex;
    position: relative;
    justify-content: space-around;

    .delete {
      cursor: pointer;
      position: absolute;
      top: -8px;
      left: 156px;
    }
  }
    .btn1{
        color: #1890ff;
        border: 1px solid #1890ff;
    }
    .btn{
        margin-top:11px;
        margin-left: 15px;
    }
  .button3 {
    border: none;
    color: #fff;
    border-radius: 4px;
    background: #ffa518;

  }
    .select_time {
        margin-left: 200px;
        .time_select {
            display: inline-block;
            width: 360px;
            height: 20px;
        }
    }
    .select {
        cursor: pointer;
        display: inline-block;
        margin: 5px 0;
        width: 72px;
        height: 33px;
        text-align: center;
        line-height: 33px;
    }

    .select_hover {
        background-color: #1890ff;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        transform: scaleX(-10px);
    }
}
</style>