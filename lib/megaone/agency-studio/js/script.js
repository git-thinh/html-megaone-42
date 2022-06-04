"use strict";


/* page loader*/
$(window).on('load', function () {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
});
var $window = $(window);
var windowsize = $(window).width();



/*------ MENU Fixed ------*/
if ($("nav.navbar").hasClass("static-nav")) {
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".static-nav");
        if ($scroll > 200) {
            $navbar.addClass("fixedmenu");
        } else {
            $navbar.removeClass("fixedmenu");
        }
    });
}

/*bottom menu fix*/
if ($("nav.navbar").hasClass("fixed-bottom")) {
    var navHeight = $(".fixed-bottom").offset().top;
    $window.scroll(function () {
        if ($window.scrollTop() > navHeight) {
            $('.fixed-bottom').addClass('fixedmenu');
        } else {
            $('.fixed-bottom').removeClass('fixedmenu');
        }
    });
}

/* ------- Smooth scroll ------- */
$("a.pagescroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
});
/*hide menu on mobile click*/
$(".navbar-nav>li>a").on("click", function(){
    $(".navbar-collapse").collapse("hide");
});

/*----- Menu On click -----*/
if ($("#sidemenu_toggle").length) {
    $("body").addClass("pushwrap");
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}

if($(".just-sidemenu").length){
    var anchor_point = $(".rotating-words").height();
    var side_toggle = $(".just-sidemenu #sidemenu_toggle");
    side_toggle.addClass("toggle_white");
    $window.on("scroll", function () {
        if ($window.scrollTop() >= anchor_point) {
            side_toggle.removeClass("toggle_white");
        } else {
            side_toggle.addClass("toggle_white");
        }
    });
}


// Team Slider
var swiper = new Swiper('.team_slider', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }

});




/* Initializing Particles Plugin */

if ($("body").hasClass("particles_special_id")) {
    window.onload = function() {
        Particles.init({
            selector: '.particles_bg',
            color: '#ffffff',
            connectParticles: true,
            sizeVariations: 7,
            maxParticles: 140,
        });
    };
}

if ($("body").hasClass("404-body-style")){
    var tpj=jQuery;
    var revapi16;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_16_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_16_1");
        }else{
            revapi16 = tpj("#rev_slider_16_1").show().revolution({
                sliderType:"hero",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                particles: {startSlide: "first", endSlide: "last", zIndex: "8",
                    particles: {
                        number: {value: 200}, color: {value: "#ffffff"},
                        shape: {
                            type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
                            image: {src: ""}
                        },
                        opacity: {value: 1, random: true, min: 0.5, anim: {enable: true, speed: 1, opacity_min: 0, sync: false}},
                        size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 10, size_min: 1, sync: false}},
                        line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
                        move: {enable: true, speed: 1, direction: "none", random: false, min_speed: 1, straight: true, out_mode: "out"}},
                    interactivity: {
                        events: {onhover: {enable: true, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
                        modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 0, opacity: 1}, repulse: {distance: 200}}
                    }
                },
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,4,6,4,5,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                }
            });
        }

        RsParticlesAddOn(revapi16);
    });	/*ready*/
}


$("[data-fancybox]").fancybox({
    // Options will go here
});

//Contact Us
$("#submit_btn").click(function() {
    //get input field values
    //alert("hello");
    $('#submit_handle').click();
    var user_name = $('input[name=name]').val();
    var user_email = $('input[name=email]').val();
    //var user_subject      = $('input[name=subject]').val();
    var user_message = $('textarea[name=message]').val();

    //simple validation at client's end
    var post_data, output;
    var proceed = true;
    if (user_name == "") {
        proceed = false;
    }
    if (user_email == "") {
        proceed = false;
    }

    if (user_message == "") {
        proceed = false;
    }

    //everything looks good! proceed...
    if (proceed) {
        //data to be sent to server
        post_data = { 'userName': user_name, 'userEmail': user_email, 'userMessage': user_message };

        //Ajax post data to server
        $.post('contact.php', post_data, function(response) {

            //load json data from server and output message
            if (response.type == 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                //reset values in all input fields
                $('.form_class input').val('');
                $('.form_class textarea').val('');
            }

            $("#result").hide().html(output).slideDown();
        }, 'json');

    }
});

//reset previously set border colors and hide all message on .keyup()
$(".form_class input, .form_class textarea").keyup(function() {
    $("#result").slideUp();
});

$(".scroll").on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
});


//scroll nav
$(window).on('scroll',function () {
    if($(this).scrollTop()  > 200){
        $('.special-nav').addClass("fixing_navbar_after_scrolling");
        $('.special-nav').removeClass("special_nav_styling");
    }
    else {
        $('.special-nav').removeClass("fixing_navbar_after_scrolling");
        $('.special-nav').addClass("special_nav_styling");
    }
})

/* Countdown Timer */



$('.push_nav li a').on('click', function(){
    $toggleright.toggleClass("active");
    $menuRight.toggleClass("pushmenu-open");
    $("body").toggleClass("pushmenu-push-toLeft");
    $(".navbar").toggleClass("navbar-right_open");
    return true;
});

// Customer Feedback Slider
var swiper = new Swiper('.main_slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});



// Customer Feedback Slider
var swiper = new Swiper('.customer_feedback_slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});



// Columned Portfolio Slider
var swiper = new Swiper('.parallax-columned-slider-inner', {
    slidesPerView: 4,
    spaceBetween: 0,

    breakpoints: {
        1250: {
            slidesPerView: 3,
        },
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
        }
    }
});

// Personal Main Slider
var swiper = new Swiper('.personal_slider', {

});

/* Partners Slider  */
var swiper = new Swiper('.sponsors_slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: 2000,
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
});

$('[data-fancybox="modal-post-fancy-box"]').fancybox({

    idleTime  : false,
    baseClass : 'fancybox-custom-layout',
    margin    : 0,
    gutter    : 0,
    infobar   : false,
    thumbs    : {
        hideOnClose : false,
        parentEl    : '.fancybox-outer'
    },
    touch : false,
    buttons : [
        'close',
    ],
    animationEffect   : "fade",
    animationDuration : 300,
    onInit : function( instance ) {
        // Create new wrapping element, it is useful for styling
        // and makes easier to position thumbnails
        instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
    },
    //caption : function(instance, item) {
    //return '<h3 class="raleway modal-portfolio-heading white_color">Oliver August</h3><p class="open_sans white_color default_text">This collection of photos, curated by The Histographer, is a collection around the concept of \'Autumn is here\'.</p>';
    //}
});



// Blog Slider
var swiper = new Swiper('.blog_slider_main', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});

// Team Slider
var swiper = new Swiper('.team_slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        1050: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }

});

// Counting Number Initializing

$(".stats_section ").appear(function () {
    $('.number-scroll').each(function () {
        $(this).prop('Counter',0).animate({
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

//scroll sections on clicking Links

$(".scroll").on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 750);
});

/* Count down Timer */
/* Countdown Timer */

if ($("body").hasClass("countdown")){
    $('.count_down').downCount({
        date: '01/2/2019 12:00:00',
        offset: +10
    }, function () {
        // alert('WOOT WOOT, done!');
    });
};



/* ------ Revolution Slider ------ */


/*animated elements banner*/
$("#rev_single").show().revolution({
    sliderType: "hero",
    jsFileLocation: "revolution/js/",
    sliderLayout: "fullscreen",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
    },
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [868, 768, 960, 720],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 400,
        levels: [9,10, 15, 20, 25, 30, 35, 40,  -10, -15, -20, -25, -30, -35, -40, -45, 55]
    },
    shadow: 0,
    spinner: "off",
    autoHeight: "off",
    fullScreenAutoWidth: "off",
    fullScreenAlignForce: "off",
    fullScreenOffsetContainer: "",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        disableFocusListener: false
    }
});




var tpj=jQuery;

var revapi1071;
tpj(document).ready(function() {
    if(tpj("#blurred_slider").revolution == undefined){
        revslider_showDoubleJqueryError("#blurred_slider");
    }else{
        revapi1071 = tpj("#blurred_slider").show().revolution({
            sliderType:"hero",
            jsFileLocation:"revolution/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:20000,
            navigation: {
            },
            responsiveLevels:[1240,1024,778,778],
            visibilityLevels:[1240,1024,778,778],
            gridwidth:[1240,1024,778,480],
            gridheight:[600,500,400,300],
            lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"slidercenter",
                speed:2000,
                levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
            },
            shadow:0,
            spinner:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                disableFocusListener:false,
            }
        });
// CHANGE THE API REFERENCE, AND THE ELEMENTS YOU WISH TO BLUR / UNBLUR
// SET START BLUR FACTOR, END BLUR FACTOR AND

        var api = revapi1071,
            ElementsToBlur = api.find('.toblur.tp-caption'),
            ElementsToUnBlur = api.find('.tounblur.tp-caption'),
            UnBlurFactor = 2,
            UnBlurStart = 3,
            UnBlurEnd = 0,
            BlurStart = 0,
            BlurEnd = 5,
            BlurFactor = 3,
            blurCall = new Object();


// SOME CODE FOR BLUR AND UNBLUR ELEMENTS
// EXTEND THE REVOLUTION SLIDER FUNCTION
// CHANGE ONLY IF YOU KNOW WHAT YOU DO

        blurCall.inmodule = "parallax";
        blurCall.atposition = "start";
        blurCall.callback = function() {
            var proc = api.revgetparallaxproc(),
                blur = UnBlurStart+(proc*UnBlurStart*UnBlurFactor)+UnBlurEnd,
                nblur = Math.abs(proc*BlurEnd*BlurFactor)+BlurStart;

            blur = blur<UnBlurEnd?UnBlurEnd:blur;
            nblur = nblur>BlurEnd?BlurEnd:nblur;

            ElementsToUnBlur = jQuery(ElementsToUnBlur.selector);
            punchgs.TweenLite.set(ElementsToUnBlur,{'-webkit-filter':'blur('+(blur)+'px)', 'filter':'blur('+(blur)+'px)'});
            punchgs.TweenLite.set(ElementsToBlur,{'-webkit-filter':'blur('+(nblur)+'px)', 'filter':'blur('+(nblur)+'px)'});
        }

        api.bind("revolution.slide.layeraction",function (e) {
            blurCall.callback();
        });

        api.bind("revolution.slide.onloaded",function (e) {
            revapi1071.revaddcallback(blurCall);
        });				}
});	/*ready*/



if ($("body").hasClass("only_portfolio_variation")){
    var tpj=jQuery;
    var revapi24;
    tpj(document).ready(function() {
        if(tpj("#rev-slider-just-agency").revolution == undefined){
            revslider_showDoubleJqueryError("#rev-slider-just-agency");
        }else{
            revapi24 = tpj("#rev-slider-just-agency").show().revolution({
                sliderType:"standard",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"on",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"bullet-bar",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:50,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }

        if(revapi24) revapi24.revSliderSlicey();
    });	/*ready*/
}

function setREVStartSize(e){
    try{ var i=$(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
        if(e.responsiveLevels&&($.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),$(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) $.each(c,function(e,i){u=$(i).length>0?u-$(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=$(window).height()*parseInt(e.fullScreenOffset,10)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,10))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
    }catch(d){console.log("Failure at Presize of Slider:"+d)}
};

var revapi2,
    tpj=$;
tpj(document).ready(function() {
    if(tpj("#rev_slider_2_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_1").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_svg").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_svg");
    }else{
        revapi2 = tpj("#rev_slider_2_svg").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:50,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_2").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_2").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_3").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_3").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_4").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_4").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/


// Cube Portfolio Initializing

(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'zoom',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})($, window, document);


/* WOW jquery */
if ($(window).width() > 767) {
    new WOW().init();
}

// gradient layout

function checkGradeient() {
    //gradient animations
    var colors = new Array(
        [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right

    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
    }

    setInterval(updateGradient, 10);
}

if ($('body').hasClass("gradient_version")) {
    checkGradeient()
}


