jQuery(function($) {
    $(document).ready(function(){

        $( ".main__nav li" ).hover(
          function() {
            $( '.main__nav' ).addClass('is-hover')
          }, function() {
            $( '.main__nav' ).removeClass('is-hover')
          }
        );

        new WOW().init();
        if($('body').hasClass( "dn-home" )){

        }


    });
});