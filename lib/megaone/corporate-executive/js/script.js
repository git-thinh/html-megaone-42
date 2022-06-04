/* ===================================
    About
====================================== */

/*---------------------------------------------------------------------
    Theme Name: Corporate Executive Creative Template
    Theme URI:
    Author: Themes Industry
    Author URI:
    Description: One Page , Multi Parallax Template
    Tags: one page, multi page, multipurpose, parallax, creative, html5

 ----------------------------------------------------------------------*/



//PAGE LOADER
$(window).on("load", function () {

    "use strict";
    $(".loader1").fadeOut(800);

    $('.side-menu').removeClass('hidden');


    /*===================================
            Cube Portfolio OWL CAROUSEL
    ======================================*/

    // init cubeportfolio
    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 2,
        }, {
            width: 576,
            cols: 1,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    });

});

jQuery(function ($) {
    "use strict";

    //let $window = $(window);
    // alert($window);

    /*------ STICKY MENU FIXED ------*/

    $(window).scroll(function () {

        if ($(document).scrollTop() > 300) {
            $('.header-area').addClass('fixednavbar');

            if ($(window).width() > 767) {
                $('.header-area .nav-logo').removeClass('col-6');
                $('.header-area .nav-logo').addClass('col-2');
                $('.header-area .nav-mega').removeClass('col-12');
                $('.header-area .nav-mega').addClass('col-8');
                $('.header-area .nav-utility').removeClass('col-3');
                $('.header-area .nav-utility').addClass('col-2');

                $('.header-area .nav-logo').removeClass('pt-3');
                $('.header-area .nav-mega').removeClass('pt-3');
                $('.header-area .nav-utility').removeClass('pt-3');

            }

        } else {
            $('.header-area').removeClass('fixednavbar');
            if ($(window).width() > 767) {
                $('.header-area .nav-logo').addClass('col-6');
                $('.header-area .nav-logo').removeClass('col-2');
                $('.header-area .nav-mega').addClass('col-12');
                $('.header-area .nav-mega').removeClass('col-8');
                $('.header-area .nav-utility').addClass('col-3');
                $('.header-area .nav-utility').removeClass('col-2');

                $('.header-area .nav-logo').addClass('pt-3');
                $('.header-area .nav-mega').addClass('pt-3');
                $('.header-area .nav-utility').addClass('pt-3');

            }
        }
    });

    /*------ End STICKY MENU FIXED ------*/


    /*------ DETECT SCREEN JS ------*/

    if ($(window).width() < 767) {

        $('.header-area .nav-logo').removeClass('col-6');
        $('.header-area .nav-logo').addClass('col-4');
        // // $('.header-area .nav-logo').addClass('col-3');
        //
        $('.header-area .nav-utility').removeClass('col-3');
        $('.header-area .nav-utility').addClass('col-6');
        //
        $('.header-area .nav-mega').removeClass('col-12');
        $('.header-area .nav-mega').addClass('col-2');

    }
    else {

        $('.header-area .nav-logo').removeClass('col-4');
        $('.header-area .nav-logo').addClass('col-6');

        $('.header-area .nav-utility').removeClass('col-6');
        $('.header-area .nav-utility').addClass('col-3');
        //
        $('.header-area .nav-mega').removeClass('col-2');
        $('.header-area .nav-mega').addClass('col-12');
    }

    //Close Side MENU
    $(".side-menu .inner-wrapper .side-nav .navbar-nav .nav-item a").on("click",function () {
        $("body").removeClass("overflow-hidden");
        sideMenu.removeClass("side-menu-active");
        $("#close_side_menu").fadeOut(200);
        $(() => {
            setTimeout(() => {
                $('.sideNavPages').removeClass('show');
                $('.fas').removeClass('rotate-180');
            }, 400);
        });

    });

    /*
     * Side menu collapse opener
     * */
    $(".collapsePagesSideMenu").on('click', function () {
        $(this).children().toggleClass("rotate-180");
    });

    $(".user-data").on('click', function () {
        // alert("yes");
        $(".user-data .dropdown-m").css({display: 'block'});
    });
    $(".slider").on('click', function () {
        // alert("yes");
        $(".user-data .dropdown-m").css({display: 'none'});
    });



    /*===================================
      //Mega Menu OWL Carousel
    ======================================*/

    $('.featured-megamenu-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

// Custom Mega Menu OWL
    $('.ini-customNextBtn').click(function () {
        var owl = $('.featured-megamenu-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.ini-customPrevBtn').click(function () {
        var owl = $('.featured-megamenu-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* =====================================
               speaker  carousel
   ====================================== */

    $('.speaker').owlCarousel({

        loop: true,
        margin: 20,
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
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 3
            },
        }

    });

    /* =====================================
               testimonial  carousel
   ====================================== */

    $('.testimonial-card').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: true,
        dots: false,
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


    $('.sponser-tags').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
        }

    });



    /* =====================================
      Pricing Card
====================================== */

    $('.pricing-sec .pricing-cards .pricing-card').on('mouseover',function () {
        $('.pricing-sec .p-card:nth-child(2) .pricing-card').removeClass('active');
    });
    $('.pricing-sec .pricing-cards .pricing-card').on('mouseleave',function () {
        $('.pricing-sec .p-card:nth-child(2) .pricing-card').addClass('active');
    });


    /* ===================================
           Audio Player
======================================*/
    var v= $('video, audio');
    if(v.length){
        v.mediaelementplayer({
            // Do not forget to put a final slash (/)
            pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
            // this will allow the CDN to use Flash without restrictions
            // (by default, this is set as `sameDomain`)
            shimScriptAccess: 'always'
            // more configuration
        });
    }

    //FANCY BOX

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


    /*Menu Onclick*/
    let sideMenuToggle = $("#sidemenu_toggle");
    let sideMenu = $(".side-menu");
    if (sideMenuToggle.length) {
        sideMenuToggle.on("click", function () {
            $("body").addClass("overflow-hidden");
            sideMenu.addClass("side-menu-active");
            $(function () {
                setTimeout(function () {
                    $("#close_side_menu").fadeIn(300);
                }, 300);
            });
        });
        $("#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll").on("click", function () {
            $("body").removeClass("overflow-hidden");
            sideMenu.removeClass("side-menu-active");
            $("#close_side_menu").fadeOut(200);
            $(() => {
                setTimeout(() => {
                    $('.sideNavPages').removeClass('show');
                    $('.fas').removeClass('rotate-180');
                }, 400);
            });
        });
        $(document).keyup(e => {
            if (e.keyCode === 27) { // escape key maps to keycode `27`
                if (sideMenu.hasClass("side-menu-active")) {
                    $("body").removeClass("overflow-hidden");
                    sideMenu.removeClass("side-menu-active");
                    $("#close_side_menu").fadeOut(200);
                    $tooltip.tooltipster('close');
                    $(() => {
                        setTimeout(() => {
                            $('.sideNavPages').removeClass('show');
                            $('.fas').removeClass('rotate-180');
                        }, 400);
                    });
                }
            }
        });
    }


    /* ===================================
        Stop Parallax Banner Listing Page
    ======================================*/
    if ($(window).width() < 780) {
        $('.paralax-section-slide-data1').addClass('paralax-data');
    } else {
        $('.paralax-section-slide-data1').removeClass('paralax-data');
        $('.paralax-section-slide-data1').parallaxie({
            speed: 0.6,
            offset: -100,
        });
    }

    /*=======================================================
      Alone,ShopCart,Login,Register,product-detail,contact
    =========================================================*/

    if ($(window).width() < 780) {
        $('.paralax-section-slide-data').addClass('paralax-data');
    } else {
        $('.paralax-section-slide-data').removeClass('paralax-data');
        $('.paralax-section-slide-data').parallaxie({
            speed: 0.6,
            offset: -170,
        });
    }



    /* ===================================
        Stop Parallax Banner Index Page
    ======================================*/
    if ($(window).width() < 780) {
        $('.parallax-slide').addClass('paralax-data');
    } else {
        $('.parallax-slide').removeClass('paralax-data');
        $('.parallax-slide').parallaxie({
            speed: 0.6,
            offset: -200,
        });
    }


    /* ===================================
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
         //Scroll and Arrow Appear
    ======================================*/

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('3000');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ----------- Counters ---------- */
    // $('.count').each(function () {
    //     $(this).appear(function () {
    //         $(this).prop('Counter', 0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 3000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // });


    /*Scroll Smooth*/
    // $(".site-header .navbar-nav .nav-item .nav-link").on("click", function (event) {
    //     $("html,body").animate({
    //         scrollTop: $(this.hash).offset().top - 80}, 1200);
    // });

    /* =====================================
          Stop wow
     ====================================== */


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



    $(".nav-link.scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80}, 100);
    });
    $(".slider-btn").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 80}, 100);
    });



    /* ===================================
       Features Section Number Scroller
       ====================================== */

    $(".stats").each(function () {
        $('.numscroller').appear(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /* ===================================
              REV SLIDER
    ======================================*/
 if ($(".slider").length) {

     $("#rev_slider_1_1").show().revolution({
         sliderType: "standard",
         jsFileLocation: "//localhost/reveditor/revslider/public/assets/js/",
         sliderLayout: "fullscreen",
         dottedOverlay: "none",
         delay: 9000,
         navigation: {
             keyboardNavigation: "off",
             keyboard_direction: "horizontal",
             mouseScrollNavigation: "off",
             mouseScrollReverse: "default",
             onHoverStop: "off",
             touch:{
                 touchenabled:"on",
                 touchOnDesktop:"on",
                 swipe_threshold: 75,
                 swipe_min_touches: 1,
                 swipe_direction: "horizontal",
                 drag_block_vertical: false
             },
             arrows: {
                 style: "gyges",
                 enable: true,
                 hide_onmobile: true,
                 hide_under: 767,
                 hide_onleave: false,
                 tmp: '',
                 left: {
                     h_align: "left",
                     v_align: "center",
                     h_offset: 20,
                     v_offset: 0
                 },
                 right: {
                     h_align: "right",
                     v_align: "center",
                     h_offset: 20,
                     v_offset: 0
                 }
             }
         },
         responsiveLevels: [1240, 1024, 778, 480],
         visibilityLevels: [1240, 1024, 778, 480],
         gridwidth: [1140, 1024, 778, 480],
         gridheight: [700, 768, 960, 420],
         lazyType: "none",
         parallax: {
             type: "mouse",
             origo: "enterpoint",
             speed: 400,
             speedbg: 0,
             speedls: 0,
             levels: [2, 3, 5, 10, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
             disable_onmobile: "on"
         },
         shadow: 0,
         spinner: "spinner2",
         stopLoop: "off",
         stopAfterLoops: -1,
         stopAtSlide: -1,
         shuffle: "off",
         autoHeight: "off",
         fullScreenAutoWidth: "off",
         fullScreenAlignForce: "off",
         fullScreenOffsetContainer: "",
         fullScreenOffset: "",
         disableProgressBar: "on",
         hideThumbsOnMobile: "off",
         hideSliderAtLimit: 0,
         hideCaptionAtLimit: 0,
         hideAllCaptionAtLilmit: 0,
         debugMode: false,
         fallbacks: {
             simplifyAll: "off",
             nextSlideOnWindowFocus: "off",
             disableFocusListener: false,
         }
     });
 }






});