import { menu_Header_Responsive } from "./components/menu-responsive.js";
import { menu_Scroll_Spy } from "./components/menu-scrollSpy.js";
import { menu_desplegable } from "./components/menu_desplegable.js";
import { sliderCarrusel } from "./components/menu_carrousel.js";

document.addEventListener("DOMContentLoaded", () =>{
  menu_Header_Responsive(".menu-btn", ".menu", ".menu a", "section")
  menu_Scroll_Spy();
  menu_desplegable();

  sliderCarrusel(".carrousel-btns #prev", ".carrousel-btns #next", ".slides", ".slides img")
})

window.addEventListener("scroll", ()=>{
  menu_desplegable();
})

