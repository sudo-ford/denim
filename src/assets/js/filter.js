const filterOpenButton = document.querySelector(".filter__button--open");
const filter = document.querySelector(".filter");
const filterButtons = filter.querySelectorAll(".filter__button");
const filterCloseButton = filter.querySelector(".filter__close");

filterOpenButton.addEventListener("click", () => {
    filterOpenButton.classList.toggle("filter__button--opened");
    filter.classList.toggle("filter--dn");
})

filterCloseButton.addEventListener("click", () => {
    filter.classList.add("filter--dn");
    filterOpenButton.classList.remove("filter__button--opened");
})

for (let filterButton of filterButtons) {
    filterButton.addEventListener("click", () => {
        filterButton.classList.toggle("filter__button--opened");
        filterButton.nextElementSibling.classList.toggle("filter--dn");
    })
}