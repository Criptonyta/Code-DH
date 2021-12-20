import { Component } from "react";
import Pais from "../pais/pais";

class BuscarPais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listadoPaises: [],
      url: "https://restcountries.com/v3.1/all",
    };
  }

  componentWillMount() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listadoPaises: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let paises = this.state.listadoPaises;
    let contenido;
    if (paises.lenght === 0) {
      contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = (
        <div className="containerPaises">
          {paises.map((pais, i) => (
            <Pais item={pais} indice={i} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <h1>Todos los paises</h1>
        {contenido}
      </div>
    );
  }
}

export default BuscarPais;
