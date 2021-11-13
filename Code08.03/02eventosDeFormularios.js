/* la validación de la información que esperamos recibir en un campo de un formulario suma una grata experiencia para las personas que usan nuestros sitios web, ya que en el mismo momento en que la persona ingresa la información. le estamos informando si la misma es la que esperamos recibir. Esto no solo es beneficioso para las personas visitantes, sino también para nuestro back-end. Estas validaciones nos aseguran que la información recibida ha pasado previamente por una serie de filtros que podrán garantizar que la información enviada esté en línea con lo que deseamos recibir.

EVENTOS:
FOCUS => Sucede cuando el usuario ingresa con el cursor a un campo input
BLUR => Sucede cuando el usuario abandona el campo input
CHANGE => Permite identificar que el valor de un campo cambio. Se puede aplicar sobre cualquiera de los campos, incluso sobre el formulario completo
SUBMIT => Identifica el momento en el que se cliquea sobre un boton o un campo input de tipo submit. Ya que es una funcion nativa de HTML, para evitar que este lo ejecute debe ir acompanado de preventDefault()
THIS.VALUE => El this permite identificar el evento que se ejecuta sobre un elemento determinado. El this.value permitira retornarnos la informacion dentro del campo que estamos analizando


Paso a paso para la validacion de formularios:
1) Capturar el formulario y los inputs que queremos validar con document.querySelector('name')
2) Asignar el evento onFocus al input de la contrasena para que cuando el usuario haga clic sobre el, aparezca un <small> que diga "Introducir como minimo 8 caracteres"
3) Asignar el evento onCharge al input de la contrasena para que una vez alcanzados los 8 caracteres, deje de aparecer el <small>
4) Asignar el evento onBlur al input de direccion para que cuando el usuario haga clic fuera de el, le salga un alert en caso de que el campo este vacio
5) Asignar el evento onSubmit del formulario
6) PRevenir que el formulario se mande usando preventDefault() 
7) Crear condicionales que chequeen el valor o largo de los inputs. En caso de haber errores, crear una propiedad dentro del objeto errores
8) En caso de que no existan errores, enviar el formulario

*/

window.addEventListener('load', function () {
    let campoNombre = document.querySelector(".name"); // 1) Capturo el campo del formulario

    campoNombre.addEventListener("focus", function () { // Atrapo el momento en el hace click en un campo Cuando usamos el método addEventListener(), el nombre de los eventos va sin el prefijo "on" y en minúscula.
        console.log(1)
    })
})


window.addEventListener('load', function () {
    let campoNombre = document.querySelector(".name"); // Capturo el campo del formulario

    campoNombre.addEventListener("blur", function () { // Atrapo el momento en el que termino de completar
        console.log(1)
    })
})


window.addEventListener('load', function () {
    let campoNombre = document.querySelector(".name"); // Capturo el campo del formulario

    campoNombre.addEventListener("change", function () { // Detecta cambios en el HTM de un campo
        console.log(1)
    })
})



window.addEventListener('load', function () {
    let form = document.querySelector("form.reservation"); // Capturo todo el formulario.clase

    form.addEventListener("submit", function (e) { // 

        e.preventDefault(); // Cancela el comport. por default definido por el HTML para que no se envie. Por lo gral se usa con un if else
        console.log(1)
    })
})