$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);

});


jQuery(function ($) {


    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
            // $('header').addClass('manage-space');
            // $('header .navbar .inner-nav-wrap').addClass('nav-postion');
        }
        else {
            $('header').removeClass('header-appear');
            // $('header').removeClass('manage-space');
            // $('header .navbar .inner-nav-wrap').removeClass('nav-postion');
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
            scrollTop: $(this.hash).offset().top - 60}, 1200);
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


    /* =====================================
          Parallax
       ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
      Owl Carousel
     ====================================== */


    //TEAM
    $('.testimonial-team').owlCarousel({
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


    // Porjects
    $('.projects').owlCarousel({

        loop:true,
        margin:0,
        slideSpeed: 5000,
        slideTransition:'linear',
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



    /*Testimonials*/
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayHoverPause: true,
        mouseDrag: false,
        loop: true,
        margin: 30,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            980: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });


    /* ===================================
      Product Listing Owl Changes Images
   ====================================== */

    $('.product-listing-carousel').owlCarousel({
        loop: false,
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


    /*===================================
     LATEST ARRIVALS OWL CAROUSEL
======================================*/
    $('.lastest_featured_products').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
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
            }
        }
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
            offset: -250,
        });
    }


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


    /* =====================================
        Select
   ======================================== */
    $(document).ready(function(){

        // Initialize select2





        if ($("#set1").length) {

            if ($(window).width() < 991) {

                $("#set1").select2({

                    placeholder: "",
                    multiple: true,
                    allowClear: true,
                    closeOnSelect: false,
                    width: '350px',
                    data: treeData,

                });
            }

            else{
                $("#set1").select2();
            }

        }

        if ($("#set2").length) {

            if ($(window).width() < 991) {

                $("#set2").select2({

                    placeholder: "",
                    multiple: true,
                    allowClear: true,
                    closeOnSelect: false,
                    width: '350px',
                    data: treeData,

                });
            }

            else{
                $("#set2").select2();
            }

        }

        if ($("#set3").length) {

            if ($(window).width() < 991) {

                $("#set3").select2({

                    placeholder: "",
                    multiple: true,
                    allowClear: true,
                    closeOnSelect: false,
                    width: '350px',
                    data: treeData,

                });
            }

            else{
                $("#set3").select2();
            }

        }

        if ($("#set4").length) {

            if ($(window).width() < 991) {

                $("#set4").select2({

                    placeholder: "",
                    multiple: true,
                    allowClear: true,
                    closeOnSelect: false,
                    width: '350px',
                    data: treeData,

                });
            }

            else{
                $("#set4").select2();
            }

        }



    });



    /*===================================
             //Sticky Filter Nav
   ======================================*/
    if($(window).width() > 780) {
        var stickybar = $('.product-filter-nav');
        if (stickybar.length) {
            Stickyfill.add(stickybar);
        }
    }
    else {
        $('.filter-form').removeClass('product-filter-nav')
    }


    /*===================================
         //Fancy Box
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


    /*===================================
             Swiper Sync Slider
   ======================================*/
    if ($("#gallery").length) {
        var galleryTop = new Swiper('#gallery', {
            effect: 'fade',
            direction: 'vertical',
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            initialSlide: 0,
            centeredSlides: true,
            loopAdditionalSlides: 5,
            touchRatio: 0.2,

        });

        var galleryThumbs = new Swiper('#thumbs', {
            direction: 'vertical',
            spaceBetween: 10,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            initialSlide: 0,
            centeredSlides: true,
            loopAdditionalSlides: 3,
            touchRatio: 0.2,
            slideToClickedSlide: true
        });

        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }




    /*===================================
              Price Range
    ======================================*/

    if ($("#slider-range").length) {
        var marginSlider = document.getElementById('slider-range');

        noUiSlider.create(marginSlider, {
            start: [0, 800],
            margin: 30,
            step: 1,
            connect: true,
            range: {
                'min': 0,
                'max': 1000
            },

        });

        var marginMin = document.getElementById('min-p'),
            marginMax = document.getElementById('max-p');

        marginSlider.noUiSlider.on('update', function (values, handle) {
            if (handle) {
                var str = values[handle]
                var res = str.split(".");
                marginMax.innerHTML = "$" + res[0];
            } else {
                var str = values[handle]
                var res = str.split(".");
                marginMin.innerHTML = "$" + res[0] + " - ";
            }
        });
    }


    $('.navbar-simple .navbar-nav a').each(function () {
        var count = $(this).children('[data-count]');
        $(this).mouseenter(function() {

            if(count.data('count')>3) {
                count.prop('Counter', 0).animate({
                    Counter: count.data('count')
                }, {
                    duration: 800,
                    easing: 'swing',
                    step: function (now) {
                        count.text(Math.ceil(now));
                    }
                });
            }else{
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











});