var c = 0;
function slide() {
$('section').hide();
$('video').load();
switch (c) {
case 0 : 
$('section').eq(0).fadeIn(300);
$('#precc').hide();
break;
case 1 :
$('section').eq(1).fadeIn(300);
$('#precc').show();
break;

case 2 : 
$('section').eq(2).fadeIn(300);  
$('#succ').show(); 
break;


case 3 : 
$('section').eq(3).fadeIn(300); 
$('#succ').hide();
break;


} 
}
function next() {
c++;
slide();
}

function preview() {
c--;
slide();
}