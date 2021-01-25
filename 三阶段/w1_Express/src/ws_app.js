const ws = require('ws');
const http = require('http');
const express = require('express');

// 1. web服务器
const app = express();
// 静态资源服务器
app.use(express.static('../public'));

// 利用http模块连接express服务器
const server = http.createServer(app)

// 2. socket服务器
const wsserver = new ws.Server({
    // 利用http模块连接websocket
    server,
    //port:1001
})

server.listen(2009,()=>{
    console.log('server is running on port 2009')
});

// 监听连接事件
wsserver.on('connection',client=>{
    // 监听消息事件
    client.on('message',msg=>{
        // 广播：遍历所有客户端，并给所有客户端转发消息
        wsserver.broadcast(msg);
    })
})

// 封装广播方法
wsserver.broadcast = function(msg){
    wsserver.clients.forEach(c=>{
        c.send(msg);
    })
}