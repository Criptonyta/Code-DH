/*
¿Qué pasaría si dentro de nuestro componente, en el lugar que esperamos recibir un array para iterarlo, recibimos un string? ¿El método .map() seguirá funcionando? ¿El componente se renderizará bien?. A medida que la app crece, podemos ir capturando una gran cantidad de errores apartir de la verificacion de tipos. 

PropTypes => Con ellas podemos determinar específicamente el tipo de dato de una props. Para usarlo, primero es necesario instalar el paquete desde npm:

1) Instalacion
npm install --save prop-types

2) Utilizacion - Desde src>components>componente.js
import PropTypes from 'prop-types'

Function Saludar (props) {
    render() {
        return (
            <h1>Hola { props.nombre }</h1>
        );
    }
}
Saludar.propTypes = {
    nombre: PropTypes.string
};
export default Saludar;


-------------------------------------------------

DefaultProps => Permiten definir valores por defecto para determinadas props. Puede ser definido como una propiedad en el propio componente, para establecer las props predeterminadas que recibira el mismo. Se expresa en forma de objeto literal conteniendo el nombre de la propiedad y el valor por defecto que queremos que tenga la prop.


1) Instalacion
No es necesaria ya que es una fucionalidad nativa de REACT

2) Utilizacion - Desde src>components>componente.js

Function SeteoBoton (props) {
    ...
}
SeteoBoton.defaultProps = {
    color: blue              // Significa que si no se indica el color para props.color, se asignara azul
};
export default Saludar;


*/
