import http from '../../api/axios'
import {getThreeParmas} from "@/api/parmas";

//舆情走势
export function getInfoTrend(beginDate, endDate, keywords) {
    return http.post('/api/data-visualization/store/opinion/trend', getThreeParmas(beginDate, endDate, keywords))
}

//热点信息
export function getHotInfo(beginDate, endDate, keywords) {
    let data = new FormData()
    data.append('similar', false)
    data.append('emotion', 'ALL')
    data.append('orderByType', 'SMART')
    data.append('matchingType', 'TITLE_AND_BODY')
    data.append('mediaType', 'ALL')
    data.append('minScore', '0')
    data.append('removeDuplicate', 'false')
    data.append('beginTime', beginDate)
    data.append('endTime', endDate)
    data.append('keyword', keywords)
    data.append('current', 1)
    data.append('size', 20)
    return http.post('/api/data-visualization/store/search', data)
}