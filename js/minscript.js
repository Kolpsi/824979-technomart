var popup=document.querySelector(".modal-write"),butn=document.querySelector(".map-btn"),closeWrite=popup.querySelector(".close-btn"),popupMap=document.querySelector(".modal-map"),closeMap=popupMap.querySelector(".close-btn-map"),mapUp=document.querySelector(".map-link"),buyBtns=document.querySelectorAll(".buy-btn"),bookmarksBtns=document.querySelectorAll(".item-bookmarks"),bookmarks=document.querySelector(".main-bookmarks"),basketMain=document.querySelector(".main-basket"),popupAdd=document.querySelector(".modal-add"),closeAdd=popupAdd.querySelector(".close-btn"),nextBtn=popupAdd.querySelector(".modal-next-btn"),writeName=popup.querySelector("[name=name]"),form=popup.querySelector("form"),writeEmail=popup.querySelector("[name=email]"),writeComment=popup.querySelector("[name=comment]"),isStorageSupport=!0,storage="",numbBasket=1,numbBookmarks=1;try{storage=localStorage.getItem("writeName"),storage=localStorage.getItem("writeEmail")}catch(e){isStorageSupport=!1}butn.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(writeName.value=storage,writeEmail.focus()):writeName.focus(),storage?(writeName.value=storage,writeEmail.value=storage,writeComment.focus()):writeEmail.focus()}),form.addEventListener("submit",function(e){e.preventDefault(),writeName.value&&writeEmail.value&&writeComment.value?isStorageSupport&&(localStorage.setItem("writeName",writeName.value),localStorage.setItem("writeEmail",writeEmail.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")),popupMap.classList.contains("modal-show")&&popupMap.classList.remove("modal-show"),popupAdd.classList.contains("show-add")&&popupAdd.classList.remove("show-add"))}),closeWrite.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),mapUp.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("modal-show")}),closeMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("modal-show")}),closeAdd.addEventListener("click",function(e){e.preventDefault(),popupAdd.classList.remove("show-add")}),nextBtn.addEventListener("click",function(e){e.preventDefault(),popupAdd.classList.remove("show-add")});for(var i=0;i<bookmarksBtns.length;i++){var bookmarksBtn=bookmarksBtns[i];bookmarksBtn.addEventListener("click",function(e){e.preventDefault(),bookmarks.classList.add("basket-full"),bookmarks.textContent="Закладки: "+numbBookmarks++})}for(i=0;i<buyBtns.length;i++){var buyBtn=buyBtns[i];buyBtn.addEventListener("click",function(e){e.preventDefault(),popupAdd.classList.add("show-add"),basketMain.classList.add("basket-full"),basketMain.textContent="Корзина: "+numbBasket++})}
