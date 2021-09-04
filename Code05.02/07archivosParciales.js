// Es común tener ciertos elementos visuales que suelen repetirse constantemente (barra de navegación o el pie de página por ejemplo). EJS nos provee una manera de modularizar nuestra estructura HTML y generar bloques de código que se repiten, los cuales pueden ser fácilmente incrustados en el resto de las vistas.

// COMO MODULARIZAR:
    // 1) Identificar todas las partes del proyecto que se repiten
    // 2) Convertir cada una de esas partes en archivos parciales que contengan unicamente ese codigo. Para eso , cortar y pegar cada parte, crear un archivo nuevo y llamarlo con un nombre representativo con la extension ejs.
    // 3) En la carpeta views, crear una subcarpeta 'partials' y guardar esas vistas alli
    // 4) Para disponer del codigo que modularizamos, en el main, debemos usar la funcion include (ruta del archivo a incluir) debajo de la etiqueta <Html> y usando las etiquetas ejs <%- %>
    //                      <%- include ('./partials/head') %> 

