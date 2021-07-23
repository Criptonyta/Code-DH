// En el archivo entrypoint (llamado app.js), debemos tener lo siguiente

const express = require ('express'); // para requerir las funcionalidades del framework express
const app = express (); // en esta variable, se guardan todas las funcionalidades que son ejecutadas en express

app.listen(3000, () => console.log('El servidor esta rodando en el puerto localhost:3000'));
// al objeto app, le pedimos el que ejecute el metodo listen para levantar el servidor
// el servidor esta creado y queda en status de escucha de solicitudes GET

app.get('/', function(req,res){
    res.send('Bienvenidos al sitio');
})
// al objeto app, le pedimos el metodo get para que muestra un mensaje en el localhost:3000
// Get, recibe dos parametros: 1) una string con la url 2) un callback con dos parametros (req, res).
// req tendra todas las propiedades de la peticion que llego y res de las respuestas que vamos a dar