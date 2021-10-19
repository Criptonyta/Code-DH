/* INTEGRACION X CIERRE DEL MODULO REVISION PASO A PASO|| CRUD => CREACION LECTURA ACTUALIZACION Y BORRADO
ALGUNAS MEJORAS QUE SE LE PUEDEN PONER A ESTE EJEMPLO:
a) El CSS
b) el metodo borrar del controlador no verifica si tuvo o no actuaciones
c) en routes, se podrian usar metodos del tipo delete o patch para que sea mas prolija la semantica
d) hacer validaciones con express validator
e) colocar un login para que los usuarios logados puedan borrar el contenido


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


// 12) CREANDO EL CONTROLADOR => Creo la carpeta de controllers en la raiz del proyecto. Dentro creo el archivo peliculasController.js y en el, un objeto literal que contendra todos los metodos que ire a crear. En el de crear, el usuario recibira un formulario en donde tendra la informacion a editar. Llamo a la bd pq quiero que el usuario elija un genero entre los que estan disponibles en la BD 

let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                });
            })
    }
}

module.exports = peliculasController // No olvidarse de cuando se crea, exportar la variable


/* 13) VIEWS > Varios.ejs => Comienzo a crear los archivos de las vistas, creando un template (encabezado y pie de pagina) para que sirva para otras paginas tambien.

INDEX.ejs
<%- include ('header') -%>
    <h1><%= title %></h1>
    <p>Welcome to</p>
<%- include ('footer') -%>


creacionPeliculas.ejs
<%- include ('header') -%>
    <h1>Crear Pelicula</h1>
    <form action="/peliculas/crear" method="POST">
    <div>
        <label for ="">Titulo:</label>
        <input type="text" name="titulo">
    </div>
    <div>
        <label for ="">Premios:</label>
        <input type="text" name="premios">
    </div>
        <div>
        <label for ="">Duracion:</label>
        <input type="text" name="duracion">
    </div>
        <div>
        <label for ="">Rating:</label>
        <input type="text" name="rating">
    </div>
        <div>
        <label for ="">Fecha de estreno:</label>
        <input type="date" name="fecha_estreno">
    </div>
    <div>
        <label for ="">Genero:</label>              Quiero que escoja los generos de una lista de la BD
        <select name="genero">
                <% for (let i = 0; i <generos.length; i++) {
                }
            <option value="<%=generos[i].id%>">     De la lista de generos quiero que imprima el id
                <%=generos[i].name%>                  y tambien el nombre (coincide con los de la BD)
            </option>
                <% } %>                              El for termina cuando termine de imprimir las opciones
        </select>
    </div>
    <button type="submit">Crear</button>
        </form>
<%- include ('footer') -%>


HEADER.ejs
<html>                                          La etiqueta queda abierta pq sera cerrada por el template footer
    <head>
        <title>Mi sitio!</title>
        <link rel="stylesheet" href="/stylesheets/style.css"
    </head>

    <body>                                      La etiqueta queda abierta pq sera cerrada por el template footer
        <header>
            <p>Mi sitio</p>
            <nav>
                <li>
                <a href="/peliculas/crear">Crear Pelicula</a>
                </li>
                <li>
                <a href="/peliculas">Ver Pelicula</a>
                </li>
            </nav>
        </header>



FOOTER.ejs
<footer>
Digital House
</footer>
    </body>                                     La etiqueta cierra la que quedo abierta en el header.ejs 
</html>                                         La etiqueta cierra la que quedo abierta en el header.ejs 



14) CREO LA HOJA DE ESTILOS | public>stylesheets>style.css =>

body {
    margin: 0px;
    font: 14px "Lucida Grande", Helvetica, Arial;
}

a {
    color: #00B7FF;
}

header{
    background-color: gainsboro;
    color: white;
    padding: 10px;
}

nav ul{
    display: flex;
    list-style-type: none;
}

nav ul li{
    margin-right: 10px;
}


15) Creando la ruta por POST (por la que viajara el formulario) | routes>peliculas.js, quedando asi:
*/

var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado); //Creo la ruta por post para enviar la info del form, siendo recibido por otro metodo del controlador que ire a crear a continuacion

module.exports = router;


// 16) Creo el metodo guardado en el Controlador | peliculasController.js


let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                })
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({ //Le decimos a la db que vamos a crear una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    }
}

module.exports = peliculasController // No olvidarse de cuando se crea, exportar la variable


// 17) CREO LA RUTA PARA LA LECTURA | ROUTES>peliculas.js, quedando asi:


var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado); //Creo la ruta por post para enviar la info del form, siendo recibido por otro metodo del controlador que ire a crear a continuacion

// Lectura de peliculas
router.get('/', peliculasController.listado); // dejo la ruta creada para enseguida crear el metodo en el contr


module.exports = router;


// 18) CREO EL METODO DE LECTURA EN peliculasController.js 


let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                })
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({ //Le decimos a la db que vamos a crear una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    },
    listado: function (req, res) { //creo el metodo de lectura llamando a la bd para que muestre la info
        db.Pelicula.findAll() // el findAll traera todas las peliculas
            .then(function (peliculas) { //como la consulta va a tardar, coloco un then y la funcion
                res.render('listadoPeliculas', { //los resultados los envia a la vista listadoPeliculas
                    peliculas: peliculas //compartiendole la variable peliculas
                })
            })
    }
}

module.exports = peliculasController // No olvidarse de cuando se crea, exportar la variable


/* 19) CREO LAS VISTAS Y ARCHIVOS LISTADOPELICULAS y CREACIONPELICULAS EN views>listadoPeliculas.ejs y creacionPeliculas.ejs 

ListadoPeliculas.ejs

<%- include ('header') -%>
    <h1>Listado de Peliculas</h1>
    <ul>
        <% for (let i = 0; i < peliculas.length; i++) { %>  Creamos un for pq no sabemos cuantas peliculas son
            <li>                                            Por c/u peliculas creamos un Li
            <a href = '/peliculas/<%=peliculas[i].id%>'>    Para ver el detalle cada pelicula sera un link,
                                                            indicando la url donde quiero que dirija, indicando que en la url debe aparecer al final el id de la pelicula             
            <%=peliculas[i].title%>                         Queremos imprimir de cada pelicula el titulo
            </a> 
            </li>
        <% } %> 
    </ul>
<%- include ('footer') -%>



CreacionPeliculas.ejs (idem al que esta arriba en el punto 13)

creacionPeliculas.ejs
<%- include ('header') -%>
    <h1>Crear Pelicula</h1>
    <form action="/peliculas/crear" method="POST">
    <div>
        <label for ="">Titulo:</label>
        <input type="text" name="titulo">
    </div>
    <div>
        <label for ="">Premios:</label>
        <input type="text" name="premios">
    </div>
        <div>
        <label for ="">Duracion:</label>
        <input type="text" name="duracion">
    </div>
        <div>
        <label for ="">Rating:</label>
        <input type="text" name="rating">
    </div>
        <div>
        <label for ="">Fecha de estreno:</label>
        <input type="date" name="fecha_estreno">
    </div>
    <div>
        <label for ="">Genero:</label>              Quiero que escoja los generos de una lista de la BD
        <select name="genero">
                <% for (let i = 0; i <generos.length; i++) {
                }
            <option value="<%=generos[i].id%>">     De la lista de generos quiero que imprima el id
                <%=generos[i].name%>                  y tambien el nombre (coincide con los de la BD)
            </option>
                <% } %>                              El for termina cuando termine de imprimir las opciones
        </select>
    </div>
    <button type="submit">Crear</button>
        </form>
<%- include ('footer') -%>



20) CREO LA RUTA PARA LA VISTA DE DETALLE en | ROUTES>peliculas.js, quedando asi:

*/

var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado); //Creo la ruta por post para enviar la info del form, siendo recibido por otro metodo del controlador que ire a crear a continuacion

// Lectura de peliculas
router.get('/', peliculasController.listado);

// Detalle de peliculas

router.get('/:id', peliculasController.detalle) // dejo la ruta creada para enseguida crear el metodo en el contr

module.exports = router;



// 21) CREO EL METODO PARA LA VISTA DE DETALLE en | peliculasController.js 


let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                })
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({ //Le decimos a la db que vamos a crear una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    },
    listado: function (req, res) { //creo el metodo de lectura llamando a la bd para que muestre la info
        db.Pelicula.findAll() // el findAll traera todas las peliculas
            .then(function (peliculas) { //como la consulta va a tardar, coloco un then y la funcion
                res.render('listadoPeliculas', { //los resultados los envia a la vista listadoPeliculas
                    peliculas: peliculas //compartiendole la variable peliculas
                })
            })
    },
    detalle: function (req, res) {
        db.Pelicula.findByPk(req.params.id, { //para ver el detalle busco por la clave primaria sancandola de
                //la url, pero tambien quiero que traiga el genero y otros datos que no estan en esa tabla, entonces, debo crear una asociacion, usando como valores los as que use en el modelo.
                include: [{
                    association: 'genero'
                }, {
                    association: "actores"
                }]
            })
            .then(function (pelicula) {
                res.render('detallePelicula', {
                    pelicula: pelicula
                });
            })
    }
}

module.exports = peliculasController // No olvidarse de cuando se crea, exportar la variable



/* 22) CREO LA VISTA Y ARCHIVO DETALLEPELICULA EN views>detallePelicula.ejs 


<%- include ('header') -%>
    <h1><%= pelicula.title %></h1>        imprimo el titulo(nombre del campo en la bd) de la pelicula 
    <ul>
       <li>
            Duracion: <%=pelicula.length%>   
       </li>
        <li>
            Fecha de Estreno: <%=pelicula.release_date%>   
       </li>
        <li>
            Premios: <%=pelicula.awards%>   
       </li>
        <li>
            Rating: <%=pelicula.rating%>   
       </li>
        <li>
            Genero: <%=pelicula.genero.name%>   
       </li>
       <li>
            Actores:                            como los actores pueden ser muchos, hacemos ul y for
                                                indicando de los actores de la pelicula que informe la cantidad
            <ul>
            <% for (let i = 0; i < pelicula.actores.length; i++) { %>
                <li>
                    <%=pelicula.actores[i].first_name%> <%=pelicula.actores[i].last_name%> 
                </li>
            <% } %>   
            </ul>
       </li>
    </ul>
    <a href="/peliculas/editar/<%=pelicula.id%>">      Creo el boton editar pelicula asi sigo con el proceso
                                                        ruta>controlador>vista
    <button>Editar</button>
    </a>
<%- include ('footer') -%>


23) CREO LA RUTA PARA LA VISTA DE EDITAR DETALLE en | ROUTES>peliculas.js, quedando asi:

*/

var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado); //Creo la ruta por post para enviar la info del form, siendo recibido por otro metodo del controlador que ire a crear a continuacion

// Lectura de peliculas
router.get('/', peliculasController.listado);

// Detalle de peliculas

router.get('/:id', peliculasController.detalle)

// Actualizacion de peliculas

router.get('/editar/:id', peliculasController.editar) // dejo la ruta creada para enseguida crear el metodo en el contr

module.exports = router;


// 24) CREO EL METODO PARA ACTUALIZACION DE PELICULAS en | peliculasController.js 


let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                })
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({ //Le decimos a la db que vamos a crear una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    },
    listado: function (req, res) { //creo el metodo de lectura llamando a la bd para que muestre la info
        db.Pelicula.findAll() // el findAll traera todas las peliculas
            .then(function (peliculas) { //como la consulta va a tardar, coloco un then y la funcion
                res.render('listadoPeliculas', { //los resultados los envia a la vista listadoPeliculas
                    peliculas: peliculas //compartiendole la variable peliculas
                })
            })
    },
    detalle: function (req, res) {
        db.Pelicula.findByPk(req.params.id, { //para ver el detalle busco por la clave primaria sancandola de
                //la url, pero tambien quiero que traiga el genero y otros datos que no estan en esa tabla, entonces, debo crear una asociacion, usando como valores los as que use en el modelo.
                include: [{
                    association: 'genero'
                }, {
                    association: "actores"
                }]
            })
            .then(function (pelicula) {
                res.render('detallePelicula', {
                    pelicula: pelicula
                });
            })
    },
    editar: function (req, res) { // el metodo tiene la complegidad de tener 2 pedidos asincronicos a la BD, entonces primero pedimos la pelicula y por otro lado creo una variable para acumular el pedido de generos, es decir, primero nombro los dos pedidos asincronicos y para manejar los then, utilizo Promise.all (con un array con los dos pedidos), para que ejecute el then cuando se cumplan las dos promesas.
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function ([pelicula, generos]) { // recibe los resultados de pedidoPelicula y PedidoGenero
                res.render('editarPelicula', {
                    pelicula: pelicula,
                    genero: genero
                })
            })
    }
}


module.exports = peliculasController // No olvidarse de cuando se crea, exportar la variable


/* 25) CREO LA VISTA Y ARCHIVO EDITARPELICULA EN views>editarPelicula.ejs (basado en el de creacionPeliculas.ejs), colocandole el atributo VALUE a los inputs para que traiga el formulario relleno (haciendo referencia al nombre en ingles del campo en la BD)

editarPelicula.ejs
<%- include ('header') -%>
    <h1>Editar Pelicula</h1>
    <form action="/peliculas/editar/<%=pelicula.id%>" method="POST">
    <div>
        <label for ="">Titulo:</label>
        <input type="text" name="titulo" value="<%=pelicula.title%>">     COLOCO EL VALUE PARA RELLENAR
    </div>
    <div>
        <label for ="">Premios:</label>
        <input type="text" name="premios" value="<%=pelicula.awards%>">
    </div>
        <div>
        <label for ="">Duracion:</label>
        <input type="text" name="duracion" value="<%=pelicula.length%>">
    </div>
        <div>
        <label for ="">Rating:</label>
        <input type="text" name="rating" value="<%=pelicula.rating%>">
    </div>
        <div>
        <label for ="">Fecha de estreno:</label>
        <input type="date" name="fecha_estreno">
    </div>
    <div>
        <label for ="">Genero:</label>              
        <select name="genero">
                <% for (let i = 0; i <generos.length; i++) { %>

                    <!-- SI EL GENERO QUE ESTOY POR IMPRIMIR ES EL MISMO QUE TIENE LA PELICULA, LE INCORPORAMOS PARA LA PABRA SELECTED PARA QUE ESTE SELECCIONADO, SINO QUEDA SIN SELECTED-->
                    <% if (generos[i].id == pelicula.genre_id) { %>
                        <option value="<%=generos[i].id%>" selected>     
                        <%=generos[i].name%>                  
                        </option>
                    <% } else { %> 
                        <option value="<%=generos[i].id%>" selected>     
                        <%=generos[i].name%>                  
                        </option>
                    <% } %>
                <% } %>                              El for termina cuando termine de imprimir las opciones
        </select>
    </div>
    <button type="submit">Editar</button>
        </form>
<%- include ('footer') -%>



26) CREO LA RUTA QUE RESPONDE A EDITARPELICULA en en | ROUTES>peliculas.js, quedando asi:

*/

var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado); //Creo la ruta por post para enviar la info del form, siendo recibido por otro metodo del controlador que ire a crear a continuacion

// Lectura de peliculas
router.get('/', peliculasController.listado);

// Detalle de peliculas

router.get('/:id', peliculasController.detalle)

// Actualizacion de peliculas

router.get('/editar/:id', peliculasController.editar)
router.post('/editar/:id', peliculasController.actualizar) // Creo la ruta para ahora crear el metodo en contr

module.exports = router;


// 27) CREO EL METODO PARA ACTUALIZACION DE PELICULAS en | peliculasController.js , que como se parece mucho al metodo guardado (create), copio y pego


let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                })
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({ //Le decimos a la db que vamos a crear una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    },
    listado: function (req, res) { //creo el metodo de lectura llamando a la bd para que muestre la info
        db.Pelicula.findAll() // el findAll traera todas las peliculas
            .then(function (peliculas) { //como la consulta va a tardar, coloco un then y la funcion
                res.render('listadoPeliculas', { //los resultados los envia a la vista listadoPeliculas
                    peliculas: peliculas //compartiendole la variable peliculas
                })
            })
    },
    detalle: function (req, res) {
        db.Pelicula.findByPk(req.params.id, { //para ver el detalle busco por la clave primaria sancandola de
                //la url, pero tambien quiero que traiga el genero y otros datos que no estan en esa tabla, entonces, debo crear una asociacion, usando como valores los as que use en el modelo.
                include: [{
                    association: 'genero'
                }, {
                    association: "actores"
                }]
            })
            .then(function (pelicula) {
                res.render('detallePelicula', {
                    pelicula: pelicula
                });
            })
    },
    editar: function (req, res) { // el metodo tiene la complegidad de tener 2 pedidos asincronicos a la BD, entonces primero pedimos la pelicula y por otro lado creo una variable para acumular el pedido de generos, es decir, primero nombro los dos pedidos asincronicos y para manejar los then, utilizo Promise.all (con un array con los dos pedidos), para que ejecute el then cuando se cumplan las dos promesas.
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function ([pelicula, generos]) { // recibe los resultados de pedidoPelicula y PedidoGenero
                res.render('editarPelicula', {
                    pelicula: pelicula,
                    genero: genero
                })
            })
    },
    actualizar: function (req, res) {
        db.Pelicula.update({ //Le decimos a la db que vamos a actualizar una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/peliculas" + req.params.id);
    },
}


/* 28) A LA VISTA DE detallePelicula.ejs, le agrego un boton para BORRAR LA PELICULA


<%- include ('header') -%>
    <h1><%= pelicula.title %></h1>        imprimo el titulo(nombre del campo en la bd) de la pelicula 
    <ul>
       <li>
            Duracion: <%=pelicula.length%>   
       </li>
        <li>
            Fecha de Estreno: <%=pelicula.release_date%>   
       </li>
        <li>
            Premios: <%=pelicula.awards%>   
       </li>
        <li>
            Rating: <%=pelicula.rating%>   
       </li>
        <li>
            Genero: <%=pelicula.genero.name%>   
       </li>
       <li>
            Actores:                            como los actores pueden ser muchos, hacemos ul y for
                                                indicando de los actores de la pelicula que informe la cantidad
            <ul>
            <% for (let i = 0; i < pelicula.actores.length; i++) { %>
                <li>
                    <%=pelicula.actores[i].first_name%> <%=pelicula.actores[i].last_name%> 
                </li>
            <% } %>   
            </ul>
       </li>
    </ul>
    <a href="/peliculas/editar/<%=pelicula.id%>"> 
    <button>Editar</button>
    </a>

    Creo el boton borrar por post (es mas elegante) asi sigo con el proceso ruta>controlador>vista
    <form action="/peliculas/borrar/<%=pelicula.id%>" method=POST> 
    <button type='submit'>Borrar</button>                       el boton tiene que ser submit sino no funca
    </form>
<%- include ('footer') -%>


29) CREO LA RUTA DEL BORRADO en | ROUTES>peliculas.js, quedando asi:

*/

var express = require('express');
var router = express.Router();
var peliculasController = require('./controllers/peliculasController')

//Creacion de peliculas
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado); //Creo la ruta por post para enviar la info del form, siendo recibido por otro metodo del controlador que ire a crear a continuacion

// Lectura de peliculas
router.get('/', peliculasController.listado);

// Detalle de peliculas

router.get('/:id', peliculasController.detalle);

// Actualizacion de peliculas

router.get('/editar/:id', peliculasController.editar);
router.post('/editar/:id', peliculasController.actualizar);

// Borrado

router.post('borrar/:id', peliculasController.borrar); // Creo la ruta para ahora crear el metodo en contr

module.exports = router;


// 30) CREO EL METODO PARA BORRADO DE PELICULAS en | peliculasController.js 


let db = require('../database/models');

let peliculasController = {
    crear: function (req, res) {
        db.Genero.findAll() //a la bd, le pido el modelo llamado Genero (alias) y de ellos que traiga todos
            .then(function (generos) { //es un pedido asincronico, cuando traiga los generos que deje de operar
                return res.render('creacionPeliculas', {
                    generos: generos // al finalizar, que envie una vista(que todavia no cree) y que comparta esa variable de generos que me interesa que el usuario use
                })
            })
    },
    guardado: function (req, res) {
        db.Pelicula.create({ //Le decimos a la db que vamos a crear una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        });
        res.redirect("/peliculas");
    },
    listado: function (req, res) { //creo el metodo de lectura llamando a la bd para que muestre la info
        db.Pelicula.findAll() // el findAll traera todas las peliculas
            .then(function (peliculas) { //como la consulta va a tardar, coloco un then y la funcion
                res.render('listadoPeliculas', { //los resultados los envia a la vista listadoPeliculas
                    peliculas: peliculas //compartiendole la variable peliculas
                })
            })
    },
    detalle: function (req, res) {
        db.Pelicula.findByPk(req.params.id, { //para ver el detalle busco por la clave primaria sancandola de
                //la url, pero tambien quiero que traiga el genero y otros datos que no estan en esa tabla, entonces, debo crear una asociacion, usando como valores los as que use en el modelo.
                include: [{
                    association: 'genero'
                }, {
                    association: "actores"
                }]
            })
            .then(function (pelicula) {
                res.render('detallePelicula', {
                    pelicula: pelicula
                });
            })
    },
    editar: function (req, res) { // el metodo tiene la complegidad de tener 2 pedidos asincronicos a la BD, entonces primero pedimos la pelicula y por otro lado creo una variable para acumular el pedido de generos, es decir, primero nombro los dos pedidos asincronicos y para manejar los then, utilizo Promise.all (con un array con los dos pedidos), para que ejecute el then cuando se cumplan las dos promesas.
        let pedidoPelicula = db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.Genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
            .then(function ([pelicula, generos]) { // recibe los resultados de pedidoPelicula y PedidoGenero
                res.render('editarPelicula', {
                    pelicula: pelicula,
                    genero: genero
                })
            })
    },
    actualizar: function (req, res) {
        db.Pelicula.update({ //Le decimos a la db que vamos a actualizar una pelicula pasando los datos corresp
            // usamos los nombres en ingles pq son los nombres de los campos de la bd en modelo (punto 9) y los referenciamos en espanol por como fueron definidos en el formulario    
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/peliculas" + req.params.id);
    },
    borrar: function (req, res) { // Uso el metodo Destroy que debe si o si ir con un where
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/peliculas')
    }
}