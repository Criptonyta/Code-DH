// POST => la sintaxis es la misma que para el metodo get, donde recibe 2 parametros: 1) Un string con la ruta y 2) Un callback que definira la logica a ejecutar cuando el cliente pida esa ruta. pero a diferencia de get, NO se puede enviar atraves de la url y solo se envia atraves de un formulario. La misma ruta puede ser utilizada por ambos para distintos fines. Por ejemplo:

// en .routes/usuariosController.js
router.get('/crear', usuariosController.crearUsuario);
router.post('/crear', usuariosController.guardarUsuario);

// Este metodo no genera una vista sino que redirecciona a una ruta para que sea GET quien la trate .

const usuarioscontroller = {
    crearUsuario: (req, res) => {
        // retorna una vista
    },
    guardarUsuario: (req, res) => {
        // genera un redireccionamiento
    },
}

// PARA ENVIAR DATOS VIA POST ATRAVES DE UN FORMULARIO => En el HTML en el atributo method, siempre hay que aclararlo ya que por defecto, el formulario los enviara via GET 

/*                                                              EN EL HTML
<form action='/usuarios/guardar' method='POST'>                     
<!--campos del formulario -->
<label for="">Nombre</label>
<input type="text" name="nombre">
<label for="">Edad</label>
<input type="text" name="edad">
<label for="">Email</label>
<input type="email" name="email">
<input type='submit' value="Registrar">

</form>
*/

router.post('/registrar, usuariosController.registrarUsuario')      // EN EL ROUTER

const usuariosController = {                                        // EN EL CONTROLADOR
    registrarUsuario: (req, res) =>{
    // logica
    }
}

// IMPLEMENTACION =>

// 1) Configuracion: En el app.js  aplicar las siguientes lineas:

const express = require ('express');
const app = express ();
// Aplicar estas dos lineas de abajo: con esto le digo que todo lo que venga de un formulario lo quiero capturar como un objeto literal y en formato JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 2) REQ.BODY => En el controlador, el parametro REQUEST entcontramos la propiedad BODY que es un objeto literal clave:valor , donde la clave es el name en cada etiqueta input del HTML y el valor lo que hubiera incorporado el usuario

const userController = {
    create: function (req, res) {
        let usuario = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: email.body.email,
        }
        res.redirect('/users/list'); // 3) RES.REDIRECT => En el controlador, con el parametro RESPONSE
                                     //usamos el metodo REDIRECT para redireccionar a una ruta cualquiera
    
    }
}









