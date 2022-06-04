

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

//***************** MENU AND CLOSE BUTTON OF NAVBAR WINDOW*********************//
$('.my-tog-btn').on("click", function () {
    // alert();
    $('.outer-window').addClass('inner-window');
});
$('.close-outerwindow').on("click", function () {
    $('.outer-window').removeClass('inner-window');
});
$('.outer-window ul li a').click(function () {
    $('.outer-window').removeClass('inner-window');
});

//************************* SCROLL FUNCTIONS***********************//
jQuery(function ($) {

    // Navbar LARGE SCREEN STICK Function
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


    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1200);
    });

});