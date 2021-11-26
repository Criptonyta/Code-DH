/*

PROPS =  Son las propiedades de un componente, es decir, son los datos internos de un componente (un pedazo de codigo reutilizable), permitiendo que varios de sus datos sean reutilizables a nivel de vista. Representan información que es enviada al momento en el que un componente es utilizado. Estas nos van a permitir que la información interna del componente sea variable para que podamos tener estructuras HTML realmente dinámicas y 100% reutilizables.

Para usarlo, al momento de crear el componente, debemos pasarle props como parametro a la funcion. Lo siguiente es ubicar props en las llaves para indicar donde debe enviarse. De esa forma el contenido se convierte en dinamico. Al momento de invocar al componente, deben pasarse los valores para titulo y texto

En src>components>componente.js

function Saludo (props) {
    return (
        <div>
        <h1> { props.titulo } </h1>
        <p> {props.texto} </p>
        </div>
    );
}

Al momento de invocar al componente, lo hago de esta manera:

<Saludo
    titulo = "Hola mundo!"
    texto = "Que lindo dia para programar hoy"
/>

Podria usar el mismo componente para saludar en distintos idiomas por ejemplo:

<Saludo
    titulo = "Hello World!"
    texto = "What a beautifull day to code today"
/>

*/