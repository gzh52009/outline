const express = require('express');
const mongo = require('../db/mongo');
const router = express.Router();

const {formatData} = require('../utils')

const colName = 'user';

// /user/reg
router.post('/reg',async (req,res)=>{
    const {username,password} = req.body;

    const {insertedCount} = await mongo.create(colName,{username,password});

    if(insertedCount>0){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
})

// /user/login
router.get('/login',async (req,res)=>{
    const {username,password} = req.query;

    const result = await mongo.find(colName,{username,password})
    if(result.length > 0){
        res.send(formatData())
    }else{
        res.send(formatData({code:401}))
    }
})

// /user/check
router.get('/check',async (req,res)=>{
    const {username} = req.query;

    const result = await mongo.find(colName,{username})
    if(result.length > 0){
        res.send(formatData({code:400}))
    }else{
        res.send(formatData())
    }
})

router.get('/list',async (req,res)=>{

    const result = await mongo.find(colName)

    res.send(formatData({data:result}))
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