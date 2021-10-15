// UPDATE => Con el método update() vamos a poder editar registros existentes en las tablas de la BD a través de Sequelize. Recibe dos parametros en forma de Objetos literales: a) el campo que queremos editar y b) como minimo un where que indique a que registro aplicar los cambios (si no se aplica, se actualizaran todos los campos de la BD)


const db = require('../database/models');
db.Usuario.update({
    username: 'ManuelF'
}, {
    where: {
        id: 10
    }
});


/* Para el ejemplo presentado en el video , desde moviesController, le damos funcionalidad al metodo edit, quedando asi:

edit: function(req, res) {
    db.Peliculas.findByPk (req.params.id) // Busco y envio a la vista la pelicula q quiero editar desde la url 
        .then(function (pelicula)) {      // la funcion recibe el resultado anterior (pelicula que quiero edit)
            res.render('editarPelicula',  // envio el resultado a la vista editarPelicula
            {pelicula:pelicula}           // le envio los datos que obtuve a la vista (variable pelicula: alias)
        }
}

update: function(req, res) {
    db.Peliculas.update({
        title: req.body.title, // con el req.body, capturo cada uno de los datos que el usuario puso en el form
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        lenght: req.body.lenght
    },{
        where: {
            id: req.params.id  // si no coloco el where, va a pisar todos los datos de la BD
        }
    })
    res.redirect('/movies/edit/'+ req.params.id)
}

Configuro las rutas desde routes>movies.js
router.get('/edit/:id', moviesControllers.edit);    
router.post('edito/:id', moviesControllers.update)


Para que esa informacion que genere pueda ser pre-cargada por el usuario en la vista de ejs, en el formulario, utilizo en la etiqueta de cada campo del form el atributo:

value = ' <%= pelicula.campoDelFormularioAEditar %>


*/



// UPSERT => Para actualizar un registro en la base o crearlo en caso de que no exista.Debemos pasar al menos un atributo que sea único (en este caso el email), para así poder identificar el registro en la base.

// En este ejemplo, vamos a actualizar un registro de usuario. Vamos a pasar como valores para el upsert el email y la edad. Si el usuario ya existe, debemos actualizar la edad, caso contrario debemos insertar el usuario (con email y edad) en la base.


const Usuario = require('model/usuario.js');
Usuario.upsert({
    email: 'anonimo²anonimo.com',
    edad: 44
}, {
    where: {
        id: 33
    }
});