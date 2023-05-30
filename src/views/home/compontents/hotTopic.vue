<script>
import {defineComponent} from 'vue'
import {getTotTopic} from "@/views/home/compontents/homeHttp";
import {formatTime} from '../../../formatTime'
export default defineComponent({
    name: "hotTopic",
    data() {
        return {
            hotData: []
        }
    },
    methods:{
        changeKeyWord(keyword){
            // console.log(keyword)
            this.$store.commit('changeKey',{keyword:keyword})
        }
    },
    created() {
        getTotTopic().then(res => {
            // console.log(res)
            this.hotData = res.data.records.map(item=>{
                return {
                    ...item,
                    createTime:formatTime(item.createTime)
                }
            })

        })
    }
})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            实时热门话题
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in hotData" :key="item.id" @click="changeKeyWord(item.keyword)">
                    <div>
                        <p>
                            <img v-if="(index+1)===1" src="../../../assets/first.png" height="20" width="16"/>
                            <img v-else-if="(index+1)===2" src="../../../assets/second.png" height="20" width="16"/>
                            <img v-else-if="(index+1)===3" src="../../../assets/third.png" height="20" width="16"/>
                            <span v-else>{{ index + 1 }}</span>
                            <router-link to="" class="link_style">{{ item.keyword }}</router-link>
                        </p>
                        <span>{{ item.createTime }}</span>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
.hotTopic {
  padding: 20px 0 20px;
  border: 1px solid #e8e8e8;
  color: rgba(0, 0, 0, .65);
  font-size: 14px;
  background: #fff;

  .title {
    margin-left: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, .85);
    font-weight: 500;

  }

  .content {
    width: 100%;
    height: 404.8px;
    margin-top: 10px;

    ul {
      width: 90%;
      padding: 0;
      margin: 0 auto;
      list-style: none;

      li {
        div {
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e8e8e8;

          p {
            width: 60%;
            margin-top: 10px;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            img {
              margin-right: 5px;
            }

            .link_style {
              color: rgba(0, 0, 0, .65);
              line-height: 100%;
              margin-left: 10px;
            }
          }

          span {
            margin-right: 13px;
          }
        }
      }
    }
  }
}
</style>