const express = require('express')
const router =  express.Router();

const userRouter = require('./user')
const goodsRouter = require('./goods')
const uploadRouter = require('./upload')


router.use(express.urlencoded({extended:false}),express.json(),express.raw())

// 用户接口: /api/user
router.use('/user',userRouter);

// 商品接口: /api/goods
router.use('/goods',goodsRouter)

router.use('/upload',uploadRouter)

module.exports = router;