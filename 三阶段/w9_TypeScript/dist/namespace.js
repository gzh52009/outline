"use strict";
// 五、命名空间namespace
// 为了解决命名冲突问题
// 命名空间的作用域是独立的，意味着你如果想访问内部的变量，必须要导出
Object.defineProperty(exports, "__esModule", { value: true });
exports.user2 = exports.user1 = void 0;
// js解决命名冲突的做法
// const user1 = { 
//     age:10
// }
// const user2 = { 
//     age:20
// }
// user1.age
// user2.age
var user1;
(function (user1) {
    user1.age = 10;
})(user1 = exports.user1 || (exports.user1 = {}));
var user2;
(function (user2) {
    user2.age = 20;
})(user2 = exports.user2 || (exports.user2 = {}));
