// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const widthOrientir = document.querySelector(".width-orientir");
const projectDesctiptionBlock = document.querySelector(".project-dcrn__main");
if (widthOrientir) {
  projectDesctiptionBlock.style.width = widthOrientir.offsetWidth + "px";
}
