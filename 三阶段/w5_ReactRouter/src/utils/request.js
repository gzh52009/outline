const baseUrl = process.env.NODE_ENV==='development' ? '' : 'http://120.76.247.5:2020'
function request(url,data={},config={}){
    url = baseUrl + '/api' + url;

    if(config.method){
        config.method = config.method.toLowerCase();
    }

    if(config.method===undefined || ['get','delete'].includes(config.method)){
        let queryStr = '';
        for(let key in data){
            queryStr += `${key}=${data[key]}&`
        }
        queryStr = queryStr.slice(0,-1);
        url = url + (url.includes('?') ? '&' : '?') + queryStr;
    }else if(['post','put','patch'].includes(config.method)){
        config.body = JSON.stringify(data);
        if(!config.headers){
            config.headers = {}
        }
        config.headers['Content-Type'] = 'application/json'
    }
    return fetch(url,config)
    .then(function(response) {
        return response.json();
    })
}

request.get = function(url,data,config){
    return request(url,data,config)
}

request.post = function(url,data,config){
    config = {
        ...config,
        method:'post'
    }
    return request(url,data,config)
}
request.put = function(url,data,config){
    config = {
        ...config,
        method:'put'
    }
    return request(url,data,config)
}
request.patch = function(url,data,config){
    config = {
        ...config,
        method:'patch'
    }
    return request(url,data,config)
}
request.delete = function(url,data,config){
    config = {
        ...config,
        method:'delete'
    }
    return request(url,data,config)
}


export default request;