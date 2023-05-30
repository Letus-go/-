<script>
import {defineComponent} from 'vue'
import {getCommon} from "@/views/detail/detailHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "commonView",
    data() {
        return {
            columns: [
                {
                    title: '标题',
                    dataIndex: 'content',
                    key: 'content',
                    scopedSlots: {customRender: 'content'},
                    width: 600,
                    align:'center'
                },
                {
                    title: '来源',
                    dataIndex: 'from',
                    key: 'from',
                    width: 100,
                    align:'center'

                },
                {
                    title: '媒体类型',
                    dataIndex: 'mediaType',
                    key: 'mediaType',
                    ellipsis: true,
                    width: 80,
                    align:'center'
                },
                {
                    title: '热度',
                    dataIndex: 'hotValue',
                    key: 'hotValue',
                    ellipsis: true,
                    width: 60,
                    align:'center'

                },
                {
                    title: '发布时间',
                    dataIndex: 'time',
                    key: 'address 3',
                    align:'center',
                    ellipsis: true,
                },
            ],
            data: [],
            detaulId: ''
        }
    },
    created() {
        getCommon(getAgoDay(10), getAgoDay(), this.$route.query.id).then(res => {
            // console.log(res)
            this.data = res.data.map((item, ) => {
                    return {
                        content: item.title,
                        from: item.siteName,
                        mediaType: item.mediaType,
                        hotValue:item.hotValue,
                        time: item.publishTime,
                    }
            })
            this.data.length=5
        })
    }
})
</script>


<template>
    <div class="box">
        <div class="title">相似舆情</div>
        <div class="content">
            <div id="container">
                <a-table :columns="columns" :data-source="data">
                    <a slot="name" slot-scope="text">{{ text }}</a>
                </a-table>
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
    color: rgba(0, 0, 0, .85);
  }

  #container {
    width: 1000px;
    height: 400px;
    margin: 20px auto;
  }
    //overflow: hidden;
}
</style>