var buyBtns = document.querySelectorAll(".buy-btn");
var bookmarksBtns = document.querySelectorAll(".item-bookmarks");
var bookmarks = document.querySelector(".main-bookmarks")
var basketMain = document.querySelector(".main-basket");
var popupAdd = document.querySelector(".modal-add");
var closeAdd = popupAdd.querySelector(".close-btn");
var nextBtn = popupAdd.querySelector(".modal-next-btn");

var numbBasket = 1;
var numbBookmarks = 1;


nextBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAdd.classList.remove("show-add");
});

closeAdd.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAdd.classList.remove("show-add");
});

for (var i=0; i < bookmarksBtns.length; i++) {
	var bookmarksBtn = bookmarksBtns[i];
	bookmarksBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		bookmarks.classList.add("basket-full");
		bookmarks.textContent = "Закладки: "  + numbBookmarks++;
	});
};

for (var i = 0; i < buyBtns.length; i++) {
	var buyBtn = buyBtns[i];
	buyBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAdd.classList.add("show-add");
	basketMain.classList.add("basket-full");
	basketMain.textContent = "Корзина: " + numbBasket++;
});
};

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popupAdd.classList.contains("show-add")) {
		popupAdd.classList.remove("show-add");
		}
	}
  });
