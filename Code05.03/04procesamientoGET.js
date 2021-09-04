
// Generalmente usamos el metodo GET para retornar vistas, archivos o datos. Las rutas reciben 2 parametros: 1) Un string con la ruta y 2) Un callback que definira la logica a ejecutar cuando el cliente pida esa ruta.


// Enrutador
router.get('/peliculas', (req,res) => {res.render('peliculas')} );

// Enrutador
const controller = {
    todas: (req,res) => {res.render('peliculas')}
};
router.get('peliculas', controller.todas);

// Sobre la ejecucion de express
app.get('peliculas',(req,res) => {res.render('peliculas')} );


// QUERYSTRING => Es una cadena de texto (conocida como cadena de consulta) que viaja en la URL al momento de hacer una peticion.
    // a) Comienza al final de la ruta con el signo ?
    // b) Esta formado por uno o mas pares de clave=valor 
    // c) En el caso de haber mas de un par, son separados por un caracter especial &

    // Ejemplo: https://www.youtube.com/watch?video=daqQ435&time=30

// Para acceder al querystring dentro del callback que maneja la peticion, debemos hacerlo atraves de la propiedad query del objeto request

    console.log(req.query.video)    // Retornara 'daqQ435"
    
