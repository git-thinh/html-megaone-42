if ($(window).width() < 1020) {}

/* ===================================
       Loader
====================================== */
jQuery(window).on("load", function () {
    "use strict";

/* ===================================
    Loading Timeout
====================================== */
    $(".loader-area").fadeOut(800);
});

/* ===================================
          Search Popup
=================================== */
$('.open_search').on('click', function (event) {
    event.stopPropagation();
    $('.search_block').toggleClass('visible');
    $('.search_block .search_input').focus();
    $('.search-overlay').addClass('overlayer');
    $('#sidemenu_toggle').fadeOut(2);
});

$('body').on('click', function () {
    $('.search_block').removeClass('visible');
    $('.search-overlay').removeClass('overlayer');
    $('#sidemenu_toggle').fadeIn(2);
});

$('.search_box').on('click', function (event) {
    event.stopPropagation();
});

$('.search_input').on('keyup', function (event) {
    if ($(this).val() !== '') {
        $(this).addClass('typing');
    } else {
        $(this).removeClass('typing');
    }
});

/* ===================================
       Navbar Scroll
=================================== */
$(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
        $('.search_block').removeClass('visible');
        $('.search-overlay').removeClass('overlayer');
        $('#sidemenu_toggle').fadeIn(2);
    }
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 220) { 
    // Set position from top to add class
        $('header').addClass('header-appear');
    } else {
        $('header').removeClass('header-appear');
    }
});

//scroll to appear
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 110
    });
});

$(".scroll1").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 170
    });
});

/* ===================================
    Side Menu
====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-menu .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}

/* ===================================
    WOW Animation
======================================*/

new WOW().init();


