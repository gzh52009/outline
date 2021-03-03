const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // webpack常用配置
    // 1.入口
    entry:path.join(__dirname,'../src/main.js'),

    // 4.加载器loader
    module:{
        rules:[
            // js加载器
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            // css加载器：css-loader + style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader + node-sass + css-loader + style-loader
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },

            // 图片加载器
            {
                test:/\.(?:jpe?g|png|gif|webp|svg|bmp)$/,
                // include/exclude
                // include:path.join(__dirname,'../src'),
                // exclude:path.join(__dirname,'node_modules'),
                use:{
                    loader:'url-loader',
                    options:{
                        esModule: false,
                        name:'img/[name].[hash:5].[ext]',
                        limit:10000, // 当文件大小小于等于10k时，转成base64编码
                    }
                }
            }
        ]
    },

    // 5.插件plugin
    plugins:[
        // 作用：生成一个index.html文件
        new HtmlWebpackPlugin({
            // 配置模板
            template:path.join(__dirname,'../public/template.html')
        }),

         // Vue-loader 15.x之后的版本都需要伴随 VueLoaderPlugin， 否则报错
         new VueLoaderPlugin(),
    ]

}