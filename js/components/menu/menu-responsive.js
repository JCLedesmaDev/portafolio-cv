export function menu_Header_Responsive(menuBtn, menu, menuEnlaces, pantalla){

  const d = document;
  const $menubtn = d.querySelector(menuBtn);
  const $menu = d.querySelector(menu);


  d.addEventListener("click", e =>{


    //Si el elemento seleccionado (por el evento click), posee la clase que tendra el parametro "btnPlay" ejcuta el siguiente codigo
    
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)){
      $menu.classList.toggle("is-active")
      $menubtn.firstElementChild.classList.toggle("none");
      $menubtn.lastElementChild.classList.toggle("none");
    }


    // Una vez que hayamos abierto el menu y le hacemos click a los enlaces del menu, se nos cerrara todo y volveran los iconos como antes
    if (e.target.matches(menuEnlaces)){
      $menu.classList.remove("is-active")
      $menubtn.firstElementChild.classList.remove("none");
      $menubtn.lastElementChild.classList.add("none");
    }

    // Una vez que hayamos abierto el menu y le hacemos click a la pantalla en blanco, se nos volvera todo como antes
    if (e.target.matches(pantalla) || e.target.matches(`${pantalla} *`)) {

      $menu.classList.remove("is-active")
      $menubtn.firstElementChild.classList.remove("none");
      $menubtn.lastElementChild.classList.add("none");

    }
    
  })
}

