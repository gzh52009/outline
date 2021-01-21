# NodeJS
Nodejs是2009由Ryan Dahl推出的运行在服务端的 JavaScript（类似于java,php,python,.net等服务端语言）,
基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

## day1-2
* 环境
    * nodejs: 10.16.0 / 14.15.4
    * npm: nodejs package management
    * 环境变量
* 模块化开发
    > 模块的作用域为局部作用域
    * 优点
        * 分工
        * 维护
        * 复用
    * 规范
        * commonJS      nodeJS支持的规范（后端）
        * ESModule      ES6模块化（前端）
        * AMD           require.js（前端）
        * CMD           sea.js（前端）
* javascript
    * 前端javascript = ECMAScript + BOM + DOM
        > 在浏览器中运行
    * 后端NodeJS: ECMAScript + 后端概念
        > 在命令行中运行，没有BOM与DOM的概念
* nodeJS多版本共存工具：nvm
    * nvm list  查看已安装nodeJS的版本
    * nvm use   切换nodeJS版本
    * nvm install   安装nodeJS版本
    * nvm uninstall 卸载nodeJS版本
* 运行nodeJS代码
    * REPL：交互式解释器，一般用于测试代码
    * 运行文件： node xxx.js

* commonJS
    * 使用
        > nodeJS把一个文件当作一个模块，都为**局部作用域**，如果想在一个模块中使用另外一个模块的数据，则需要导入导出
        * 导出：
            * `exports`
            * `module.exports`    （推荐）
        * 导入：`require()`
            > 引入模块会自动缓存
            * 引入模块的步骤
                1. 从缓存中引入
                2. 从原生模块引入
                3. 从`node_modules`中引入
                    * package.json
                        * main
                4. 缓存模块

    * 模块分类
        * 内置模块：nodejs自带的模块，可以直接引入，不需要加路径
        * 自定义模块：自己编写的模块，引入时需要添加相对路径
        * 第三方模块: 别人写人模块
            1. 安装：
                * npm install xxx
                * cnpm
                * yarn: 
                    * `yarn add xxx`
                    * `yarn add global xxx`
            2. 引入: 与原生模块一致
* 利用node实现http服务器
    * 请求：request
        > 客户端发给服务器
    * 响应：response
        > 服务器返回给客户端
    * 静态资源
        > html,css,js,img,font,svg....等内容称为静态资源，用来显示这些静态资源的服务器称为静态资源服务器
    * 服务器实现步骤
        * 依赖模块：
            * http
            * fs
                * fs.readFile()/fs.readFileSync()
* nodeJS模块变量
    * __dirname 当前文件所在的路径
    * __filename

## day1-3

### 复习
* 模块化开发
    * 规范
        * commonJS      NodeJS（后端，同步）
        * ESModule      ES6（前端）
            * 导出：export
            * 导入：import
        * AMD           require.js（前端，异步）
        * CMD           sea.js（前端，异步）
            * 导出：define()
            * 导入：require()
    * 分类
        * 内置模块
        * 自定义模块
        * 第三方模块
    * 使用
        * 导出
            * module.exports
            * exports
        * 导入: require()
* nodeJS多版本共存工具：nvm
    * `nvm install [version]`
    * `nvm uninstall [version]`
    * `nvm list`
    * `nvm use [version]`
* http服务器
    > 特点：http(s)请求客户端主动发起，服务器被动响应
    * 请求request
    * 响应response
    * 依赖模块
        * http
        * path
        * fs
        * url
    * mime类型

### 知识点
* express -> Koa
    * express实现静态资源服务器
    ```js
        server.use(express.static('../public'))
    ```
    * express中间件：middleware
        > express中间件是一个函数
        * 分类：
            * 内置中间件
                * express.static()  静态资源服务器中间件
            * 自定义中间件
            * 第三方中间件
        * 使用中间件
            * `use([path],mw1,mw2,mw3....,mwn)`
                * path: 只有路径匹配才进入后面的中间件，如果没有配置path路径则所有请求都进入这个中间件
            * next(): 调用next才能进入下一个中间件
* 利用express中间件实现数据接口
    * 规范：RESTful API
        * 根据请求类型和路径实现不同的接口
    * 请求类型
        * get           查
        * post          增
        * put/patch     改
        * delete        删
    * 获取前端传入参数
        * get请求：通过url参数传到后端，后端通过`req.query`获取
        * 动态路由：后端通过`req.params`获取
        * post/put/patch/delete请求：通过请求体传到后端，后端通过`req.body`获取
            > 利用中间处理不同数据类型:body-parser
            * urlencoded: express.urlencoded
            * json:       express.json()
    * 利用模块化开发思想+路由中间件实现数据接口
        * commonJS
        * express.Router()
## day1-4

### 复习
* express(koa)
    * 中间件middleware
        * 内置中间件
            * express.static()  静态资源服务器
            * express.urlencoded()  处理请求体数据，并格式化到req.body
            * express.json()        处理json数据，并格式化到req.body
            * express.raw()
            * express.Router()      实现模块化路由
        * 自定义中间件
        * 第三方中间件
            * body-parser
    * 使用：use(path,...middleware)
* 路由
    * 数据接口（RESTful API）
        > 利用请求类型与路径实现不同的数据接口
    * 模块化路由
    * 请求类型
        * get       查
        * post      增
        * put/patch 改
        * delete    删
### 知识点
* 图片上传
    * 后端：multer
        * single(field)             单个上传，接收到的文件存入req.file
        * array(field,maxCount)     多个上传，接收到的文件存入req.files
    * 前端：FormData
        * content-type:multipart/form-data
        * set(key,val)
        * append(key,val)
        * get(key)
        * getAll(key)
        * forEach()
        * has()
        * keys()
        * values()
* 跨域
    * 产生跨域的条件：协议、域名、端口三者不一致
    * 为什么会有跨域限制：因为js是一门**客户端脚本语言**（在客户端执行的语言）
    * 跨域解决方案
        * jsonp
            * 原理：利用script标签没有跨域限制的特点来发起请求,返回一段js代码的执行（全局函数的执行代码）
            * 步骤
                1. 定义全局函数
                2. script标签发起请求，传递全局函数名
                3. 删除script，全局函数
        * CORS（推荐）
            * 响应头
                * Access-Control-Allow-Origin
                    * 一个域名
                    * `*`
                * Access-Control-Allow-Methods
                * Access-Control-Allow-Headers
            * 复杂跨域
                * 非GET、HEAD、POST请求。
                * POST请求的Content-Type不是application/x-www-form-urlencoded, multipart/form-data, 或text/plain。
                * 添加了自定义header，例如Token。
        * 服务器代理
            * 原理：利用服务端没有跨域限制的特点在后端向目标服务器发起请求，得到结果后响应给前端
        * 爬虫
            * 原理：爬取目标服务器的所有信息，然后分析过滤得到最终数据
* 页面渲染方式
    * 服务器渲染SSR：html结构在服务器生成并响应给前端，并渲染页面
        > 特点：速度快，SEO友好
        * 步骤
            1. 请求服务器，响应完整的html结构
            2. 浏览器渲染页面
    * 客户端渲染BSR：从服务器请求数据到客户端生成html结构，并渲染到页面
        > 特点：用户体验较好，局部刷新
        * 步骤
            1. 请求服务器，响应一个空的html结构
            2. 浏览器渲染页面，并请求js
            3. 执行js代码，并发起ajax请求
            4. 接收到数据，在客户端生成html结构
            5. 渲染页面
* fs模块
    * 小文件：
        * 读取：fs.readFile()/fs.readFileSync()
        * 写入：fs.writeFile()/fs.writeFileSync()
    * 大文件：Stream
        * 读取流：fs.createReadStream(path)
        * 写入流：fs.createWriteStream(path)