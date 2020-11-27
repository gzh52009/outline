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