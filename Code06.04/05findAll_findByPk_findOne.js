// ------ Segun el video ------ El find es el eqeuivamente en js al SELECT en sql (por ejemplo findAll equivale a 'SELECT * FROM') Sus variaciones son: findAll, findByPk, findOne. Desde el controlador de peliculas (moviesController.js), hago lo siguiente para que envie los resultados de la consulta a la vista listadoDePeliculas.ejs:


let db = require('../database/models') //importo la variable db ya que interactuare con la BD

let moviesController = {
    list: function (req, res) {
        db.Peliculas.findAll() //junto con db, uso el alias de tabla que habia definido en el modelo
            .then(function (peliculas) { //como los pedidos a la BD son asincronicos, meto un then
                res.render('listadoDePeliculas', { //como ya tengo la vista hecha, solo la renderizo
                    peliculas: peliculas
                })
            })
    },
    add: function (req, res) {

    },
    create: function (req, res) {

    },
    delete: function (req, res) {

    },
    detail: function (req, res) {
        db.Peliculas.findByPk(req.params.id) // asumiendo que en la vista y en el router, ya tengo mapeada la url
            .then(function (pelicula) { // meto then, indicando como parametro una sola pelicula para detalles 
                res.render('detallePelicula', {
                    pelicula: pelicula
                })
            })
    }
}



/* ------ Segun el apunte ------

Sequelize usa la funcion find para buscar informacion en la BD. Allgunas variaciones de este son findAll(), findOne(), findByPk

*/

const db = require('../database/models'); // genera la conexion con la BD
db.Usuario.findAll() // Para buscar todos los datos registrados en la BD, devuelve una promesa
    .then((resultados) => {
        console.log(resultados);
    });


db.Usuario.findOne({ // Para buscar resultados que coincidan con los atributos determinados en el where
    where: {
        name: 'Tony'
    }
}).then((resultado) => {
    console.log(resultado);
});


db.Usuario.findByPk(42) //Busca un elemento con el valor pasado de la llave primaria 
    .then((resultado) => {
        console.log(resultado);
    });