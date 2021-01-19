;(function($){
    $.fn.color = function(color){
        return this.filter(function(idx,el){
            let $div = $('<div/>').css('background-color',color);
            console.log($(el).css('background-color'),$div.css('background-color'))
            return $(el).css('background-color') == $div.css('background-color');
        })
    }
})(jQuery);