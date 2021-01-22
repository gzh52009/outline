const express = require('express')
const router = express.Router()

const mysql = require('../db/mysql');
const {formatData} = require('../utils')

// 获取所有商品：/goods
router.get('/list',async (req,res)=>{
    let {page=1,size=10} = req.query;
    let idx = (page-1)*size;
    let sql = `select * from goods limit ${idx},${size}`;
    const rows = await mysql.query(sql)
    res.send(formatData({data:rows}))
})

router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let sql = `select * from goods where id=${id}`;
    const rows = await mysql.query(sql);
    const result = formatData({
        data:rows[0]
    })
    res.send(result)
})

router.post('/add',async (req,res)=>{
    const {name,price,color,size,imgurl,category} = req.body;
    let sql = `insert into goods(name,price,color,size,imgurl,category) values('${name}',${price},'${color}','${size}','${imgurl}','${category}')`;
    console.log('sql',sql);
    try{
        const rows = await mysql.query(sql);
        console.log('rows',rows);
        res.send(formatData())
    }catch(err){
        console.log('err',err);
        res.send(formatData({code:400}))
    }
})
router.put('/:id',(req,res)=>{
    res.send('修改商品')
})
router.delete('/:id',(req,res)=>{
    res.send('删除商品')
})

module.exports = router;