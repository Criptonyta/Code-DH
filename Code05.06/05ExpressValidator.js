// EXPRESS VALIDATOR => es un paquete de Node.js que ya viene preparado con una serie de reglas y de lógica, que nos permitirá validar el formato de la información que se desea almacenar en la base de datos de nuestra aplicación. maneja toda la validacion de formularios desde el lado del backend.

// INSTALACION y EJECUCION: 

// 1) Instalar Express Validator => npm i express-validator

// 2) Crear un array con las validaciones del formulario
//      a) A la hora de escribir la validaciones, tomaremos la propiedad name de cada campo del html del formulario 
//      b) Requerimos el modulo donde vamos a  realizar las validaciones (puede ser en routes o un archivo aparte)

const {
    check
} = require('express-validator');
let validateRegister = [check('name').notEmpty()]; // aqui se guardan las validaciones del formulario

//      c) La lista completa de validadores se encuentra aqui => https://github.com/validatorjs/validator.js#validators
//      d) Customizar el mensaje de error que vera el usuario con el metodo withMessage()

check('name')
    .notEmpty().withMessage('Debes completar el nombre')
    .isLength({
        min: 5
    }).withMessage('El nombre debe tener al menos 5 caracteres')

//      e) Si queremos cortar la cadena de validacion (si el primer campo fallo, no tiene sentido validar el resto), usamos el metodo .bail()

check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    // En caso que la primera validacion falle, las siguientes no se ejecutan en este campo
    .isEmail().withMessage('Debes completar un email valido')

//      f) en resumen, el array completo de validaciones quedaria asi:

const validateRegister = [
    check('name')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({
        min: 5
    }).withMessage('El nombre debe ser mas largo'),
    check('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes completar un email valido'),
    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({
        min: 8
    }).withMessage('La contraseña debe ser mas larga')
]

// 3) Agregarlo como middleware de la ruta que procesa el formulario (procesamiento del form de creacion)

router.post('/', validateRegister, userController.processRegister);

// 4) Verificar si hubo errores en la validacion desde el controlador, usando la desestructuracion y llamando al metodo validationResult y creando una variable para guardar los errores que se encontraron

const {
    validationResult
} = require('express-validator');
let errors = validationResult(req);

//      a) El metodo isEmpty() permite saber si hay errores de validacion o no:

register: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
        // No hay errores y podemos seguir adelante
    } else {
        // Si hay errores, volvemos al formulario
    }
};

//      b) El metodo mapped() permite enviar los errores a la vista en forma de objeto. Por cada campo con error, el objeto tendra una propiedad cuyo nombre sera igual al atributo name del campo. cada error tendra: el msg (el mensaje enviado al usuario), el param (nombre del campo), el value (valor informado por el usuario) y el body (de donde vino en el caso de los formularios):

//if (errors.isEmpty()) {
// No hay errores y podemos seguir adelante
//} else {
// Si hay errores, volvemos al formulario
//    res.render('register', (errors: errors.mapped(), old: req.body));
//};


// 5) Enviar errores a la vista => Haciendo uso de EJS, podremos preguntar si un campo determinado posee errores