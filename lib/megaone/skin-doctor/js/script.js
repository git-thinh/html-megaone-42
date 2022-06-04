$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */


    setTimeout(function () {
        $("#loader-fade").fadeOut("slow");
        $('.side-menu').removeClass('hidden');
    }, 1000);



});




jQuery(function ($) {
    "use strict";



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


    if ($(window).width() > 992) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
            $('#slider-social').addClass('slider-social-fixed');
        }
        else {
            $('header').removeClass('header-appear');
            $('#slider-social').removeClass('slider-social-fixed');
        }
    });
    }

    else{
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 260) { // Set position from top to add class
                $('header').addClass('header-appear');

            }
            else {
                $('header').removeClass('header-appear');
            }
        });
    }

    /* ===================================
     Fancy Box
====================================== */

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
        Gallery
====================================== */

    $('.gallery-skin').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    /* ===================================
        Testimonial
====================================== */
    var owl5 = $('.owl-testimonial');
    owl5.owlCarousel({
        items:1,
        dots:true,
        loop:true,
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


// Main Slider Four Revolution
    var mainSlider = $('#main-slider-four');
    if($(mainSlider).length) {
        jQuery(mainSlider).show().revolution({
            sliderType: "standard",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            // navigation: {
            //     keyboardNavigation: "off",
            //     keyboard_direction: "horizontal",
            //     mouseScrollNavigation: "off",
            //     mouseScrollReverse: "default",
            //     onHoverStop: "off",
            //     arrows: {
            //         style: "hesperiden link",
            //         enable: true,
            //         hide_onmobile: false,
            //         hide_onleave: false,
            //         tmp: '',
            //         left: {
            //             h_align: "center",
            //             v_align: "bottom",
            //             h_offset: -20,
            //             v_offset: 8
            //         },
            //         right: {
            //             h_align: "center",
            //             v_align: "bottom",
            //             h_offset: 20,
            //             v_offset: 8
            //         }
            //     }
            // },
            responsiveLevels: [1240, 1240, 1240, 480],
            visibilityLevels: [1240, 1240, 1240, 480],
            gridwidth: [1200, 1200, 1200, 480],
            gridheight: [800, 800, 800, 700],
            lazyType: "none",
            parallax: {
                type: "mouse+scroll",
                origo: "slidercenter",
                speed: 400,
                speedbg: 0,
                speedls: 0,
                levels: [1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 47, 48, 49, 50, 51, 55]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
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
                disableFocusListener: false
            }
        });
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (
            msie > 0 ||
            !!navigator.userAgent.match(/Trident.*rv\:11\./) ||
            ("CSS" in window &&
                "supports" in window.CSS &&
                !window.CSS.supports("mix-blend-mode", "screen"))
        ) {
            var bgColor = "rgba(245, 245, 245, 0.5)";
            //jQuery('.rev_slider .tp-caption[data-blendmode]').removeAttr('data-blendmode').css('background', bgColor);
            jQuery(
                ".rev_slider .tp-caption.tp-blendvideo[data-blendmode]"
            ).remove();
        }

        // BEFORE/AFTER INITIALISATION

        RevSliderBeforeAfter(jQuery, jQuery("#main-slider-four"), {
            arrowStyles: {
                leftIcon: "fa fa-caret-left",
                rightIcon: "fa fa-caret-right",
                topIcon: "fa fa-caret-up",
                bottomIcon: "fa fa-caret-bottom",
                size: "35",
                color: "#ffffff",
                bgColor: "transparent",
                spacing: "10",
                padding: "0",
                borderRadius: "0"
            },
            parallax: {
                type: "mouse+scroll",
                origo: "slidercenter",
                speed: 400,
                speedbg: 0,
                speedls: 0,
                levels: [1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 47, 48, 49, 50, 51, 55]
            },
            dividerStyles: {
                width: "1",
                color: "rgba(255, 255, 255, 0.5)"
            },
            onClick: {
                time: "500",
                easing: "Power2.easeOut"
            },
            cursor: "move",
            carousel: false
        });

    };

});