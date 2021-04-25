import { menu_Header_Responsive } from "./components/menu/menu-responsive.js";
import { menu_Scroll_Spy } from "./components/menu/menu-scrollSpy.js";
import { menu_desplegable } from "./components/menu/menu_desplegable.js";
import { sliderCarrusel } from "./components/carrousel/slide-carrousel.js";
import { modal } from "./components/carrousel/modal.js";
import { formContact } from "./components/formularioContacto/form-submit-contact.js";


document.addEventListener("DOMContentLoaded", (e) =>{
  menu_Header_Responsive(".menu-btn", ".menu", ".menu a", "section")
  menu_Scroll_Spy();
  menu_desplegable();

  sliderCarrusel("#carrousel-1");
  sliderCarrusel("#carrousel-2");
  sliderCarrusel("#carrousel-3");
  sliderCarrusel("#carrousel-4");
  modal();

  formContact()
})

document.addEventListener("keydown", (e) =>{
  modal(e.key);
})

window.addEventListener("scroll", ()=>{
  menu_desplegable();
})

window.addEventListener("hashchange", e=>{
  modal()
})