//adaptivy header menu
let burger = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (burger) {
    burger.addEventListener("click", function (e) {
        burger.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}