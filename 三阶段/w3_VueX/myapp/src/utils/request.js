/**
 * ajax请求工具包
 */

import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:2009': 'http://laoxie.com';

const request = axios.create({
    baseURL: baseURL + '/api'
})

// 简化用户的操作
request.get = function(url,data,config={}){
    return request({
        url,
        ...config,
        params:data
    })
}

export default request;