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
    }), $(".side-nav .navbar-nav").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}

/* ===================================
       scroll
====================================== */
jQuery(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
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
    Counter
====================================== */
$('.count').each(function () {
    $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

/* ===================================
       Owl Carousel
       ====================================== */
/* Team Classic */
$(".team-classic.owl-team").owlCarousel({
    items: 3,
    margin: 30,
    dots: true,
    nav: false,
    loop:true,
    autoplay: true,
    smartSpeed:500,
    navSpeed: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
        992: {
            items: 3
        },
        600: {
            items: 2
        },
        320: {
            items: 1
        }
    }
});

/* =====================================
    Portfolio Carousel
====================================== */
$('.projects').owlCarousel({
    loop:true,
    margin:0,
    slideSpeed: 3000,
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
/* ===================================
    Testimonial
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

/* =====================================
     blog Active
===================================== */
$('.card').on('mouseenter' , function(){
    $('.card').removeClass('active');
    $(this).addClass('active');
}).on('mouseleave' , function(){
    $('.card').removeClass('active');
    $('.card.selected').addClass('active');
});


/* =====================================
     About Active
===================================== */
$('.about-media').on('mouseenter' , function(){
    $('.about-media').removeClass('active');
    $(this).addClass('active');
}).on('mouseleave' , function(){
    $('.about-media').removeClass('active');
    $('.about-media.selected').addClass('active');
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
