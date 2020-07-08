const imageBig = document.querySelector(".slider__img");
const previewLinks = document.querySelectorAll(".slider__preview-link");

for (let imagesPreviewElement of previewLinks) {
    imagesPreviewElement.addEventListener("click", (e) => {
        e.preventDefault();
        let src = e.target.closest("a").querySelector(".slider__preview-img").src;
        console.log(src);
        imageBig.src = src;
    })
}