function Pais(props) {
  return (
    <div key={props.indice} className="containerP">
      <p>
        <span className="country">Pais:</span> {props.item.name}
      </p>
      <p>
        <span className="continents">Continente:</span> {props.item.continents}
      </p>
      <p>
        <span className="capital">Capital:</span> {props.item.capital}
      </p>
      <p>
        <span className="population">Poblacion:</span>
        {props.item.population}
      </p>
      <img
        className="flag"
        src={props.item.flags.png}
        alt="Bandera del pais"
      ></img>
    </div>
  );
}

export default Pais;
