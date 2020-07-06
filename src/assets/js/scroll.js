const scrollButton = document.querySelector(".intro__button");
const scrollTo = document.querySelector(".bestsellers");

scrollButton.addEventListener("click", () => {
    scrollTo.scrollIntoView();
})