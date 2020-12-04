// 这的代码在页面打开时执行
window.onload = function(){
    // 这里的代码在页面上所有内容全部加载完成后执行（包括图片等静态资源）
    // 实际开发中很少使用（因为太慢）
    // 获取元素
    var btnPrev = document.getElementById('prev');
    var btnNext = document.getElementById('next');
    
    // 绑定点击事件
    btnPrev.onclick = function(){
        history.back();
    }
    
    btnNext.onclick = function(){
        history.forward();
    }
}