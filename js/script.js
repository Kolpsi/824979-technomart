var popup = document.querySelector(".modal-add");
var butn = document.querySelectorAll(".buy-btn");

butn.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
});
