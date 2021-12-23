$(document).ready(function() {
 $('.testimonials__wrap').slick ({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 });
});

$(document).ready(function() {
 $('.blog__slider').slick ({
  dots: false,
  arrows: true,
  fade: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
   {
     breakpoint: 769,
     settings: {
       slidesToScroll: 1,
       slidesToShow: 1
     }
   }
 ]
 });
});


$('.menu__burger').on('click', function () {
 $('.menu').toggleClass('menu--active');
 $('.menu__burger').toggleClass('menu__burger--active');
});

$('.menu__burger').click(function (event) {
 event.preventDefault();
 $('body').toggleClass('overflow');
});

var acc = document.getElementsByClassName("faq__accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

