const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // webpack常用配置
    // 1.入口
    entry:path.join(__dirname,'src/main.js'),

    // 2.出口
    output:{
        // 输出文件路径
        path:path.join(__dirname,'dist'),
        // 输出js文件格式
        filename: "js/[name].[hash:5].bundle.js"
    },

    // 3. 本地服务器
    devServer:{
        // 配置web服务器根目录
        contentBase:path.join(__dirname,'public'),
        proxy:{
            '/api':{
                target:'http://120.76.247.5:2020',
                changeOrigin: true,
            }
        }
    },

    // 默认扩展名
    resolve:{
        alias:{
            // 只支持绝对路径
            '@':path.resolve('./src'),
            '@u':path.resolve('./src/utils')
        },
        extensions:['.js','.jsx']
    },

    // 4.加载器loader
    module:{
        rules:[
            // js加载器
            {
                test:/\.jsx?$/,

                // 设置编译/不编译目录（只能使用绝对路径）
                include:path.resolve('./src'),
                // exclude:'./node_modules',
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'], // 插件集合
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy:true}],
                            ['@babel/plugin-proposal-class-properties',{ loose: false }]
                        ]
                    }
                }]
            },
            // css加载器：css-loader + style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader + node-sass + css-loader + style-loader
            // sass加载器：sass-loader + node-sass + css-loader + style-loader
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },

            // 图片加载器: url-loader + file-loader
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
            template:path.join(__dirname,'public/template.html')
        })
    ]

}