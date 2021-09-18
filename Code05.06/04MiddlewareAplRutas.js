// Aplicacion de middleware a nivel de rutas => para una ruta ya definida, solo debemos agregar el middleware en el MediaSource, quedando algo asi:

router.get('/list', userControllers.list)       // => Asi es como identificabamos las rutas hasta ahora

router.get('/list', 
  function (req, res, next) { next()},         // => Agrego el middleware en el medio, antes de la ejecucion del contr
userControllers.list)  


// Para mantener el orden, creamos el middleware en otro archivo en la carpeta middleware y lo invocamos en las rutas que lo precisamos:

// EN LA CARPETA MIDDLEWARE > creo un archivo llamado logDBMiddleware.js

const fs = require('fs');                       // invoco a FS ya que quiero tener un registro de las paginas visitadas

function logDBMiddleware (req, res, next) {
    fs.appendFileSync('logDB.txt','Se creo un registro al ingresar en' + req.url);//le digo a Fs que escriba en log.txt
    next();                                                              // siempre va next al final
}

module.exports = logDBMiddleware;                                        // Exporto el middleWare

// DESDE LA CARPETA ROUTES > busco la ruta sobre la que quiero que el middleware trabaje y lo intercalo:

var logDBMiddleware = require ('./middleware/logDBMiddleware');          // Requiero el middleware
router.post('/register', logDBMiddleware, userControllers.store)         // Intercalo el MW entre la ruta y el control
