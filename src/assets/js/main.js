$(document).ready(function() {
 $('.hero__inner').slick ({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 });
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

