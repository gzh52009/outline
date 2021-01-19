[TOC]

# ECMAScript5(ES5)
> 在2009年推出的ECMAScript第5个版本

* 支持ES5的浏览器
    * IE9+
        > IE9不支持严格模式 
    * Opera 11.60+
    * Firefox 4+
    * Safari 5.1+
    * Chrome 13


## 页面加载事件

### DOM文档加载的步骤为
1. 解析HTML结构。
2. 加载外部脚本和样式表文件。
3. 解析并执行脚本代码。
4. DOM树构建完成。DOMContentLoaded
5. 加载图片等外部文件。
6. 页面加载完毕。window.onload


### document事件
* `readystatechange`事件
    * interactive
    * complete
    ```js
        document.onreadystatechange = function(){
            if(document.readyState === 'interactive'){

            }
        }
    ```
* `DOMContentLoaded`事件
    ```js
        document.addEventListener('DOMContentLoaded',function(){
            //DOM树构建完成后执行
        })
    ```

> PS:以上事件用以取代window.onload事件


## 严格模式
>除了正常模式，ES5添加了第二种运行模式：“严格模式(strict mode)”。顾名思义，这种模式使得javascript在更严格的条件下运行(更可靠，更安全)。目前，除了IE6-9，其它浏览器均已支持ES5严格模式。

* 为什么要用严格模式
    - 消除javascript语法的一些不合理，不严谨的地方，减少一些怪异行为
    - 消除代码运行的一些不安全之处，保证代码运行的安全；
    - 提高编译器效率，增加运行速度；
    - 为未来新版本的javascript做好铺垫

* 如何使用
    > 在头部写入 `"use strict"`
    - 全局：针对整个js文件
        > 将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行
    - 局部：针对单个函数
        > 将"use strict"放在函数体的第一行，则整个函数以"严格模式"运行。

    ```js
        function strict(){
            "use strict";
            return "这是严格模式";
        }
    ```

* 执行限制
    - 不使用var声明变量严格模式中将不通过
    - 删除系统内置的属性会报错
    - delete不可删除属性的对象时报错，如：
        + var声明的全局变量（会自动称为window的属性）
    - 对象有重名的属性将报错
        ```js
            var obj={name:"小王",name:'王大锤'}
        ```
    - 函数有重名的参数将报错
        ```js
            function sum(a,a,b){}
        ```
    - arguments严格定义为参数
        + 不允许对arguments赋值
        + 禁止使用arguments.callee
    - 函数必须声明在顶层
        > 不能写在条件判断语句或for循环语句中
    
    ```js
        var arr = [10,2,3,50];
        if(arr.length>3){
            function sum(){//报错

            }
        }
    ```


## JSON对象方法
> 理解 json对象与json字符串
* `JSON.parse(json)`：将json字符串转换成json对象
    - text：json字符串 
* `JSON.stringify(value)`：将js对象转换成标准的json字符串

- json格式规范
    + 属性名必须加双引号
    + 字符串必须加双引号
    + 不能有注释
    + 最后不能有多余逗号
    + 属性值为以下值
        * Number（整数或浮点数）
        * String（在双引号中）
        * Boolean
        * Array（在方括号中）
        * Object（在花括号中）
        * null

## 获取元素节点
* `querySelector(selector)`
    > 获取匹配选择器的第一个元素节点，返回DOM节点
* `querySelectorAll(selector)`
    > 获取匹配选择器的所有元素，返回伪数组


## Function方法
* bind()
    > 用于将当前函数和指定对象绑定(改变this指向)，返回一个新的函数

    ```js
        var btns = document.querySelectorAll('.btn');
        for(var i=0;i<btns.length;i++){
            btns[i].onclick = function(){
                //这里的this指向按钮
                setTimeout(function(){
                    // 这里的this呢？
                    console.log(this);
                    output.innerHTML = '你点击了' + this.innerHTML;
                }.bind(this),1000);
            };
        }
    ```


## 其他

### 获取class列表属性
* classList：js 的方法
    - length :  class类名的个数
    - add()  :  添加class方法
    - remove()  :  删除class方法
    - toggle() :  切换class方法
    - contains():是否含有某个类,返回布尔值

### data自定义属性
* dataset
    ```js
        <div id="user" data-name="laoxie" data-name-firt="xie"></div>
        
        // 获取方式
        user.dataset.name;//laoxie
        user.dataset.nameFirst;//xie
    ```

---

## 下节预习
* ES6
