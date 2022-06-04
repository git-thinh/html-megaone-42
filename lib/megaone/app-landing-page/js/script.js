jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $(".loader1").fadeOut(800);
    $('.side-menu').removeClass('hidden');
});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
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

    /* ===================================
    Screen Shot Slider
    ====================================== */

    $('.screenshot-slider').owlCarousel({
        loop:false,
        autoplay: true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /* ===================================
        Mobile OWL CAROUSEL
    ====================================== */

    $('#app-slider').owlCarousel({

        loop: true,
        margin: 0,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1500: {
                items: 1
            },
        }

    });

/*=======================================
          Wow Effects
======================================*/
    var wow = new WOW(
        {
            boxClass:'wow',      // default
            animateClass:'animated', // default
            offset:0,          // default
            mobile:false,       // default
            live:true        // default
        }
    );
    wow.init();


    /* ===================================
    Stop Parallax Banner on Mobile Deveice
   ======================================*/
    if ($(window).width() < 780) {
        $('.adv-sec').addClass('paralax-data');
    } else {
        $('.adv-sec').removeClass('paralax-data');
        $('.adv-sec').parallaxie({
            speed: 0.6,
            offset: -100,
        });
    }


    /* ===================================
    Data Fancy Box
    ======================================*/

    $('[data-fancybox]').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        buttons: [
            'slideShow',
            'fullScreen',
            'thumbs',
            'share',
            // 'download',
            'zoom',
            'close'
        ],
    });


    /* ===================================
      SMOOTH SCROLL
    ======================================*/
    // $(".navbar-nav .nav-links").on("click", function (event) {
    //     event.preventDefault();
    //     $("html,body").animate({
    //         scrollTop: $(this.hash).offset().top - 30}, 1200);
    // });


});
