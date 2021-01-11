export function sliderCarrusel(){

  const $nextBtn = document.querySelector(".carrousel-btns .next")
  const $prevBtn = document.querySelector(".carrousel-btns .prev")
  const $slides = document.querySelector(".slides")

  let i = 0;

  document.addEventListener("click", e=>{

    if (e.target === $nextBtn) {


      // $slides.scrollLeft += $slides.offsetWidth;
    
      $slides.style.transform = "translateX(25%)"

      i--;
      
      if (i < 0) {
        i = $slides.length - 1;
      }
      
      // $slides[i].classList.add("active");
    }

    // if (e.target === $prevBtn) {

    //   e.preventDefault();
    
    //   $slides[i].classList.remove("active");
    //   i++;
      
    //   if (i >= $slides.length) {
    //     i = 0;
    //   }
      
    //   $slides[i].classList.add("active");
    // }

  })
}