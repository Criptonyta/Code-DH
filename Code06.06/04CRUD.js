/* INTEGRACION X CIERRE DEL MODULO REVISION PASO A PASO|| CRUD => CREACION LECTURA ACTUALIZACION Y BORRADO

1) Desde la terminal => Crear el proyecto con express-generator e instalar EJS
express nombreDelProyecto --EJS

2) Desde la terminal => Instalar los paquetes que trae express generator
npm install

3) Desde VSC => Instalo sequelize para explicarle al sistema en express como esta armada la BD 
npm install -g --save sequelize sequelize-cli

4) Desde VSC => Instalo MySQL ya que estaremos trabajando con esas BDs
npm install --save mysql2

5) Desde VSC => En la raiz del proyecto, creo el archivo .sequelizerc con este contenido (https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp)

const path = require('path')
module.exports = {
  config: path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
}

6) Desde la terminal => Inicio sequelize para que cree la carpeta database y dentro de ella la carpeta config con el config.js
sequelize init

7) Desde el database>config>config.js => Le agrego el module.exports al inicio del archivo para que la primera linea quede asi y luego modifico el resto de las configuraciones:
*/
module.exports = {
    "development": {
        "username": "root",
        "password": "Monito123!", //ACTUALIZO LA CONTRASENA QUE VENIA X DEFAULT (null,)
        "database": "movies_db", //ACTUALIZO LA BD QUE VENIA X DEFAULT "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}

/*
8) Desde la carpeta models => Debemos explicarle a sequelize cual es la forma de nuestra BD y creo los archivospara nuestras tablas que seran Actor.js, Pelicula.js, Genero.js

9) MODELS (ACTOR.JS + PELICULA.JS + GENERO.JS) | DEFINO EL MODELO => Dentro de cada uno de los archivos del modelo (de la carpeta models), hago la configuracion de exportacion atraves de la funcion que recibe 2 parametros a) sequelize (que es el parametro que vamos ausar para crear este modelo) y b) dataTypes (que va a hablar de los tipos de columans que tenemos en nuestra BD). En cada caso, definen una variable (con el nombre del archivo). 
A seguir,  le meto el define() que va a recibir 3 parametros a) alias, b) cols, c) config.
Luego del define, le indico como quiero que haga las asociaciones
*/

// En Genero.js:

module.exports = function (sequelize, dataTypes) {
    let alias = "Genero"; // Como sequelize llamara a nuestra tabla y que usaremos para las consultas

    let cols = { // defino las columnas en objeto literal y el formato de sus campos
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models) { // Recibe los modelos asi automaticamente recibe lo que vaya creando
        Genero.hasMany(models.Pelicula, { // Relacion de uno a muchos. Recibe el Alias de la tabla vinculada
            as: "peliculas", // Nombre de la asociacion de esas tablas
            foreignKey: "genre_id" // Indico cual es el campo que vincula ambas tablas
        });
    }
    return Genero
}


// En Pelicula.js:
module.exports = function (sequelize, dataTypes) {
    let alias = "Pelicula"; // Como sequelize llamara a nuestra tabla y que usaremos para las consultas

    let cols = { // defino las columnas en objeto literal y el formato de sus campos
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        lenght: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataType.DATE
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function (models) { // Recibe los modelos asi autom recibe lo que vaya creando
        Pelicula.belongsTo(models.Genero, { // Relacion de uno a muchos. Recibe el Alias de la tabla vinculada
            as: "genero", // Nombre de la asociacion de esas tablas (singular xp tiene 1 solo)
            foreignKey: "genre_id" // Indico cual es el campo que relaciona a ambas tablas
        });

        Pelicula.belongsToMany(models.Actors, { // Creo la tabla intermedia. Relacion de muchos a muchos. 
            as: "actores", // Nombre de la asociacion de esas tablas
            through: "actor_movie", // Defino el nombre de la tabla pivot(intermedia) 
            foreignKey: "movie_id", // Indico cual es el campo que vincula ambas tablas
            otherKey: "actor_id", // Por ser de N:N indico otra llave
            timestamps: false // Aclaro que no tiene timestamps
        });
    }
    return Pelicula
}


// En Actor.js:

module.exports = function (sequelize, dataTypes) {
    let alias = "Actor"; // Como sequelize llamara a nuestra tabla y que usaremos para las consultas

    let cols = { // defino las columnas en objeto literal y el formato de sus campos
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function (models) { // Recibe los modelos asi automaticamente recibe lo que vaya creando
        Actor.belongsToMany(models.Pelicula, { // Relacion de muchos a muchos. 
            as: "actores", // Nombre de la asociacion de esas tablas
            through: "actor_movie", // Defino el nombre de la tabla pivot 
            foreignKey: "actor_id", // Indico cual es el campo que vincula ambas tablas
            otherKey: "movie_id", // Por ser de N:N indico otra llave
            timestamps: false // Aclaro que no tiene timestamps
        });
    }

    return Actor
}

/* (Hasta aca, fue hasta el Minuto 14:30 del video)


10) APP.js | CREACION DE LAS PAGINAS => Vamos a crear las paginas que constan de tres partes: Ruta, Controlador, Vista (esto por cada pagina). Vamos a crear 5: Una para la creacion, borrado, actualizacion, detalle y listado de todas las peliculas 
Desde app.js (entrypoint), le digo que quiero que vincule el archivo de rutas que voy a crear en el punto 11).
*/

app.use('/peliculas', peliculasRouter);

// esto quiere decir que todas las rutas que comiencen con /peliculas, seran respondidas por el peliculasRouter. Como no tengo la variable peliculasRouter en el app.js, creo en el encabezado de app.js el require:

var peliculasRouter = require('./routes/peliculas');

//11) ROUTES>PELICULAS.js | CREANDO UNA RUTA => Desde la carpeta routes>creamos peliculas.js

//Para crear una pelicula. Va por GET pq primero el formulario de edicion debe ser mostrada al usuario para que luego pueda editarla. Esto quiere decir que al entrar a /crear, la peticion va a ser tratada por un metodo que todavia no creamos que es el peliculasController.crear, como esa variable no existe todavia, para no olvidarnos vamos a dejarla requerida

var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear)

module.exports = router;


// 12) Creo la carpeta de controllers en la raiz del proyecto. Dentro creo el archivo peliculasController.js y en el, un objeto literal que contendra todos los metodos que ire a crear. En el de crear, el usuario recibira un formulario en donde tendra la informacion a editar. Llamo a la bd pq quiero que el usuario elija un genero entre los que estan disponibles en la BD 

let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('listadoPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                });
            })
    }
}

module.exports = peliculasController // No olvidarse de cuando se crea, exportar la variable


/* 13) VIEWS > listadoPeliculas.ejs => Creo la vista para ese formulario, creando un template para que sirva para otras paginas tambien.

<%- include ('header') -%>

<%- include ('footer') -%>



REVISADO HASTA EL MINUTO 21 DEL VIDEO

*/