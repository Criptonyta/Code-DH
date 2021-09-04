// QUE ES UN CRUD?
// Hace referencia a las siglas: Create, Read, Update y Delete. Es un proceso que nos permite crear, leer, actualizar y borrar registros de nuestra base de datos. Para llevar a cabo dicho proceso vamos a sustentarnos en los métodos de HTTP.

// PROTOCOLO HTTP => Define un conjunto de reglas para que la informacion pueda ser procesada

// METODOS HTTP (repaso)
// GET         => Solicitar Datos | Ejemplo: Acceder a una pagina atraves de una url. Los datos viajan por la URL y queda visible. Los datos pueden cachearse y guardarse en marcadores. Se usan para manipular datos no sensibles. No se reenvian al recargar el sitio. Tienen restriccion de longitud.

// POST        => Enviar/Crear un dato  | Ejemplo: Al registrarse en un sitio y envio mis datos. Los datos viajan ocultos y quedan encriptados. No pueden cachearse ni guardarse en marcadores. Son mas seguros que GET (se usan para manipular datos sensibles). Se reenvian al recargar el sitio. No tienen restriccion de longitud

// Metodos que no soportan formularios (es necesario usar frameworks para simularlos):

// PUT         => Reemplazar un dato existente | Ejemplo: Al cambiar la informacion de mi registro. 

// DELETE      => Borrar un dato existente | Ejemplo: Al borrar un post en Facebook. 

// PATCH       => Modificar parcialmente un dato

// EJERCICIO
// Vamos a crear nuestra primera ruta con Express.
// Para ello, debemos crear la constante llamada express y asignarle el módulo express.
// Luego, crear la constante llamada router y asignarle el objeto Router de express.
// Finalmente, usando la constante router, debemos crear una ruta "/peliculas" que responda al método GET.
// Para chequear que todo está funcionado hagamos que la ruta devuelva la respuesta "Listado de películas".

const express = require('express');

const router = express.Router(); 

router.get('/peliculas', function (req,res){
    res.send("Listado de películas")
});