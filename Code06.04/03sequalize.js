/*
SEQUELIZE =>  Sequelize es un ORM que ayuda a conectarnos e interactuar con bases de datos relacionales, como pueden ser Postgres, MySQL o SQLite por ejemplo.
Este ORM es un paquete de Node.js que está disponible para su instalación a través de npm. Si bien el mismo tiene una versión un poco más reciente, aquí trabajaremos con la versión 5 de este paquete.

1) INSTALACION => En la carpeta del proyecto, ejecutar:

npm install sequelize cli -g
npm install sequelize
npm install mysql2


2) RUTAS Y DIRECTORIOS => Despues de la instalacion, debemos configurar las rutas y los directorios. Para eso, se crea un archivo llamado .sequelizerc en la raiz del proyecto y dentro de este:
*/

const path = require('path')

module.exports = {
    config: path.resolve('./database/config', 'config.js'),
    'models-path': path.resolve('./database/models'),
    'seeders-path': path.resolve('./database/seeders'),
    'migrations-path': path.resolve('./database/migrations'),
}

/*
3) INICIAR SEQUELIZE => Sequelize crea todas las carpetas y archivos que necesitamos y empieza a correr

Sequelize init

4) CONFIGURACION => Debemos configurar la conexion con la BD. En las carpetas que creo sequelize, buscamos la carpeta config.js en la ruta database/config/config.js y reemplazamos en el JSON las credenciales que vienen por defecto, por las nuestras:

'development': {
    'username': 'root',
    'password': 'MiPassword',
    'database': 'moviesDB',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorAliases': false
}

5) EXPORTAMOS EL MODULO EDITADO => Copiamos el JSON editado en el punto 4 y lo exportamos al final del documento en el archivo config.js

module.exports = {
    'development': {
        'username': 'root',
        'password': 'MiPassword',
        'database': 'moviesDB',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        'operatorAliases': false
    },
}

6) OBJETO DB => Al final del archivo database/models/index.js, se encuentra disponible la exportacion del objeto DB, que podremos llamar desde donde sea requerido, cada vez que debamos consultar la BD. 

*/