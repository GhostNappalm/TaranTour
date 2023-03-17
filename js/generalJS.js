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
    
    var popup = document.getElementById("pu_ext");

    document.addEventListener("keydown", function(event) {
      // controlla se il tasto premuto è "Invio" (codice 13)
      if (event.keyCode === 13) {
        // chiudi il pop-up
        popup.style.display = "none";
      }
    });

    //Js per Exit
   /**/     $('#exit').click(function() {
          $('#pu_ext').fadeIn(200);
          $('#pop-up-exit').show();
        });   
    
        $('#cl_btn_ext').click(function() { 
          $('#pu_ext').hide();
          $('#pop-up-exit').hide();
        });

});