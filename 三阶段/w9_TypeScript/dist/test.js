"use strict";
// 一、基本类型
// 1. 类型校验
let username = 'laoxie';
let age = 18;
let isMerry = true;
// age = '20'; // 报错
// 2. 联合类型
let index = 0;
index = '1';
let a = 0;
let b = 0;
// 4. 类型推论: 根据数据推断变量类型
let c = 100;
c = 200;
// 在ts中，声明一个变量没有指定类型，则默认为any（关闭类型检查，等效于js）
let d;
d = '100';
d = 200;
// 4. 函数类型（声明式+赋值式）
function add(a, b) {
    return a + b;
}
add(10, 20);
// add('hello','ts'); // 报错
function show(a, b) {
    console.log(a + b);
    // throw new Error('')
    while (true) {
    }
}
// 可选参数与默认值
// 可选参数一般放在最后
function request(url, type = 'get', page) {
}
request('/api/class', 'get', 1);
request('/api/class', 'post');
request('/api/class');
// 赋值式
let fetchData = function (url, type, page) {
};
// 字面量作为变量类型
let myage = 18; // 声明后myage不可修改为其他值
// 二、引用类型
// 1. 数组类型
let arr1 = [10, 20, 30];
let arr2 = ['laoxie', 'jingjing', 'xiaoxie'];
let arr3 = [true, false]; // 泛型
// 2. 元组Tuple：一个固定元素属性与类型的数组
let arr4 = ['laoxie', 18, true];
let user = {
    username: 'xiaoxie',
    age: 35,
    gender: 'female',
    sayHello() {
        console.log('hello avbody');
    }
};
let student = {
    username: 'tiantian',
    age: 17,
    // class:'h52009',
    // xx:12,
    sayHello() {
    }
};
const goodslist = [{
        _id: '1',
        name: 'goods1',
        price: 998,
        salePrice: 9.8,
        imgurl: 'img/goods1.jpg',
        salesQty: 100
    }, {
        _id: '2',
        name: 'goods2',
        price: 1998,
        imgurl: 'img/goods2.jpg',
        salesQty: 20
    }];
console.log(goodslist);
// 三、泛型编程
// 用变量来表示类型，类型在函数调用时才能确定
function hello(msg) {
    return msg;
}
// 泛型推论
hello('jingjing'); // T被推论成string
hello(100); // T被推论成number
// 指定泛型
hello(true);
class Person {
    constructor(name) {
        this.name = name;
    }
}
new Person('laoxie');
new Person(100);
