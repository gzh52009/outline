# Webpack

[TOC]

## 了解Webpack

### 什么是webpack

Webpack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到所有模块依赖，把一些不被浏览器支持的特性（如Sass，TypeScript，ES6、JSX等）转换和打包为合适的格式供浏览器使用。


### 为什要使用webpack

* 模块化开发：让我们可以把复杂的程序细化为小的文件;
* ES6转ES5：让我们能够使用JavaScript的新特性，并且能转换成浏览器可以识别的版本
* 预处理：Sass，less等CSS预处理器
* 预编译：vue单文件组件编译
* JSX语法编译等
* ...

### webpack与gulp的区别

* gulp工作流程
> Gulp的工作方式是：用户编写完文件需要编译，合并，压缩等任务的具体步骤，然后运行这些任务来达到想要的效果
![Alt text](./img/gulp.webp "Optional title")

* webpack工作流程
> Webpack的工作原理：把项目当做一个整体，通过入口文件（如：index.js）分析整个项目结构，找到所有依赖模块，并利用配置好的加载器、插件处理这些模块，最后打包为一个（或多个）浏览器可识别的文件。
![Alt text](./img/webpack.webp "Optional title")

## 使用webpack

### 安装

```bash
    #安装到你的项目目录
    npm install --save-dev webpack
```

如果你使用 webpack 4+ 版本，你还需要安装 CLI（目的是在命令行中使用webpack）

```bash
    npm install --save-dev webpack-cli
```

### 配置文件

> 在根目录创建webpack.config.js文件，并写入如下配置信息（也可以使用任意文件名，但在运行webpack时需指定`--config`参数）

* entry（String|Object）: 入口文件
> 默认输出为main.js，可以使用Object的格式指定输出文件名
* output: 输出设置
    * path: 打包后的文件存放的路径
    * filename: 打包后输出的文件名
        * `[name]`：以入口名作为文件名
        * `[hash]`：添加hash值
    * publicPath: 打包后index.html代码中文件引用前缀（如：src,href等）
    >一般用于打包后图片等资源文件的路径问题

    ```javascript
        module.exports = {
            //__dirname是一个nodejs的global变量，指代当前执行文件所在的文件夹
            entry:  __dirname + "/app/main.js",//唯一入口文件
            output: {
                path: __dirname + "/dist",//打包后的文件存放的路径
                filename: "[name]-[hash:5]-bundle.js"//打包后输出的文件名
            }
        }
    ```

* devServer：测试服务器
    > 配合`webpack-dev-server`插件使用，webpack development server 是一个webpack可选的本地开发的server。它通过nodejs的express 来启动一个server提供静态文件服务，同时它根据配置信息（webpack.config.js）来打包资源，**存在内存中**，同时当你的代码发生改变的时候，它还可以自动刷新你的浏览器。
    ```bash
        #安装
        npm install webpack-dev-server --save-dev
    ```

    * contentBase： 服务器路径（默认：项目的根目录）
    * port: 指定端口（默认：8080）
    * hot: 是否自动刷新（默认：true）
    * open: 是否自动打开浏览器（默认：false）
    * historyApiFallback: 对于单页面程序，浏览器的histroy可以设置成html5 history api或者hash
    * proxy: 服务器代理（一般用于解决ajax跨域问题）
        > webpack-dev-server的实现方法其实是对`http-proxy-middleware`的封装

    ```js
        proxy:{
            "/api":{
                target:"http://api.douban.com/v2/movie",//代理目标服务器
                changeOrigin: true,
                pathRewrite: {'^/api' : ''}, //替换部分路径
            }
        }
    ```
* mode：模式
    - production（默认）
    - development
    - none
* module.rules: 配置Loader（加载器）规则（[详情](#Loader（加载器）)）
* plugin:插件（[详情](#Plugins（插件）)）
* resolve
    * alias     别名
    * extensions 默认扩展名

    ```js
        resolve: {
            alias: {
                'vue$' : 'vue/dist/vue.js',
                '@':path.resolve('src')
            },
            extensions:['.js', '.json']
        }
    ```
      

### 运行

* npm script (推荐)
    > 在package.json中设置快捷方式，命令行运行格式：`npm run xxx`
* 写好配置文件后，在终端里运行命令进行打包操作
  ```bash
    # build：输出打包后的文件，需全局安装webpack
    webpack

    # 启动本地服务器：不输出文件，默认8080端口，需全局安装webpack-dev-server
    webpack-dev-server
  ```

```json
    // package.json
    {
        "scripts": {
            "dev":"webpack-dev-server --progress",
            "build":"webpack --progess",
            "start":"npm run dev"
        }
    }
```
* 设置环境变量
```json
    // package.json
    // windows
    {
        "scripts": {
            "dev":"set NODE_ENV=development && webpack-dev-server --progress",
            "build":"set NODE_ENV=production && webpack --progess",
        }
    }

    // Mac
    {
        "scripts": {
            "dev": "export NODE_ENV=development &&  webpack-dev-server --progress",
            "build": "export NODE_ENV=production &&  webpack --progress"
        }
    }

    // cross-env
    {
        "scripts": {
            "dev": "cross-env NODE_ENV=development webpack-dev-server --progress",
            "build": "cross-env NODE_ENV=production webpack --progress"
        },
    }
```


## Loader（加载器）

> Webpack有一个不可不说的优点，它把所有的文件都都当做模块处理，webpack通过`loader`来加载各种各样的资源（如css、js、sass、less、vue单文件组件、图片、字体文件等），不同的资源应用的不同的loader（loader需要单独安装），然后在webpack配置文件中通过`module.rules`来配置。

* module.rules(Array)
    - test（RegExp）：匹配文件扩展名的正则表达式（必须）
    - use(Object|Array)
        * loader(String)：loader的名称
        * options(Object):配置loader参数
    - loader(String|Array)
        > loader为`use.loader`的简写，可以支持多个loader(**处理顺序从后往前**)
    - include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；

### babel-loader

> Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：

* balel能做什么
  - ES6、ES7...转ES5
  - 让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；
* 常用模块
  * `@babel/core`: 核心功能
  * `@babel/preset-env`：解析标准化的ES语法
  * `@babel/plugin-transform-runtime`：解析未标准化的ES语法（如：async,await）

  >注意：`babel-loader`与`@babel/core`必须匹配版本

### 样式加载器

> 作用是让webpack可以解析执行css文件

* style-loader
    > 作用是生成一个style标签，并且将解析后的css文件插入到style中去
* css-loader
    > 使你能够使用类似@import 和 url(...)的方法实现 require()的功能, style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中（注意顺序问题）
* sass-loader：编译sass文件
    > 依赖`node-sass`模块
* less-loader
    > 依赖 `less`模块

### React
* 利用babel进行编辑，需要安装`@babel/preset-react`插件
* `@babel/preset-react`: 解析JSX

### Vue
* vue-loader
    > 编译vue代码
* vue-template-compiler：解析vue单文件模板

### typescript
* ts-loader

### url-loader

> 一个对图片等文件进行优化的加载器，可以解决图片引用路径的问题，并可以根据limit设置把小图片一dataURI的方式保存，减少http请求
* limit: 文件大小
    - 小于等于limit，则以dataURI方式显示
    - 大于limit，则调用file-loader处理
* name：文件名规则
    - 默认值：文件哈希。
    - `[path]`表示输出文件的相对路径与当前文件相对路径相同，打包后文件中引用文件的路径也会加上这个相对路径
    - `[name].[ext]`则表示输出文件的名字和扩展名与当前相同

* file-loader：解决图片引用路径的问题（img和background）
> url-loader内置file-loader的功能

```js
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:5].[ext]'
        }
    }
```



## Plugins（插件）

> loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务，可以处理loader处理不了的事情。插件的范围包括：打包优化、资源管理和注入环境变量。

### HtmlWebpackPlugin

这个插件的作用是依据一个html文件作为模板模板，在出口目录自动生成一个引用你打包后的JS的新文件（生成多个页面要多次调用new HtmlWebpackPlugin()）

* template:模板路径
* filename:输出文件名（默认：index.html）
* title:设置html文件的title属性
    > 在模板title标签中写入`<%= htmlWebpackPlugin.options.title %>`
* hash:是否自动往引入的css或js中添加hash（默认：false）
* chunks：提取公共部分文件

```javascript
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
```

### clean-webpack-plugin

添加了hash之后，会导致改变文件内容后重新打包时，文件名不同而内容越来越多，因此这里介绍另外一个很好用的插件clean-webpack-plugin
```javascript
    plugins:[
        new CleanWebpackPlugin()//参数：String/Array
    ]
```

### extract-text-webpack-plugin

用于提取css文件的公共部分，从一个已存在的 loader 中，创建一个提取(extract) loader
* 参数（String|Object）
    - filename

```javascript
    plugins:[
        new ExtractTextWebpackPlugin('common.css')//参数：String/Object
    ],
    rules:[
        { 
            test: /\.css$/, 
            use: ExtractTextWebpackPlugin.extract({
                use: 'css-loader',
                fallback:'style-loader'
            }) 
        }
    ]
```
>PS：由于本插件还未支持webpack4，可能会报错，安装时请使用npm install -D extract-text-webpack-plugin@next（@4.0.0-beta.0）

### copy-webpack-plugin

在webpack中拷贝文件和文件夹，一般用于把资源文件（图片等）拷贝到编译目录

* from    定义要拷贝的源目录
* to      定义要拷贝到的目标目录（基于output目录）
```js

    plugins:[
        new copyWebpackPlugin({
            from:'./src/assets',
            to:'./dist'
        })
    ],
```

### webpack自带插件

#### Hot Module Replacement

是webpack自带很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果

* 在webpack配置文件中添加HMR插件；
```javascript
  plugins:[
      new webpack.HotModuleReplacementPlugin()
  ]
```
>PS: `webpack-dev-server`内部自动调用`HotModuleReplacementPlugin`，使用`webpack-dev-server`时不需要额外配置HMR


#### webpack.ProvidePlugin

import引入模块后，无论你在代码中是否使用该模块，打包时都会打包进去，这样就会产生大量的冗余js，ProvidePlugin只有你在使用到此库的时候，才会打包进去
```javascript
    plugins:[
        //利用ProvidePlugin提供jquery模块，可以在任意代码中直接使用$,jQuery
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery: 'jquery',
            'window.jQuery':'jquery'
        })
    ]
```
