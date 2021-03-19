let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;
let timeGo = 5000;
let time = setInterval(goNext, timeGo);

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
    clearInterval(time);
    time = setInterval(goNext, timeGo);
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
    clearInterval(time);
    time = setInterval(goNext, timeGo);
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}