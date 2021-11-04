let titulo = document.querySelectorAll('.title');
console.log(titulo)
let titulo2 = document.getElementById('miTitulo');
console.log(titulo2)
titulo2.innerHTML = "<h1>Otro titulo</h1>"
// OUTPUT: Nos crea un nodo html con un h1
titulo2.innerText = "<h1>Otro titulo</h1>"
// OUTPUT: Nos agrega texto, no renderiaza el H1
titulo2.style.fontSize = '5em'
// Pisa el atributo font-size de css
titulo2.classList.add('agregar')
// Agrega una clase de css
titulo2.classList.remove('agregar')
// Borra una clase de css
titulo2.classList.toggle('agregar')
// Se fija si esta la clase de css. Si esta la elimina, sino, la agrega. Y devuelve un booleano
titulo2.classList.contains('agregar')
// Nos devuelve un booleano dependiendo si esta o no la clase en el nodo html

let userName = prompt("Ingrese su nombre de usuario:")
if (userName == 'jere') {
    alert("Sos el peor profe amigo no entendi nada")
    if (confirm("Te gusto la clase?")) {
        alert("Bien ahi, hace la tarea")
    }
} else {
    alert("Gran developer");
}