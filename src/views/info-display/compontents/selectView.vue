<script>
import {defineComponent} from 'vue'
import {getInfoData1} from "@/views/info-display/infoHttp";
import {getAgoDay} from "@/formatTime";


// const emotionCheckedList = ['正面'];

const sourceCheckedList = ['新闻','贴吧'];

export default defineComponent({
    name: "selectView",
    data() {
        return {
            state: true,//1为显示
            talkId: 0,
            talklist: [{name: '全部', value: ''}, {
                name: '新冠病毒',
                value: '新冠病毒" OR "中国疫情" OR "疫情"  OR "河北疫情" OR "石家庄疫情'
            }],
            talkIdVlue:'1',
            timeId: 2,
            timeList: [{name: '全部', begin: 100, end: 0}, {name: '今天', begin: 1, end: 0}, {
                name: '昨天',
                begin: 2,
                end: 1
            }, {name: '7天', begin: 7, end: 0}, {name: '30天', begin: 30, end: 0}],
            positionId: 0,
            positionList: [{name: '按全文', value: 'TITLE_AND_BODY'}, {name: '按标题', value: 'TITLE'}, {
                name: '按摘要',
                value: 'TITLE_SUMMARY'
            }, {name: '按内容', value: 'BODY'}],
            // emotionList: emotionCheckedList,
            sourceList: sourceCheckedList,
            indeterminate: true,
            checkAll: false,
            indeterminates: true,
            checkAlls: false,
            emotionData: ['正面', '负面'],
            sourceData: ['新闻', '微博', '贴吧', '头条'],
            //内容 类型
            matchingType: 'TITLE_AND_BODY',
            // 正反面
            emotion: 'ALL',
            // 媒体类型
            mediaType: 'ALL',
            //页数
            current: 1,
            timeBegin: 30,
            timeEnd: 0,
            infoData:[]
        }
    },
    methods: {
        // 获取信息
        getInfo(){
            return  getInfoData1(getAgoDay(this.$store.state.begin), getAgoDay(this.$store.state.end), this.$store.state.contentType, this.emotion, this.mediaType, this.$store.state.keyWords, this.$store.state.current).then(res => {
                this.infoData = res.data.records
                // console.log(this.infoData)
                this.$emit('getInfo',this.infoData)
            })
        },
        upAll() {
            this.state = !this.state
        },
        // 话题
        talk(item, index) {
            // console.log(this.$store.state.current)
            this.talkId = index
            this.talkIdVlue = item.value
            this.$store.commit('changeKey', {keywords:item.value,keywordsId:index})
            this.getInfo()

        },
        // 时间
        time(item, index) {
            // console.log(item)
            this.timeId = index
            this.timeBegin = item.begin
            this.timeEnd = item.end
            this.$store.commit('changeTime',{begin:item.begin,end:item.end,timeId:index})
            this.getInfo()

        },
        // 信息类型
        posit(item, index) {
            console.log(item)
            this.positionId = index
            this.matchingType = item.value
            this.$store.commit('changeContentType',{contentType:item.value,conyentTypeId:index})
            this.getInfo()

        },
        // 情感
        onChange(checkedList) {
            // console.log(checkedList)
            if (checkedList.length === 2) {
                this.$store.commit('changeTORF',{TORF:'ALL',emotionCheckedList:['正面', '负面']})
                this.getInfo()
            } else if (checkedList[0] === '正面') {
                this.$store.commit('changeTORF',{TORF:'TRUE',emotionCheckedList:['正面']})
                this.emotion = 'POSITIVE'
                this.getInfo()
            } else if (checkedList[0] === '负面') {
                this.$store.commit('changeTORF',{TORF:'FALSE',emotionCheckedList:['负面']})
                this.emotion = 'NEGATIVE'
                this.getInfo()
            }
            // console.log(checkedList)
            this.indeterminate = !!checkedList.length && checkedList.length < this.emotionData.length;
            this.checkAll = checkedList.length === this.emotionData.length;
        },
        onCheckAllChange(e) {
            this.emotion = 'ALL'
            this.getInfo()
            // console.log(e)
            Object.assign(this, {
                emotionList: e.target.checked ? this.emotionData : [],
                indeterminate: false,
                checkAll: e.target.checked,
            });
        },
        // 来源
        onChangeS(checkedList) {
            // console.log(checkedList)
            if (checkedList.length === 1) {
                this.mediaType = 'NEWS'
                this.getInfo()

            } else if (checkedList.length === 2) {
                this.mediaType = 'TIEBA'
                this.getInfo()

            } else if (checkedList.length === 3) {
                this.mediaType = 'TOUTIAO'
                this.getInfo()
            } else {
                this.mediaType = 'ALL'
                this.getInfo()
            }
            this.indeterminates = !!checkedList.length && checkedList.length < this.sourceData.length;
            this.checkAlls = checkedList.length === this.sourceData.length;
        },
        onCheckAllChangeS(e) {
            this.mediaType = 'ALL'
            this.getInfo()
            Object.assign(this, {
                sourceList: e.target.checked ? this.sourceData : [],
                indeterminates: false,
                checkAlls: e.target.checked,
            });
        },
        // 时间
        onChangeTime(date, dateString) {
            console.log(date, dateString);
        },
    },
    created() {

    }
})
</script>

<template>
    <div class="typeCenter">
        <!--        搜索方式-->
        <div :class="state?'show':'hideen'">
            <div class="select_talk select_border">
                话题：<span class="select" v-for="(item,index) in talklist" :key="index" @click="talk(item,index)"
                           :class="$store.state.keywordsId===index?'select_hover':''">{{ item.name }}</span>
            </div>
            <div class="select_emotion select_border">
                情感：
                <div class="over"></div>
                <a-checkbox class="paddding_size" :indeterminate="indeterminate" :checked="checkAll"
                            @change="onCheckAllChange" :class="checkAll?'font_color':''">
                    全选
                </a-checkbox>
                <a-checkbox-group class="paddding_size" v-model="$store.state.emotionCheckedList" :options="emotionData"
                                  @change="onChange"/>

            </div>
            <div class="select_source select_border">
                来源：
                <div class="over"></div>
                <a-checkbox class="paddding_size" :indeterminate="indeterminates" :checked="checkAlls"
                            @change="onCheckAllChangeS" :class="checkAlls?'font_color':''">
                    全选
                </a-checkbox>
                <a-checkbox-group class="paddding_size" v-model="sourceList" :options="sourceData" @change="onChangeS"/>

            </div>
            <div class="select_time select_border">
                时间: <span class="select" v-for="(item,index) in timeList" :key="index" @click="time(item,index)"
                            :class="$store.state.timeId===index?'select_hover':''">{{ item.name }}</span>
                <span class="time_select"><a-range-picker @change="onChangeTime">
      <a-icon slot="suffixIcon" type="smile"/>
    </a-range-picker></span>

            </div>
            <div class="select_position select_border">
                位置： <span class="select" v-for="(item,index) in positionList" :key="index" @click="posit(item,index)"
                            :class="$store.state.conyentTypeId===index?'select_hover':''">{{ item.name }}</span>
            </div>
            <div class="select_search select_border">

                <div class="select_font">
                    <div class="select_font_size"> 包含以下全部关键词：</div>
                    <a-input placeholder="关键词请以空格隔开"/>
                </div>
                <div class="select_font">
                    <div class="select_font_size"> 包含以下任一关键词：</div>
                    <a-input placeholder="关键词请以空格隔开"/>
                </div>
                <div class="select_font">
                    <div class="select_font_size">不包含以下关键词：</div>
                    <a-input placeholder="关键词请以空格隔开"/>
                </div>
                <div class="select_search_bottom">
                    <a-button type="primary" icon="search">
                        Search
                    </a-button>
                </div>

            </div>
        </div>
        <div class="up select_border" @click="upAll">
            <div v-show="state">
                <a-icon type="up"/>
            </div>
            <div v-show="!state">
                <a-icon type="down"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">

.typeCenter {
  width: 1200px;
  margin: 5px auto 0;
  color: rgba(0, 0, 0, .85);
  background-color: white;
  font-size: 14px;
  padding: 0 75px;
  //搜索方式
  .show {
    display: block;
  }

  .hideen {
    display: none;
  }

  .select {
    cursor: pointer;
    display: inline-block;
    margin: 5px 10px;
    width: 72px;
    height: 25px;
    text-align: center;
    line-height: 25px;
  }

  .select_hover {
    background-color: #1890ff;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    transform: scaleX(-10px);
  }

  .select_border {
    height: 40px;
    border-bottom: 1px solid #f5f7fa;
  }

  .select_emotion, .select_source {
    position: relative;
    padding-top: 10px;

    .font_color {
      color: #1890ff;
    }

    .ant-checkbox-indeterminate {
      display: none;
      opacity: 0;
    }

    .paddding_size {
      margin-left: 13px;
    }

    .over {
      position: absolute;
      top: 10px;
      left: 50px;
      z-index: 99;
      width: 30px;
      height: 30px;
      background-color: white;
    }
  }

  .select_time {
    .time_select {

      margin-left: 100px;
      display: inline-block;
      width: 360px;


    }
  }

  .select_search {
    display: flex;
    padding-top: 10px;
    height: 140px;
    flex-wrap: wrap;

    .select_font {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      margin: 5px 20px 5px -14px;
      width: 340px;
      height: 25px;
      text-align: center;
      line-height: 25px;

      .select_font_size {
        width: 333px;
      }
    }

    .select_search_bottom {
      width: 100px;
      margin: 33px auto;
    }
  }

  .up {
    text-align: center;
    line-height: 43px;
  }

}
</style>