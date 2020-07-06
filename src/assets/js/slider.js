const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--next");
const sliderImages = [
    "assets/img/slider-1-mobile.jpg",
    "assets/img/catalog-1.jpg",
    "assets/img/catalog-2.jpg"
];

let sliderImage = document.querySelector(".slider__img");

let i = 0;

nextButton.addEventListener("click", () => {
    i++;
    prevButton.disabled = "";

    if (i === sliderImages.length - 1) {
        nextButton.disabled = "disabled";
    }

    sliderImage.src = sliderImages[i];

})

prevButton.addEventListener("click", () => {
    i--;
    nextButton.disabled = "";

    if (i === 0) {
        prevButton.disabled = "disabled";
    }
    sliderImage.src = sliderImages[i];

})