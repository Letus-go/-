import Vue from 'vue'
import Vuex from 'vuex'
// 存入本地
// import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 修改路由id
    changerouteid:'',
    // 修改路由
    changeroute:'',
    // 关键字
    keyWords:'',
    keywordsId:0,
    //详情页id
    detailId:'',
    //是否显示详情页
    show:false,
  // //   信息监测数据
  //   infoDatas:[]
  //   页码
    current:1,
  //  正负信息
    TORF:'ALL',
    emotionCheckedList:[],

  //   选择时间
    begin:'',
    end:'',
    timeId:0,
  //  内容类型
    contentType:'',
    conyentTypeId:0,

  },
  getters: {
  },
  // 修改
  mutations: {
    //路由
    changeRoute(state,payload){
      // console.log(state,payload)
      state.changerouteid=payload.id
      state.changeroute=payload.route
    },
    // 关键字
    changeKey(state,payload){
      state.keyWords=payload.keywords
      state.keywordsId=payload.keywordsId
    },
  //   详情页id
    changeDetailId(state,payload){
      state.detailId=payload.detailId
    },
  // 是否显示详情页
    changeShow(state,payload){
      state.show=payload.show
    },
  //   修改信息监测数据
  //   changeInfoData(state,payload){
  //     state.infoDatas=payload.infoDatas
  //   }
    changeCurrent(state,payload){
      state.current=payload.current
    },
    //   修改正负信息
    changeTORF(state,payload){
      state.TORF=payload.TORF
      state.emotionCheckedList=payload.emotionCheckedList
    },
    //   修改时间
    changeTime(state,payload){
      state.begin=payload.begin
      state.end=payload.end
      state.timeId=payload.timeId
    },
  //   修改内容类型
    changeContentType(state,payload){
      state.contentType=payload.contentType
      state.conyentTypeId=payload.conyentTypeId
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ],
})
