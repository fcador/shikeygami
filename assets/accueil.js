import './styles/accueil.css';

/*************************  CAROUSEL ANIMATION *********************************/

function SlideShow(n) {
    var i;

    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
        if (n < 1) {slidePosition = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
} 

var slidePosition = 1;
SlideShow(slidePosition);

// Contrôle Suivant/Précédent
window.plusSlides = function (n) {
    SlideShow(slidePosition += n);
}

//  Contrôle des images
window.currentSlide= function(n) {
    SlideShow(slidePosition = n);
}

/**********************************************************/