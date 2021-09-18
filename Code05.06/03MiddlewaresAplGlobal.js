// Middleware => un middleware es un bloque de código que se va a ejecutar en la "mitad" de un determinado request y, en ocasiones, seguramente vamos a necesitar que dicho código se ejecute a lo largo de toda la aplicación. Es allí en donde los middlewares de aplicación global cobran un especial protagonismo. Estos estarán presentes SIEMPRE y se ejecutarán SIEMPRE, sin importar a qué lugar de nuestra aplicación va el visitante.


// Características de los middlewares
// Express trata al request y response como objetos. Recibe una petición, la procesa y devuelve un objeto como respuesta.
// Toda petición requiere de una serie de pasos para ser procesada. Express divide esas responsabilidades en funciones denominadas middlewares.
// Los middlewares son funciones que se ejecutan en medio de la ejecución del pedido del cliente y la respuesta del mismo.
// Las rutas que requieran middlewares —además del request y el response— deberán recibir un tercer parámetro: la función next.
// next permite la ejecución en cadena de todas las funciones necesarias que deberán ejecutarse antes de enviarle la respuesta al cliente.
// Con los middlewares podemos aislar código que nos permita resolver un escenario en particular e implementarlo en donde sea necesario, evitando así repetir código.
// Estas funciones agregan una capa de seguridad. Si la función que definimos como middleware no retorna lo esperado, la misma cortará la ejecución en cadena y devolverá la respuesta seteada para esos casos.


// MIDDLEWARES DE APLICACION GLOBAL => Son los que se ejecutan siempre que se haga un pedido a la aplicacion, INDEPENDIENTEMENTE de la ruta ingresada por el usuario

// IMPLEMENTACION => SE CREAN EN LA CARPETA RAIZ LLAMADA MIDDLEWARE y hay que invocar el metodo app.use(), que recibe un callback con tres parametros (req, res, next). Next es un callback que se ocupara de apilar todos los middlewares que se aplican a una peticion para luego ejecutarlos en orden. Cuando se ejecute el ultimo, si no hubo problemas, pasara a la siguiente ejecucion. Ej: (con error 404). App.use indica que el middleware sera usado por toda la aplicacion.

app.use(function (req, res, next) {
    res.status(404).render('404-page');
    next ();                           
})

// EN LA CARPETA MIDDLEWARE creo el archivo logMiddleware.js => Ejemplo de logMiddleware (para que guarde un log de todas las paginas visitadas por un usuario)

const fs = require('fs');                       // invoco a FS ya que quiero tener un registro de las paginas visitadas

function logMiddleware (req, res, next) {
    fs.appendFileSync('log.txt','Se ingreso en la pagina' + req.url);  // le digo a Fs que escriba en log.txt
    next();                                                           // siempre va next al final
}

module.exports = logMiddleware;                                       // Exporto el middleWare

// DESDE EL APP.js => Llamo al middleware que cree:

var logMiddleware = require ('./middleware/logMiddleware');           // Requiero el middleware
app.use(logMiddleware);                                               // Indica que debe usarse siempre y globalmente

