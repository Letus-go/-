import http from "@/api/axios";
import {getThreeParmas} from "@/api/parmas";
//获取详情页信息
export function getDetailInfo(id){
    return http.get('/api/data-visualization/store/detail/'+id)
}

//传播路径
export function getTranstion(beginDate,endDate,keywords){
    return http.post('/api/data-visualization/analysis/spread/path/v2',getThreeParmas(beginDate, endDate, keywords))
}

//相似舆情
export function getCommon(beginDate,endDate,id){
    let data = new FormData()
    data.append('beginDate', beginDate)
    data.append('endDate', endDate)
    data.append('id', id)
    return http.post('/api/data-visualization/analysis/opinion/similar',data)
}