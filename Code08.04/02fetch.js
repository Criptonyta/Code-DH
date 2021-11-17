// Las solicitudes asincrónicas son un pilar fundamental del desarrollo con JavaScript, sobre todo cuando nos encontramos del lado del front-end. Con ellas podremos hacer peticiones a distintas APIs y consumir los datos que estas nos proveen de forma dinámica y sin poner en riesgo la carga del resto de nuestra funcionalidad.
// En la actualidad, JavaScript nos provee las funcionalidades de FETCH. Las cuales son de gran utilidad ya que nos permiten, de una manera sencilla y rápida, establecer una comunicación con un servidor a través de los distintos endpoints que nos provea su API.
// Algo de lo mencionado anteriormente ya lo hemos manejado, pero del lado del back-end. Esta es una excelente oportunidad para retomar esos conceptos y aplicarlos, ahora, del lado del front-end.

// FETCH => Es una funcion que nos permite comunicarnos con APIS, generando pedidos mediante el metodo GET o enviar datos por POST. Ya que estos pedidos son asincronos, Fetch devuelve siempre una promesa, por lo que necesitaremos usar tambien el THEN. Si en algun momento la API dejo de funcionar (porque el proovedor dejo de darle soporte), dara un error, que debera ser trabajado con el metodo CATCH


// Cuando el pedido es por GET, fetch recibe UN solo parametro que es el endpoint (la url de la api que queremos consultar). Como resultado, la api nos envia un json por lo que deberemos decodificarla usando el metodo.json, teniendo que usar otro THEN para trabajar con la promesa ya decodificada.

window.onload = function () {
    fetch('URL QUE QUIERO CONSUMIR')
        .then(function (respuesta) {
            return respuesta.json() // proceso en formato json los datos que me dio la API
        })
        .then(function (informacion) {
            // quiero ver como me esta trayendo los datos que fueron procesados. data es la propiedad que tiene los datos con los que quiero trabajar y tiene entre otros el propiedad title
            console.log(informacion.data)

            for (let i = 0; i < informacion.data.length; i++) {

                let gif = "<p>" + informacion.data[i].title + "</p>";
                gif += "<img src=" + informacion.data[i].images.original.url + ">"

                document.querySelector('ul').innerHTML += "<li>" + gif + "</li>"
            }
        })
        .catch(function (e) {
            alert("Error: Intente mas tarde")
        })
}

// Cuando el queremos enviar datos por POST, tenemos que trabajar en tres pasos: detallar la info a enviar, armar las configuraciones y construir el fetch. fetch tiene DOS parametros: a)la url de la api que queremos consultar b) un objeto literal con los datos necesarios para que la API entienda nuestra peticion. Este OL, tiene las siguientes propiedades:

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/data'
    }
})


// Por ejemplo:

window.onload = function () {
    // Creo una variable con el detalle de la informacion que quiero enviar
    let data = {
        image_id: "asf2",
        sub_id: "my-user-1234",
        value: 1
    }
    // Creo una variable de configuracion del envio, la apikey es la llave que me da la api para que pueda acceder a ella
    let settings = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json',
            'x-api-key': '089995449-hg48he'
        },
        'body': JSON.stringify(data)
    }
    // Por ultimo, llamo a fetch
    fetch("URL DE LA API A LA QUE QUIERO ENVIAR", settings)
        .then(function (response) {
            return response.json();
        })
        .then(function (info) {
            console.log(info);
        })
        .catch(function (e) {
            console.log('Error ' + e);
        })
}