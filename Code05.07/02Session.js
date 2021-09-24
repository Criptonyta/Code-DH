// Session => Es una variable "global" que está accesible a lo largo de toda la aplicación y que nos permite guardar y compartir información importante entre las distintas vistas de la misma.
// Permite almacenar del lado del servidor, datos del usuario, como por ejemplo: Informacion que sirva para el logueo, idioma, moneda, color de fondo , etc. Del lado del cliente, genera un identificador unico que asociara a ese usuario con toda la informacion almacenada.
// Cuando se cierra el navegador, toda la informacion de session se pierde

// INSTALACION:

// 1) Desde la terminal, correr => npm i express-session --save    

// 2) Llamar a express-session desde el app.js (entrypoint) pq quiero compartirlo en todaslas paginas => 

const {
    Router
} = require('express');
const session = require('express-session');

// 3) Configurarlo con un middleware a nivel aplicacion, ejecutando session(), pasandole como argumento un objeto literal con la propiedad secret con un texto que servira para identificar nuestro sitio web

app.use(session({
    secret: 'Nuestro mensaje secreto'
}));

// MANIPULANDO LOS DATOS OBTENIDOS. Desde el archivo controller, =>
// a) para definir y almacenar la info
req.session.colorFondo = 'Violeta';
req.session.idioma = "Español"; // Define que el idioma escogido por ese usuario es espanol

// b) para leer la informacion
let colorFondo = req.session.colorFondo;
let idioma = req.session.idioma; // Permite leer el idioma que el usuario escogio


// CREANDO EL LOGIN VIA SESSION
// a) Creo la ruta al login desde routes > users.js
router.get('/login', usersController.login);

// b) Voy a controllers > user.Controller.js para crear el metodo
let userController = {
    login: function (req, res) {
        return res.render('login')
    },
};

// c) En views, creo la vista login.ejs
/* <html>
    <body>
        <form action="/users/login" method='POST'>
            <label for="">Email</label>
            <input type="email" name="email"><br>
            <label for="">Password</label>
            <input type="password" name="password"><br>

        </form>
    </body>
</html>


completar desde el minuto 11 del video */