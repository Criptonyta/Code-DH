{
  /*
Cómo hacer switch de rutas y componentes
Vamos a conocer cómo se puede hacer un "switch" de componentes dependiendo de la ruta y adicionalmente cómo poder renderizar un componente "404 not found" para cuando la ruta ingresada por la persona que visita nuestra aplicación, no coincida con ninguna de la rutas generadas dentro de la aplicación.
*/
}

// 1) Importacion

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// 2) Implementacion. Switch va a permitir renderizar el componente Error404 solamente si la ruta ingresada no coincide con ninguna de las que hubieramos establecido. Switch nos permite que solo se renderice el primer hijo Route que coincida con la locación o URL actual. En caso que no usemos Switch todas las rutas que cumplan con la condición se renderizan.

import Nosotros from "./componentes/nosotros";
import Contacto from "./componentes/contacto";
import Inicio from "./componentes/inicio";

<>
  <Link to="/nosotros" exact="true">
    Nosotros
  </Link>
  <Link to="/contacto" exact="true">
    Contacto
  </Link>
  <Link to="/" exact="true">
    Inicio
  </Link>
  <BrowserRouter />
  <Switch>
    <Route path="/nosotros" component={Nosotros} />
    <Route path="/contacto" component={Contacto} />
    <Route path="/" exact={true} component={Inicio} />
    <Route component={Error404} />
  </Switch>
  ;
</>;
