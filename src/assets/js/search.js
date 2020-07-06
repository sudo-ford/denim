const searchLabel = document.querySelector(".user-block__label");
const searchInput = document.querySelector(".user-block__search");

searchLabel.addEventListener('click', () => {
    searchLabel.classList.toggle("user-block__label--active");
    searchInput.classList.toggle("user-block__search--block");
})