const express = require('express')
const userRouter = require('./user')
const goodsRouter = require('./goods')
const router =  express.Router();

// 用户接口: /api/user
router.use('/user',userRouter);

// 商品接口: /api/goods
router.use('/goods',goodsRouter)

module.exports = router;