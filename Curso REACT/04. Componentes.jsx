/*

COMPONENTES

En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación.
Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras.
El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.
Se le pueden pasar datos a un componente a través de algo llamado props y devuelven a React elementos que describen lo que debe verse en pantalla.
En React los datos fluyen de forma unidireccional, de componentes padres a componentes hijos.
React te permite definir componentes como clases o como funciones.

--------------------------------------------------------------------------------------------------

TIPOS DE COMPONENTES

Como una clase que extiende de Component con un método render:

import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}

O como una función que retorna lo que se va a renderizar:

const Title = () => {
  return <h1>Hola Mundo</h1>;
};

--------------------------------------------------------------------------------------------------

UTILIZANDO UN COMPONENTE

Para utilizar un componente debes importarlo y después incluirlo en tu JSX como se muestra en el siguiente ejemplo:

import React from "react";
import Title from "./Title";

function App {
    return <Title />;
}


*/
