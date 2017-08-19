/*Theme    : assan
 * Author  : Design_mylife
 * Version : V1.8
 *
 */

$( window ).resize(function() {
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
});
//sticky header on scroll
$(document).ready(function () {
    $(window).load(function () {
        $(".sticky").sticky({topSpacing: 0});
    });

    //on hover dropdown menu
     $(".navbar-nav>.dropdown").hover(function () {
    $(this).toggleClass("open");
 });
});

/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */
$(document).ready(function () {
    var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
    );
    wow.init();
});

/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 800
    });
});

$(document).ready(function () {
    
    /* ==============================================
     flex slider
     =============================================== */
    $('.testi-slide').flexslider({
        slideshowSpeed: 5000,
        slideshow: false,
        directionNav: false,
        animation: "fade",
        smoothHeight: false
    });

    $('.navbar-nav').on('click', 'a', function(){
        $('.navbar-collapse').toggleClass('in');
    } );
});

