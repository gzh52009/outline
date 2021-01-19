# NodeJS

## day1-2
* 环境
    * nodejs: 10.16.0 / 14.15.4
    * npm: nodejs package management
    * 环境变量
* 模块化开发
    > 模块的作用域为局部作用域
    * 优点
        * 分工
        * 维护
        * 复用
    * 规范
        * commonJS      nodeJS支持的规范（后端）
        * ESModule      ES6模块化（前端）
        * AMD           require.js（前端）
        * CMD           sea.js（前端）
* javascript
    * 前端javascript = ECMAScript + BOM + DOM
        > 在浏览器中运行
    * 后端NodeJS: ECMAScript + 后端概念
        > 在命令行中运行，没有BOM与DOM的概念
* nodeJS多版本共存工具：nvm
    * nvm list  查看已安装nodeJS的版本
    * nvm use   切换nodeJS版本
    * nvm install   安装nodeJS版本
    * nvm uninstall 卸载nodeJS版本
* 运行nodeJS代码
    * REPL：交互式解释器，一般用于测试代码
    * 运行文件

* commonJS规范
    > nodeJS把一个文件当作一个模块，都为局部作用域，如果想在一个模块中使用另外一个模块的数据，则需要导入导出
    * 导出：
        * exports
        * module.exports    （推荐）
    * 导入：require()
        > 引入模块会自动缓存

* commonJS模块分类
    * 自定义模块
    * 内置模块：nodejs自带的模块，可以直接引入，不需要加路径
    * 第三方模块: 需要npm安装后才能使用的模块
        1. 安装
        2. 引入: 与原生模块一致