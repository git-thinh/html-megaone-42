$(window).on("load", function () {

"use strict";
/* ===================================
        Loading Timeout
 ====================================== */

$('.side-menu').removeClass('hidden');

setTimeout(function(){
    $('#loader-fade').fadeOut();

}, 1000);

$('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
$('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');

});

jQuery(function ($) {

"use strict";

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 260) { // Set position from top to add class
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

//Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 0
    }, 1200);
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

/* ===================================
    WOW Animation
====================================== */
if ($(window).width() > 991) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

/* ===================================
       Rotating Text
====================================== */
if ($(".js-rotating").length) {
    $(".js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
}

/* ===================================
     Owl Carousel
====================================== */
$('.team.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    margin: 0,
    nav:false,
    center:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        },
    }
});

/* ===================================
    Counter
====================================== */
$('.count').each(function () {
    $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

/* ===================================
    Reviews
====================================== */
$('.testimonial #testimonial-carousal').owlCarousel({
    loop: true,
    margin: 120,
    nav: false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

/* ===================================
    Portfolio
====================================== */
$('.portfolio-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav:false,
    dots:false,
    autoplay: true,
    margin:30,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 1,
        },
        992: {
            items: 1,
        }
    }
});
$('#portfolio-arr-right').click(function() {
    var owl = $('.portfolio-carousel');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
});
$('#portfolio-arr-left').click(function() {
    var owl = $('.portfolio-carousel');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel', [300]);
});

/* ===================================
    Partner
====================================== */
$('.partners-slider').owlCarousel({
    items: 5,
    autoplay: 1500,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    slideBy: 1,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
        1200: {
            items: 4,
        },
        768: {
            items: 3,
        },
        480: {
            items: 2,
        },
        320: {
            items: 1,
        },
    }
});

});