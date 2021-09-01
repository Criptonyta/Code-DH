// TAGS PARA CONTENIDO DINAMICO => 
//<% %>           => Se usa para embeber codigo Javascript (condicionales, ctrol de flujos, etc)
//<%= %>          => Se usa para embeber codigo e imprimir el resultado de una expresion o valor

// Los archivos EJS continuan soportando las etiquetas tradicionales de HTML pero en EJS se les puede aplicar dinamismo. Cuando necesitamos que la vista renderice contenido dinamico, se usa la etiqueta <% %> y dentro de ella una variable, condicionales o cualquier otro codigo Js:

// 1) <%= user.firstname %>                  || Solo para mostrar contenido dinamico
 
// 2) <% if(4 < 5) { %> <h2>El 4 es menor que el 5</h2> <% } %>  || Lo escribo asi cuando quiero escribir un texto HTML en el medio

// 3) <% if(nombre) { %> <h2>Hola <%= nombre %></h2>}  <% } %>    || Es una mezcla de las dos anteriores ya que contiene contenido dinamico (el nombre) pero tambien texto en HTML (el H2)

// Otro Ejemplo:

// for(let i = 0; i < 5; i++) {}           => Como primer paso, podemos escribir la sentencia Js
// <% for(let i = 0; i < 5; i++) { %> <% } %> => Luego lo encierro entre las etiquetas <% %>
// <% for(let i = 0; i < 5; i++) { %> <p>Probando las etiquetas EJS </p> <% } %>   => Por ultimo, agrego el contenido que quiero mostrar por cada interacion del ciclo for





