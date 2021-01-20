const express = require('express')
const router = express.Router()

// 获取所有商品：/goods
router.get('/list',(req,res)=>{
    res.send('所有商品')
})

router.get('/:id',(req,res)=>{
    res.send('获取单个商品')
})

router.post('/:id',(req,res)=>{
    res.send('添加商品')
})
router.put('/:id',(req,res)=>{
    res.send('添加商品')
})
router.delete('/:id',(req,res)=>{
    res.send('删除商品')
})

module.exports = router;