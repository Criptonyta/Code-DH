/*
Los eventos dentro de un componente de React son funciones o métodos que van a tener toda la lógica que se realizará cuando el usuario interactúe con el componente.

Así como sucede en JavaScript Vanilla, dentro de React podemos encontrar los típicos eventos click, hover, focus, blur, submit, entre otros, y su implementación, si bien es un poco diferente, no dista mucho de lo que tradicionalmente solemos hacer cuando queremos implementar un evento a un elemento determinado.


EVENTOS => son manejados atraves de metodos que van a guardar la logica que realizara una operacion cuando el usuario interactue con el componente. Para implementarlos, a) se escriben en la etiqueta, como si fueran un atributo b) se nombran usando la palabra on seguida del nombre del evento usando camelCase c) se usan las llaves y la palabra reservada this para asociarlo con el metodo que queremos
Cualquier componente puede utilizar eventos, pero si el evento modifica el estado del componente, este debe ser stateful (es decir con estado)


METODO => Dentro del componente, defino los metodos (mandarAviso) que establecen que hacer cuando llamamos al evento. Para definirlo, usamos la misma sintaxis que para una funcion pero sin escribir la palabra function

class Navbar extends Component {
    mandarAviso() {
        alert("Acabas de hacer click!")
    }
    return (
        <div>
        <h1>Fijate lo que sucede cuando haces click aqui!</h1>
        </div>
    );
}

export default Navbar

*/

const { Component } = require("react");

class Contenedor extends Component {
  saludar() {
    alert("Bienvenido al sitio");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.saludar}></h1>
      </div>
    );
  }
}
