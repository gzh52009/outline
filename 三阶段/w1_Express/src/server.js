/**
 * express实现http服务器/静态资源服务器
 */
const express = require('express');

const server = express();

// 实现静态资源服务器
const staticMiddleware = express.static('../public');
server.use(staticMiddleware);

// 自定义中间件
server.use(function(req,res,next){
    console.log('middleware1')
    res.write('mddleware1')
    // res.send([{username:'tiantian',password:1234},{username:'laoxie',password:123456}]);// 等效于res.end()
    next();
})
server.use('/test',function(req,res,next){
    console.log('middleware3')
    res.write('mddleware3');// 等效于res.end()
    // next();
})
server.use(function(req,res,next){
    console.log('middleware2')
    // res.send('abc')
})

// 端口范围：1-2^16
server.listen(2009,()=>{
    console.log('server is runing on port 2009');
})