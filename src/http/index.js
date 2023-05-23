// 通过axios封装

import axios from 'axios';

let service = axios.create({
    baseURL: "http://www.codeman.ink:3000", //服务器的根地址
    timeout: 6000 //
})

// 创建请求拦截

service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)


// 创建响应拦截
service.interceptors.response.use(
    response => {
        let res = response.data
        return res
    },
    err => {
        return Promise.reject(err)
    }
)
export default service