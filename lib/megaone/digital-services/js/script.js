// if ($(window).width() < 1020) {}
$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1000);
});

/* ===================================
        Header appear
====================================== */
jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

});

/* ===================================
     Nav Scroll
====================================== */
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80}, 1200);
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
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}


//*********************SMOOTH SCROLL*****************************//
$("a.pagescroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
});

/*===================================
    Go Top Scroll
====================================== */
$(function(){
    // Scroll Event
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });
});


// loading bars
$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
    },2000)
});



/* =====================================
            Pricing Card
====================================== */

$('.pricing-sec .pricing-card').on('mouseover',function () {
    $('.pricing-sec .pricing-card:nth-child(2)').removeClass('active');
});
$('.pricing-sec .pricing-card').on('mouseleave',function () {
    $('.pricing-sec .pricing-card:nth-child(2)').addClass('active');
});

/* =====================================
            Project slider
====================================== */

$(document).ready(function(){
    $('.project-detail-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        active:true,
        // fade: true,
        asNavFor: '.project-img-area'
    });
    $('.project-img-area').slick({
        // vertical: true,
        // verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.project-detail-area',
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });
    $('#project-next').click(function(){
        $('.project-img-area').slick('slickNext');
    });
    $('#project-prev').click(function(){
        $('.project-img-area').slick('slickPrev');
    });

});

/* =====================================
            Clients sec
====================================== */
$('.clients').owlCarousel({

    loop:true,
    margin:0,
    slideSpeed: 5000,
    slideTransition:'linear',
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    responsive:{
        0:{

            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
    }

});


