
$(document).ready(function(){

$('#menu').click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});

$(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
});

//smooth scrolling
$('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    
    },
    500,
    'linear'

    );

});

});



//untuk slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//contact
const phoneBtn = document.querySelector('.phone');
const whatsappBtn = document.querySelector('.whatsapp');
const emailBtn = document.querySelector('.email');

phoneBtn.addEventListener('click', () => {
  window.location.href = 'tel:+0105072787';
});

whatsappBtn.addEventListener('click', () => {
  window.location.href = 'https://wa.me/01131762566';
});

emailBtn.addEventListener('click', () => {
  window.location.href = 'mailto:ashraffahmi03@gmail.com';
});
