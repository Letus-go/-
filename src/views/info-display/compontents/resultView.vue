<script>
import {defineComponent} from 'vue'
import {getAgoDay} from "@/formatTime";
import {getTFNum} from "@/views/info-display/infoHttp";

export default defineComponent({
    name: "resultView",
    props: {
        infoDatas: {
            type: [Array],
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            state: true,
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            current: 1,
            pageSize: 10,
            total: 50,
            tNum: '',
            fNum: '',
            tfNum: '',
            infoData: [],
            page: 1,
            show: true,
        }
    },
    methods: {
        onShowSizeChange(current, pageSize) {
            this.pageSize = pageSize;
        },
        changeCurrent(page) {
            this.page = page
            this.$store.commit('changeCurrent', {current: page})
            // console.log(page, pageSize)
            this.$router.go(0)
            // this.$forceUpdate()
            // getInfoData(getAgoDay(10), getAgoDay(), this.page).then(res => {
            //     console.log(res)
            //     this.infoData = res.data.records
            // })
        },
    //     分享网址
        copyLink(val) { // 复制链接  val 就是你需要复制的链接
            this.$copyText(val).then(() => {
                // console.log(e)
                this.$message.success('复制成功！')
            }, () => {
                // console.log(e)

                this.$message.error('复制失败！')
            })
        },
    },
    updated() {
        // console.log(this.$store.state.current)
        // 获取正负信息总数
        getTFNum(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res)
            this.tfNum = res.data[1].y + res.data[0].y
            this.tNum = res.data[1].y
            this.fNum = res.data[0].y
        })

    },

})
</script>

<template>
    <div class="typeCenter">
        <div class="inFormation">
            全部舆情（共<span> {{ tfNum }}</span>条，其中负面<span>{{ fNum }}</span>条）
            <div class="select">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        <a-input placeholder="排序方式"/>
                    </a>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <a href="javascript:;">排序方式</a>
                            <a href="javascript:;">时间排序</a>
                        </a-menu-item>

                    </a-menu>
                </a-dropdown>
            </div>
        </div>
        <div class="result_content" v-for="item in infoDatas" :key="item.id">
            <a-row>
                <a-col :span="1">
                    <div class="blue" v-if="$store.state.TORF==='TRUE'">正面</div>
                    <div class="red" v-else-if="$store.state.TORF==='FALSE'">负面</div>
                    <div v-else>
                        <div class="blue" v-if="item.emotionPolar>=0">正面</div>
                        <div class="red" v-else>负面</div>
                    </div>
                </a-col>
                <a-col :span="23">
                    <p>
                        <router-link :to="{path:'/detail',query:{id:item.id}}">{{ item.title }}</router-link>
                    </p>
                    <p class="result_content_1">&nbsp;&nbsp;{{ item.summary }}</p>
                    <div class="article">
                        <p class="time">{{ item.publishTime }} <span
                                class="news">{{ item.mediaType }}</span><span>来源：{{
                            item.siteName
                            }}</span><span>热度：{{ item.hotValue }}</span></p>
                        <p class="obtainType">
                            <span  @click="copyLink(item.url)">分享&nbsp;&nbsp;|</span>
                            <span>原网址&nbsp;&nbsp;|</span>
                            <span>
                                <a-dropdown>
                                  <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                  修正 <a-icon type="down"/>
                                      </a>
                                      <a-menu slot="overlay">
                                        <a-menu-item>
                                          <a href="javascript:;">正面</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                          <a href="javascript:;">负面</a>
                                        </a-menu-item>

                                      </a-menu>
                                    </a-dropdown>
                            </span>
                            <span>|&nbsp;&nbsp;收藏</span>
                        </p>
                    </div>
                </a-col>
            </a-row>
        </div>
        <div class="page">
            <a-pagination
                    v-model="$store.state.current"
                    :page-size-options="pageSizeOptions"
                    :total="total"
                    show-size-changer
                    :page-size="pageSize"
                    @showSizeChange="onShowSizeChange"
                    @change="changeCurrent"
            >
                <template slot="buildOptionText" slot-scope="props">
                    <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
                    <span v-if="props.value === '50'">全部</span>
                </template>
            </a-pagination>
        </div>
    </div>
</template>

<style scoped lang="less">
.typeCenter {
  width: 1200px;
  margin: 5px auto 0;
  color: rgba(0, 0, 0, .65);
  background-color: white;

  .inFormation {
    font-size: 16px;
    font-weight: 300;
    color: #333;
    padding: 10px 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 70px;
    line-height: 52px;
    border-bottom: 1px solid #e8e8e8;

    .select {
      float: right;
      width: 180px;
    }
  }

  .result_content {
    margin: 10px 10px 0;
    padding: 10px 20px 20px 40px;
    border-bottom: 1px solid #e8e8e8;
    font-size: 14px;

    .blue {
      text-align: center;
      background-color: rgb(79, 216, 157);
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 7px;
    }

    .red {
      text-align: center;
      background-color: rgb(255, 42, 0);
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 7px;
    }

    .result_content_1 {
      color: #666;
      line-height: 25px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      border: none;
    }

    .article {
      color: #999;
      margin-top: 20px;

      .time {
        float: left;

        .news {
          background: rgba(76, 134, 236, .3);
          color: #005eff;
          padding: 3px 10px;
          border-radius: 4px;
        }

        span {
          margin-left: 20px;
        }
      }

      .obtainType {
        float: right;
        cursor: pointer;

        span {
          margin-left: 10px;
        }
      }
    }
  }

  .page {
    width: 400px;
    height: 50px;
    margin: 30px auto;
  }
}
</style>