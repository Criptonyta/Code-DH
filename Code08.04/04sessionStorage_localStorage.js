// Anteriormente vimos las sesiones y las cookies. Estos procedimientos son algo que sucede del lado del servidor. Pero del lado del cliente, ¿hay algo que podamos hacer de manera similar? Sí. Para esto el lenguaje nos provee dos objetos llamados: localStorage y sessionStorage. La función de ambos es almacenar datos en el navegador:

// localStorage => permitirá almacenar información por tiempo indeterminado.

// sessionStorage => permitirá guardar información en sesión. Eso quiere decir que si usamos esta opción y cerramos el navegador, la información aquí almacenada se perderá.


//¿para qué sirve esta funcionalidad si ya tenemos la misma desde el lado del servidor? El almacenamiento local y de sesión del lado del front-end nos permite guardar información importante (pensando como desarrolladores) y dejarla allí antes de ser enviada al servidor.Por ejemplo, pensemos en su carrito de compras. Seguramente, muchas veces hemos agregado productos a un carrito y repentinamente salimos de la página, para simplemente volver instantes después y darnos cuenta que las cosas que agregamos al carrito siguen ahí, intactas. Eso es posible gracias al almacenamiento local del navegador. Esta funcionalidad mejora la experiencia de usuario, sin tener que saturar el servidor de peticiones que nos sabemos si se van a concretar del lado del cliente.

// METODOS:

localStorage.setItem('nombre', 'Dario') // Permite adicionar items al objeto, siendo el primer parametro la clave y el segundo su valor

localStorage.getItem('nombre') // Devuelve el valor de la clave que le pasemos como parametro

localStorage.removeItem('nombre') // Busca la clave del objeto y la elimina

localStorage.clear('') // Borra todo el contenido almacenado en storage


// EJEMPLO:

window.addEventListener('load', function () {

    if (localStorage.getItem("nombreUsuario") == null) { // verifica si existe algo guardado en localStorage
        let nombre = prompt("Decinos tu nombre") // Cuando entra al sitio, le despliega un prompt
        document.querySelector(
            ".bienvenida").innerHTML = "Hola" // Llamo a la clase de la div del HTML para agregar el texto Hola
        localStorage.setItem('nombreUsuario', nombre) // Almacena en localStorage el resultado de la variable nombre
        console.log(localStorage)

    } else {
        let nombre = localStorage.getItem("nombreUsuario") // 
        document.querySelector(
            ".bienvenida").innerHTML = "Hola" // Llamo a la clase de la div del HTML para agregar el texto Hola
    }
})