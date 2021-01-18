
// 引入gulp模块
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const BrowserSync = require('browser-sync');
const htmlmin = require('gulp-htmlmin');

// 创建gulp任务
// gulp的构建是基于任务的，每一个操作都需要一个任务来执行
// 格式：gulp.task(name,taskFunction)
// gulp.task('default', function() {
//     // 在命令行运行gulp命令会执行这里的代码
//     console.log('hello gulp');
// });

// 任务1：压缩js代码
// 依赖：gulp-uglify
gulp.task('compress', function () {
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

// 任务2：编译ES6代码为ES5代码
// 依赖：gulp-babel, @babel/core, @babel/preset-env
const compileJs = () => {
    return gulp.src('src/**/*.js')
        // 合并
        .pipe(concat('main.js'))
        // Es6->ES5
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('./dist/js'))

        // 压缩
        .pipe(uglify())

        // 改名
        .pipe(rename({
            suffix: ".min",
        }))

        .pipe(gulp.dest('./dist/js'))
}
gulp.task('compileJs', compileJs);



// 修改sass编译器（默认为：node-sass）;
// sass.compiler = requier('sass');

// 编译Sass
const compileSass = function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed', //nested(默认）,expanded：展开,compact：单行,compressed：压缩
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(gulp.dest('./dist/css'))
}
gulp.task('compileSass', compileSass);


//html压缩
const compileHtml = () => {
    var opt = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="checked"/> ==> <input checked />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };

    //带参数使用
    return gulp.src('src/**/*.html')
        .pipe(htmlmin(opt))
        .pipe(gulp.dest('./dist'));
}
gulp.task('compileHtml', compileHtml);


// 开发环境：监听sass，并实现自动编译
gulp.task('default', () => { // gulp
    // 启动自动同步服务器
    BrowserSync({
        // server:'./src/',

        // 代理：利用browserSync服务器代理php服务器
        proxy: 'http://localhost:2009',

        // 端口
        port: 10000,

        // 监听文件：当监听的文件有修改时，自动刷新页面
        files: ['./src/**/*.html', './src/css/*.css', './src/**/*.js', , './src/api/*.php']
    });

    gulp.watch('./src/**/*.scss', compileSass);
    // gulp.watch('./src/**/*.js',compileSass)
});

// 生产环境：编译
gulp.task('build', () => {
    compileSass()
    compileJs();
    compileHtml();
})