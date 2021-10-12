/*
MODELOS => MVC… en su momento, cuando vimos este concepto, quizás fue algo abstracto. Sin embargo, a esta altura del partido, es algo que ya conocemos y entendemos bastante bien. Pero ¿qué tiene que ver esto con Sequelize y las bases de datos?
Dentro de este patrón de diseño, la M hace referencia a los Modelos. Haciendo memoria, los modelos son la capa del programa que permite interactuar con la base de datos.
Los modelos son de suma importancia porque a partir de ellos vamos a poder definir la estructura que posee la tabla en sí, y adicionalmente vamos a poder generar las relaciones que tenga esa tabla. Lo mejor de todo es que esto lo realizaremos con puro código JavaScript.

Al momento de hacer consultas, el MODELO nos retorna informacion en un formato util y comodo para luego operar.
Contienen unicamente los datos puros de la aplicacion (no contienen la logica de como los datos deben ser presentados al usuario). El modelo debe ser independiente del sistema de almacenamiento.

Es decir, el MODELO es una representacion de nuestra tabla en codigo. Con esto obtendremos recursos que nos permitiran realizar consultas e interacciones con la BD utilizando sequelize.

1) CREANDO UN MODELO => 
a) Debe crearse un modelo (un archivo con nombre UpperCamelCase, en singular y extension .js = Peliculas.js) para cada tabla de nuestra BD y se almacenan en ./database/models

b) Un modelo es una funcion que debemos definir y luego exportar con el module.exports. La funcion, recibe 2 parametros: 
    - define() = El objeto sequelize para poder acceder a su metodo define () y 
    - datatype = Necesitamos traer el objeto con la informacion de las columnas y que datos permitiran

2) EL METODO DEFINE() =>








*/