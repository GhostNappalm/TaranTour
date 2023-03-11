$(document).ready(function(){

  $('[class="chiud"]').tooltip({
    placement: 'top'
  });

    //Tooltip
 $('[data-toggle="tooltip"]').tooltip({
      placement: 'left'
    });
    //
    /*
$(".exit").click(function(){
        return confirm("Sei sicuro di voler uscire?");
    });
    */


    //Js per la Mappa applicazione
    $('#mappa').click(function() {
      $('#pu_map').fadeIn(200);
      $('#pop-up-mappa').show();
    });
  
    $('#cl_btn_map').click(function() {
      $('#pu_map').hide();
      $('#pop-up-mappa').hide();
    });


    //Js per Help
    $('#help').click(function() {
      $('#pu_hlp').fadeIn(200);
      $('#pop-up-help').show();
    });   

    $('#cl_btn_hlp').click(function() { 
      $('#pu_hlp').hide();
      $('#pop-up-help').hide();
    });

    //Js per Exit
        $('#exit').click(function() {
          $('#pu_ext').fadeIn(200);
          $('#pop-up-exit').show();
        });   
    
        $('#cl_btn_ext').click(function() { 
          $('#pu_ext').hide();
          $('#pop-up-exit').hide();
        });

    //Js per la Mappa applicazione
 /*   $('.veloGrigio').addClass('hidden');
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
              }); */


    //


    //Js per tasto esci
    
    //
});