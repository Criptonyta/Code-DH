// ------ Segun el video ------
// Si tuvieramos que crear un modelo para usuarios, lo primero es crear el archivo models>Usuario.js (iniciando siempre en MAYUSCULA Y SINGULAR). Exporta una funcion que recibe dos parametros: a) sequelize y b) dataTypes que son los tipos de bases de datos que vamos a usar.
// Luego creamos una constante llamando al metodo define de sequelize y que va a recibir 3 parametros: a) el nombre de la tabla en plural (determinado por sequelize e inferido del nombre en singular que le indicamos), b) un objeto literal que a va presentar los detalles de los campos de la tabla, detallandolos y usando el metodo sequelize dataTypes para identificar el tipo de dato del que se trata, c) este es optativo y sirve para cambiarle el nombre de tabla que viene definido por sequalize, usando la propiedad tableName


module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Usuario', { //nombre de la variable varia en funcion del nombre del modelo
        id: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            allowNull: false,
            type: dataTypes.STRING,
        }
    }, {
        tableName: 'UsuariosVIP',
    });
    return Usuario;
}

// Otra forma de escribirlo (me parece mas facil y entendible). Recordar que esto se hace unicamente una vez (salvo que cambiemos las columnas de la BD) para indicarle a sequelize donde esta la BD y como son los datos contenidos

module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas"; //defino un alias para asegurar que no hay problemas con el default de sequelize
    let cols = { //defino los campos o columnas que voy a utilizar de la BD
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        }
    };
    let config = { //defino la configuracion
        tableName: "movies",
        timestamps: false //Sequelize asume que tenemos creados los campos de registros, si no existe, falla
    }
    const Pelicula = sequelize.define(alias, cols, config);

    return Peliculas
};









/* ------ Segun el apunte ------
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

2) EL METODO DEFINE() => Permite definir asignaciones entre un modelo y una tabla. Recibe tres parametros:
    a) Un alias que identifica al modelo
    b) Es un objeto con la configuracion de las columnas de la BD
    c) Este es opcional y es un objeto con las configuraciones adicionales
Define devuelve 








*/