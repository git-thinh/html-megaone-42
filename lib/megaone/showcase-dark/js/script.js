// if ($(window).width() < 1020) {}
/*    =====================================
                   loader
     ====================================== */
$(window).on("load", function () {
    "use strict";
    $(".loader").fadeOut(800);
    $('.side-menu').removeClass('opacity-0');
});
// ==============================
// side nav open and close menu
// ==============================
function  my_click() {

    $('#my_tog').on("click", function () {
        // alert("with");
        $(".side_nav").addClass("expand_nav");
        $(".body_wrapper").addClass("shrink_body");
        $("#my_tog").addClass("close_nav");
        $("#my_tog").attr("id","close_nav");
        $(".overlay-body").addClass("show_body_overlay");
    });

    $('#close_nav').on("click", function () {
        $("#close_nav").removeClass("close_nav");
        // alert("without");
        $(".side_nav").removeClass("expand_nav");
        $(".body_wrapper").removeClass("shrink_body");
        $("#my_tog").removeClass("close_nav");
        $("#close_nav").attr("id","my_tog");
        $(".overlay-body").removeClass("show_body_overlay");
    });
}
// ==============================
//        broad nav
// ==============================
$('.my_nav_tog').click(function() {
    $('.broad').addClass('broad-nav');
    $('.broad').css({ opacity: "1" });
    $('.head-nav').hide();
    $('body').addClass('show-modal');
});
$('.btn-close').click(function() {
    $('.broad').css({ opacity: "0" });
    $('body').removeClass('show-modal');
    setTimeout(function() {$('.broad').removeClass('broad-nav')},100);
    // $('.close'). attr("visibility", "hidden");

});
$('.broad ul li a').click(function () {
    $('.broad').css({ opacity: "0" });
    $('body').removeClass('show-modal');
    setTimeout(function() {$('.broad').removeClass('broad-nav')},100);
});

$(window).on('scroll', function () {

    if($(window).width() <= 767){
        // alert("yes");
        if ($(this).scrollTop() > 300) {
            $('#home').addClass('fixed-top');
            $('#home').addClass('fix-top');
        }
        else {
            $('#home').removeClass('fixed-top');
            $('#home').removeClass('fix-top');
        }
    }else {
        $('#home').removeClass('fixed-top');
        $('#home').removeClass('fix-top');
    }
});

//COUNTER

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

$(".slide").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 0}, 1100);
});

$(".broad .nav-menu .nav-link").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 95}, 1100);
});

//onmousehover
$('.side-nav-menu ul li').each(function () {
    var count = $(this).children('[data-count]');
    $(this).mouseenter(function() {

        if(count.data('count')>3) {
            count.prop('Counter', 0).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function (now) {
                    count.text(Math.ceil(now));
                }
            });
        }else{
            count.prop('Counter', 7).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function (now) {
                    count.text(Math.ceil(now));
                }
            });
        }
    });
});

$('.overlay-body').on('click', function(e) {
    $("#close_nav").removeClass("close_nav");
    $(".side_nav").removeClass("expand_nav");
    $(".body_wrapper").removeClass("shrink_body");
    $("#my_tog").removeClass("close_nav");
    $("#close_nav").attr("id","my_tog");
    $(".overlay-body").removeClass('show_body_overlay');
});

$(window).on("load",function(){ "use strict";
    setTimeout(function () {
        $(".main-loader").fadeOut(800);
    },1000);

    if ($(window).width() > 767) {
        $(".side_nav").addClass("expand_nav");
        $(".body_wrapper").addClass("shrink_body");

    }
});

$('header .slider-social').mouseenter(function () {
    $('.aimated-cursor').removeClass('magic');
});
$('header .slider-social').mouseleave(function () {
    $('.aimated-cursor').addClass('magic');
});
$('.side-nav-menu .slider-social').mouseenter(function () {
    $('.aimated-cursor').removeClass('magic');
});
$('.side-nav-menu .slider-social').mouseleave(function () {
    $('.aimated-cursor').addClass('magic');
});
// $('.clients-sec .slider-social').mouseenter(function () {
//     $('.aimated-cursor').removeClass('magic');
// });
// $('.clients-sec .slider-social').mouseleave(function () {
//     $('.aimated-cursor').addClass('magic');
// });
// $('.contact-us-sec .slider-social').mouseenter(function () {
//     $('.aimated-cursor').removeClass('magic');
// });
// $('.contact-us-sec .slider-social').mouseleave(function () {
//     $('.aimated-cursor').addClass('magic');
// });

// loading bars
$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
    },2000)
});

$('.projects').owlCarousel({

    loop:true,
    margin:0,
    slideSpeed: 5000,
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

/* =====================================
       Pricing Card
 ====================================== */

$('.pricing-sec .pricing-card').on('mouseover',function () {
    $('.pricing-sec .pricing-card:nth-child(2)').removeClass('active');
});
$('.pricing-sec .pricing-card').on('mouseleave',function () {
    $('.pricing-sec .pricing-card:nth-child(2)').addClass('active');
});


$('.clients').owlCarousel({

    loop:true,
    margin:0,
    slideSpeed: 5000,
    slideTransition:'linear',
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    responsive:{
        0:{

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
//*********************SMOOTH SCROLL*****************************//

$("a.pagescroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 0
    }, 1200);
});
/* ====================================
      Stop wow
 ====================================== */

if($(window).width() < 780) {
    $('.wow').addClass('wow-removed').removeClass('wow');
} else {
    $('.wow-removed').addClass('wow').removeClass('wow-removed');
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