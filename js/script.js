var popup = document.querySelector(".modal-write");
var butn = document.querySelector(".map-btn");
var closemap = popup.querySelector(".close-btn");

butn.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
