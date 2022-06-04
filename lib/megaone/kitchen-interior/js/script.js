$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader1').fadeToggle();

    }, 1000);

    // $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');
});

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1200);
    });

    $(".slider-btn").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1200);
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
        WOW Animation
    ====================================== */

    if ($(window).width() > 991) {
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

    /* ===================================
        Counter
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

    /* ===================================
        Rotating Text
    ====================================== */

    if ($(".js-rotating").length) {
        $(".js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 4000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }

    /* ===================================
          Cube Portfolio
    ====================================== */

    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1600,
            cols: 6,
        }, {
            width: 991,
            cols: 4,
        }, {
            width: 767,
            cols: 2,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
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
        displayType: 'fadeIn',
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

    /* ===================================
        Testimonial Carousel
    ====================================== */

    var owl5 = $('.owl-testimonial');
    owl5.owlCarousel({
        items:1,
        dots:true,
        loop:true,
        autoplay: false,
        responsiveClass: true,
        center:true,
        responsive: {
            0: {
                items: 1,

            },
            760: {
                items: 1,

            },
            1000: {
                items: 3,
            }
        }
    });

    /* ===================================
        Partners Carousel
    ====================================== */

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

    /* ===================================
        Contact Canvas
    ====================================== */

    function dotCanvas(){
        var $blocks = $('[data-dots]');
        $blocks.each(function() {
            var $block = $(this);
            var block = $block[0];
            var $canvas = $("<canvas/>").appendTo($block);
            var canvas = $canvas[0];
            var width = $block.width();
            var height = $block.height();
            var ctx = canvas.getContext('2d');
            ctx.width = width;
            ctx.height = height;
            var devicePixelRatio = window.devicePixelRatio || 1,
                backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
            var ratio = devicePixelRatio / backingStoreRatio;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            ctx.scale(ratio, ratio);
            var mouseX = undefined;
            var mouseY = undefined;

            function Circle(x, y) {
                this.x = x;
                this.y = y;
                this.distance = 7;
                this.radians = 0;
                this.draw = function() {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(151, 151, 151, .28)';
                    ctx.moveTo(this.x + 3, this.y);
                    ctx.lineTo(this.x + 3, this.y + 6);
                    ctx.moveTo(this.x, this.y + 3);
                    ctx.lineTo(this.x + 6, this.y + 3);
                    ctx.stroke();
                };
                this.update = function() {
                    if (mouseX > -1) {
                        var k1 = mouseY - y;
                        var k2 = mouseX - x;
                        var tan = k1 / k2;
                        var yrad = Math.atan(tan);
                        if (mouseX < x) {
                            yrad = Math.PI - Math.atan(-tan);
                        }
                        this.x = x + Math.cos(yrad) * this.distance;
                        this.y = y + Math.sin(yrad) * this.distance;
                    }
                    this.draw();
                };
            };
            var circlesArray = [];
            var gutter = 35;
            var countW = Math.floor(width / gutter);
            var countH = Math.floor(height / gutter);
            var len = countW * countH;
            for (var i = 0; i < countH; i++) {
                for (var t = 0; t < countW; t++) {
                    var x = gutter * t;
                    var y = gutter * i;
                    circlesArray.push(new Circle(x, y));
                }
            }
            var loop = function() {
                ctx.clearRect(0, 0, ctx.width, ctx.height);
                for (var i = 0; i < circlesArray.length; i++) {
                    circlesArray[i].update();
                }
            };
            document.addEventListener('mousemove', function(e) {
                var parentOffset = $(canvas).parent().offset();
                var relX = e.pageX - parentOffset.left;
                var relY = e.pageY - parentOffset.top;
                mouseX = relX;
                mouseY = relY;
                ctx.clearRect(0, 0, ctx.width, ctx.height);
                for (var i = 0; i < circlesArray.length; i++) {
                    circlesArray[i].update();
                }
                loop();
            });
            loop();
        });
    }
    if ($(window).width() > 991) {
        dotCanvas();
    }
});