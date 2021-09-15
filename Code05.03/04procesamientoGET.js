
// => Para solicitar Datos. Generalmente usamos el metodo GET para retornar vistas, archivos o datos. Las rutas reciben 2 parametros: 1) Un string con la ruta y 2) Un callback que definira la logica a ejecutar cuando el cliente pida esa ruta.


// Enrutador
router.get('/peliculas', (req,res) => {res.render('peliculas')} );

// Enrutador con controlador
const controller = {
    todas: (req,res) => {res.render('peliculas')}
};
router.get('peliculas', controller.todas);

// Sobre la ejecucion de express
app.get('peliculas',(req,res) => {res.render('peliculas')} );


// QUERYSTRING => Es una cadena de texto (conocida como cadena de consulta) que viaja en la URL al momento de hacer una peticion.
    // a) Comienza al final de la ruta con el signo ?
    // b) Esta formado por uno o mas pares de clave=valor
    // c) En el caso de haber mas de un par, son separados por un caracter especial &

    // Ejemplo: https://www.youtube.com/watch?video=daqQ435&time=30

// Para acceder al querystring dentro del callback que maneja la peticion, debemos hacerlo atraves de la propiedad query del objeto request

    console.log(req.query.video)    // Retornara 'daqQ435"


    
// USANDO QUERYSTRING PARA BUSQUEDAS:

// 0) Dada una base de datos...

let users = [                      // Esta BD no sera necesaria cuando tenga la BD definitiva creada
{id: 1, name: 'Dario'},
{id: 2, name: 'Javier'},
{id: 3, name: 'Maru'},
{id: 4, name: 'Ale'},
{id: 5, name: 'Alan'},
];


// 1) En el archivo router, creo la ruta:

    router.get('/search', userController.search);

// 2) Ahora creo el controlador en la hoja controller.js para crar el metodo search:

const userController = {search: function(req,res)
    {let loQueBuscoElUsuario = req.query.search;     // search es el name que le puse al formulario de
                                                        // busqueda en el index. Para recuperar informacion de la url, utilizo el objeto request, el metodo query y la palabra/nombre que aparece en la url despues del ? (en este caso search)


        let userResults = []                            // Creo una variable para que guarde el array

        for (let i = 0; i <users.length; i++) {         // recorro cada uno de los usuarios y por cada
            if (users[i].name.includes (loQueBuscaElUsuario)) { // uno pregunto, si por cada uno de los
               usersResults.push(users[i]);                     //usuarios que estoy mirando ahora, el
                                                                // nombre contiene loQueBuscaElUsuario, entonces en los usuarios resultantes

            }

        res.render('userResults', {userResults: userResults})  // ahora creo la vista para el resultado,
                                                               // creando una vista userResults.ejs
        }
    }
    }

//===========EJERCICIO==================

// Filtrando por precio
// Tenemos un listado de celulares, cada uno con su precio. Vamos a crear una ruta "/celulares" del tipo GET para listarlos a todos.
// Para mostrar el listado debemos usar el método send del parámetro response.
// Ahora bien, también nos gustaría poder filtrar la lista de celulares en función del precio. El usuario debería acceder a una URL que tenga un query string con el parámetro "max".
// A partir de ese parámetro, nosotros tenemos que ser capaces de devolver la lista, pero solo mostrando aquellos celulares cuyo precio no supere el valor del parámetro "max".
// Es decir, si el usuario accede a la URL  "/celulares?max=20000", deberíamos listar todos los modelos menos el "Samsung Galaxy A50".


const express = require('express');                     // requiero express
const router = express.Router();                        // creo la variable router

const celulares = [                                     // array del ejercicio
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];


const userController = {                                    // creo una variable para el controlador (tipo objeto)
    search: function (req,res) {                            // creo el metodo search      
        let loQueBuscoElUsuario = req.query.search;  
            let userResults = []                            // creo una variable para guardar los resultados

            for (let i = 0; i <celulares.precio.length; i++) {   // ejecuto la logica recorriendo
                if (celulares[i].precio< (loQueBuscaElUsuario)) {
                    usersResults.push(celulares[i]);            // extraigo el resultado con push
                    }        
                res.render('userResults', {userResults: userResults}) // renderizo el resultado
            }
        }
};
router.get('/celulares', userController.search);            // contruyo la ruta


