// if ($(window).width() < 1020) {}
$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1000);
});

/* ===================================
        Header appear
====================================== */
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
     Nav Scroll
====================================== */
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80}, 1200);
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
        Counters
====================================== */
$('.count').each(function () {
    $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

//*********************SMOOTH SCROLL*****************************//
$("a.pagescroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
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
/*Testimonials*/
$("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    mouseDrag: true,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: {
        980: {
            items: 1,
        },
        600: {
            items: 1,
        },
        320: {
            items: 1,
        },
    }
});

/*Our Team*/
$("#ourteam-slider").owlCarousel({
    items: 4,
    margin: 0,
    dots: false,
    nav: false,
    responsive: {
        1280: {
            items: 4,
        },
        768: {
            items: 3,
        },
        520: {
            items: 2,
        },
        0: {
            items: 1,
        },
    }
});
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
/*===================================
        Contact
====================================== */
$("#submit_btn").on(' click', function () {
    let userName = $('input[name=userName]').val();
    let userEmail = $('input[name=email]').val();
    let contact = $('input[name=contact]').val();

    //simple validation at client's end
    let postData, output;
    let proceed = true;
    if (userName === "") {
        proceed = false;
    }
    if (userEmail === "") {
        proceed = false;
    }

    if (contact === "") {
        proceed = false;
    }
    //everything looks good! proceed...
    if (proceed) {

        //data to be sent to server
        postData = {
            'userName': userName,
            'userEmail': userEmail,
            'userMessage': contact
        };

        //Ajax post data to server
        $.post('contact.php', postData, function (response) {
            //load json data from server and output message
            if (response.type === 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
                //reset values in all input fields
                $('.getin_form input').val('');
                $('.getin_form textarea').val('');

            }

            $("#result").slideUp("fast").html(output).slideDown();
        }, 'json');

    } else {
        output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Please provide the missing fields.</div>';
        $("#result").slideUp("fast").html(output).slideDown();
    }

});

