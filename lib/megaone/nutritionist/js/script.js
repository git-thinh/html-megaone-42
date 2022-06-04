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
       Nav Scroll
       ====================================== */

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top - 55}, 700);
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
        $(this).animate({left: '-55px'}, 100);
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active")
        $(".wrapper").addClass("pushmenu-push-toLeft");

    }), $("#close_side_menu").on("click", function () {
        $('#sidemenu_toggle').animate({left: '38px'}, 300);
        $(".side-menu").removeClass("side-menu-active")
    }), $("#btn_sideNavClose").on("click", function () {
        $('#sidemenu_toggle').animate({left: '38px'}, 300);
        $(".side-menu").removeClass("side-menu-active")
        $(".wrapper").removeClass("pushmenu-push-toLeft");

    })
}

/* ===================================
   About Box Hover Setting
   ====================================== */
$(".about-box").on("mouseenter", function () {
    $(".about-box.active").addClass("about-box-green");
})

$(".about-box").on("mouseleave", function () {
    $(".about-box.active").removeClass("about-box-green");
})

/* ===================================
        Counters
====================================== */
$(".counter-sec").appear(function () {
    $('.stats-number-inner span').each(function () {
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


/*====================================
            da-thumb
*====================================*/
$(function() {

    $('.da-thumbs > .menu-price ').each( function() { $(this).hoverdir(); } );

});

/* ===================================
        Cube Portfolio
====================================== */
$('#js-grid-mosaic').cubeportfolio({
    filters: '#js-filters-mosaic',
    layoutMode: 'grid',
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 2,
    }, {
        width: 1100,
        cols: 2,
    }, {
        width: 768,
        cols: 1,
    }, {
        width: 480,
        cols: 1,
        options: {
            gapHorizontal: 60
        }
    }],
    defaultFilter: '*',
    animationType: 'fadeIn',
    gapHorizontal: 50,
    gapVertical: 50,
    gridAdjustment: 'responsive',
    caption: 'zoom',

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    plugins: {
        loadMore: {
            element: "#js-loadMore-lightbox-gallery",
            action: "click",
            loadItems: 5,
        }
    }
})
    .on('initComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");

            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('onAfterLoadMore.cbp', function () {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-lightbox-gallery a").addClass("d-none");
        $("#js-loadMore-lightbox-gallery").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('filterComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
            $("#js-loadMore-lightbox-gallery").removeClass("d-none");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
            $("#js-loadMore-lightbox-gallery").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
        }
    });
});

// Feedback Carousel
var $imagesSlider = $(".feedback-slides .client-feedback>div"),
    $thumbnailsSlider = $(".client-thumbnails>div");
// Images Options
$imagesSlider.slick({
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 2,
    cssEase: 'linear',
    fade: true,
    dots: true,
    arrows:false,
    autoplay: true,
    draggable: false,
    asNavFor: ".client-thumbnails>div",
});
// Thumbnails Options
$thumbnailsSlider.slick({
    speed: 200,
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

$("#deal-slider").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed:500,
    autoplayHoverPause:true,
    loop:true,

    responsive: {
        992: {
            items: 3,
        },
        991: {
            items: 2,
        },
        767: {
            items: 1,
        },
        320: {
            items: 1,
        },
    }
});

$( ".owl-prev").html('<span class="caret left"><i class="la la-angle-left"></i></span>');
$( ".owl-next").html('<span class="caret right"><i class="la la-angle-right"></i></span>');
