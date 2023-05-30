import moment from "moment/moment";


// 获取几天前的时间
export function getAgoDay(n=0){
    let date= new Date();

    let newDate = new Date(date.getTime() - n*24*60*60*1000);
    return newDate
}
// 格式化YYYY-MM-DD
export function formatTime(value, type = "YYYY-MM-DD"){
    return moment(value).format(type);
}
// 格式化MM-DD
export function formatTime1(value, type = "MM-DD"){
    return moment(value).format(type);
}

// 格式化 moment().format('MMMM Do YYYY, h:mm:ss a');
export function formatTime2(value, type = "MM-DD h:mm"){
    return moment(value).format(type);
}