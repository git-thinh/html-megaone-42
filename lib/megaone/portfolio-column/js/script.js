$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);

    $('.contact-page-section').hide();
    $('.main-page-section').show();

});


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
            scrollTop: $(this.hash).offset().top - 60}, 1200);
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
      Owl Carousel
     ====================================== */

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        center: true,
        autoWidth:true,
        singleItem:true,
        items:3,
        // animateOut: 'slideInLeft',
        // animateIn: 'slideOutRight',
        slideSpeed : 3000,
        nav: true,
        dots: false,
        loop: true,
        margin:0,
        autoplay:false,
        responsiveRefreshRate : 200,
        transitionStyle:"fade",

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
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items : slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed : 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate : 100,
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
        if(current > count) {
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




    // var img = $("#image1").width;
//or however you get a handle to the IMG

    // alert(img);

    // var image_value2 = $("#image2")[0].style.width;
    // var image_value3 = $("#image3")[0].style.width;
    // var image_value4 = $("#image4")[0].style.width;
    // var image_value5 = $("#image5")[0].style.width;
    // var image_value6 = $("#image6")[0].style.width;



    // alert(image_value2);
    // alert(image_value3);

    //
    // $('#image1').css('width', ${image_value1});
    // $('#image2').css('width', ${image_value2});
    // $('#image3').css('width', ${image_value3});
    // $('#image4').css('width', ${image_value4});
    // $('#image5').css('width', ${image_value5});
    // $('#image6').css('width', ${image_value6});



});

/*======================================*/
/*===========FANCY BOX============*/
/*======================================*/



/*======================================*/
/*===========Modal window js============*/
/*======================================*/

// $.fancybox.open({
//     afterClose: function( instance, current ) {
//         var owl = $('#sync1');
//         owl.trigger('play.owl.autoplay');
//     }
// });


$("[data-fancybox]").fancybox({
    afterShow: function( instance, slide ) {
        var owl = $('#sync1');
        owl.trigger('stop.owl.autoplay');
    },
    afterClose: function () {
        var owl = $('#sync1');
        owl.trigger('play.owl.autoplay');
    }
});


    // var pathArray = window.location.pathname.split('/');
    // var secondLevelLocation = pathArray[2];
    // alert(secondLevelLocation);

function next_window(x){


    // $.ajax({
    //     type: "GET",
    //     url: "portfolio-column/modal_windows/"+x+".html",
    //     contentType: "application/json; charset=utf-8",
    //     success: function(result) {
    //         //alert(result);
    //         $("#data-modal").html(result);
    //     }
    // });
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
        $(".loader").fadeOut(800);
    },1000);
    setTimeout(function(){ $("#"+x).addClass("modal-view").fadeIn(800); }, 800);
    setTimeout(function(){ $(".loader").removeClass('load'); }, 800);
}

function prev_window(x){
    // $.ajax({
    //     type: "GET",
    //     url: "portfolio-column/modal_windows/"+x+".html",
    //     contentType: "application/json; charset=utf-8",
    //     success: function(result) {
    //         $("#data-modal").html(result);
    //     }
    // });
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
        $(".loader").fadeOut(800);
    },1000);
    setTimeout(function(){ $("#"+x).addClass("modal-view").fadeIn(800); }, 800);
    setTimeout(function(){ $(".loader").removeClass('load'); }, 800);
}

function morphic_window(x) {
    // $.ajax({
    //     type: "GET",
    //     url: "portfolio-column/modal_windows/"+x+".html",
    //     contentType: "application/json; charset=utf-8",
    //     success: function(result) {
    //         //alert(result);
    //         $("#data-modal").html(result);
    //     }
    // });
    openmodal(x);
}


function openmodal(x){
    var owl = $('#sync1');
    owl.trigger('stop.owl.autoplay');

    setTimeout(function(){$('#'+x).addClass("modal-view").fadeIn(800);},50);
    setTimeout(function(){$('body').addClass('show-modal').fadeIn(800);},50);

}


$('#data-modal').on('click','.close-modal',function(){
    $(".modal-window").removeClass("modal-view");
    $('body').removeClass('show-modal');
    $('.body').removeClass('body-overlay');
    var owl = $('#sync1');
    owl.trigger('play.owl.autoplay');
});

$('#data-modal').on('click','.modal-window',function(event){
    var i=event.target.id;
    var x=event.target.className;
    var v=x.split(" ");
    var c=v[0];
    if(c=="modal-window"){

        $(".modal-window").removeClass("modal-view");
        $('.body').removeClass('body-overlay');
        $('body').removeClass('show-modal');

        var owl = $('#sync1');
        owl.trigger('play.owl.autoplay');

    }
    else{
    }
});


//nAVGATION coNTROL


$('#contact-page-btn').on('click',function () {
    $('.main-page-section').hide(500);
    $('.contact-page-section').show(500);
    $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");

});
// $('#main-page-btn').on('click',function () {
//     $('.contact-page-section').hide(500);
//     $('.main-page-section').show(500);
// });
