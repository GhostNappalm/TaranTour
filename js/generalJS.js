$(document).ready(function(){

    //Tooltip
 $('[data-toggle="tooltip"]').tooltip({
      placement: 'left'
    });
    //



    //Js per la Mappa applicazione
    $('.veloGrigio').addClass('hidden');
    $('.mappaApp').addClass('hidden');
    $('.posAttuale').addClass('hidden');
    $('.aiut').addClass('hidden');

    $( ".mappaAppIcon , #closeBtn" ).click(function() {
            if ($('.veloGrigio').hasClass('hidden')) {
               $('.veloGrigio').removeClass('hidden');
               $('header').css('z-index', '-5');
               $('.mappaApp').removeClass('hidden');
               $('.posAttuale').removeClass('hidden');
            }
            else{
                $('.veloGrigio').addClass('hidden');
                $('.mappaApp').addClass('hidden');
                $('.posAttuale').addClass('hidden');
                $('header').css('z-index', '1');
              }
              });


            //Js per Help
              $( ".help, #closeBtn_help").click(function() {
                if ($('.veloGrigio').hasClass('hidden')) 
                {
                  $('.veloGrigio').removeClass('hidden');
                  $('header').css('z-index', '-1');
                  $('.aiut').removeClass('hidden');
                }
                else{
                  $('.veloGrigio').addClass('hidden');
                $('header').css('z-index', '1');
                $('.aiut').addClass('hidden');
                }
              });


    //


    //Js per tasto esci
    
    //
});