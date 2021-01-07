/*
    模块化开发：
        * 规范
            * commonJS      NodeJS
        * 优点
            * 分工
            * 维护
            * 复用
        * 使用
            * 定义与导出模块：导出为了在别的地方使用
                ```js
                    // home.js
                    module.exports
                ```
            * 导入模块：引入为了使用别人写好的模块
                ```js
                    require('./home')
                ```
        * 模块分类
            * 内置模块：nodeJS自带的模块
                * fs
            * 自定义模块：自己写的模块
            * 第三方模块：别人写的模块
                1. 安装
                2. 引入
    * gulpfile.js就是一个nodeJS模块
*/

// 引入gulp模块
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// 创建gulp任务
// gulp的构建是基于任务的，每一个操作都需要一个任务来执行
// 格式：gulp.task(name,taskFunction)
// gulp.task('default', function() {
//     // 在命令行运行gulp命令会执行这里的代码
//     console.log('hello gulp');
// });

// 任务：压缩js代码
// 依赖：gulp-uglify
gulp.task('compress',function(){
    // 利用gulp.src()匹配要压缩的文件，返回一个**文件流**
    return gulp.src(['src/lib/*.js'])

    // 压缩
    .pipe(uglify())

    // 改名
    .pipe(rename({
        suffix: ".min",
    }))

    .pipe(gulp.dest('./dist'))
});