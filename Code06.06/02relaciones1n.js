/* Dentro del paquete de Sequelize las relaciones y cómo se manejan de diferencia de MySQL, en donde tenemos los JOINS para unir tablas y traer los datos relacionales, en Sequelize esta "unión" se lleva a cabo de otra manera, una muy distinta. SEQUELIZE LLAMA A LAS RELACIONES ENTRE TABLAS COMO ASOCIACIONES Y LAS RELACIONES DEBEN ESTABLECERSE EN AMBAS TABLAS PARA QUE SEQUELIZE PUEDA RECONOCERLOS

RELACIONES 1:N => Ej. "Un usuario tiene muchas imágenes y una imagen pertenece a un usuario". Sequealize utiliza dos funciones para administrar estas relaciones: a) HAS MANY (tiene muchos) y b) BELONGS TO (pertenece a), usando associate() en conjunto con el metodo define() para determinar esa relacion:


.associate() => Luego de haber realizado nuestro diseno de relaciones de tablas, pasamos a definirlo con el metodo .define(), llamando a la variable creada, utilizando asociate para definir las relaciones. Associate es una funcion anonima que recibe solo un parametro (un objeto que contiene todos los modelos):
*/

const Pelicula = sequelize.define(alias, cols, config);
Pelicula.associate = function (models) {
    // relacion
}



// a) hasMany (N:1) => Se usa para indicar que uno o mas registros pueden estar asociados a solo una tabla (relacion de N:1). Recibe dos parametros: el modelo con el que queremos relacionarlo y un objeto en donde se detalla la relacion

const Genero = sequelize.define(alias, cols, config)
Genero.associate = function (models) {
    Genero.hasMany(models.Peliculas, {
        as: 'peliculas', // Se asigna un alias con el que luego se llamara a la relacion
        foreignKey: 'genre_id' // Especifico la FK que vinculara a las tablas del modelo a asociar
    })
}




// b) belongsTo (1:N) => Se usa en database>models>Pelicula.js para decir que un registro puede estar asociado a uno o mas de otra tabla (relacion de 1:N). .belongsTo() recibe dos parametros: el modelo con el cual queremos relacionarlo y el segundo es un objeto en donde se detalla la relacion

const Pelicula = sequelize.define(alias, cols, config)
Pelicula.associate = function (models) {
    Pelicula.belongsTo(models.Generos, {
        as: 'generos', // Se asigna un alias con el que luego se llamara a la relacion
        foreignKey: 'genre_id' // Especifico la FK que vinculara a las tablascdel modelo a asociar
    })
}


// Lo siguiente es que debo actualizar tambien el moviesController.js

let moviesController = {
    list: function (req, res) {
        // le aclaro al findAll que quiero que traiga la relacion para que haga el innerJoin, usando el atributo include con un array, explicandole como va a tener que traer esa relacion (llamandolo con el alias que defini en la asociacion)
        db.Peliculas.findAll({
                include: [{
                    association: "generos"
                }]
            })
            .then(function (peliculas) {
                res.render("listadoDePeliculas", {
                    peliculas: peliculas
                })
            })
    }
}

/* Por ultimo, modifico la vista, incluyendo la etiqueta EJS y trayendo los datos que quiera de la BD (metiendo un if en caso de que la columna nombre no tenga un genero asignado):

<%=if (peliculas[i].generos) { %> } 
<%=peliculas[i].generos.name%>
<% } %>

*/