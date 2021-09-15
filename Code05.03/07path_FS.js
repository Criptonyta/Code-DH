// FileSystem => Es un módulo que permite la posibilidad de leer y escribir sobre archivos existentes en nuestro servidor. Para usarlo, necesito llamarlo desde app.js

const fs = require('fs');
const { stringify } = require('querystring');

// Algunas de sus funciones son:
// readFileSync => Permite RECUPERAR DATOS de un archivo y poder USARLOS. 

let sitcoms = fs.readFileSync(sitcoms.txt, 'uft-8');// el segundo parametro aclara el tipo de encoding

let users = fs.readFileSync('users.json','utf-8');  // Si estamos leyendo un archivo JSON, es necesario convertir ese
let usersJson = JSON.parse(users);                  // string en un objeto literal con el metodo JSON.parse


// writeFileSync => Permite ESCRIBIR archivos. Recibe 2 parametros: 1) el archivo en donde queremos escribir y 2) el contenido que queremos escribir. Si el archivo citado no existe, lo crea. El metodo borra todo el contenido existente y lo reemplaza por el nuevo.


fs.writeFileSync('estrenos-2020.txt', 'Titanic 2');

let pelicula = {
    titulo: 'Titanic',
    minutos: 560
};
let peliculaJson = JSON.stringify(pelicula);        // Como solo puede escribir recibiendo contenido en string. Si lo
fs.writeFileSync('titanic.json', peliculasJson);    // tenemos en otro formato, usamos un objeto JSON, conviertiendolo
                                                    // con JSON.stringify


// appendFileSync => Permite AGREGAR contenido a archivos. Recibe 2 parametros 1) el archivo en donde queremos escribir y 2) el contenido que queremos escribir. Si el archivo citado no existe, lo crea. El metodo NO borra el contenido existente y lo coloca al final del archivo.

fs.appendFileSync('estrenos-2021.txt', 'Titanic 3');



