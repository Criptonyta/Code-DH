/*
Al ser una librería de JavaScript, React pertenece al conjunto de paquetes que gestiona npm. Es decir, necesitamos npm para instalar el ambiente de desarrollo.
Tan solo debemos ejecutar una sencilla línea de código en nuestra terminal. Lo único que deberemos tener en cuenta es que previamente deberemos ubicarnos en la carpeta en donde queremos que se guarde el proyecto. Una vez hecho esto vamos a tener la aplicación de React lista para ser usada.
Sin embargo, para poder ejecutar la aplicación es necesario otro comando sencillo, uno que ya conocemos: npm start.

PASOS:

1) cd "mi-proyecto"
2) npm init react-app "mi-proyecto" || npx create-react-app "mi-proyecto"
3) npm start
4) verificar la pagina en localhost:3000

Obs: el proyecto debe ser creado en minuscula y separado por guion sin espacios


ESTRUCTURA DE CARPETAS CREADAS:

mi-proyecto
    node_modules    => Almacena todos los paquetes npm que requiere para funcionar
    public          => Almacena entre otros el index.html (sera el que cargue cuando se ingresa a la URL)
        favicon.ico
        index.html  => Contiene la div con id=root, donde se inserta la app de REACT 
        logo.jpg
        robots.txt
    src             => Todo el trabajo de REACT se hace aqui. 
        app.css
        app.js
        app.test.js
        index.css
        index.js    => Este archivo permite renderizar el div con id=root
        reportWebvitals.js
        setupTEsts.js
    .gitignore
    package-lock.json
    package.json    => Configura las dependencias y versiones del proyecto
    readme.md


*/