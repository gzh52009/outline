const express = require('express')
const router =  express.Router();
const fs = require('fs')
const path = require('path');

const request = require('request')
const cheerio = require('cheerio')

const filePath = '../public/img/wb/';
if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath,{
        recursive:true // 递归创建：如父级目录不存在，则一并创建
    })
}

// /api/spider/wb
router.get('/wb',(req,res)=>{
    // 目标地址：
    let url = 'https://www.wbiao.cn/list-97-p2.html'
    // 原理：
    // 1. 利用request模块请求目标地址的内容
    // 2. 利用cheerio模块分析过滤需要的内容
    request({
        url,
        headers: {
            'user-agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36`
        }
    }, (error, response, body) => {
        // 分析过滤
        // res.send(body);
        const $ = cheerio.load(body)
        let goodslist = [];
        $('#s_goods_list li').each((idx,el)=>{
            let $el = $(el);
            let sales = $el.find('.s_sale_num').text().match(/\d+/);
            sales = sales ? sales[0] : 0;

            let price = $el.find('.s_price').text().replace(/￥|¥/,'');
            let sale_price = $el.find('.yaofeng_price').text();
            sale_price = sale_price ? sale_price.replace(/,/g,'') : price;

            let goods = {
                id:$el.attr('goods-code'),
                name: $el.find('.s_goods_name').text(),
                price:price*1,
                sale_price:sale_price*1,
                sales:sales*1,
                imgurl:'https:'+$el.find('.s_goods_img img').data('wpl')
            }
            

            
            
            // request请求图片，得到一个文件流
            // 
            // 获取文件名
            const filename = path.basename(goods.imgurl);
            const writeStream = fs.createWriteStream(filePath+filename);
            request(goods.imgurl).pipe(writeStream);

            const writeStreamSmall = fs.createWriteStream(filePath+'small_'+filename);
            request(goods.imgurl+'?x-oss-process=image/resize,m_pad,h_350').pipe(writeStreamSmall);

            goods.imgurl = filename;
            goodslist.push(goods);
        })
        // console.log('goodslist',goodslist);
        res.send(goodslist);
    });

})

module.exports = router;