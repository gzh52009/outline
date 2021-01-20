/**
 * 利用express编写数据接口
    * 路由：router
        > 根据访问不同的路径，响应相应的数据
 */

const express = require('express');
const PORT = 2009;

// 启动一个服务器
const app = express();

// 静态资源服务器
app.use(express.static('../public'));

// 编写数据接口（路由）
// 处理请求体数据，并格式化到req.body
app.use(express.urlencoded({extended:false}),express.json(),express.raw())

// 注册
app.post('/reg',(req,res)=>{
    // 获取post请求参数：req.body
    console.log('req.body',req.body);
    res.send('注册用户成功')
})
app.post('/goods',()=>{

})

// 登录
app.get('/login',(req,res)=>{
    // 获取get请求参数：req.query
    res.send(req.query)
});


let goodslist = [
    {name:'huawei mate40 pro',price:5998,id:1,imgurl:'img/mate40.png'},
    {name:'xiaomi11',price:3999,id:2,imgurl:'img/mi11.png'},
    {name:'apple 13',price:7998,id:3,imgurl:'img/apple13.png'},
]
// 获取商品列表
app.get('/goodslist',(req,res)=>{
    
    res.send(goodslist)
})
// 根据id获取单个商品: 动态路由
// 路径为 /goods/1
app.get('/goods/:id',(req,res)=>{
    // 获取动态路由参数：req.params
    console.log('req.params',req.params)
    const {id} = req.params;//1
    // goodslist.forEach((item)=>{
    //     if(item.id == id){
    //         res.send(item)

    //     }
    // })
    // const current = goodslist.filter(item=>item.id==id)[0];
    const current = goodslist.find(item=>item.id==id);
    if(current){
        res.send(current)
    }else{
        res.sendStatus(404);
    }
})

// 监听端口
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}` )
})
