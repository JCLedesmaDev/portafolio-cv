export function sliderCarrusel(idCarrousel){

  const $prevBtn = document.querySelector(`${idCarrousel} .carrousel-btns #prev`);
  const $nextBtn = document.querySelector(`${idCarrousel} .carrousel-btns #next`);
  const $slides = document.querySelector(`${idCarrousel} .slides`);

  const $slidesImages = document.querySelectorAll(`${idCarrousel} .slides img`);

  let imageIndex = 0;
  let translateX = 0;

  document.addEventListener("click", e =>{
    
    // Boton Siguiente:
    if (e.target === $nextBtn || e.target === `${$nextBtn} *`) {

      if (imageIndex !== $slidesImages.length) {
        imageIndex++;

        /* Por cada foto (igual que arriba), lo debes dividir al 100%, es decir como tenemos 5 fotos en el slide, ponemos 20%*/
        translateX -= 20;
        
        $slides.style.transform = `translateX(${translateX}%)`;
      }

      if(imageIndex === $slidesImages.length){
        $slides.style.transform = `translateX(0%)`;        
        imageIndex = 0;
        translateX = 0;
      }
    }

    // Boton Anterior:
    if (e.target === $prevBtn || e.target === `${$prevBtn} *`) {

      if (imageIndex > 0 && imageIndex <= $slidesImages.length) {
        imageIndex--;
        translateX += 20;
        $slides.style.transform = `translateX(${translateX}%)`;
      }
      
      if (imageIndex <= 0) {

        // Comienza del 0, le agregamos -20 por cada imagen del slide
        translateX = -80;

        //Indicamos la cantidad de fotos
        imageIndex = 5;
        $slides.style.transform = `translateX(${translateX}%)`;
      }
    }
  })
}