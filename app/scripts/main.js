'use strict';

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logo').css({'transform': 'translate(0px, '+ wScroll /2 +'%)'});
    $('.onepencil').css({'transform': 'translate(0px, '+ wScroll /4 +'%)'});
    $('.redpencil').css({'transform': 'translate(0px, '+ wScroll /2.1 +'%)'});
    $('.pencilcup').css({'transform': 'translate(0px, -'+ wScroll /80 +'%)'});
});