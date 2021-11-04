// Para hacer las modificaciones en el DOM, siempre hay que seleccionar primero el objeto que quiero modificar 


// .innerHTML => Si queremos leer o modificar el contenido de una etiqueta HTML, creando un nodo en HTML

const nombre = document.querySelector('div.nombre').innerHTML // permite leer la etiqueta
const nombre = document.querySelector('div.nombre').innerHTML = 'Dario' // reemplaza/pisa el valor de la etiqueta
const nombre = document.querySelector('div.nombre').innerHTML += 'Dario' // adiciona el valor sin perder lo anterior

// .innerText => Si queremos leer o modificar el texto de una etiqueta HTML. Solo edita/agrega texto, no crea un nodo

const nombre = document.querySelector('div.nombre').innerText // retorna el contenido de div.nombre en string
const nombre = document.querySelector('div.nombre').innerText = 'Maria' //reemplaza/pisa todo el texto de div.nomb
const nombre = document.querySelector('div.nombre').innerText += 'Messi' //adiciona el valor sin perder lo anterior. El resultado seria <div class='nombre'>Maria Messi</div>


// style => Permite sobreescribir y leer las reglas de CSS que se aplican sobre un elemento seleccionado. Mientras que en CSS las reglas llevan guiones (ej. font-size), en Js, las reglas son escritas con camelCase (fontSize)

let titulo = document.querySelector('.title');
titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '12px'