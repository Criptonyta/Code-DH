/*
STATE => El estado de un componente es aquel que permite que el mismo pueda guardar información internamente. Este es un objeto literal (clave/valor) que almacenará la información que deseemos.
Cuando el state cambia, el componente responde volviendo a renderizar.

setState() => Es un método permite actualizar el estado cuando lo necesitemos, logrando así que sea el mismo componente quien se encargue de administrar esta información. Programa una actualizacion al objeto state de un componente


*/

//constructor => Es un metodo necesario para poder definir la estructura del componente. Puede recibir las props en el contructor
// super => sirve para heredar las props de su componente padre
// this.state => se utiliza para crear un objeto literal
class contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: props.value,
    };
  }

  // en todos los metodos que no sean el contructor, debemos usar set.State
  incrementar() {
    this.setState({
      valor: this.state.valor + 1,
    });
  }

  // con el evento onclick iremos modificando con el metodo incrementar, el estado del componente
  render() {
    return <button onClick={this.incrementar}></button>;
  }
}
