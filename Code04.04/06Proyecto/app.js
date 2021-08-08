const express = require ('express'); // Comienzo configurando un servidor express
const path = require ('path'); // Instalo el modulo path para facilitar la gestion de las rutas en los diferentes SO.

const app = express ();

const publicPath = path.resolve (__dirname,'./public'); // Le pido a la variable path que resuelva la ruta de public

app.use ( express.static (publicPath) ) // Uso el metodo nativo de express static para indicar que quiero usar algunos archivos estaticos. Static recibe como parametro la ruta en la que se encuentra la carpeta de archivos publicos. Para eso creo la variable publicPath, el que recibira la ruta del modulo node Path

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/', (req, res) => { // Para publicar la pagina en el navegador, debo generar la ruta
    res.sendFile(path.resolve(__dirname,'./views/home.html')); // Del atributo res, quiero usar el metodo sendFile para enviarle la pagina, usando una ruta absoluta con el modulo path
});