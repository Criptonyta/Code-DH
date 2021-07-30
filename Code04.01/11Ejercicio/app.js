/*
TO DO:
REEMPLAZAR LOS ARCHIVOS DEL PASO 3.1
FALTA PASO 4.1 y 4.2


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
const path = require ('path'); // requiero el modulo path
app.listen(3000, () => console.log('El servidor esta rodando en el puerto localhost:3000'));



// Usando sendFile...

    app.get('/', (req, res) => {
        // console.log(__dirname); // genero la ruta absoluta para que se imprima en la consola, despues de actualizar la pagina localhost
        let htmlPath = path.resolve(__dirname, './DH-Heroes/views/index.html') // Uso la ruta absoluta con el modulo path y el metodo resolve guardandolo en una variable
        // console.log(htmlPath); // imprimo la ruta absoluta completa, despues de actualizar el navegador
        res.sendFile(htmlPath); // Envio el archivo html
    });

    app.get('/babbage', (req, res) => {
        let htmlPath2 = path.resolve(__dirname, './DH-Heroes/views/babbage.html')
        res.sendFile(htmlPath2);
    });

    app.get('/berners-lee', (req, res) => {
        let htmlPath3 = path.resolve(__dirname, './DH-Heroes/views/berners-lee.html')
        res.sendFile(htmlPath3);
    });

    app.get('/clarke', (req, res) => {
        let htmlPath4 = path.resolve(__dirname, './DH-Heroes/views/clarke.html')
        res.sendFile(htmlPath4);
    });

    app.get('/hamilton', (req, res) => {
        let htmlPath5 = path.resolve(__dirname, './DH-Heroes/views/hamilton.html')
        res.sendFile(htmlPath5);
    });

    app.get('/hopper', (req, res) => {
        let htmlPath6 = path.resolve(__dirname, './DH-Heroes/views/hopper.html')
        res.sendFile(htmlPath6);
    });

    app.get('/lovelace', (req, res) => {
        let htmlPath7 = path.resolve(__dirname, './DH-Heroes/views/lovelace.html')
        res.sendFile(htmlPath7);
    });

    app.get('/turing', (req, res) => {
        let htmlPath8 = path.resolve(__dirname, './DH-Heroes/views/turing.html')
        res.sendFile(htmlPath8);
    });


// Indicando la ruta a la ubicación de nuestros archivos estáticos (fotos+CSS)
    app.use(express.static('public'));
