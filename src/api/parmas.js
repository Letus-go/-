export function getThreeParmas(beginDate, endDate, keywords){
        let data = new FormData()
        data.append('beginDate', beginDate)
        data.append('endDate', endDate)
        data.append('keywords', keywords)
        return data
}