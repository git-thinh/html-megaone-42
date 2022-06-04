if ($(window).width() < 1020) {}

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1500);



/* ===================================
       Fixed Navbar 
   ====================================== */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 220) { // Set position from top to add class
        $('header').addClass('header-appear');
    } else {
        $('header').removeClass('header-appear');
    }
});


/* ===================================
       Navbar Scroll
   ====================================== */
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80
    });
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
    WOW
======================================*/

new WOW().init();

/* =====================================
         circular bars
 ====================================== */

$(".circular-wrap").appear(function () {
    $(".circle-1").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            color: ["#89980a"]
        },
    });
});

$(".circular-wrap").appear(function () {
    $(".circle-2").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            color: ["#dc3900"]
        },
    });
});

$(".circular-wrap").appear(function () {
    $(".circle-3").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            color: ["#89980a"]
        },
    });
});
