// 这是一个模块，这里的代码为局部作用域，不会影响其他的文件

// 引入内置模块
const fs = require('fs');

// 引入自定义模块（一定要加路径）
const user = require('./user')
const cart = require('./cart')

// 引入第三方模块
const uglify = require('gulp-uglify')

let className = 'H5-2009';

console.log(user)