import { menu_Header_Responsive } from "./components/menu/menu-responsive.js";
import { menu_Scroll_Spy } from "./components/menu/menu-scrollSpy.js";
import { menu_desplegable } from "./components/menu/menu_desplegable.js";
import { sliderCarrusel } from "./components/carrousel/slide-carrousel.js";
import { submitForm } from "./components/formSubmit/form-submit-contact.js";

import { modal } from "./components/carrousel/modal.js";


document.addEventListener("DOMContentLoaded", () =>{
  menu_Header_Responsive(".menu-btn", ".menu", ".menu a", "section")
  menu_Scroll_Spy();
  menu_desplegable();

  sliderCarrusel("#carrousel-1");
  sliderCarrusel("#carrousel-2");
  sliderCarrusel("#carrousel-3");
  modal();

  submitForm();
})

window.addEventListener("scroll", ()=>{
  menu_desplegable();
})

window.addEventListener("hashchange", e=>{
  modal()
})