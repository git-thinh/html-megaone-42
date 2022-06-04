if ($(window).width() < 1020) {}

/* ===================================
   Fixed Navbar
====================================== */

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/* ===================================
   Loader
====================================== */

$(window).on("load", function () {

    "use strict";

/* ===================================
    Loading Timeout
====================================== */

$('.side-menu').removeClass('hidden');
    setTimeout(function () {
        $('.preloader').fadeOut();
    }, 1000);
});

/* ===================================
    Side Menu
====================================== */

if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-menu .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}

/* ===================================
    Scroll to Appear
======================================*/

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 70
    });
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
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    plugins: {
        loadMore: {
            element: '#js-loadMore-mosaic-flat',
            action: 'click',
            loadItems: 3,
        }
    },
})

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
   Testimonial-Carousel
====================================== */
$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
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
})

/* ===================================
   Blog-Carousel
====================================== */

$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
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
})

$('.blog-right-arr').click(function () {
    var owl = $('.blog-carousel');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
});
$('.blog-left-arr').click(function () {
    var owl = $('.blog-carousel');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel');
});

/* ===================================
    WOW Animation
======================================*/

new WOW().init();