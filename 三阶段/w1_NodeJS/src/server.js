/*
    Nodejs实现http服务器
    * 依赖模块：http
*/
const http = require('http');

const server = http.createServer((request,response)=>{
    // 前端任何请求都会进入这里
    // 设置响应头content-type：用于告诉浏览器相应的内容类型
    response.writeHead(200,{'Content-Type':"text/html;charset=utf-8"})
    response.write('hello')
    response.write('<p>node</p>')
    response.end('end')
})

server.listen(2009,()=>{
    console.log('服务器已经启动成功');
})