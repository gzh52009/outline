"use strict";
// 四、类
class User {
    constructor(name, gender = '男') {
        this.age = 18;
        // protected：受保护的属性，它和 private 类似，区别是它在子类中也是允许被访问的
        this.score = 206;
        this.name = name;
        this.gender = gender;
    }
    sayHello() {
        return `Hello, my name is ${this.name}，${this.gender}`;
    }
}
// static: 静态属性/方法
User.type = 'user';
const lx = new User('laoxie');
console.log('lx=', lx);
lx.age; // 18
// lx.gender; // 报错：私有属性只能在类中访问
User.type;
class Student extends User {
    constructor(name, gender) {
        super(name, gender);
    }
    getScore() {
        return this.score;
    }
}
console.log('静态属性=', Student.type); // 静态属性会继承到子类
const xiaoxie = new Student('xiaoxie');
// xiaoxie.age = 35; // 报错：只读属性不能被修改
console.log('xiaoxie', xiaoxie);
// xiaoxie.gender; // 报错：父类User的私有属性不能在外部访问
// xiaoxie.score;// 报错：父类受保护的属性，只能在当前类与子类中访问
console.log('getScore()=', xiaoxie.getScore());
