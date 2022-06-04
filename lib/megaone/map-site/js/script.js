$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');
    setTimeout(function(){
        $("#loader").fadeOut(700);
    }, 1000);



});


jQuery(function ($) {

    "use strict";

    /* ===================================
        Side Menu
    ====================================== */

    if ($(".toggle-btn").length) {
        $(".toggle-btn").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav-menu .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /* =====================================
         Side modal close
      ====================================== */
    $('.content-area').on('click',function () {
        $(".side-menu").removeClass("side-menu-active");
        // $(this).fadeOut(200);
        $(".pushwrap").removeClass("active");
    });
    /* =====================================
         Parallax
      ====================================== */

    if($(window).width() < 780) {
        $('.parallax').addClass("parallax-disable");
    } else {
        $('.parallax').removeClass("parallax-disable");

        // parallax
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: -100,
        });
    }
    /* =====================================
            header appear
         ====================================== */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('.upper-nav').addClass('header-appear');
        }
        else {
            $('.upper-nav').removeClass('header-appear');
        }
    });
    /* =====================================
                testimonial  carousel
    ====================================== */
var x=$('.testimonial-card');
    if(x.length) {
        $('.testimonial-card').owlCarousel({

            loop: true,
            margin: 20,
            slideSpeed: 5000,
            slideTransition: 'linear',
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 40000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            }

        });
    }
});
