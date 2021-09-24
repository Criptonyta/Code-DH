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
            <input type="submit" value="Login">
        </form>
    </body>
</html>
*/

// d) como el pedido tiene que viajar por post, voy a routes>users.js y:

router.post('/login', [ //creo la ruta y valido la informacion con express validator
    check('email').isEmail().withMessage("Email invalido"),
    check('password').isLength({
        min: 8
    }).withMessage('La contraseña debe tener un minimo de 8 caracteres')
], usersController.processLogin)

// e) de vuelta en usersControllers para crear la logica del process login

let userController = {
    register: function (req, res) {
        return res.render('register')
    },

    login: function (req, res) {
        return res.render('login')
    },

    processLogin: function (req, res) {
        let errors = validationResults(req); //primero le pregunto si hay errores

        if (errors.isEmpty()) { //ahora pregunto si el usuaro existe y la pass es correcta
            let userJSON = fs.readFyleSync('users.json', { // este pedazo de codigo trae a los usuarios 
                en // (ojo que hay codigo perdido entre las llaves)
            })
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }

            for (let i = 0; i < users.length; i++) { // voy recorriendo uno a uno si el usuario existe
                if (users[i].email == req.body.email) { //pregunto si el mail es el del user que se acaba de logar
                    if (bcrypt.compareSync(req.body.password, users[i].password)) //la contrasena es valida?
                        let usuarioALoguearse = users[i]; // despues del chequeo, veo si es el usuario que encontre
                    break;
                }
            }
            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [{
                        msg: 'Credenciales invalidas'
                    }]
                })

                req.session.usuarioLogueado = usuarioALoguearse //guardo el usuario para que lo autorice a entrar
                res.render('success'); //le envio al usuario el mensaje de exito
            } else {
                return res.render('login', { // si hay un error, devuelve al login compartiendo los errores
                    errors: errors.errors
                })
            }
        }
    }
}

// f) como guarde en session los datos del usuario que se acaba de logar, voy nuevamente a routes>users.js para crear una ruta y que lo puedan ver tambien en otros lugares, creando una ruta para verificar si estas logueado

router.get('/check', function (req, res) {
    if (req.session.usuarioLogueado == undefined) {
        res.send('No estas logueado');
    } else {
        res.send("el usuario logueado es: " + req.session.usuarioLogueado.email);
    }
})

// g) una vez que estas logueado, no se va a volver a loguear y le voy a dar acceso a otras paginas de la app. Creo un middleware para eso. Creo dos archivos a) authMiddleware (se encargara de chequear si el usuario esta logueado) y b) guestmiddleware ( se encargara de cuando no esta logueado)

// a) authMiddleware

function authMiddleware(req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next();
    } else {
        res.send('Esta pagina es solo para usuarios')
    }
}

module.exports = authMiddleware


// b) guestMiddleware

function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next();
    } else {
        res.send('Esta pagina es solo para invitados')
    }
}

module.exports = guestMiddleware


// h) vuelvo a routes> users para importar los modulos que cree y para decirce que la ruta de registracion solo estara disponible si sos invitado

let guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/register', guestMiddleware, usersController.register)