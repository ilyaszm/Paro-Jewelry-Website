

/****** slides ******/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

/****** The modal image ******/
// Get the modals
var modal_1 = document.getElementById('modal-1');
var modal_2 = document.getElementById('modal-2');
var modal_3 = document.getElementById('modal-3');
var modal_4 = document.getElementById('modal-4');

// Get the images and insert them inside the modals
var img_1 = document.getElementById('slide1');
var modalImg_1 = document.getElementById("img-1");

var img_2 = document.getElementById('slide2');
var modalImg_2 = document.getElementById("img-2");

var img_3 = document.getElementById('slide3');
var modalImg_3 = document.getElementById("img-3");

var img_4 = document.getElementById('slide4');
var modalImg_4 = document.getElementById("img-4");

img_1.onclick = function(){
    modal_1.style.display = "block";
    modalImg_1.src = this.src;
}

img_2.onclick = function(){
    modal_2.style.display = "block";
    modalImg_2.src = this.src;
}

img_3.onclick = function(){
    modal_3.style.display = "block";
    modalImg_3.src = this.src;
}

img_4.onclick = function(){
    modal_4.style.display = "block";
    modalImg_4.src = this.src;
}

// Get the <span> element that closes the each modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close-2")[0];
var span3 = document.getElementsByClassName("close-3")[0];
var span4 = document.getElementsByClassName("close-4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal_1.style.display = "none";
}

span2.onclick = function() { 
    modal_2.style.display = "none";
}

span3.onclick = function() { 
    modal_3.style.display = "none";
}

span4.onclick = function() { 
    modal_4.style.display = "none";
}

