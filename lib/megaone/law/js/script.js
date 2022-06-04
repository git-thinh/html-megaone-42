

jQuery(function ($) {


    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();

    $(function () {

        /*===================================
               Loading Timeout
             ====================================== */
        $('.side-menu.hidden').removeClass('hidden');


        setTimeout(function () {
            $("#loader-fade").fadeOut("slow");
            $('.side-menu').removeClass('dnone');
        }, 1000);

    });


    /*=============================
         Header appear
     ==============================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 250) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    /* ===================================
       Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700);
            $("body").addClass("pushmenu-push-toLeft");
        }), $("#close_side_menu , #btn_sideNavClose , .side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(".pushwrap").removeClass("active"),
                $("body").removeClass("pushmenu-push-toLeft"),
                $("#close_side_menu").fadeOut(200);
        });
    }

    if ($(".side-right-btn").length) {

        $(".side-right-btn").click(function () {
            $(".navbar.navbar-right").toggleClass('show');
        }),
            $(".navbar.navbar-right .navbar-nav .nav-link").click(function () {
                $(".navbar.navbar-right").toggleClass('show');
            });

    }


    /* =====================================
              Wow
         ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /* ===================================
                    Flip
      =================================== */

    $(function () {
        $(".flip").flip({
            trigger: 'hover',
            axis: 'y'
        });
    });


    /* ===================================
                 Parallax
              ====================================== */
    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0,
        });
    }

    /* ===================================
           Nav Scroll
           ====================================== */

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 55}, 700);
    });


    /* ===================================
         Accordion + Tabs
     ====================================== */
    $(".faq-items > li:first-child .sub-items").fadeIn();
    $(".faq-items > li:first-child >").addClass("expanded");
    $(".faq-items > li > a").on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass("expanded")) {
            $this.removeClass("expanded");
        } else {
            $(".faq-items a.expanded").removeClass("expanded");
            $this.addClass("expanded");
            $(".sub-items").filter(":visible").slideUp("normal");
        }
        $this.parent().children("ul").stop(true, true).slideToggle("normal");
    });

    /*----- Tabs init -----*/
    if ($(".tab-to-accordion").length){
        initTabsToAccordion();
        }

function initTabsToAccordion() {
    var animSpeed = 500;
    var win = $(window);
    var isAccordionMode = true;
    var tabWrap = $(".tab-to-accordion");
    var tabContainer = tabWrap.find(".tab-container");
    var tabItem = tabContainer.children("div[id]");
    var tabsetList = tabWrap.find(".tabset-list");
    var tabsetLi = tabsetList.find("li");
    var tabsetItem = tabsetList.find("a");
    var activeId = tabsetList
        .find(".active")
        .children()
        .attr("href");
    cloneTabsToAccordion();
    accordionMode();
    tabsToggle();
    hashToggle();
    win.on("resize orientationchange", accordionMode);

    function cloneTabsToAccordion() {
        $(tabsetItem).each(function () {
            var $this = $(this);
            var activeClass = $this.parent().hasClass("active");
            var listItem = $this.attr("href");
            var listTab = $(listItem);
            if (activeClass) {
                var activeClassId = listItem;
                listTab.show();
            }
            var itemContent = $this.clone();
            var itemTab = $this.attr("href");
            if (activeClassId) {
                itemContent
                    .insertBefore(itemTab)
                    .wrap('<div class="accordion-item active"></div>');
            } else {
                itemContent
                    .insertBefore(itemTab)
                    .wrap('<div class="accordion-item"></div>');
            }
        });
    }
    function accordionMode() {
        var liWidth = Math.round(tabsetLi.outerWidth());
        var liCount = tabsetLi.length;
        var allLiWidth = liWidth * liCount;
        var tabsetListWidth = tabsetList.outerWidth();
        if (tabsetListWidth <= allLiWidth) {
            isAccordionMode = true;
            tabWrap.addClass("accordion-mod");
        } else {
            isAccordionMode = false;
            tabWrap.removeClass("accordion-mod");
        }
    }
    function tabsToggle() {
        tabItem.hide();
        $(activeId).show();
        $(tabWrap).on("click", 'a[href^="#tab"]', function (e) {
            e.preventDefault();
            var $this = $(this);
            var activeId = $this.attr("href");
            var activeTabSlide = $(activeId);
            var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
            $('a[href^="#tab"]')
                .parent()
                .removeClass("active");
            activeOpener.parent().addClass("active");
            if (isAccordionMode) {
                tabItem.stop().slideUp(animSpeed);
                activeTabSlide.stop().slideDown(animSpeed);
            } else {
                tabItem.fadeOut(300);
                activeTabSlide.fadeIn(800);
            }
        });
    }
    function hashToggle() {
        var hash = location.hash;
        var activeId = hash;
        var activeTabSlide = $(activeId);
        var activeOpener = tabWrap.find('a[href="' + activeId + '"]');
        if ($(hash).length > 0) {
            $('a[href^="#tab"]')
                .parent()
                .removeClass("active");
            activeOpener.parent().addClass("active");
            tabItem.hide();
            activeTabSlide.show();
            win
                .scrollTop(activeTabSlide.offset().top)
                .scrollLeft(activeTabSlide.offset().left);
        }
    }
}


    /* ===================================
                blog slider
       =================================== */
    $("#blog-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:500,
        nav: false,
        loop: true,
    });
    $("#blog-slider-1").owlCarousel({
        items: 1,
        dots: false,
        autoplay:true,
        autoplayTimeout:6000,
        smartSpeed:600,
        nav: false,
        loop: true,
    });
    /* ===================================
             ends blog slider
       =================================== */




    /* ===================================
           About Box Hover Setting
           ====================================== */
    $(".blog-image").on("mouseenter", function () {
        $(".date").addClass("date-hvr");
    })

    $(".blog-image").on("mouseleave", function () {
        $(".date").removeClass("date-hvr");
    })

    /*======================
            date-2
     =====================*/
    $(".blog-image2").on("mouseenter", function () {
        $(".date-2").addClass("date-2-hvr");
    })

    $(".blog-image2").on("mouseleave", function () {
        $(".date-2").removeClass("date-2-hvr");
    })



    /*=========================
        price slider
    =========================*/

    $("#price-slider").owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        responsive: {
            991: {
                items: 3,
            },
            767: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });




    // Feedback Carousel
    var $imagesSlider = $(".feedback-slides .client-feedback>div"),
        $thumbnailsSlider = $(".client-thumbnails>div");
    // Images Options
    $imagesSlider.slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 2,
        cssEase: 'linear',
        fade: true,
        dots: true,
        arrows:false,
        autoplay: false,
        draggable: false,
        asNavFor: ".client-thumbnails>div",
    });
    // Thumbnails Options
    $thumbnailsSlider.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        arrows:false,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        asNavFor: ".feedback-slides .client-feedback>div",
    });
    // Feedback Item Slides
    $('.feedback-item-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        arrows:false,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });


// Go to Top
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



/*====================================
            da-thumb
*====================================*/
    $(function() {

        $('.da-thumbs > .menu-price ').each( function() { $(this).hoverdir(); } );

    });

/*
    // Portfolio three column
    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        defaultFilter: '*',
        animationType: "scaleSides",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 768,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }],

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3
            }
        }
    })
    */


    /* ===================================
    Fancy Box
    ====================================== */
    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });


/*=======================================
        Number Scrolling
* ======================================*/

$(".counter").appear(function () {
    $('.num-scrolling').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});






    /* ===================================
                Medical form
       =================================== */

//
    $(".datepicker").datepicker({
        dateFormat: 'yy-mm-dd',
        showAnim: 'slideDown'
    });
//Select-2
    $('.js-example-basic-single').select2();



    //blog heading
    $('.blog-para').on('mouseenter' , function () {
      $(this).parent().parent().find('.img-blog img').addClass('scale');
    }).on('mouseleave' , function () {
        $(this).parent().parent().find('.img-blog img').removeClass('scale');
    });


    /*Testimonial three img dots  */
    var testimonialSlider = $(".testimonial-text.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: 2400,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsive: {
            767: {
                items: 1,
            },
            0: {
                items: 1,
            }
        }
    });
    //

    //
    // testimonialSlider.on('changed.owl.carousel' , function(e){
    //     var index= $('.testimonial-text.owl-item').attr('data-index');
    //     console.log(index);
    // });

// Team Slider

    $("#team-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        smartSpeed:500,
        autoplayHoverPause:true,
        loop:true,

        responsive: {
            992: {
                items: 1,
            },
            991: {
                items: 1,
            },
            767: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });


    var owl5 = $('.partners-slider');
    owl5.owlCarousel({
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
            900: {
                items: 4,
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


    //swiper section vertical
    var swiperImg = new Swiper('#swiper-img', {
        direction: 'vertical',
        allowTouchMove: false,
        reverseDirection: true,
        initialSlide: ($('#swiper-img .swiper-slide').siblings().length-1)
    });
    //sync swiper
    var swiperTxt = new Swiper('#swiper-text', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
    });
    swiperTxt.on('slideChangeTransitionStart', function () {
        let index = swiperTxt.realIndex;
        let total = swiperTxt.slides.length;
        index = total - index -1;
        swiperImg.slideTo(index, 300, false);
    });
    if($(window).width() < 767){
        swiperTxt.changeDirection('horizontal');
        swiperImg.changeDirection('horizontal');
    }




    // Feedback Item Slides
    $('.feedback-item-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        arrows:false,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });





    //Contact Us


    /*----- counter js ----*/
    $(".demo-banner").appear(function () {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    /*  end of counter js * /







    $("#rev_slider_1_1").show().revolution({
                    sliderType:"standard",
                    jsFileLocation:"//localhost:82/revslider/revslider/public/assets/js/",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                        onHoverStop:"off",
                    },
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1240,1024,778,480],
                    gridheight:[868,768,960,720],
                    lazyType:"none",
                    parallax: {
                        type:"mouse",
                        origo:"enterpoint",
                        speed:400,
                        speedbg:0,
                        speedls:0,
                        levels:[1,2,3,4,5,6,7,8,9,10,0,0,0,0,0,55],
                        disable_onmobile:"on"
                    },
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
                    fullScreenOffset: "",
                    disableProgressBar:"on",
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


        /*==========================================
        rev slider
        ============================================*/

    $("#rev_slider_6_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost:82/revslider/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            arrows: {
                style: "zeus",
                enable: false,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                }
            },

            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            bullets: {
                enable: true,
                hide_onmobile: false,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5,
                tmp: ''
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1250, 1024, 778, 480],
        gridheight: [600, 768, 960, 720],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "90px",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });


});