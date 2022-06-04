if ($(window).width() < 1020) {}

$(window).on("load", function () {

    "use strict";
/* ===================================
        Loading Timeout
 ====================================== */
$('.side-menu').removeClass('hidden');

    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);
});

/* ===================================
       Side Menu
====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}

/* ===================================
       Fixed Navbar 
====================================== */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/* ===================================
    Scroll To Appear
======================================*/
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 0
    });
});

/* =====================================
     About Active
===================================== */
$('.card').on('mouseenter' , function(){
    $('.card').removeClass('active');
    $(this).addClass('active');
}).on('mouseleave' , function(){
    $('.card').removeClass('active');
    $('.card.selected').addClass('active');
});

/* ===================================
    WOW Animation
======================================*/

new WOW().init();