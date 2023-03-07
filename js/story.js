
function stor(){
    $('section').hide();
    $('section').eq(0).fadeIn(300);
    $("#myRange").change(function(){

        var value = $(this).val();
        $('section').hide();
        switch (value) { 
            case "1":
                $('section').hide();
                $('section').eq(0).fadeIn(300);
                break;
            case "2": 
                $('section').hide();
                $('section').eq(1).fadeIn(300);
                break; 
            case "3": 
                $('section').hide();
                $('section').eq(2).fadeIn(300);
                break;
            case "4": 
                $('section').hide();
                $('section').eq(3).fadeIn(300);
                break;
            case "5": 
                $('section').hide();
                $('section').eq(4).fadeIn(300);
                break;
            case "6": 
                $('section').hide();
                $('section').eq(5).fadeIn(300);
                break;    
            case "7": 
                $('section').hide();
                $('section').eq(6).fadeIn(300);
                break;
            case "8": 
                $('section').hide();
                $('section').eq(6).fadeIn(300);
                break;
        }   

    });
}

