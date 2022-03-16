{
  /*
Creando la primera ruta y renderizando el componente específico
Cuando estábamos aprendiendo sobre Express, comenzamos a ver qué eran las rutas y para qué se usaban.
Esos conceptos nos sirvieron bastante y ahora también retomaremos algo de los mismos, pues con React Router el proceso de ruteo es algo similar, ya que esta librería propone renderizar un componente dependiendo de la ruta presente en la barra de direcciones del navegador.
Lo anterior se logra gracias a algunos componentes que ya nos brinda preparados la librería y que nos permiten gestionar esta tarea.

Paso a Paso:

1) Instalar el modulo react-router-dom
npm install react-router-dom

*/
}

// 2) Importar el modulo y sus componentes
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// 3) Englobar el componente <App/> dentro del componente <BrowserRouter/>
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// 4) El componente Route lleva dos atributos (path="" y component={}). Ambos nos ayudan a configurar que componentes se deben renderizar en base a la ruta a la que estamos accediendo, mas para ello debemos importar tal componente para poder usarlo
// Al usar la props exact={true}, permite evitar errores de renderizado, ya que sino siempre mostraria la home (/) y no el resto de las paginas

import Nosotros from "./componentes/nosotros";
import Contacto from "./componentes/contacto";
import Inicio from "./componentes/inicio";

<div>
  <Route path="/nosotros" exact={true} component={Nosotros} />
  <Route path="/contacto" exact={true} component={Contacto} />
  <Route path="/" exact={true} component={Inicio} />
</div>;

//   5) Configuramos el componente Link: Este se asimila con el enlace tradicional <a> y lleva dos props: exact="" y to="". Con ellas vamos configurando el sistema de ruteo desde el archivo App.js

import Nosotros from "./componentes/nosotros";
import Contacto from "./componentes/contacto";
import Inicio from "./componentes/inicio";

<div className="App">
  <Link to="/nosotros" exact="true">
    Nosotros
  </Link>
  <Link to="/contacto" exact="true">
    Contacto
  </Link>
  <Link to="/" exact="true">
    Inicio
  </Link>

  <Route path="/nosotros" exact={true} component={Nosotros} />
  <Route path="/contacto" exact={true} component={Contacto} />
  <Route path="/" exact={true} component={Inicio} />
</div>;
