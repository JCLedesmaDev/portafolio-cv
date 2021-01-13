export function submitForm() {
  
  const $form = d.querySelector(".contacto-form"),
   $loader = d.querySelector(".contacto-form-loader"),
   $response = d.querySelector(".contacto-form-response");


  $form.addEventListener("submit", e =>{

    e.preventDefault()


    // Faltan validaciones del formulario
    
    $loader.classList.remove("none");

    //Ese codigo nos lo da formSubmit para reemplazar a nuestro email
    fetch("https://formsubmit.co/ajax/juancruzledesma@yahoo.com.ar", {

      method: "POST",
      body: new FormData(e.target)

    })
      .then(res => (res.ok ? res.json(): Promise.reject(res)))
      .then( json =>{
        console.log(json)
      
        //Para activar la vetnana "modal" = "Muchas gracias por tus comentarios"
        location.hash = "#gracias";
        $form.reset();

      }).catch( err =>{
        console.log(err);

        let message = err.statusText || "Ocurrio un error al enviar su comentario, intenta nuevamente."
        $response.querySelector("h3").innerHTML = ` Error ${err.status}: ${message}`

      }).finally( ()=>{
        //desactivamos la img de enviando
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close"
        }, 3000);
      })

  })

}