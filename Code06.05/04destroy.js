// DESTROY => Es el metodo que permite eliminar registros en la BD

const db = require('../database/models');
db.Usuario.destroy({
    where: {
        id: 10
    } // IMPORTANTE: Marcar el registro en el where
});


// El método destroy permite, al igual que el select, pasar otros operados a la query. En vez de utilizar una comparación por el operador igual (la comparación por defecto) podemos usar un like.
// Para ello vamos a ejecutar el método destroy del modelo Usuario. Dentro del where (en el método destroy), vamos a pasar un JSON con el nombre de la columna y cuyo valor sea un nuevo JSON con la siguiente sintaxis: email: { [Op.like]: '%aol.com'}
// En este ejemplo, vamos a eliminar a todos los usuarios cuyo proveedor de correo sea aol.com. Es decir, aquellos cuyo email termine en @aol.com.


const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;


Usuario.destroy({
    where: {
        email: {
            [Op.like]: '%aol.com'
        }
    }
});