# TypeScript教程

## 介绍
TypeScript由微软开发的自由和开源的编程语言，设计目标是开发大型应用，是js的扩展，支持所有JS特性，并增加了一些新特性

> 官网：https://www.tslang.cn

### 特点
* 静态类型：解决了开发者不小心修改了字段类型/字段个数，而导致项目出现问题的痛点
* 支持ECMAScript所有特性：始于JavaScript，归于JavaScript
* 丰富的配置选项：通过配置选项来规避一些隐藏问题和安全隐患
* 强大的工具支持：解决了IDE/编辑器无法智能提示的痛点

## 浏览器支持情况
浏览器不支持TS,需要通过编译成JS后才能在浏览器中运行

## 环境安装
> ts基于NodeJS，所以先确认安装了node环境，然后通过npm安装 typescript

```bash
    # 全局安装
    npm install -g typescript

    #安装后通过tsc命令执行
    tsc -v
```

## 使用

### 类型注解和类型检查
> 一种轻量级的为函数或变量添加约束的方式（把js中的变量动态类型变成静态类型），格式：`var 变量名:类型 = 值`
* 常见类型
    * string
    * number
    * boolean
    * null
    * undefined
    * symbol
    * enum
    * void
    * never
    * any：任意类型，相当前关闭ts的类型检查（等效于js变量）
        > 变量如果在声明的时候，未指定其类型，那么它会被自动识别为any类型
    * 字面量
        > 固定值做为变量类型
    
* 基本类型
    ```ts
        let username:string = 'laoxie';
        let age:number = 18;

        username = 123456;//在编译时报错，因为username已经确定为string字符串类型
    ```
* 类型推论
    > 根据赋值的数据自动推断变量类型
    * 未赋值：推论为any类型（不对类型进行检查）
    * 赋值：推论为值所属类型

* 联合类型
    > 表示取值可以为多种类型中的一种
    ```ts
        let age:number|string = 18;
        let age:number|string = '18';
    ```
* 类型别名
    > 使用`type`关键字给类型指定一个新的名字
    ```ts
        type ageType = number|string
        let age:ageType = 18;
    ```

* 函数类型
    * 声明式函数
        > 需要指定参数类型与返回值类型
        ```ts
            function getData(url:string,page:number):number{
                // ajax请求
                return page;
            }
            getData('/list');//报错,缺少参数
            getData('/list',1,'get')// 报错，多余参数
        ```
    * 表达式函数
        > 函数表达式除了指定变量的类型，也需要指定函数的类型
        ```ts
            let getData:(url:string,page:number)=>void = function(url:string,page:number):void{
                // ajax请求
            }

            // 使用接口指定类型
            interface IgetData{
                (url:string,page:number):void
            }
            let getData:IgetData = function(url:string,page:number):void{
                // ajax请求
            }
        ```

    * 可选参数
    ```ts
        function getData(url:string,page?:number):void{
             // ajax请求
        }
    ```
    * 默认参数
    ```ts
        function getData(url:string,page:number=1,type:string='get'):void{
             // ajax请求
        }
    ```


* 数组类型
    * 类型+[]
    * 泛型
    * 接口
    ```ts
        let arr:number[] = [10,20,30]
        let arr:Array<string> = ['laoxie','lemon','jingjing']

        interface Istate{
            name:string,
            price:number
        }
        interface IArr{
            [index:number]:Istate
        }
        let arr:Istate[] = [{name:'iphone',price:998}]
        let arr:Array<Istate> = [{name:'iphone',price:998}]
        let arr:IArr = [{name:'iphone',price:998}]
    ```

* 元组Tuple
    > 类似于数组，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
    ```ts
        let arr:[number,number,string] = [10,20,'h5']
    ```



* 类型断言：`变量 as 类型`
    > 当ts解析器不确定某个变量类型时，我们可以`as`告诉解析器它的类型

* 泛型编程
    > 在定义函数、接口或类时不明确类型，可以使用泛型。泛型即**定义时不指定具体类型**，而是使用类型变量，**调用时才指定类型**的编程方式，格式：`Array<元素类型>`

    ```ts
        function identity<T>(arg: T): T {
            return arg;
        }
        let res1 = identity(100); // T会自动推断为number
        let res2 = identity<string>("myString"); // 指定定泛型

        class Person<T>{
            name:T;
            constructor(name:T){
                this.name = name
            }
        }
        const p = new Person<string>('laoxie')
    ```


* 接口Interface
    > 接口用于描述对象的形状（确定对象的属性结构）
    * `?`: 可选属性
    * `readonly`: 只读属性
    * `any`: 任意属性
    ```ts
        interface Person {
            name: string;

            // 可选属性
            age?:number;

            // 只读属性（只能在创建的时候被赋值）
            readonly marry:boolean

            // 任意属性（一般不用）
            [propName: string]: any;

            // 方法定义
            say():void;
        }

        let user:Person = { name: "laoxie",marry:true};
    ```


* 类
    * 定义`class`
        > 与ES6一致
    * 继承`extends`
        > 与ES6一致
    * 修饰符
        * `public`：公有属性，可以在任何地方被访问到
            >默认所有的属性和方法都是 public 的
        * `private`：私有属性，只能在当前类内部访问
        * `protected`：受保护的属性，它和 private 类似，区别是它在子类中也是允许被访问的
        * `readonly`：只读属性关键字，只允许属性声明（与其他修饰符一起使用时必须写在最后）
        * `static`: 静态属性，只能通过类属性
    * 属性类型检查
        > 与接口一致
```ts
    class Student {
        // 实例属性
        fullName: string;
        // 静态属性
        static age = 18;

        // public firstName
        // 在构造函数参数中使用修饰符，等效于以上写法
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person : Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = new Student("Jane", "M.", "User");

    document.body.innerHTML = greeter(user);
```

* 命名空间namespce（了解）
    > namespce目的就是解决重名问题，可以利用同一个命名空间把代码分散到不同的文件
    
    ```ts
        namespace Validation {
            export interface StringValidator {
                isAcceptable(s: string): boolean;
            }
        }

        // 使用步骤：
        // 1. 引用文件（三个斜杠）
        /// <reference path="Validation.ts"/>

        // 2. 通过点语法调用
        Validation.StringValidator;
    ```
    > PS：以上命名空间最终会被声明为全局对象，所以在typescript中已经不推荐使用（后续版本会被移除），建议使用Module来组织代码结构

    ```js
        // module/validate.js
        export namespace Validation {
            export interface StringValidator {
                isAcceptable(s: string): boolean;
            }
        }

        // 使用步骤：
        // 1. 引入
        import {Validation} from './module/validate.js'
        // 2. 通过点语法调用
        Validation.StringValidator;
    ```

* 模块
    * CommonJS（默认）
    * ES Module
* 箭头函数语法
    > 与ES Module一致
* 可选参数以及默认参数
    > 与ES Module一致


### tsc命令

* 命令格式：`tsc <文件> <参数>`
    * 编译文件：`tsc 文件.ts`
    * 监听文件：`tsc 文件.ts -w`
* 参数：
    * --help 显示帮助信息
    * --module 载入扩展模块
    * --target 设置 ECMA 版本
    * --declaration 额外生成一个 .d.ts 扩展名的文件。
        ```bash
            # 以下命令会生成 ts-hw.d.ts、ts-hw.js 两个文件
            tsc ts-hw.ts --declaration
        ```
    * --removeComments 删除文件的注释
    * --out 编译多个文件并合并到一个输出的文件
    * --sourcemap 生成一个 sourcemap (.map) 文件。
        >sourcemap 是一个存储源代码与编译代码对应位置映射的信息文件。
    * --module noImplicitAny 在表达式和声明上有隐含的 any 类型时报错
    * --watch/-w 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。

### 配置文件tsconfig.json
> 通过 `tsc --init` 生成
```json
{
   // 编译器选项
   "compilerOptions": {
        // 与 Vue 的浏览器支持保持一致
        "target": "es5",
        // 这可以对 `this` 上的数据属性进行更严格的推断
        "strict": true,

        "module": "es2015",
        "moduleResolution": "node"
        //...
    }
}
```

* webpack加载器:ts-loader
```js
    {
        //...
        module: {
            rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        }
    }
```