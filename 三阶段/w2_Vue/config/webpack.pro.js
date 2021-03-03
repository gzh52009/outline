const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = {
    ...baseConfig,
    mode:'production',
    // 2.出口
    output:{
        // 输出文件路径
        path:path.join(__dirname,'dist'),
        // 输出js文件格式
        filename: "js/[name].[hash:5].bundle.js"
    },

}