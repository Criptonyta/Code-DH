// Las vistas se comunican con los controladores y toman la información que estos reciben de los modelos. Para poder mostrar una vista en el navegador, es importante aclararle al controlador cuál vista es la que deseamos enviar.. Al proceso de enviar la vista al navegador lo conocemos como renderización de vista.

// RENDERIZACION=> Las vista EJS son HTML mezclado con tags EJS. Express tiene 2 metodos:

app.render () // Usado para renderizar la vista primero y despues pasar el HTML a una funcion
              // callback que se encarga de enviarla.
res.render () // Se encarga de realizar los dos pasos (renderizar la vista y enviarla). Se
              // encuentra dentro del metodo response de la peticion y debemos indicarle en un  string la vista a renderizar (sin aclarar la carpeta ni extension pq ya lo configuramos en app.js con el metodo app.use())

app.get('/', (req,res) =>{
    res.render('index')
})

// ACCEDIENDO A RECURSOS ESTATICOS => Estaticos son los que no pasan por el proceso de renderizado y son cargados directamente por el cliente (Ej, imagenes, archivos js, css, etc). Los recursos estaticos se almacenan en la carpeta public.

app.use(express.static('public'))

// Para requerir un recurso estatico recordar que por defecto busca en la carpeta public, por lo que para escribir la ruta public/images/logo.png solo deberemos indicar /images/logo.png



