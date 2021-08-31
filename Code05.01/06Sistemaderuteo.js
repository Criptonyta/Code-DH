// Para ello, Express nos da la posibilidad de crear distintos archivos que administren las posibles rutas de nuestro sitio. Siempre teniendo en cuenta que lo importante, en esta "atomización", es la organización de nuestros archivos dentro de nuestro proyecto. Todo con el objetivo de mantener lo más estable nuestro desarrollo.

// De esta manera, podemos concluir, entonces, que el sistema de ruteo dentro de un proyecto de Express no es otra cosa más que una modularización de las rutas de nuestra aplicación, que las mismas estén divididas y organizadas dependiendo de su funcionalidad.

// ============================RESUMEN MATERIAL COMPLEMENTAR=========================

// ARQUITECTURA DE ARCHIVOS => En la carpeta raiz>routes, creamos un archivo.js que administrara los pedidos a las rutas que tengan que ver con ese recurso. Cada uno de esos archivos, sera un modulo que deberemos exportar y luego requerir en el app.js

const express = require ('express');
const router = express.Router(); 

//En el mismo archivo, creo todas las rutas que seran necesarias para manejar los distintos tipos de pedidos que recibira el recurso.

// Ruta raiz de los productos - Inicio
router.get('/', function(req,res){
    //codigo
});
// Ruta que muestra el detalle de un producto
router.get('/detalle/:id', function (req,res){
    //codigo
});
// Con esta linea exporto el modulo para que pueda ser importado por app.js
module.exports = router.js    


// IMPLEMENTANDO LAS RUTAS => Dentro de app.js, creo una constante requiriendo el modulo que contiene las rutas (la primera linea) y luego uso el metodo Use (segunda linea):

const rutasProductos = require ('./routes/productos');
app.use('/productos', rutasProductos);      //el primer parametro es un string con la ruta 
                                            //(por eso empieza con /) al modulo creado y el segundo es la const creada anteriormente. El resultado de la ruta sera entonces /productos/detalles/:id (por la concatenacion)





// ============================RESUMEN DE LA VIDEOAULA===============================

// Primero se crea la carpeta routes en la raiz del proyecto y luego un .js por cada recurso (seccion de la app web que contiene varias rutas) a manejar. Ejemplo, el recurso productos.js, puede contener rutas para el detalle del producto, para crearlos, etc.
// Asi, creamos en routes un archivo productos.js que administrara todas las rutas y requests relacionados a productos
// Este archivo seria un modulo que luego vamos a exportar y requerir desde app.js y quedaria asi:

const express = require ('express');
const router = express.Router();        //Creo esta variable que va a guardar la ejecucion del
                                        //metodo router de express

// El metodo router permite crear rutas montables y desmontables para modularizar todo el sistema de ruteo en archivos diferentes. El archivo productos.js (router) quedaria asi:

// Inicio - Todos
router.get('/', function(req,res){
    //codigo
});
// Detalle - Un producto
router.get('/detalle/:id', function (req,res){
    //codigo
});
// Crear - Formulario
router.get('/crear',function(req,res){
    //codigo
});

module.exports = router.js         // Exporto el modulo router para que sea improtado por app.js

// En app.js, incluyo el modulo creado usando el metodo use de express, quedando algo asi:

const express = require('express')
const app = express()
const rutasProductos = require('./routes/productos');

app.use('/productos', rutasProductos);








