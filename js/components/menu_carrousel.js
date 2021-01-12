export function sliderCarrusel(idCarrousel){

  const $prevBtn = document.querySelector(`${idCarrousel} .carrousel-btns #prev`);
  const $nextBtn = document.querySelector(`${idCarrousel} .carrousel-btns #next`);
  const $slides = document.querySelector(`${idCarrousel} .slides`);
  const $slidesImagesNumber = document.querySelectorAll(`${idCarrousel} .slides img`);

  let imageIndex = 0;
  let translateX = 0;

  document.addEventListener("click", e =>{
    
    // Boton Siguiente:
    if (e.target === $nextBtn || e.target === `${$nextBtn} *`) {

      if (imageIndex !== $slidesImagesNumber.length) {
        imageIndex++;
        translateX -= 25;
        $slides.style.transform = `translateX(${translateX}%)`;
      }

      if(imageIndex === $slidesImagesNumber.length){
        $slides.style.transform = `translateX(0%)`;        
        imageIndex = 0;
        translateX = 0;
      }
    }

    // Boton Anterior:
    if (e.target === $prevBtn || e.target === `${$prevBtn} *`) {

      if (imageIndex > 0 && imageIndex <= $slidesImagesNumber.length) {
        imageIndex--;
        translateX += 25; 
        $slides.style.transform = `translateX(${translateX}%)`;
      }
      
      if (imageIndex <= 0) {
        translateX = -75;
        imageIndex = 4;
        $slides.style.transform = `translateX(${translateX}%)`;
      }
    }
  })
}