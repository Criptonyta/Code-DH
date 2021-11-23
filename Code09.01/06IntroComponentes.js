/*

COMPONENTES => Son piezas funcionales y fundamentales de la aplicación.Permiten separar las distintas partes que conforman la estructura de un sitio web en pequeñas piezas independientes y reutilizables. Estas están pensadas para que trabajen de forma aislada, pero que hagan parte de un "todo".
Son funciones nativas de JavaScript que se ejecutan cada vez que sea necesario. Como cualquier función, pueden estar atadas, o no, a una serie de argumentos que nos permiten generar que este bloque de código pueda ser reutilizable, estableciendo que genere partes de la interfaz de usuario con información realmente dinámica.

---------------------------------------

- STATELESS => Internamente implementan un return con logica sencilla que entrega una estructura HTML.

import React from “react”;

function NavBar() {
    return ( 
        <nav>
            <a ref = "/home">Home</a>
            <a ref = "/productos">Productos</a>
        </nav>
    );
})

export default NavBar

---------------------------------------

- CREANDO UN COMPONENTE => 1) Importar REACT desde el index.js 2) Asegurarse de exportar el componente a implementar (en este caso, en NavBar.js):

EN index.js
import React, {Component} from "react";

EN NavBar.js
export default NavBar;

---------------------------------------

- IMPLEMENTANDO UN COMPONENTE => Crear un archivo Js con el nombre de la funcion que llevara dentro en la ruta /src/components/NavBar.js

import NavBar from "./components/NavBar.js"

function App () {
    return (
        <div className = "App">
            <NavBar />
        </div>
    )
}

*/