import {getDetailInfo, getTranstion} from "@/views/detail/detailHttp";
import {getAgoDay} from "@/formatTime";
import G6 from "@antv/g6";

export function transition(detailid,keyWords){
    getDetailInfo(detailid).then(res => {
        getTranstion(getAgoDay(10), getAgoDay(),keyWords).then(res2 => {
            // console.log(res2)
           let transData = {
                isRoot: true,
                id: res.data.title,
                style: {
                    fill: 'red',
                },
                children:res2.data.treeList.map((item,index)=>{
                    return {
                        id:item.sourceID,
                        raw: {},
                        children:item.targetIDS.map(itemTree=>{
                            return {
                                id: `${index}${itemTree}`,
                                label: itemTree,
                            }
                        })
                    }
                })
            }
            const container = document.getElementById('container');
            const width = container.scrollWidth;
            const height = container.scrollHeight || 500;
            const graph = new G6.TreeGraph({
                container: 'container',
                width,
                height,
                modes: {
                    default: ['collapse-expand', 'drag-canvas'],
                },
                fitView: true,
                layout: {
                    type: 'compactBox',
                    direction: 'LR',
                    defalutPosition: [],
                    getId: function getId(d) {
                        return d.id;
                    },
                    getHeight: function getHeight() {
                        return 10;
                    },
                    getWidth: function getWidth() {
                        return 20;
                    },
                    getVGap: function getVGap() {
                        return 10;
                    },
                    getHGap: function getHGap() {
                        return 80;
                    },
                },
            });
            graph.node(function (node) {
                return {
                    size: 12,
                    anchorPoints: [
                        [0, 0.5],
                        [1, 0.5],
                    ],
                    style: {
                        fill: '#DEE9FF',
                        stroke: '#5B8FF9',
                    },
                    label: node.id,
                    labelCfg: {
                        position: node.children && node.children.length > 0 ? 'left' : 'right',
                    },
                };
            });

            graph.edge(function () {
                return {
                    type: 'cubic-horizontal',
                    color: '#A3B1BF',
                };
            });


            graph.data(transData);
            graph.render();

            let count = 0;

            graph.on('node:click', function (evt) {
                const item = evt.item;

                const nodeId = item.get('id');
                const model = item.getModel();
                const children = model.children;
                if (!children || children.length === 0) {
                    const childData = {
                        id: 'child-data-' + count,
                        type: 'rect',
                        children: [
                            {
                                id: 'x-' + count,
                            },
                            {
                                id: 'y-' + count,
                            },
                        ],
                    };
                    graph.addChild(childData, nodeId);
                    count++;
                }
            });

            if (typeof window !== 'undefined')
                window.onresize = () => {
                    if (!graph || graph.get('destroyed')) return;
                    if (!container || !container.scrollWidth || !container.scrollHeight) return;
                    graph.changeSize(container.scrollWidth, container.scrollHeight);
                };


        })
    })
}
