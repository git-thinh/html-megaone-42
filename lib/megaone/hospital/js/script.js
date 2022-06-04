/* =====================================
               loader
====================================== */
$(window).on("load",function(){ "use strict";
    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);
});

jQuery(function ($) {
    "use strict";

    /*===================================
     fixed navbar
     ======================================*/
    if ($(window).width() > 991) {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('header .lower-nav').addClass('fixed-top');
                $('header .lower-nav').addClass('fix-top');
                $('header .close-nav').addClass('fixed-close-btn');
            } else {
                $('header .lower-nav').removeClass('fixed-top');
                $('header .lower-nav').removeClass('fix-top');
                $('header .close-nav').removeClass('fixed-close-btn');
            }
        });
    } else {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('header .upper-nav').addClass('fixed-top');
                $('header .upper-nav').addClass('fix-top');
            } else {
                $('header .upper-nav').removeClass('fixed-top');
                $('header .upper-nav').removeClass('fix-top');
            }
        });
    }

    /* =====================================
          Broad nav
     ====================================== */
    $(".close_side_menu").on("click", function () {
        $("header .broad").removeClass('start-animation');
        $("header .broad").addClass('end-animation');
        $(".close_side_menu").removeClass('d-inline');
        setTimeout(function () {
            $("header .broad").removeClass('broad-nav');
            $("header .broad").removeClass('broad-rem');
        }, 800);
    });
    $(".toggle-btn").on("click", function () {
        $("header .broad").removeClass('end-animation');
        $("header .broad").addClass('broad-nav');
        $("header .broad").addClass('start-animation');
        $(".close_side_menu").addClass('d-inline');
    });
    $(".close-nav").on("click", function () {
        $("header .broad").removeClass('start-animation');
        $("header .broad").addClass('end-animation');
        $(".close_side_menu").removeClass('d-inline');
        setTimeout(function () {
            $("header .broad").removeClass('broad-nav');
            $("header .broad").removeClass('broad-rem');
        }, 800);
    });
    $(".broad .nav-link").on("click", function () {
        $("header .broad").removeClass('start-animation');
        $("header .broad").addClass('end-animation');
        $(".close_side_menu").removeClass('d-inline');
        setTimeout(function () {
            $("header .broad").removeClass('broad-nav');
            $("header .broad").removeClass('broad-rem');
        }, 800);
    });

    /* =====================================
          Navbar offset
     ====================================== */
    $(".navbar-nav .nav-item .nav-link.scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 800);
        if (screen.width > 768) {
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 40
            }, 800);
        }else{
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 10
            }, 800);
        }
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });
    // close-side-nav in index 5
    $('.inner-body .left-body-menu .close-left-nav').on('click',function () {
        $('.inner-body .left-body-menu').addClass('close-modal-nav');
        $('.inner-body .right-body-content').addClass('expand-main-wrapper');
        $('.inner-body .right-body-content .toggle-btn-expand').addClass('d-block');
    });
    // open-side-nav in index 5
    $('.inner-body .right-body-content .toggle-btn-expand').on('click',function () {
        $('.inner-body .left-body-menu').removeClass('close-modal-nav');
        $('.inner-body .right-body-content').removeClass('expand-main-wrapper');
        $('.inner-body .right-body-content .toggle-btn-expand').removeClass('d-block');
    });

    // loading bars
    $(".bar").each(function () {
        $(this).find(".bar-inner").animate({
            width: $(this).attr("data-width")
        }, 2000)
    });

    // carousal team
    $('.team').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        responsive: {
            0: {
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
        }

    });
    $('.customNextBtn').click(function () {
        var owl = $('.team');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function () {
        var owl = $('.team');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

    /*====================================
            da-thumb
    *====================================*/
    $('.da-thumbs > li ').each( function() { $(this).hoverdir(); } );

    /* =====================================
           Portfolio Filter
    ======================================= */

    var $gallery = $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({filter: filterValue});
        $(this).addClass('active').siblings().removeClass('active');
    });

    setTimeout(function (){
        $('.filtering .active').click();
    }, 1500);

    /* ===================================
        Owl Carousel
    ====================================== */

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 1; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        // autoWidth:true,
        // singleItem:true,
        items:1,
        slideSpeed : 3000,
        nav: false,
        dots: false,
        loop: true,
        margin:0,
        autoplay:false,
        transitionStyle:"fade",
        responsiveRefreshRate : 200,
        // breakpoint from 480 up
        0 : {
            items:1,
        },
        480 : {
            items:1,
        },
        // breakpoint from 768 up
        800 : {
            items:1,
        }
        // navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(1).addClass("current");
        })
        .owlCarousel({
            items : slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed : 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate : 100,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 3
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);

        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

});





