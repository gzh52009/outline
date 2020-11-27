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