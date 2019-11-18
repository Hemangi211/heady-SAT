/** Template Animations **/
jQuery(window).ready(function () {theme.init();});
jQuery(window).load(function () {theme.initAnimation(); });

'use strict';
var theme = function () {
    
    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize:function() {
            //resizePage();
        },
        init:function () {
            //handleToTopButton();
        },
        // Animation on Scroll
        initAnimation:function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset:$.waypoints('viewportHeight')-60
                });
            }
        }
    }
}();

$(document).ready(function(){
    
$('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});

$('aside').stickySidebar({
    topSpacing: 0,
    bottomSpacing: 0
}); 
    
$('.hamburger').click(function(){
   $('.hamburger').toggleClass('open-menu');
    $('.nav').slideToggle();
});
   
$(".review-section ul li").slice(0, 2).show();
    $("#loadmore").on('click', function (e) {
        e.preventDefault();
        $(".review-section ul li:hidden").slice(0,2).slideDown();
//        if ($(".review-section ul li:hidden").length == 0) {
//            $("#loadmore").fadeOut('slow');
//        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });    
    
});