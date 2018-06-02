// Your Scripts
console.log('Hey Browser!');

$(window).scroll(function(){
  if ($(window).scrollTop() >= 120) {
    $('.sticky-header').addClass('fixed');
   }
   else {
    $('.sticky-header').removeClass('fixed');
   }
});