// jquery精简版：jqlite
function jqlite(selector){
    return new Selector(selector);
}

class Selector{
    constructor(selector){
        let elements = document.querySelectorAll(selector);
        // el值为：Element,NodeList
        this.el = elements;
    }
    addClass(classname){
        this.el.forEach(function(item){
            item.classList.add(classname);
        });

        return this;
    }
    show(){
        this.el.forEach(function(item){
            item.style.display = 'block';
        });
        return this;

    }
    hide(){
        this.el.forEach(function(item){
            item.style.display = 'none';
        });
        return this;
    }
    on(type,handle,isCapture){
        this.el.forEach(function(item){
            item.addEventListener(type,handle,isCapture)
        });
        return this;
    }
}

// 添加别名
window.$ = jqlite;


$('#box').addClass('link');

$('a').addClass('link');
$('a').on('click',function(){});

// 链式调用：实例才能调用原型上的方法
// 原理：方法执行后返回实例
$('a').on('click',function(){}).addClass('link').show().hide()