# Javascript基础语法

## day1-1

### js历史
* liveScript -> javascript
* JScript
* ECMAScript（标准化javascript，简称ES）
    * ES6 -> 2015
    * ES7 -> 2016
    * ES8 -> 2017
    * ES9 -> 2018
    * ES10 -> 2019
    * ES11 -> 2020
* Mozilla（firefox）

### js语言的组成
> javascript = ECMAScript + BOM + DOM

### H5与前端js的关系
> h5全称HTML5,不是单纯的html的第5个版本，而是一项最新的web标准，是html、css、javascript等技术的集合
* 前端与后端


#### 基础语法
* js编写位置
    * script
        > script标签可以写在任何位置，但建议放在body内且放在所有便签后端
        * type
        * src
    * 单独文件  
* 变量声明
    > 变量：数据的容器
    * 变量命名规则：
        * 变量名必须是数字,字母,下划线`_`和美元符`$`组成;
        * 第一个字符不能为数字
        * 不能使用关键字或保留字
* 关键字
    * var
* 注释
    > 浏览器会忽略注释后的内容
    * `//`  单行注释
    * `/**/` 多行注释
* 输出测试
    * alert()   弹窗输出
    * console.log() 控制台输出
    * 元素输出
        * 表单：元素.value
        * 双标签元素：元素.innerHTML = 值
    * document.write()  输出到body

#### 数据类型
* String    字符串（**单引号**或**双引号**包含的数据）
* Number    数字
    > 0-9
    * NaN: Not a Number
* Boolean   布尔值
    * true  对/是/1
    * false 错/否/0


#### 数据类型转换
* 显性转换
    * String -> Number : Number(字符串)
    * Number -> String : String(数字)
    * Number -> Boolean : Boolean(数字)
* 隐式转换
    > 如果运算不能进行下去，内部就会尝试进行数据类型的自动转换(支持隐式转换的运算：逻辑运算、关系运算、算术运算）

### 运算
#### 算术运算
> 针对数字类型

* 加法：+
    * 数字：加法运算
    * 字符串：拼接
* 减法：-
* 乘法：*
* 除法：/
* 求余（求模）：%


#### 赋值运算
* =
* +=
* -=
* *=
* /=
* %=


### 常用方法
* parseInt()    取整
* toFixed()     取小数点位数



### 超前知识点
* 获取元素：`document.getElementById()`
    * 获取表单的值：`元素.value`  得到的数据为String
    * 写入表单的值：`元素.value=值`
* 事件绑定：`元素.onclick=function(){}`


## day1-2

### 复习
* 变量声明
    > var
    ```js
        var username; // 声明变量不复制，默认得到undefined
        //username = 'tiantian'
        
        // 声明并赋值
        var username = 'laoxie';

        // 同时声明多个值
        var username='laoxie',age=18,gender='male';
        var username,age,gender;
    ```
* 数据类型
    * 基本数据类型（值类型）
        * String
            > 带引号的数据
        * Number
            > 0-9
            * NaN
        * Boolean
            * true
            * false
        * Null
            * null          获取页面不存在的元素时得到null
        * Undefined
            * undefined     声明变量不赋值得到undefined
    * 引用数据类型
    * 数据类型的转换
        * 显性转换（手动转换）
        * 隐式转换（看不到）
            * 当运算无法进行下去时，内部会尝试自动转换
* 运算
    * 算术运算
        * +
        * -
        * *
        * /
        * %
    * 赋值运算
        * = 
        * +=,-=,*=,/=,%=
        ```js
            var num = 10;
            num +=5; // 等效于：num = num + 5
        ```
* 输出
    * alert()
    * document.write()
    * console.log()
    * 输出到元素
        * 表单：xx.value
        * 普通元素：xx.innerHTML

### 学习方式
1. 上课做好笔记
2. 课后梳理
3. 练习（敲代码：500行/天）
    * 课堂案例
    * 练习（强化训练）
    * 作业
        * 必做
        * 选做
4. 做项目
> 注意：尽量少看视频，不要给自己留后路，不要自我否定

### 知识点

* 运算：（运算都会得到一个值）
    * 算术运算
    * 赋值运算
    * 关系运算（返回Boolean）
        * `==`    等于
        * `===`   全等/恒等（要求数据类型与值都相等，不会进行隐式转换）
        * `!=`    不等于
        * `!== `  不全等/不恒等
        * `>`     大于
        * `<`     小于
        * `>=`    大于等于
        * `<=`    小于等于
    * 逻辑运算（返回Boolean）
        * &&    逻辑与(且)
        * ||    逻辑或
        * !     逻辑非（取反）
        ```js
            // 格式：条件1&&条件2 
            /*
                * 逻辑与：条件1与条件2都成立，结果才为true，否则为false
                true && true    => true         10>5 && 10>6
                true && false   => false        10>5 && 10>20
                false && true   => false        10>20 && 10==10
                false && false  => false        10>20 && 10<10
            
            */ 


            /**
                * 逻辑或：条件1与条件2只要有一个成立，结果就为true，两个条件都为false时结果才为false
                true || true        => true
                true || false       => true
                false || true       => true
                false || false      => false
             */

            /**
                * 逻辑非：取反
                !true   => false
                !false  => true

                !!true  => true
             */
        ```
    * 一元运算
        * ++    加1
        * --    减1
       ```js
            var num = 10;
            num = num + 1;
            //num += 1;
            //num++
       ```
* 程序的三大流程控制
    * 顺序执行
        > 代码从上往下逐行执行
    * 选择执行
        > 根据条件选择执行不同的代码
* 条件判断
    * if
       ```js
            if(条件){
                // 这里的代码在条件符合时执行
            }

       ```
    * if...else
    ```js
        if(条件){
            // 条件成立执行这里的代码
        }else{
            // 不成立执行这里的代码
        }
    ```



### 超前知识点
* Math.random()

## day1-3

### 复习
* 关系运算
    * ==, ===
    * !=, !==
    * >, >=
    * <, <=
* 逻辑运算
    * &&
    * ||
    * !
* 一元运算
    * ++
    * --

    * 需要了解两个概念
        * 变量
        * 返回值
            * 后置： num++, num--   先返回后++/--
            * 前置：++num, --num    先++/--后返回
* 进制
    * 常用进制
        * 十进制    5
        * 二进制    0b101
        * 八进制    0o
        * 十六进制  0x
    * 转换
        * 十to其他：toString(进制)
        * 其他to十：parseInt(数据,进制)
        * 其他to其他：
            1. 其他to十
            2. 十to其他

```js
    if(a===100){

    }
```

### 知识点

* 条件判断语句
    * if单分支
        ```js
            if(条件){
                // 条件成立执行这里的代码
            }
        ```
    * if...else双分支
        ```js
            if(条件){
                // 条件成立执行这里的代码
            }else{
                // 条件不成立执行这里的代码
            }
        ```
    * if...else if多分支语句
        ```js
            if(条件1){
                // 条件1成立执行这里的代码，忽略后面的代码
            }else if(条件2){
                // 条件2成立执行这里的代码，忽略后面的代码
            }else if(条件3){
                // 条件3成立执行这里的代码，忽略后面的代码
            }
            ...
            else{
                // 以上条件都不符合时，执行这里的代码
            }
        ```
    * 三元运算（三目运算）
        > 格式：条件 ? 条件成立 : 条件不成立
    * switch
        > case穿透：从符合条件的case开始执行，直到结束或遇到break
    ```js
        switch(val){
            case 100: 
                // 当val恒等于100时，<从这里开始执行代码>
            case 200:
                // 当val恒等于200时，<从这里开始执行代码>
            case 300:
                // 当val恒等于300时，<从这里开始执行代码>
                break;
            default:
                // 以上条件都不符合时，执行这里的代码
                
        }

    ```
* 循环语句
    * 循环语句包含的内容
        * 变量初始化
        * 条件
        * 变量更新
            > 往条件不成立的方向更新
    * 循环语句的执行步骤
        1. 变量初始化：var num=5;
        2. 进行条件判断
            * 成立：执行花括号中的代码
            * 不成立：退出循环
        3. 变量更新
        4. 回到第2步
    * while循环
        ```js
            // 变量
            while(条件){
                // 条件成立时，不断执行这里的代码
                // 在这里一般会有条件更新（想办法让条件不成立）
            }
        ```
    * do...while
        ```js
            // 变量初始化
            do{
                 //不管条件是否成立，先执行一次这里的代码，再进行条件判断，如果条件依然成立，则再次执行这里的代码，依此类推
                //所以这里一般会伴随着变量的更新
            }while(条件)

        ```
    * for循环
        ```js
            for(变量初始化;条件;变量更新){
                // 条件成立执行这里的代码
                // 这里的代码执行完毕，会执行变量更新
            }

            // 变量初始化;
            for(;条件;){

                // 变量更新
            }
        ```
    

## day1-4

### 复习
* 条件判断语句
    * if
    * if...else
    * if...else if
    * 三元运算
    * switch
        * case
            * 穿透
        * default
        * break
* 循环语句
    * while
    * do..while
    * for 
    > 知道循环次数推荐使用for循环，否则推荐使用while
* 循环语句包含的结构内容
    * 变量初始化
    * 条件判断
    * 变量更新
* 了解循环语句的执行过程
    1. 变量初始化
    2. 条件判断
        * 条件成立：执行花括号中的代码
        * 条件不成立：退出循环
    3. 变量更新，继续回到第2步
    ```js
        for(var num=1;num<=5;num++){
            console.log(num);// 1,2,3,4,5
        }
        console.log('num=',num);

        // num输出顺序：1,2,3,4,5
        // num的值最终为多少：6
    ```

### 知识点
* 循环跳转
    * break：退出当前整个循环
        * 只能在循环语句中使用
        * 循环体中位于break后的语句不会被执行
        * 在多层循环嵌套中，一个break语句只能结束当前循环
    * continue：跳过本次循环，继续下一次循环
        * 只能在循环语句中使用，
        * 跳过本次循环（即跳过循环体中下面尚未执行的代码），接着执行下次循环。
* 嵌套循环
    ```js
        for(var n=1;n<=5;n++){
            // console.log(666);// 输出5次666
            for(m=1;m<=5;m++){
                console.log(666); // 输出25次
            }
        }

        // 嵌套循环的执行过程
        n=1
            m=1
            m=2
            m=3
            m=4
            m=5
        n=2
            m=1
            m=2
            m=3
            m=4
            m=5
        n=3
            m=1
            m=2
            m=3
            m=4
            m=5
        n=4
            m=1
            m=2
            m=3
            m=4
            m=5
        n=5
            m=1
            m=2
            m=3
            m=4
            m=5
    ```

* 函数function
    * 定义
        * 声明式
        * 赋值式
        * 匿名函数
    * 调用
        * 手动调用： `函数名()`
    * 声明提前


## day1-5

### 复习
* 嵌套循环
    * 循环标识：给循环语句起名
* 循环跳转
    * break
    * continue

```js
    var height = 5;
    var qty = 0; // 记录篮球弹跳次数
    while(true){
        height *= 0.3;
        qty++
        if(height<0.1){
            break;
        }
    }
```
* 函数
    * 定义
        * 声明式
        * 赋值式
        * 匿名函数
    * 调用
        * 手动调用（主动）： `函数名()`
        * 事件驱动（被动）：`元素.事件=函数`
    * 声明提前
        * 变量声明提前：变量声明提前到当前作用域最开始的地方
        * 函数声明提前：

### 知识点
* 作用域：变量使用使用范围
     * 全局作用域：
        > 在全局作用域下声明的变量称为**全局变量**
     * 局部作用域（函数作用域）
        > 在函数作用域下声明的变量称为**局部变量**
* 变量访问规则：在作用域链中查找(就近原则)
    * 先从当前函数查找，有变量a则使用并停止查找，无则进入第2步;
    * 往父级函数查找，找到则使用并停止查找，无则进入第3步;
    * 继续往上一层函数查找，依此类推，直到全局作用域，如果在全局作用域还是没找到，则报`a not defined`错误;
    ```js
        // 全局变量
        var num = 10;

        function sum(){
            // 局部变量
            var age = 18;

            //console.log(num);// 10
            //console.log(age);// 18

            function test(){
                var num = 20;
                //console.log(num);//10
                //console.log(age);//18
                var show = function(){
                    var num = 30;
                    console.log(num);//10->20->30
                }
            }
        }

        function getData(){
            console.log(num);//num
        }

        console.log(num); // 10
        console.log(age); // 报错：age is not defined
    ```

    ```js
        // 面试题：输出什么:20,undefined,10
        var a = 10;
        function test(){
            // var a
            console.log(a);
            var a=20;
        }
        test();
    ```
    ```html
        <script>
            console.log(a);//报错
        </script>
        <script>
            var a = 100;
        </script>
        <script>
            console.log(a);// undefined,100,报错
        </script>
    ```
* 在js中修改html元素的样式
    > 元素.style.xxx = ''
* 参数
    * 形参
    * 实参
    > 形参和实参数量可以不一样
* return 作用
    * 结束函数的执行： `return`
        > return后的代码不会执行
    * 返回值：`return 值`
        > 把值返回到函数执行的地方
* 封装
    * 一个函数只做一件事情
    * 合理利用**参数**和**返回值**实现更强大的功能
* 数组
    * arguments: 函数内部隐藏的对象，保存传入的实参信息
    * 索引值: index
    * 数组长度：length
    * 获取数组元素：`arr[1]`
    ```js
        var B6 = ['甜甜','静静','东哥','丽丽'];

        // 3号技师：B6[索引值]
        // B6[2]

    ```
* 函数递归
    * 要避免死循环，需要结束条件
    * 了解递归执行过程
    ```js
        fac(5)
            5*fac(4)
                4*fac(3)
                    3*fac(2)
                        2*fac(1)
                            1
    ```


## day2-1

### 复习
* 函数的定义
    * 声明式
    * 赋值式
* 声明提前
* 函数调用
    * 手动调用：函数名()
    * 事件驱动：
        * 元素.事件名 = 函数
        * 元素.事件名 = 匿名函数
        ```js
            function show(){}
            btn.onclick = show;
            btn.onclick = function(){}
        ```
* 参数
    * 形参：函数定义时的参数
        > 形参就是局部变量
    * 实参：函数调用时的参数
    ```js
        function show(a,b){
            // 形参等效于：var a, b
            // var a=10,b=20
            // var a=100,b=200
        }

        show(10,20);
        show(100,200);
    ```
* 函数关键字
    * arguments
        * 索引值：0~length-1
        * length：保存实参的数量
        * 获取：arguments[0]
    * return
        > 结束函数的执行，return后的代码不会被执行
        * 返回值: `return 值`
            > 函数执行时得到的值
* 作用域
    * 全局作用域
        * 全局变量
    * 局部作用域（函数作用域）
        * 局部变量
    * 变量访问规则

* 函数递归
    > 在函数内部调用自己（死循环）
    ```js
        // 求阶乘
        function fac(num){

            // 递归退出条件（否则形参死循环）
            if(num===1){
                return 1;
            }

           return num * fac(num-1)
                  
        }


        fac(5); // 5*fac(4)
        // 5! = 5*4*3*2*1
        //    = 5*4!
        //        4*3!
        //          3*2!
        //            2*1!
        //              1
        // 结论：任何数字的阶乘等于这个数字乘这个数减1的阶乘
        // num! = num * (num-1)!
    ```

* 斐波那契数列（兔子数列）
月份：  1   2   3   4   5   6   7   8   9   10  11  12  13
数量：  1   1   2   3   5   8   13  21  34  55  89  144 

推导公式：fib(13) = fib(12) + fib(11)

function fib(month){
    // 递归退出条件
    if(month==2 || month===1){
        return 1;
    }
    
    return fib(month-1)+fib(month-2);
}

## 知识点
* 数组定义
* 数组操作
    > 索引值和length
    * 添加  增
    * 删除  删
    * 修改  改
    * 读取  查
* 数组常用方法
    * 添加
        * push()
        * unshift()
    * 删除
        * pop()
        * shift()
    * 添加/删除/替换：splice(start,deleteNum,...)
        * 添加：arr.splice(1,0,10,20)
        * 删除：arr.splice(0,1)
        * 替换：arr.splice(0,1,10)
    * join()：将所有数组元素用分隔符连接成一个字符串
    * slice()
    
* 数据类型
    * 基本数据类型（值类型）
        * String
            > 引号引起来的数据
        * Number
            > 0-9
        * Boolean
            * true
            * false
        * Undefined
            * undefined
        * Null
            * null
    * 引用数据类型
        * Object
            * Array         数组
            * Function      函数

    ```js
        var num = '10'
    ```

## day2-2

### 复习
* 定义
    * 字面量
    * 构造函数
* 操作
    > 索引值：0到length-1，lenght:数组长度
    * 增
        arr[arr.length] = 11
    * 删：arr.length = 0
    * 改：
    * 查
* 常用方法
    * 增加: 返回值为添加后的数组长度
        * push()
        * unshift()
    * 删除: 返回被删除的元素
        * pop()
        * shift()
    * 添加/删除/替换：splice(start,deleteNum,...items)
    * 拼接数组元素：join(分隔符)
    * 截取：slice(start,end), 支持负数
        * 复制数组：arr.slice(0)

* 了解一个函数/方法的**参数**和**返回值**

* 引用数据类型与基本数据类型的区别

### 知识点
* 数组排序
    > 专业术语：升序，降序
    * 冒泡排序

* 对象
    * 对象的定义
    * 对象操作( CRUD )
        > 方括号，点语法
        * 增
        * 删
        * 改
        * 查
* ES5的数组方法
    > ECMAScript 5 在2009年推出
    * Array.isArray()
    ```js
        // 判断数据类型 typeof
        typeof 12; // numnber
        typeof 'abc'; // string
        typeof true; // boolean
        typeof undefined; // undefined
        typeof null; // object
        typeof []; // object
        typeof {}; // object

        var arr = [10,20,30]
    ```
    * 索引方法
        * indexOf()
        * lastIndexOf()
    * 迭代方法
        * forEach(fn)
        * map(fn)
        * filter(fn)
        * some(fn)
        * every(fn)
        > fn(item,index,array){}
    * 归并方法
        * reduce(fn,initVal)
        * reduceRight(fn,initVal)
        > fn(prev,item,index,array){}

## day2-3

### 复习
* 数组排序
    * 冒泡排序
    * 选择排序
    * 快速排序
    * sort方法排序
        * 默认字符串排序
        * sort(fn)
* 对象
* ES5数组方法
* 回调函数callback
    * 回调函数传参
    * 回调函数返回值
    ```js
        function show(fn){
            // var fn = function(){}
            var res = fn(10,20);
        }
        // show(10,20)
        show(function(a,b){
            // var a=10,b=20
            console.log(666);
            return 100
        })

        var arr = [10,20,30,40]
        arr.forEach(function(item,index,arr){

        })

        // 模拟forEach
        function forEach(callback){
            for(var i=0;i<arr.length;i++){
                callback(arr[i],i,arr)
            }
        }

        forEach(function(item,idx,a){

        })

        // 模拟map()
        var res1 = arr.map(function(item,idx,arr){
            return item*2;
        }); // res1=[20,40,60,80]

        function map(callback){
            var newArr = [];

            for(var i=0;i<arr.length;i++){
                newArr[i] = callback(arr[i],i,arr);
            }

            return newArr;
        }
        var res2 = map(function(item,idx,a){
            return item*3
        });// [30,60,90,120]

    ```

### 知识点

* 字符串：单引/双引号
    * 转义符 `\`
    ```js
        var str1 = 'laoxie'
        var str2 = "tiantian"
        var str3 = 'I\'m laoxie'
    ```
    * length属性


* 正则表达式
    * 定义
        * 字面量
        * 构造函数
        ```js
            // 字面量
            var reg = /laoxie/ 

            var username = 'laoxie'
            var reg = new RegExp(username)
        ```
    * 参数
        * i ： 忽略大小写
        * g ： 全部匹配
        ```js
            var reg = /laoxie/ig

            var reg = new RegExp('laoxie','ig')
        ```

* 编码与字符集
    * 二进制(01)
        > 8个二进制位表示一个字节
        ```js
            string      ASCII       二进制(2^8=256)
            a       ->  97          ->  01100001
            A       ->  65          ->  1000001

            甜      ->   GB2312     ->  01110101 01110101
            甜      ->   GBK        ->  01110101 01110101 01110101
            繁体    ->   BIG5       ->  01110101 01110101 01110101

            世界文字 ->  unicode  -> 01110101 01110101 01110101 01110101
                        utf-8        用1-4个字节表示一个字符


        ```
    * 乱码的根源：字符编码无法识别文字
    * 计算机容量单位：
        * T
        * G
        * M
        * K     1024Byte
        * Byte  字节（一个英文字符大小为一个字节）
    * 编码转换
        * 字符->编码：str.charCodeAt(idx)
        * 编码->字符：String.fromCharCode(code)
    * 加密与解密

##  day2-4

### 复习
* 字符串
    * 定义
    * 属性
        * length
    * 操作
        * 查：读取
            * 读取索引对应的字符
                * 方括号
                * charAt()
            * 查找字符对应的索引
                * indexOf()/lastIndexOf()
                * search()
                * match()
        * 增：
        * 删：
        * 改：
        * 替换
            * replace()
        * 拆分
            * splice()
        * 截取
            * slice(start,end)
            * substring(start,end)
            * substr(start,length)
        * 转换大小写
            * toUpperCase()
            * toLowerCase()
            ```js
                var str = 'hello my name is tiantian';
                str = str.split(' ').map(function(item){
                    return item[0].toUpperCase()+item.slice(1)
                }).join(' ')
            ```
    * 字符编码
        * ASCII
        * GB2312
        * GBK
        * Big5
        * unicode
        * utf-8
        ```js
            a   97  
            A   65
        ```
* 正则表达式
    * 定义
        * 字面量
        * 构造函数
        ```js
            var reg=/tt/
            var reg = new RegExp('tt')
        ```
    * 参数
        * i: 忽略大小写
        * g: 全部匹配
## 知识点
* Math
    * 属性
        * Math.PI
    * 常用方法
        * 取整
            * Math.round()
            * Math.ceil()
            * Math.floor()
        * Math.max()
        * Math.min()
        * Math.sqrt()
    * 三角函数
        > 弧度 = 角度*Math.PI/180
        * Math.sin(radian)
        * Math.cos(radian)
        * Math.tan(radian)
    * 勾股定律
        c^2 = a^2+b^2
* Date
    * 时间知识
    * 创建时间
        ```js
            // 获取当前时间(运行代码时的时间)
            var now = new Date();
        ```
    * 常用方法
        * getFullYear()
        * getMonth()
        * getDate()
        * getHours()
        * getMinutes()
        * getSeconds()
        * getDay()
    * ES5方法
        * Date.parse(); // Array.isArray()
        * Date.now()
    * 定时器
        > setInterval(fn,duration)

## day2-5

### 复习
* Math
* Date
    ```js
        var d1 = new Date(); // 年月日，时分秒、毫秒、星期、时区
        var d2 = new Date();
        d2-d1 ; // 时间对象在隐式转换中会自动转成毫秒数
    ```
    * 定时器
        * setInterval(fn,duration)  返回一个数字id
        * clearInterval(id);

* 提高学习能力和技术的有效方式
    * 了解函数的参数
    * 了解函数的返回值
    * 研究内部实现原理

### 知识点
> javascript = ECMAScript + BOM + DOM

* window对象（全局作用域）
    ```js
        window = {
            //常用属性
            name:"",

            //常用方法
            alert:function(){},
            parseInt:function(){},

            // 对象属性
            document:{
                getElementById:function(){}
            },
        }

        window.document.getElementById()
    ```
    * 属性
    * 方法
    * 属性对象
    * 事件
        * onscroll
        * onload

##  day3-1

### 复习
* window
    * 常用属性
    * 方法
    * 属性对象
        * location
        * history
        * navigator
        * document

### 知识点
javascript = ECMAScript(ECMA) + BOM + DOM(W3C)

* 节点Node
    * nodeType（12种）
        * 1: 元素节点
        * 2: 属性节点
        * 3: 文本节点
    * nodeName
        * 元素节点：大写的标签名
        * 属性节点：属性名
        * 文本节点：#text
    * nodeValue
        * 元素节点：null
        * 属性节点：属性值
        * 文本节点：文本内容
* 获取页面元素
    * document.getElementById()
    * getElementsByTagName()            [element,element,element]
    * getElementsByClassName()
    * document.getElementsByName()

* 通过节点关系获取

* 元素的CRUD
    * 创建
        * document.createElement()
    * 插入
        * parent.appendChild(node)

## day3-2

### 复习
* DOM树
    > 节点树
* 节点Node
    * nodeType
    * nodeName
    * nodeValue

* 节点类型
    * 元素节点
    * 属性节点
    * 文本节点

* 节点获取
    * document.getElementById(id)
    * getElementsByClassName(className) 伪数组
    * getElementsByTagName(tagName) 伪数组
    * document.getElementsByName(name)  为数组，一般用于表单元素
* 节点关系
    * 父节点：parentNode
    * 子节点：
        * childNodes    所有子节点（伪数组）
        * firstChild
        * lastChild
    * 兄弟节点
        * previousSibling   前一个兄弟元素
        * nextSibling       后一个兄弟元素
* 过滤非元素节点
    * children();
    * nextElement();
    * prevElement();
    * firtElement();
    * lastElement();

* 节点的CRUD
    * 创建
        * document.createElement()
        * document.createTextNode()  不常用
        * document.createAttribute()    几乎不用
    * 插入
        * parent.appendChild(node)
        * parent.insertBefore(newNode,oldNode)
            > oldNode.parentNode.insertBefore(newNode,oldNode)
    * 删除：parent.removeChild(node)
    * 复制：node.cloneNode(boolean)
    * 判断：node.hasChildNodes()

* 使用方法需要考虑一下三个问题
    1、了解方法用途
    2、方法需要什么参数
    3、方法有什么返回值

### 知识点
* 元素属性操作
    > 利用对象的方式操作属性
    * 节点属性
    * html元素属性
    ```js
        // 获取 
        el.id ;// 获取el元素的属性

        // 设置属性
        el.id = 'box';
    ```
* 元素关系
    * 父元素：el.parentElement
    * 子元素：
        * 所有子元素：el.children
        * 第一个子元素：el.firstElementChild
        * 最后一个子元素：el.lastElementChild
    * 兄弟元素
        * 前一个兄弟元素：el.previousElementSibling
        * 后一个兄弟元素：el.nextElementSibling


* 事件
    * 搞懂事件在什么时候执行？


## day3-3

### 复习

* 元素节点属性与html属性
    > 点语法和方括号语法
    ```js
        // 在html中，自定义属性必须添加"data-*"，这样才符合w3c的标准
        <div id="box" data-username="laoxie"></div>

        var box = document.getElementById('box')
        box.id;// box
        box.className = 'mybox';
        box.nickname="test";
        box.username;//undefined

        // 在元素节点中获取html自定义属性（data-）
        box.dataset.nickname
    ```
* 自定义属性data-*的设置与获取
    > el.dataset

* 事件
    * 用户体验（埋点）
    * 分类
        * 鼠标事件
        * 键盘事件
        * 表单事件
        * 页面事件
        * 其他事件
    * 事件绑定：Node.on事件类型 = 事件处理函数; // null
    * event对象
        * 公共属性：任何事件都有的属性
            * type
        * 私有属性：特定的事件才有的属性

* 在全局作用于中不能使用的变量
  * name
  * status
  * top

## 知识点
* 事件传播
  * 事件冒泡：事件由下往上沿着DOM树传播，直到document/window
    * event.target：事件源对象，触发事件的元素，这个对象在事件传播过程中不会改变

* 停止事件传播: event.stopPropagation()
* 事件数量太多会影响页面的性能
  * 事件委托优化：利用事件冒泡优化事件数

## day3-4

### 复习
* event
    * 获取
        * 标准：事件处理函数的第一个参数
        * IE8-：window.event
    * 属性
        * type  事件类型
        * target 事件源节点对象
        * currentTarget 绑定事件的元素
    * 方法
        * 标砖：stopPropagation();
* 事件传播
    * 事件冒泡：从事件源对象开始沿着DOM树往父级传播，直到被处理或到达document/window
    * 事件捕获
    * 停止事件传播
        * 标准：stopPropagation();
        * IE8-： event.cancelBubble = true
* 事件委托： 利用事件冒泡机制把本该绑定的事件委托给父节点处理的一种方式
    * target：事件源对象
    * currentTarget： 父级节点（绑定事件的元素）

### 知识点
* 阻止默认行为
    * 标准：e.preventDefault()
    * IE8-: e.returnValue = false; // return false;
* 事件传播
    * 事件冒泡：从事件源对象开始沿着DOM树往父级传播，直到被处理或到达document/window
    * 事件捕获：从根节点开始沿着DOM树向下传播，直到事件源对象
    
    > PS: IE8以下的浏览器不支持捕获

    ```js
        <div>
            <span id="btn">点我</span>
        </div>

        // 传统事件绑定方式：事件处理函数在冒泡阶段执行
        btn.onclick = function(){
            // 这里的代码在click事件触发时冒泡阶段执行
        }
        btn.onclick = function(){
            // 这里的代码会覆盖上面的事件
        }
        div.onclick = function(){
            // 这里的代码在click事件触发时冒泡阶段执行
        }
        document.onclick = function(){
            // 这里的代码在click事件触发时冒泡阶段执行
        }

        // 让事件处理函数在捕获阶段执行：
    ```
* 事件监听
    * 标准：node.addEventListener(type,handle,captrue)
        * type: 事件类型
        * handle： 事件处理函数
        * capture：是否捕获，默认false（如参数省略，默认handle在冒泡阶段执行）
        > 事件监听器同名事件不会被覆盖，如captrue为true，则事件在捕获阶段触发
    * IE8-：node.attachEvent(type,handle)
                    * type: 需要加on
     ```js
        <div>
            <span id="btn">点我</span>
        </div>

        btn.addEventListener('click',function(){
            // 这里的代码在click冒泡阶段执行
        })
        btn.addEventListener('click',function(){
            // 与上面事件同时存在
        })

        // 让事件处理函数在冒泡阶段执行：
        div.addEventListener('click',function(){})
        // 让事件处理函数在捕获阶段执行：
        div.addEventListener('click',function(){},true)
    ```
    * 移除事件监听器
        * 标准：removeEventListener(type,handle,captrue)
        * IE8-:detachEvent('onclick',fun)
        > PS: 移除的参数要跟添加时的参数一致

* 拖拽效果

### 知识点
* 正则表达式
    * 字符类
        * \d    一个数字
        * \D    一个非数字
        * \w    一个数字或字母或下划线（_）
        * \W    一个非数字，非字母，非下划线的字符
        * \s    一个空格
        * \S    一个非空格
        * .     除换行以外的字符
    * 数量词
        * `{3}`   匹配3个
        * `{3,5}` 匹配3到5个
        * `{3,}`  匹配3个及3个以上
        * `+`     等效于{1,}
        * `*`     等效于{0,}
        * `?`     等效于{0,1}
    * 贪婪模式：尽可能多地匹配（默认）
    * 非贪婪模式：在数量词后面加问号（?）
    * 特殊字符
        * `^` 表示开始
        * `$` 表示结束
        * `|` 表示或
        * `[]`    代表任意“单个字符” ,里面的内容表示“或”的关系
            * `-` 代表范围
            * `^` 表示非
            ```js
                1[^3-9]
            ```
    * 边界处理
        * \b : 匹配一个单词边界，也就是指单词和空格间的位置
        * \B : 匹配非单词边界

    * 引用分组
        > 括号括起来的内容
        * 正则内: \n
        * 正则外: $n	
            str.replace(reg,"$1")
        > PS: n的值为1-99，分组顺序：以左括号出现的顺序为分组顺序
    * 表示所有字符
        ```js
            [\s\S]
            [\d\D]
            [\w\W]
        ```

## day3-5

### 复习
* 正则表达式RegExp
    * 字符串方法
        * search()
        * match()
        * replace(str|reg,replacement)
        * split()
    * 正则方法
        * test()    返回boolean
        * exec()    类似于字符串的match方法
    * 字符类
        * \d,\D
        * \w,\W
        * \s,\S
        * .
    * 边界
        * \b,\B
    * 数量词
        * {3}   `\d{3},[\s\S]{5}`
        * {3,5}
        * {3,}
        * ?     等效：{0,1}， \d??
        * +     等效：{1,}
        * *     等效：{0,}
    * 表示所有字符
        * [\d\D]
        * [\w\W]
        * [\s\S]
    * 特殊符号
        * []
            * [0123456789]  等效于 \d
            * - 范围
                * [3-8]
                * [a-zA-Z]
            * ^ 表示非
                [^>]
        * {}
        * ? 数量词、非贪婪
        * ^ 开始、非
        * $ 结束
        * ()    分组
    * 贪婪模式于非贪婪模式
        > 默认贪婪模式，转非贪婪模式：?
    * 分组
        * 正则内：\1
        * 正则外：$1
        * 非捕获分组：(?:\.\w+) 一般用于优化正则表达式的性能

### 知识点
javascript = ECMAScript + BOM + DOM
* ES5
    * 页面事件
        * readystatechange
            * interactive
            * complete
        * DOMContentLoaded
            * document.addEventListener('DOMContentLoaded',()=>{})
        ```js
            document.onreadystatechange = function(){

            }
            document.addEventListener('readystatechange',function(){})
        ```
    * 严格模式
        > 'use strict'
    * JSON
        * 什么是json
        * 规范
            * 属性名必须使用双引号
            * 字符串必须使用双引号
            * 不能有注释
            * 不能有多余的逗号
            * 属性值必须为以下数据类型
                * Number
                * String
                * Boolean
                * Array
                * Object
                * null
        * JSON.stringify()
        * JSON.parse()

        ```js
            var goods = {
                "name":"huawei mate 40 pro", // 商品名称
                "price": 5998,
            }

        ```
    * 获取元素
        * querySelector(cssSelector)     得到选择器匹配的第一个元素
        * querySelectorAll(cssSelector)   得到所有匹配到的元素，返回一个伪数组
    * classList
        * length
        * add()
        * remove()
        * contains()
        * toggle()
    *  dataset
        > data-* 符合W3C规范的自定义属性
    * bind()
        > 格式： fn.bind(target)    把fn的this指向改为target

* ES6  (ECMAScript2015) 
    * 变量声明
        * var 
        * let 
    * 解构赋值
        * 数组
        * 对象
    * 字符串扩展
        * 模板字符串
            在模板字符串中使用js代码：${}
        * 方法扩展
            * includes()
            * startsWith()
            * endsWith()
    * 对象扩展
        * 
## day4-1

### 复习
* 事件
* 正则
* ES5
* ES6
    * 变量于常量
        * let 
        * const
        * 块级作用域
            > 在花括号中的作用域
            ```js
                // var i;
                for(var i=0;i<btns.length;i++){
                    btns[i].onclick = function(){
                        console.log(i); // 5
                    }
                }

                btns[0].onclick = function(){}
                btns[1].onclick = function(){}
                btns[2].onclick = function(){}
                btns[3].onclick = function(){}
                btns[4].onclick = function(){}
            ```
    * 解构赋值
        * 数组
        * 对象
        ```js
            let [a,b,c,d] = [10,20,30]
            var {a:n1,b,c,d} = {b:20,c:30,d:40,a:10};
        ```
    * 字符串扩展
        * 模板字符串
        ```js
            let username = 'laoxie'
            var str = `my name is ${username}`
        ```
    * 对象扩展
        * Object.assign(target,obj1,obj2...objN)
        * 对象的简写
            ```js
                var username = 'laoxie';
                var obj = {
                    key:value,
                    username,
                    [username]:18,
                    //getData:function(){}
                    getData(){

                    }
                }
            ```
### 知识点
* 箭头函数
    * 使用箭头`=>`，省略`function`，选择性省略`()`,`{}`和`return`的写法
    * this: 箭头函数中没有this
* 数据类型
    * 基本数据类型（值类型）
        * Number
            > 0-9
        * String
            > 单引号、双引号、反引号
        * Boolean
            * true
            * false
        * Undefined
            * undefined
        * Null
            * null
        * Symbol
    * 引用数据类型
        * Object
            * Array
    ```js
        var num1 = 10;
        var num2 = 10;

        num1 === num2; //true
    ```
* 循环语句
    * while
    * do...while
    * for
    * for...in
    * for...of
        - DOM节点集合(HTMLCollection/NodeList)
        - 字符串
        - 数组
        - Set集合/Map映射
        - ...
        > 准确来说，for-of循环能遍历所有带有迭代器的数据，默认不支持普通对象（无迭代器）
* 扩展运算符
* Set
* Map

### 动画：DOM节点高级操作
* 运动的原理
* 匀速运动：速度保持不变
* 加速运动：速度不断变快
* 减速运动：速度不断变慢
* 抛物线运动：水平和垂直速度同时进行


## day4-2

### 知识点
* 圆周运动
* 缓冲运动
* 动画函数封装
    * animate1.0
    * animate2.0

## day4-3
* 面向对象：利用对象进行编程的思想
    > 要面向对象，首先你得先有对象，然后利用对象进行其他操作
    1. 创建对象
   
    2. 描述对象
        > 对象有什么，对象能做什么
    3. 操作对象
        > 指挥对象做某些事情
* 如何创建对象
    * 字面量
         ```js
            // 字面量
            let obj = {}
        ```
    * 内置构造函数
        ```js
            let obj = new Object()
        ```
    * 自定义构造函数
    * class类
* 描述对戏那个
    * 添加属性:对象有什么
    * 添加方法:对象能做什么
        > 方法：属性值为函数的属性称为方法
    ```js
        let xiaoxie = {
            // 属性：有什么
            username:'谢冬冬',
            age:29,
            money:2000.00,

            // 方法：能做什么
            eat:function(){

            },
            sleep(){

            },
            shangke(){

            }
        }

    ```
* 自定义构造函数
    * 构造函数
    * 实例
        > 实例化步骤
    * 原型对象

* js特点
    * 一切皆对象
    * js是一门基于对象的脚本语言

* 原型对象
    * 如何获取
        * 通过构造函数获取：`构造函数.prototype`
        * 通过实例获取：
            * `实例.__proto__`
            * `Object.getPrototypeOf(实例)`
    * 属性访问规则
        1. 在当前对象查找，找到则停止，否则进入第2步
        2. 在原型对象中查找，找到则停止，否则进入第3步
        3. 在原型对象的原型中查找，依次类推
        4. 直到Object原型对象
        5. 如果在Object的原型对象中还是找不到，得到undefined

## day4-4

### 复习
* 什么是面向对象：利用对象进行编程
* 面向对象操作步骤
    1. 创建对象
        * 只有一个对象
            * 字面量 
            * 内置构造函数
        * 多个对象
            * 封装：工厂函数
            * 自定义构造函数 
            * class
    2. 描述对象
    3. 操作对象
* 构造函数
* 原型对象
    * 原型链
* 实例  
* 构造函数原型对象和实例三者的关系
    > 包含内置构造函数
* 属性访问规则：在原型链中查找
    * undefined
* this指向
    * 构造函数：指向实例
    * 原型方法：指向实例
    * 事件处理函数：执向绑定事件的元素
    * 其他：指向window
### 知识点
* 获取滚动条滚动距离
    * 浏览器滚动条位置：
        * window.scrollX
        * window.scrollY
    * 获取元素滚动条位置
        > 元素具有滚动条后才能获取到相应的值：width/height,overflow:auto|scroll,overflow-x,overflow-y
        * 元素.scrollLeft
        * 元素.scrollTop


## day4-6

### 知识点
* 服务器知识
    > http://localhost/home/index.php
    * 协议：http/https
    * 主机/域名：localhost/127.0.0.1
    * 端口：80（1-2^16,默认80端口不显示）
    * 目录：/home
    * 文件：index.php
* 客户端与服务端
    * 请求request
    * 响应response
* php语法
    * 变量
        * 超级变量
    * 常量
    * 函数
        * 作用域
    * 注释
    * 运算
        * 算术运算
        * 逻辑运算
        * 关系运算
        * 三元运算
    * 语句
        * 条件
        * 循环语句
    * 数据类型
        * String
        * Integer
        * Float
        * Boolean
            * true,True,TRUE,
        * Array
            * 数值数组：带有数字索引值的数组（与js数组一至）
            * 关联数组：带有指定的键的数组，每个键关联一个值（与js对象一致）
            * 多维数组：包含一个或多个数组的数组
        * Object
            * 类型
            * 访问控制
                * public（公有）：公有的类成员可以在任何地方被访问（用于替换var）。
                * protected（受保护）：受保护的类成员则可以被其自身以及其子类和父类访问。
                * private（私有）：私有的类成员则只能被其定义所在的类访问。
        * json操作
            * json_encode(data) 把数据data转成json字符串
                > JSON_UNESCAPED_UNICODE
            * json_decode(json,assoc) 把json字符串转成json对象

* apache
    * 虚拟主机配置
    ```xml
        listen 2009
        <VirtualHost *:2009>
            ServerName localhost
            DocumentRoot D:/h52009/w4-6PHP_MySQ
            <Directory  "D:/h52009/w4-6PHP_MySQ">
                Options +Indexes +Includes +FollowSymLinks +MultiViews
                AllowOverride All
                # Require local
                # 允许其他人访问这台服务器
                Require all granted
            </Directory>
        </VirtualHost>
    ```

* 服务端渲染与客户端渲染
    * 服务端渲染（SSR）：所有的内容在服务器生成，并响应给前端（前后端不分离）的开发模式
    * 客户端渲染（BSR）：前后端分离，前端写界面，后端写接口，然后利用ajax请求数据回到前端渲染的开发模式


* ajax
    * 步骤
        1. 实例化xhr对象： new XMLHttpRequest();
        2. 建立与服务器连接：xhr.open(type,url,async)
        3. 发送请求：xhr.send()
        4. 接收数据：xhr.onload = function(){}
            * xhr.responseText
    * 搞懂BSR的请求过程

## day5-1

### 复习
* 前端与后端
* 客户端与服务器
    * 请求过程: http://www.baidu.com/home/a/index.html?username=laoxie&password=12345#home
        1. request
        2. response
    * 协议
        * http
        * https     ssl
    * 端口(2^16)
        * 80
        * 443
        * 3306
    * 主机/域名
    * 路径
    * url参数
    * hash  哈希
* ajax
    > 不刷新页面的情况下请求服务器数据
* SSR与BSR
    * SSR: 服务端渲染
        > 所有的html结构在服务器生成，然后响应给前端浏览器渲染
    * BSR: 客户端渲染
        > 在客户端生成html结构（一般为js生成）

### 知识点

* ajax
    * xhr = new XMLHttpRequest();
    * xhr.open(type,url,async)
        * type: 请求类型
            * get           查：获取数据
            * post          增：添加数据
            * put/patch     改：修改数据
            * delete        删：删除数据
        * url: 接口地址
            > 注意：当前页面地址与API地址必须同域（同源策略）
            * 当前页面地址：http://localhost:2009/html/goods.html
            * api地址：    http://localhost:2009/api/goods.php
            * 同域: 协议，域名，端口三者一致，否则为跨域
                > ajax请求默认不允许跨域
        * async: 是否异步请求，默认为true
            * 同步：按步骤顺序执行，前面的代码执行完后，后面的代码才会执行
                > 做完前一件事情, 才能下一件事情（排队）
            * 异步：与其他操作同时执行，也叫并发（setTimeout, 图片加载，ajax请求）
    * xhr.send(data): 发送ajax请求
    * 事件
        * xhr.onload
        * xhr.onreadystatechange
            * xhr.readyState
                * 0     初始化
                * 1     open
                * 2     send
                * 3     部分接收
                * 4     完全接收
            * xhr.status    请求状态
                * 200+
                * 300+
                * 400+
                * 500+
* try...catch
* ajax请求传参
    * get: 放在url参数中
    * post: 放在请求体中
* 接收参数
    * $_GET
    * $_POST
    * isset()
* php中操作文件
    * fopen(path,mode)
    * fread(file,length)
    * filesize(path)
    * fwrite(file,content)：写入内容
    * fclose()：关闭文件,避免资源占用


## day5-2

### 知识点
* 跨域
    * 页面地址：http://localhost:10086/html/weibo.html
    * api地址：http://localhost:2009/api/weibo.php
* 跨域解决方案
    * CORS: 需要服务器支持
        * 设置响应头
            * Access-Control-Allow-Origin
            * Access-Control-Allow-Methods: get,post,put
            * Access-Control-Allow-Headers: 
    * JSONP: 需要服务器的支持
        * 全局函数
        * script    
            * src   请求php,响应js代码
        * 缺点：只支持get请求
    * 服务器代理
        > 有接口，但没权限访问
    * 爬虫
        > 目标服务器没有提供接口，但你很想拿到他的数据
        * 根据ip获取城市接口：http://whois.pconline.com.cn/ip.jsp?ip=61.144.96.228

## day5-3

### 复习
* 跨域解决方案
    * jsonp
        1. 定义全局函数
        2. 创建script标签并设置src属性为接口地址，传递全局函数名
        3. 把script标签写入页面
        4. 接收数据
        5. 移除script标签
    * CORS: 
        * Access-Control-Allow-Origin
            * 一个域名
            * `*`
        * Access-Control-Allow-Methods
            * 多个请求类型
            * `*`
        * Access-Control-Allow-Headers
            * 多个请求头
            * `*`
    * 服务器代理
        > 后端没有跨域限制
    * 爬虫
        * 分析html解构
        * 刷选需要的内容
        > 一般使用正则表达式
### 知识点
* 数据库分类
    * 关系型数据库
        * Oracle
        * SQLServer
        * MySQL/MariaDB
    * 非关系型数据库
        * MongoDB
* MySQL
    * 数据库    database
    * 表        table
    * 数据      row


## day5-4

### 复习
* mySQL
    * 服务
        > wampserver
    
    * 增删改查CRUD：sql语句
        * C: `insert into user(username,password) values('laoxie','123456')`
        * D: `delete from user where id<=10`
        * U: `update user set age=18 where age is null or age<18`
        * R: `select username,password from user where age between 20 and 25`
    * 条件：where 
        * =、>、<、<>、IN(1,2,3......)、BETWEEN a AND b
        * AND、OR、NOT
        * LIKE用法中
            * % 匹配任意、
            * _ 匹配一个字符（可以是汉字）
        * is null;
    * 过滤
        > 格式：limit index,qty
    * 排序
        > order by age 
        * asc   升序（默认）
        * desc  降序
* 命令行
    * 连接
        * -h    服务器，默认为localhost
        * -u    用户名（root）
        * -p    密码，默认为空
    * 切换数据库：
        > use [database]
* 可视化工具
    * 连接
    * 操作数据库
* php中操作mysql
    * 连接
        * 服务器
        * 用户名
        * 密码
        * 数据库
    ```php
        $_servername = 'localhost';
        $_username = 'root';
        $_password = '';
        $_dbname = 'h52009';

        // 链接mysql
        $conn = new mysqli($_servername, $_username, $_password, $_dbname);

        // 检测连接
        if ($conn->connect_error) {
            die("连接失败: " . $conn->connect_error);
        } 

        //查询前设置编码，防止输出乱码
        $conn->set_charset('utf8');

    ```
### 知识点
* 后端给前端的数据一定要统一格式
    > {code,data,msg}
        * code: 成功：200, 失败：400
        * data: 返回数据，如无数据统一为空数组
        * msg: 提示信息

## day5-5

### 复习
* 统一前后端数据格式
    > 接口文档，api文档
* 封装ajax请求方法2.0
    + baseUrl
    + data
    + 回调函数
* bootstrap
    > 基于jquery的UI框架，编写了大量的样式供我们使用
    * 栅格系统
        > 把一个容器分成12份

### 知识点
* 添加到购物车效果
    1. 点击添加到购物车按钮
    2. 修改购物车数量
    3. 保存添加商品信息
        * 先获取原来的值（数组）
        * 修改原来的值，然后重新写入
    4. 购物车页面显示商品信息
        > 读取本地存储中的数据
* 本地存储/客户端存储
    > 本地存储只能存字符串
    * cookie
        * 写入：document.cookie = 'name=value';
            > 一次只能写入一个cookie, 每写入一个就向本地写入一个文件
        * 读取: document.cookie
            > 得到当前所有cookie，不能跨域访问，也不能跨目录访问
        * 参数
            * expires: 有效期，默认关闭浏览器失效
                > 到了有效期，浏览器会自动删除cookie
            * path: cookie生效路径，默认为当前页面所在的路径
                > cookie只在当前路径内生效
            * domain: 存储域名，默认为当前域名
        * 删除cookie
            > 通过设置有效期来达到删除效果
    * webstorage

## day6-1

### 复习
*  cookie: 本地存储方案
    * 组成部分
        * name=value （必填）
        * 参数
            * expires   有效期（默认：浏览器关闭失效）
                > 有效期时间默认为世界时间
            * path      保存路径（默认：页面所在路径）
            * domain    生效域名（默认：当前域名）

    * 写入：document.cookie = `name=value`
        * 一次只能写入一个
        * 只能写入字符串
    * 读取：document.cookie
        > 返回所有cookie
    * 特点
        * 随着请求自动发送给服务器
        * 可以通过`Set-Cookie`响应头从后端设置cookie
### 知识点
* webStorage (HTML5新特性)
    * 分类
        * sessionStorage
            > 会话存储，关闭浏览器就自动删除
        * localStorage
            > 本地存储，永久保存在电脑上，除非手动清除
    * 属性
        * length: 只读，用来获取storage内的键值对数量
    * 方法
        * setItem (key, value) —— 保存数据，以键值对的方式储存信息。
            > 只能写入字符串
        * getItem (key) —— 获取数据，将键值传入，即可获取到对应的value值。
        * removeItem (key) —— 删除单个数据，根据键值移除对应的信息。
        * clear () —— 删除所有的数据
        * key (index) —— 获取某个索引的key
    * 事件
        * storage
* 公共代码提取
* bootstrap
    * 尺寸
        * xs
        * sm
        * md
        * lg
        * xl
    * 颜色
        * primary
        * secondary
        * success
        * danger
        * warning
        * info
    * 重置样式reset

## day6-2

### 复习
* 服务器存储
    * 数据库：mySQL
* 本地存储（数据持久化）
    * Cookie
        > 一般用户存放简单数据和需要与服务器交互的数据，不允许跨域访问
        * 参数
            * expires
            * path
            * domain
    * WebStorage
        * sessionStorage
        * localStorage
* Bootstrap
* 面向对象
    * 创建对象的方式
        * 字面量
        * 内置构造函数
        * 工厂函数
        * 自定义构造函数
        * Class类
    * 面向对象中的三大模块
        * 构造函数
        * 原型对象
        * 实例
    * 属性访问规则
        > 在**原型链**中查找（实例->Object的原型）
        * 找到则停止，否则继续向上查找，直到Object的原型对象（终点）
        * 到终点如果还是找不到，则得到undefined
    * 一切皆对象（基于对象）
        ```js
            // js
            str.length

            //php
            strlen($str);
        ```
    * 属性写在实例，方法写在原型对象上
### 知识点
* 原型链
    ```js
        funciton Firework({x,y}){
            this.x = x
            this.y = y

            //this.move = function(){

            //}
        }

        Firework.prototype.move = function(){}
        Firework.prototype.remove = function(){}

        // 重置原型对象
        Firework.prototype = {
            constructor:Firework,
            move(){},
            remove(){},
            __proto__
        }

    ```
* 内置构造函数
    * Object
    * Array
    * Function
    * String
    * Number
    * Boolean
    * RegExp
    * Audio
    * Set
    * Map
    * ....
    ```js

        new Object();
        new Array();
        // new Function();
        // new Number()
        new String();

       
        
    ```
* 基本数据类型调用方法的原理
    ```js
        'abc'.substr(1);//bc
        /*
            以上代码内部执行步骤
            1. 实例化对象：var o = new String('abc');
            2. 调用对象方法: o.substr(1)
            3. 返回结果bc
            4. 删除实例化对象
        */


        //'10'.toFixed(2);// toFixed is not a function
        (10).toFixed(2);//10.00
        
        // var n = new Number(10)
        // n.toFixed(2); //10.00
        // 删除n对象

    ```
* 扩展内置方法
    > 让ie低版本浏览器（IE8-）支持`trim()`方法

* 判断对象属性
    * 判断是否可访问： `key in obj`
    * 判断当前对象是否有某一属性：`obj.hasOwnProperty(key)`
    * 判断某个属性是否在原型中：`key in obj && !obj.hasOwnProperty(key)`

* 继承
    > 子类继承父类的属性、方法
    * 继承方式一：原型链继承法
        > 核心：拿父类实例来充当子类原型对象
    * 继承方式二：借用构造函数法
        > 核心：借父类的构造函数来增强子类实例，相当于把父类的实例属性复制一份给子类实例
        * call()/apply()
    * 组合继承(最常用的继承方式)
        * 原型链继承法：继承方法
        * 借用构造函数法：继承属性
    * 继承方式三：原型式继承法
        * 原型链继承法的优化版本，解决了多余属性，多次调用的问题
    * 组合继承升级版
        * 原型式继承法：继承方法
        * 借用构造函数法：继承属性

## day 6-3

### 复习
* 继承方式
    1. 原型链继承法：只能继承方法
        > 核心点：利用父类实例重置子类原型对象
        * 缺点：
            1. 只能继承方法，不能继承属性
            2. 原型对象中有多余的属性
    2. 借用构造函数法：用来继承属性
        * fn.call(target,...args)
        * fn.apply(target,arg)
        > 把fn的this改成target并执行fn，跟直接执行`fn(...args)`和`fn(arg)`有本质区别
        ```js
            Laowang.call(this)
        ```
    * 组合继承法：
        * 继承属性：借用构造函数法
        * 继承方法：原型链继承法
        * 缺点：
            1. 原型对象中有多余的属性
            2. 多次执行父类
    3. 原型式继承法
        * ES5: Object.create(obj)
            > 以obj作为原型创建一个对象
        ```js
            Xiaowang.prototype = Object.create(Laowang.prototype)

            // 低版本浏览器写法
            Xiaowang.prototype = object(Laowang.prototype)
            function object(o){
                const F = function(){}
                F.prototype = o;
                return new F();
            }
        ```
    * 组合升级版
        * 继承属性：借用构造函数法
        * 继承方法：原型式继承法
### 知识点
4. ES6的继承


* 静态方法：通过类调用的方法
    * Object.create()
    * Date.now()
    * Date.parse()
    * String.fromCharCode()
    * Array.from()
    * Array.isArray()
    * ....
* 原型方法：通过实例调用
    * map(): arr.map()
* call&apply的使用

* 闭包
    * 变量的查找规则：变量可以往外查找却不能往函数内查找
    * 一个函数执行完毕，内部变量会被回收（销毁）
    ```js
        function show(){
            var a = 100;

            var sum = function(){
                var b = 200;
                return a + b;
            }
        }

        show();
        console.log(a);// a is not defined;

    ```
* 垃圾回收机制
    * 自动
    * 回收方式
        * 引用计数法：
        * 标记清除法
        ```js
            // 引用计数法缺点：相互引用时无法识别是否能被清除
            let obj1 = {
                name:'obj1',
                show(){
                    return obj2.name;
                }
            }
            let obj2 = {
                name:'obj2',
                show(){
                    return obj1.name;
                }
            }
        ```
* 闭包的应用
    * 封装
    ```js
        function cookie(name){
            return {
                get(){
                    var cookies = document.cookie.split('; ');
                    var value = '';
                    cookies.forEach(function (item) {
                        var arr = item.split('=');
                        if (arr[0] === name) {
                            value = arr[1];
                        }
                    });
                    return value;
                },
                set(value,params={}){
                    var str = ''
                    for (var key in params) {
                        str += key + '=' + params[key] + ';'
                    }
                    str = str.slice(0, -1);

                    document.cookie = name + '=' + value + ';' + str;
                },
                remove(){
                    var d = new Date();
                    d.setDate(d.getDate() - 1);
                    this.set(name, 'x', { expires: d });
                }
            }
        }

        const myCookie = cookie('cartlist');
        myCookie.get();
        myCookie.set({a:10,b:20})
        myCookie.remove();

    ```
* 属性特性
    * 值属性（有值得属性）
        * configurable  可配置性（总开关，控制其他属性特性是否可修改）
        * enumerable    可枚举性（是否可遍历）
        * writable      可写性（是否可修改）
        * value
    * 方法
        * 设置
            * Object.defineProperty(target,key,descriptor)
            * Object.defineProperties(target,descriptors)
            ```js
                Object.defineProperty(obj,'username',{value:'tiantian'})
                Object.defineProperties(obj,{
                    username:{
                        value:'tiantian'
                    },
                    password:{
                        value:'123'
                    }
                })
            ```
        * 获取
            * Object.getOwnPropertyDescriptor()

## day6-4

### 复习
* 继承
    * ES6继承：类
        * class
        * extends
        * constructor
            * super
    ```js
        class Person{
            // 这里的方法会自动成为原型的方法
            constructor(){
                // 这里的属性为实例属性
                // this.xx = xx;
                // this.coding = function(){}
            }
            
            coding(){

            }
        }

        let p1 = new Person()
        let p2 = new Person()
        let p3 = new Person()
        let p4 = new Person()
        let p5 = new Person()

        // 传统写法
        Person.prototype = {
            constructor:Person,
            coding(){

            }
        }
        Object.defineProperties(Person.prototype,{
            constructor:{
                configurable:true,
                enumerable:false,
                writable:true,
                value:Person
            },
            coding:{
                onfigurable:true,
                enumerable:false,
                writable:true,
                value:function(){

                }
            }
        })
    ```

* 静态方法与原型方法
    * static 

* 闭包
    > 正常情况下：函数作用域在执行时创建，在执行完毕或销毁（所以函数内的变量也会被回收）
    * 闭包的生成条件：函数嵌套函数，并返回嵌套函数
    * 垃圾回收机制
        * 计数清除法
        * 标记清除法
    * 结论：闭包是指有权访问另一函数作用域中的变量的函数
    * 闭包应用
        * 封装
        * 模块化开发

* 属性特性
    * 值属性（有值得属性）
        * configurable  可配置性
        * enumerable    可枚举型
            * for...in
        * writable      可写性
        * value         属性值
    * 存储器属性
* 属性特性操作
    * 设置：
        * Object.defineProperty(target,key,descriptor)
        * Object.defineProperties(target,descriptor)
    * 获取
        * Object.getOwnPropertyDescriptor(target,key)
        * Object.getOwnPropertyDescriptors(target)

### 知识点 
* 编写插件
    * 原生插件：增强原生能力
    ```js
        // 增强兼容性：让trim方法在低版本浏览器也能生效
        if(String.prototype.trim === undefined){
            String.prototype.trim = function(){

            }
        }

        // 增强易用性
        if(Date.prototype.format === undefined){
            Date.prototype.format = function(fmt){
               
               return 
            }
        }

        new Date().format('YYYY/MM/DD');// 2020/12/31
        new Date().format('YYYY-MM-DD hh:mm:ss');// 2020-12-31 10:06:43
    ```
    * ajax请求封装3.0
        > 利用回调函数获取数据

## day7-1

### 知识点
* HTML5新特性：Promise 
    * Promise的状态
        * Pending   未完成（创建promise对象时的初始状态）

* ajax封装4.0
```js
    function ajax(url,callback){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            console.log(xhr.responseText);

            // 等数据返回后执行回调函数
            callback(xhr.responseText);
        }
        xhr.open('get',url,true);
        xhr.send();

        return 
    }

    // 利用Promise封装
    function ajax(url){
        // 返回一个Promise实例，但是这个实例当前并不能得到数据，但承诺在某个时间返回数据
        return new Promise(function(resolve,reject){
            // resolve和reject都是函数
            // 调用resolve()方法，表示成功，解决
            // 调用reject()方法，表示失败，拒绝
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
               let data = JSON.parse(xhr.responseText);
                if(xhr.status === 200){
                    resolve(data)
                }else if(xhr.status === 400){
                    reject('fail');
                }
                
            }
            xhr.open('get',url,true);
            xhr.send();
        })
        
    }

    // 如何获取封装函数中的数据
    // ajax('http://localhost:2009/api/goodslist',function(data){});
    let promise = ajax('http://localhost:2009/api/goodslist')
    promise.then(function(data){
        console.log('data',data);
    }).catch(function(err){
        console.log('err',err);
    })

```

* async & await
    > ECMAScript 2017(ES8)推出的标准
    * async: 异步，函数关键字，给函数添加async关键字后，函数的返回值就是Promise对象
    * await: 等待，等待promise对象的返回结果（状态为fulfilled后得到的结果），必须放在async函数中

* 节点操作
    1. 获取节点
        * document.getElementById()
        * getElementsByClassName()          HTMLCollection
        * getElementsByTagName()            HTMLCollection
        * document.getElmentsByName()       HTMLCollection
        * querySelector()
        * querySelectorAll()                NodeList
        * 节点关系、元素关系
    2. 操作节点
        * 增
        * 删
        * 该
        * 查
    ```js
        let link = document.createElement('a');
        link.href = '#';
        link.innerText = 'link';
        link.title = 'link';

        link.set({
            href:'#',
            innerText:'link',
            title:'link'
        })

    ```
* HTMLCollection与NodeList的区别
    * HTMLCollection会自动更新页面添加的节点，而NodeList不会更新

## day7-2

### 知识点
* 一个方法实现获取与设置的功能
* html属性与节点属性
    * 公共属性
        * class
        * id
        * title
        * style
        * contenteditable
    * 私有属性
        * src
        * name
        * value
        * checked
        * selected
    * 自定义属性
        * data-*    dataset

* jQuery
    * 定义：jQuery是一个面向对象的工具库
    * 概念
        * 构造函数（类）: jQuery
        * 原型对象     : jQuery.prototype = jQuery.fn
        * 实例         : jQuery对象
        * 原生节点     : 通过jquery下标获取
    * 特点
        * 擅长节点操作
    * 节点操作
        1. 获取节点
        2. 操作节点
* jquery常用操作
    * jquery对象->原生对象（节点）
        * get(idx)/get()
        * [idx]
    * 原生对象->jquery对象：$(原生对象)
    * 判断是否为jquery对象:
        ```js
            let obj = $('xxx')
            if(obj.jquery){

            }
        ```
    * 判断jquery对象是否匹配到元素
        ```js
            let $btns = $('button');
            if($btns.length){

            }
        ```
## day7-3

### 复习
* 选择器
* jquery
    * html()      innerHTML
    * text()      innerText
    * val()       value

### 知识点
* 过滤选择器
    * :odd
    * :even
    * :eq
* 过滤方法(推荐)
    * eq()
    * first()/last()
    * filter()
    * not()
    * has() 判断是否包含
* jquery插件（jquery扩展）
    * 原型方法: jQuery.prototype.show()
    * 静态方法: jQuery.ajax()

* 扩展方法
    * jQuery.extend() 
        * 扩展jquery本身
        * 扩展对象
        ```js
            let target = {username:'laoxie'}
            $.extend(target,{a:10,b:20});// 把a,b扩展到target，类似于原生Object.assign(target,...)

            // 浅拷贝
            $.extend(target,{a:10,b:20,hobby:{h1:10,h2:20}})
            // 深拷贝
            $.extend(true,target,{a:10,b:20,hobby:{h1:10,h2:20}})
        ```
    * jQuery.fn.extend()： 扩展jQuery原型
    
## day7-4

### 知识点
* 环境
    * 开发环境 development（本地）
    * 生产环境  production（上线）
    * 测试环境  test
* 构建
    * 合并
    * 压缩
    * 编译
        * ES6->ES5
        * Sass->css
        * Typescript->js
        * ....
    * 改名：
        * jquery.js -> jquery.min.js
    * 优化
    * ...
* 构建工具
    * grunt
    * gulp
    * webpack
* 准备工作
    1. 安装NodeJS
    2. 了解npm（随着NodeJS一起安装）
        * 安装模块：
            * `npm install 包名`    项目安装（每个项目需要安装一次）
                > 项目安装一般是为了在项目的代码中使用
            * `npm install -g 包名` 全局安装（一台电脑只需安装一次）
                > 全局安装为了在命令行使用
        * 初始化项目：`npm init`
            > 会在项目根目录下创建一个`package.json`项目配置文件
        * npm script: npm 脚本
            * 运行脚本格式：`npm run 脚本名称`
    3. 了解nodejs模块化
        * 定义模块: module.exports
        * 引入模块：require
            * 内置模块
            * 自定义模块
            * 第三方模块
    4. 了解gulp
* 一个合格的程序员至少需要了解以下内容
    * 显示隐藏目录和扩展名
    * 配置环境变量
    * 了解自己设备的配置
* NodeJS
    * npm
        * 查看镜像地址：`npm config get registry`
        * 设置国内镜像：`npm config set registry https://registry.npm.taobao.org`

## day7-5
### 复习
* Nodejs
    * npm
        * 查看：npm config get registry
        * 修改镜像源：npm config set registry https://registry.npm.taobao.org
        * 安装
            * npm install <packageName> : 安装一个获取多个模块
            * npm install：安装package.json中的所有依赖模块
            * npm install --production： 安装package.json中的dependencies
                > node_modules
                * --global/-g： 全局安装
                * --save/-S  保存依赖信息到package.json中的dependencies
                * --save-dev/-D 保存依赖信息到package.json中的devDependencies
        * 生成package.json 
            > npm init
    * 模块化：commonJS
        > 模块中的代码为局部作用域
        * 导入：require()
            1. 查看是否存在缓存
            2. 判断是否为内置模块
            3. 引入node_modules中的模块 
            > PS：第一次引入成功后，会缓存模块
        * 导出：module.exports
        * 分类
            * 内置模块：可以直接引入
            * 自定义模块
                * 引入时要写相对路径
            * 第三方模块
                1. 安装
                2. 引入（与内置模块一致）
* gulp
    > gulp是一个构建工具，依靠任务来执行不同的操作
    * 全局安装：为了在命令行中使用
        ```bash
            npm install -g gulp
        ```
    * 项目安装：为了在代码中引用
        ```bash
            npm i gulp
        ```
    * gulpAPI
        * 引入
            ```js
                require('gulp');
            ```
        * gulp.task()   创建任务
            > 运行gulp任务：gulp name
        * gulp.src()    匹配文件
            > 文件流
            * pipe()
        * gulp.dest()   输出文件
    * gulp插件
        * gulp-uglify
        * gulp-rename
        * 
### 知识点
* 应用
    * js压缩,合并，重命名
    ```js
        gulp.task('compress',function(){
            retrun gulp.src('src/**/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./dist/js))
            .piep(uglify())
            .rename({
                suffix:'.min'
            })
            .pipe(gulp.dest('./dist/js'))
        })        

    ```
    * ES6转ES5
        > 需要插件gulp-babel，这个插件需要依赖@babel/core,@babel/preset-env
        ```js
            const babel = require('gulp-bable')
            gulp.task('es625',function(){
                return gulp.src('src/js/*.js')
                .pipe(babel({
                    // 插件集合
                    presets:['@bable/preset-env'],
                    // babel插件
                    plugins:[]
                }))
                .pipe(gulp.dest('./dist/js'))
            })
        ```

* css预处理器
    > less,sass,stylus
    * css的问题
    ```css
        <div class="box">
            <h1></h1>
            <div class="list">
                <ul>
                    <li class="first">
                        <img>
                        <a class="link"></a>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>

        .box h1{}
        .box .list ul li a.link:link{color:#ff0}
        .box .list ul li a.link:hover{color:#cc0}
        .box .list ul li a.link:active{color:#ff0}
        .box .list ul li a .link:visited{color:#ff0}
    ```
    * sass
        ```scss
            $mainColor:#ff0;
            .box{
                .list{
                    ul{
                        li{
                            a.link:link{color:$mainColor}
                            a.link:hover{color:lighten($mainColor,20%)}
                            a.link:active{color:$mainColor}
                            a.link:visited{color:$mainColor}
                        }
                    }
                }
            }
        ```
* 编译sass: gulp-sass
    ```js
        gulp.task('compileSass',()=>{
            return gulp.src('src/sass/*.scss')
            .pipe(sass({
                outputStyle: 'compact', //nested(默认）,expanded：展开,compact：单行,compressed：压缩
            }).on('error',sass.logError))
            .pipe(gulp.dest('./src/css'))
        })
    ```
* 监听sass文件修改，并自动编译
    ```js


    ```

## day8-1

### 复习
* gulp
    * task()    创建任务
    * src()     匹配文件
    * dest()    输出文件
    * watch()   监听文件
* E6转ES5
    * gulp-babel: @babel/core, @babel/preset-env
* sass
    * 编译sass->css: gulp-sass, node-sass/sass
    * 特性
        * 变量
            * 一般用于属性值
            * 用在属性名/选择器：#{}
        * 嵌套
        * 循环
            * @for $i from 1 through 6;
            * @for $i from 1 to 6;
        * 导入
        * 函数
            * 内置函数
            * 自定义函数

逻辑思维移植
    * 三段论
        * 前提  金属能导电
        * 条件  管子是金属做的
        * 结论  管子能导电
    * 索引值

### 知识点
* mixin: 一般用于有参数的代码复用
* 继承：一般用于代码复用
    * 占位符
* 自定义函数：一般用于运算

* 色系
    * lighten($color,$percent) $color颜色值，$percent百分比
    * darken($color,$num) $num:0-100
* SVN: 集中式
* git: 分布式
    * 概念
        * 工作区（Working Directory）： .git所在的目录
        * `.git`: git仓库，通过`git init`得到
            * 暂存区：（stage/index）
            * 版本库：（repository）
        * master/main： 主分支（默认分支）
        * HEAD: 最新版本
    * git本地操作
        0. 添加或修改文件
        1. 添加文件：添加修改到暂存区
            > 格式：git add 
            * 添加单个文件：`git add 文件`
            * 添加一个目录：`git add 目录名`
            * 添加当前目录：`git add .`
            ```bash
                git add ./js/home.js;
                git add ./js/
                git add .
            ```
            > PS: **添加修改**到暂存区而不是添加文件到暂存区
        2. 提交：把暂存区的内容提交到版本库
            > 格式：git commit -m "备注"
            * vim:
                * 输入状态：i
                * 退出输入状态：ESC
                * 退出vim: shit+:
                    * !q: 不保存退出
                    * wq: 保存退出
    * 远程仓库（公共服务器）
        > 工作中一般是本地服务器
        * 创建
            * Public    共有仓库
            * Private   私有仓库
        * 关联本地仓库与远程仓库
            * 最简单的方式：git clone会自动关联
            * https关联
                > 每次提交都要输入用户名和密码，比较麻烦
                ```bash
                    git remote add origin https://github.com/aaron-xie/laoxietest.git
                ```
            * ssh关联
                1. 利用`ssh-keygen`命令创建公钥与私钥
                2. 把公钥添加到服务器
        * 同步远程与本地
            * 推送: git push origin master
                > 一定是本地比远程版本更加新
            * 拉取与合并: git pull origin master
                * 拉取: git fetch origin master
                * 合并: git merge origin/master
                > 有可能产生冲突，如果出现冲突，必须先要手动解决冲突，然后才能提交代码

    * git常用命令
        * git status： 查看仓库当前状态
        * git log: 显示提交日志
        * git init: 初始化仓库


## day8-2

### 知识点
* 过滤清单
* 解决冲突
* 版本回退：git reset
    * git reset --hard HEAH^ （HEAD~10）
    * 参数
        * --hard:工作区、暂存区、版本库的文件同时回退
        * --mixed（默认）：暂存区、版本库的文件回退
        * --soft：仅仅回退版本库中的文件
* 分支 branch
    * 分支操作
        * 查看：git branch
        * 创建: git branch 分支名
            > 在当前分支的基础上创建一个拷贝
        * 切换: git checkout 分支名
        * 删除：git branch -d 分支名
        * 合并：git merge 分支名
            > 把指定分支内容合并到当前分支
            * git pull = git fetch + git merge
    * 常用分支
        * master/main   主分支（默认分支），一般用于版本发布
        * dev           开发分支，所有程序员把代码提交到该分支
        * release       发版前的未测试版
        * hotfix        紧急bug处理分支

* 发版

* 项目上线
    1. 项目构建
        * 合并: 减少http请求
            > js
        * 压缩js,css,html: 减少文件大小
        * 编译：
            > sass,js
        * 输出：dist
            > 上线文件
    2. 购买服务器
        > aliyun
    3. 上线
        > 把构建好的代码，放到服务器
        * ftp
        * 
    
* 环境
    * 开发环境：development
        > 可调试，代码未压缩等
        * 自测：代码提交前一定要自测
    * 生产环境：production
        > 压缩合并，优化等
    * 测试环境
        > 测试团队