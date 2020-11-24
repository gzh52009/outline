# Javascript基础语法

# day1-1

## js历史
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

## js语言的组成
> javascript = ECMAScript + BOM + DOM

## H5与前端js的关系
> h5全称HTML5,不是单纯的html的第5个版本，而是一项最新的web标准，是html、css、javascript等技术的集合
* 前端与后端


## 基础语法
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

## 数据类型
* String    字符串（**单引号**或**双引号**包含的数据）
* Number    数字
    > 0-9
    * NaN: Not a Number
* Boolean   布尔值
    * true  对/是/1
    * false 错/否/0


### 数据类型转换
* 显性转换
    * String -> Number : Number(字符串)
    * Number -> String : String(数字)
    * Number -> Boolean : Boolean(数字)
* 隐式转换
    > 如果运算不能进行下去，内部就会尝试进行数据类型的自动转换(支持隐式转换的运算：逻辑运算、关系运算、算术运算）

## 运算
### 算术运算
> 针对数字类型

* 加法：+
    * 数字：加法运算
    * 字符串：拼接
* 减法：-
* 乘法：*
* 除法：/
* 求余（求模）：%


### 赋值运算
* =
* +=
* -=
* *=
* /=
* %=


## 常用方法
* parseInt()    取整
* toFixed()     取小数点位数



## 超前知识点
* 获取元素：`document.getElementById()`
    * 获取表单的值：`元素.value`  得到的数据为String
    * 写入表单的值：`元素.value=值`
* 事件绑定：`元素.onclick=function(){}`


# day1-2

## 复习
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

## 学习方式
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

## 知识点

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



## 超前知识点
* Math.random()