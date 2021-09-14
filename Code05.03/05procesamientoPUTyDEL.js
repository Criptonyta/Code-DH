// PUT, en inglés, significa “poner”, mientras que DELETE significa “borrar”. Tal como lo indican sus nombres, con estos métodos vamos a poder enviar información de forma segura desde el cliente al servidor y modificar la información de un registro existente en la base de datos, o bien borrarlo.

// Son muy parecidos al metodo POST por lo que el request debe venir de un formulario HTML atraves del atributo METHOD, pero vamos a tener que instalar un modulo por cuestiones de compatibilidad. Tambien se usa como parametros la 1) la ruta y 2) el callback que la maneja

// Desde routes > users.js
router.get('/:id/editar', usuariosController.editar);         // llamo a la vista para que me muestre el formulario
router.put('/:id/actualizar', usuariosController.actualizar); // para modificar uso un identificador unico (id)

// Desde controllers > userController.js
    edit: function(req,res) {                                    // Agrego el metodo edit 
    let idUser = req.params.idUser                            // Creo la logica, guardando el usuario que quiero edit 
    res.send(idUser);                                         // envio el usuario a editar

    let userToEdit = users[idUser];
    res.render('userToEdit', {userToEdit: userToEdit});
 }

// Desde views > userEdit.ejs





// INSTALACION:

//npm install method-override --save                  // 1) Instalar method-override 
const methodOverride = require('method-override');    // 2) Requiero el paquete que instale 
app.use(methodOverride('_method'));                   // 3) Lo paso como argumento en el metodo use de app.js   

<form action='/usuarios/__/actualizar?_method=PUT' method='POST'> 
</form>                                                // En el HTML, en el querystring, le agrego ?_method=PUT


