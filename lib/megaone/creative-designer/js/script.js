$(window).on("load", function () {

    "use strict";
/* ===================================
        Loading Timeout
 ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1500);

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
    Fancy Box
====================================== */

    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

/* =====================================
     Circular Bars
====================================== */

    $(".circular-wrap").appear(function () {
        $(".circle").circleProgress({
            size: 210,
            lineCap: "round",
            fill: {
                gradient: ["#ffffff", "#ffffff"],
            },
        });
        $("#circletwo").circleProgress({
            size: 210,
            lineCap: "round",
            fill: {
                gradient: ["#d43030", "#d43030"],
            },
        });
    });

    $(".circular-wrap.dark").appear(function () {
        $('.myskill').circleProgress({
            lineCap: "round",
            size: 200,
        });
    });

/* =====================================
     Portfolio
====================================== */

    $('.projects').owlCarousel({

        loop:true,
        margin:0,
        slideSpeed: 5000,
        slideTransition:'linear',
        animateOut: 'slideOutRight',
        nav:false,
        dots:false,
        responsive:{
            0:{
                autoplay:true,
                autoplayTimeout:8000,
                autoplayHoverPause:true,
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
    $('.customNextBtn').click(function() {
        var owl = $('.projects');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function() {
        var owl = $('.projects');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

/* ===================================
    Testimonial
====================================== */

    var owl5 = $('.owl-testimonial');
    owl5.owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay: true,
        responsiveClass: true,
        center:true,
        responsive: {
            0: {
                items: 1,

            },
            760: {
                items: 1,

            },
            1000: {
                items: 3,
            }
        }
    });
});