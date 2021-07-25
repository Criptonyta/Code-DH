// Requests y Responses

// app.Method(Path,Handler) => 
// App es la variable que guarda la ejecucion, 
// Method, el METODO HTTP que quiero ejecutar, 
// path es la ruta de la pagina que quiero ejecutar
// y el handler es el callback o funcion a ejecutar con dos parametros (req, res) y la logica de lo que debe pasar

const express = require ('express');
let app = express();
app.listen (3000, () => console.log ('Esto fue exitoso'));
app.get('/',function (req, res){
    res.send('Bienvenidos al sitio');
    });
app.get('/contacto',function (req,res){
    res.send('Dejanos tu contacto');
});
app.get('/un-objeto',function (req,res){
    res.send({name: 'Daniel'});
});
