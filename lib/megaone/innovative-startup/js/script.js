$(window).on("load", function () {

    "use strict";

/* ===================================
    Loading Timeout
 ====================================== */
    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $(".loader-bg").fadeOut("slow");
    });
});

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

});

/* ===================================
     Nav Scroll
====================================== */
$(".scroll").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 0}, 1000);
});

/* ===================================
     Side Menu Open & Close
====================================== */
function  my_click() {

    $('#my_tog').on("click", function () {
        $(".side_nav").addClass("expand_nav");
        $("#my_tog").addClass("close_nav");
        $("#my_tog").attr("id","close_nav");
        $(".overlay-body").addClass("show_body_overlay");
    });

    $('#close_nav').on("click", function () {
        $("#close_nav").removeClass("close_nav");
        $(".side_nav").removeClass("expand_nav");
        $("#my_tog").removeClass("close_nav");
        $("#close_nav").attr("id","my_tog");
        $(".overlay-body").removeClass("show_body_overlay");
    });
}

$('.side-nav-menu .nav-menu li a').on("click", function () {
    $(".side_nav").removeClass("expand_nav");
    $("#close_nav").removeClass("close_nav");
    $(".side_nav").removeClass("expand_nav");
    $("#my_tog").removeClass("close_nav");
    $("#close_nav").attr("id","my_tog");
});

/* ===================================
    Active Links
====================================== */
$(function() {
    $('.side-nav-menu .nav-menu li a').click( function() {
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    });
});

/* ===================================
    Broad Nav
====================================== */
$('.my_nav_tog').click(function() {
    $('.broad').addClass('broad-nav');
    $('.broad').css({ opacity: "1" });
    $('.head-nav').hide();
});

$('.btn-close').click(function() {
    $('.broad').css({ opacity: "0" });
    setTimeout(function() {$('.broad').removeClass('broad-nav')},100);
});

$('.broad ul li a').click(function () {
    $('.broad').css({ opacity: "0" });
    setTimeout(function() {$('.broad').removeClass('broad-nav')},100);
});

/* ===================================
    Fixed Broad Nav-Bar
 ====================================== */
$(window).on('scroll', function () {

    if($(window).width() <= 767){
        if ($(this).scrollTop() > 300) {
            $('#home').addClass('fixed-top')
            $('#home').addClass('fix-top')
            $('#pagepiling').addClass('margin-manage');
        }
        else {
            $('#home').removeClass('fixed-top')
            $('#home').removeClass('fix-top')
            $('#pagepiling').removeClass('margin-manage');
        }
    }else {
        $('#home').removeClass('fixed-top')
        $('#home').removeClass('fix-top')
    }
});

$('.overlay-body').on('click', function(e) {
    $("#close_nav").removeClass("close_nav");
    $(".side_nav").removeClass("expand_nav");
    $("#my_tog").removeClass("close_nav");
    $("#close_nav").attr("id","my_tog");
    $(".overlay-body").removeClass('show_body_overlay');
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

/* =====================================
         About Active
===================================== */
$('.about-card').on('mouseenter' , function(){
    $('.about-card').removeClass('active');
    $(this).addClass('active');
}).on('mouseleave' , function(){
    $('.about-card').removeClass('active');
    $('.about-card.selected').addClass('active');
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
        Cube Portfolio
======================================*/
$('#js-grid-mosaic-flat').cubeportfolio({
    filters: '#js-filters-mosaic-flat',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 6,
    }, {
        width: 1100,
        cols: 4,
    }, {
        width: 800,
        cols: 3,
    }, {
        width: 480,
        cols: 1,
        options: {
            gapHorizontal: 15,
            gapVertical: 15,
        }
    }],
    defaultFilter: '*',
    animationType: 'fadeOutTop',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    caption: 'zoom',

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',

    plugins: {
        loadMore: {
            element: '#js-loadMore-mosaic-flat',
            action: 'click',
            loadItems: 3,
        }
    },
});

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
    Main Slider Four Revolution
====================================== */

var mainSlider = $('#main-slider-four');
if($(mainSlider).length) {
    jQuery(mainSlider).show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
        },
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
            size: "30",
            color: "#ffffff",
            bgColor: "transparent",
            spacing: "6 ",
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
    })
}