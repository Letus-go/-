import http from '../../../api/axios'
import {getThreeParmas} from "@/api/parmas";


//实时热门话题
export function getTotTopic() {
    return http.get('/api/yq-hotspot/hotsearch/list')
}

//来源分类

export function getSourceFrom(beginDate, endDate, keywords) {
    return http.post('/api/data-visualization/analysis/statistic/media/source',getThreeParmas(beginDate, endDate, keywords))
}

//获取热点事件
export function getHotEvent(beginDate, endDate, keywords) {
    let data = new FormData()
    data.append('similar', false)
    data.append('emotion', 'ALL')
    data.append('orderByType', 'HOT_VALUE')
    data.append('matchingType', 'TITLE_AND_BODY')
    data.append('mediaType', 'ALL')
    data.append('minScore', 0)
    data.append('removeDuplicate', true)
    data.append('beginTime', beginDate)
    data.append('endTime', endDate)
    data.append('keyword', keywords)
    data.append('current', 1)
    data.append('size', 5)
    return http.post('/api/data-visualization/store/search', data)

}

//获取负面信息
export  function getNegativeInfor(beginDate, endDate, keywords){
    let data = new FormData()
    data.append('similar', false)
    data.append('emotion', 'NEGATIVE')
    data.append('orderByType', 'SMART')
    data.append('matchingType', 'TITLE_AND_BODY')
    data.append('mediaType', 'ALL')
    data.append('minScore', 0)
    data.append('removeDuplicate', true)
    data.append('beginTime', beginDate)
    data.append('endTime', endDate)
    data.append('keyword', keywords)
    data.append('current', 1)
    data.append('size', 5)
    return http.post('/api/data-visualization/store/search',data)
}

//获取词云
export function getWordCloud(beginDate, endDate, keywords){

    return http.post('/api/data-visualization/analysis/statistic/wordCloud',getThreeParmas(beginDate, endDate, keywords))
}

//时间趋势
export function getEventTrend(beginDate, endDate, keywords){

    return http.post('/api/data-visualization/store/opinion/trend',getThreeParmas(beginDate, endDate, keywords))
}