const express = require('express');
const mongo = require('../db/mongo');

const router = express.Router();

const {formatData,encrypto} = require('../utils')

const colName = 'user';

// /user/reg
router.post('/reg',async (req,res)=>{
    let {username,password} = req.body;
    console.log('加密前',password)

    // 加密密码
    password = encrypto(password)
    console.log('加密后',password)

    try{
        await mongo.create(colName,{username,password});
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:400}))
    }
})

// /user/login
router.get('/login',async (req,res)=>{
    let {username,password} = req.query;

    // 加密密码
    password = encrypto(password)

    const result = await mongo.find(colName,{username,password},{fields:{password:0}});
    console.log(username,password,result)
    if(result.total > 0){
        res.send(formatData({
            data:result.result[0]
        }))
    }else{
        res.send(formatData({code:401}))
    }
})

// /user/check
router.get('/check',async (req,res)=>{
    const {username} = req.query;

    const result = await mongo.find(colName,{username})
    if(result.total>0){
        res.send(formatData({code:400}))
    }else{
        res.send(formatData())
    }
})

router.get('/list',async (req,res)=>{
    let {page=1,size=10,sort='regtime',total} = req.query;
    let skip = (page-1)*size;
    let limit = size*1;
    total = (total=='0'||total=='false') ? false : true;
    const result = await mongo.find(colName,{},{skip,limit,sort,total})

    res.send(formatData({data:total?result:result.result}))
})

router.patch('/changepassword',async (req,res)=>{
    
    const {password,_id} = req.body;
    const result = await mongo.update(colName,{_id},{$set:{password}})
    if(result.modifiedCount>0){
        res.send(formatData());
    }else{
        res.send(formatData({code:400}))
    }
})

module.exports = router;