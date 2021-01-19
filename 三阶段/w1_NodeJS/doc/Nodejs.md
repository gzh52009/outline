# NodeJS

## 复习二阶段内容

### http服务器
* 静态资源服务器
    * 使用模块
        * http
        * fs
        * url
        * path
    * 了解文件mime类型

    ```js
        const http = require('http');
        const fs = require('fs');
        const url = require('url')
        const path = require('path');
        const mine = require('./module/mime')

        const server = http.createServer((req,res)=>{
            const {pathname} = url.parse(req.url);
            const realpath = path.join(__dirname,pathname);
            const extname = path.extname(pathname).substring(1);
            fs.readFile(realpath,(err,data)=>{
                if(err){
                    return res.end('404');
                }
                res.writeHead(200,{'content-type':mime[extname] + ';charset=utf8'});
                res.end(data);
            })
        })

        server.listen(1000,()=>{
            console.log('server is running on port 1000')
        })
    ```

* 部署到服务器

### 模块化规范
* CommonJS      node.js
* CMD           require.js
* AMD           sea.js
* ES Module     ES6

### 模块分类
> Nodejs 模块系统采用commonJS规范。一般情况模块可分为三类：

* 原生模块（Nodejs内置模块）
* 自定义模块
    * 文件
    * 目录
* 第三方模块
    > 通过`npm install`命令安装到`node_modules`目录

```javascript
    //hello.js

    function hello(){
        return 'hello laoxie';
    }

    //对外暴露接口（commonJS规范）
    module.exports = hello;
```

#### 原理
> 在nodejs中，任一脚本文件都会自动写入一个包装函数中（所以每个模块具有独立作用域），并传入以下参数

* exports: 当前模块的导出对象
* require: 引入模块的方法
* module: 当前模块对象
* __filename: 当前文件的绝对路径
* __dirname: 当前文件所在目录的绝对路径

```js
    (function(exports,require,module,__filename,__dirname){
        // 我们编写的模块代码
    })
```

#### 导出模块
>如果没有导出模块，引入模块时 就会得到空对象

* module.exports
    > 对外暴露单个接口，一个模块中只能有一个 `module.exports`，多个会被覆盖。

* exports
    > exports 为 `module.exports`的引用，一个模块中可以使用多次

    ```javascript
        //person.js
        function setName(){
            return 'laoxie'
        }

        function setAge(){
            return 18
        }

        // 对外暴露接口
        exports.setName = setName;
        exports.setAge = setAge;

        // 以下代码与上面代码等效
        module.exports = {
            setName,
            setAGe
        }
    ```

#### 引入模块: require()
>引入模块，使用nodejs内置的`require()`方法，一种同步的模板引入方式

```javascript
    //page.js
    
    //得到一个对象，包含暴露的setName,setAge方法
    let person = require('./person.js');

    // 既然是得到对象，也可以直接解构
    let {setName,setAge} = require('./person.js');

```

* require 方法中的文件查找策略

    ![require](./img/模块加载过程.jpg "查找策略")

    > 由于模块引入后能自动缓存，所以多次require引入同一模块不存在性能问题