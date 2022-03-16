// Componentes que nos provee React Router

// 1) Importo los componentes que quiero usar con el metodo de desestructuracion desde la libreria, asi:
// import {BrowsertRouter, Link, Route, Switch} from react-router-dom

// 2) Configuro los componentes segun las necesidades

// BrowserRouter => Es el enrutador general, necesario para administrar las rutas del proyecto

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// Link => Define las rutas de nuestro proyecto. Usa como atributo el to="/" que siempre va a llevar a alguna etiqueta <a>. Se implementa asi:

<Link to="/">Home</Link>;

// Switch y Route => Ambos buscan la similitud de las rutas entre si hasta encontrar una que coincida para renderizar. Cuando <Switch /> es renderizado, busca entre sus componentes hijos <Route /> hasta que las rutas coinciden y finalmente esa sera renderizada. Route lleva dos atributos (path y component). Ambos nos ayudan a configurar que componentes se deben renderizar en base a la ruta a la que estamos accediendo, mas para ello debemos importar tal componente para poder usarlo

<Switch>
  <Route path="/nosotros">
    <Nosotros />
  </Route>
  <Route path="/contacto">
    <Contacto />
  </Route>
  <Route path="/">
    <Inicio />
  </Route>
</Switch>;
