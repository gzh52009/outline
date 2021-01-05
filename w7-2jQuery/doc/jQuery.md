[TOC]

# jQuery

## 了解jQuery
JQuery是一个兼容多浏览器的javascript类库，核心理念是write less,do more(写得更少,做得更多)。是一个快速的简洁的javascript框架，可以简化查询DOM对象、处理事件、制作动画、处理Ajax交互过程。在2006年1月由美国人John Resig在纽约的barcamp发布。

![John Resig](img/zz.jpg "jQuery作者John Resig")
作者：John Resig
官方网站：http://jquery.com/

### jQuery版本
* 1.x.x
    - 兼容低版本浏览器IE8-
    - 代码过于庞杂，性能不高
    - 最新版本1.12
* 2.x.x
    - 已经不支持IE低版本浏览器IE8-
    - 最新版本2.2
* 3.x.x
    - 3.0 版本是从 2.0 版本分支出来的，但由于改动过大，因此更新了主版本号
    - 不支持IE低版本浏览器
    - 性能大幅度提高（推荐使用）

### 下载与安装
* 官网下载: http://jquery.com/download/
* CDN
    - https://code.jquery.com/jquery-3.0.0.js
    - https://code.jquery.com/jquery-3.0.0.min.js

### jQuery实现原理
* jQuery构造函数
* jQuery实例对象
    >jquery对象为jQuery实例，只能用jquery原型的方法
* jQuery的别名：$
    ```js
        jQuery('#box');//得到jquery对象（实例）
        // 也可以写成
        $('#box')
    ```
* jQuery实例属性
    - length: 返回jQuery对象中匹配元素的个数
    - jquery: 当前jquery类库版本号（一般用于判断是否jquery对象）
    - 下标（索引）: DOM节点
* 延迟代码执行：jQuery(document).ready(fn)
    - 此方法传入一个匿名函数;
    - 页面DOM渲染完成时执行，用来替代`window.onload`;
    - 简写方式:`jQuery(function($){})`;
* jquery操作节点只需两步
    1. 选择元素
    2. 操作元素


## 选择器
> 选择页面中的元素，得到jQuery实例对象

* ID选择器`$("#save")`
* 类选择器`$(".class")`
* 标签选择器`$("div")`
* 复合选择器 `$("div,span,p.myClass")`
* 属性选择器`$('[id=box]')`
    - `$('li[data-index]')`:获取有data-index属性的所有元素
    - `$('li[data-index!=10]')`:data-index属性不等于10的元素,css目前未支持
    - `$('li[data-index^=10]')`:data-index属性以10开头的元素
    - `$('li[data-index$=10]')`:data-index属性以10结尾的元素
    - `$('li[data-index*=10]')`:data-index属性包含10的元素
* 表单选择器`$(':input')`
    - `:radio`      匹配所有单选按钮
    - `:checkbox`   匹配所有复选按钮
    - `:selected`   获取已选择的option元素
    - `:checked`    匹配所有被选中的元素(复选框、单选框等，select中的option)
    - `:submit`     匹配所有提交按钮
    - `:reset`      匹配所有重置按钮
    - `:button`     匹配所有按钮
    - `:text`       匹配所有的单行文本框
    - `:password`   匹配所有密码框

* 可见性
    * `:hidden`     匹配所有不可见元素(display:none)，或者type为hidden的元素
    * `:visible`    匹配所有可见元素
    > 以上两个选择器配合is()方法通常用于判断，返回布尔值
    ```js
        if(box.is(':visible')){
            box.css('display','none');
        }
    ```

### 常用操作
* **jquery对象**与原生对象的转换
    - jquery->原生: 
        + `get(0)`/`[0]`获取集合中第一个DOM节点
        + `get()`不传参得到集合中所有的dom节点
    - 原生->jquery: `$(dom)`
* 判断是否为jquery对象
    ```js
        var box = $('#box');
        if(box.jquery){

        }
    ```
* 判断一个jquery对象是否存在(是否能获取到元素)
    - length
    - 转成原生对象再判断


### 筛选
>利用选择器得到得结果不一定是我们想要得最终结果，有时需要进一步筛选

#### 选择器筛选
* `:odd`/`:even`,`:gt(n)`/`:lt(n)` 筛选范围（索引支持负数）
* `:contains(奥巴马)`   筛选出包含“奥巴马”这三个字的元素

#### 筛选方法（推荐）
* `first()`/`last()`: 获取集合中第一个/最后一个元素
* `eq(index|-index)`: 获取第N个元素,n支持负数（表示从后面查找）
* `filter(expr|obj|ele|fn)`: 筛选出与指定表达式匹配的元素集合。这个方法用于缩小匹配* 的范围。用逗号分隔多个表达式
* `map(fn)`: 将一组元素转换成其他数组（不论是否是元素数组）
* `slice(start,[end])`: 选取一个从start到end(不包括end)匹配的子集
* `has(expr|ele)`: 保留包含特定后代的元素，去掉那些不含有指定后代的元素。
* `not(expr|ele|fn)`: 删除与指定表达式匹配的元素

### 查找
>利用当前元素去查找其他元素

* 查找子元素
    - `find(expr|obj|ele)`: 查找后代元素
    - `children([expr])`: 取得匹配元素的所有子元素。(原生js:children)

* 查找父级元素
    - `parent([expr])`: 获取父元素
    - `parents([expr])`: 取得所有父级元素
    - `closest(expr|obj|ele)`: 从元素本身开始，逐级向上级元素匹配，并返回最先匹配的元素
    - `offsetParent()`: 返回第一个有定位属性(absolute,relative,fixed)* 的父元素,如果没有定位父级，则返回html元素

* 查找兄弟元素
    - `next([expr])`: 返回下一个同辈元素 ==> nextElementSibling
    - `prev([expr])`: 获取前一个同辈元素 ==> previousElementSibling
    - `nextAll([expr])`: 获取当前元素之后所有的同辈元素 
    - `prevAll([expr])`:  获取当前元素之前所有的同辈元素
    - `siblings([expr])`:  获取当前元素的所有兄弟元素（除自身以外的所有兄弟元素 = `prevAll()` + `nextAll()`）

## jQuery动画
### 基本动画效果
* 显示隐藏：`show()`/`hide()`
    - `hide(duration)`通过改变元素的高度、宽度、和不透明度，直到这三个属性值到0
    - `show(duration)`通过改变元素的高度、宽度、和不透明度，直至内容完全可见

* 滑动（通过改变高度）
    - `slideDown([speed,callback])`：
        1. 显示元素
        2. 不断改变高度，直到样式内设定的值
    - `slideUp([speed,callback])`：
        1. 不断改变高度，直到0
        2. 隐藏元素
    - `slideToggle([speed,callback])`
        当元素隐藏时调用slideDown()，当元素显示时调用slideUp()

* 淡入淡出（通过改变不透明度）
    - `fadeIn([speed,callback])`:
        1. 显示元素
        2. 不断改变透明度直到1
    - `fadeOut([speed,callback])`:
        1. 不断改变透明度直到0
        2. 隐藏元素
    - `fadeToggle([speed,callback])`

    - `fadeTo([[speed],opacity,[fn]])`  不断改变透明度opacity，直到设定的值，并在动画完成后可选地触发一个回调函数。

>PS：jQuery动画由三种预设速度slow,normal,fast（600，400，200）

### 自定义动画
* `animate (params,[speed],[fn])`


* :animated
获取正在执行动画的元素，一般与is()方法配合使用，用于判断元素是否处于动画状态

### 动画队列
* 一个元素上的动画：
    - 当animate中存在多个属性时，动画同时发生
    - 当同一个元素链式调用animate时，动画是按顺序发生(队列)

* 不同元素上的动画：
    - 默认情况下，动画同时发生
    - 回调函数内的动画等到当前动画执行完后才接着执行

* `stop([clearQueue],[jumpToEnd])`
    不加参数：停止当前元素所有《正在运行》的动画。
    - clearQueue:值为true时，清除队列
    - jumpToEnd:值为true时，跳到当前动画的最后一帧
    

* `delay(duration)`
    设置一个延时来推迟执行队列中之后的动画。
    - duration:延迟的时间

---

**【案例】**
1. 手风琴效果
2. 自动轮播图效果

---


## DOM节点操作

### 增删改
* 创建jquery对象
```js
    $('<div/>');
    $('<div>生成一个div</div>');
```

* 元素添加
    - 内部添加（添加为子元素）
        + `append(content|obj|ele|fn)`: 在元素内部最后面追加内容（后置）
        + `prepend()`: 向元素内部增加内容（前置）
        > appendTo,prependTo

    - 外部插入内容（添加为兄弟元素）
        + `after()`: 在元素后面插入内容
        + `before()`: 在元素前面插入内容
        > insertAfter,insertBefore

    > 如果页面上已经存在了要添加的元素，append,prepend,after,before会把元素移动到页面相应的位置

* 元素删除
    - `remove()`;   删除元素, 虽然元素从文档中删除了，但js内部依然保留对它引用

* 元素复制
    - `clone([Event[,deepEvent]])`
        + Event：（true 或 false）是否复制元素的行为，默认为false
        + deepEvent: （true 或 false）是否复制子元素的行为，默认为Even的值


### 盒模型属性
* `offset()`:获取匹配元素相对于根元素的偏移量
返回一个对象，包含当前元素的top,left值

* `position()`:获取匹配元素相对(有定位属性)父元素的偏移量，如果没有定位父级，则相对于根元素(html)，返回一个对象，包含当前元素的top,left值。
* `width(v)` = width;    //取值/赋值,当传入v时，相当于css('width',v);
* `innerWidth()` = width + padding; <==> clientWidth
* `outerWidth()` = width + padding + border; <==> offsetWidth
* `outerWidth(true)` = width + padding + border + margin;

## 事件
### 常用事件方法
* 鼠标事件
    - `click([[data],fn])`   点击时触发 click = mousedown + mouseup
    - `dblclick([[data],fn])`  双击事件 dblclick = 2*click
    - `mousedown([[data],fn])`
    - `mouseup([[data],fn])`
    - `mousemove([[data],fn])`
    - `mouseout([[data],fn])`
    - `mouseover([[data],fn])`
    - `mouseenter([[data],fn])`  事件不会冒泡
    - `mouseleave([[data],fn])`  事件不会冒泡

* 键盘事件
    - `keydown([[data],fn])`  键盘按下时触发
    - `keypress([[data],fn])` 字符按键
    - `keyup([[data],fn])`  键盘弹起时触发

* 表单事件
    - `blur([[data],fn])`   失去焦点时触发
    - `focus([[data],fn])`   获得焦点
    - `change([[data],fn])`  值改变并失去焦点时触发
    - `submit([[data],fn])`

* 其他事件
    - `resize([[data],fn])`  元素大小改变时触发
    - `scroll([[data],fn])`  滚动时触发

### jquery事件绑定与移除
* `on(type,[selector],fn)`
    * selector: 把本来绑定给selector的事件委托给它的父级
    * 事件命名空间, 自定义事件（对事件加以细分）
    `格式：事件类型.自定名字`
    * 一次性绑定多个事件，事件之间以空格隔开

    * 支持自定义事件的绑定
    `$(ele).on('laowang',function(){})`
    触发自定义事件：$(ele).trigger('laowang');

* `off()`: 清除绑定事件
    * `off('click')` 清除当前元素的点击事件
    * `off()` 清除当前元素所有事件
    * `off('click mouseover')` 一次性清除多个事件，事件之间以空格隔开
    * `off('click.output')` 清除命名空间事件

### 其他事件方法
* `hover(enter[,leave])`
    - enter:鼠标移入时执行
    - leave:鼠标移出时执行

    > hover方法内部使用mouseenter + mouseleave来实现效果

* `trigger(type)`: 手动触发事件（即使事件没有发生，也能执行事件处理函数）
* `triggerHandler(type)`: 这个方法会触发指定的事件类型上所有绑定的处理函数。但不会执行浏览器默认行为，也不会产生事件冒泡

* 阻止浏览器默认行为 `event.preventDefault()`
* 阻止事件传播: `event.stopPropagation()`
* 两者一起阻止： return false; 



## ajax
### jQuery的ajax方法
* `$.ajax(settings)`
    - type:请求类型，默认GET
    - url:数据请求地址（API地址）
    - data:发送到服务器的数据对象，格式：{Key:value}。
    - success:请求成功时回调函数。
    - dataType:设定返回数据的格式，json, jsonp, text(默认), html, xml, script
    - async：是否为异步请求，默认true

* `$.get(url,[data],[fn],[dataType])` type:'get'
* `$.post(url,[data],[fn],[dataType])` type:'post'
* `$.getJSON(url,[data],[fn])` type:'get', dataType:'json'
* `$.getScript(url,[callback])` type:'get', dataType:'script'
* `load(url,[data],[callback])` 载入远程 HTML 文件代码并插入页面中。


**[案例]**

* 加载html文件
* 滚动加载（懒加载）

---

## 插件
### 了解插件
* 什么是插件
插件(Plugin)也称为jQuery的扩展。以jQuery核心代码为基础编写的符合一定规范的应用程序。通过js文件的方式引用。

* 插件分类
UI类、表单及验证类、输入类、特效类、Ajax类、滑动类、图形图像类、导航类、综合工具类、动画类等等

* 常用插件： 
    - jqueryUI //官方插件，功能多且全面，官网：www.jqueryui.com
    - jquery.validation //表单验证插件,官网：https://jqueryvalidation.org/
    - jquery.easyUI //是一组基于jQuery的UI插件集合,Demo：http://www.jeasyui.net/
    - bootstrap  //是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目，官网：http://v3.bootcss.com/
    - highcharts 
        - https://www.hcharts.cn

### 使用插件
* 引入插件的步骤
    1. 引入jquery.js文件，必须在所有插件之前引入
    2. 引入插件
    3. 引入插件相关文件，比如样式、语言包等

[案例]jqueryUI
[案例]jquery.validation

### 编写jquery插件
* 插件形式分为3类：
    * 封装对象方法插件，扩展原型对象方法
    * 封装全局函数插件（静态方法），如$.each,$.map,$.makeArray...
    * 选择器插件(类似于.find())

* 自定义插件的规范（降低各种插件之间的冲突，减少错误机率）
    * 命名规范：jquery.插件名.js
    * 插件中的this应该指向jQuery实例
    * 使用this.each()迭代元素,为了实现多个调用
    * 插件内部必须返回jQuery实例(this)，便于链式调用
    * 所有的对象法附加在jQuery.fn对象(jQuery.prototype)上面，所有静态附加在jQuery上
    * 所有的方法或插件必须用分号结尾，避免出问题,为了保证插件的安全性，也可以在插件开始的地方加分号
    * 避免插件内部的$冲突，请传递jQuery($并不是总等于jQuery，另外其他js框架也可能使用$)

```javascript
    //最终格式：
    ;(function($){
        $.fn.插件名=function(){
            return this.each(function(){

            })
        }
    })(jQuery);
```

### 编写插件常用方法
* $.extend([d],target,obj1,obj2,...,[objN])  //扩展对象或jQuery对象本身。用来扩展jQuery全局函数
    - 用obj1-objN对象来扩展target对象
    - 只有一个参数时，用来扩展jQuery全局函数：$.extend({'hobby':'撸串'})
        $.ajax,$.map,$.each
    - d:是否深拷贝,布尔类型（true,false）

* $.fn.extend()  //扩展 jQuery元素集合提供新的方法（扩展jQuery原型对象，通常用来制作插件）。

---

**[作业]**

* 编写轮播图插件，要求如下：
    - 是否自动轮播
    - 是否显示小图
    - 是否显示左右按钮
    - 可设置轮播间隔时间
    - 轮播类型: fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
    - 默认显示第几张图片

---

## 常用jQuery原型对象的方法
>写在jQuery原型对象中的方法，通过jQuery实例调用

* css(attr[,val]): 获取/改变元素style属性（内联样式） 
    - 取值：css(attr),css(['color','text-align']) <==> getComputedStyle[attr]
    - 赋值：css(attr,val),css({attr:val});
* val(v): 获取/设置匹配表单元素的值（等同于原生js中的value属性）
    * 取值：
    `input.val()`
    * 赋值：
    `input.val(v)`
        - v:字符串
        - v:数组（一般用于单选/复选框的勾选）
        - v:函数function(idx,val){ return 值}//函数内部一定要返回值

* html(): （等同于原生js中的innerHTML）
    取值div.html()：取得第一个匹配元素的html内容
    赋值div.html(':')：设置匹配元素的内容
* text(): 取得所有匹配元素的文本内容。
* addClass()/removeClass(): 添加/删除类,支持多个类同时添加或删除
    - toggleClass(): 如果存在（不存在）就删除（添加）类。
    - hasClass('con'): 判断当前元素是否包含con这个类，返回布尔值（不支持多个类进行判断）
* eq(n) 获取第N个jquery对象（元素）,n支持负数（表示从后面查找）
* index():获取当前元素在同辈元素中的索引值
    ```js
        $(this).index();
    ```
* 显示/隐藏 
    - show()：显示元素
    - hide()：隐藏元素
        - 带参数：同时改变width,height,opacity的动画
* is(expr|obj|ele|fn) 根据选择器、DOM元素或 jQuery 对象来检测匹配元素集合，其中如果有一个元素符合这个给定的选择器表达式就返回true。如果没有元素符合，或者表达式无效，都返回false。
* attr(name[,val]) 设置/获取html标签属性
* prop(attr[,val]) 获取/设置DOM节点属性（一般修改布尔类型属性）
    - 获取：获取在匹配的元素集中的第一个元素的属性值。
    - 赋值：给集合中所有元素属性赋值
        + val为函数
        ```
        $(':checkbox').prop('checked',function(idx,oldVal){
            return !oldVal;
        }
        ```
* each(function(idx,ele){}) //用于遍历jquery对象
    - return true;// 跳过当前循环，进入下一个循环（等效原生js中得continue）
    - return false;// 退出整个each循环（等效原生js中得break）


**jquery大部分方法的共性：**

* 无参数时为取值，带参数时为赋值
* 取值：取得第一个匹配元素的值
* 赋值：设置所有匹配元素的值
* 隐式迭代（隐式遍历）：看不见的遍历，大部分的jquery方法都支持隐式迭代

## 常用jQuery静态方法
* $.each(arr|obj,callback)：通用遍历方法，用于遍历对象和数组。
    - callback(idx,item)
* $.map(arr|obj,callback)：根据现有数组生成一个新的数组，新数组的元素为callback内return的值
    - callback(item,idx)
* $.type(n)：检测参数n的数据类型
* $.makeArray(obj) //将类数组对象转换为数组。
* $.parseJSON(json) //接受一个JSON字符串，返回解析后的对象。类似原生js中的JSON.parse
* $.inArray(value,array,[fromIndex]) //确定value在数组array中的位置，从0开始计数(如果没有找到则返回 -1 )，一般用于判断数组中是否包含某一字符。
* serialize()/serializeArray() : 只能在form表单中使用，并且表单元素必须有name属性

---

**[练习]**

1. 无限级菜单
2. 名单过滤
3. 选项卡
4. 楼梯
5. jquery实现表单验证
6. 根据数据生成表单
7. 购买商品飞入购物车效果
8. 水平手风琴效果
9. 模拟QQ发送消息
10. 自动居中弹窗
11. 编写放大镜插件


**[扩展]**

* 可编辑表格
    - 上下左右方向键定位单元格
    - 回车编辑单元格
    - 失去焦点保存数据
    - 复制行
    - 删除行

