/*

JSX
Es una extensión de la sintaxis de JavaScript que produce elementos de React.

Se puede usar:
Dentro de estructuras de control como if y for.
Asignarlo a variables.
Aceptarlo como argumento o retorno en funciones.
Expresiones JavaScript.
Veamos un ejemplo tomado del código que genera create-react-app:

<div className="App">
  <header className="App-header">
    <img src="{logo}" className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>


JSX es similar a HTML pero con algunas diferencias importantes:
Algunas reglas importantes:
Toda etiqueta debe cerrarse por ejemplo <br> debera cerrarse a <br />.
Los componentes deben devolver un sólo elemento padre.
Algunos atributos HTML cambian como:
class por className.
for por htmlFor.
Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo:
<img alt="Avatar" src={user.avatarURL} />


----------------------------------------------------------------------------------------------------

JSX SE TRANSFORMA EN JAVASCRIPT
Por debajo JSX se transforma en código JavaScript. Por ejemplo, el siguiente código JSX.

<div class="active">Hola Mundo</div>

se transforma en el siguiente código JavaScript:

React.createElement("div", { className: "active" }, "Hola mundo");


Puedes utilizar el REPL de Babel para ver en qué se convierte el código JSX que escribes.
La ventaja de JSX es que, como es JavaScript, podemos:
Ver algunos errores en tiempo de compilación.
Asignar JSX a variables. Por ejemplo:

const el = <p>Hola</p>;

Retornar JSX desde métodos. Por ejemplo:

 renderText() {
   if (someCondition) {
     return <p>Hola</p>;
   } else {
     return <p>Mundo</p>;
   }
 }

Una restricción de JSX es que siempre debes tener un elemento raíz:

const el = (
  <div>
    <p>Hola</p>
    <p>Mundo</p>
  </div>
);

Este es un patrón muy común en las aplicaciones de React.

----------------------------------------------------------------------------------------------------

MEZCLANDO JSX CON JAVASCRIPT

Para mezclar código JavaScript en JSX utiliza corchetes ({}):

const style = "active";
const title = "Hola Mundo";

<div className={style}>{title}</div>;

Una restricción de JSX es que no puedes utilizar if, else, while o for.
Para agregar condicionales utiliza el operador ternario:

<div>
  {
    condition
      ? <h1>Hola Mundo</h1>
      : null
  }
</div>

Para mostrar elementos de un arreglo o un objeto utiliza map:

const names = ["Jon", "Irma", "kEnAi"];

const jsx = (
  <ul>
    {names.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);


----------------------------------------------------------------------------------------------------

ESTILOS CSS INLINE EN JSX

Es posible definir y utilizar estilos inline en JSX:

let styles = {
  borderColor: "#999",
};

const jsx = <div style={styles}>Hola mundo</div>;


----------------------------------------------------------------------------------------------------

EVENTOS DEL DOM EN JSX

En JSX se utilizan los eventos estándar del DOM como onclick, onchange, onkeydown, ... pero utilizando camelCase: onClick, onChange, onKeyDown, ...

<button onClick={alert("Hola")}></button>

Fíjate que utilizamos corchetes ({}) para escribir nuestro código JavaScript.
También podríamos pasar una función que es invocada cuando se genere el evento:

const saludar = () => alert("Hola!");
<button onClick={saludar}></button>;


Fíjate que no estamos invocando la función saludar, sólo la estamos pasando para que React la invoque cuando ocurra el evento.

*/
