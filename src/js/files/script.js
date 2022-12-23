// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const widthOrientir = document.querySelector(".width-orientir");
const projectDesctiptionBlock = document.querySelector(".project-dcrn__main");
if (widthOrientir) {
  projectDesctiptionBlock.style.width = widthOrientir.offsetWidth + "px";
}

const imageItems = document.querySelectorAll(".project-il__item");
const previewItem = document.querySelector(".project-dcrn__preview");

imageItems.forEach((element) => {
  element.addEventListener("click", function (e) {
    imageItems.forEach((eleme) => {
      eleme.classList.remove("active");
    });
    element.classList.add("active");
    previewItem.innerHTML = element.querySelector(
      ".project-il__item_main"
    ).innerHTML;
  });
});
