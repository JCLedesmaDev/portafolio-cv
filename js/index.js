import { menu_Header_Responsive } from "./components/menu-responsive.js";
import { menu_Scroll_Spy } from "./components/menu-scrollSpy.js";
import { menu_desplegable } from "./components/menu_desplegable.js";
import { sliderCarrusel } from "./components/slide-carrousel.js";

document.addEventListener("DOMContentLoaded", () =>{
  menu_Header_Responsive(".menu-btn", ".menu", ".menu a", "section")
  menu_Scroll_Spy();
  menu_desplegable();

  sliderCarrusel("#carrousel-1");
  sliderCarrusel("#carrousel-2");

})

window.addEventListener("scroll", ()=>{
  menu_desplegable();
})

