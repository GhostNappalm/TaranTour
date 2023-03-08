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

    $( ".mappaAppIcon , #closeBtn" ).click(function() {
            if ($('.veloGrigio').hasClass('hidden')) {
               $('.veloGrigio').removeClass('hidden');
               $('.mappaApp').removeClass('hidden');
               $('.posAttuale').removeClass('hidden');
            }
            else{
                $('.veloGrigio').addClass('hidden');
                $('.mappaApp').addClass('hidden');
                $('.posAttuale').addClass('hidden');
              }
              });
    //


    //Js per tasto esci
    
    //
});