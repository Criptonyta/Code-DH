// MVC = Modelo Vista Controlador
// Es un patron de diseño que sirve para organizar mejor nuestro desarrollo y resolver el problema de comunicacion entre el front y el backend.
// Vista => Es la parte visual de la aplicacion (frontend)
// Modelo => Es el backend, la base de datos. Conforma y contiene toda la logica de nuestra aplicacion
// Controlador => Es el puente de conexion entre ambos (Vista y Modelo). Procesa todos los datos que recibe de los modelos y los presenta de forma entendible atraves de las vistas


// ============================RESUMEN DEL MATERIAL COMPLEMENTAR=====================

//CONTROLADORES => Responsables por atender los distintos pedidos del cliente y generar comunicacionentre vistas y modelos.

//ARQUITECTURA DE ARCHIVOS => En la raiz, crar la carpeta controllers donde ira un .js por cada recurso o entidad (usuarios, productos, carrito de compras, etc). Cada archivo sera un MODULO que exportaremos para luego requerirlo donde se lo necesite.
// Luego de crear el archivo productosController.js (nombredelrecursoController.js) en esa carpeta, definimos una variable y le asignamos un objeto literal

// const controlador = {
//     index:      //Para mostrar el listado de productos
//     show:       //Para mostrar el detalle del producto
//     create:     //Para enviar datoss para agregar un producto
// }

// La vieja forma anterior en la que usabamos un archivo producto.js en la carpeta routes, que contenia una URL y un callback que se encargaba de manejar las peticiones (como esta en el ejemplo:)

router.get('/', (req,res) => {
    res.send('Index de producto');
});


// En esta nueva forma de implementarlo (MVC), buscamos que las responsabilidades y reglas queden distribuidas en los archivos.Ahora seran los metodos de cada controlador los que recibiran los datos y enviaran la respuesta. Por ello, copiamos el callback definido en las rutas y lo traemos para dentro de la funcion

// const controlador = {
//     index: (req,res) => {
//         res.send('Index de producto');
//     }
//     show:  (req,res) => {
//         res.send('Detalle de producto');
//     }
//     create:   (req,res) => {
//         res.send('Agregar un producto');
//     }
// };

//IMPLEMENTAR EL CONTROLADOR => Hay que exportar la variable, creando la linea al final del archivo del controlador...

module.exports = controlador;

// siendo que para usarlo, requerimos el modulo desde el archivo de ruteo (routes/productos.js)

const productosController = require ('../controllers/productosController');

// Por ultimo, terminamos de configurar aquella ruta a la que le quitamos el callback. Para eso, llamamos al metodo index del controlador de productos y le pasamos el producto como segundo parametro (sin parentesis por tratarse de un callback)

router.get('/',productosController.index);

// CODIGO FINAL

// raiz>controllers>productosController.js 

const controlador = {
    index: (req,res)=>{                     // Escribimos los metodos de cada pedido
        res.send('Index de productos');
    },
};
module.exports = controlador;               // Exportamos el objeto literal


// raiz>routes>productos.js

const productosController = require ('../controllers/productosController'); // llamo al contr
router.get('/', productosController.index) // ejecuto el metodo que corresponda en cada linea




// ============================RESUMEN DE LA VIDEOAULA===============================

// CONTROLADORES => Son pequenas porciones de codigo (objetos literales) que cumplen la funcion de atender las instrucciones del cliente (V > C > M | M > C > V).
// El resultado final, sera un codigo muy organizado donde quedara:
// raiz>app.js                              => solamente los recursos y prefijos
// raiz>controllers>productosController.js  => la funcionalidad y consecuencias que tendremos 
// raiz>routes>productos.js                 => solamente el listado y diccionario de nuestras rutas


// PASO 1 => crear en la raiz del proyecto, la carpeta controllers y alli un .js por cada recurso de la app (productosController.js, marcasController.js, categoriasController.js, etc).
// PASO 2 => al ser un modulo Node, hay que exportar su funcionalidad y requerirlo donde lo necesitemos

// raiz>controllers>productosController.js
const controlador = {};
module.exports = controlador;

// PASO 3 => Crear los metodos (funciones) para cada request y sus propiedades . Para ello, debemos traer el valor que teniamos en la funcion callback que habiamos usado para contruir la ruta, asignandola como valor a esa propiedad:

// Teniamos:
router.get('/', (req, res) => {
    res.send('Index de productos');
});

// Debemos tener en raiz>controllers>productosController.js:
const controlador = {
    index: (req, res) => {
        res.send('Index de productos');
    }
};

module.exports = controlador;

// Ejemplo => partiendo de un entry point (app.js) donde tenemos una ruta para cada uno de los recursos:
// raiz>app.js

let express = require('express');
let rutasProductos = require('./routes/main.js');
let rutasMain = require('./routes/main.js');

let app = express();

app.listen(3000, () => console.log('Esto fue exitoso'));

app.use('/productos', rutasProductos);
app.use('/',rutasMain);

// creamos la carpeta controllers y dentro dos archivos (marcasController.js y productosController.js).
// Con esto, buscamos para separar la responsabilidad dejando en nuestro archivo de rutas solo el mapeo (un diccionario de las urls de nuestro sitio), el comportamiento de la consecuencia de haber entrado a esa ruta. De esta forma, en productosController.js tendriamos un objeto literal (productosController, que vamos a exportar al final) y en el objeto literal, las funciones que se van a encargar de manejar a los productos:

// raiz>controllers>productosController.js
let productosController = {
    listado: function () {},
    crear: function () {},
    detalle: function () {},
    detalleComentarios: function () {}
};

module.exports = productosController;


// PASO 4 => Darle valor a las funciones definidas en productosController.js
// Lo que va adentro de las funciones, es la funcionalidad que ya habiamos construido en la hoja de productos en el archivo de rutas (es decir lo que pasa cuando queremos accesar a /), referida a esa funcion (por ejemplo, crear un nuevo producto, generar un listado, etc) para ordenar todo de forma que queden en el archivo de rutas solo las urls de nuestro sitio, en la pagina de productos.js solo las xxxxxxxxx y en productosController.js las funciones que se encargaran de manejar los productos.

// raiz>controllers>productosController.js
let productosController = {
    listado: function () {},
    crear: function () {},
    detalle: function (req,res) {
        res.send('Bienvenidos al detalle del producto' + req.params.idProducto);
    },
    detalleComentarios: function () {}
};

module.exports = productosController;


// Paso 5 => Vincular el controlador creado con la ruta
// Lo primero sera requerir el archivo productosController.js desde la carpeta routes

const productosController = require ('../controllers/productosController');

// Luego nombro la variable donde esta guardado el controlador y acceder al metodo que quiero que sea ejecutado cuando se solicita esta ruta (sin poner los parentesis al lado del metodo). La ruta recibe un callback que se ejecutara cuando sea necesario.
// En productos.js llevamos los espacios que nos habian quedado vacios cuando cortamos y pegamos:

// raiz>routes>productos.js
let express = require('express');
let productosController = require('../controllers/productosController.js') //Traigo el archivo
                                                                        //de controller
let router = express.Router();

router.get('/:idProducto', productosController.detalle); //indico que la consecuencia(lo que
                                                        //va detras de la coma), se encuentra en productosController en el metodo llamado detalle

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router;

