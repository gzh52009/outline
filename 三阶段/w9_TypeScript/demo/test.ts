// 一、基本类型
// 1. 类型校验
let username: string = 'laoxie';
let age: number = 18;
let isMerry: boolean = true;

// age = '20'; // 报错

// 2. 联合类型
let index: number | string = 0;


index = '1';

// 3. 类型别名
type ns = number | string
let a: ns = 0;
let b: ns = 0;

// 4. 类型推论: 根据数据推断变量类型
let c = 100;
c = 200;

// 在ts中，声明一个变量没有指定类型，则默认为any（关闭类型检查，等效于js）
let d;
d = '100';
d = 200;

// 4. 函数类型（声明式+赋值式）
function add(a: number, b: number): number {
    return a + b;
}
add(10, 20);
// add('hello','ts'); // 报错

function show(a: number, b: number): never {
    console.log(a + b);
    // throw new Error('')
    while (true) {

    }
}

// 可选参数与默认值
// 可选参数一般放在最后
function request(url: string, type: string = 'get', page?: number) {

}

request('/api/class', 'get', 1);
request('/api/class', 'post');
request('/api/class');

// 赋值式
let fetchData: (url: string, type: string, page: number) => void = function (url: string, type: string, page: number): void {

}

// 字面量作为变量类型
let myage: 18 = 18; // 声明后myage不可修改为其他值


// 二、引用类型
// 1. 数组类型
let arr1: number[] = [10, 20, 30];
let arr2: string[] = ['laoxie', 'jingjing', 'xiaoxie'];
let arr3: Array<boolean> = [true, false]; // 泛型

// 2. 元组Tuple：一个固定元素属性与类型的数组
let arr4: [string, number, boolean] = ['laoxie', 18, true]

// 2. 对象类型：接口Interface
interface IUser {
    username: string;
    readonly age: number;
    // 可选属性
    gender?: string;

    // 任意属性
    // [key:string]:any;

    // sayHello:()=>void;
    sayHello(): void;
}

let user: IUser = {
    username: 'xiaoxie',
    age: 35,
    gender: 'female',
    sayHello() {
        console.log('hello avbody')
    }
}
let student: IUser = {
    username: 'tiantian',
    age: 17,
    // class:'h52009',
    // xx:12,
    sayHello() {

    }
}

// user.age = 15;// 报错：只读属性不能修改

// 数组与对象的结合
interface IGoods {
    _id: string;
    name: string;
    price: number;
    imgurl: string;
    salesQty: number;
    salePrice?: number;
}
const goodslist: Array<IGoods> = [{
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
