/*

URL DEL CURSO => https://jonmircha.com/react


INTRODUCCION

React es una biblioteca JavaScript altamente eficiente y declarativa que se utiliza para crear interfaces de usuario interactivas.
Fue creado por el ingeniero de Facebook Jordan Walke y se lanzó en mayo de 2013.
En los últimos años, ha superado a sus rivales y ha establecido firmemente su dominio.

React te insita a crear código declarativo (indicas el qué, no el cómo) y orientado a componentes.
Un componente es un pieza de código que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones.

Cada componente reaccionará a cambios internos (en su estado) o externos (nuevas propiedades recibidas) y se volvera a redibujar (renderizado) en la interfaz. Para ello React utiliza su Virtual DOM que es una copia del DOM original del navegador para sólo hacer los cambios necesarios en los nodos que hayan reaccionado y evitar redibujar todo el árbol del DOM.

Para poder interactuar con la interfaz React tiene eventos sintéticos que son una abstracción de los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerías para crossbrowsing (bye bye jQuery).

----------------------------------------------------------------------------------------------------


¿POR QUE USARLO?

Ventajas:
Alto rendimiento: React es conocido por su alta eficiencia y flexibilidad. Se puede integrar fácilmente con diferentes tecnologías. Se puede usar tanto para el lado del cliente como para el lado del servidor.
Recursos abundantes : como Facebook la mantiene, existe una gran cantidad de documentación y recursos disponibles en la web que hace que la curva de aprendizaje sea muy fluida.
Compatibilidad con versiones anteriores : la transición o migración de versiones anteriores a nuevas es bastante fácil y retrocompatible.
Estructura de componentes fácil de mantener: la arquitectura basada en componentes de React ayuda a aumentar la reutilización del código y facilita bastante el mantenimiento de proyectos a gran escala.
Fuerte Comunidad: React tiene más de 1300 colaboradores en GitHub.
Documentación Multi idioma: Actualmente React tiene su documentación en diferentes idiomas entre ellos el español.
Flujo de datos unidireccional: el enlace de datos unidireccional y hacia abajo (de componentes padres a hijos), ayuda a garantizar que los cambios realizados en la estructura del componente hijo no afecten la estructura del componente padre.

Desventajas:
Complejo: muchos desarrolladores pueden encontrar en un inicio demasiado compleja la curva de aprendizaje de React en comparación con otros frameworks como el caso de Vue. Dicha complejidad puede ser innecesaria para proyectos a pequeña escala.
JSX: el uso de JSX agrega otra capa de complejidad. JSX es un preprocesador que agrega extensión de sintaxis XML a JavaScript. Aunque JSX ayuda a codificar el código React de una manera más segura y rápida, puede ser difícil de comprender para los nuevos desarrolladores.
Necesidad de un ecosistema de muchas herramientas: React requiere una amplia gama de herramientas para funcionar correctamente y ser compatible con otras tecnologías.
Problemas de SEO: se sabe que las SPAs (Single Page Applications) creadas con React se enfrentan a problemas de indexación por parte de los rastreadores y bots de motores de búsqueda.

¿Quién lo usa?
Grandes empresas como Netflix, Yahoo, Airbnb, Instagram, Facebook, WhatsApp, PayPal, Microsoft, la BBC, Aeroméxico, etc. Incluso grandes sitios de información y noticias que antes usaban WordPress se están migrando a sitios hechos con JAM stack y React como librería principal, tal es el caso de Smashing Magazine.

Entorno y Herramientas de Desarrollo.
React es una librería y no técnicamente un framework. Por lo que sólo maneja la capa de Vista, tomando como referencia el modelo MVC (Modelo Vista Controlador) para el desarrollo de aplicaciones web. Sin embargo cuenta con una amplia gama de herramientas, librerías y frameworks para complementar su entorno de desarrollo, por ejemplo:

Node.js y NPM: Para ejecutar el entorno de desarrollo e instalar dependencias.
Yarn: Un gestor de paquetes JavaScript.
Webpack: Es un empaquetador de archivos para aplicaciones JavaScript.
React Router: Librería para manejar rutas declarativas.
Redux: Es una librería para gestionar el estado de las aplicaciones JavaScript.
Flux: Es la arquitectura de aplicaciones que Facebook usa para crear aplicaciones web del lado del cliente.
Create React App: Un conjunto de configuraciones preestablecidadas para comenzar a trabajar con React ejecutando un sólo comando.
Gatsby: Es un framework basado en React para desarrollar rápidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS, Markdowns, APIs, etc.
Next.js: Es un framework basado en React para desarrollar sitios estáticos y aplicaciones del lado del servidor (SSR - Server Side Rendering).
GraphQL: Es un lenguaje de consulta de datos para APIs.
React Bootstrap: Es la versión del popular framework frontend Bootstrap pero creado con componentes hechos en React.
Material UI: Es un framework frontend inspirado en Material Design creado con componentes hechos en React.
React Native: Es un framework basado en React para la creación de aplicaciones móviles y nativas.
React Dev Tools Chrome: Es una extensión para Chrome que agrega de herramientas de depuración para React.
React Dev Tools Firefox: Es una extensión para Firefox que agrega de herramientas de depuración para React.
Simple React Snippets for VSCode: Es una extensión para Visual Studio Code que nos permite usar atajos para agilizar la escritura de código React.


----------------------------------------------------------------------------------------------------

CREATE REACT APP

Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con create-react-app, una aplicación de consola que nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante: Programar en React.
Para crear una aplicación utilizamos el comando npx create-react-app seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:

npx create-react-app my-app

Cuando ejecutas ese comando create-react-app va a crear una carpeta llama my-app con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.
Ingresa a la carpeta my-app y ejecuta el proyecto con los siguientes comandos:

cd my-app
npm start

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.
¡Felicidades!, has creado tu primera aplicación con React.

¿Qué incluye create-react-app?
Un proyecto creado con create-react-app, además de React, incluye librerías como:
Webpack: que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.
Babel: que nos permite usar nuevas características de ECMAScript.
PostCSS que es una librería para el procesamiento de CSS.
Jest que es una librería para testing.
etc.
Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil.

*/
