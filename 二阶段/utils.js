/**
 * 工具函数封装
 */

/**
 * 得到min-max范围内的随机整数
 * @param  {Number} min 最小值
 * @param  {Number} max 最大值
 * @return {Number}     返回值
 */
function randomNumber(min,max){
    // var number = parseInt(Math.random()*100+1);
    var number = parseInt(Math.random()*(max-min+1)+min);
    
    // 函数的返回值
    return number
}

/**
 * 生成随机颜色
 * @return {String} 返回rgb颜色
 */
function randomColor(){
    var r = randomNumber(0,255);
    var g = randomNumber(0,255);
    var b = randomNumber(0,255);

    return 'rgb('+r+','+g+','+b+')';
}

/**
 * 获取el元素下的所有子元素
 * @param {Element} el 元素
 * @return {Array}  返回el元素的所有子节点
 */
function children(el){
    var result = [];
    for(var i=0;i<el.childNodes.length;i++){
        if( el.childNodes[i].nodeType != 1){
            continue;
        }
        result.push( el.childNodes[i]);
    }
    return result;
}

function firstElement(el){
    return children(el)[0];
}
function lastElement(el){
    var arr = children(el);
    return arr[arr.length-1];
}

/**
 * 获取下一个元素节点
 * @param {Element} el 
 * @return {Element}    返回el元素的下一个兄弟元素
 */
function nextElement(el){
    var next = el.nextSibling;
    // 只有el元素的下一个兄弟元素存在时才符合循环条件
    while(next){
        if(next.nodeType != 1){
            next = next.nextSibling
        }else{
            break;
        }
    }

    return next;
}

/**
 * 练习：获取前一个元素节点
 * @param {*} el 
 */
function prevElement(el){
    var prev = el.previousSibling;
    // 只有el元素的下一个兄弟元素存在时才符合循环条件
    while(prev){
        if(prev.nodeType != 1){
            prev = prev.previousSibling;
        }else{
            break;
        }
    }

    return prev;
}

function getStyle(el,key){
    // 标准
    if(window.getComputedStyle){
        return getComputedStyle(el)[key]
    }
    // IE8-
    else if(el.currentStyle){
        return el.currentStyle[key]
    }
    // 内联
    else{
        return el.style[key]
    }
}


/**
 * 动画函数1.0
 * @param {Element} el      动画元素
 * @param {String} attr     动画属性
 * @param {Number} target   动画属性目标值
 */
// function animate(el,attr,target){
//     // // 获取当前值
//     // const current = getStyle(el,attr);

//     // // 计算速度（匀速）
//     // const speed = (target-current)/10;
//     // 清除之前的定时器
//     clearInterval(el.timer);
//     el.timer = setInterval(()=>{
//         // 缓冲运动
//          // 获取当前值
//         let current = getStyle(el,attr); // 200px,0.5,50deg

//         // 提取单位
//         let unit = current.match(/[a-z]+$/);// [px],null,[deg]

//         if(unit){
//             unit = unit[0];
//         }else{
//             unit = ''
//         }

//         // 提取数字
//         current = parseFloat(current);

//         // 计算速度（匀速）
//         let speed = (target-current)/10;// 1.5=>2,-1.5=>-2,-0.5=>-1
//         speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

//         // opacity属性
//         if(attr === 'opacity'){
//             speed = speed>0 ? 0.1:-0.1;
//         }

//         const val = current + speed;

//         if(val == target){
//             clearInterval(el.timer);
//         }

//         el.style[attr] = val  + unit;
//     },30)
// }


/**
 * 运动函数2.0
 * @param {Element} el          动画元素
 * @param {Object} opt          动画属性（键值对）
 * @param {Function} callback   回调函数（所有动画执行完成后调用）
 */
function animate(el,opt,callback){
    // 如何判断所有动画执行完成
    // 记录动画数量
    el.timerLen = 0;

    for(let attr in opt){
        el.timerLen++;

        const timerName = attr + 'timer';
        clearInterval(el[timerName]);
        el[timerName] = setInterval(()=>{
            // 获取当前值
            let current = getStyle(el,attr); // string
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
    
}


function request(options){
    var baseUrl = 'http://localhost:2020/api';
    var defaults = {
        type:'get',
        data:{},
        async:true
    }
    // var opt = Object.assign({},defaults,options);
    for(var key in options){
        defaults[key] = options[key];
    }
    var opt = defaults;

    opt.url = opt.url.indexOf('http')>=0 ? opt.url : baseUrl + opt.url;

    // 转换参数格式：{page:1,size:10} => page=1&size=10
    var params = '';
    for(var key in opt.data){
        params += key + '=' + opt.data[key] + '&'
    }
    // 删除多余&
    params = params.slice(0,-1);

    if(opt.type === 'get'){
        opt.url += '?' + params;
        params = null;
    }

    var xhr;

    // xhr兼容写法
    // if(window.XMLHttpRequest){
    //     xhr = new XMLHttpRequest()
    // }else if(...)
    try{
        // 尝试执行这里的代码，如果报错则执行catch中的代码
        xhr = new XMLHttpRequest();
    }catch(err){
        // ie低版本浏览有多种异步请求的实现
        try{
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(err){
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(err){
                alert('你的浏览器太low了，这个世界不适合你');
            }
        }
    }

    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText);// {code,data,msg}
        // if(typeof opt.success==='function'){
        //     opt.success(data);
        // }
        typeof opt.success==='function' && opt.success(data);
    }

    xhr.open(opt.type,opt.url,opt.async);
    xhr.send(params);
}



var Cookie = {
    set: function (name, value, params = {}) {
        // {expires,path,domain} -> expires=xxx;path=xxx
        var str = ''
        for (var key in params) {
            str += key + '=' + params[key] + ';'
        }
        str = str.slice(0, -1);

        document.cookie = name + '=' + value + ';' + str;
    },
    get: function (name) {
        var cookies = document.cookie.split('; ');
        var value = '';
        cookies.forEach(function (item) {
            var arr = item.split('=');
            if (arr[0] === name) {
                value = arr[1];
            }
        });
        return value;

    },
    remove: function (name) {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        // document.cookie = name + '=x;expires='+d;
        this.set(name, 'x', { expires: d });
    }
}
// Cookie.set('top', 100, { expires, path });
// Cookie.get('left');
// Cookie.remove('left')

function type(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase(); // data.toString()
}