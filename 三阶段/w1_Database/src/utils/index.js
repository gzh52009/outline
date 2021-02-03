const crypto = require('crypto')

function formatData({code=200,data=[],msg='success'}={}){
    if(code === 400){
        msg = 'fail'
    }
    if(code === 401){
        msg = 'No Access'
    }
    return {
        code,
        data,
        msg
    }
}

/**
 * 数据加密
 * @param {String} data 待加密数据
 * @return {String}     返回加密后的数据
 */
function encrypto(data){
     // 加密密码
     const md5 = crypto.createHash('md5')
     md5.update(data)
     data = md5.digest('hex');
     console.log('md5',data)
     // 二次加密
     const hash = crypto.createHash('sha256')
     hash.update(data)
     data = hash.digest('hex')
     console.log('sha256',data)

     return data;
}

module.exports = {
    formatData,
    encrypto
}