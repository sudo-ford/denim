const menuBtn = document.querySelector(".header__button");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    header.classList.toggle("header--row");
    nav.classList.toggle("nav--dn");
    menuBtn.classList.toggle("header__button--close");
    menuBtn.classList.toggle("header__button");
})