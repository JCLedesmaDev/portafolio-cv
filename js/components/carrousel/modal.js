export function modal() {

  const $body = document.querySelector("body");
  const $slides = document.querySelectorAll(".slides")

  $slides.forEach(slide =>{

    if (location.hash.includes("#trabajo-")) {

      // Para que no funcione el scroll del body
      $body.style.overflow = "hidden";

      // Para que cuando ingresemos al modal, comience la animacion
      slide.style.animation = "carousel-slide 25s ease-in-out 3s 1";
      
    }
    
    if (location.hash.includes("#close")) {
      $body.style.overflow = "scroll";
      slide.style.animation = "none";
    }
   
  })
}
