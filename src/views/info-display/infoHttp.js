import http from "@/api/axios";
import {getThreeParmas} from "@/api/parmas";

//正负信息总数
export function getTFNum(beginDate, endDate, keywords) {
    return http.post('/api/data-visualization/analysis/emotional',getThreeParmas(beginDate, endDate, keywords))
}

//搜索数据
export function getInfoData(beginDate,endDate,current){
    let data = new FormData()
    data.append('beginDate', beginDate)
    data.append('endDate', endDate)
    data.append('similar', true)
    data.append('matchingType', 'TITLE_AND_BODY')
    data.append('emotion', 'ALL')
    data.append('orderByType', 'PUBLISH_TIME')
    data.append('mediaType', 'ALL')
    data.append('removeDuplicate', false)
    data.append('minScore', 0)
    data.append('keyword', 1)
    data.append('orKeyword', 2)
    data.append('notKeyword', 3)
    data.append('current', current)
    data.append('size', 10)
    return http.post('/api/data-visualization/store/search',data)
}
export function getInfoData1(beginDate,endDate,matchingType,emotion,mediaType,keyword,current){
    let data = new FormData()
    data.append('beginDate', beginDate)
    data.append('endDate', endDate)
    data.append('similar', true)
    data.append('matchingType', matchingType)
    data.append('emotion', emotion)
    data.append('orderByType', 'PUBLISH_TIME')
    data.append('mediaType', mediaType)
    data.append('removeDuplicate', false)
    data.append('minScore', 0)
    data.append('keyword',keyword)
    data.append('orKeyword', 2)
    data.append('notKeyword', 3)
    data.append('current', current)
    data.append('size', 10)
    return http.post('/api/data-visualization/store/search',data)
}
//信息状态
export function getInfoState(){
    return http.get('/api/data-visualization/analysis/emotional?dataIds=NEWS-光明网-36576233,NEWS-光明网-36576194,NEWS-光明网-36576197,NEWS-光明网-36576192,NEWS-光明网-36576119,NEWS-光明网-36576125,NEWS-光明网-36576114,NEWS-光明网-36576106,NEWS-光明网-36576095,NEWS-光明网-36576083')
}