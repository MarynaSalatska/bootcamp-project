!function(){var e={openModalBtn:document.querySelector("[data-modal-about-open]"),closeModalBtn:document.querySelector("[data-modal-about-close]"),modal:document.querySelector("[data-modal-about]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn1:document.querySelector("[data-modal-products-open1]"),openModalBtn2:document.querySelector("[data-modal-products-open2]"),openModalBtn3:document.querySelector("[data-modal-products-open3]"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modalBackdrop:document.querySelector("[data-modal-products]"),submitButton:document.querySelector(".products-modal-form__button")};function o(){e.modalBackdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),window.addEventListener("keydown",t)}function t(o){"Escape"===o.code&&(e.modalBackdrop.classList.toggle("is-hidden"),window.removeEventListener("keydown",t),document.body.classList.toggle("no-scroll")),o.target===o.currentTarget&&(e.modalBackdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))}e.openModalBtn1.addEventListener("click",o),e.openModalBtn2.addEventListener("click",o),e.openModalBtn3.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.modalBackdrop.addEventListener("click",t),e.submitButton.addEventListener("click",(function(o){o.preventDefault(),e.modalBackdrop.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}))}(),function(){var e={openModalBtn:document.querySelector("[data-popup-location-open]"),closeModalBtn:document.querySelector("[data-popup-location-close]"),modal:document.querySelector("[data-popup-location]")};function o(){e.modal.classList.toggle("visually-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-popup-francise-open]"),closeModalBtn:document.querySelector("[data-popup-francise-close]"),modal:document.querySelector("[data-popup-francise]")};function o(){e.modal.classList.toggle("visually-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtnBuy:document.querySelector("[data-modal-open-buy-now]"),openModalBtnBuyMob:document.querySelector("[data-modal-open-buy-now-mob]"),closeModalBtnBuy:document.querySelector("[data-modal-close-buy-now]"),modalBuy:document.querySelector("[data-modal-buy-now]"),body:document.querySelector("body")};function o(){e.modalBuy.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtnBuy.addEventListener("click",o),e.openModalBtnBuyMob.addEventListener("click",o),e.closeModalBtnBuy.addEventListener("click",o)}(),function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),closeMenuBtnBuy:document.querySelector("[data-menu-close-btn]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".header__mobile-list")};function o(){e.menu.classList.toggle("visually-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.closeMenuBtnBuy.addEventListener("click",o),e.menuList.addEventListener("click",(function(){e.menu.classList.add("visually-hidden"),e.body.classList.remove("no-scroll")}))}(),new Swiper(".image-slider",{pagination:{el:".swiper-pagination",clickable:!0}});
//# sourceMappingURL=index.41457bfe.js.map