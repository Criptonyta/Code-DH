//node_modules              (Carpeta de modulos locales del proyecto)

//public                    (Carpeta de archivos publicos. Aquí pondremos todos los recursos estáticos. Aquellos que no pasan por el sistema de ruteo de Node.js: imágenes, CSS y JavaScript de front-end)
//  css                     (Nuestra carpeta de hojas de estilo. Aquí también pondremos las librerías de CSS, si no las estamos usando desde una CDN)
//  img                     (Nuestra carpeta de imágenes. Podremos tener subcarpetas si necesitamos separar, por ejemplo, imágenes de productos y de usuarios)
//  js                      (Nuestra carpeta de JavaScript de front-end. Aquí pondremos las librerías y los scripts propios que utilicemos en las vistas. También podemos armar subcarpetas si tenemos muchos archivos)

//src                       (Carpeta de archivos funcionales de la app. Aqui pondremos todo nuestro proyecto NODE)
//  controllers             (Carpeta donde van todos los controladores. Aquí tendremos un archivo por cada entidad: usuarios, productos, etc. Cada controlador contendrá un objeto literal y cada uno de sus métodos, por lo general, corresponderán a una ruta)
//  views                   (Carpeta donde van las vistas (Ej. archivos .HTML). Aquí pondremos todas nuestras vistas. En nuestro caso serán archivos ejs)
//      partials            (Aquí pondremos archivos parciales. Es decir, aquellos que se repiten en varias páginas como el header, el menú, el footer, etc)
//      products            (Aquí pondremos todas las vistas que tengan relación con los productos, como los listados, el detalle, los formularios de creación, etc)
//      users               (Aquí pondremos todas las vistas que tengan relación con los usuarios, como el registro, el login, el perfil, etc.)

//  routes                  (Carpeta para los archivos de rutas. Aquí tendremos un archivo por cada entidad. Cada ruteador contendrá un objeto literal y cada método, por lo general, corresponderá a una ruta. Los middlewares de rutas se aplican en estos archivos.)

//  database                (Aquí tendremos nuestra conexión con la base de datos. Normalmente los modelos estarán aquí también.)

//app.js                    (Entrypoint del proyecto. Nuestro punto de entrada, contendrá todos los módulos de aplicación)

//package.json              (Contiene el registro de las versiones específicas de los paquetes que se instalaron en nuestro proyecto)

//package-lock.json         (Contiene el registro de los paquetes que el proyecto requiere para funcionar y otras configuraciones del proyecto)

