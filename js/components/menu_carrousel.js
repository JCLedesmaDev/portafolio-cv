export function sliderCarrusel(prevBtn, nextBtn, slides, slidesImgNumber){

  // const $btnSlides = document.querySelectorAll(".carrousel-btns");

  const $slides = document.querySelector(slides);
  const $slidesImagesNumber = document.querySelectorAll(slidesImgNumber);

  let imageIndex = 0;
  let translateX = 0;


  document.addEventListener("click", e =>{
    
    // Boton Siguiente:
    if (e.target.matches(nextBtn) || e.target.matches(`${nextBtn} *`)) {

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
    if (e.target.matches(prevBtn) || e.target.matches(`${prevBtn} *`)) {

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