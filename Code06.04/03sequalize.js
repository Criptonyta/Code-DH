// ------ Segun video ------
// 1) Despues de la instalacion, procedo a configurar sequelize antes de utilizarlo, creeando en la raiz del proyecto el archivo .sequelizerc, indicandole donde estan todos los archivos que estan relacionados con la BD. Esto se hace solo una vez cuando creamos el vinculo con la BD o bien cuando eliminamos/editamos alguna columna. Con esto, crea la carpeta database para que en ella guarde todo lo relacionado con estas

const path = require('path')

module.exports = {
    config: path.resolve('./database/config', 'config.js'),
    'models-path': path.resolve('./database/models'),
    'seeders-path': path.resolve('/database/seeders'),
    'migrations-path': path.resolve('database/migrations'),
}

// 2) Ejecuto sequelize init desde la terminal. Se crearan carpetas y archivos que van a facilitar la configuracion, prestandole especial atencion a los siguientes: a) database>config>config.js (es el que debemos editar porque es el que guarda el tipo y nombre de la BD). Tendremos algo de este tipo (debemos agregar el module exports para que siempre este disponible en otras partes del codigo):

module.exports = {
    'development': {
        'username': 'root',
        'password': 'MiPassword',
        'database': 'moviesDB',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        'operatorAliases': false
    }
}

// b) database>models>index.js (es el que realiza la conexion con la BD y el que exporta los resultados de las consultas a una variable llamada DB, que es la que vamos a usar para hacer todas las consultas. Verificar al final del archivo que este presente el module.exports = db). 




/* ------ Segun el apunte ------
SEQUELIZE =>  Sequelize es un ORM que permite conectarnos e interactuar con bases de datos relacionales, como pueden ser Postgres, MySQL o SQLite por ejemplo.
Este ORM es un paquete de Node.js que está disponible para su instalación a través de npm. Si bien el mismo tiene una versión un poco más reciente, aquí trabajaremos con la versión 5 de este paquete.

1) INSTALACION => En la carpeta del proyecto, ejecutar:

npm install sequelize cli -g
npm install sequelize
npm install --save mysql2


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



------ Segun el VIDEO DE LA CLASE PARA INSTALAR SEQUELIZE AUTO ------


PARA INSTALAR Y USAR SEQUELIZE AUTO => VER https://github.com/sequelize/sequelize-auto y el video de la clase en vivo "consumo de apis propias (apartir de la hora 1:43)"
PASOS:

1) CREAR EL ARCHIVO DE CONFIGURACION  => .sequelizerc en la raiz del proyecto, incluyendo en el el texto tipo de la configuracion:

const path = require('path')

module.exports = {
    'config': path.resolve('./database', 'config', 'database.json'),
    'migrations-path': path.resolve('./database', 'migrations'),
    'models-path': path.resolve('./database', 'models'),
    'seeders-path': path.resolve('./database', 'seeders'),
}

2) INSTALAR =>
sequelize-cli -g init
npm install sequelize mysql2 -g
npm install sequelize auto -g
Luego de correr estoss 3 comandos en la consola, verificar en package.json que fueron instalados

3) AJUSTAR LA CONFIGURACION => En database/config/config.js, cambiar el puerto, el nombre de la BD, la password

4) IMPORTAR LOS MODELOS => Copiar esta linea en la consola y editar lo que corresponda (ni los <> ni los [] deben quedar). El dialecto es mysql
sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect]

5) MOVER LOS MODELOS CREADOS => Desde la ccarpeta creada por auto, mover los modelos creados a la carpeta nuestra. Si no quedaran archivos dentro, podemos borrar la inicial.

6) REQUERIR EL MODELO => En el Index de mis modelos, requerir ./init-models
const initmodels = require('./init-models')

7) CONFIGURAR EL INDEX => En el index de models, incluir las siguientes lineas debajo de los require:
db = initmodels(sequelize)
let db = {}



PARA CREAR LA BD, TABLAS Y RELACIONES CON WORKBENCH (video de consumo de apis propias en la hora 1:16)

1) VERIFICAR => Verificar si todos los metodos del modelo y las funciones estan todas async. Verificar si los controladores estan todos configurados con try y catch (para gestionar los errores). Verificar si todas las rutas estan configuradas con los 4 metodos (GET, GET:/id, POST, PUT:/id, DELETE:/id)

2) CREAR CONEXION => Abrir workbench y crear una nueva conexion y una nueva BD usando model (icono debajo del delfin), add diagram, cambiar nombre con schema editor

3) CREAR LAS TABLAS Y CAMPOS => Marcar las PKs (no FKs) y relacionarlas (sin tablas pivot)

4) CUSTOMIZAR LAS FKs => De las FKs creadas automaticamente, customizarlas para sacarles los snake_case, usando los camelCase

5) POBLAR LA BD CON DATOS => Pueden crearse los datos manualmente o bien intentar importarlos via json u otros medios

6) EXPORTAR => Para exportar el modelo y la estructura de datos, uso fordward engenie








*/