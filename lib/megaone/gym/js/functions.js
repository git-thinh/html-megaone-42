//LOADER
jQuery(window).on("load", function () {
   "use strict";
   jQuery(".loader").fadeOut(800);

});


jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);


   /* ----- Back to Top ----- */
   $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
   var amountScrolled = 700;
   var backBtn = $("a.back-top");
   $window.on("scroll", function () {
      if ($window.scrollTop() > amountScrolled) {
         backBtn.addClass("back-top-visible");
      } else {
         backBtn.removeClass("back-top-visible");
      }
   });
   backBtn.on("click", function () {
      $root.animate({
         scrollTop: 0
      }, 700);
      return false;
   });

   
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

   /*====================================
               da-thumb
   *====================================*/
   $(function() {

      $('.da-thumbs > li ').each( function() { $(this).hoverdir(); } );

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



   /* =====================================
        Sechdule Filter
    ====================================== */

   // isotope
   $('.gallery').isotope({
      // options
      itemSelector: '.items'
   });

   var $gallery = $('.gallery').isotope({
      // options
   });

   // filter items on button click
   $('.filtering').on('click', 'span', function () {

      var filterValue = $(this).attr('data-filter');

      $gallery.isotope({filter: filterValue});

   });

   $('.filtering').on('click', 'span', function () {

      $(this).addClass('active').siblings().removeClass('active');

   });

   setTimeout(function (){
      $('.filtering .active').click();
   }, 1500);


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
   
   /*$(".dl-menu >.menu-item >a").on("click", function(){
    $(".pushmenu-right").collapse("hide");
   });*/
   

   
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

    



   
   $("#testimonial-quote-nav").owlCarousel({
      items: 1,
      autoplay: 2500,
      autoplayHoverPause: true,
      mouseDrag: true,
      loop: true,
      margin: 30,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: true,
      dotsContainer: "#owl-thumbs", 
      nav: true,
      navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
      responsive: {
         1280: {
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
      items: 3,
      margin: 30,
      dots: false,
      nav: true,
      responsive: {
         1280: {
            items: 3,
         },
         600: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });
   $( ".owl-prev").html('<span class="fa fa-angle-left"></span>');
   $( ".owl-next").html('<span class="fa fa-angle-right"></span>');


   /* ----------- Counters ---------- */
   $(".value_formatter").data("countToOptions", {
      formatter: function (value, options) {
         return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
   });
   $(".counters").appear(function () {
      $(".count_nums").each(count);
   });

   function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
   }


   /* ---------- Parallax Backgrounds ---------- */
   if (windowsize > 992) {
      $(".parallaxie").parallaxie({
         speed: 0.55,
         offset: 0,
      });
   }

   /* ------ Revolution Slider ------ */
   /*main slider*/ 
   $("#banner-main").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      navigation: {
         keyboardNavigation: "off",
         keyboard_direction: "horizontal",
         mouseScrollNavigation: "off",
         bullets: {
            style: "",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 767,
            hide_over: 9999,
            tmp: '',
            direction: "vertical",
            space: 10,
            h_align: "right",
            v_align: "center",
            h_offset: 40,
            v_offset: 0
         },
         arrows: {
            enable: false,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
               h_align: "left",
               v_align: "center",
               h_offset: 20,
               v_offset: 30,
            },
            right: {
               h_align: "right",
               v_align: "center",
               h_offset: 20,
               v_offset: 30
            },
         },
         touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
         }
      },
      viewPort: {
         enable: true,
         outof: "pause",
         visible_area: "90%"
      },
      responsiveLevels: [4096, 1024, 778, 480],
      gridwidth: [1140, 1024, 768, 480],
      gridheight: [600, 500, 500, 350],
      lazyType: "none",
      parallax: {
         type: "mouse",
         origo: "slidercenter",
         speed: 9000,
         levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
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
   


   /*Wow Animations*/
   if ($(".wow").length) {
      var wow = new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: 0,
         mobile: false,
         live: true
      });
      new WOW().init();
   }
   

});






