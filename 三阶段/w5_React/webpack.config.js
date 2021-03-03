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
        // 代理
        // proxy:{
        //     '/offer':{
        //         // 目标服务器
        //         target: 'https://offer.qfh5.cn', 
            
        //         // 修改请求源
        //         changeOrigin: true,
            
        //         // 路径重写
        //         pathRewrite: {
        //             '^/api/offer': '/api', // rewrite path
        //         },
        //     }
        // }
    },

    // 默认扩展名
    resolve:{
        extensions:['.js','.jsx']
    },

    // 4.加载器loader
    module:{
        rules:[
            // js加载器
            {
                test:/\.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'], // 插件集合
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            // css加载器：css-loader + style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader + node-sass + css-loader + style-loader
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