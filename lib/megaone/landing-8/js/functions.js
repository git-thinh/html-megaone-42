/* ===================================
    About
====================================== */

/*
    Theme Name: MegaOne
    Theme URI:
    Author: Themes Industry
    Author URI:
    Description: One Page , Multi Parallax Template
    Tags: one page, multi page, multipurpose, parallax, creative, html5

 */

//PAGE LOADER
$(window).on("load", function () {
    "use strict";
    $(".loader").fadeOut(800);
});


jQuery($=> {
    "use strict";

    /*Wow Animations*/
    if ($(".wow").length && $(window).outerWidth() >= 992) {
        let wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


//    end of js
});