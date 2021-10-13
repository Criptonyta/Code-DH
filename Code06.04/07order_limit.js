// Para ordernar (ORDERBY), poner limite (LIMIT) a la visualizacion de los productos consultados y desde donde comienza a consultar (OFFSET), los comandos son iguales a los de sql. Lo que cambia bastante es la sintaxis:

Producto.findAll({
    order: [ // trabaja con un array dentro de otro array indicando la columna y el orden
        ['precio', 'DESC']
        ['reputacion', 'ASC'] //como es un array de array, puedo poner varios criterios de ordenamiento
    ]
})


Producto.findAll({
    limit: 5 // trabaja dentro de un objeto literal indicandole el valor
})

Producto.findAll({
    offset: 5 // trabaja dentro de un objeto literal indicandole el valor
})