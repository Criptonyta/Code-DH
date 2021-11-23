/*

JSX => Es una extensión de JavaScript que sirve para generar bloques de código HTML, pero con sentencias de JavaScript. Es muy parecido al HTML, pero con ciertas particularidades que lo hacen diferente. Este puede ser utilizado única y exclusivamente dentro del entorno de React.

Pero si se parece tanto a HTML, ¿por qué no usamos solo HTML?
React propone este formato ya que es consciente de que, al momento de generar la estructura interna de un componente, es muy seguro que mucho de ese código lo vamos a querer dinámico y reutilizable. 

---------------------------------------

- REGLAS DE USO Y DIFERENCIAS CON HTML:
1) Siempre deben cerrarse las etiquetas
2) En stateless, si hubiera mas de un elemento, debemos agruparlos en una una div por cada return
3) en HTML, las clases se llaman class, pero en JSX debemos usar className. tabindex de HTML se llama tabIndex
4) Todas las instrucciones terminan con />. Por ejemplo:
<img src= “/img/logoDH.jpg” alt=”Logo de Digital House”/>
5) Las variables que quiero que se renderizen, se encierran entre {}. Por ejemplo:
<ul> { productos.map( producto => <li> producto </li> ) } </ul>
6) Para iterar sobre un array solo podemos usar .map() .filter() o .reduce()

function Name () {
    const name = "Daniel"
    return ( <h1 className= "title">{name}</h1>)
}



*/