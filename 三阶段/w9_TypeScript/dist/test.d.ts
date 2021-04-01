declare let username: string;
declare let age: number;
declare let isMerry: boolean;
declare let index: number | string;
declare type ns = number | string;
declare let a: ns;
declare let b: ns;
declare let c: number;
declare let d: any;
declare function add(a: number, b: number): number;
declare function show(a: number, b: number): never;
declare function request(url: string, type?: string, page?: number): void;
declare let fetchData: (url: string, type: string, page: number) => void;
declare let myage: 18;
declare let arr1: number[];
declare let arr2: string[];
declare let arr3: Array<boolean>;
declare let arr4: [string, number, boolean];
interface IUser {
    username: string;
    readonly age: number;
    gender?: string;
    sayHello(): void;
}
declare let user: IUser;
declare let student: IUser;
interface IGoods {
    _id: string;
    name: string;
    price: number;
    imgurl: string;
    salesQty: number;
    salePrice?: number;
}
declare const goodslist: Array<IGoods>;
declare function hello<T, U>(msg: T): T;
declare class Person<T> {
    name: T;
    constructor(name: T);
}
