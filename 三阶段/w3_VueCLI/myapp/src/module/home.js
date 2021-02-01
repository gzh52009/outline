/**
    * 模块
        > 每一个模块都是一个模块对象，export导出就是给模块对象添加属性
        * 一个模块为局部作用域，在这里声明的变量为局部变量
        * export只能跟以下内容
            * function
            * class
            * var
            * let
            * const
            * default
            * {}
 */
let username = 'laoxie'

function changeUsername(newName){
    username = newName;
}


// 导出
export let role = 'admin'; // {role}
export function login(){    // {role,login()}

}

// export后跟随花括号：给模块对象批量添加属性
export {                    // {role,login(),username,changeUsername()}
    username,
    changeUsername as changeUser,
}

let main = function(){
    console.log('main')
}
// 给模块对象添加默认属性，值为一个对象
export default main;           // {role,login(),username,sayHi(),default}

// 传统用法：
{/* <script src="./module/home.js"></script> */}

// 模块化用法：前提是模块有导出
// import 