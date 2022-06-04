$ = jQuery.noConflict();

jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
     Loading Timeout
     ====================================== */
    $("#loader-fade").fadeOut(800);
    $('.side-menu').removeClass('d-none');


    $(document).ready(function() {


        /* ===================================
         Cube Portfolio
         ====================================== */


        (function ($, window, document, undefined) {

            // Shop
            $('#js-grid-blog-posts').cubeportfolio({
                filters: '#js-filters-mosaic-flat',
                search: '#js-search-blog-posts',
                defaultFilter: '*',
                layoutMode: 'mosanary',
                animationType: "scaleSides",
                gapVertical: 40,
                gapHorizontal: 40,
                sortByDimension: true,
                gridAdjustment: 'responsive',

                 mediaQueries: [{
                  width: 1500,
                  cols: 3
              }, {
                  width: 1100,
                  cols: 3
              }, {
                  width: 600,
                  cols: 2
              }, {
                  width: 320,
                  cols: 1
              }],

                caption: 'none',
                displayType: 'fadeIn',
                displayTypeSpeed: 400,
            });

        })(jQuery, window, document);


        /* ===================================
           Owl Carousel
           ====================================== */

        $('.owl-demos').owlCarousel({
            autoplay: false,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            loop: true,
            margin: 1,
            responsiveClass: true,
            dots: false,
            nav: true,

            responsive: {
                2501: {
                    items: 1,
                },
                1199: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                320: {
                    items: 1,
                }
            }

        });
        $( ".owl-prev").html('<span class="fa fa-angle-left"></span>');
        $( ".owl-next").html('<span class="fa fa-angle-right"></span>');

        $('.owl-demos-single').owlCarousel({
            autoplay: false,
            smartSpeed: 900,
            autoplayHoverPause: false,
            loop: true,
            margin: 1,
            responsiveClass: true,
            dots: false,
            nav: true,
            mouseDrag: false,
            touchDrag: false,

            responsive: {
                2501: {
                    items: 1,
                },
                1199: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                320: {
                    items: 1,
                }
            }

        });
    });

});

jQuery(function ($) {
    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    /* ===================================
       Nav Scroll
       ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 40}, 1100);
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
        })
    }

    /* =====================================
            Wow
       ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ----- Full Screen ----- */
    function resizebanner() {
        var $fullscreen = $(".full-screen");
        $fullscreen.css("height", $window.height());
        $fullscreen.css("width", $window.width());
    }
    resizebanner();
    $window.resize(function () {
        resizebanner();
    });

    /* ===================================
       Parallax
       ====================================== */

    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0,
        });
    }

    /* ===================================
       Owl Carousel
       ====================================== */

    /* Brand Carousel */
    $(".portfolio-carousel").owlCarousel({
        items: 3,
        margin: 30,
        dots: true,
        nav: false,
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive: {
            992: {
                items: 3
            },
            600: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /* Testimonial */
    $('.testimonial-two').owlCarousel({
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav:false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
                margin: 30,
            },
            992: {
                items: 1,
                margin: 30,
            }
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

});
