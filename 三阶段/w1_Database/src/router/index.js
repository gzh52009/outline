const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const router =  express.Router();

const userRouter = require('./user')
const goodsRouter = require('./goods')
const uploadRouter = require('./upload')
const spiderRouter = require('./spider')
const cors = require('../filter/cors')
const {verify} = require('../utils/token');
const { formatData } = require('../utils');


// CORS跨域资源共享
router.use(cors)

router.use(express.urlencoded({extended:false}),express.json(),express.raw())

// 用户接口: /api/user
router.use('/user',userRouter);

// 商品接口: /api/goods
router.use('/goods',goodsRouter)

router.use('/upload',uploadRouter)
router.use('/spider',spiderRouter)

// jsonp请求: 后端返回全局函数执行的js代码
router.get('/jsonp',(req,res)=>{
    let {callback} = req.query;
    let user = {username:'laoxie',password:123456,gender:'男',role:'admin'}
    res.send(`${callback}(${JSON.stringify(user)})`);
})

// 校验token
router.get('/tokenverify',(req,res)=>{
    // 获取token
    const token = req.get('Authorization');
    const result = verify(token);
    if(result){
        res.send(formatData())
    }else{
        res.send(formatData({code:401}))
    }
})

// 服务器代理
// 创建一个代理目标服务器的中间件
const proxyMiddleware = createProxyMiddleware({
    // 目标服务器
    target: 'https://offer.qfh5.cn', 

    // 修改请求源
    changeOrigin: true,

    // 路径重写
    pathRewrite: {
        '^/api/offer': '/api', // rewrite path
    },
})
// 目标地址：https://offer.qfh5.cn/api/iq
// 请求地址：http://localhost:2009/api/offer/iq
// 匹配步骤：
// 1. http://localhost:2009/api/offer/iq -> https://offer.qfh5.cn/api/offer/iq
// 2. https://offer.qfh5.cn/api/offer/iq -> https://offer.qfh5.cn/api/iq

// 只有地址匹配/api/offer，才进入这个中间件
router.use('/offer',proxyMiddleware);

module.exports = router;