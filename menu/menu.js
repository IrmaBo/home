// Открытие меню
var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').css({display:'block'}).addClass('animated fadeInRight');                            /*.animate({opacity:'1'}, 500);*/

        $('.icon-menu').css({display:'none'});                        /*animate({ right: '-130px'}, 0);*/
                                                           });


// Закрытие меню
    $('.icon-close').click(function() {
        $('.menu').css({display:'none'});                             /*animate({ right: '-685px' }, 0);*/

        $('.icon-menu').css({display:'block'});                       /*animate({ right: '85px'}, 0);*/
                                                          });

    //  $('.icon-close').hover(function() {
    //    $('.icon-close').addClass('animated flash'); });

};

$(document).ready(main);
