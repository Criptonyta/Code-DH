/*
“El objeto window representa la ventana que contiene al documento y el objeto document representa al DOM (documento HTML) cargado en esa ventana.”. Es por ello que se acostumbra decir que Js del lado del frontend es un lenguaje orientado a objetos
Window y Document son dos objetos mediante los cuales podremos manipular la interfaz que interactúa con el usuario, sin tener que hacer peticiones al servidor y devolverlas al usuario
Hay que recordar que el DOM (Document Object Model) representa al documento que se carga en el navegador como un árbol de nodos, en donde cada nodo representa una parte del documento. 

window (puede ser asimilable al viewport) y document son objetos nativos de Js (pueden ser llamados cuando los necesitemos y no es necesario declarar una variable para ellos) es la manera en la que JavaScript nos da acceso a los elementos presentes en el documento HTML para que a través de estas funcionalidades podamos manipular el contenido según nuestro criterio y necesidades.

Ejemplos desde la consola del navegador:

*/

window.innerHeight
window.innerWidth = 300
window.location // Entrega un objeto literal con un monton de informacion
window.location.href = 'http://digitalhouse.com' // Me redirige a la pagina indicada

document // permite trabajar con el contenido del documento para manipular cosas del documentos
document.bgColor = 'red' // cambia el color de fondo
document.styleSheets // retorna las hojas de estilo vinculadas al documento