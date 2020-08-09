const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");

const thumbLeft = document.querySelector(".multi-range__thumb--left");
const thumbRight = document.querySelector(".multi-range__thumb--right");
const range = document.querySelector(".multi-range__range");

const priceLeft = document.querySelector(".multi-range__price--min");
const priceRight = document.querySelector(".multi-range__price--max");

function setLeftValue() {
    const _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    const percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    priceLeft.style.left = percent + "%";
    priceLeft.textContent = "$" + _this.value;
}
setLeftValue();

function setRightValue() {
    const _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    const percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    priceRight.style.right = (100 - percent) + "%";
    priceRight.textContent = "$" + _this.value;
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);