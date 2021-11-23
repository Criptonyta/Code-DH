/*

React es una librería de JavaScript para crear proyectos del lado del front-end. Su implementación permite que la carga de la aplicación sea más rápida y performante. ¿Cómo lo logra? React usa componentes, que no son otra cosa más que bloques de código reutilizables, los cuales debemos crear una sola vez y luego usarlos cuándo y dónde sea necesario.

DIFFING => React realiza el proceso de Diffing que consiste en comparar las dos versiones (Virtual DOM y DOM real) para luego realizar el Reconciliation, que es la actualización de las partes de la vista que cambiaron y evitar la necesidad de actualizar todo el sitio.

    DOM REAL: es la una interfaz de objetos que interpreta nuestro HTML. Es el mismo que estudiamos cuando vimos JavaScript en el front-end. Sirve para acceder a nuestros elementos y poder manipularlos.
    
    Virtual DOM: el Virtual DOM es una interpretación liviana del DOM. La biblioteca de JavaScript, React, permite la comparación del Virtual DOM con el DOM, y hace modificaciones solo en los elementos que hayan cambiado. Este proceso requiere menor procesamiento ya que no precisa volver a renderizar todo el DOM, sino que solamente actualiza los elementos que hayan sufrido cambios.


¿Cómo convive la estructura MVC con React?

React viene a ser la V dentro de este patrón de diseño, es decir, todo lo que hagamos con React está pensado para ser las vistas de nuestra aplicación.

Hasta ahora, todo lo habíamos construido directamente dentro de Express y desde allí respondíamos a las peticiones hechas por el cliente con las vistas, pero antes de que la vista viajara al navegador necesitábamos dejar todo listo (datos, variables y demás).

Ahora, con la potencia que nos dan las APIs, vamos a poder construir todo el front-end con React y consumir los datos del back-end a través de peticiones asincrónicas. De esa manera podremos separar radicalmente la lógica del back-end de la lógica del front-end.

*/