var popup = document.querySelector(".modal-write");
var butn = document.querySelector(".map-btn");
var closewrite = popup.querySelector(".close-btn");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".close-btn-map");
var mapup = document.querySelector(".map-link");
var buybtn = document.querySelectorAll(".buy-btn");
var popupadd = document.querySelector(".modal-add");
var closeadd = popupadd.querySelector(".close-btn");
var nextbtn = popupadd.querySelector(".modal-next-btn");
var writeName = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var writeEmail = popup.querySelector("[name=email]");
var writeComment = popup.querySelector("[name=comment]");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("writeName");
	storage = localStorage.getItem("writeEmail");
} catch (err) {
	isStorageSupport = false;
	}

butn.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");
if (storage) {
	writeName.value = storage;
	writeEmail.focus();
	} else {
		writeName.focus();
	}
if (storage) {
	writeName.value = storage;
	writeEmail.value = storage;
	writeComment.focus();
	} else {
		writeEmail.focus();
	}
});

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!writeName.value || !writeEmail.value) {
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

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		}
	if (popupmap.classList.contains("modal-show")) {
		popupmap.classList.remove("modal-show");
		}
	if (popupadd.classList.contains("show-add")) {
		popupadd.classList.remove("show-add");
		}
	}
  });

closewrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

mapup.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.add("modal-show");
});

closemap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.remove("modal-show");
});

for (var i = 0; i < buybtn.length; i++) {
	var buybtn = buybtn[i];
	console.log(buybtn);
	buybtn.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupadd.classList.add("show-add");
	})
};


closeadd.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupadd.classList.remove("show-add");
});

nextbtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupadd.classList.remove("show-add");
});
