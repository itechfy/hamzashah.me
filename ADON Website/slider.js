if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready(){
$(document).ready(function () {
  $('.sol-slider').slick({
      autoplay: true,
      dots: false,
      arrows: true,
      nextArrow: '.prev',
      prevArrow: '.next',
      autoplaySpeed: 2000,
  });


});
}






