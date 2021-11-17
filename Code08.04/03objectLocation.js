// Quizás alguna vez nos hemos preguntado: ¿cómo podemos hacer una redirección desde el front-end? o ¿cómo podemos obtener el query string que viene en la URL?. Pues bien, así como llevamos a cabo estos procedimientos en el back-end, también es posible en el front-end, ya que JavaScript "todo lo puede" (bueno, casi todo). Puntualmente, en esta oportunidad veremos un objeto llamado location, el cual trae consigo un par de propiedades y métodos que nos van a permitir recopilar información que viaje en la barra de direcciones

// LOCATION => Es un objeto que permite que trabajemos con la URL desde el front . Sus atributos (que los pueden acompanar) son:

location.href // devolvera toda la url

location.reload() // permite recargar toda la pagina desde el front

// QUERYSTRING => Cuando hacemos un pedido por GET atraves de un formulario o un hipervinculo, los datos viajan atraves de un QUERYSTRING, que se agrega al final de nuestra URL despues del signo de pregunta. Para rescatar ese dato, usamos el atributo:

location.search // devolverra la querystring entera (todo lo que viene detras del ?)

let querySearch = new URLSearchParams(location.search) // se utiliza para instanciar un objeto de la querystring

querySearch.has('search_query') // revisa si el parametro buscado esta en la querystring y retorna un booleano

querySearch.get('search_query') // retorna el valor del parametro buscado por el usuario