// CREATE => Es el metodo que permite incorporar datos y nuevos registros a nuestra BD. Para acceder al metodo.create(), necesitamos primero llamar al modelo. REcibe un objeto literal donde definimos los campos que iremos a modificar y sus valores. Desde el usuarioController:

const db = require('../database/models')

db.Usuario.create({
    name: 'Manuel',
    username: 'manolito',
    password: 'manolo123'
});


/* Para el ejemplo presentado en el video , desde userController, le damos funcionalidad al metodo create, quedando asi:

create: function(req, res) {
    db.Peliculas.create({
        title: req.body.title, // con el req.body, capturo cada uno de los datos que el usuario puso en el form
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        lenght: req.body.lenght
    });
    res.redirect('/movies')   // al finalizar, quiero que redirigir el pedido al listado de las peliculas
}


BULKCREATE => En determinadas situaciones necesitamos subir más de un registro a la base de datos. Si bien podemos usar el método create varias veces, Sequelize nos facilita esta tarea con el método bulkCreate. Este método recibe un array, en donde cada posición es un objeto con las mismas características del objeto que recibe el método create. Es decir, el método bulkCreate es como el método create, pero con la ventaja que permite insertar varios registros de una sola vez.
*/

const Pelicula = require('model/pelicula.js');

Pelicula.bulkCreate([{
    titulo: 'Matrix',
    genero: 'Ciencia Ficcion'
}, {
    titulo: 'Lord of rings',
    genero: 'Ciencia Ficcion'
}], {
    ignoreDuplicates: true
});