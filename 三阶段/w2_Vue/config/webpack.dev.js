const path = require('path')
const baseConfig = require('./webpack.base')

module.exports = {
    ...baseConfig,
    // 3. 本地服务器
    devServer:{
        // 配置web服务器根目录
        contentBase:path.join(__dirname,'../public'),
    },
}