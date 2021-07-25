// SendFile('Path')
// Sirve para enviar un archivo (res) y no un texto plano, frente a un request
// La ruta (El path), debe ser declarado en terminos absolutos, por ello requiere que se instale el modulo path de express

// *Ejecutando nodemon en el terminal, el servidor se actualiza automaticamente al salvar*
// Se instala con el comando npm install -g nodemon


const express = require ('express');
const path = require ('path'); // instalo el modulo path
let app = express();
app.listen (3000, () => console.log ('Servidor corriendo en puerto 3000'));

app.get('/', (req, res) => {
    // console.log(__dirname); // genero la ruta absoluta para que se imprima en la consola, despues de actualizar la pagina localhost
    let htmlPath = path.resolve(__dirname, './vistas/index.html') // Uso la ruta absoluta con el modulo path y el metodo resolve guardandolo en una variable
    console.log(htmlPath); // imprimo la ruta absoluta completa
    res.sendFile(htmlPath); // Envio el archivo html
    })