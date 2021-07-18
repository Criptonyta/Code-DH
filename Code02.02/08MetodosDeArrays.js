let notas = [3, 5, 10, 9, 7, 8, 8, 8, 4];
console.log(notas)

// Push (agrega elementos al final agregandose secuencialmente)
notas.push(1);
notas.push(4);
console.log(notas);

// Pop (quita el ultimo elemento, podria guardarlo en una variable para reeutilizarlo)
let elUltimo = notas.pop();
console.log(elUltimo);

// Shift (quita el primer elemento, podria guardarlo en una variable para retilizarlo)
let elPrimero = notas.shift();
let elSegundo = notas.shift();
console.log(elPrimero);
console.log(elSegundo);

// Unshift (agrega el valor indicado al principio, tambien en orden secuencial)
notas.unshift(1);
notas.unshift(4);
console.log(notas);

// IndexOf (devuelve la primera posicion del valor buscado en el array. Si no lo encuentra da -1 )
let posicionDelOcho = notas.indexOf(8);
console.log(posicionDelOcho);

// LastIndexof (devuelve la ultima posicion del valor buscado en el array. Si no lo encuentra da -1 )
let posicionDelCuatro = notas.lastIndexOf(4);
console.log(posicionDelCuatro);

// Join (Nos devuelve un string, no un array. Dentro del () debo indicar que va en el medio de cada valor)
let resultadoJuntado = notas.join(' ');
console.log(resultadoJuntado);


