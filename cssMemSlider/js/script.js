let slideIndex = 0;
let timeoutId;

function showSlides() {
    clearTimeout(timeoutId);
    const slides = document.querySelectorAll(".slider__items");
    const dots = document.querySelectorAll(".dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot--active";

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            slides.forEach(slide => {
                slide.style.display = "none";
            });
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" dot--active", "");
            }
            slides[index].style.display = "block";
            dots[index].className += " dot--active";
        });
    });

    autoLoop();
}

function autoLoop(){
    timeoutId = setTimeout(() => {
        showSlides();
    }, 5000);
}

showSlides();
autoLoop();