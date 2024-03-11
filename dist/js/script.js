const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__item");
const arrowLeft = document.querySelector(".slider__arrow_left");
const arrowRight = document.querySelector(".slider__arrow_right");
const sliderBullets = document.querySelectorAll(".slider__btn");
const sliderBulletsContainer = document.querySelector(".slider__btns");
burger.addEventListener("click", (e) => {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    overlay.classList.toggle("overlay_active");
});
overlay.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    overlay.classList.toggle("overlay_active");
});

function findactive(slides) {
    let activeIndex;
    slides.forEach((slide, index) => {
        if (slide.classList.contains("slider__item_active")) {
            activeIndex = index;
        }
    });
    return activeIndex;
};
function activateNextSlide() {
    let activeSlideIndex = findactive(sliderItems);
    sliderItems[activeSlideIndex].classList.toggle("slider__item_active");
    sliderBullets[activeSlideIndex].classList.toggle("slider__btn_active");
    if (activeSlideIndex >= sliderItems.length - 1) {
        activeSlideIndex = -1;
    }
    sliderBullets[activeSlideIndex + 1].classList.toggle("slider__btn_active");
    sliderItems[activeSlideIndex + 1].classList.toggle("slider__item_active");
}

function activatePrevSlide() {
    let activeSlideIndex = findactive(sliderItems);
    sliderItems[activeSlideIndex].classList.toggle("slider__item_active");
    sliderBullets[activeSlideIndex].classList.toggle("slider__btn_active");
    if (activeSlideIndex == 0) {
        activeSlideIndex = sliderItems.length;
    }
    sliderBullets[activeSlideIndex - 1].classList.toggle("slider__btn_active");
    sliderItems[activeSlideIndex - 1].classList.toggle("slider__item_active");
}
const changeSlides = setInterval(() => {
    activateNextSlide();
}, 3000);
arrowLeft.addEventListener("click", ()=>{
    clearInterval(changeSlides);
    activatePrevSlide();
});
arrowRight.addEventListener("click", ()=>{
    clearInterval(changeSlides);
    activateNextSlide();
});
sliderBulletsContainer.addEventListener("click", (e) => {
    clearInterval(changeSlides);
    sliderBullets.forEach((bullet, index) => {
        if (e.target == bullet) {
            sliderItems.forEach(item => {
                item.classList.remove("slider__item_active");
            });
            sliderBullets.forEach(item => {
                item.classList.remove("slider__btn_active");
            })
            sliderItems[index].classList.toggle("slider__item_active");
            sliderBullets[index].classList.toggle("slider__btn_active");
        }
    });
});

