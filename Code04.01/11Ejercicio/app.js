/*
Para la construcción de este pequeño sitio web se espera contar con la posibilidad deacceso a las siguientes URLs:
●/-> Debe direccionar al recurso index.html.
●/babbage-> Debe direccionar al recurso babbage.html
●/berners-lee-> Debe direccionar al recurso berners-lee.html.
●/clarke-> Debe direccionar al recurso clarke.html.
●/hamilton-> Debe direccionar al recurso hamilton.html.
●/hopper-> Debe direccionar al recurso hopper.html.
●/lovelace-> Debe direccionar al recurso lovelace.html.
●/turing-> Debe direccionar al recurso turing.html.

*/



const express = require ('express');
const app = express ();
const path = require ('path'); // instalo el modulo path
// app.listen(3000, () => console.log('El servidor esta rodando en el puerto localhost:3000'));


// Para enviar y cargar las urls

// app.get('/', function(req,res){
//     res.send('Bienvenidos al sitio');
// });

// O usando sendFile...

    app.get('/', (req, res) => {
        console.log(__dirname); // genero la ruta absoluta para que se imprima en la consola, despues de actualizar la pagina localhost
        let htmlPath = path.resolve(__dirname, './vistas/index.html') // Uso la ruta absoluta con el modulo path y el metodo resolve guardandolo en una variable
        console.log(htmlPath); // imprimo la ruta absoluta completa
        res.sendFile(htmlPath); // Envio el archivo html
    });