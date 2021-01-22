const express = require('express');
const allRouter = require('./router')

const app = express();

// 静态资源服务器
app.use(express.static('../public',{
    // 索引页
    // index:'views/reg.html',
    maxAge:1000*60*60*24*2
}))

// 数据接口
app.use('/api',allRouter);

const PORT = 2009;
app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})