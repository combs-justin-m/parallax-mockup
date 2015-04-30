'use strict';


$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({'transform': 'translate(0px, '+ wScroll /2.4 +'%)'});
    $('.onepencil').css({'transform': 'translate(0px, '+ wScroll /8 +'%)'});
    $('.redpencil').css({'transform': 'translate(0px, '+ wScroll /8 +'%)'});
    // $('.pencilcup').css({'transform': 'translate(0px, -'+ wScroll /80 +'%)'});

    if(wScroll > $('.sketches').offset().top -
            ($(window).height() / 1.2)) {

        $('.sketches figure').each(function(i){

            setTimeout(function(){

            $('.sketches figure').eq(i).addClass('is-showing');

            }, 150 * (i + 1));

        });

    }

});