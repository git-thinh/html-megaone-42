// if ($(window).width() < 1020) {}

/* ===================================
      Loader
  ====================================== */

jQuery(window).on("load", function () {
    "use strict";
    /* ===================================
        Loading Timeout
     ====================================== */
    $("#loader-wrapper").fadeOut("slow");
    $('.side-menu').removeClass('hidden');
});
/* ===================================
      Contact Canvas
  ====================================== */

function dotCanvas(){
    var $blocks = $('[data-dots]');
    $blocks.each(function() {
        var $block = $(this);
        var block = $block[0];
        var $canvas = $("<canvas/>").appendTo($block);
        var canvas = $canvas[0];
        var width = $block.width();
        var height = $block.height();
        var ctx = canvas.getContext('2d');
        ctx.width = width;
        ctx.height = height;
        var devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var ratio = devicePixelRatio / backingStoreRatio;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        var mouseX = undefined;
        var mouseY = undefined;

        function Circle(x, y) {
            this.x = x;
            this.y = y;
            this.distance = 7;
            this.radians = 0;
            this.draw = function() {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(151, 151, 151, .28)';
                ctx.moveTo(this.x + 3, this.y);
                ctx.lineTo(this.x + 3, this.y + 6);
                ctx.moveTo(this.x, this.y + 3);
                ctx.lineTo(this.x + 6, this.y + 3);
                ctx.stroke();
            };
            this.update = function() {
                if (mouseX > -1) {
                    var k1 = mouseY - y;
                    var k2 = mouseX - x;
                    var tan = k1 / k2;
                    var yrad = Math.atan(tan);
                    if (mouseX < x) {
                        yrad = Math.PI - Math.atan(-tan);
                    }
                    this.x = x + Math.cos(yrad) * this.distance;
                    this.y = y + Math.sin(yrad) * this.distance;
                }
                this.draw();
            };
        };
        var circlesArray = [];
        var gutter = 35;
        var countW = Math.floor(width / gutter);
        var countH = Math.floor(height / gutter);
        var len = countW * countH;
        for (var i = 0; i < countH; i++) {
            for (var t = 0; t < countW; t++) {
                var x = gutter * t;
                var y = gutter * i;
                circlesArray.push(new Circle(x, y));
            }
        }
        var loop = function() {
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (var i = 0; i < circlesArray.length; i++) {
                circlesArray[i].update();
            }
        };
        document.addEventListener('mousemove', function(e) {
            var parentOffset = $(canvas).parent().offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
            mouseX = relX;
            mouseY = relY;
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (var i = 0; i < circlesArray.length; i++) {
                circlesArray[i].update();
            }
            loop();
        });
        loop();
    });
}
if ($(window).width() > 991) {
    dotCanvas();
}
/* ===================================
     Side Menu
 ====================================== */

if ($(".sidemenu_toggle").length) {
    $(".sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function(){
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}
/* ===================================
     nav scroll
 ====================================== */

jQuery(function ($) {
    "use strict";

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('.fixed-nav-on-scroll').removeClass('d-none');
        }
        else {
            $('.fixed-nav-on-scroll').addClass('d-none');
        }
    });
});

$(".scroll").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 0}, 1100);
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
/* ===================================
     Owl Carousel
    ====================================== */

$('.trainer').owlCarousel({
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
/* ===================================
       Cube Portfolio
   ====================================== */

$('#js-grid-mosaic-flat').cubeportfolio({
    filters: '#js-filters-mosaic-flat',
    layoutMode: 'mosaic',
    defaultFilter: '*',
    animationType: 'scaleSides',
    gapHorizontal: -1,
    gapVertical: -1,
    gridAdjustment: 'responsive',
    caption: 'zoom',
    displayType: 'fadeIn',
    displayTypeSpeed: 100,
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 4
    }, {
        width: 1100,
        cols: 4
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
    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '',

    plugins: {
        loadMore: {
            element: '#js-loadMore-mosaic-flat',
            action: 'click',
            loadItems: 3,
        }
    },
});
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

/* ------ Revolution Slider ------ */

$("#banner-main").show().revolution({
    sliderType: "standard",
    sliderLayout: "fullscreen",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        bullets: {
            style: "uranus",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 767,
            hide_over: 9999,
            tmp: '<span class="tp-bullet-inner"></span>',
            direction: "vertical",
            space: 10,
            h_align: "right",
            v_align: "center",
            h_offset: 40,
            v_offset: 0
        },
        arrows: {
            enable: false,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
                h_align: "left",
                v_align: "center",
                h_offset: 20,
                v_offset: 30,
            },
            right: {
                h_align: "right",
                v_align: "center",
                h_offset: 20,
                v_offset: 30
            },
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
        }
    },
    viewPort: {
        enable: true,
        outof: "pause",
        visible_area: "90%"
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1140, 1024, 768, 480],
    gridheight: [600, 500, 500, 350],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 9000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
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
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
    }
});
/* ===================================
    Testimonial Carousel
====================================== */

var owl5 = $('.owl-testimonial');
owl5.owlCarousel({
    items:1,
    dots:true,
    loop:true,
    autoplay: false,
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

$(".owl-split").owlCarousel({
    items: 1,
    margin: 0,
    dots: false,
    nav: false,
    loop: true,
    autoplay: true,
    smartSpeed:500,
    navSpeed: true,
    autoplayHoverPause:true,
    responsiveClass:true
});
//*********************SMOOTH SCROLL*****************************//

$("a.pagescroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
});
/* ===================================
       scroll to top
   ====================================== */

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-top-arrow').fadeIn('slow');
    }else {
        $('.scroll-top-arrow').fadeOut('slow');
    }
});

$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});