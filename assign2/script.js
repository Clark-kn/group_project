var slideIndex =1;
showSlides(slideIndex);

function plus(n){
    showSlides(slideIndex+=n);
}

function showSlides(n){
    var i;
    var slides =document.getElementsByClassName("slide")
    if(n > slides.length){slideIndex=1}
    if(n<1){slideIndex=slides.length}
    // using iteration to loop through photos in gallery
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block"
}