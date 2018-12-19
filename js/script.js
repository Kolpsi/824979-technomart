var popup = document.querySelector(".modal-write");
var butn = document.querySelector(".map-btn");
var closewrite = popup.querySelector(".close-btn");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".close-btn-map");
var mapup = document.querySelector(".map-link");
var buybtn = itemactive.querySelectorAll(".buy-btn");
var popupadd = document.querySelector(".modal-add");
var closeadd = popupadd.querySelector(".close-btn");
var cataloglist = document.querySelector(".catalog-list");
var listitem = cataloglist.querySelector(".list-item");
var itemactive = listitem.querySelector(".item-active");

butn.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
});

closewrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

mapup.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.remove("modal-show");
});

buybtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupadd.classList.add("modal-show");
});
