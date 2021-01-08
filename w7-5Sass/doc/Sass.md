[TOC]

# Sass
SASS是一个成熟、稳定、强大的 CSS 扩展语言解析器，提供变量、嵌套、混合、继承等特性，大大节省了设计者的时间，使得CSS的开发变得简单和可维护

## 语法
* 注释: sass有两种注释方式（与js相同）
    - 多行注释/\* \*/
    - 单行注释//
    ```scss
        body {
            color: #333; // 这种注释内容不会出现在生成的css文件中
            padding: 0; /* 这种注释内容会出现在生成的css文件中 */
        }
    ```

* 变量
    > sass的变量必须是`$`开头，后面紧跟变量名，而变量值和变量名之间就需要使用冒号(:)分隔开（就像CSS属性设置一样）。
    - 全局变量与局部变量
        > 定义在任何选择器之外的变量被认为是全局变量，定义在选择器内的变量称之为局部变量。

        要在局部修改全局变量，需要添加`!global`（sass 3.4版本后可用）
        ```scss
            $color: #333; // 全局变量
            .box{
                $color:#fff !global;// 局部修改全局变量

            }
        ```

    - 默认变量：在值后面加上`!default`。
        > 覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可（一般用于文件引用）:
        ```scss
            $fontSize:16; // 覆盖
            $fontSize:12 !default;//此行代码是另一个文件中的代码（查看@import）
        ```
    - 变量特殊用法
        > 一般我们定义的变量都为属性值，可直接使用，但是如果变量作为属性或在某些特殊情况下等则必须要以`#{$variables}`形式使用
        ```scss
            $borderDirection:top;
            //应用于class和属性
            .border-#{$borderDirection}{
                border-#{$borderDirection}:1px solid #ccc;
            }
        ```
    - 多值变量，
        > 多值变量分为`list`类型和`map`类型，简单来说list类型有点像js中的数组，而map类型有点像js中的对象。
        ```scss
            //list类型
            $pd: 5px 10px 20px 30px;
            //使用
            .content{padding:$pd;}
            .btop{border-top:nth($pd,1);}
            //map类型
            $headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
            //使用
            h1{font-size:map-get($headings,h1)}
        ```
    
* 嵌套
    * css中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个ID
        ```css
            #content article h1 { color: #333 }
            #content article p { margin-bottom: 1.4em }
            #content aside { background-color: #EEE }
        ```
    * sass写法：
        ```scss
            #content {
                article {
                    h1 { color: #333 }
                    p { margin-bottom: 1.4em }
                }
                aside { background-color: #EEE }
            }
        ```
    - 在嵌套中用`&`表示父元素选择器


* 混合器(了解)
    >变量可以实现简单样式的重用（如color,width等），但是当你的样式变得越来越复杂，你需要大段大段的重用样式的代码，可以通过sass的混合器实现重用

    sass中使用`@mixin`声明混合，通过@include来调用

    + 无参数mixin
    + 有参数mixin：参数名以$符号开始
    + 多个参数mixin：多个参数以逗号分开
    + @content：多用于媒体查询的封装

    ```scss
        @mixin max-screen($res){
          @media only screen and ( max-width: $res )
          {
            @content;
          }
        }
        // 使用
        @include max-screen(480px) {
          body { color: red }
        }
    ```

    >PS：`@mixin`通过`@include`调用后解析出来的样式是以拷贝形式存在的，而下面的继承则是以联合声明的方式存在的，所以从3.2.0版本以后，建议传递参数的用@mixin，而非传递参数类的使用下面的继承%。

* 继承
    > 使用选择器的继承，要使用关键词`@extend`
    - 继承一般样式
        ```scss
            h1{font-size:20px}
            @extend h1;
        ```
    - 占位选择器%
        ```scss
            //占位符编译后不存在css样式中
            %ir{
            color: transparent;
            text-shadow: none;
            background-color: transparent;
            border: 0;
            }
            @extend %ir;
        ```
* 函数
    > Sass中的数字函数提要针对数字方面提供一系列的函数功能：
    - 常用函数：
        + percentage($value)：将一个不带单位的数转换成百分比值；
        + round($value)：将数值四舍五入，转换成一个最接近的整数；
        + ceil($value)：将大于自己的小数转换成下一位整数；
        + floor($value)：将一个数去除他的小数部分；
        + abs($value)：返回一个数的绝对值；
        + min($numbers…)：找出几个数值之间的最小值；
        + max($numbers…)：找出几个数值之间的最大值。
        + lighten($color,$percent) $color颜色值，$percent百分比
        + darken($color,$num)  $num:0-100 
    - 自定义函数
        > 格式：@fuction 函数名
        ```scss
            $oneWidth: 10px;  
            $twoWidth: 40px;  
            
            @function widthFn($n) {  
                @return $n * $twoWidth + ($n - 1) * $oneWidth;  
            }  
            
            .leng {   
                width: widthFn($n : 5);  
            } 
        ```

* 运算
    > sass具有运算的特性，可以对数值型的Value(如：数字、颜色、变量等)进行加减乘除四则运算 (请注意运算符前后请留一个空格，不然会出错)。

* 条件判断及循环
    - @if判断
        > @if可一个条件单独使用，也可以和@else结合多条件使用
        ```scss
            @if $type == ocean {
                color: blue;
            } @else if $type == matador {
                color: red;
            } @else {
                color: black;
            }
        ```
    - for循环
        ```scss
            @for $var from <start> through <end>//（包含end值）
            @for $var from <start> to <end>//（不包含en值）
        ```

* 导入
    > sass中导入其他sass文件，最后编译为一个css文件，优于纯css的@import
    ```scss
        @import 'reset';
    ```


## 编译
* gulp-sass
    - 参数outputStyle：
        + nested(默认）
        + expanded：展开
        + compact：单行
        + compressed：压缩

    ```js
        gulp.task('sass', function () {
            return gulp.src('./sass/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
        });

        //文件监听（文件有修改自动编译）
        gulp.task('sassWatch',function(){
            gulp.watch('./src/sass/*.scss',['sass']);
        });

    ```
    >文件名以`_`开头的sass文件不会被编译成css文件

---

**[练习]**

1. 使用Sass改造项目中的CSS文件