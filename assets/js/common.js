jQuery(function($) {

    new WOW().init({
        animateClass: 'animated'
    });

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


        //-------------------------------------------------
        // Menu Mobile
        //-------------------------------------------------
        $.fn.dnmenu = function( options ) {

            let thiz = this
            let menu = $(this).attr('data-id')
            let menu_id = '#'+menu

            // Default options
            var settings = $.extend({
                name: 'Menu'
            }, options );

            // get ScrollBar Width
            function getScrollBarWidth () {
                var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
                    widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
                $outer.remove();
                return 100 - widthWithScroll;
            };
            let ScrollBarWidth = getScrollBarWidth() + 'px';

            // Create wrap
            // Button click
            thiz.click(function(e){

                e.preventDefault()
                console.log(this)
                if($(this).hasClass('active')){
                    $(this).removeClass('active')
                    $('body').removeClass('modal-open')
                    $(menu_id).removeClass('active')

                } else {
                    $(this).addClass('active')
                    $('body').addClass('modal-open')
                    $(menu_id).addClass('active')

                }
            });

            // Custom close
            $('.js-menu__close').click(function(){
                $('body').removeClass('modal-open')
                $(thiz).removeClass('active')
                $(menu_id).removeClass('active')
            })

            // Menu
            var el= $(menu_id).find(".nav-mobile--ul");
            el.find(".menu-item-has-children>a").after('<button class="nav-mobile__btn"><i></i></button>'),

            el.find(".nav-mobile__btn").on("click",function(e){
                e.stopPropagation(),
                $(this).parent().find('.sub-menu').first().is(":visible")?$(this).parent().removeClass("sub-active"):
                $(this).parent().addClass("sub-active"),
                $(this).parent().find('.sub-menu').first().slideToggle()
            })

            $('.nav-mobile, .menu-mb__btn').mousedown(function(e){ e.stopPropagation(); });
            $(document).mousedown(function(e){ $('.nav-mobile').removeClass('active'); $(thiz).removeClass('active'); $("body").removeClass('modal-open') });

            // Apply options
            return;
        };

        $('.menu-mb__btn').dnmenu()


        /*=====  End of Menu  ======*/




        if($('body').hasClass( "home" )){

            $( ".main__nav li" ).hover(
              function() {
                $( '.main__nav' ).addClass('is-hover')
              }, function() {
                $( '.main__nav' ).removeClass('is-hover')
              }
            );

            var home_slider_top=$(".home-navmb"),
            offset=200,duration=500;
            $(window).scroll(function(){
                $(this).scrollTop()>offset?home_slider_top.addClass("is-active"):home_slider_top.removeClass("is-active")
            })

        }


    });

});


