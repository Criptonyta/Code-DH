// Pasos para instalar Express (debe ser instalado en cada proyecto)
// 1) Ejecutar en el terminal 'npm init -y'
// 2) Correr en el terminal 'npm install express --save'
// 3) En el package.json en main, cambiar el nombre del entrypoint en main desde index.js a app.js


// Para usar Express - LLAMAR A EXPRESS USANDO ESTAS VARIABLES DESDE UN ARCHIVO LLAMADO app.js

const express = require ('express');
const app = express ();


// Al momento de hacer hosting, se puede hacer hosting en Github, pero solo de contenido HTML, CSS y Javascript, pero no soporta node y express. Para eso podemos integrar con el servicio de Heroku y linkarlo con GitHub. Luego de instalar el CLI de Heroku:

// 1) en el package.json en scripts crear una nueva linea "start": "node app". A partir de alli, para ejecutar la app llamo start node en lugar de node app.js
// 2) Creo dos repositorios vacios (uno en heroku y otro en Github)
// 3) en el app.js creo el servidor de la misma forma pero cambian el puerto:

const puerto = process.env.PORT || 3000
app.listen(puerto, () => console.log("escuchando servidor en el puerto...."))

// 4) git init
// 5) Git remote origin "url del repositorio"
// 6) Git push origin master 
// 7) git push heroku master     (con esto envio todo el codigo a heroku)
// 8) en el terminal "heroku open"

