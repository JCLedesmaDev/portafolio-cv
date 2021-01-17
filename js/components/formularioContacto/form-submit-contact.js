export function formContact(){

  const d = document;

  //VALIDACION DEL FORMULARIO
  d.addEventListener("keyup", (e) =>{

    //Aqui podremos en funcion las validaciones del form a la hora de escribir
    if (e.target.matches(".contenedor-form [required]")) {

      //1) Almacenamos el elemento seleccionado en una variable.
      let $inputForm = e.target;

      /* 1-b) Almacenamos en una constante, las secciones de validacion y error que posee cada "contenedor-form" a la que accedemos con el "e.target".

      Recuerda que en el HTML, dijimos: <!-- El id de cada contenedor debe estar compuesto por "form__" seguido del name de su respectivo input o textarea (se utiliza en JS) -->*/
      const $formValidate = d.querySelector(`#form__${$inputForm.name} .form__validacion-estado`);
      const $formError = d.querySelector(`#form__${$inputForm.name} .form-error`);

      //2) Almacenamos en "patternInput", los patrones que poseen los elementos del formulario. Ya sea por atributo o por un data-attribute.
      let patternInput = $inputForm.pattern || $inputForm.dataset.pattern;

      //3) Si nuestro elemento posee un patron y no esta vacio, procedemos a...
      if (patternInput && $inputForm.value !== "") {

        //3-a) Crear una expresion regular a base del patron que posee dicho elemento.
        let expReg = new RegExp(patternInput)

        //3-b) Si el contenido de nuestro input, cumple con el patron de nuestra "expresion regular"
        if (expReg.exec($inputForm.value)) {

          //Cambiamos el color del icono a correcto(verder)
          $formValidate.classList.remove("form-incorrecto");
          $formValidate.classList.add("form-correcto");

          //Cambiamos el icono de la X al icono valido
          $formValidate.classList.add('fa-check-circle');
          $formValidate.classList.remove('fa-times-circle');

          //Quitamos la clase para que no aparezca el mensaje de error
          $formError.classList.remove("form-error-activo")

        }else{

          //Cambiamos el color del icono a incorrecto(rojo)
          $formValidate.classList.add("form-incorrecto");
          $formValidate.classList.remove("form-correcto");

          //Cambiamos el icono de valido a la X
          $formValidate.classList.remove('fa-check-circle');
          $formValidate.classList.add('fa-times-circle');

          //Agregamos la clase para que aparezca el mensaje de error
          $formError.classList.add("form-error-activo")

        }
      } 
      
      //4) Si nuestro elemento posee un patron y SI esta vacio, procedemos a...
      if (patternInput && $inputForm.value === "") {

        //Quitamos el color del icono en cuestion
        $formValidate.classList.remove("form-incorrecto");
        $formValidate.classList.remove("form-correcto");

        //Quitamos el icono en cuestion
        $formValidate.classList.remove('fa-check-circle');
        $formValidate.classList.remove('fa-times-circle');

        //Quitamos la clase para que no aparezca el mensaje de error
        $formError.classList.remove("form-error-activo")
      }

      //5) Si nuestro elemento no posee ningun patron
      if (!patternInput) {
        
        //Si esta vacio, pues que muestre el mensaje de error, caso contrario, muestra el que esta todo correcto
        if ($inputForm.value === "") {  

          //Cambiamos el color del icono a incorrecto(rojo)
          $formValidate.classList.add("form-incorrecto");
          $formValidate.classList.remove("form-correcto");

          //Cambiamos el icono de valido a la X
          $formValidate.classList.remove('fa-check-circle');
          $formValidate.classList.add('fa-times-circle');

          //Agregamos la clase para que aparezca el mensaje de error
          $formError.classList.add("form-error-activo")

        }else{

          //Cambiamos el color del icono a correcto(verder)
          $formValidate.classList.remove("form-incorrecto");
          $formValidate.classList.add("form-correcto");

          //Cambiamos el icono de la X al icono valido
          $formValidate.classList.add('fa-check-circle');
          $formValidate.classList.remove('fa-times-circle');

          //Quitamos la clase para que no aparezca el mensaje de error
          $formError.classList.remove("form-error-activo")
        }
      }
    }
  })

  //ENVIO DEL FORMULARIO POR FormSubmit
  d.addEventListener("submit", (e) =>{

    e.preventDefault();

    const $formulario = d.querySelector(".contacto-form");
    const $loader = d.querySelector(".contacto-form-loader");
    const $response = d.querySelector(".contacto-form-response");

    $loader.classList.remove("none");

    //Le brindamos nuestro Email y sus respetivos parametros
    fetch("https://formsubmit.co/ajax/5e0986ed3ab6208281bd2ec47b0252c1", {
      //Indicamos el metodo
      method: "POST",
      //Le damos como contenido a enviar, todo nuestro formulario.
      body: new FormData(e.target)
    })

      //Caso de haber un error, forzamos ir al "catch", caso contrario, ejecutamos el codigo correspondiente
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(json =>{
        // console.log(json)

        //Activamos la ventana "modal" = "Muchas gracias por su consulta"
        location.hash = "#gracias";
        $formulario.reset();

      })
      .catch( err =>{

        let mensaje = err.statusText || "Ocurrio un error al enviar su consulta, intente nuevamente.";

        //Imprimimos dicho mensaje de error dentro del h3 del modal del formulario.
        $response.querySelector("h3").innerHTML = `Error ${err.status}: ${mensaje}`;

      })
      .finally(()=>{

        //Desactivamos el loader
        $loader.classList.add("none");

        //Quitamos los iconos del formulario
        document.querySelectorAll(".form__validacion-estado").forEach(el =>{
          el.classList.remove('fa-check-circle');
          el.classList.remove('fa-times-circle');
        })

        //Le indicamos a los cuantos seg, cerrar el modal
        setTimeout(() => {
          location.hash = "#close"
        }, 3000);
      })

  })
}











// export function submitForm() {
  
//   const $form = d.querySelector(".contacto-form"),
//    $loader = d.querySelector(".contacto-form-loader"),
//    $response = d.querySelector(".contacto-form-response");


//   $form.addEventListener("submit", e =>{

//     e.preventDefault()


//     // Faltan validaciones del formulario
    
//     $loader.classList.remove("none");

//     //Ese codigo nos lo da formSubmit para reemplazar a nuestro email
//     fetch("https://formsubmit.co/ajax/juancruzledesma@yahoo.com.ar", {

//       method: "POST",
//       body: new FormData(e.target)

//     })
//       .then(res => (res.ok ? res.json(): Promise.reject(res)))
//       .then( json =>{
//         console.log(json)
      
//         //Para activar la vetnana "modal" = "Muchas gracias por tus comentarios"
//         location.hash = "#gracias";
//         $form.reset();

//       }).catch( err =>{
//         console.log(err);

//         let message = err.statusText || "Ocurrio un error al enviar su comentario, intenta nuevamente."
//         $response.querySelector("h3").innerHTML = ` Error ${err.status}: ${message}`

//       }).finally( ()=>{
//         //desactivamos la img de enviando
//         $loader.classList.add("none");
//         setTimeout(() => {
//           location.hash = "#close"
//         }, 3000);
//       })

//   })

// }