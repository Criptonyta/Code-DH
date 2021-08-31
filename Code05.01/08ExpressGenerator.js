// express-generator, tal como su nombre lo indica, es un generador de proyectos de Express. ¿Y esto qué significa? Básicamente que, corriendo un solo comando en consola, vamos a tener un gran set de archivos y su correspondiente estructura, listos para utilizar.

// Si bien esto parece ser una GENIALIDAD, en ocasiones no es tan así. Después de todo, hay que tener en cuenta que cualquier herramienta que resuelva "muchas" cosas por nosotros, a su vez, nos está abstrayendo y alejando del entendimiento de "lo que hay bajo el capot".

// PARTICULARIDADES =>
// 1) Trae una carpeta bin que incluye el archivo www, que tiene definida la logica interna para que la app corra 
// 2) La carpeta views trae dos vistas iniciales (index.ejs y error.ejs)
// 3) No trae la carpeta controllers por lo que habra que crearla

// INSTALACION =>

// 1) npm install express-generator -g || La -g lo instala globalmente

// 2) express myApp --ejs             || Uso el modulo express, seguido de un nombre para la app

// 3) npm install                      ||En la carpeta del proyecto, instala las dependencias


// EJECUCION =>

// nodemon bin/www                     || Se ejecuta en localhost:3000