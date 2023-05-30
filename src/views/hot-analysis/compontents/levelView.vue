<script>
import {defineComponent} from 'vue'
import {getLevel} from "@/views/hot-analysis/hotHttp";
import {getAgoDay} from "@/formatTime";

export default defineComponent({
    name: "levelView",
    data() {
        return {
            columns: [
                {
                    title: '排行',
                    dataIndex: 'level',
                    key: 'level',
                    scopedSlots: {customRender: 'level'},
                    width: 60,
                },
                {
                    title: '标题',
                    dataIndex: 'content',
                    key: 'content',
                    align:'center',
                    width: 700,
                    // height:70
                },
                {
                    title: '来源',
                    dataIndex: 'from',
                    key: 'from',
                    align:'center',
                    ellipsis: true,
                },
                {
                    title: '热度',
                    dataIndex: 'address',
                    key: 'address',
                    align:'center',
                    ellipsis: true,
                },
                {
                    title: '发布时间',
                    dataIndex: 'time',
                    key: 'address 3',
                    ellipsis: true,
                    align:'center',
                    width: 250,
                },
            ],
            data: []
        }
    },
    created() {
        getLevel(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.data = res.data.records.map((item, index) => {
                return {
                    key: index,
                    level: index+1,
                    content: item.title,
                    from: item.mediaType,
                    address: item.hotValue,
                    time: item.publishTime,

                }
            })
        })
    }
})
</script>


<template>
    <div class="box">
        <div class="title">热度排行榜</div>
        <div class="content">
            <div id="container">
                <a-table :columns="columns" :data-source="data">
                    <a slot="name" slot-scope="text">{{ text }}</a>
                </a-table>
<!--                <div class="first"><img src="../../../assets/first.png" height="20" width="16"/></div>-->
<!--                <div class="second"><img src="../../../assets/second.png" height="20" width="16"/></div>-->
<!--                <div class="third"><img src="../../../assets/third.png" height="20" width="16"/></div>-->
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
    padding: 0 0 10px 0;
    color: rgba(0, 0, 0, .85);
  }

  #container {
    width: 98%;
    height: 330px;
    margin: 0 auto 0;
    position: relative;
    overflow: hidden;

    .ant-table-tbody {
      color: #999;
    }

    .first {
      position: absolute;
      top: 76px;
      left: 13px;

    }

    .second {
      position: absolute;
      top: 120px;
      left: 11px;
    }

    .third {
      position: absolute;
      top: 175px;
      left: 11px;
    }
  }

}
</style>