<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "bottomView",
    data(){
        return{
            bottom_img:[
                {
                    id:0,
                    src:'http://yuqing.shangyuninfo.com/assets/applet.png',
                    value:'舆情小程序'
                },
                {
                    id:1,
                    src:'http://yuqing.shangyuninfo.com/assets/shangyun.jpg',
                    value:'尚云公众号'
                },
                {
                    id:2,
                    src:'http://yuqing.shangyuninfo.com/assets/wechat.jpg',
                    value: '联系微信'
                },

            ],
            bottom_data: [{
                id: 0,
                value: '尚云科技',
                route:'home'
            }, {
                id: 1,
                value: '星云大数据平台',
                route: 'info-display'
            }, {
                id: 2,
                value: '天亮教育官网',
                route: 'hot-analysis'
            }, {
                id: 3,
                value: '天亮教学管理平台',
                route:'home'
            }, {
                id: 4,
                value: '车载物联网管理平台',
                route:'home'
            }, {
                id: 5,
                value: '天亮云课堂',
                route: '/data-v'
            }]
        }
    }
})
</script>

<template>
    <footer>
        <div class="f_box">
            <a-row>
<!--                左侧-->
                <a-col :span="16">
                   <div class="link_fs">
                       <router-link to='' class="link_fsbox" v-for="item in bottom_data" :key="item.id">
                           {{item.value}}
                       </router-link>
                   </div>
                    <div class="bottom_info">
                        Copyright © 2017-2025 河北尚云信息科技有限公司 备案号:冀ICP备17020003号 客服电话：17731197976
                    </div>
                </a-col>
<!--                右侧-->
                <a-col :span="8">
                    <ul class="bottom_img">
                        <li v-for="item in bottom_img" :key="item.id"><img :src="item.src" height="430" width="430"/>
                        <p>{{item.value}}</p>
                        </li>
                    </ul>
                </a-col>
            </a-row>
        </div>
    </footer>
</template>

<style scoped lang="less">
/* 路由高亮 */
footer {
  //position: fixed;
  //bottom: 0;
  border: 1px solid;
  background: #244154;
  width: 100%;
  height: 180px;
    .f_box{
        padding-top: 36px;
        margin-left: auto;
        margin-right: auto;
        width: 1200px;
        height: 100%;
        color: #fff;
        //左侧样式
        .link_fs{
            font-size: 14px;
            margin-top: 20px;
            display: flex;
            justify-content:left;
            .link_fsbox{
                cursor: pointer;
                color: #ffffff;
                margin-right: 10px;
            }
          .link_fsbox:hover{
            cursor: pointer;
            color: #1890ff;
            margin-right: 10px;
          }
        }
        .bottom_info{
            font-size: 12px;
            margin-top: 30px;

        }
    //    右侧样式
        .bottom_img{
            display: flex;
            justify-content: center;
            list-style: none;
            li{
                margin-right: 20px;
                img {
                    width: 88px;
                    height: 88px;
                    margin-bottom: 5px;
                    overflow: hidden;
                }
                p{
                    font-size: 14px;
                  text-align: center;
                }
            }
        }
    }
}

</style>