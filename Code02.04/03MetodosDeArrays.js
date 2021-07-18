let notas = [10, 4, 5, 8, 9, 2, 7]

// .map() = Recibe como parametro un callback y recorre cada uno de los elementos 
// del array. La logica de lo que sucede dentro del callback la determino yo

let notasEnEscalaCien = notas.map(function(numero){
    return numero *10;
});
console.log (notasEnEscalaCien);


// .filter() = Recibe tambien un callback en el cual colocamos las condiciones del filtro, Recorre un array 
// y devuelve un nuevo array con los datos que pasaron la condicion

let notasAprobadas = notas.filter(function(numero){
    return numero >=7;
});
console.log (notasAprobadas);

// .reduce() = Recibe tambien un callback, que recibe 2 parametro (acumulador y elemento actual). Retorna solo un valor unico ya que su
// finalidad es reducir el array a su maxima expresion

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});
console.log (sumaNotas);

// .foreach() = Recibe un callback. Su finalidad es iterar el array (Ejecutar repetidamente una serie de operaciones (rutina)
// hasta satisfacer una determinada condición.). No devuelve nada.

notas.forEach(function(valor, indice){
    console.log("En la posicion " + indice + " tengo el valor " + valor);
});
