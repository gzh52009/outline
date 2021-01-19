/**
    * jQuery插件：slide.js
        * 扩展原型方法
*/
;(function($){
    // 向右滑动显示
    $.fn.slideRight = function(speed,easing,callback){
        // 初始状态：动画前的状态
        // 显示，width:0
        this.show();
        var startWidth = this.data('initValue');console.log('startWidth',startWidth)

        this.css({width:0});
        this.animate({width:startWidth},speed,easing,function(){
            // 动画后的状态: 动画结束后的状态

            $.type(callback)==='function' && callback();
        })
        return this;
    }

    // 向左滑动隐藏
    $.fn.slideLeft = function(speed,easing,callback){
        var $this = this;
        $this.data('initValue',$this.innerWidth())
        this.animate({width:0},speed,easing,function(){
            // 动画后的状态: 动画结束后的状态
            $this.hide();
            $.type(callback)==='function' && callback();
        });
        return this;
    }

    // $.fn.extend({
    //     slideLeft(){},
    //     slideRight(){}
    // })
    $.fn.extend({
        a(){},
        b(){}
    })
    $.extend({
        test(){

        },
        query(){

        }
    })
})(jQuery);