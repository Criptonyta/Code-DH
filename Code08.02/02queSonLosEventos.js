/* Un evento es una accion que transcurre en el navegador o es desencadenada por el usuario. 
es esa acción que se desencadena cuando la persona ejecuta una acción determinada o también lo puede hacer de igual manera la ventana (window) que carga el documento HTML.
Los eventos mas usados son:

onclick     => Cuando el usuario hace click
ondblclick  => Cuando el usuario hace doble click
onmouseover => Cuando el mouse se  mueve sobre el elemento
onmousemove => Cuando se mueve el mouse
onscroll    => Cuando se hace scroll
onkeydown   => Cuando se aprieta una tecla
onload      => Cuando se carga la pagina
onsubmit    => Cuando se envia un formulario

Recordemos que, cuando utilizamos el método .addEventListener(), el nombre del evento no lleva el prefijo “on” y se escribe en minúscula.

*/

// ONLOAD => El disparador para ejecutar el script es la carga del objeto document dentro del objeto window

window.onload = function () {
    console.log('el documento esta listo');
}

// ONCLICK => El disparador es un click sobre el elemento al cual le aplicamos esta propiedad

btn.onclick = function () {
    console.log('hiciste click');
}

// PREVENTDEFAULT => Evita que se ejecute el evento predeterminado del elemento al cual se lo estamos aplicando (elegido mediante los selectores). Puede usarse por ejemplo para que la etiqueta a deje de actuar como hiperlink y se comprote de otra forma

let hipervinculo = document.querySelector('a'); // atrapamos el elemento

hipervinculo.addEventListener('click', function (event) { // atrapamos el evento
    console.log('hiciste click');
    event.preventDefault(); // prevenimos la accion nativa
});