

jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
        Loading Timeout
     ====================================== */
    $(".loader-area").fadeOut(800);

});


//************************* SCROLL FUNCTIONS***********************//

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
// bottom nav
if ($('.bottom-nav').length) {
    var $navheight = $('.bottom-nav').offset().top;
    $window.scroll(function () {
        if ($(this).scrollTop() > $navheight) {
            $('.bottom-nav').addClass("fixed-menu");
        } else {
            $('.bottom-nav').removeClass("fixed-menu");
        }

    });
}
//     //scroll to appear
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

//     //Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});



//***************** MENU AND CLOSE BUTTON OF NAVBAR WINDOW*********************//
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
    }, 800);
});
$('.outer-window ul li a').click(function () {
    $('.outer-window').removeClass('inner-window');
});



//*******************INITIALIZE FANCY BOX*************************//
$(document).ready(function() {
    $(".vimeo").fancybox({
        width: 740,
        height: 425,
        type: 'iframe',
        fitToView : false
    });
});



//******************PLAY AUDIO AND VIDEO************************//
$('video, audio').mediaelementplayer({
    // Do not forget to put a final slash (/)
    pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
    // this will allow the CDN to use Flash without restrictions
    // (by default, this is set as `sameDomain`)
    shimScriptAccess: 'always'
    // more configuration
});



/*************************CAUSES OWL CAROUSAL*********************/
$('.causes-owl').owlCarousel({
    loop: true,
    smartSpeed: 500,
    responsiveClass: true,
    nav:false,
    dots:false,
    autoplay: true,
    margin:0,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            margin: 30,
        },
        480: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});


//************************PROGRESS BAR IN CAUSES SECTION****************

$('.bar1 > div').each(function(){
    var width=$(this).data('width');
    $(this).animate({ width: width }, 2500);
    $(this).after( '<span class="perc">' + width + '</span>');
    $('.perc').delay(3000).fadeIn(1000);
});


//************************CUBE PORTFOLIO FOR GALLERY****************
(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);


//*************** DONATORS OWL SLIDER******************
$("#ourteam-slider").owlCarousel({
    items: 4,
    margin: 0,
    dots: false,
    nav: false,
    responsive: {
        1280: {
            items: 4,
        },
        768: {
            items: 3,
        },
        520: {
            items: 2,
        },
        0: {
            items: 1,
        },
    }
});



//*******************BLOG SECTION CAROUSAL***************
$('#blog-carousal').owlCarousel({
    items:3,
    loop:true,
    center:true,
    // margin:20,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


//****************REVOLUTION SLIDER********************//

var revapi2,
    tpj;
(function () {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad); else onLoad();

    function onLoad() {
        if (tpj === undefined) {
            tpj = jQuery;
            if ("off" == "on") tpj.noConflict();
        }
        if (tpj("#rev_slider_2_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_2_1");
        } else {
            revapi2 = tpj("#rev_slider_2_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "//localhost/reveditor/revslider/public/assets/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 7000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "on",
                        touchOnDesktop: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_onleave: true,
                        tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
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
                gridwidth: [1240, 1024, 768, 480],
                gridheight: [868, 768, 500, 350],
                lazyType: "none",
                scrolleffect: {
                    fade: "on",
                },
                parallax: {
                    type: "mouse",
                    origo: "enterpoint",
                    speed: 400,
                    speedbg: 0,
                    speedls: 0,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                },
                shadow: 0,
                spinner: " ",
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
        ; /* END OF revapi call */
    }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */