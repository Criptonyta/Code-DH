/*

CHILDREN => Los componentes children son todos aquellos elementos que son pasados entre etiquetas de un componente padre.A través de ellos vamos a tener la capacidad de enviar (como si fuera una prop) cualquier tipo de estructura HTML. Debemos usarlos cuando no sabemos exactamente cual sera el contenido del contenedor padre.

1) Configuracion: Dentro del objeto literal props, existe la propiedad children, con la que podremos traer todos los hijos que definamos dentro del componente padre. 

function Saludo (props) {
        return (
            <div>
                <h1> { props.titulo } </h1>
                <p> { props.mensaje } </p>
            {props.children}                // le indicamos al comp donde debe imprimir los hijos si hubiera
            </div>
            );
}

export default Saludo;


2) Implementacion: Al momento de llamar al componente creado, se usa la etiqueta de apertura y de cierre para completar dentro del contenido lo que haga falta

<main>
    <Saludo>
        // determinamos el contenido de A
    </Saludo>
    <Saludo>
        // determinamos el contenido de B
    </Saludo>
</main>



*/
