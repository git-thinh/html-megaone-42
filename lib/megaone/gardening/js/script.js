"use strict";


/* ===================================
        Loading Timeout
 ====================================== */

$(window).on('load', function () {
    $('.side-menu').removeClass('hidden');
    // Animate loader off screen
    $("#spin-loader").fadeOut("slow");
});
var $window = $(window);
var windowsize = $(window).width();

/*------ Menu Fixed ------*/

if ($("nav.navbar").hasClass("static-nav")) {
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".static-nav");
        if ($scroll > 200) {
            $navbar.addClass("fixedmenu");
        } else {
            $navbar.removeClass("fixedmenu");
        }
    });
}

/*------ Bottom Menu Fix ------*/

if ($("nav.navbar").hasClass("fixed-bottom")) {
    var navHeight = $(".fixed-bottom").offset().top;
    $window.scroll(function () {
        if ($window.scrollTop() > navHeight) {
            $('.fixed-bottom').addClass('fixedmenu');
        } else {
            $('.fixed-bottom').removeClass('fixedmenu');
        }
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

/* Hide Menu on Mobile Click */

$(".navbar-nav>li>a").on("click", function(){
    $(".navbar-collapse").collapse("hide");
});

// scroll section
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 70
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

if($(".just-sidemenu").length){
    var anchor_point = $(".rotating-words").height();
    var side_toggle = $(".just-sidemenu #sidemenu_toggle");
    side_toggle.addClass("toggle_white");
    $window.on("scroll", function () {
        if ($window.scrollTop() >= anchor_point) {
            side_toggle.removeClass("toggle_white");
        } else {
            side_toggle.addClass("toggle_white");
        }
    });
}

/* ===================================
    WOW JS
====================================== */

new WOW().init();

/* ===================================
    CUBE PORTFOLIO
====================================== */

$("#portfolio-measonry").cubeportfolio({
    filters: '#measonry-filters',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: "scaleSides",
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: "responsive",
    mediaQueries: [{
        width: 1500,
        cols: 2
    }, {
        width: 1100,
        cols: 2
    }, {
        width: 768,
        cols: 2
    }, {
        width: 480,
        cols: 1
    }, {
        width: 320,
        cols: 1
    }],
});

/* ===================================
    COUNTER
====================================== */
(function ($) {
    $.fn.countTo = function (options,viewCounter) {
        if(viewCounter == 1){
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from:            $(this).data('from'),
                    to:              $(this).data('to'),
                    speed:           $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals:        $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }
                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }
                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };
    }
    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };
    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

/* =====================================
    START COUNTER WHEN SCROLL ON SCREEN
======================================== */
jQuery(function ($) {
    // custom formatting example
    if ($( ".count-number" ) && $( ".count-number" ).length ) {
        $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });

        // start all the timers
        var viewCounter = 0;
        $(document).on('scroll', function () {
            if ($('.timer').each(count).isOnScreen() && viewCounter < 2) {
                viewCounter++;
                console.log(viewCounter);
            }
        });
    }
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options, viewCounter);
    }
});

// check if element visible in viewport

$.fn.isOnScreen = function() {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

/* ===================================
    TESTIMONIAL OWL
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
            items: 2,

        },
        1000: {
            items: 3,
        }
    }
});

/* ===================================
    REVOLUTION SLIDER
====================================== */
$("#vertical-bullets").show().revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    navigation: {
        keyboardNavigation: "on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        bullets: {
            enable: true,
            hide_onmobile: true,
            hide_under: 769,
            style: "gardening",
            hide_onleave: false,
            direction: "vertical",
            h_align: "right",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
            space: 5,
            tmp: '<div class="tp-bullet-inner"></div><div class="tp-line"></div>'
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
        },
    },
    viewPort: {
        enable: true,
        outof: "pause",
        visible_area: "90%",
        presize: true
    },
    responsiveLevels: [4096, 1260, 778, 480],
    visibilityLevels: [4096, 1260, 778, 480],
    gridwidth: [1140, 1024, 750, 480],
    gridheight: [600, 500, 500, 350],
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
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 360,
    hideAllCaptionAtLilmit: 360,
    debugMode: false,
    fallbacks: {
        simplifyAll: "on",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
    }
});