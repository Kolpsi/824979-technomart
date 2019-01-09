var popup = document.querySelector(".modal-write");
var butn = document.querySelector(".map-btn");
var closeWrite = document.querySelector(".close-btn");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".close-btn-map");
var mapUp = document.querySelector(".map-link");
var buyBtns = document.querySelectorAll(".buy-btn");
var bookmarksBtns = document.querySelectorAll(".item-bookmarks");
var bookmarks = document.querySelector(".main-bookmarks")
var basketMain = document.querySelector(".main-basket");
var popupAdd = document.querySelector(".modal-add");
var closeAdd = popupAdd.querySelector(".close-btn");
var nextBtn = popupAdd.querySelector(".modal-next-btn");
var writeName = document.querySelector(".write-name");
var form = document.querySelector(".write-us");
var writeEmail = document.querySelector(".write-email");
var writeComment = document.querySelector("[name=comment]");
var isStorageSupport = true;
var storage = "";
var numbBasket = 1;
var numbBookmarks = 1;

try {
	storage = localStorage.getItem("writeName");
	storage = localStorage.getItem("writeEmail");
} catch (err) {
	isStorageSupport = false;
	}

if (butn) {
	butn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	writeName.focus();
if (storage) {
	writeName.value = storage;
	writeEmail.focus();
	}
if (storage) {
	writeName.value = storage;
	writeEmail.value = storage;
	writeComment.focus();
	}
});
}

if (form) {
form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!writeName.value || !writeEmail.value || !writeComment.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("writeName", writeName.value);
			localStorage.setItem("writeEmail", writeEmail.value);
		}
	}
});
}
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		}
	if (popupMap.classList.contains("modal-show")) {
		popupMap.classList.remove("modal-show");
		}
	if (popupAdd.classList.contains("show-add")) {
		popupAdd.classList.remove("show-add");
		}
	}
  });

if (closeWrite) {
closeWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
}

if (mapUp) {
mapUp.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});
}

if (closeMap) {
closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
});
}

if (closeAdd) {
closeAdd.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAdd.classList.remove("show-add");
});
}

if (nextBtn) {
nextBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupAdd.classList.remove("show-add");
});
}



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

