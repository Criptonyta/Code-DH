// PUT, en inglés, significa “poner”, mientras que DELETE significa “borrar”. Tal como lo indican sus nombres, con estos métodos vamos a poder enviar información de forma segura desde el cliente al servidor y modificar la información de un registro existente en la base de datos, o bien borrarlo.

// Son muy parecidos al metodo POST por lo que el request debe venir de un formulario HTML atraves del atributo METHOD, pero vamos a tener que instalar un modulo por cuestiones de compatibilidad. Tambien se usa como parametros la 1) la ruta y 2) el callback que la maneja

// Desde routes > users.js
router.get('/:id/editar', usuariosController.editar);         // llamo a la vista para que me muestre el formulario
router.put('/:id/actualizar', usuariosController.actualizar); // para modificar uso un identificador unico (id)

// Desde controllers > userController.js
const usuariosController ={
    edit: function(req,res) {                                    // Agrego el metodo edit 
    let idUser = req.params.idUser                            // Creo la logica, guardando el usuario que quiero edit 
    res.send(idUser);                                         // envio el usuario a editar

    let userToEdit = users[idUser];
    res.render('userToEdit', {userToEdit: userToEdit});
    }
}

// Desde views > userEdit.ejs





// INSTALACION:

//npm install method-override --save                  // 1) Instalar method-override 
const methodOverride = require('method-override');    // 2) Requiero el paquete que instale 
app.use(methodOverride('_method'));                   // 3) Lo paso como argumento en el metodo use de app.js   

<form action='/usuarios/__/actualizar?_method=PUT' method='POST'> 
</form>                                                // En el HTML, en el querystring, le agrego ?_method=PUT









// EJERCICIO:
// Tenemos un JSON con tres películas.
// Vamos a tratar de crear una ruta para editar los datos de una película en particular. Un usuario va a tener que ser capaz de enviar datos a través de un formulario y, nosotros, debemos editar la película elegida. Para indicar la película a modificar nos va a llegar, en la URL, el id correspondiente. Es decir, que deberíamos crear una ruta del tipo PUT para los casos pelicula/1, pelicula/2, etcétera.
// Para eso vamos a tener que, a partir del objeto router, crear una ruta del tipo PUT que responda a cualquiera de las URLs antes mencionadas.
// Debemos ser capaces de identificar la película dependiendo del id que nos pasen cómo parámetro y actualizar sus datos con aquellos que nos envían.

let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

const express = require('express');
const router = express.Router();

router.put('/pelicula/:id', (req, res) => {
    let idPelicula = req.params.id;

    peliculas.forEach(pelicula => {
        if (idPelicula == pelicula.id){
            pelicula.titulo = req.body.titulo;
            pelicula.duracion = req.body.duracion;
            pelicula.genero = req.body.genero;
        }
    })
})


// Eliminando datos de un ARRAY
// Dado el siguiente array con productos, debemos crear una ruta "/celular" del tipo DELETE que reciba un id y elimine un producto. Deberíamos crear una ruta para los casos celular/1, celular/2, etcétera.
// Para eliminar el producto del array podemos usar la función filter igualando el array celulares.filter en donde dentro del método retornemos todos los productos que no coincidan con el id pasado como parámetro.
// Si nos resulta más práctico hacerlo de otra manera, ¡adelante! Lo importante es que el producto con el id pasado por parámetro sea removido del array celulares.

let celulares = [
    {
        id: 1,
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        id: 2,
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        id: 3,
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

const express = require('express');
const router = express.Router();


router.delete('/celular/:id', (req, res) => {
    let idCelular = req.params.id;
    celulares=celulares.filter(elemento => elemento.id != idCelular)
});