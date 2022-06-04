$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function(){
        $('.preloader').fadeOut();

        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });

    }, 1000);

});


jQuery(function ($) {


    "use strict";

    /* ===================================
        Side Menu
    ====================================== */

   $("#sidemenu_toggle").on("click", function () {
        $(".site-nav").toggleClass("active");
    }),$(".site-nav li a").on("click", function () {
        $(".site-nav").removeClass("active");
    });


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

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 3000)
        });
    });


    /* ===================================
      Owl Carousel
     ====================================== */

    //Testimonial Slider

    $("#owl-client").owlCarousel({
        items: 1,
        margin:10,
        loop: true,
        dots: false,
        nav: true,
        navContainer: "#client-nav",
        responsive: {
            991: {
                items: 2,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });

    $('.partners-slider').owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    /*============================================*
           Cube Portfolio
   * ============================================*/

    function portfolio(){

        $('#js-grid-mosaic-flat').cubeportfolio({
            layoutMode: 'mosaic',
            sortByDimension: true,
            mediaQueries: [ {
                width: 800,
                cols: 3,
            }, {
                width: 767,
                cols: 2,
            }, {
                width: 480,
                cols: 1,
            }],
            gapHorizontal: 15,
            gapVertical: 15,
            gridAdjustment: 'responsive',
            caption: 'zoom',

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
        });
    }

    $(document).ready(function() {

        setTimeout(function(){
            portfolio();
        }, 1000);

    });

});