/**
    * 静态资源服务器
        * 依赖模块：http,fs,url,path
 */

const http = require('http');
const url = require('url')
const fs = require('fs');
const path = require('path');
const mine = require('./module/mime')

const server = http.createServer((req,res)=>{
    // 获取静态资源文件路径: /img/g1.jpg
    const {pathname} = new URL(req.url,'http://localhost:2009');

    // 转成系统绝对路径
    const realPath = path.join(__dirname,pathname)
    // path.resolve()

    // console.log('path',pathname,__dirname,realPath)

    // 获取扩展名
    let extname = pathname.match(/\.\w+$/);// ['.jpg'],null
    if(extname){
        extname = extname[0].slice(1);
    }

    // 读取文件内容
    fs.readFile(realPath,(err,content)=>{
        // err: 读取文件失败时的信息，默认为null
        // content: 读取的文件内容
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'})
            res.end('读取文件错误');
            // return;
        }
        console.log('content',content);
        res.writeHead(200,{'Content-Type':mine[extname] + ';charset=utf-8'})
        res.end(content);
    })

    // req: 请求对象，保存前端发来的所有信息
    // res: 响应对象，可以用它实现所有的响应操作
    // 任何的请求都会进入这个函数
    // 要做静态资源服务器，就要根据不同的请求，响应相应的内容
    // res.writeHead()

    // res.end(pathname);
}).listen(2009,()=>{
    console.log('server is runing...')
})