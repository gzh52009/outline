/**
 * Vue过滤器
 */

export function formatDate(value,fmt='YYYY-MM-DD'){
    // vaule: 待过滤的值
    let d = new Date(value);

    // 预订字符对应时间
    var o = {
        "M+": d.getMonth() + 1, //月份 12
        "D+": d.getDate(), //日 21
        "h+": d.getHours(), //小时 17
        "m+": d.getMinutes(), //分 3
        "s+": d.getSeconds(), //秒 20
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度 
        "S": d.getMilliseconds() //毫秒 
    };

    // 替换年份
    if(/(Y+)/.test(fmt)){
        // 得到fmt字符串中Y字符对应的年份
        // YYYY => 2020
        // YY => 20
        // RegExp.$1 = 'YYYY'
        var res = String(d.getFullYear()).substr(4 - RegExp.$1.length);
        //YYYY : var res = '2020'.substr(4-'YYYY'.length) => 2020
        // YY:   var res = '2020'.sbstr(4-'YY'.length)    => 20

        // 替换年份
        fmt = fmt.replace(RegExp.$1,res);// YYYY/MM/DD->2020/MM/DD
    }

    // 替换月、日
    for(var key in o){
        // 利用key创建正则表达式
        var reg = new RegExp('(' + key + ')'); // new RegExp('(M+)') /(M+)/

        // fmt='2020/MM/DD'
        if(reg.test(fmt)){
            // 得到匹配字符对应的时间
            // var res= 'MM'.length>1 ? '0012'.substr('12'.length) : 12
            var res = RegExp.$1.length>1 ? ('00' + o[key]).substr(String(o[key]).length) : o[key];


            fmt = fmt.replace(RegExp.$1,res); // fmt='2020/MM/DD'->2020/12/DD
        }
    }
    return fmt;
}


