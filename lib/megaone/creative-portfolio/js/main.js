
jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
        Loading Timeout
     ====================================== */
    $(".loader-area").fadeOut(1000);

});


$('[data-fancybox="images"]').fancybox({
    margin : [44,0,22,0],
    thumbs : {
        autoStart : true,
        axis      : 'x'
    }
});


//***************** MENU AND CLOSE BUTTON OFSIDE NAVBAR*********************//
$('.menu-btn').on("click", function () {
    $('.outer-wrapper').removeClass('end-anm1');
    $('.outer-wrapper').addClass('inner-wrapper');
    $('.main-content').addClass('main-content-hide');
    $('body').css({overflow:'hidden'});
    $('.outer-wrapper').addClass('start-anm1');

});
$('.close-outerwindow').on("click", function () {
    $('.outer-wrapper').removeClass('start-anm1');
    $('.outer-wrapper').addClass('end-anm1');
    $('body').css({overflow:'visible'});
    $('.main-content').removeClass('main-content-hide');
    setTimeout(function () {
        $('.outer-wrapper').removeClass('inner-wrapper');
    }, 800);
});
$('.outer-wrapper ul li a').click(function () {
    $('.outer-wrapper').removeClass('inner-wrapper');
});