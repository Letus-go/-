<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "topView",
    data() {
        return {
            path:'/home',
            loading: false,
            visible: false,
            collapsed: false,
            changeStyleId: '',
            changeroute: '',
            nav_data: [{
                id: 0,
                value: '首页',
                route: '/home'
            }, {
                id: 1,
                value: '信息监测',
                route: '/info-display'
            }, {
                id: 2,
                value: '热点分析',
                route: '/hot-analysis'
            }, {
                id: 3,
                value: '事件分析',
                route: '/event'
            }, {
                id: 4,
                value: '舆情简报',
                route: '/felling'
            }, {
                id: 5,
                value: '舆情大屏展示',
                route: '/data-v'
            }]
        };
    },
    created() {
        // console.log(this.$route.path)
       // if(this.$route.path===this.$store.state.changeroute){
       //     // this.$store.commit('changeRoute',{id:})
       //     this.$refs.bgc.class='li_s li_style'
       // }
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
        changeStyle(item) {
            // this.changeStyleId = item.id
            // console.log(this.changeStyleId)
            // this.changeroute = item.route
            this.$store.commit('changeRoute', {id: item.id, route: item.route})
            // console.log(this.$store.state.changeroute)

            // console.log(this.$route.path)
            if (this.$route.path != item.route) {
                if (this.$store.state.changeroute == "/data-v") {
                    let routeData = this.$router.resolve({
                        path: "/data-v",
                        query: {}
                    });
                    //必要操作，否则不会打开新页面
                    window.open(routeData.href, '_blank');
                }else {
                    this.$router.push({
                        path: item.route,
                    })
                }

            }

        },
        showModal() {
            this.visible = true;
        },
        handleOk() {
            // console.log(e)
            this.loading = true;
            setTimeout(() => {
                this.visible = false;
                this.loading = false;
            }, 3000);
        },
        handleCancel() {
            // console.log(e)
            this.visible = false;
        },

    },

})
</script>

<template>
    <header>
        <div class="box">
            <!--             左侧图片-->
            <div class="box_img">
                <img src="@/assets/logo.png" height="44" width="171"/></div>
            <div class="box_content">
                <ul class="box_nav">
                    <li ref="bgc" v-for="(item) in nav_data" :key="item.id" class="li_s"
                        :class="$store.state.changerouteid==item.id?'li_style':''" @click="changeStyle(item)">
                        {{ item.value }}
                    </li>
                </ul>
                <!--                搜索-->
                <div class="search">
                    <a-icon type="search"/>
                    搜索
                </div>
                <!--                登录-->
                <div class="top_login">
                    <a-button type="primary" @click="showModal">
                        登录
                    </a-button>
                    <a-modal v-model="visible" title="Title" on-ok="handleOk">
                        <template slot="footer">
                            <a-button key="back" @click="handleCancel">
                                Return
                            </a-button>
                            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                                Submit
                            </a-button>
                        </template>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </a-modal>
                </div>
            </div>
        </div>

    </header>


</template>

<style scoped lang="less">
header {
  position: sticky;
  top: 0;
  display: flex;
  z-index: 999;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #1890ff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, .2);

  .box {
    width: 1300px;
    height: 60px;
    margin: 0 auto;
    display: flex;

    .box_img {
      padding: 0;
      width: 200px;
      line-height: 53px;
      margin-left: 50px;

    }

    .box_content {
      margin-left: 50px;
      height: 60px;
      border: none;
      display: flex;
      width: calc(100% - 200px);
      justify-content: space-between;
      padding-right: 22px;

      .box_nav {
        min-width: 750px;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;

        li {
          display: inline-block;
          vertical-align: middle;
          outline: 0;
          color: #ffffff;
          cursor: pointer;
          text-align: center;
          min-width: 120px;
          height: 60px;
          line-height: 60px;
          padding: 0;
          font-size: 16px;
          border-radius: 2px;
          font-weight: 500;
          font-family: MicrosoftYaHeiUI;
        }

        .li_s {
          display: inline-block;
          vertical-align: middle;
          outline: 0;
          color: #ffffff;
          cursor: pointer;
          text-align: center;
          min-width: 120px;
          height: 60px;
          line-height: 60px;
          padding: 0;
          font-size: 16px;
          border-radius: 2px;
          font-weight: 500;
          font-family: MicrosoftYaHeiUI;
        }

        .li_style {
          float: left;
          outline-style: none;
          cursor: pointer;
          text-align: center;
          min-width: 120px;
          height: 60px;
          line-height: 60px;
          padding: 0;
          font-size: 18px;
          color: #1890ff;
          background-color: #fff;
          font-weight: 400;
        }
      }

      .search {
        width: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
      }

      .top_login {
        width: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;

        .ant-btn-primary {
          background-color: #1890ff;
        }
      }

    }

  }

}
</style>