export const baseUrl = 'https://api.qfh5.cn';//'http://120.76.247.5:2002'

const request = function (url, data, options = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            ...options,
            url: baseUrl + '/api' + url,
            data,
            success(res) {
                resolve(res.data)
            },
            fail: reject
        })
    })
}
request.get = function (url, data, options = {}) {
    options.method = 'get';
    return request(url, data, options)
}
request.post = function (url, data, options = {}) {
    options.method = 'post';
    return request(url, data, options)
}
request.put = function (url, data, options = {}) {
    options.method = 'put';
    return request(url, data, options)
}
request.delete = function (url, data, options = {}) {
    options.method = 'delete';
    return request(url, data, options)
}

export default request;