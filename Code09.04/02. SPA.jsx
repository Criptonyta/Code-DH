// SPA o también llamada Single Page Application es una aplicación web en la cual solo existe un único punto de entrada, generalmente un archivo index.html. Todo el contenido de la aplicación será cargado y renderizado dentro del mismo archivo index.html.
// Dentro de este contexto, aunque solo tengamos un archivo, seguimos contando con la posibilidad de tener varias vistas que se irán intercambiando en su visualización, produciendo así el efecto de que dentro de la aplicación existen varias "páginas" o "archivos" de contenido, cuando la realidad es que todo se está mostrando desde un único archivo.
// Una SPA ofrece, a su vez, una experiencia de usuario bastante agradable y fluida. Al no tener que cargar otro archivo distinto, la carga de contenido será mucho más rápida. Y es aquí en donde el Virtual DOM de React cobra un real protagonismo. Gracias a su existencia será posible identificar qué contenido de la vista tiene que cambiar y qué contenido tiene que mantenerse.
// El concepto de SPA es algo relativamente nuevo y es posible de implementar gracias a librerías como React. Y cobra aún más sentido al tener ruteadores de la aplicación que permitan elegir dinámicamente qué componente deberá mostrarse en pantalla según la ruta en la barra de aplicaciones del navegador.

// CARACERISTICAS:

// HTML UNICO => Estamos tratando con un sitio que consiste en una gran etiqueta HTML. Si bien esta puede tener muchas otras dentro, es solo un archivo HTML el que se carga. El cual irá cambiando y actualizándose en base a las acciones del usuario y lo que nosotros determinemos en nuestro código.

// VIRTUAL DOM => Al no haber una navegación entre archivos, el Virtual DOM con su capacidad de renderización parcial va a ocultar ciertos componentes, y mostrar otros, para dar ese sentido de navegación. Sin embargo, en realidad solo estamos cargando el mismo gran archivo HTML.

// REACT ROUTER => Ya que no hay navegación entre archivos, necesitamos de una librería como React Router para definir lo que queremos que ocurra cuando el usuario navegue por nuestro sitio.
