// Cookies => Son archivos qwue guardamos en el navegador del usuario (cliente). A diferencia de la session, tiene un tiempo de vida programable (no deja de existir a pesar de que el usuario cierra el navegador). No deben almacenar informacion sensible. Tienen un limite de espacio de 4kb. Puede ser usada para loguear automaticamente un usuario cuando cierra el navegador. 

// IMPLEMENTACION

// 1) Instalamos cookie-parser con npm   => npm i cookie-parser. LLamo el modulo y la uso

var cookieParser = require('cookie-parser');
app.use(cookieParser()); // en app.js

// 2) Para crear una cookie y guardar informacion, usamos el metodo cookie sobre el objeto response pasandole dos argumentos: a) el nombre que le queremos asignar a la cookie y b) el valor que tendra.

res.cookie('club', 'C.A.Tigre');

// 3) Para ller la informacion, usamos req. seguido por el nombre de la cookie

console.log(req.cookie.club);



// EJEMPLO DADO EN EL VIDEO (asumiendo que ya tengo una pagina de login hecha y quiero que el usuario quede logado y que en el form de login tengo un campo llamado recordame)

// En controller:
req.session.usuarioLogueado = usuarioALoguearse; // esto viene definido en session

if (req.body.recordame != undefined) { // con undefined le estoy diciendo que recordame no esta tilado
    res.cookie('recordame', usuarioALoguearse.email, {
        maxAge: 60000 // quiero guardar el email por 60 segundos (maxAge lo marca en milisegundos)
    })
}

// Creo un middleware que se vea en toda la aplicacion, llamada recordameMiddleware

function recordameMiddleware(req, res, next) {
    next();
    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) // si recordame es distinto a undefined y a la vez el usuario logado existe, quiero que pase a lo siguiente.
        for (let i = 0; i < users.length; i++) { // Ya que en la cookie solo guarde el email, quiero tambien almacenar en ella otros datos, entonces uso el email para que me relacione con otros datos que tengo guardados en session (usando un for, leyendo todos los usuarios )
            if (users[i].email == req.cookies.recordame) {
                usuarioALoguearse = users[i];
                break;
            }
            req.session.usuarioLogueado = usuarioALoguearse;
        }
}

// Por ultimo, quiero disponibilizar ese middleware en toda la app entonces desde app.js:

var recordameMiddleware = require('./middlewares/recordameMiddleware');
app.use(recordameMiddleware);