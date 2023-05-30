export function source(data) {
    return{
        tooltip: {
            trigger: 'item',
        },
        legend: {
            bottom: '5%',
                left: 'center'
        },
        color:['#3aa1ff','#36cbcb'],
        series: [{
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],

            labelLine: {
                normal: {
                    length: 10,   	// 指示线长度
                    lineStyle: {
                        color: "#595959"  // 指示线颜色
                    }
                },
            },
            emphasis: {
                scale: false//不缩放
            },
            data: data

        }]
    }
}