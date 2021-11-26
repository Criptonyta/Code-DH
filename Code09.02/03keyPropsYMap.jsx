/*
Asumamos que recibimos dentro de un componente, a través de las props, un array de objetos literales que representan la base de datos que queremos mostrar en nuestra vista.
Ya tenemos esa información dentro del componente y nuestro objetivo es que, por cada objeto literal dentro del array, se renderize una etiqueta <li> de HTML.
¿Cómo podremos llevar esto a cabo? ¿Será suficiente un iterador tipo for?
Dentro de un componente de React no es posible usar iteradores. Es por ello que debemos reemplazarlos por métodos que iteren asincrónicamente nuestra información. Es por esta razón que nos adentraremos nuevamente a ver el .map(), pero no sin perder de vista qué son las key props y por qué de la importancia de su existencia.


.map() => Le estamos pasando al componente MiLista, los usuarios que se encuentran en el array usuarios y que son asignados a la variable items. El array es pasado dentro del atributo con nombre items y va entre llaves, las que nos permiten escribir tipos de datos de Js que no sean cadenas de texto
*/

const usuarios = ["Maru", "Uriel", "Daniel"];
<MiLista items={usuarios} />;

// En src>components>componente.js, primero recibimos props como parametro de la funcion, luego en la estructura JSX que hubieramos definido, iteramos con map sobre el array recibido

function MiLista(props) {
  return (
    <div>
      <ol>
        {props.items.map((item) => (
          <li> {item} </li>
        ))}
      </ol>
    </div>
  );
}

/*
KeyProps => Ayudan a REACT a identificar cuales elementos son los que han cambiado. Para usarlas hay que tener en cuenta: 
1) Solo es necesario agregar keys cuando devolvemos un array de elementos iguales
2) La key debe ser unica entre sus elementos hermanos
3) Las keys no se muestran en el HTML final (a menos que usemos el id)

LAs keys deben ser dadas dentro del mapeo del array para darle a los elementos una identidad unica y estable
*/

function MiLista(props) {
  return (
    <div>
      <ol>
        {props.items.map((item, i) => (
          <li key={i + item}> {item} </li>
        ))}
      </ol>
    </div>
  );
}
