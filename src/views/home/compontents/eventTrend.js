import { formatTime1} from "@/formatTime";

export function trend(trendDate) {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: trendDate.map(item => {
                    return formatTime1(item.x)
                }),
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                // name: 'Direct',
                type: 'bar',
                // label:{formatter: '{b}: {@score}'},
                barWidth: '50%',
                data: trendDate.map(item => {
                    return item.y
                }),
                itemStyle: {
                    // normal是柱状图的正常样式
                    normal: {
                        color: '#ffc16e',
                    },

                },
            }
        ]
    };

}