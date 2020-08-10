const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--next");
const sliderImages = [
    "assets/img/slider-1-mobile.jpg",
    "assets/img/catalog-1.jpg",
    "assets/img/catalog-2.jpg"
];

const sliderImage = document.querySelector(".slider__img");
const sourseImages = document.querySelectorAll(".slider__images source");

let i = 0;

nextButton.addEventListener("click", () => {
    i++;
    prevButton.disabled = "";

    if (i === sliderImages.length - 1) {
        nextButton.disabled = "disabled";
    }

    sliderImage.src = sliderImages[i];

    for (let sourceImage of sourseImages) {
        sourceImage.srcset = sliderImages[i];
    }

})

prevButton.addEventListener("click", () => {
    i--;
    nextButton.disabled = "";

    if (i === 0) {
        prevButton.disabled = "disabled";
    }
    sliderImage.src = sliderImages[i];

    for (let sourceImage of sourseImages) {
        sourceImage.srcset = sliderImages[i];
    }

})

const previewLinks = document.querySelectorAll(".slider__preview-link");

for (let imagesPreviewElement of previewLinks) {
    imagesPreviewElement.addEventListener("click", (e) => {
        e.preventDefault();
        let src = e.target.closest("a").querySelector(".slider__preview-img").src;
        sliderImage.src = src;
        for (let sourceImage of sourseImages) {
            sourceImage.srcset = src;
        }
    })
}