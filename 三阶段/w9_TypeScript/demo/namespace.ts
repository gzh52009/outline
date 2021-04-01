// 五、命名空间namespace
// 为了解决命名冲突问题
// 命名空间的作用域是独立的，意味着你如果想访问内部的变量，必须要导出

// js解决命名冲突的做法
// const user1 = { 
//     age:10
// }
// const user2 = { 
//     age:20
// }
// user1.age
// user2.age

export namespace user1{
    export const age:number = 10;
    export interface IGoods{
        name:string;
        price:number
    }

}

export namespace user2 {
    export const age:number = 20;
}
