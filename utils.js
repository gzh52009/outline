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