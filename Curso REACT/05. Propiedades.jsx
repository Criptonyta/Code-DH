/*

PROPIEDADES (props)

Son valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado props, el cual puede recibir diferentes tipos de datos, como:

Strings
Numbers
Booleans
Arrays
Objects
Functions
React Elements
React Components
Las props son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.

El componente las recibe como atributos que se pasan a través de JSX.

Por ejemplo, podemos pasar un atributo name al componente Welcome:

<Welcome name="Jon" />
<Welcome name="Irma" />

Si defines el componente en una clase, las props se reciben en el constructor de la clase:

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}

Si defines el componente como una función, las props se reciben como un parámetro de la función:

const Welcome = (props) => {
  return <h1>{props.name}</h1>;
};


*/
