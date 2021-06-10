if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}


function ready(){

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




// Sliders

$(".client-carousel").owlCarousel({
  stagePadding: 20,   //gives padding
  center: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  margin:10,
  loop:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1
    },
    680:{
      items:2
    },
    960:{
      margin:50,
      items:2,
      stagePadding:100,
      autoplay:false
    }
  }
});

$(".team-slider").owlCarousel({
responsiveClass:true,
  responsive:{
    0:{
      items:1,
      autoplay:true,
      loop:true
    },
    680:{
      items:2
    },
    960:{
      items:3
    
    }
  }
});
}