// Una plantilla es un archivo que posee una estructura HTML predefinida, el cual nos ayuda a generar varios archivos más a partir de este mismo.
// Un motor de plantillas es aquel que nos permite generar una plantilla en sí, para que nuestra aplicación pueda usarla. Otra de las particularidades de un motor de plantillas es que nos permite generar archivos dinámicos que contengan información proveniente de los controladores.

// FUNCIONAMIENTO => Por un lado tenemos la vista de un archivo EJS y por otro los datos de una base de datos. Ambos archivos caen en el motor de plantillas para juntarlos y hacer que los datos aparezcan de forma dinamica, respetando el formato

// VENTAJAS => 
// 1) Fomenta la ORGANIZACION del codigo en capas separando responsabilidades
// 2) Permite REUTILIZAR las partes de vistas que se repiten (header, footer, etc)
// 3) Evita modificaciones recurrentes si es que los datos cambian mucho
// 4) Podemos usar JS embebido en el HTML

// PASOS =>
// 1) INSTALAR EJS dentro de la carpeta del proyecto (salvo que hubieramos usado express-generator)
//          npm i ejs
// 2) CONFIGURAR EJS indicandole a express cual es el motor que usaremos. En el app.js, usamos el metodo set. 
app.set('view engine', 'ejs');
// Todas las vistas se guardaran por defecto en la carpeta views. Si queremos cambiarla:
app.set('views', './carpeta-de-vistas');   // El primer parametro es lo que queremos configurar,
                                           // el segundo, el valor de la configuracion
// 3) CREAR LAS VISTAS que necesitemos con la extension .ejs
// 4) RENDERIZAR las vistas