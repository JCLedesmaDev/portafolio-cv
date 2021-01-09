export function menu_desplegable() {
  
  const d = document;
  const $nav = d.getElementById("nav");
  let Desplazamiento_Actual = window.pageYOffset;


  if (Desplazamiento_Actual >= 150) {

    $nav.classList.replace("navModelo1", "navModelo2")
  }else{
    $nav.classList.replace("navModelo2", "navModelo1")
  }
}
