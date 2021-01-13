export function menu_Scroll_Spy() {

  //Almacenamos en una const, todos los elementos de tipo "section" que tienen el data-attribute "data-scroll-spy"
  const $sections = document.querySelectorAll("main section[data-scroll-spy]")

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

    //threshold: [.8, 0.95]
    threshold: [.6, 1]
    
  })
  
  $sections.forEach(el => observer.observe(el))
  
}
