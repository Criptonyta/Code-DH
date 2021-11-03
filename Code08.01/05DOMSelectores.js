/*
El DOM, el famoso Document Object Model o llamándolo de otra forma: la manera en la que JavaScript interpreta al contenido HTML.
JavaScript nos permite acceder al DOM de diversas maneras y así poder manipular todo el contenido del documento en sí. Si bien con JavaScript podemos cambiar texto, estilos, atributos y más, todo inicia desde el momento en que "capturamos" a un elemento como tal.
Pero ¿cómo capturamos un elemento para poder acceder a él con JavaScript?
Así como en CSS, JavaScript tiene algo que llamamos selectores, que son una particularidad del lenguaje que nos permite elegir y "capturar" a un elemento puntual, o varios, de la estructura de nuestro HTML.

SELECTORES => Son usados para acceder a los elementos de una pagina, usandolo en combinacion con document. Retornan un solo elemento o una lista de ellos. 
Para ello, debemos declarar una variable para almacenar su contenido.
querySelector permite decirle a Js DONDE queremos realizar la modificacion

*/

let titulo = document.querySelector('.title') // recibe un string que indica el selector CSS del elemento del DOM y retorna el PRIMER elemento del DOM que cumple con la condicion (aquel que tiene la class=title en el html)

let nombres = document.querySelectorAll('.name') // retorna un listado de los elem. que coincidan con la busqueda. Retorna TODOS los elementos del DOM que cumplen con la condicion. Devuelve algo parecido a un array, que puede ser trabajado de forma similar. Por ejemplo:

for (const nombre of nombres) { //recorre nombres y devuelve cada nombre de forma independiente
    console.log(nombre)
}

let marca = document.getElementById('marca') // retorna un elemento cuyo id que coincida con el deseado. Retorna el elemento del DOM que cumpla con el id que buscamos. Cuando se usa, no es necesario indicar en el parametro el # ya que el metodo esta determinando que estoy buscando por id.

const barraDeNavegacion = document.getElementByClassName('nav-bar') // retorna un elemento cuya clase coincida con la deseada. Retorna el elemento del DOM que cumpla con la clase que buscamos. Cuando se usa, no es necesario indicar en el parametro el . ya que el metodo esta determinando que estoy buscando por clase.