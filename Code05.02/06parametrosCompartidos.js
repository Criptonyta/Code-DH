// El motor de plantillas permite compartir informacion desde los controladores hacia las vistas

// COMO MOSTRAR UNA VISTA
// En el controlador, se ejecuta el objeto response del metodo render pasandole como argumento la vista a renderizar:

const controller = {
    mostrarPeliculas: (req, res) => {
        res.render('peliculas')         //no hace falta ni el directorio ni la extension
    }
}

// PARA ENVIAR LOS DATOS A UNA VISTA
// El metodo render, puede recibir un objeto literal como segundo parametro en el que podemos almacenar la informacion 

const controller = {
    mostrarPeliculas: (req, res) => {
        res.render('peliculas', {})         //en esas llaves va el obj literal
    }
}

// Al objeto, podemos asignarle tantas propiedades y valores como sea necesario. El nombre de cada propiedad sera el que usemos para disponer de esa informacion de la vista.

const nombrePelicula = 'Batman';
const controller = {
    mostrarPeliculas: (req, res) => {
        res.render('peliculas', {pelicula: nombrePelicula})       
    }
}

// Para enviar mas de un dato, solo necesitamos agregar mas propiedades al objeto literal

const peliculas = ['Deadpool', 'The Joker', 'Batman'];
const controller = {
    mostrarPeliculas: (req, res) => {
        res.render('peliculas', {
            lista: peliculas,
            enOferta: true,
            genero:"accion"
        })       
    }
}


// COMO RECIBE LOS DATOS LA VISTA?
// Para recibir un solo dato => Necesitamos encerrar en el HTML, la variable enviada desde el controlador. PAra eso la envolvemos con la etiqueta de impresion <%= %>. 

/* 
<div>
<h1>Pelicula Titulo: </h1>
<span><%= pelicula.toUpperCase() %></span>  // Tambien podemos usar con ella otros metodos Js.
</div> 
*/


// Para recibir mas de un dato => Accedemos desde el HTML a cada propiedad del objeto que creamos en el controller usando sus nombres directamente

/*

<% for(let pelicula of lista) { %>
    <h2>
        El titulo de la pelicula es <%= pelicula %> y el genero es <%= genero %>
    </h2>
    <% if (enOferta) { %>
        <p>25% de descuento alquilando esta pelicula</p>
    <% } %>
<% } %>

*/
