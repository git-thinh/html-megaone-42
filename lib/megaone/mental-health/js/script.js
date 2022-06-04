if ($(window).width() < 1020) {}

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
        $('.loader').fadeOut();
    }, 1000);


});


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
    if ($(this).scrollTop() > 220) { 
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
        scrollTop: $(this.hash).offset().top - 75
    });
});

    
/*  ====================================
                da-thumb
    ====================================*/

    $('.da-thumbs > li ').each( function() { $(this).hoverdir(); } );

/* ===================================
       Counter 
   ====================================== */
jQuery(window).scroll(startCounter);

function startCounter() {
    var hT = jQuery('.num_counter').offset().top,
        hH = jQuery('.num_counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.count-number').each(function () {
            var $this = jQuery(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + ' ');
                }
            });
        });
    }
}

    /* ===================================
          Fancy Box
          ====================================== */
    $('[data-fancybox]').fancybox({

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
     search popup
   =================================== */

$('.open_search').on('click', function (event) {
    event.stopPropagation();
    $('.search_block').toggleClass('visible');
    $('.search_block .search_input').focus();
    $('.search-overlay').addClass('overlayer');
    $('#sidemenu_toggle').fadeOut(2);
});

$('body').on('click', function () {
    $('.search_block').removeClass('visible');
    $('.search-overlay').removeClass('overlayer');
    $('#sidemenu_toggle').fadeIn(2);
});

$('.search_box').on('click', function (event) {
    event.stopPropagation();
});

$('.search_input').on('keyup', function (event) {
    if ($(this).val() !== '') {
        $(this).addClass('typing');
    } else {
        $(this).removeClass('typing');
    }
});




/* ===================================
       Team-Carousel
  ====================================== */
$('.team-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

/* ===================================
       Reviews-Carousel
  ====================================== */
$('.blog-reviews-carousel').owlCarousel({
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






/* =====================================
   Portfolio Filter
   ======================================= */

/*Portfolio Two*/

var $gallery = $('.gallery').isotope({
    // options
    itemSelector: '.items'
});

// filter items on button click
$('.filtering').on('click', 'span', function () {

    var filterValue = $(this).attr('data-filter');
    $gallery.isotope({filter: filterValue});
    $(this).addClass('active').siblings().removeClass('active');

});


setTimeout(function (){
    $('.filtering .active').click();
}, 1500);



/* ===================================
    Carousel icons
======================================*/
   
var owl = $('.blog-reviews-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
});

/* ===================================
    WOW
======================================*/

new WOW().init();
