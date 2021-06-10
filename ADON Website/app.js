
const nav = document.querySelector('.menu');
window.onscroll = function () {
    var y = window.scrollY;
  //  console.log(y);
    if (y >= 50) {
        nav.classList.add('nav-baar')

    } else {
        nav.classList.remove('nav-baar')
    }
}

$(document).ready(function() {
    $('.play-btn').on('click', function(ev) {
        $('.overlay-vid').hide();
        $('.play-btn').hide();
      $(".responsive-iframe")[0].src += "&autoplay=1";
      ev.preventDefault();
   
    });
  });