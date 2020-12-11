[TOC]
# ES6
> 官方名称为ECMAScript2015，即在2015年发布的ECMAScript第6个版本

## 变量声明
* `let`: 代码块内的变量声明
     1. 变量声明不会提前
     2. 块级作用域
     3. `let`不允许相同作用域内多次声明同一变量

* `const`:常量声明
     1. 变量声明不会提前
     2. 块级作用域
     3. `const`不允许相同作用域内多次声明同一变量
     4. 声明后无法修改值
    > 声明后不希望被修改的变量都建议用`const`声明

## 解构赋值Destructuring
ES6允许我们对**数组**（包括伪数组和字符串）和**对象**中提取值，并对变量进行赋值，这被叫做“**解构**”

* 数组解构
```javascript
    // 声明a,b,c变量，并赋值数组中对应索引的值
    var [a,b,c] = [1,2,3] //a=1,b=2,c=3
    var [a,[[b],c]] = [10,[[20],30]] //a=10,b=20,c=30
```

* 对象解构
    > 变量必须与对象属性名相同，否则为undefined，如需变量名与对象属性名不同则必须写成此以下格式
        ```js
            // 声明a,b变量，并解构对象中相应的属性
            var {a,b}={a:'html',b:'css'}

            // 声明test变量，变解构对象中的a属性
            var {a:test} ={a:'html',b:'css'} //test=>html
        ```
* 解构失败
    > 对象或数组中没有对应的值则解构失败，得到`undefined`，不能对数组和对象以外的数据进行解构，否则报错
     ```js
        //以下a,b都得到undefined
        var [a]=[];
        var {c} = {a:10,b:20}

        //以下报错
        var [a]=1;
        var [b]=false;
        var {c} = undefined
        var {d} = null
    ```
* 解构时指定默认值
     ```javascript
        var [a=true]=[]
        var {a=10} = {}
     ```

### 解构用途
* 交换变量值
    ```js
        var [x,y] = [y,x];
    ```
* 解构函数返回值
    ```javascript
        function example(){
            return {username:'laoxie',age:18,isDanshen:false}
        }

        //接收
        var {username,age} = example();
    ```


* 定义函数形参
    函数的参数定义方式, 不用再考虑参数的顺序 
    ```javascript
        function test({x,y,z}){}

        //传参
        test({x:10,y:20,z:30})

        //参数可以设置默认值
        function test({x=10,y=20,z}){}
    ```

## 字符串扩展

### 字符串方法

* includes
    判断是否包含某个字符，返回布尔值
    ```javascript
        'html5'.includes('html');//true
    ```
* startsWith/endsWith
    是否以某一字符开头/结尾
    ```javascript
        let str='google';
        str.startsWith('g');  //true
        str.endsWith('le');    //true
    ```
* repeat(n)
    得到字符串重复n次后的结果，n可以为小数，但不能为负数
    ```javascript
        'laoxie'.repeat(2);//laoxielaoxie
    ```


### 模板字符串template string (重点)
使用反引号`表示，你可以通过一种更加美观、更加方便的方式向字符串中插入变量
格式：${变量|函数}，
```javascript
 `你好，我的名字叫${username},接下来是我的自我介绍：${introduce()}` 
```

>模板字符串中所有的空格、新行、缩进，都会原样输出在生成的字符串中。


## 对象扩展（重点）
* 扩展对象属性:Object.assign(target,obj1,obj2,...objN);

```javascript
    let obj = Object.assign({a:1},{b:2},{b:4,c:3}); //{a:1,b:4,c:3}
```

* 简写
> ES6允许在对象之中直接写变量，如

```javascript

    //@属性简写
    var myName = 'laoxie';
    var obj = {myName};//属性名为变量名, 属性值为变量的值
    //等效于
    var obj = {myName:'laoxie'}

    //使用变量值作为属性名
    var obj = {
        [myName]:18
    }
    //等效于
    var obj = {laoxie:18}

    //@方法简写
    var obj = {
        coding(){

        }
    }
    //等效于
    var obj = {
        coding:function(){

        }
    }
```

## 箭头函数arrow function（重点）
> 使用箭头`=>`，省略`function`，选择性省略`()`,`{}`和`return`的写法

### 参数与返回值
> 只有一个参数时可省略`()`，函数体中只有一行代码时，可以省略`{}`和`return`

* 零个参数写法
```javascript
    //传统写法
    var sum = function(){}

    //es6箭头函数
    var sum = () => {}
```

* 函数只有一个参数写法（可省略括号）
```javascript
    //传统函数写法
    var test = function(x){} 

    //使用箭头函数
    var test = x=>{}
```

* 多个参数写法
```javascript
    var arr = [10,8,12,3,9,10];

    //传统写法
    var sum = function(a,b){
        return a+b;
    }
    arr.sort(function (a, b) {
      return a - b;
    });

    // 箭头函数
    var sum = (a,b) => a+b
    arr.sort((a, b) => a - b);
```

* 函数中有多行代码时
    > 不能省略`{}`,`return`

    ```javascript
        // 传统写法
        var sum = function(a,b,c){
            a = parseInt(Math.random()*a);
            b = parseInt(Math.random()*b);
            c = parseInt(Math.random()*c);
            return a+b+c;
        }

        // 箭头函数
        var sum = (a,b,c)=>{
            a = parseInt(Math.random()*a);
            b = parseInt(Math.random()*b);
            c = parseInt(Math.random()*c);
            return a+b+c
        }
    ```
* 函数返回一个对象
    > ES6中的规则是，紧随箭头的花括号`{}`被解析为块的开始，而不是对象的开始

    ```javascript
        //传统写法
        var createPerson = function(){
            return {name:'laoxie',age:18}
        }

        // 箭头函数
        var createPerson = ()=>{name:'laoxie',age:18};   // 这样写会报错！

        //当使用箭头函数返回一个普通对象时，需要将对象包裹在小括号里
        var createPerson = ()=>({name:'laoxie',age:18});
    ```

### 箭头函数中的this值
箭头函数没有它自己的this值，箭头函数内的this值继承自外层作用域



## Symbol数据类型
ES6引入了一种新的原始数据类型`Symbol`，表示独一无二的值，一旦创建后就不可更改，是一种类似于字符串的数据类型，但Symbol 值不能与其他类型的值进行运算，否则报错。

### 定义
* `Symbol()`
* `Symbol('laoxie')`
* `Symbol.for('laoxie')`
>Symbol值不能与其他类型的值进行运算
    
```javascript
    // 没有参数的情况
    var s1 = Symbol();
    var s2 = Symbol();

    s1 === s2 // false
```


* Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了标识和区分，对调式非常有用
```javascript
    // 有参数的情况
    var s1 = Symbol("foo");
    var s2 = Symbol("foo");

    s1 === s2 // false
```
* Symbol.for()
有时我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点，首先在全局中搜索**已登记**的Symbol值，如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值

```javascript
    let one = Symbol("laoxie");
    let two = Symbol.for("laoxie");

    //由于创建了两个Symbol值，所以他们不相等
    console.log(one===two);//false
```

### 用途
* 给对象创建私有属性
    >给现有的对象添加属性，可能会产生命名冲突，Symbol的出现解决这个问题

```javascript
    var mySymbol = Symbol();

    // 第一种写法
    var a = {};
    a[mySymbol] = 'Nani';

    // 第二种写法（注意加方括号，否则回被当作普通属性）
    var a = {
      [mySymbol]: 'Nani'
    };

    // 以上写法都得到同样结果
    a[mySymbol] // "Nani"
```
* 迭代器（了解）

## 遍历扩展
* for...of
```javascript
    var arr = [10,12,18,30]
    for (var value of arr) {
    console.log(value);
    }
```

- for-of循环也可以遍历以下数据
    - DOM节点集合(HTMLCollection/NodeList)
    - 字符串
    - 数组
    - Set集合/Map映射
    - ...
> 准确来说，for-of循环能遍历所有带有迭代器的数据，默认不支持普通对象（无迭代器）

## 扩展运算符...
* 在数据和对象中使用`...` 是扩展操作
```javascript
    //数组操作
    let a = [1,2,3];
    let b = [...a]   // [1, 2, 3]
    let c = [0, ...a]  // [0, 1, 2, 3]
    let d = [0, ...a, 9]  // [0, 1, 2, 3, 9]

    function test(a, b, c) {
        console.log(a, b, c);
    }

    //实参传递
    test(...a); // 1 2 3
```

* 在函数定义时和解构时使用`...` 是剩余操作
```javascript
    function test(a, ...b) {
        console.log(a, b);//a:10,b:[20,30,40,50]
    }

    test(10,20,30,40,50); 

    //解构操作
    let list = [6,16,26,36,46,56,66]
    let [x,...y] = list;//x:6,y:[16,26,36,46,56,66]
```


## 生成器函数 Generators（了解）
* function和函数名之间有一个*号
* 函数体内部使用了yield表达式
* next()
    - 执行next()后得到一个yield或return返回值组成的对象`{value:xx,done:false}`
    - 对象中的done是否为true,取决于函数是否完结束

```javascript
    function* gen() {
        yield 10;
        yield 20;
        return 100;
        yield 30;
    };
    let g = gen();//得到一个对象
    g.next();//{value:10,done:false}
```

## Set集合
Set集合，类似于数组，但是成员的值都是唯一的，可自动去重。

### 方法
* add(value)：添加某个值，返回Set结构本身。
* delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
* has(value)：返回一个布尔值，表示Set集合中是否存在该值。
* clear()：清除所有成员，没有返回值。

```javascript
    let imgs = new Set(); 
    imgs.add(1); 
    imgs.add(1);
    imgs.add(5);
    imgs.add("5"); 
    imgs.add(new String("abc")); 
    imgs.add(new String("abc"));

    //打印的结果： 1  5  '5'  'abc'  'abc'
```
>Set集合是默认去重复的，但前提是两个添加的元素严格相等，所以5和"5"不相等，两个new出来的字符串不相等

* 去重数组
```javascript
    let items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);

    //去重后重新转成数组
    //Set->Array
    Array.from(items);
```

* 遍历
    - for...of
    - forEach()

```javascript
    var imgs = new Set(['a','b','c']); //根据KEY遍历 
    for(let item of imgs){
         console.log(item); 
    } 
    //a 
    //b 
    //c

    imgs.forEach((item,idx)=>{
        console.log(item,idx);
    })
```

## Map映射（键值对）
js对象（Object）只能用字符串当作键(属性名)。这让它的使用有了很大的限制。所以ES6推出了一种类似于对象的数据集合：Map映射，它能让所有类型的数据作为属性名

### 常用方法
* 设置set(key, value)
* 获取get(key)
* has(key)
* delete(key)
* clear()

```js
    //创建
    let map = new Map(); 

    //设置
    map.set("S0", "张三"); 
    map.set("S1", "李四"); 
    map.set("S2", "王五");

    //获取
    map.get("s2"); //王五
```


### 遍历方法
* keys() 获取所有键
* values() 获取所有值
* entries() 获取所有键值对
* forEach()：遍历 Map 的所有成员。

* 循环遍历，配合解构赋值 
```js
    for(let [key,value] of map){
        console.log(key,value);
    }
```
PS：ES6还有一些重要的特性，在后面的课程中逐步引入 
---

## 下节预习

* 动画