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

function customModalClose(){
    var customModal = $(this).closest('.customModal');
    customModal.fadeOut(500, function(){
        customModal.remove();
    });
}

$( function(){
    $('.person-bio').on('click', function(e){
        e.preventDefault();
        var title = $(this).closest('.h--link').text();
        var content = $(this).closest('div').find('.person-bio-content').text();

        var modal = $('<div class="customModal" ></div>');

        var modalOverlay = $('<div class="customModal-overlay"></div>');
        modalOverlay.on('click', customModalClose);
        modal.append(modalOverlay);
        
        var modalContent = $('<div class="customModal-content" ></div>');
        modalContent.append( '<h2>' + title + '</h2>' );
        modalContent.append( '<p>' + content + '</p>' );
        modal.append(modalContent);
        
        var modalClose = $('<button class="customModal-close">×</button>');
        modalClose.on('click', customModalClose);
        modalContent.append(modalClose);

        $(document.body).append(modal);
    } )
} );
