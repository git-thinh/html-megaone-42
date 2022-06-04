// if ($(window).width() < 1020) {}
/* ===================================
      Loader
  ====================================== */
jQuery(window).on("load", function () {
    "use strict";
    /* ===================================
        Loading Timeout
     ====================================== */
    $(".loader-bg").fadeOut("slow");
    $('.side-menu').removeClass('hidden');
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

/* ===================================
            Scroll
   ====================================== */
jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260 ) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {

            if ($(window).width() > 768) {
                $('header').removeClass('header-appear');
            }
        }
    });


});

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 70
    });
});

/* ===================================
   About Box Hover Setting
   ====================================== */
$(".about-box").on("mouseenter", function () {
    $(".about-box.active").addClass("about-box-green");
})

$(".about-box").on("mouseleave", function () {
    $(".about-box.active").removeClass("about-box-green");
})

/* ===================================
     Side Menu Animation
====================================== */
$(".side-nav .navbar-nav .nav-item .nav-link").on("mouseenter", function () {
    var value = $(this).text();
    // alert(value);
    $("#mega-title .inner-mega-title").addClass('animation-effect').text(value);
});

$(".side-nav .navbar-nav .nav-item .nav-link").on("mouseleave", function () {

    $("#mega-title .inner-mega-title").removeClass('animation-effect');
});

$(".side-nav .navbar-nav .nav-item .nav-link").on("click", function () {
    $('body').addClass('cursor-change');

    setTimeout(function(){
        $('body').removeClass('cursor-change');
    }, 2000);
});

/* ===================================
        Counters
====================================== */
$(".company-stats-section").appear(function () {
    $('.stats-number-inner span').each(function () {
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

/*============================================*
        Cube Portfolio
* ============================================*/
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

/*=====================================
       Reviews Carousel
   ======================================*/

$('.testimonial').owlCarousel({
    loop: true,
    margin: 20,
    slideSpeed: 2000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
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

if ($(window).width() < 770) { 

        $('header').addClass('header-appear');


}