import { menu_Header_Responsive } from "./components/menu-responsive.js";
import { menu_Scroll_Spy } from "./components/menu-scrollSpy.js";
import { menu_desplegable } from "./components/menu_desplegable.js";
import { sliderCarrusel } from "./components/slide-carrousel.js";
import { submitForm } from "./components/form-submit-contact.js";

document.addEventListener("DOMContentLoaded", () =>{
  menu_Header_Responsive(".menu-btn", ".menu", ".menu a", "section")
  menu_Scroll_Spy();
  menu_desplegable();

  sliderCarrusel("#carrousel-1");
  sliderCarrusel("#carrousel-2");
  sliderCarrusel("#carrousel-3");

  submitForm();
})

window.addEventListener("scroll", ()=>{
  menu_desplegable();
})

