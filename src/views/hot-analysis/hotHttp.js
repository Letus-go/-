import http from "@/api/axios";
import {getThreeParmas} from "@/api/parmas";
//热度排行榜
export function getLevel(beginDate,endDate,keywords){
    let data = new FormData()
    data.append('similar', false)
    data.append('emotion', 'ALL')
    data.append('orderByType', 'HOT_VALUE')
    data.append('matchingType',' TITLE_AND_BODY'
    )
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
//情感分析
export function getFeeling(beginDate,endDate,keywords){
    return http.post('/api/data-visualization/analysis/emotional',getThreeParmas(beginDate, endDate, keywords))

}
//网站统计
export function getWeb(beginDate,endDate,keywords){

    return http.post('/api/data-visualization/analysis/statistic/site',getThreeParmas(beginDate, endDate, keywords))

}
//地域统计
export function getAddress(beginDate,endDate,keywords){
    return http.post('/api/data-visualization/analysis/statistic/region',getThreeParmas(beginDate, endDate, keywords))

}
//媒体活跃度
export function geActive(beginDate,endDate,keywords){
    return http.post('/api/data-visualization/analysis/statistic/media/active',getThreeParmas(beginDate, endDate, keywords))

}