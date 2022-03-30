/*

ESTADO

El state son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.

El estado tiene 3 características importantes:
Es inmutable.
No se puede modificar directamente.
Es asíncrono.

Para hacer cambios hay que hacer uso del método setState().
El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.
La propagación del estado fluye de forma unidireccional y descendiente (hacia abajo), esto significa que un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades.
En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.
Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado state.
Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la vista.

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola Mundo",
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

En este ejemplo estamos definiendo una componente Welcome que inicializa el estado con una llave title. En el método render estamos obteniendo el valor de esa llave con this.state.title.
Para cambiar el estado utiliza el método setState:

this.setState({
  title: "Hello World",
});



*/
