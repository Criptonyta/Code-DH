// Bastante lo hemos mencionado en el átomo anterior: antes de enviar datos al servidor, es importante asegurarse de que la información suministrada por parte de la persona visitante sea la que justamente estamos esperando recibir para posteriormente procesar.
// Esto se denomina validación "on time" y no solamente nos sirve para procurar una limpieza de los datos, sino que a su vez nos ayuda a garantizar una excelente user experience. Pues qué molesto que es cuando teniendo un error en el front-end, es necesario enviar la información al servidor para que este la verifique y nos haga ver el error cometido, ¿no?
// Los procesos de validación no son para nada triviales, por el contrario, son una parte fundamental de nuestro proceso como desarrolladores. Además, vale la pena aclarar que nunca está de más sumar capas de validación a nuestro sistema. Así como son necesarias las del back-end, de igual manera lo son las que implementamos del lado del front-end.

window.addEventListener('load', function () {
    let formulario = document.querySelector('form.reservation'); // Atrapo el formulario con la clase reserva

    formulario.addEventListener('submit', function (e) {

        let errores = []; // Creo un array de errores para ir guardando los resultados y mostrarlos en el html

        //Inicio las validaciones, capturando primero cada campo del form
        let campoNombre = document.querySelector("input.name");

        if (campoNombre.value == "") { // Si el valor de campoNombre es vacio, entonces...
            errores.push("El campo de nombre debe estar completo") // Que mande el error a la variable
        } else if (campoNombre.value.length < 3) { // Si ingreso menos de 3 caracteres, entonces....
            errores.push("El campo nombre debe tener al menos 3 caracteres")
        }


        //Copio y pego y continuo las valicaciones de los otros campos del form
        let campoMensaje = document.querySelector("input.message");

        if (campoMensaje.value == "") { // Si el valor de campoMensaje es vacio, entonces...
            errores.push("El campo de mensaje debe estar completo")
        }

        //Copio y pego y valido el campo de fecha
        let campoFecha = document.querySelector("input.date");

        if (campoFecha.value == "") { // Si el valor de campoFecha es vacio, entonces...
            errores.push("El campo de mensaje debe estar completo")
        }

        // activar el preventDefault y anular el envio del formulario, primero verifico si el array de errores esta vacio o no
        if (errores.length > 0) {
            e.preventDefault(); //Prevengo el comportamiento por default del evento submit solo si hay error

            let ulErrores = document.querySelector('div.errores ul')
            for (let i = 0; i < errores.length; i++) { // recorre el array de errores
                // al ulErrores, le modifico el contenido y agrego la descripcion de cada error encontrado
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })
})

/* 
Para mostrar los errores, en el documento HTML agrego algo asi:

<section class = "errores">
<ul>...</ul>
</section>

*/