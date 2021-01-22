const express = require('express');
const multer = require('multer')
const router = express.Router();
const path = require('path');
const fs = require('fs');

// 创建图片上传中间件
// dest：存放图片的路径，目录不存在则自动创建
// var upload = multer({ dest: '../public/uploads/' })

let storage = multer.diskStorage({

    // 上传文件保存目录，无则自动创建
    // destination:'../public/uploads/',
    // 根据字段名写入不同的目录(目录不存在不能自动创建，而是会报错)
    destination: function (req, file, cb) {
        const filePath = `../public/uploads/${file.fieldname}`;
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath,{
                recursive:true // 递归创建：如父级目录不存在，则一并创建
            })
        }
        cb(null, filePath);
    },

    // 格式化文件名
    filename: function (req, file, cb) {
        // 获取文件后缀名
        let ext = path.extname(file.originalname); // .jpg,.png,.gif

        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})

// 过滤文件类型：只允许上传jpg,png,gif
const fileFilter = function fileFilter(req, file, cb) {

    let ext = path.extname(file.originalname);
    cb(null, /\.(png|jpe?g|gif)/i.test(ext))
}

// 设置文件保存目录
let upload = multer({ storage, fileFilter });


// 头像上传
router.post('/avatar', upload.single('avatar'), (req, res) => {
    // 图片会格式化到: req.file，其他文字数据会格式化到req.body
    const { userid } = req.body;
    console.log('req.file', req.file)
    res.send('头像上传成功')
})

// 商品图片上传
router.post('/goods', upload.array('goods',5), (req, res) => {
    // 图片会格式化到: req.files
    console.log('req.files', req.files);
    res.send('商品图片上传成功')
})

module.exports = router;