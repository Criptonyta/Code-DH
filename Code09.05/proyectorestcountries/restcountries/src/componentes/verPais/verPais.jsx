import { Component } from "react";
import Pais from "../pais/pais";

class VerPais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pais: [],
      busquedaPais: "Brazil",
      url: "https://restcountries.com/v3.1/name/",
    };
  }

  apiCall(url, pais, resultado) {
    fetch(url + pais)
      .then((response) => response.json())
      .then((data) => resultado(data));
  }

  actualizarData = (data) => {
    this.setState({ pais: data });
  };
  componentDidMount() {
    this.apiCall(
      "https://restcountries.com/v3.1/name/",
      this.state.busquedaPais,
      this.actualizarData
    );
    console.log("Componente montado");
  }
  componentDidUpdate() {
    console.log("Componente actualizado");
  }
  buscarNuevoPais = (data) => {
    let paisBuscado = document.getElementById("busquedaPais").value;
    this.setState({ busquedaPais: paisBuscado });
    this.apiCall(this.state.url, paisBuscado, this.actualizarData);
    document.getElementById("busquedaPais").value = "";
  };

  render() {
    let elPais = this.state.pais;
    let contenido;
    if (elPais.length === 0) {
      contenido = <h3>Espere mientras procesamos el resultado...</h3>;
    } else {
      contenido = (
        <div className="container-pais">
          {elPais.map((pais, i) => (
            <Pais item={pais} indice={i} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <h1>Buscador de información sobre paises</h1>
        <div className="buscador">
          <input
            className="input"
            type="text"
            placeholder="Indicá el pais a buscar"
          ></input>
          <button
            className="button"
            id="busquedaPais"
            onClick={() => this.buscarNuevoPais()}
          >
            Buscar
          </button>
        </div>

        <div>{this.state.contador}</div>
        {contenido}
      </div>
    );
  }
}

export default VerPais;
