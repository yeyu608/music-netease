import service from '../index'
// 精品歌单
export function Songrecoms(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, { params }).then(res => resolve(res)).catch(err => reject(err))
    })
}
export function getBanner(url, params) {
    return new Promise((resolve, reject) => {
        service.get(url, { params }).then(res => resolve(res)).catch(err => reject(err))
    })
}