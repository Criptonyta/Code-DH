// HASHING => ¿Qué sucedería si la contraseña se guardara tal como la escribimos? Eso sería bastante peligroso, ¿no? Cualquier persona con acceso a esa base de datos podría ver la misma y hacer un uso indebido de ella.
// Es por esto que existe la encriptación de datos, la cual permite que cualquier dato alfanumérico sea convertido a un texto prácticamente ilegible. Por ejemplo, si nuestra contraseña fuera "holaMundo123", un proceso de encriptación haría que la misma se generara así: "4c35a8ddbc285e0aa079041b30c5944e96edf36a".


// INSTALACION =>

// 1) npm install --save bcryptjs
// 2) Requerir bcrypt donde lo vaya a usar

let bcrypt = require('bcryptjs');

// 3) Para convertir un string en un hast, usamos la funcion bcryptjs.hashSync(), que recibe 2 parametros: a) el texto que queremos encriptar y b) la dificultad que le queremos dar al hasheo, por lo gral va un valor entre 10 y 12

bcrypt.hashSync('loQueQuieroEncriptar', 10);

// EJEMPLO =>

let password = 'reydelnorte';
let resultado = bcrypt.hashSync(password, 10);
console.log(password);
console.log(resultado);

// o tambien la puedo implementar asi ...

let usuario = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
}

// PARA COMPARAR LA CONTRASENA ORIGINAL CONTRA LA INGRESADA => bcrypt.compareSync ('laPasswordQueUse", hash), envuelta en un if, para que devuelva un booleano.


let password = 'reydelnorte';
let resultado = bcrypt.hashSync(password, 10);
console.log(password);
console.log(resultado);

let validacion = bcrypt.compareSync(password, resultado);
console.log(validacion);

// o tambien la puedo implementar asi ...

// Definiendo la logica en el controller, para a) leer el archivo json donde estan almacenados todos los usuarios (al final vamos a tener un array de usuarios) b) en el for:

let Login = {


    processLogin: function (req, res) {
        let archivoUsuario = fs.readFileSync('usuarios.json');
        let usuarios;
        if (archivoUsuario == "") { // Verifica si hay algun usuario registrado
            usuarios = []; // Si no hay usuarios, traemos una lista vacia
        } else {
            usuarios = JSON.parse(archivoUsuario); // Si hay usuarios, descomprimimos el Json
        }

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == req.body.email && bcrypt.compareSync(req.body.password, usuarios[i].password)) // recorremos todos los usuarios del json para ver si el elmail del json coincide con el que llega desde el formulario y que sea valida (bcrypt compara la contrasena plana que acaba de enviar el usuario en el form y el hash)
                res.send('Te encontre');
        }
        res.send('error')
    }

}