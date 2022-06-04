$(window).on("load", function () {

    "use strict";

    //Clear URL On Page Refresh
    var loc = window.location.href,
        index = loc.indexOf('#');

    if (index > 0) {
        window.location = loc.substring(0, index);
    }

/* ===================================
    Loading Timeout
====================================== */
$('.side-menu').removeClass('hidden');
    setTimeout(function(){
        $('.preloader').fadeToggle();
    }, 1000);
    $('.contact-page-section').hide();
    $('.main-page-section').show();
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
     Side Menu Open & Close
====================================== */
function  my_click() {
    $('#my_tog').on("click", function () {
        $(".side_nav").removeClass("expand_nav");
        $("#my_tog").addClass("close_nav");
        $("#my_tog").attr("id","close_nav");
    });
    $('#close_nav').on("click", function () {
        $("#close_nav").removeClass("close_nav");
        $(".side_nav").addClass("expand_nav");
        $("#my_tog").removeClass("close_nav");
        $("#close_nav").attr("id","my_tog");
    });
}

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

$('.nav-menu li a').on("click", function () {
    $('.nav-menu .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
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

/* ===================================
        Swiper Integration
====================================== */
if($(window).width() > 1200) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 5,
        speed: 800,
        effect: 'fade',
        loop: true,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,},
    });
}else {
    $('.swiper-wrapper').addClass('row');
}

/* ===================================
    Page Transition
====================================== */
var $loader = document.querySelector('.loader')
window.onload = function() {
    $loader.classList.remove('loader--active')
};

$('.link').click(function (){
    $loader.classList.add('loader--active')
    window.setTimeout(function () {
    $loader.classList.remove('loader--active')
    }, 1500)
})

//Click event to scroll to top

if($(window).width() <= 767){
    $(".link").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 0
        }, 1200);
    });
}

/* ===================================
    Contact Btn Clicking
====================================== */
    // Prevent From Going to Next Section
$(".nav-link").click(function(event){
    event.preventDefault();
    var $this = $(this);
    setTimeout(function(){window.location = $this.attr('href'); }, 1600);
});

// Contact Page
$('.contact-page-btn').on('click',function () {
    $('.main-page-section').hide(500);
    $('.contact-page-section').show(500);
    $('body').css("overflow", "auto");
    $(".side_nav").removeClass("expand_nav");
    $('.contact-section').addClass('height');
    $(".menu-line").hide(500);
    $("#my_tog").addClass("close_nav");
    $("#my_tog").attr("id","close_nav");
});

$('.nav-link').on('click',function () {
    $(".menu-line").show(500);
    $('.main-page-section').show(500);
    $('.contact-page-section').hide(500);
    $('body').css("overflow", "hidden");
    $('.contact-section').removeClass('height');
});

// Broad Nav Clicking
if($(window).width() < 1200) {
    $(".second, .third, .fourth, .fifth, .sixth, .seventh").addClass('hidden');

    $('.nav-link:nth-child(1), .nav-menu .nav-item:nth-child(1) .nav-link').click(function () {
        $('.second, .third, .fourth, .fifth, .sixth, .seventh').hide();
        $('.first').show();
    });

    $('.nav-link:nth-child(2), .nav-menu .nav-item:nth-child(2) .nav-link').click(function () {
        $('.first .third, .fourth, .fifth, .sixth, .seventh').hide();
        $('.second').show()
        $('.first').hide()
    });

    $('.nav-link:nth-child(3), .nav-menu .nav-item:nth-child(3) .nav-link').click(function () {
        $('.first .second, .fourth, .fifth, .sixth, .seventh').hide();
        $('.third').show();
        $('.first').hide()
    });

    $('.nav-link:nth-child(4), .nav-menu .nav-item:nth-child(4) .nav-link').click(function () {
        $('.first .second, .third, .fifth, .sixth, .seventh').hide();
        $('.fourth').show();
        $('.first').hide()
    });

    $('.nav-link:nth-child(5), .nav-menu .nav-item:nth-child(5) .nav-link').click(function () {
        $('.first .second, .third, .fourth, .sixth, .seventh').hide();
        $('.fifth').show();
        $('.first').hide()
    });

    $('.nav-link:nth-child(6), .nav-menu .nav-item:nth-child(6) .nav-link').click(function () {
        $('.first .second, .third, .fourth, .fifth, .seventh').hide();
        $('.sixth').show();
        $('.first').hide()
    });

    $('.nav-link:nth-child(7), .nav-menu .nav-item:nth-child(7) .nav-link').click(function () {
        $('.second, .third, .fourth, .fifth, .sixth').hide();
        $('.seventh').show();
        $('.first').hide()
    });
}