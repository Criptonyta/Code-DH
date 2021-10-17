/*
RELACIONES N:N => "Un actor trabaja en muchas películas y una película tiene muchos actores".
Hay veces donde una tabla posee una relación de muchos a muchos. Es decir, muchos registros de nuestra tabla pueden estar relacionados con varios de otra. Para poder aclararle esta relación a Sequelize debemos utilizar el método .belongsToMany().

.belongsToMany() => recibe dos parámetros: el primero es el modelo con el que queremos relacionarlo (llamándolo a través del parámetro que contiene nuestros modelos) y el segundo es un objeto donde debemos detallar la relación

*/

Pelicula.associate = function (modelos) {
    Pelicula.belongsToMany(modelos.Actores, {
        as: "actores", // Le asigno un aliascon el que llamaremos luego a la relacion
        through: "actor_movie", // Es el nombre de la tabla pivot que usare
        foreignKey: "genre_id", // Indico la tabla del modelo que estaremos referenciando
        otherKey: "actor_id", // Indico la otra tabla que quiero usar
        timestamps: false // Aclaro si la tabla pivot posee o no timestamps
    });
}

/*
IMPLEMENTACION => 
a) Las consultas a la base de datos suelen recibir un objeto como parámetro.
b) Dentro de ese objeto deberíamos agregar un atributo include que recibe un array de objetos.
c) Cada objeto de ese array representa una relación. Debemos aclarar cuál queremos usar.
d) Para definir la relación creamos un atributo association que contenga el mismo alias que usamos en el modelo para llamar a la relación

*/


const db = require('../database/models');
db.Peliculas.findAll({
    include: [{
            association: "genero" //Incluimos las asociaciones(relaciones) que creamos en los modelos.
        },
        {
            association: "actores" //Incluimos las asociaciones(relaciones) que creamos en los modelos.
        }
    ]
}).then(resultados => {
    console.log(resultados);
})


/*
Finalmente, en la vista, llamo a las asociaciones a través de los atributos del modelo. Estos poseen el mismo nombre del alias que establecimos cuando creamos la relación

// Muestro el género al que pertenece la película
<%= pelicula.genero %>
 // Muestro los actores de la película
 <% for (let i = 0; i < pelicula.actores.length; i++) { %>
 <%= pelicula.actores[i] %>
 <% } %>


 */