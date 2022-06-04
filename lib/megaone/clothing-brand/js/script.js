if ($(window).width() < 1020) {}

    /* ===================================
       Loader
   ====================================== */
$(window).on('load', function () {
    $(".loader").fadeOut();
    $(".pre-loader").delay(500).fadeOut("slow");
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
/* ===================================
       Scroll
   ====================================== */

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80
    });
});

$(".scroll1").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 100
    });
});

/* =====================================
    Menu Hide and Show
   ====================================== */

 

$(".menu").click( function(event){
    event.preventDefault();
    if ( $(this).hasClass("isDown") ) {
        $(".navbar-large").stop().animate({left:"100%"}, 500);
    } else {
        $(".navbar-large").stop().animate({left:"0"}, 500);
    }
    $(this).toggleClass("isDown");
    return false;
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

 /* =====================================
          Parallax
       ====================================== */
  
    if ($(window).width() > 991) {
        $('#home-banner').mousemove(function(e) {
            $('[data-depth]').each(function () {
                var depth = $(this).data('depth');
                var amountMovedX = (e.pageX * -depth/4);
                var amountMovedY = (e.pageY * -depth/4);
                $(this).css({
                    'transform':'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
                });
            });
        });
    }


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
       Review-Carousel
  ====================================== */
$('.review-carousel').owlCarousel({
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
       Banner-Carousel
  ====================================== */
$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: false,
    nav: false,
    dots: false,
    mouseDrag: true,
    animateOut: 'slideOutLeft',
    animateIn: 'slideIn',
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
       Products-Carousel
  ====================================== */
$('.products-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: false,
    dots: false,
    mouseDrag: true,
    animateOut: 'slideOutLeft',
    animateIn: 'slideIn',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})


/*===================================
     //Fancy Box
======================================*/


$('[data-fancybox]').fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    buttons: [
        'slideShow',
        'fullScreen',
        'thumbs',
        'share',
        // 'download',
        'zoom',
        'close'
    ],
});

/*===================================
     Swiper Sync Slider
  ======================================*/

if ($("#gallery").length) {
    var galleryTop = new Swiper('#gallery', {
        effect: 'fade',
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        initialSlide: 0,
        centeredSlides: true,
        loopAdditionalSlides: 5,
        touchRatio: 0.2,

    });

    var galleryThumbs = new Swiper('#thumbs', {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        initialSlide: 0,
        centeredSlides: true,
        loopAdditionalSlides: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}


/* ===================================
    WOW
======================================*/

new WOW().init();

/* ===================================
    Banner icons
======================================*/
   
var owl = $('.banner-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
});