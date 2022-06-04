/*    =====================================
                   loader
     ====================================== */

$(window).on("load", function () {
    "use strict";
    setTimeout(function () {
        $(".loader").fadeOut(800);
    }, 1000);

});



jQuery(function ($) {
    "use strict";

    $(".nav-link.scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 300);
    });

    $(".side-nav .navbar-nav .nav-item .nav-link.scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 700}, 300);
    });



    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });





    /*************************************/
    /*********  Tween max ****************/
    /**************************************/

    /* Animated Cursor */

    function animatedCursor() {

        if ($(".aimated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a = document.getElementsByClassName("cursor"),
                i = document.getElementsByClassName("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n , TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 1.5,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to(".cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                TweenMax.to(".cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
            }), $(".link").mouseenter(function (e) {
                TweenMax.to(".cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.27)",
                    opacity: .15
                })
            }), $(".link").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {
                    borderWidth: "2px",
                    scale: 1,
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    opacity: 1
                })
            })

        }

    }

    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }
    else{
        $('.aimated-cursor').addClass('magic');
    }
    $('.aimated-cursor').addClass('magic');

    $('.head-sec .slider-social').mouseenter(function () {
        $('.head-sec ~ .aimated-cursor').removeClass('magic');
    });
    $('.head-sec .slider-social').mouseleave(function () {
        $('.head-sec ~ .aimated-cursor').addClass('magic');
    });
    $('.slider-sec .slider-social').mouseenter(function () {
        $('.slider-sec ~ .aimated-cursor').removeClass('magic');
    });
    $('.slider-sec .slider-social').mouseleave(function () {
        $('.slider-sec ~ .aimated-cursor').addClass('magic');
    });

    /*************************************/
    /******** open Navigation menu *******/
    /*************************************/

    if ($("#sidemenu_toggle").length) {

        //Less Then 767 run this script
        if ($(window).width() < 767) {
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
        //Greater then 767 run this script
        else{

            $("#sidemenu_toggle").on("click", function () {
                $(".pushwrap").toggleClass("active");
                $(".slider-sec").addClass("push-slider-up");
                $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(500)
            }), $("#close_side_menu").on("click", function () {
                $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
                $(".slider-sec").removeClass("push-slider-up");
            }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
                $(".slider-sec").removeClass("push-slider-up");
                $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
            }), $("#btn_sideNavClose").on("click", function () {
                $(".slider-sec").removeClass("push-slider-up");
                $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
            });
        }
    }




    /* =====================================
                   About sec js
     ====================================== */

    $('.about-sec .about-cards .ab-card').on('mouseover', function () {
        $('.about-sec .about-cards .ab-card:nth-child(3)').removeClass('active');
    });
    $('.about-sec .about-cards .ab-card').on('mouseleave', function () {
        $('.about-sec .about-cards .ab-card:nth-child(3)').addClass('active');
    });
    /* =====================================
                   Parallaxie js
     ====================================== */

    if ($(window).width() < 780) {

        $('.count-sec').addClass("parallax-disable");
        $('.timeline-sec').addClass("parallax-disable");
        $('.slide-sec').addClass("parallax-disable");

    } else {
        $('.count-sec').removeClass("parallax-disable");
        $('.timeline-sec').removeClass("parallax-disable");
        $('.slide-sec').removeClass("parallax-disable");

        // parallax
        $('.count-sec').parallaxie({
            speed: 0.5,
            offset: -250,
        });
        $('.timeline-sec').parallaxie({
            speed: 0.5,
            offset: -50,
        });
        $('.slide-sec').parallaxie({
            speed: 0.5,
            offset: -220,
        });

    }


    /* =====================================
                 speaker  carousel
     ====================================== */

    $('.speaker').owlCarousel({

        loop: true,
        margin: 10,
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
               image portfolio
     ====================================== */

    (function ($, window, document, undefined) {
        'use strict';

        // init cubeportfolio
        $('#js-grid-full-width').cubeportfolio({
            filters: '#js-filters-full-width',
            layoutMode: 'mosaic',
            sortByDimension: true,
            defaultFilter: '*',
            animationType: 'fadeOutTop',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 3,
            }, {
                width: 1100,
                cols: 3,
            }, {
                width: 800,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: ' ',
                    gapHorizontal: 10,
                    gapVertical: 10,
                }
            }],
            caption: 'zoom',
            displayType: 'fadeIn',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: '#js-loadMore-full-width',
                    action: 'auto',
                    loadItems: 3,
                }
            },
        });
    })(jQuery, window, document);

    /* =====================================
           Pricing Card
     ====================================== */

    $('.pricing-sec .pricing-cards .pricing-card').on('mouseover', function () {
        $('.pricing-sec .p-card:nth-child(2) .pricing-card').removeClass('active');
    });
    $('.pricing-sec .pricing-cards .pricing-card').on('mouseleave', function () {
        $('.pricing-sec .p-card:nth-child(2) .pricing-card').addClass('active');
    });

    /* =====================================
           timeline sec
     ====================================== */

    if ($(window).width() < 768) {
        $('.timeline-sec .timeline-block.simple-timeline').addClass('in-time');
        $('.timeline-sec .timeline-block.in-time').removeClass('simple-timeline');
        $('.timeline-sec .timeline-block.in-time').addClass('inverse-timeline');
    } else {
        $('.timeline-sec .timeline-block.in-time').removeClass('inverse-timeline');
        $('.timeline-sec .timeline-block.in-time').addClass('simple-timeline');
        $('.timeline-sec .timeline-block.simple-timeline').removeClass('in-time');
    }

    /* =====================================
                 testimonial  carousel
     ====================================== */

    $('.testimonial-card').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
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

    /* =====================================
                 sponsers  carousel
     ====================================== */

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

    /*===================================
                   fixed navbar
     ======================================*/

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('header .navigation-toggle').addClass('fixed-top');
            $('header .navigation-toggle').addClass('fix-top');
            $('header .close-nav').addClass('bg-fill');
        } else {
            $('header .navigation-toggle').removeClass('fixed-top');
            $('header .navigation-toggle').removeClass('fix-top');
            $('header .close-nav').removeClass('bg-fill');
        }
    });

    /*===================================
                  fixed bottom arrow
    ======================================*/

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.bottom-arr').addClass('fixed-at-bottom');
        } else {
                $('.bottom-arr').removeClass('fixed-at-bottom');
        }
    });

//Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });



    /*************************************/
    /*********  wow animation ***********/
    /**************************************/

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

    /* =====================================
      Stop wow
 ====================================== */

    if($(window).width() < 780) {
        $('.wow').addClass('wow-removed').removeClass('wow');
    } else {
        $('.wow-removed').addClass('wow').removeClass('wow-removed');
    }




    /*=====================================
============Slider js================
=====================================*/
    if ($("#slider-sec").length) {
        var revapi4;
        revapi4 = jQuery("#rev_slider_1_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//localhost/reveditor/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            snow: {
                startSlide: "first",
                endSlide: "last",
                maxNum: "150",
                minSize: "0.3",
                maxSize: "6",
                minOpacity: "0.3",
                maxOpacity: "1",
                minSpeed: "10",
                maxSpeed: "100",
                minSinus: "1",
                maxSinus: "100",
                hide_under: 767,
            },
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
                    enable: false,
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
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 767,
                    style: "berex",
                    hide_onleave: false,
                    direction: "vertical",
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0,
                    space: 5,
                    tmp: '<div class="tp-bullet-inner"></div><div class="tp-line"></div>'
                }
            },
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
            spinner: "off",
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
        RsSnowAddOn(jQuery, revapi4);
    }






});