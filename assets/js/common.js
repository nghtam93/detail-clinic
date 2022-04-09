jQuery(function($) {
    $(document).ready(function(){

        /*=====================================
        =            Sticky navber            =
        =====================================*/
        var stickyToggle = function (sticky, stickyWrapper, scrollElement,stickyHeight) {
            var stickyTop = stickyWrapper.offset().top;
            if (scrollElement.scrollTop() >= stickyTop ) {
                // stickyWrapper.height(stickyHeight);
                $('body').addClass('is-header-sticky')
                sticky.addClass("is-sticky");
            }
            else {
              $('body').removeClass('is-header-sticky')
                sticky.removeClass("is-sticky");
                // stickyWrapper.height('auto');
            }
        };
        $('[data-toggle="sticky-onscroll"]').each(function () {
            var sticky = $(this);
            var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
            sticky.before(stickyWrapper);
            sticky.addClass('sticky');
            var stickyHeight = sticky.outerHeight();
            // Scroll & resize events
            $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                stickyToggle(sticky, stickyWrapper, $(this),stickyHeight);
            });

            // On page load
            stickyToggle(sticky, stickyWrapper, $(window),stickyHeight);
            // Check scroll top
            var winSt_t = 0;
            $(window).scroll(function() {
                var winSt = $(window).scrollTop();
                if (winSt >= winSt_t) {
                    sticky.removeClass("top_show")
                } else {
                    sticky.addClass("top_show")
                }
                winSt_t = winSt
            });
        });

        /*=====  End of Sticky navber  ======*/


        /*===================================
        =            Back to top            =
        ===================================*/

        var back_to_top=$(".back-to-top"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("is-active"):back_to_top.removeClass("is-active")}),$(document).on("click",".back-to-top",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});

        /*=====  End of Back to top  ======*/


        /*============================
        =            Menu            =
        ============================*/

        $( ".main__nav li" ).hover(
          function() {
            $( '.main__nav' ).addClass('is-hover')
          }, function() {
            $( '.main__nav' ).removeClass('is-hover')
          }
        );

        /*=====  End of Menu  ======*/



        new WOW().init();
        if($('body').hasClass( "home" )){

        }


    });
});