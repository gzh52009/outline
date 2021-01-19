// jquery精简版：jqlite
function jqlite(selector) {
    class Selector {
        constructor(selector) {
            let elements = document.querySelectorAll(selector);
            // el值为：Element,NodeList
            this.el = elements;
        }
        type(data) {
            return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
        }
        addClass(classname) {
            this.el.forEach(function (item) {
                item.classList.add(classname);
            });

            return this;
        }
        removeClass(classname) {
            this.el.forEach(function (item) {
                item.classList.remove(classname);
            });
            return this;
        }
        show() {
            this.el.forEach(function (item) {
                item.style.display = 'block';
            });
            return this;

        }
        hide() {
            this.el.forEach(function (item) {
                item.style.display = 'none';
            });
            return this;
        }
        on(type, handle, isCapture) {
            this.el.forEach(function (item) {
                item.addEventListener(type, handle, isCapture)
            });
            return this;
        }
        // 设置、获取
        css(key, val) {
            var $this = this;
            if (val === undefined && this.type(key) === 'string') {
                // 获取
                let value;
                let el = this.el[0]
                try {
                    value = getComputedStyle(el)[key]
                } catch (err) {
                    try {
                        value = el.currentStyle[key];
                    } catch (err) {
                        value = el.style[key];
                    }
                }
                return value;
            }
            this.el.forEach(function (item) {
                if ($this.type(key) === 'object') {
                    for (var k in key) {
                        item.style[k] = key[k];
                    }
                } else {
                    item.style[key] = val;
                }
            });
            return this;
        }
        // 设置、获取html属性
        attr(key, val) {
            var $this = this;
            if (val === undefined && this.type(key) === 'string') {
                // 获取
                var value = Array.prototype.map.call(this.el, function (item) {
                    return item.getAttribute(key)
                });

                if (value.length < 2) {
                    value = value[0];
                }

                return value;
            }
            this.el.forEach(function (item) {
                if ($this.type(key) === 'object') {
                    for (var k in key) {
                        item.setAttribute(k, key[k]);
                    }
                } else {
                    item.setAttribute(key, val)
                }
            });
            return this;
        }
        // 设置、获取节点属性
        props(key,val){
            var $this = this;
            if (val === undefined && this.type(key) === 'string') {
                // 获取
                var value = Array.prototype.map.call(this.el, function (item) {
                    return item[key]
                });

                if (value.length < 2) {
                    value = value[0];
                }

                return value;
            }

            this.el.forEach(function (item) {
                if ($this.type(key) === 'object') {
                    for (var k in key) {
                        item[k] = key[k];
                    }
                } else {
                    item[key] = val;
                }
            });
            return this;
        }
        // 获取、设置html内容
        html(content){
            if(content === undefined){
                var value = [];
                for(var i=0;i<this.el.length;i++){
                    value.push(this.el[i].innerHTML)
                }
                return value.join('\n')
            }

            for(var i=0;i<this.el.length;i++){
                this.el[i].innerHTML = content
            }
            return this;
        }
        text(content){
            if(content === undefined){
                var value = [];
                for(var i=0;i<this.el.length;i++){
                    value.push(this.el[i].innerText)
                }
                return value.join('\n')
            }

            for(var i=0;i<this.el.length;i++){
                this.el[i].innerText = content
            }
            return this;
        }
        animate(opt,callback){
            var $this = this;
            this.el.forEach(function(el){
                // 如何判断所有动画执行完成
                // 记录动画数量
                el.timerLen = 0;

                for(let attr in opt){
                    el.timerLen++;

                    const timerName = attr + 'timer';
                    clearInterval(el[timerName]);
                    el[timerName] = setInterval(()=>{
                        // 获取当前值
                        let current = $this.css(attr); // string
                        let target = opt[attr];

                        // 提取单位
                        let unit = current.match(/[a-z]+$/);// [px],null,[deg]
                        unit = Array.isArray(unit) ? unit[0] : '';

                        current = parseFloat(current);

                        // 计算缓冲速度
                        let speed = (target-current)/10;
                        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

                        // opacity
                        if(['opacity'].includes(attr)){
                            speed = speed>0 ? 0.05 : -0.05;
                        }else{
                            current = Math.round(current);
                        }

                        const currentVal = current + speed;

                        if(currentVal == target){
                            clearInterval(el[timerName]);

                            // 每完成一个动画，数量自动-1
                            el.timerLen--;
                            // 当锁游戏动画执行完毕时，调用回调函数
                            if(el.timerLen === 0){
                                // if(typeof callback==='function'){
                                //     callback();
                                // } 
                                // e = e || window.event; // 当e有值，则赋值e，否则赋值window.event;
                                typeof callback==='function' && callback(); // 如果&&前面的值转成boolean为true时执行&&后面的代码，如为false则忽略后面的代码
                            }
                        }

                        el.style[attr] = currentVal + unit;

                    },30)
                }
            })
            
        }
    }

    return new Selector(selector);

}

// function Selector(selector){
//     this._init(selector);
// }
// Selector.prototype = {
//     constructor:Selector,
//     _init(){

//     }
// }
// Object.defineProperties(Selector.prototype,{
//     constructor:{
//         enumerable:false
//     },
//     _init:{
//         enumerable:false
//     }
// });


// 添加别名
window.$ = jqlite;


// $('#box').addClass('link');

// $('a').addClass('link');
// $('a').on('click',function(){});

// // 链式调用：实例才能调用原型上的方法
// // 原理：方法执行后返回实例
// $('a').on('click',function(){}).addClass('link').show().hide()

// $('a').on('click')