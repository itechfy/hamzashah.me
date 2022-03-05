const nav = document.querySelector('nav');
window.onscroll = function () {
    var y = window.scrollY;
  //  console.log(y);
    if (y >= 50) {
        nav.classList.add('nav-baar')

    } else {
        nav.classList.remove('nav-baar')
    }
}

$(".menu").click(function(){

});
document.querySelector('#chkbox').addEventListener('change', (e) => {
    if (e.target.checked == true) {
        $(".menu div:nth-child(1)").css("transform","rotate(45deg) translate(4px,4px)");
        $(".menu div:nth-child(3)").css("transform","rotate(-45deg) translate(0px,0px)");
        $(".menu div:nth-child(2)").css("display","none");
    } else {
        $(".menu div:nth-child(1)").css("transform","rotate(0deg)");
        $(".menu div:nth-child(3)").css("transform","rotate(0deg)");
        $(".menu div:nth-child(2)").css("display","block");
    }
  })