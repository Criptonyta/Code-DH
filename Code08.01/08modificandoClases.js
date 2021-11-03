// ¿qué pasaría si ese mismo conjunto de estilos los quisiéramos agregar de manera constante?
// Seguramente, bajo este escenario lo mejor será crear una clase en nuestra hoja de estilos y agrupar todo lo que queremos en esa regla. Ahora bien, la pregunta que nos surge aquí será: ¿cómo hacemos para aplicar ahora esa clase?

// .classList.Add() => permite agregar una nueva clase a un elemento seleccionado. Antes de los cambios veriamos <p class='cita'>El veloz murcielago comia feliz</p> a este nuevo <p class='cita italicas'>El veloz murcielago comia feliz</p>

let cita = document.querySelector('.cita');
cita.classList.add('italicas')


// .classList.remove() => permite quitar una clase existente al elemento seleccionado. Antes de los cambios veriamos <p class='cita'>El veloz murcielago comia feliz</p> a este nuevo <p class=''>El veloz murcielago comia feliz</p>

let cita = document.querySelector('.cita');
cita.classList.remove('cita')


// .classList.toggle() => Revisa si existe una clase para el objeto seleccionado y si la encuentra la remueve y si no existe, la agrega. Antes de los cambios veriamos <p class='italicas'>El veloz murcielago comia feliz</p> a este nuevo <p class='italicas cita'>El veloz murcielago comia feliz</p>

let cita = document.querySelector('p');
cita.classList.toggle('cita')


// .classList.contains() => permite preguntar si un elemento tiene una clase determinada, devolviendo un booleano, que podria usarse con un if.

let cita = document.querySelector('.italicas');
cita.classList.contains('cita') // => devuelve false

let cita = document.querySelector('.italicas');
cita.classList.contains('italicas') // => devuelve true