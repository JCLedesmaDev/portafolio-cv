export function modal(key) {

  const $body = document.querySelector("body");
  const $slides = document.querySelectorAll(".slides")

  $slides.forEach(slide =>{


    if (location.hash.includes("#trabajo-")) {

      // Para que no funcione el scroll del body
      $body.style.overflowY = "hidden";

      // Para que cuando ingresemos al modal, comience la animacion
      slide.style.animation = "carousel-slide 15s ease-in-out 3s";

      //Si nuestro "hash" incluye el id "trabajo", presionando el escape, nos cambia el "hash" a "#close", cerrando el modal automaticamente
      if (key === "Escape") {
        location.hash = "#close";
      }
      
    }


    
    if (location.hash.includes("#close")) {
      $body.style.overflowY = "scroll";
      slide.style.animation = "none";
    }
   
  })

}
