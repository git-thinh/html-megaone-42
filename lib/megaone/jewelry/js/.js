jQuery(window).on("load", function () {
    "use strict";

    /*  ===================================
        Loading Timeout
     ====================================== */
    $(".loader-area").fadeOut(800);

});




//************************* SCROLL FUNCTIONS***********************//

// Navbar Scroll Function
var $window = $(window);
$window.scroll(function () {
    var $scroll = $window.scrollTop();
    var $navbar = $(".navbar");
    if (!$navbar.hasClass("sticky-bottom")) {
        if ($scroll > 250) {
            $navbar.addClass("fixed-menu");
        } else {
            $navbar.removeClass("fixed-menu");
        }
    }
});
// bottom nav
if ($('.bottom-nav').length) {
    var $navheight = $('.bottom-nav').offset().top;
    $window.scroll(function () {
        if ($(this).scrollTop() > $navheight) {
            $('.bottom-nav').addClass("fixed-menu");
        } else {
            $('.bottom-nav').removeClass("fixed-menu");
        }

    });
}
//     //scroll to appear
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

//     //Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});



//***************** MENU AND CLOSE BUTTON OF NAVBAR WINDOW*********************//
$('.my-tog-btn').on("click", function () {
    $('.outer-window').removeClass('end-anm');
    $('.outer-window').addClass('inner-window');
    $('.outer-window').addClass('start-anm');

});
$('.close-outerwindow').on("click", function () {
    $('.outer-window').removeClass('start-anm');
    $('.outer-window').addClass('end-anm');
    setTimeout(function () {
        $('.outer-window').removeClass('inner-window');
    }, 800);
});
$('.outer-window ul li a').click(function () {
    $('.outer-window').removeClass('inner-window');
});


//******************GALLERY POERFLIO************************//
$("#flat-gallery").cubeportfolio({
    layoutMode: 'grid',
    filters: '#flat-filters',
    defaultFilter: '.top',
    animationType: "quicksand",
    gapHorizontal: 35,
    gapVertical: 25,
    gridAdjustment: "responsive",
    mediaQueries: [{
        width: 1500,
        cols: 4
    }, {
        width: 1100,
        cols: 4
    }, {
        width: 768,
        cols: 3
    }, {
        width: 480,
        cols: 2
    },{
        width: 320,
        cols: 2
    }],
});

//*******************BLOG SECTION CAROUSAL***************
$('#blog-carousal').owlCarousel({
    items:3,
    loop:true,
    center:true,
    // margin:20,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});



/* ===================================
              search popup
   =================================== */

$('.open_search').on('click', function(event){

    event.stopPropagation();
    $('.dropdown-menu').addClass('hidden');
    $('.search_block').toggleClass('visible');
    $('.search_block .search_input').focus();
    $('.search-overlay').addClass('overlayer');
    $('#sidemenu_toggle').fadeOut(2);
});

$('body').on('click', function(){
    $('.dropdown-menu').removeClass('hidden');
    $('.search_block').removeClass('visible');
    $('.search-overlay').removeClass('overlayer');
    $('#sidemenu_toggle').fadeIn(2);
});

$('.search_box').on('click', function(event){
    event.stopPropagation();
});

$('.search_input').on('keyup', function(event){
    if($(this).val() !== ''){
        $(this).addClass('typing');
    } else {
        $(this).removeClass('typing');
    }
});

$(document).on('keyup',function(e){
    if(e.keyCode===27){
        $('.search_block').removeClass('visible');
        $('.search-overlay').removeClass('overlayer');
        $('#sidemenu_toggle').fadeIn(2);
    }
});


/*===================================
             Price Range
   ======================================*/

if ($("#slider-range").length) {
    var marginSlider = document.getElementById('slider-range');

    noUiSlider.create(marginSlider, {
        start: [0, 500],
        margin: 30,
        step: 1,
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        },

    });

    var marginMin = document.getElementById('min-p'),
        marginMax = document.getElementById('max-p');

    marginSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            var str = values[handle]
            var res = str.split(".");
            marginMax.innerHTML = "$" + res[0];
        } else {
            var str = values[handle]
            var res = str.split(".");
            marginMin.innerHTML = "$" + res[0] + " - ";
        }
    });
}


//******************PLAY AUDIO AND VIDEO************************//
$('video, audio').mediaelementplayer({
    // Do not forget to put a final slash (/)
    pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
    // this will allow the CDN to use Flash without restrictions
    // (by default, this is set as `sameDomain`)
    shimScriptAccess: 'always'
    // more configuration
});