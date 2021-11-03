// ------ Segun video ------ .then() == luego
// En la raiz del proyecto, creo el archivo promesas.js 

// Llamo al archivo funciones donde tendre que parametrizar el comportamiento de las funciones asincronicas
let funcionesAsync = require('./funciones.js');

// de funcionesAsync, traigo la funcion obtenerDatos
funcionesAsync.obtenerDatos()
    // como todas las consultas a la BD son asincronicas, debo configurar un then y su funcion para que la consulta no bloquee el programa. Solo voy a poder trabajar con la variable resultado adentro del .then(). Podria pedirle filtrar todos los mayores de edad en ese resultado (siempre habiendo configurado el metodo filtrarMayoresDeEdad antes)
    .then(function (resultado) {
        return funcionesAsync.filtrarMayoresDeEdad(resultado)
    })
    // el resultado que retorna el then anterior es lo que ingresa en el segundo then y sera tratado por este para imprimir los resultados filtrados
    .then(function (filtrados) {
        console.log(filtrados);
    })
    // Caso algo falle en la ejecucion de los then, identifico ese problema atraves de un catch para imprimir que esta dando error (es siempre buena practica colocar un chatch al final de una cadena de thens)
    .catch(function (error) {
        console.log(error);
    })




/* ------ Segun apunte ------

PROMESAS => Regularmente en los lenguajes de programación —cuando se envía a ejecutar algún código—, el programa no continúa la secuencia sino hasta que el código enviado a ejecutar no culmine y dé alguna respuesta. En ese sentido, es bueno saber que JavaScript nos brinda la posibilidad de modificar dicho funcionamiento. Es decir, aunque se mande a ejecutar algún código, el programa puede continuar ejecutando otros procesos. Esto recibe el nombre de: Promesas, situaciones que no sabemos en qué momento serán cumplidas.
Son funciones que permiten ejecutar codigo asincronico. El asincronismo son las instrucciones que se ejecutan por medio de un mecanismo especifico (por ej un callback, promesa o evento) para que la respuesta sea procesada en otro momento, sin que se bloquee el programa (el pedido se ejecuta en paralelo con el resto del codigo)


.then()   =>  devolvera un resultado o no, mientras el codigo se sigue ejecutando


obtener usuarios()                        // funcion asincronica
    .then (function (data){               // ejecuta el console.log solo si obtenerusuarios recibe un resultado
    console.log(data);
    });
    console.log('Se sigue ejecutando')    // Codigo que podria seguir ejecutandose mientras se ejecuta la prom



PEDIDOS ANIDADOS => Aveces los .then() suelen tener promesas adentro. para resolverlo, usamos otro then para que entre en ejecucion una vez que se resuelva el anterior.

obtener usuarios()                        // funcion asincronica
    .then (function (data){               // ejecuta el console.log solo si obtenerusuarios recibe un resultado
        return filtrarDatos(data);
    })
    .then (function(dataFiltrada){
        console.log(dataFiltrada);
    })


.catch()    => Cuando no obtenemos un resultado, se genera un error. Para resolverso, se usa .catch(), que encapsula cualquier error que pueda generarse atraves de las promesas. Dentro de este metodo, decidimos que hacer con el error, siendo este recibido como parametro del callback del .catch().

obtener usuarios()
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })

.promise.All() => Si necesitamos que dos o mas promesas se resuelvan para realizar cierta accion, usamos promise.All(), que contendra un array de promesas que una vez resueltas, ejecutaran un then con los resultados de las mismas.

1) guardar en variables las promesas que necesitamos obtener:

let promesasPeliculas = obtenerPeliculas ();                => Promesa de peliculas

let promesasGeneros = obtenerGeneros ();                    => Promesa de generos

2) Utilizamos el metodo promise.All() para guardar las variables creadas en el punto 1)

promise.All ([promesasPeliculas, promesasGeneros])          => Promesas a resolver

3) El callback del then() recibe un array con los resultados de las promesas cumplidas 

promise.All ([promesasPeliculas, promesasGeneros])
.then (function([resultadoPeliculas,resultadoGeneros]){     => El then se ejecutara solo si ambas se cumplieron
console.log(resultadoPeliculas, resultadoGeneros);
})


/* ------ Segun clase 15/10 ------

 TRY CATCH => Es otra forma de tratar las promesas. Intenta hacer algo y si no lo consigue va por otro camino. Cuando se convina con AWAIT (que funciona como un if), podemos setear el tiempo de espera del metodo. La ventaja de este metodo es que si falla, no se para el codigo.


const AlumnoModel

getAlumno: async() => {
try {
    const response = await db.alumno.findAll()
    return response
} catch (error) {
    console.log(`Fallo de consulta a la BD ${error.message}`);
    return [];
},
},
}

Una funcion async  devuelve SIEMPRE una promesa



*/