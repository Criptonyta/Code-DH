/*
STATEFULL => Los componentes stateful, o con estado, son los que pueden cambiar su contenido interno en funcion de eventos externos. No son funciones nativas de Js, sino que trabajan con un nuevo tipo de dato: Las clases. Son utilizados cuando esperamos algun tipo de interaccion por parte del usuario y que apartir de alli, se cambie el interior de nuestro componente, es decir, son reactivos.
Son aquellos que poseen información interna que a su vez puede ser modificada por estos componentes. Estos permiten dejar de depender de las props para trabajar con información dinámica.
*/

// Aclaro que quiero traer el objeto Component
import React, { Component } from "react";

// Uso la palabra reservada class para definir el componente (asignandole el nombre que quiero) usando la palabra reservada extends seguida de Component (la que hace referencia al objeto creado con la importac de REACT)
class NombreComponente extends Component {
  // Aplico el metodo render para renderizar
  render() {
    // Metodo return permite definir los elementos a renderizar
    return console.log("Hola"); // codigo a renderizar
  }
}

export default NombreComponente; // exporto el componente
