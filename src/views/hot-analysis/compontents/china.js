export function china(datas) {
    // console.log(datas)
    return {
        backgroundColor: "transparent",
        // title: {
        //     // text: "信息来源",
        //     // subtext: "data from PM25.in",
        //     // sublink: "http://www.pm25.in",
        //     left: "center",
        //     textStyle: {
        //         color: "blue"
        //     }
        // },
        tooltip: {
            trigger: "item",
            formatter: "{b}:{c} "
        },
        // 1)加上这个就可以实现多种颜色的功能
        visualMap: {
            min: 0,
            max: 10000,
            left: 20,
            bottom: 50,
            showLabel: !0,
            textStyle: {
                color: '#fff',
            },
            pieces: [{
                gt: 100,
                label: "> 100",
                color: "#422afe"
            }, {
                gte: 10,
                lte: 100,
                label: "10 - 100",
                color: "#3f49fe"
            }, {
                gte: 1,
                lt: 10,
                label: "1 - 9",
                color: "#2875fe"
            }, {
                gt: 0,
                lt: 1,
                // label: "1",
                color: "#3aa0ff"
            }, {
                value: 0,
                color: "#4ab3fc"
            }],
            show: !0
        },
        series: [
            {
                type: "map",
                map: 'china',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                roam: true,
                animation: false,
                data: datas
            },
        ]

    }

}