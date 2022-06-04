/* ===================================
    INITIALIZE FANCY BOX
====================================== */

$(document).ready(function() {
    $(".fancybox").fancybox();
});

/* ===================================
    TEAM OWL CAROUSEL
====================================== */

var owl5 = $('.owl-team');
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

/* ===================================
    START COUNTERS WHEN COUNTER SECTION SCROLL ON SCREEN
====================================== */

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
    SCROLL FUNCTIONS
====================================== */

jQuery(function ($) {

    // Navbar Scroll Function
    var $window = $(window);
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".navbar");
        if (!$navbar.hasClass("sticky-bottom")) {
            if ($scroll > 250) {
                $navbar.addClass("fixed-menu");
            } else {
                $navbar.removeClass("fixed-menu");
            }
        }
    });
});

if ($(window).width() <= 991) {
    jQuery(function ($) {
        "use strict";
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 250) { // Set position from top to add class
                $('header').addClass('header-appear');
            }
            else {
                $('header').removeClass('header-appear');
            }
        });
    });
}

/* ===================================
    INITIALIZE WOW
====================================== */

    new WOW().init();

/* ===================================
    LOADER
====================================== */

    $(window).on("load", function () {
        "use strict";
        setTimeout(function () {
            $(".loader1").fadeOut(800);
        }, 1000);
    });

/* ===================================
    REVOLUTION SLIDER
====================================== */

var revapi2,
    tpj;
(function() {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();

    function onLoad() {
        if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
        if(tpj("#rev_slider_2_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_2_1");
        }else{
            revapi2 = tpj("#rev_slider_2_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//localhost/reveditor/revslider/public/assets/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:7000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"on",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_onleave:true,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    }
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,768,480],
                gridheight:[868,768,500,350],
                lazyType:"none",
                scrolleffect: {
                    fade:"on",
                },
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:" ",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }; /* END OF revapi call */
    }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */

/* ===================================
    MENU AND CLOSE BUTTON OF NAV-BAR WINDOW
====================================== */

    $('.my-tog-btn').on("click", function () {
        $('.outer-window').removeClass('end-anm');
        $('.outer-window').addClass('inner-window');
        $('.outer-window').addClass('start-anm');

    });
    $('.close-outerwindow').on("click", function () {
        $('.outer-window').removeClass('start-anm');
        $('.outer-window').addClass('end-anm');
        setTimeout(function () {
            $('.outer-window').removeClass('inner-window');
        },800);
    });
    $('.outer-window ul li a').click(function () {
        $('.outer-window').removeClass('inner-window');
    });

/* ===================================
    CLIENT SECTION CAROUSEL
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
            dots: false,
            nav: false
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }
});

/* ===================================
    GALLERY PORTFOLIO
====================================== */

$("#flat-gallery").cubeportfolio({
    layoutMode: 'grid',
    filters: '#flat-filters',
    defaultFilter: '*',
    animationType: "quicksand",
    gapHorizontal: 25,
    gapVertical: 25,
    gridAdjustment: "responsive",
    mediaQueries: [{
        width: 1500,
        cols: 4
    }, {
        width: 1100,
        cols: 4
    }, {
        width: 768,
        cols: 3
    }, {
        width: 480,
        cols: 2
    },{
        width: 320,
        cols: 2
    }],
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
