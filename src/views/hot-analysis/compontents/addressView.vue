<script>
import {defineComponent} from 'vue'
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
import chinas from '../../../../public/echartsMap.json'
import {china} from '../../../views/hot-analysis/compontents/china'
import {getAddress} from "@/views/hot-analysis/hotHttp";
import {getAgoDay} from "@/formatTime";

const columns = [
    {
        title: '排名',
        dataIndex: 'num',
        scopedSlots: {customRender: 'num'},
        align:'center'

    },
    {
        title: '地域',
        className: 'column-money',
        dataIndex: 'address',
        align:'center'

    },
    {
        title: '信息数',
        dataIndex: 'number',
        align:'center'

    },
];

export default defineComponent({
    name: "addressView",
    data() {
        return {
            datas: [{name: '北京', value: 212},
                {name: '河北', value: 212},
            ],
            columns,
            tableDatas: [{
                num: 1,
                address: 'fef',
                number: 43
            }],
            //分页参数
            pagination: {
                size: 'large',
                current: 1,
                pageSize: 5,
                total: 0,
            },

        }
    },
    methods: {
        //表格改变时触发
        handleTableChange(pagination) {
            this.pagination = pagination;
        },

    },
    created() {
        // 地图
        getAddress(getAgoDay(10), getAgoDay(), this.$store.state.keyWords).then(res => {
            // console.log(res.data)
            this.datas = res.data.map(item => {
                return {
                    // name: item.word.replace('省','').replace('市',''),
                    name: item.word.slice(0, 2),
                    value: item.number,
                }
            })
            // console.log(this.datas)
            this.tableDatas = res.data.map((item, index) => {
                return {
                    num: index + 1,
                    address: item.word,
                    number: item.number
                }
            })
            // console.log(this.data)
            let chinaMap = echarts.init(document.getElementById("map"));
            echarts.registerMap("china", chinas);
            window.onresize = chinaMap.resize; // 窗口或框架被调整大小时执行chinaMap.resize
            chinaMap.setOption(china(this.datas))
        })
    },


})
</script>

<template>
    <div class="hotTopic">
        <div class="title">
            地域统计
        </div>
        <div class="content">
            <div class="mapMain">
                <section class="section">
                    <div id="map" :style="{ height: '400px', width: '647px'}"/>
                </section>
            </div>
            <div class="maptable">
                <a-table
                        ref="table"
                        size="middle"
                        :columns="columns"
                        :dataSource="tableDatas"
                        :pagination="pagination"
                        @change="handleTableChange"
                >
            <span slot="num" slot-scope="text, record, index">
                {{ (pagination.current - 1) * pagination.pageSize + parseInt(index) + 1 }}
            </span>
                    //此处是给表格最前列添加序号
                </a-table>

            </div>
        </div>
    </div>
</template>

<style scoped lang="less">


th.column-money,
td.column-money {
  text-align: right !important;
}

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
    height: 400px;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;

    .maptable {
      margin-top: 15px;
      width: 450px;
      height: 350px;
    }
  }
}
</style>