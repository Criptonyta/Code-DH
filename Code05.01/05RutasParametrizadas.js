
// ¿Qué pasa si tenemos 2000 productos en nuestro sistema y queremos mostrar el detalle de cada uno de ellos? ¿Será que tenemos que hacer una ruta por cada producto?
// Una ruta dinámica es aquella que, tal como su nombre lo indica, muestra una información u otra dependiendo de ciertos criterios. Esto la diferencia de las rutas estáticas, que son las que hemos venido trabajando hasta el momento.
// Para que esto funcione como es debido tanto la ruta como el controlador deben estar preparados para poder actuar dependiendo de la información que haya solicitado el cliente.


// RUTAS PARAMETRIZADAS => Usan un parametro dinamico dentro de la ruta que puede asumir cualquier valor . Ese parametro debe recibir un nombre y ser antecedido por ':' 
// Cada parametro debe estar separado por /

app.get('/productos/:id/:nombre?', function (req,res){
    let idProducto = req.params.id;
    let nombreProducto = req.params.nombre
});

// Recordando que:
// app => es la variable que guarda la ejecucion de Express
// get => es el metodo HTTP (tambien pueden usarse post, put, patch, delete)
// /productos/:id => Es el path , un string que referencia a la ruta que ingreso el cliente 
// /:id => Es el parametro obligatorio para definir una parte dinamica en la ruta
// /:nombre? => Es un parametro opcional (es decir la ruta respondera si llega o si no llega). Para eso se usa el ?
// function => es el handler del callback que definira que accion tomar cuando se acceda a esa ruta 
// req => Request es el primer parametro del handler que representa el pedido del cliente 
// res => Response es el segundo parametro del handler que representa la respuesta al cliente 
// params => Es una propiedad del objeto literal request que sirve para capturar parametros de la ruta, guardandolos como propiedad:valor

