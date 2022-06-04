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
//         owl carausal
// ==============================

$('.portfolio').owlCarousel({

    loop:true,
    margin:0,
    slideSpeed: 500,
    nav:false,
    responsive:{
        0:{
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            items:2
        },
        380:{
            items:2
        },
        450:{
            items:3
        },
        600:{
            items:3.5
        },
        1000:{
            items:5.5
        },
        1200:{
            items:5.5
        },
        1400:{
            items:5.5
        },
        1500:{
            items:5.5
        }
    }


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
// animation




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

/*===================================
 fixed broad navbar
 ======================================*/

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

//modal window


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
            count.prop('Counter', 8).animate({
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





//
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

});



/* ===================================
  Animated Cursor
====================================== */


function animatedCursor() {

    if ($(".aimated-cursor").length) {

        var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementsByClassName("cursor"),
            i = document.getElementsByClassName("cursor-loader");
        TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
            var n = window.pageYOffset || document.documentElement.scrollTop;
            e.x = t.pageX, e.y = t.pageY - n
        }), TweenLite.ticker.addEventListener("tick", function () {
            o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
        }),
            $(".animated-wrap").mouseenter(function (e) {
                TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                    scale: 1.5,
                    borderWidth: "1px",
                    opacity: .2
                }), TweenMax.to(i, .3, {
                    scale: 1.5,
                    borderWidth: "1px",
                    top: 1,
                    left: 1
                }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
            }),
            $(".animated-wrap").mouseleave(function (e) {
                TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                    scale: 1,
                    borderWidth: "2px",
                    opacity: 1
                }), TweenMax.to(i, .3, {
                    scale: 1,
                    borderWidth: "2px",
                    top: 0,
                    left: 0
                }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
            }),
            $(".animated-wrap").mousemove(function (e) {
                var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                    x: t.x,
                    y: t.y
                }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                    x: (w - u.width / 2) / u.width * x,
                    y: (f - u.height / 2 - m) / u.height * x,
                    ease: Power2.easeOut
                })
            }),
            $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                TweenMax.to(".cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
            }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
            TweenMax.to(".cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
        }),$(".link").mouseenter(function (e) {
            TweenMax.to(".cursor", .2, {
                borderWidth: "0px",
                scale: 3,
                backgroundColor: "rgba(255, 255, 255, 0.27)",
                opacity: .15
            })
        }),$(".link").mouseleave(function (e) {
            TweenMax.to("#cursor", .3, {
                borderWidth: "2px",
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0)",
                opacity: 1
            })
        })

    }

}

if ($(window).width() > 991) {
    setTimeout(function () {
        animatedCursor();
    }, 1000);
}
$('.aimated-cursor').addClass('magic');

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
$('.clients-sec .slider-social').mouseenter(function () {
    $('.aimated-cursor').removeClass('magic');
});
$('.clients-sec .slider-social').mouseleave(function () {
    $('.aimated-cursor').addClass('magic');
});
$('.contact-us-sec .slider-social').mouseenter(function () {
    $('.aimated-cursor').removeClass('magic');
});
$('.contact-us-sec .slider-social').mouseleave(function () {
    $('.aimated-cursor').addClass('magic');
});

// loading bars
$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
        width: $(this).attr("data-width")
    },2000)
});

// wow
new WOW().init();

/* =====================================
       Pricing Card
 ====================================== */

$('.pricing-sec .pricing-card').on('mouseover',function () {
    $('.pricing-sec .pricing-card:nth-child(2)').removeClass('active');
});
$('.pricing-sec .pricing-card').on('mouseleave',function () {
    $('.pricing-sec .pricing-card:nth-child(2)').addClass('active');
});



/* =====================================
       Media player
 ====================================== */

$('video, audio').mediaelementplayer({
    // Do not forget to put a final slash (/)
    pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
    // this will allow the CDN to use Flash without restrictions
    // (by default, this is set as `sameDomain`)
    shimScriptAccess: 'always'
    // more configuration
});

/* ====================================
      Stop wow
 ====================================== */

if($(window).width() < 780) {
    $('.wow').addClass('wow-removed').removeClass('wow');
} else {
    $('.wow-removed').addClass('wow').removeClass('wow-removed');
}

/* ====================================
     Parallax
 ====================================== */

//stop parallax on small devices
if($(window).width() < 780) {
    $('.parallax-slide').addClass("parallax-disable");
    $('.parallax-blog-slide').addClass("parallax-disable");
    $('.client-sec').addClass("parallax-dis");
} else {
    $('.parallax-slide').removeClass("parallax-disable");
    $('.parallax-blog-slide').removeClass("parallax-disable");
    $('.client-sec').removeClass("parallax-dis");
    $('.parallax-slide').parallaxie({
        speed: 0.5,
        offset: 10,
    });
    $('.parallax-blog-slide').parallaxie({
        speed: 0.5,
        offset: -130,
    });
}

/* =====================================
      navbar offset
 ====================================== */

$(".broad .nav-menu .nav-link").on("click", function (event) {
    event.preventDefault();
    off_set= 65;
    if(screen.width > 768){
        off_set = 140;
    }
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - off_set}, 100);
});
/* =====================================
      Parallax
 ====================================== */

$('.clients-sec').parallaxie({
    speed: 0.5,
    offset: -100,
});
