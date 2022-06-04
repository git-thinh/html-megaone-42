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
    /*=====================================
    ============Slider js================
    =====================================*/
    if ($("#slider-sec").length) {
        var revapi4;
        revapi4 = jQuery("#rev_slider_4_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "//localhost/reveditor/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,

            snow: {
                startSlide: "first",
                endSlide: "last",
                maxNum: "150",
                minSize: "0.2",
                maxSize: "5",
                minOpacity: "0.3",
                maxOpacity: "1",
                minSpeed: "10",
                maxSpeed: "100",
                minSinus: "1",
                maxSinus: "100",
            },
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1540, 1200, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 400,
                speedbg: 0,
                speedls: 0,
                levels: [1, 2, 3, 4, 5, 10, 15, 20, 25, 46, 47, 48, 49, 50, 51, 55],
            },
            shadow: 0,
            spinner: "off",
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
                disableFocusListener: false,
            }
        });
        RsSnowAddOn(jQuery, revapi4);

    }


    /*************************************/
    /*********slider count down***********/
    /**************************************/

    var countDownDate = new Date("Apr 29, 2020 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function () {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days < 10) {
            $(".count_down_days").html("0" + days);
        }
        if(days <= 0){
            $(".count_down_days").html("00");
        }else {
            $(".count_down_days").html(days);
        }
        if (hours < 10) {
            $(".count_down_hours").html("0" + hours);
        }
        if(hours <= 0){
            $(".count_down_hours").html("00");
        } else {
            $(".count_down_hours").html(hours);
        }
        if (minutes < 10) {
            $(".count_down_min").html("0" + minutes);
        }if(minutes <= 0){
            $(".count_down_min").html("00");
        } else {
            $(".count_down_min").html(minutes);
        }
        if (seconds < 10) {
            $(".count_down_sec").html("0" + seconds);
        }if(seconds <= 0){
            $(".count_down_sec").html("00");
        } else {
            $(".count_down_sec").html(seconds);
        }


        // If the count down is over, write some text

    }, 1000);

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
    $('.speaker-sec .slider-social').mouseenter(function () {
        $('.speaker-sec ~ .aimated-cursor').removeClass('magic');
        $('.cursor').css({border: "2px solid rgb(0, 0, 0)"});
    });
    $('.speaker-sec .slider-social').mouseleave(function () {
        $('.speaker-sec ~ .aimated-cursor').addClass('magic');
        $('.cursor').css({border: "2px solid rgb(255, 255, 255)"});
    });

    /*************************************/
    /******** open Navigation menu *******/
    /*************************************/

    $('.head-sec .toggle-btn').on('click', function () {
        $('.broad').addClass('broad-nav');
        $('.broad').css({opacity: "1"});
        $('.head-nav').hide();
        $('body').addClass('show-modal');
        $('.head-sec .toggle-btn').css({display: 'none'});

    });


    $('.close-nav').click(function () {
        $('.broad').css({opacity: "0"});
        $('body').removeClass('show-modal');
        setTimeout(function () {
            $('.broad').removeClass('broad-nav')
        }, 500);
        $('.head-sec .toggle-btn').css({display: 'block'});
        // $('.close'). attr("visibility", "hidden");
    });
    $('.broad ul li a.nav-link').mouseenter(function () {
        $('.broad .particle').addClass("show-p");
    });
    $('.broad ul li a.nav-link').mouseleave(function () {
        $('.broad .particle').removeClass("show-p");
    });



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
                items: 4
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

    /*===================================
               counter js script
     ======================================*/

//onmousehover
    $('.count-sec .count-content .count-li .num').each(function () {
        var count = $(this).children('[data-count]');
        $(this).mouseenter(function () {

            if (count.data('count') > 3) {
                count.prop('Counter', 0).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            } else {
                count.prop('Counter', 8).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            }
        });
    });


    /*************************************/
    /*********Page count down***********/
    /**************************************/

    var countDownDate1 = new Date("Apr 29, 2020 15:37:25").getTime();

// Update the count down every 1 second
    var x1 = setInterval(function () {
        var now1 = new Date().getTime();
        // Find the distance between now and the count down date
        var distance1 = countDownDate1 - now1;

        // Time calculations for days, hours, minutes and seconds
        var newdays = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var newhours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var newminutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var newseconds = Math.floor((distance1 % (1000 * 60)) / 1000);
        if (newdays < 10) {
            $(".day-sec .days").html("0" + newdays);
        }
        if(newdays <= 0){
            $(".day-sec .days").html("00");
        }
        else {
            $(".day-sec .days").html(newdays);
        }
        if (newhours < 10) {
            $(".hour-sec .hours").html("0" + newhours);
        }
        if(newhours <= 0){
            $(".hour-sec .hours").html("00");
        }else {
            $(".hour-sec .hours").html(newhours);
        }
        if (newminutes < 10) {
            $(".min-sec .minutes").html("0" + newminutes);
        }
        if(newminutes <= 0){
            $(".min-sec .minutes").html("00");
        } else {
            $(".min-sec .minutes").html(newminutes);
        }
        if (newseconds < 10) {
            $(".sec-sec .sec").html("0" + newseconds);
        }
        if(newseconds <= 0){
            $(".sec-sec .sec").html("00");
        }else {
            $(".sec-sec .sec").html(newseconds);
        }


        // If the count down is over, write some text
        // if (distance1 < 0) {
        //     clearInterval(x1);
        //     document.getElementById("count-down-area").innerHTML = "EXPIRED";
        // }
    }, 1000);

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

});