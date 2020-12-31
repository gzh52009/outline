function request(options){
    // 基础路径
    var baseUrl = 'http://localhost:2009/api';

    var defaults = {
        type:'get',
        data:{},
        async:true
    }
    var opt = Object.assign({},defaults,options);
    // for(var key in options){
    //     defaults[key] = options[key];
    // }
    // var opt = defaults;

    // type类型统一小写
    opt.type = opt.type.toLowerCase();
    

    opt.url = opt.url.indexOf('http')>=0 ? opt.url : baseUrl + opt.url;

    // 转换参数格式：{page:1,size:10} => page=1&size=10
    var params = '';
    for(var key in opt.data){
        params += key + '=' + opt.data[key] + '&'
    }
    // 删除多余&
    params = params.slice(0,-1);

    // 为get,delete请求设置参数：通过url传递
    if(['get','delete','jsonp'].includes(opt.type)){
        opt.url = opt.url +  (opt.url.includes('?') ? '&' : '?') + params;
        params = null;
    }

    if(opt.type === 'jsonp'){
        // 定义全局函数
        var callbackName = 'getData' + Date.now();// getData15645234652346
        window[callbackName] = function(data){
            typeof opt.success==='function' && opt.success(data);

            // 删除script标签
            document.body.removeChild(script);

            // 删除全局函数
            delete window[callbackName];
        }

        var script = document.createElement('script');
        script.src = opt.url + '&callback='+callbackName;
        document.body.appendChild(script);
        return;
    }

    // 尝试执行这里的代码，如果报错则执行catch中的代码
    let xhr = new XMLHttpRequest();
   
    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText);// {code,data,msg}
        typeof opt.success==='function' && opt.success(data);
    }
    xhr.open(opt.type,opt.url,opt.async);
    // post,put，patch
    if(['post','put','patch'].includes(opt.type)){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    xhr.send(params);
}

request.jsonp = function(url,data,callback){
    if(typeof data === 'function' && callback === undefined){
        callback = data;
        data = {}
    }
    request({
        type:'jsonp',
        url,
        data,
        success:callback
    })
}
request.get = function(url,data,callback){
    if(typeof data === 'function' && callback === undefined){
        callback = data;
        data = {}
    }
    request({
        type:'get',
        url,
        data,
        success:callback
    })  
}
request.post = function(url,data,callback){
    if(typeof data === 'function' && callback === undefined){
        callback = data;
        data = {}
    }
    request({
        type:'post',
        url,
        data,
        success:callback
    })  
}
request.put = function(url,data,callback){
    if(typeof data === 'function' && callback === undefined){
        callback = data;
        data = {}
    }
    request({
        type:'put',
        url,
        data,
        success:callback
    })  
}

// request({
//     url:'/goodslist.php?a=b', // /goodslist.php?a=b?c=10&d=20
//     // type:'GET',
//     data:{
//         c:10,
//         d:20
//     }
// })
// request({
//     url:'/jsonp1.php',
//     type:'jsonp',
//     success(data){
        
//     }
// })
// request({
//     url:'/jsonp2.php',
//     type:'jsonp',
//     success(data){
        
//     }
// })
// request.jsonp('/jsonp2.php',{},function(data){

// })
// request.get('/goodslist.php',function(){

// })
// request.post('/reg.php',{username,password},function(){

// })
// request.get('/get_data.php',function(){})
// request.put()
// request.delete()