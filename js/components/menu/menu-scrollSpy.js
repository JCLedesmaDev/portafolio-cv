export function menu_Scroll_Spy() {

  //Almacenamos en una const, todos los elementos de tipo "section" que tienen el data-attribute "data-scroll-spy"
  const $sections = document.querySelectorAll("main section[data-scroll-spy]")

  console.log($sections)

  const cb = (entries)=>{

    entries.forEach(entry =>{

      //Traemos el "id" de cada elemento seccion
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {

        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")

      }else{

        document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")

      }

    })

  }

  const observer = new IntersectionObserver(cb, {

    //Limites => Va de 0 a 1 (en porcentajes 1 = 100%). El 0 significa que en cuanto apenas se vea un 0% del contenido de la siguiente seccion, se va a marcar
    threshold: 0.40,

    //Se va a activar cuando tenga entre del 40% al 45% de visibilidad
    // threshold: [.4, .6]
  })
  
  $sections.forEach(el => observer.observe(el))
  
}
