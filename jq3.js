$('li');
console.log($('li'));
$('li').val();
$('h1').css('background-color','yellow').text('Hurricanes On Tampa Bay!');
const $specialLi = $('li').eq(1);
$specialLi.css('background-color', 'aqua');
$specialLi.parent().css('color', 'red');
$('ol').append('<li class="highlight"> Hurricane Hermine 140 mph </li>');
$('li').append('<input type="checkbox"/>');
$('img').on('click', function () {
   $(this).css('border', '10px solid purple'); 
});

$('#add-input').on('click', function(){
   $('form').append('input type="text"'); 
});